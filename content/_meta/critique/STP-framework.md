---
title: Critique — STP Framework
type: meta
target: concepts/STP-framework
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 1, narrow: 3, brittle: 1, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.80 → 0.55" }
---

# Critique — `concepts/STP-framework`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 「STP = Segmentation → Targeting → Positioning 是三步驟流程」

- **Q1 假設：**
  - `[hidden]` 市場 segment 內變異 < segment 間變異（不然切了沒意義）
  - `[hidden]` 客戶偏好在規劃週期內穩定（不然 segment 短期就過期）
  - `[hidden]` 流程單向，positioning 不會回頭重定義 segment
  - `[stated]` 三步驟為 sequential pipeline
- **Q2 跨域跨規模：**
  - **產業轉移**（B2C → algorithmic platform）：TikTok / YouTube Shorts 不做 a priori segmentation，algorithm 從行為叢集中**emergent**出 segment；每個用戶看到不同 positioning。傳統 sequential 流程**斷裂**
  - **規模轉移**（solo founder → enterprise）：solo founder 鮮少做正式 STP，通常 product-market fit 透過 A/B testing 與用戶談話 emergent；STP sequence 在 < 10 人公司基本不適用
- **Q3 來源：** `secondary` — Kotler 16e Ch01,02,06,07，credential 充足；但 2022 出版的書對 algorithmic platform marketing 處理不足
- **Q4 反例：** TikTok 完全沒做 STP a priori 仍是全球最大短影音平台。Falsifier = 若一個成功品牌可被證明從未做 STP-style segmentation，only emergent → claim 被削弱
- **Verdict：** `narrow` — STP 在傳統 B2C + 穩定偏好下 work，algorithmic / 動態偏好場景破功

### Claim 2: 「STP 不是 standalone，是 G-STIC 的 Strategy 步驟之 substructure」

- **Q1 假設：**
  - `[hidden]` Goals 可獨立於 segmentation 結果先設（G 在 S 之前 = top-down）
  - `[hidden]` G-STIC 是正確的 meta-framework（vs. OKR / lean startup / JTBD）
  - `[hidden]` 所有 marketing 都會走 G-STIC（vs. emergent / 機會主義）
  - `[stated]` STP 嵌入 Strategy 段、7Ts 作為 Tactics
- **Q2 跨域跨規模：**
  - **產業轉移**（top-down enterprise → lean startup）：startup 的 Goals + Strategy 從 MVP testing emergent，不是 top-down → G-STIC 嵌套結構崩潰
  - **規模轉移**（enterprise → solo founder）：solo 常 position-first（如 Airbnb 原本「設計師會議住宿」→ 反推 target → 反推 segment），與 G→S→T sequence 完全相反
- **Q3 來源：** Kotler 16e 結構上**沒明說** STP 嵌入 G-STIC；這個 nesting 是 wiki 自己 inferred 出的整合 → `inferred`（不算 source-backed）
- **Q4 反例：** Airbnb 早期完全 position-first（reverse sequence）。Falsifier = 多個成功品牌走 Position-first 路徑 → nesting 主張至少非普世
- **Verdict：** `narrow` — 適用 top-down enterprise planning，不適用 emergent / startup context

### Claim 3: 「Strategic targeting 需要 target compatibility（我→他）+ target attractiveness（他→我）兩個必要條件」

- **Q1 假設：**
  - `[hidden]` 兩個條件獨立且等權
  - `[hidden]` 「superior value」可以 ex ante 評估
  - `[hidden]` 任一條件不滿足 = 應淘汰該 segment
  - `[stated]` 「兩個必要條件」明確列出
- **Q2 跨域跨規模：**
  - **產業轉移**（一般消費 → 醫療 AI）：compatibility（EBM 能否服務這家醫院？）通常主導；attractiveness（這家醫院能否讓 EBM 賺錢？）的 LTV 計算極不清楚 — 兩條件實際上不是並列權重
  - **規模轉移**（小新創 → 大企業）：小新創 ex ante 評估能力極差，常「land grab 任何願意付錢的客戶」；大企業才有資源做雙條件 gate
- **Q3 來源：** `secondary` — Kotler Ch06 explicit；但**沒給 quantitative threshold**（怎麼算 superior？）
- **Q4 反例：** Apple 早期門市多數虧損但建品牌 → compatibility yes、attractiveness no，卻持續投資；違反「兩條件皆需」rule。Tesla 早期亦同（Roadster 不賺錢但開路）。Falsifier = 多個成功品牌 intentionally 違反一條件
- **Verdict：** `narrow` — 對早期 / 品牌投資階段 / strategic loss-leader 場景過嚴

### Claim 4: 「Positioning = mind-space，不是物理位置」

