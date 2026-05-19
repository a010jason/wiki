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

## Skill 行為規範

### wiki-ingest
- 跑之前先跑 wiki-status 確認 delta
- 中文 source **單線程**處理，不要平行
- 完成後更新 `index.md`、`log.md`、`hot.md`

### PDF Ingest 操作規範（強制 SOP）

#### 核心原則（必讀）

**主 agent 的 context 中，所有 image render 累積到 auto-compaction 前都不會釋放。**

- 「單頁太重」是 **source-side** 問題（L2-A/B/C/L3 fallback 處理）
- 「session 已累積太多」是 **context-side** 問題 — **更常見、更危險**

唯一能模擬「邊讀邊釋放」的機制：**subagent boundary**。Subagent return 那刻，它的 context 連同 image render 全消失，主 agent 只收 distilled text。

→ **長 PDF 預設用 subagent dispatch，不要主 agent 自己讀**。彈性下放到 subagent 層，主 agent 保乾淨。

#### 起手式：pdfinfo + 決策樹

```bash
pdfinfo "<path>" | head -5
du -h "<path>"
```

**決策樹**（依優先序判斷，第一個 match 即適用）：

| 條件 | 路徑 | 理由 |
|---|---|---|
| Session 已累積渲染 > 50 頁 | **B (subagent)** | context 重，不能再加 |
| 這份 > 60 頁 OR > 5 MB | **B (subagent)** | 自己讀預計撞牆 |
| Textbook 文字密集（章/節結構，圖少） | **A2 (pdftotext)** | 圖少不損資訊 |
| Slide PDF 圖密集 AND ≤ 30 頁 AND session 未累積 | **A1 (Read 渲圖)** | 視覺資訊需要 |
| 其他 | **A2 (pdftotext) 起手** | 保守取向 |

#### 路徑 A：主 agent 直接讀

**A1 — Read 圖片渲染**（slide / 視覺資訊 carry 內容）

| 條件 | chunk |
|---|---|
| 頁數 ≤ 10 且 < 2 MB | 全部一次 |
| 頁數 ≤ 15 且 < 3 MB | 5 頁/批 |
| 其他 | **3 頁/批**（不是 5） |

**失敗即跳路徑 B，不要切半重試**。切半是治標、撞兩次就證明 context 飽和。

**A2 — pdftotext 純文字**（textbook、表格、結構化文字）

```bash
pdftotext -layout "<file>" /tmp/<slug>.txt
```

然後 `Read /tmp/<slug>.txt`（純文字進 context，KB 級不爆）。

#### 路徑 B：Subagent dispatch（長 PDF / session 已重）

**標準 Subagent prompt template**：

```
Agent(Explore, """
Read pages X-Y of <ABSOLUTE_PATH>.
Distill into structured text and return ONLY:

## 主概念
- 概念名 — 1-3 句 essence

## 關鍵實證 / 數據
- 來源（公司/作者/年份）+ 具體數字

## 案例索引
- 案例名 — 1 句要點 — 頁碼

## 量表 / 問卷
- 名稱 — 來源 — 頁碼（不抄全題目，留頁碼可回查）

## Figure / Diagram
- 名稱 — 1 句說明 — 頁碼（不描述細節，留頁碼）

不要 return image 描述、不要 return raw 文字 dump、不要 return PDF 渲染 metadata。
只要 distilled text。
""")
```

**多 batch 策略**：

- **序列**（長章節）：subagent 1 跑 1-50 → return → subagent 2 跑 51-100 → return
- **平行**（同 PDF 不同節）：同一訊息派多個 subagent
- 收齊所有 batch 後，主 agent 用累積文字寫 wiki 頁

**Subagent 失敗 → 重派新 subagent 改策略，不在主線重試**。

#### L1.5 — Session-level budget tracking

每完成一份 PDF readthrough 在 hot.md 維護：

```
## PDF Session Budget
- OB Ch2: 166 pages rendered (full)
- Cumulative: 166 / 80 budget → next PDF MUST use Path B
```

新 session 起算才能歸零。Auto-compaction 後可重估。

#### L2/L3 — Source-side fallback（單頁就爆 32 MB 才啟動）

罕見場景：高解析醫學影像、掃描書本、滿版向量 diagram。**做任何 source 改檔前先告知使用者**。

| Level | 場景 | 動作 |
|---|---|---|
| **L2-A 純文字繞過** | 文字為主，跟路徑 A2 動作同；差別在「被動 fallback」vs「主動選擇」 | `pdftotext -layout "<file>" out.txt` |
| **L2-B Ghostscript 壓縮** | 需保留圖與版面但解析度可降 | `gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -o small.pdf "<file>"`，原檔不動 |
| **L2-C 物理切檔** | 結構沒問題、頁數太多檔太大 | `qpdf "<file>" --pages . 1-N -- part1.pdf` |
| **L3 渲圖逐頁** | 連 1 頁 pdftotext + ebook 壓縮都吃不下 | `pdftoppm -r 100 "<file>" page -png` 逐張 Read |

**選擇順序：L2-A → L2-B → L2-C → L3**。

完成後在 frontmatter 註記 `ingest_method: pdftotext | gs-ebook | qpdf-split | pdftoppm` 方便追溯保真度。

#### 完成驗證

```bash
pdfinfo "<file>" | awk '/Pages:/ {print $2}'   # 真實頁數
shasum -a 256 -- "<file>"                       # hash 比對 manifest
```

#### 禁止行為

- 主 agent 直接讀 > 60 頁的 PDF（一律 subagent）
- 主 agent 在 session 累積 > 80 頁 image render 後還繼續 Read 渲圖
- chunk 失敗後切半重試超過一次（直接跳路徑 B）
- 只讀前 N 頁就開始 distill（OB Ch1 踩雷案）
- 用「後段都是文字」這類**事後合理化**選擇 pdftotext — 真正原因是 context 累積，不是內容類型
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
