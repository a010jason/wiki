import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-wrapper")}>
      <h2 class={classNames(undefined, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
      <div class="brand-subtitle">Wiki 知識庫</div>
    </div>
  )
}

PageTitle.css = `
.page-title-wrapper {
  margin: 0 0 0.6rem 0;
}
.page-title {
  font-size: 1.5rem;
  margin: 0;
  font-family: var(--titleFont);
  line-height: 1.2;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
