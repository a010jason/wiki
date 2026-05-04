import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SiteNav: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const root = pathToRoot(fileData.slug!)
  const link = (sub: string) => `${root}/${sub}`
  return (
    <nav class={classNames(displayClass, "site-nav-top")} aria-label="Site navigation">
      <a class="site-nav-home" href={root}>← 首頁</a>
      <div class="site-nav-links">
        <a href={link("concepts/")}>概念</a>
        <a href={link("entities/")}>實體</a>
        <a href={link("synthesis/")}>洞察</a>
        <a href={link("journal/")}>日誌</a>
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
