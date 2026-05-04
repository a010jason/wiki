import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// Top-level folders we want in the nav, in display order, with Chinese labels.
// Folders not in this list are ignored. A folder appears in the nav only if it
// has at least one content file at build time.
const NAV_ORDER: Array<{ slug: string; label: string }> = [
  { slug: "concepts", label: "概念" },
  { slug: "entities", label: "實體" },
  { slug: "skills", label: "技能" },
  { slug: "references", label: "參考" },
  { slug: "synthesis", label: "洞察" },
  { slug: "journal", label: "日誌" },
  { slug: "projects", label: "專案" },
]

const SiteNav: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const root = pathToRoot(fileData.slug!)
  const link = (sub: string) => `${root}/${sub}`

  const populated = new Set<string>()
  for (const f of allFiles) {
    const slug = f.slug ?? ""
    const top = slug.split("/")[0]
    if (top) populated.add(top)
  }

  const items = NAV_ORDER.filter((n) => populated.has(n.slug))

  return (
    <nav class={classNames(displayClass, "site-nav-top")} aria-label="Site navigation">
      <a class="site-nav-home" href={root}>← 首頁</a>
      <div class="site-nav-links">
        {items.map((item) => (
          <a href={link(`${item.slug}/`)}>{item.label}</a>
        ))}
        <a href={link("graph")}>關係圖譜</a>
        <a class="site-nav-cta" href={link("tags/")}>標籤</a>
      </div>
    </nav>
  )
}

SiteNav.css = `
.site-nav-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem 0 1rem 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--lightgray);
  font-size: 0.92rem;
  flex-wrap: wrap;
}
.site-nav-home {
  color: var(--darkgray);
  background-image: none;
  font-weight: 600;
  white-space: nowrap;
  &:hover { color: var(--secondary); }
}
.site-nav-links {
  display: flex;
  gap: 1.4rem;
  align-items: center;
  flex-wrap: wrap;
}
.site-nav-links > a {
  color: var(--darkgray);
  background-image: none;
  font-weight: 500;
  white-space: nowrap;
  &:hover { color: var(--secondary); }
}
.site-nav-links > a.site-nav-cta {
  background: var(--secondary);
  color: var(--light);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  &:hover { background: var(--tertiary); color: var(--light); }
}
`

export default (() => SiteNav) satisfies QuartzComponentConstructor
