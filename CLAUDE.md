# CLAUDE.md — LLM Wiki 規範

> 這份檔案是 wiki 的「規則書」。每個 wiki-* skill 都會讀這份。
> 持有者：Jason（醫療 AI PM @ ebmtech.com）　|　建立日期：2026-05-04

---

## 角色脈絡

- **使用者：** 醫療 AI PM at ebmtech（jason@ebmtech.com）
- **領域：** 醫療影像 AI、PACS / HIS / FHIR、臨床流程、醫療法規
- **這個 wiki 的目的：** 個人長期知識累積（管理 + 醫療 AI + 學習筆記），跨專案、跨工作。
- **不該放這裡的東西：** ebmtech 公司內部機密、客戶資料、credentials、未公開的產品策略。

---

## Source 路徑常數

`PDF_ROOT` 是課程 / 教科書 PDF 的本機根目錄（Google Drive 本機掛載）。所有 reference manifest 的 `sources[].rel_path` 都是相對於這個根：

```
PDF_ROOT = /Users/jason/Library/CloudStorage/GoogleDrive-a010jason@gmail.com/我的雲端硬碟/AI PM 資料/管理技能與策略
```

**完整路徑 = `PDF_ROOT` + `/` + `rel_path`**。Subagent 用這個拼出絕對路徑後直接 `Read`。

換電腦或 Google Drive 改掛載點時，只改這裡一個地方，全 wiki manifest 不必動。

---

## Namespace 規範（9 個 + 2 個 underscore）

| Namespace | 放什麼 | 例子 |
|---|---|---|
| `concepts/` | 抽象概念、術語、方法論 | DICOM、FHIR、AI 輔助診斷、JTBD |
| `entities/` | 具體實體：人、公司、產品 | Sectra、GE Healthcare、EBM-PACS、某教授 |
| `skills/` | PM 技能、框架、工作方法 | OST、PR-FAQ、Working Backwards |
| `references/` | 外部資料：法規、論文、規格 | FDA-510k、台灣醫材法、DICOM Std |
| `synthesis/` | **Jason 自己的洞察、判斷、結論** | 「為什麼 EBM 該優先做 X」之類 |
| `journal/` | 時間序工作日誌（按月） | 2026-05.md |
| `projects/` | 進行中的專案頁 | 深耕計畫、ai-presentation |
| `_archives/` | 歸檔（wiki-rebuild 用） | 不要手動寫 |
| `_raw/` | 草稿暫存區（drop zone） | 隨手丟，wiki-ingest 會收 |

---

## 命名與格式

### 檔名
- 不必用 triple-underscore（Mehmet/Logseq 慣例）。Obsidian 用**資料夾結構**就好：`concepts/DICOM-WL.md`
- 中文檔名 OK，但**英文優先**（容易交叉引用、不踩編碼坑）
- 一律用 `kebab-case` 或正常中文，**不用 snake_case**（Obsidian 內 wikilink 易碎）

### Frontmatter（每頁必填）

```yaml
---
type: concept | entity | skill | reference | synthesis | journal | project
domain: medical-ai | pacs | regulation | mgmt | learning | ...
confidence: high | medium | low      # synthesis 頁尤其需要
created: 2026-05-04
updated: 2026-05-04
---
```

### 交叉引用
- 用 Obsidian 標準 `[[資料夾/檔名]]` 語法
- 例：`參考 [[concepts/DICOM-WL]] 和 [[entities/Sectra]]`

---

## 中文編碼硬規則（這部分絕對不能違反）

### 1. NFC normalization
- 一律用 **NFC（Normalization Form C）**
- 不要混用 NFC / NFD（macOS 檔名是 NFD，內容是 NFC，會踩雷）
- 寫入前若不確定，先做 `unicodedata.normalize('NFC', text)`

### 2. 單線程 ingest（**重要**）
- **禁止**多個 Claude Code session 同時對同一個 wiki page 寫入
- 平行 agent 已被 Mehmet 證實會把 unicode 字元偷偷簡化（umlauts → ASCII，中文可能類似）
- wiki-ingest 一次只跑一個

