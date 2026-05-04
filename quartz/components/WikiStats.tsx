import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CATEGORY_ORDER: Array<{ slug: string; label: string }> = [
  { slug: "concepts", label: "概念條目" },
  { slug: "entities", label: "實體" },
  { slug: "skills", label: "技能" },
  { slug: "references", label: "參考" },
  { slug: "synthesis", label: "洞察 / 編譯摘要" },
  { slug: "journal", label: "日誌條目" },
  { slug: "projects", label: "專案" },
]

const LIFECYCLES: Array<{ key: string; label: string; cls: string }> = [
  { key: "draft", label: "草稿", cls: "lifecycle-draft" },
  { key: "challenged", label: "已批判", cls: "lifecycle-challenged" },
  { key: "validated", label: "已驗證", cls: "lifecycle-validated" },
  { key: "stale", label: "過期", cls: "lifecycle-stale" },
]

// Special pages that should not be counted in any category or lifecycle stats
const SKIP_SLUGS = new Set(["index", "graph", "hot", "log"])

const WikiStats: QuartzComponent = ({ allFiles, displayClass }: QuartzComponentProps) => {
  const categoryCounts = new Map<string, number>()
  const lifecycleCounts = new Map<string, number>()

  for (const f of allFiles) {
    const slug = f.slug ?? ""
    if (!slug) continue
    if (SKIP_SLUGS.has(slug)) continue
    if (slug.startsWith("_meta/") || slug.startsWith("_archives/") || slug.startsWith("_raw/")) continue
    if (slug.startsWith("tags/")) continue

    const top = slug.split("/")[0]
    if (top && top !== slug) {
      categoryCounts.set(top, (categoryCounts.get(top) ?? 0) + 1)
    }

    const fm = f.frontmatter as any
    const lc = fm?.lifecycle as string | undefined
    if (lc && LIFECYCLES.some((l) => l.key === lc)) {
      lifecycleCounts.set(lc, (lifecycleCounts.get(lc) ?? 0) + 1)
    }
  }

  const visibleCategories = CATEGORY_ORDER.filter((c) => (categoryCounts.get(c.slug) ?? 0) > 0)

  return (
    <div class={classNames(displayClass, "wiki-stats")}>
      <div class="stats-row">
        {visibleCategories.map((c) => (
          <div class="stat-item">
            <div class="stat-number">{categoryCounts.get(c.slug) ?? 0}</div>
            <div class="stat-label">{c.label}</div>
          </div>
        ))}
      </div>

      <h3 class="stats-heading">批判成熟度</h3>
      <div class="stats-row lifecycle-stats">
        {LIFECYCLES.map((l) => (
          <div class={`stat-item ${l.cls}`}>
            <div class="stat-number">{lifecycleCounts.get(l.key) ?? 0}</div>
            <div class="stat-label">{l.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

WikiStats.css = `
.wiki-stats .stats-heading {
  margin-top: 1.5rem;
  margin-bottom: 0.6rem;
  font-size: 1rem;
  color: var(--darkgray);
  font-weight: 700;
  position: relative;
  padding-left: 0.85rem;
}
.wiki-stats .stats-heading::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.15em;
  bottom: 0.15em;
  width: 4px;
  border-radius: 2px;
  background: var(--secondary);
}
`

export default (() => WikiStats) satisfies QuartzComponentConstructor
