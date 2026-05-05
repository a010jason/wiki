#!/usr/bin/env bash
# pdf-plan.sh <pdf-path>
# Print page count + size + recommended chunk plan for safe wiki-ingest reads.
# Avoids the Read tool's 32 MB PDF response limit.

set -euo pipefail
f="${1:-}"
[ -z "$f" ] && { echo "usage: $0 <pdf-path>"; exit 1; }
[ -f "$f" ] || { echo "not found: $f"; exit 1; }

pages=$(pdfinfo "$f" 2>/dev/null | awk '/^Pages:/ {print $2}')
size_b=$(stat -f "%z" "$f" 2>/dev/null || stat -c "%s" "$f")
size_mb=$(python3 -c "print(round($size_b / 1048576, 2))")
hash=$(shasum -a 256 -- "$f" | awk '{print $1}')

# chunk size based on size & page count
if   (( $(echo "$size_mb < 2"  | bc -l) )); then chunk=$pages; reason="<2MB, all at once"
elif (( $(echo "$size_mb < 5"  | bc -l) )); then
  if [ "$pages" -lt 30 ]; then chunk=$pages; reason="<5MB & <30p, all at once"
  else chunk=15; reason="<5MB & 30+p, 15/batch"; fi
elif (( $(echo "$size_mb < 10" | bc -l) )); then chunk=10; reason="5-10MB, 10/batch"
else chunk=5; reason=">10MB, 5/batch"
fi

batches=$(( (pages + chunk - 1) / chunk ))

echo "pdf:    $f"
echo "size:   ${size_mb} MB"
echo "pages:  $pages"
echo "hash:   $hash"
echo "chunk:  $chunk pages/batch ($reason)"
echo "plan:   $batches batches"
i=1; start=1
while [ $start -le $pages ]; do
  end=$(( start + chunk - 1 )); [ $end -gt $pages ] && end=$pages
  echo "  batch $i: pages $start-$end"
  start=$(( end + 1 )); i=$(( i + 1 ))
done
