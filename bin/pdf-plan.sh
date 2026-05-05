#!/usr/bin/env bash
# pdf-plan.sh <pdf-path>
# Print page count + size + recommended chunk plan for safe wiki-ingest reads.
# Avoids the Read tool's 32 MB *rendered* PDF response limit.
#
# v2: chunk by page count (rendered images can be 5-10× the source PDF size).
#     Anything but the smallest gets chunked aggressively.

set -euo pipefail
f="${1:-}"
[ -z "$f" ] && { echo "usage: $0 <pdf-path>"; exit 1; }
[ -f "$f" ] || { echo "not found: $f"; exit 1; }

pages=$(pdfinfo "$f" 2>/dev/null | awk '/^Pages:/ {print $2}')
size_b=$(stat -f "%z" "$f" 2>/dev/null || stat -c "%s" "$f")
size_mb=$(python3 -c "print(round($size_b / 1048576, 2))")
hash=$(shasum -a 256 -- "$f" | awk '{print $1}')

# v2 rule: chunk by page count, with size as secondary brake.
# Multimodal rendering of slide PDFs blows up rendered response size,
# so we go aggressive even on small files.
if   [ "$pages" -le 10 ] && (( $(echo "$size_mb < 2" | bc -l) )); then
  chunk=$pages; reason="≤10p & <2MB, all at once"
elif [ "$pages" -le 15 ] && (( $(echo "$size_mb < 3" | bc -l) )); then
  chunk=8; reason="≤15p & <3MB, 8/batch"
elif (( $(echo "$size_mb >= 5" | bc -l) )); then
  chunk=5; reason="≥5MB (image-heavy), 5/batch"
else
  chunk=5; reason="default safe, 5/batch (slide PDFs render big)"
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

echo ""
echo "tip: if a batch still hits the 32MB limit, halve the chunk and retry."
