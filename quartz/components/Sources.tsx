import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface SourceEntry {
  id?: string
  type?: string
  rel_path?: string
  drive_url?: string
  pages?: number
  note?: string
}

function basename(p?: string): string {
  if (!p) return ""
  const parts = p.split("/")
  return parts[parts.length - 1] ?? p
}

const Sources: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter as any
  const sources: SourceEntry[] | undefined = fm?.sources
  if (!Array.isArray(sources) || sources.length === 0) return null

  const withDrive = sources.filter((s) => s?.drive_url)
  if (withDrive.length === 0) return null

  return (
    <div class={classNames(displayClass, "sources-block")}>
      <div class="sources-header">原始檔案（{withDrive.length}）</div>
      <ul class="sources-list">
        {withDrive.map((s) => {
          const label = s.id ?? basename(s.rel_path) ?? "source"
          const pages = s.pages ? ` · ${s.pages} 頁` : ""
          return (
            <li>
              <a href={s.drive_url} target="_blank" rel="noopener noreferrer" class="source-link">
                <span class="source-icon" aria-hidden="true">📄</span>
                <span class="source-label">{label}</span>
                <span class="source-meta">{pages}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Sources.css = `
.sources-block {
  margin: 1rem 0 1.5rem 0;
  padding: 0.75rem 1rem;
  background: var(--lightgray);
  border-left: 3px solid var(--secondary);
  border-radius: 4px;
  font-size: 0.85rem;
}
.sources-block .sources-header {
  font-weight: 700;
  color: var(--darkgray);
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  letter-spacing: 0.03em;
}
.sources-block .sources-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sources-block .sources-list li {
  margin: 0.2rem 0;
  padding: 0;
}
.sources-block .source-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--dark);
  text-decoration: none;
  border-bottom: 1px dotted var(--gray);
  padding-bottom: 1px;
}
.sources-block .source-link:hover {
  color: var(--secondary);
  border-bottom-color: var(--secondary);
}
.sources-block .source-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
}
.sources-block .source-label {
  font-family: var(--codeFont);
  font-size: 0.82rem;
  word-break: break-all;
}
.sources-block .source-meta {
  color: var(--gray);
  font-size: 0.75rem;
}
`

export default (() => Sources) satisfies QuartzComponentConstructor