**例外與 race-safety SOP**（2026-05-21 Wave 2/3 並行驗證後新增）：

如果**必須**並行（如 user 同時跑兩條獨立 ingest pipeline，內容 page 不重疊但**協調檔不可避免重疊**），下列協調檔被視為 high-contention：

- `content/.manifest.json`
- `content/log.md`
- `content/hot.md`
- `content/index.md`
- `content/references/*-textbook.md`（章節狀態表所在的 reference manifest 頁）

對這些檔的寫入流程：

1. **Edit 前**先 `Read` 完整最新內容（如果讀過後超過 ~5 分鐘 → 重讀）
2. **Edit 失敗時**（linter 或他人 in-flight write 觸發 mtime mismatch）→ 重讀整檔再決定 chunk，不要硬重試
3. **Append-only 內容**（log.md、hot.md Recent Activity）優先用 `>> file` 或 sentinel-based Edit，避免大範圍 string replace
4. **JSON 寫入**（manifest）寫完立刻 `python3 -c "import json; json.load(open(...))"` 驗證
5. **commit 前**`git status` 確認沒有未預期的 untracked / modified（另一 session 可能剛寫完還沒 commit）
6. **發現他 session 漏 log**（page 已寫但 log.md 沒記）→ 補一條 BACKFILL log 條目而不是覆寫他的工作

CLAUDE.md 中文編碼硬規則第 2 條的「禁止多個 session 同時寫入同一 wiki page」**沒改** — 上述只是協調檔（不是 content page）的並行 race-safety 補強。Content page 永遠單線程寫入。

### 3. 繁體中文，**不簡轉繁**
- 一律繁體中文輸出
- 若 source 是簡體，**保留原樣**作為 raw quote，不自動轉繁
- 自己寫的內容、page summary、frontmatter 一律繁體

### 4. 醫療術語英文優先
- DICOM、FHIR、HL7 這類縮寫**保持英文**，不要翻成中文
- 但解釋可以用中文

---

## Provenance Tagging

每個 claim 應該標註來源類型：

| 標籤 | 何時用 |
|---|---|
| `^[extracted]`（預設） | 直接從 source 抓的事實 |
| `^[inferred]` | LLM 自己合成出來的結論 |
| `^[ambiguous]` | sources 之間有矛盾 |

Page 層級可以用 frontmatter：
```yaml
provenance:
  extracted: 12
  inferred: 3
  ambiguous: 0
```

---

## Visibility / 公私分層

Wiki 預設**全部公開**（GitHub Pages 上線）。只有觸及下列類別才打 `visibility/internal` tag（pages 級即可，不必 per-section）：

| 類別 | 例子 |
|---|---|
| **EBM 內部** | 提到 ebmtech 產品名、客戶醫院名、未公開策略、salary/comp、內部政治 |
| **指名判斷** | 對特定教授／同事／競品 PM 的人物評價（不是學術討論的範疇） |
| **生涯與情緒** | 想離職的理由、對主管的不滿、職涯下一步盤算 |
| **PII** | 客戶資料、特定醫師姓名與診斷案例 |
| **未公開研究** | 投稿中的論文核心發現、合作中的研究細節 |

### 不算 internal（保持公開）

- 「Jason 是 PM @ ebmtech」這類身份脈絡
- 把方法論套用在自己工作的 **hypothetical** 思考（沒提到具體產品/客戶）
- 方法論 self-critique（「這個論點證據薄弱」）— 學術誠信加分項
- 對公開人物（Karpathy、Doerr 等）的判斷
- 學習中的 open questions

### `_meta/critique/` 的定位

`_meta/critique/<slug>.md` 是 `wiki-challenge` 產出的**結構化批判記錄**，**不是強制隔離**：
- 公開的 synthesis 頁可以包含自我批判段落（Counter-arguments / Open Questions），不必都搬到 `_meta/`
- 只有當批判內容**觸及上述 internal 類別**時，才需要把該段移到 `_meta/critique/`
- `_meta/` 已在 `quartz.config.ts` `ignorePatterns` 排除，不會發布到網站

