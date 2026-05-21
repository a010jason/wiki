#!/usr/bin/env python3
"""
disk-vs-index 完整性檢查。

對應 CLAUDE.md「### wiki-ingest」條：
> 完成後更新 `index.md`、`log.md`、`hot.md`

雙向偵測：
1. **missing**：disk 上有頁但 index.md 沒引用（ingest skill 漏更新 index）
2. **phantom**：index.md 引用但 disk 上沒頁（拼錯 / 頁被刪 / 該補建）

用法：
    python3 scripts/check-index-completeness.py [--quiet]

退出碼：
    0 — disk 與 index 完全對齊
    1 — 有 missing 或 phantom
"""
import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CONTENT = REPO_ROOT / "content"
INDEX = CONTENT / "index.md"

NAMESPACES = ["concepts", "entities", "skills", "references", "synthesis", "projects", "journal"]
SKIP_DIRS = {"_meta", "_archives", "_raw", "tags"}
SKIP_SLUGS = {"index", "log", "hot", "graph", "README"}


def collect_on_disk():
    """所有 content/*/{slug}.md 的 slug（排除 _meta / _archives / _raw / 特殊頁）。"""
    on_disk = {}
    for ns in NAMESPACES:
        ns_dir = CONTENT / ns
        on_disk[ns] = set()
        if not ns_dir.is_dir():
            continue
        for md in ns_dir.rglob("*.md"):
            slug = f"{ns}/{md.relative_to(ns_dir).with_suffix('').as_posix()}"
            if Path(slug).name in SKIP_SLUGS:
                continue
            on_disk[ns].add(slug)
    return on_disk


def collect_index_refs():
    """index.md 內所有 [[ns/slug]] 或 [[ns/slug|alias]] 引用。"""
    text = INDEX.read_text(encoding="utf-8")
    refs = set()
    for m in re.finditer(r"\[\[([^\]\|#]+)", text):
        target = m.group(1).strip()
        refs.add(target)
    return refs


def main():
    quiet = "--quiet" in sys.argv
    on_disk = collect_on_disk()
    refs = collect_index_refs()

    all_disk = set().union(*on_disk.values())

    missing_by_ns = {}
    for ns, slugs in on_disk.items():
        m = sorted(slugs - refs)
        if m:
            missing_by_ns[ns] = m

    phantom = sorted(
        r for r in refs
        if any(r.startswith(f"{ns}/") for ns in NAMESPACES) and r not in all_disk
    )

    total_missing = sum(len(v) for v in missing_by_ns.values())
    total_phantom = len(phantom)

    if total_missing == 0 and total_phantom == 0:
        if not quiet:
            print(f"✓ index.md 與 disk 完全對齊（{len(all_disk)} pages）")
        return 0

    print(f"✗ index.md / disk 不對齊：missing={total_missing}, phantom={total_phantom}")
    print()

    if missing_by_ns:
        print("=== disk 有但 index 漏列（ingest skill 沒更新 index）===")
        for ns in NAMESPACES:
            if ns in missing_by_ns:
                print(f"\n### {ns} ({len(missing_by_ns[ns])}):")
                for s in missing_by_ns[ns]:
                    print(f"  {s}")

    if phantom:
        print(f"\n=== index 引用但 disk 無頁（phantom，需建頁或從 index 移除）===")
        for p in phantom:
            print(f"  {p}")

    print()
    print("修補：把 missing 條目補進 index.md 適當 section；phantom 條目從 index 移除或建頁。")
    return 1


if __name__ == "__main__":
    sys.exit(main())