- **Q1 假設：**
  - `[hidden]` 客戶有穩定、可 retrieve 的心智模型可被品牌「佔據」
  - `[hidden]` Brand positioning 可被刻意設計（不是 emergent）
  - `[hidden]` 客戶「心智」是個體層級、可聚合到 segment
  - `[stated]` 「不是物理位置，是 mind-space」明確
- **Q2 跨域跨規模：**
  - **產業轉移**（傳統消費品 → 演算法平台）：TikTok positioning 是 per-impression（每個用戶看到不同），aggregate brand position 弱化
  - **規模轉移**（大品牌 → solo SaaS）：solo 的 positioning 從 product-market fit emergent，不是 designed；mind-space framing 對早期 SaaS premature
  - **產業轉移**（消費品 → commodity 如石油 / 穀物）：positioning to「minds」幾乎無意義，通路位置主導
- **Q3 來源：** `primary`（Kotler Ch07 p.10 直接引述定義）— 強 source
- **Q4 反例：** Costco 不追求「distinctive mind-space」— 它的 positioning 是「我不做 positioning，只給你低價 + 大量」（positioning-by-negation）。但這仍是一種 positioning。Falsifier = 一個明確拒絕 positioning 仍規模化成功的品牌 → 「distinctive mind-space」非普世
- **Verdict：** `survives` — 定義性 claim、來源強；Costco-type 否定式 positioning 反而驗證 mind-space 是必然存在的事

### Claim 5: 「Kotler 的 POD 在 brand / ecosystem / cross-category 層級，而 Porter 的差異化只停在 BU 層級」

- **Q1 假設：**
  - `[hidden]` Porter 框架**不能**容納 brand-level / ecosystem-level 差異化（選擇性閱讀 Porter）
  - `[hidden]` Kotler POD 與 Porter 差異化在 scope 上有意義差距，不只是不同術語
  - `[stated]` 教師批註直接斷言「波特的差異化只停在 BU 而已」 — 教師意見、無學術引用
- **Q2 跨域跨規模：**
  - **產業轉移**（單一產品 startup → 多 BU 集團）：在單一產品 startup，兩者 scope 重疊；只在多 BU 集團（Apple / 三星）才看得出差異
  - **規模轉移**：規模越大教師主張越站得住，規模小則兩框架同義
- **Q3 來源：** `tertiary`（教師個人批註）— **無學術引用**；Porter 本人在 *Competitive Advantage* (1985) 寫過 competitive scope（含 industry segment / vertical / geographic / product line），多 BU positioning 明明在他原框架裡
- **Q4 反例：** Porter (1985) Ch1 explicitly 討論 competitive scope 與 corporate strategy；他自己寫的 *Competitive Advantage* + *Competitive Strategy* 二書合起來涵蓋 BU + corporate 兩層。教師斷言**直接與 Porter 原著矛盾**。Falsifier = Porter 在書中明確處理 brand-level / multi-BU 議題 → 教師主張站不住
- **Verdict：** `brittle` — 教師批註可能是教學簡化（為了凸顯 Kotler）而非學術可辯護立場；wiki 不該以此 unmodified 引用，至少要 framing 為「教師個人 reading of Porter」

## Cross-domain Benchmark

（本次只跑 wiki-challenge，未配對 wiki-benchmark；建議下次跑對標步驟。）

## Overall page verdict

STP 框架本身是**定義性、廣泛被引用**的 marketing 經典，**Claim 4（mind-space）強韌**。

但頁面有兩個結構性弱點：

1. **過度假設靜態 / sequential marketing planning**（Claim 1, 2, 3 均偏 narrow）— 完全沒處理 algorithmic platform / emergent strategy / lean startup 三種主流現代場景
2. **Claim 5 是教師個人 reading 而非學術主張**（brittle）— Porter 原著明確處理 BU 以上層級，教師斷言與原典衝突；wiki 不該裸引用

**Recommended actions**：

- [ ] Claim 1-3：在頁面加「Modern context 補充」段，承認 algorithmic / lean startup 場景的限制（不必改原 claim，append scope qualifier）
- [ ] Claim 5：framing 改為「教師批註對 Porter 的解讀（非 Porter 原意）」，或補一段「Porter 1985 原書其實涵蓋 brand / multi-BU scope」對沖
- [ ] 補一個「STP 不適用 / 修正適用的場景」段，作為 falsifier 列表
- [ ] 跑 wiki-benchmark 做跨領域對標（例如 STP vs JTBD vs OST vs Pirate Metrics）
- [ ] 既有的 [[synthesis/STP-x-buying-center]] 已部分處理 B2C 偏向，可在本頁加 backlink

`base_confidence`：0.80 → 0.55（受 brittle Claim 5 拖累，cap 0.55）
`lifecycle`：draft → challenged