---

## Lifecycle Taxonomy

每個 content page 都應該有 `lifecycle:` frontmatter，標示這頁的批判成熟度。**4 個狀態，單向往前推進，可以倒退**：

| Lifecycle | 意義 | 觸發方式 | 公開頁徽章 |
|---|---|---|---|
| `draft` | 剛 ingest 進來的原始 distillation，**未經批判** | wiki-ingest 預設 | 灰色「草稿」 |
| `challenged` | 跑過 wiki-challenge，**質疑層做完**，brittle/unsupported claim 已標出 | wiki-challenge 自動 | 黃色「已批判」 |
| `validated` | 質疑+對標都做完，且 unsupported / brittle claim 已修或弱化 | 手動（將來可能有 wiki-validate skill） | 綠色「已驗證」 |
| `stale` | 超過 6 個月沒更新、或事實過期、或被新頁取代 | wiki-lint 自動偵測 | 紅色「過期」 |

### 規則

1. **不可跳級**：`draft` → `challenged` → `validated` 是單向；想直接從 `draft` 標 `validated` 不行
2. **可以倒退**：`validated` 頁如果新證據顯示 claim 有問題，可以降回 `challenged` 或 `draft`，並更新 `lifecycle_changed`
3. **每次變更都記錄**：`lifecycle_changed: YYYY-MM-DD` 必填
4. **特殊頁不掛 lifecycle**：`index.md`、`hot.md`、`log.md`、`graph.md`、`_meta/*`、`_archives/*` 不需要

### 看法

- 介面上：每頁右上角的 type badge（概念 / 實體 / 洞察…）旁會出現 lifecycle 徽章
- 首頁 `stats-row` 有一格「批判成熟度」分布
- 命令列：`grep -h '^lifecycle:' content/**/*.md | sort | uniq -c`

---

## 進入 Synthesis 的規則

`synthesis/` 是 Jason 自己的判斷區。原則：

1. 必須**多源**：synthesis page 至少要連到 2 個其他 page（concept 或 entity）
2. 必須標 `confidence`
3. 立場改變時**新增段落**而不是改舊段落（保留思考軌跡）
4. 標 `[[journal/2026-05]]` 連到當時的 context

---

## 強制 log 規則

**任何對 wiki 的變動都必須在完成後寫一筆 `log.md`，不得省略。**

涵蓋範圍（不限於 ingest）：

| 類型 | 例子 | log type |
|---|---|---|
| 內容新增 / 更新 | ingest PDF、audit、backfill | `INGEST` / `AUDIT` / `UPDATE` |
| 系統 / 工具變更 | Quartz 設定、GitHub Actions、rclone | `DEPLOY` / `CONFIG` |
| 資料修正 | 補 source URL、修 broken link、frontmatter 更正 | `FIX` / `UPDATE` |
| 封鎖 / 待辦 | source 找不到、待補資料 | `BLOCKED` |
| 規範更新 | 修改 CLAUDE.md | `DOCS` |

log 格式（append-only，新的加在最後）：
```
- [YYYY-MM-DDTHH:MM+08:00] TYPE key=value key=value ...
```

---

## Manifest vs Reference Page 分工（2026-05-22 釐清）

`content/.manifest.json` 與 `content/references/*.md` 兩邊都記錄 source 元資料，**容易 drift**。明確分工：

| 欄位 | manifest | reference page `sources[]` |
|---|---|---|
| `rel_path` | ✅ 必填 | ✅ 必填 |
| `sha256` / `content_hash` | ✅ 必填（dedup + verify 用） | ✅ 必填 |
| `pages` | ✅ 必填（aggregate stats 用） | ✅ 必填 |
| `ingested_at` / `ingest_method` / `pages_created` / `pages_updated` | ✅ 必填（ingest 事件 log） | ❌ 不放 |
| **`drive_url`** | ❌ **不放** | ✅ 必填（user-facing 連結） |
| `note`（人類說明） | 可放（簡潔 1 行） | ✅ 詳細放在這 |
| `ingested_commit` | ❌ 不放（manifest 本身會被 git 追） | ✅ 必填 |

**mental model**：

- **manifest = ingest 事件 audit log + 機器讀的識別表**（誰、何時、用什麼方法、產出哪些頁）
- **reference page = user-facing 名片**（這是什麼書、哪個檔、怎麼點開）

**為什麼 drive_url 不放 manifest**：截至 2026-05-22 manifest 142 個 sources 沒有任何一個有 drive_url 欄、也沒有任何 script / skill 讀它 — 是 dead duplication。Quartz 渲染讀的是 reference page，user 點 Drive 連結也走 reference page。

**Skill 寫入時的對應行為**：

- `wiki-ingest` 寫 manifest entry 時**不要嘗試填 drive_url**；想加 Drive 連結就改寫 reference page
- 任何 reconcile script **不要從 reference 反推 drive_url 到 manifest**（這是反向錯誤）
- 發現某 source manifest 缺 drive_url **不視為 drift**（正常狀態）

---

## Skill 行為規範

### wiki-ingest
- 跑之前先跑 wiki-status 確認 delta
- 中文 source **單線程**處理，不要平行
- 完成後更新 `index.md`、`log.md`、`hot.md`
- **commit 前**跑 `python3 scripts/check-index-completeness.py` 驗證 disk-vs-index 對齊（0 missing / 0 phantom）；若已啟用 `.githooks/pre-commit`，commit 時會自動擋

### 完整性檢查與 pre-commit hook（防 ingest 漏更新 index）

`scripts/check-index-completeness.py` 做雙向 diff：

- **missing**：disk 有頁但 `index.md` 沒引用 → wiki-ingest 漏做收尾步驟
- **phantom**：`index.md` 引用但 disk 沒頁 → 拼錯或頁被刪

兩者任一不為 0，script 返回 exit 1。預期常態 `0 / 0`。

**啟用 pre-commit hook（一次性設定，每次 clone repo 後做一次）：**

```sh
git config core.hooksPath .githooks
```

啟用後，commit 含 `content/*.md` 變更時會自動跑 check，不過就 abort。繞過用 `git commit --no-verify`（不建議）。

歷史教訓：2026-05-22 LINT 發現 46 個 page 漏列 index.md，根因是 ESG / 倫理 / 治理 batch ingest（62 new pages）跳過了 index 更新步驟，且事後沒人補。Hook 防的就是這類遺漏。

### PDF Ingest 操作規範（強制 SOP）

**所有 PDF 必須先跑 `pdfinfo` 決定路徑，再開始讀。** Read 工具 PDF 的 32 MB 上限是「渲染後 response」的限制，每頁渲染圖 3-5 MB，主 agent 累積爆 context 是常見死法。Subagent 邊界是釋放 image render 的唯一方式。

#### 起手決定路徑（不來回）

| 條件 | 路徑 |
|---|---|
| 頁數 ≤ 30 **且** session 累積 < 60 頁 image render | 路徑 A：主 agent 讀 |
| 頁數 > 30，**或** session 累積 ≥ 60 頁 | 路徑 B：subagent 分批 |
| 頁數 > 100 | 強制路徑 B |

#### 路徑 A：主 agent 讀

chunk 規則：

| 條件 | 一次讀幾頁 |
|---|---|
| 頁數 ≤ 10 且 < 2 MB | 全部一次 |
| 頁數 ≤ 15 且 < 3 MB | 8 頁/批 |
| 檔案 ≥ 5 MB | 5 頁/批 |
| 其他 | 5 頁/批 |

**撞 32 MB 上限** → 切半重試**一次**（5→3 或 3→2）。再爆 → **升路徑 B，不在主 agent 繼續切**。根因常是 session 累積，主 agent 切半救不了。

#### 路徑 B：subagent 分批

1. 主 agent 用 chunk 規則切 batch
2. 每 batch dispatch 一個 subagent（Explore 或 general-purpose）
3. Subagent return distilled text → 主 agent 累積
4. 全 batch 完才寫 wiki 頁

**Subagent prompt template（強制統一回傳結構）：**

```
讀 PDF <絕對路徑> 第 X-Y 頁，distill 成下列五欄結構回傳。
純文字回傳，不要附渲染圖、不要附原文段落。

- 主概念：本批的核心 concept / framework / claim
- 關鍵實證：研究、數據、量表名（含 cite 來源）
- 案例：source 提到的真實案例（含公司 / 人名 / 情境）
- 反例 / 質疑：source 自己提到的限制、反論、boundary condition
  （給將來 wiki-challenge 用，沒有就寫「source 未提」）
- 量表 / 頁碼：頁碼錨點，方便事後回查

讀完最後一頁才回傳，不要中途回報。
```

**Subagent 失敗** → 主 agent 派**新** subagent 改策略（縮 batch / 改 prompt）。**不在主 agent context 重試。**

#### 升級路徑（L2 / L3）

只在**單頁渲染就爆 32 MB** 的罕見場景啟動（高解析醫學影像、掃描書本、滿版向量 diagram）。**動 source 檔前先告知使用者。**

| Level | 場景 | 動作 |
|---|---|---|
| **L2-A 純文字繞過** | 文字為主、可丟圖 | `pdftotext -layout "<file>" out.txt` 然後 Read out.txt |
| **L2-B Ghostscript 壓縮** | 需保留圖但解析度可降 | `gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -o small.pdf "<file>"` |
| **L2-C 物理切檔** | 結構 OK、頁數太多 | `qpdf "<file>" --pages . 1-N -- part1.pdf` |
| **L3 渲圖逐頁** | 上述全失敗 | `pdftoppm -r 100 "<file>" page -png` 逐張 Read |

**選擇順序：L2-A → L2-B → L2-C → L3**（純文字最便宜，渲圖最貴）。

#### 完成驗證

```bash
pdfinfo "<file>" | awk '/Pages:/ {print $2}'   # 真實頁數
shasum -a 256 -- "<file>"                       # hash 比對 manifest
```

Frontmatter 註記 `ingest_method: read-main | read-subagent | pdftotext | gs-ebook | qpdf-split | pdftoppm` 方便追溯保真度。

#### 禁止行為

- 主 agent 直接讀 > 30 頁 PDF（一律路徑 B）
- 主 agent session 累積 ≥ 60 頁 image render 後還繼續 Read 渲圖
- chunk 切半重試超過一次（直接升路徑 B）
- 用「後段都是文字」這類**事後合理化**選擇 fallback —— 真正原因是 context 累積
- 只讀前 N 頁就 distill（OB Ch1 踩雷案，125 頁只讀 70 頁）
- ingest 後不驗證 hash 與 page count

### wiki-query
- 預設 Tier 1（只看 frontmatter）
- 找不到才升到 Tier 2 / 3
- 使用者說「快答」一律 Tier 1

### claude-history-ingest
- **小心 credentials**：MEMORY.md 可能含 1Password 路徑、token。Ingest 前要過濾
- 只 ingest 對 wiki 有長期價值的內容（決策、研究結論），不要 ingest 流水帳對話

---

## Open Questions（驗證中）

| 問題 | 怎麼觀察 |
|---|---|
| Ar9av 是否保留手動編輯 | 手編一頁後跑 wiki-ingest，看編輯有沒有被吃 |
| 中文 NFC vs NFD 行為 | 寫一段繁中後 ingest，diff 比對 |
| 50+ 頁時 schema 是否壞 | 累積 30 頁時跑 wiki-lint |

---

## 相關檔案

- 完整研究脈絡：`/Users/jason/Desktop/2026專案/AI PM/references/llm-wiki-research-2026-05-03.md`
- 個人 memory 索引：`/Users/jason/.claude/projects/-Users-jason-Desktop-2026---AI-PM/memory/MEMORY.md`
