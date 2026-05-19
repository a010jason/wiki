---
title: Humans on the Edge, AI in the Core（員工在邊、AI 在核心）
type: concept
domain: mgmt
tags: [organization-design, AI, digital-operating-model, future-of-work, mgmt]
aliases: [humans on the edge, AI in the core, Amazon org architecture, AI-centric org]
sources:
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
created: 2026-05-06
updated: 2026-05-06
summary: >-
  Iansiti & Lakhani (2020) 從 Amazon 觀察到的組織設計原則：在數位營運模型公司，**critical-path 工作由 AI / 軟體執行；員工只在邊緣處理 AI 還搞不定的例外**（如撿不規則形狀的貨）。員工的角色從「執行者」變成「設計、監督、補洞者」。是 [[concepts/digital-operating-model]] 落實到組織架構的具體 pattern。對醫療業：法規限制無法 100% 採用，但部分採用（pre-read + 醫師覆核）已是現況。
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Humans on the Edge, AI in the Core

## 命題

[[references/iansiti-lakhani-competing-age-of-ai-2020]] 書 p.11 直接點出：^[extracted]

> "Amazon does employ many people but **deploys most of them on the edge of the digital network**, doing things that computers are not yet capable of handling (such as picking an oddly shaped product from the warehouse shelf), while at the same time minimizing managerial complexity and maximizing the impact of digital scalability. And many times, computers are defining what humans should do, **not the other way around**, as in figuring out the optimal path to find and pick a specific product in the warehouse."

兩個關鍵翻轉：^[inferred]

### 1. Critical path 上是誰

| 傳統公司 | DOM 公司（Amazon-style）|
|---|---|
| 員工在 critical path 做核心決定 | AI / 軟體在 critical path 做核心決定 |
| 軟體輔助員工 | 員工輔助軟體 |
| 員工人數 ∝ 業務量 | 員工人數 ≪ 業務量 |

### 2. 誰指揮誰

> "Computers are defining what humans should do, not the other way around" ^[extracted]

—— 這是更激進的反轉：不是「AI 給建議、員工裁量」，而是「AI 派工、員工執行」。^[inferred]

## Amazon Warehouse 為例

書 p.11 的具體場景：^[extracted]

| 環節 | 誰做 |
|---|---|
| 預測明天哪些 SKU 需要進貨 | AI |
| 規劃倉庫貨品擺位 | AI |
| 計算員工從 A 到 B 撿貨的最短路徑 | AI |
| 通知員工該去 B 取 X 件 SKU | AI |
| **真的走到貨架前撿東西** | 員工（因撿不規則形狀貨品 AI 還搞不定）|
| 把撿好的貨放到輸送帶 | 員工 |
| 規劃輸送帶把貨送到出貨站 | AI |
| 印標籤、貼標籤 | 部分 AI（標籤生成）+ 部分員工（貼）|

**AI 在 core 處理 cognitive 工作；員工在 edge 處理 physical edge cases**。^[inferred]

## 為何這個架構能反轉 Figure 1-2

[[concepts/digital-operating-model]] 的 Figure 1-2 之所以能邊際遞增，組織層的 enabler 就是這個 pattern：^[inferred]

- 用戶數 +1 → AI 處理量 +1（邊際成本接近 0）
- 用戶數 +1 → 員工負擔 ≈ 不變（員工只處理 edge cases，總量不隨 user 線性成長）

—— 比較：傳統公司用戶數 +1 → 員工負擔線性 +1（每多一個用戶要對應的人力）→ 這是傳統 operating model S 形邊際遞減的根因。^[inferred]

## 員工角色的質變

**從「執行者」變成 4 種新角色**：^[inferred]

| 新角色 | 工作內容 |
|---|---|
| 設計者（Designer） | 設計 AI 跑的整套流程 |
| 監督者（Supervisor） | 看 AI 是否正常、有無 drift |
| 訓練者（Trainer） | 餵 AI 標註資料、修正錯誤 |
| 邊緣執行者（Edge Worker） | AI 還搞不定的物理 / 例外 / 高風險任務 |

—— 中階主管特別痛苦，因為「監督員工執行任務」這個傳統職能在 DOM 中**消失**（AI 不需要中階主管監督）。^[inferred]

## 對醫療 AI 的含意

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]

醫療業特殊性：**法規強制醫師簽字**，無法 100% 套用 humans-on-edge。^[inferred]

但**部分採用是現況**：

| 醫療場景 | AI 在 core | 醫師在 edge |
|---|---|---|
| 影像 pre-read | AI 跑全院 CT、標出可疑病灶 | 醫師確認 / 拒簽 / 高風險案 |
| 報告 draft | AI 從影像 + 病歷 draft 報告 | 醫師修改、簽名 |
| Triage（急診分類）| AI 看影像 + 生命徵象，建議 P1/P2/P3 | 醫師重判高風險案 |
| ICU sepsis 警示 | AI 持續監看，超閾值跳警報 | 醫師決定治療 |
| 全科會診鑑別診斷 | 多 AI 跑各別假設，整合排序 | 醫師最終決定 |

醫療業 humans-on-edge 的「edge」和 Amazon 不同：^[inferred]
- Amazon 的 edge = AI 還搞不定的物理動作（撿不規則形狀的貨）
- 醫療的 edge = AI 還搞不定的判讀（罕見病、多重共病、跨科鑑別）+ **法規強制人類簽字**
- 醫療的 edge **不會隨 AI 變強而縮小**，因為法規天花板存在

→ 醫療 AI 公司的賣點不是「取代醫師」，是「讓醫師處理更多 edge case，因為日常 routine 都被 AI 接走了」^[inferred]

## 對 EBM PM 的策略含意

> 此區塊涉及 ebmtech 產品判斷，部分屬 internal 思考。

**錯誤定位**：「我們的 AI 比醫師強」（醫師討厭、法規不允許、市場不買）

**正確定位**：「我們讓醫師在 edge 上發揮，AI 把 routine 接走」（醫師喜歡、法規可接受、市場買單）^[inferred]

→ 產品文案、銷售話術、demo 設計，都該圍繞**醫師時間配置的重新分配**，而非 AI 能力的 benchmark。^[inferred]

## Open questions

- 法規天花板會不會被 LLM agent 突破？2025-2026 已出現「AI 醫師助理」初步試點（如美國某些州允許 AI scribe 自動撰寫病歷）—— 是否預示醫療 humans-on-edge 的「edge」會逐步縮小？^[ambiguous]
- 醫師會不會被 deskilled？如果 routine 全被 AI 接走，醫師只看 edge case，**新進醫師如何累積經驗**？這是醫療業 humans-on-edge 的長期教育問題。^[inferred]
- 中階管理層的命運：傳統醫院的科主任、副院長等職位，在 humans-on-edge 醫療下角色會怎樣？^[ambiguous]

## Sources

- [[references/iansiti-lakhani-competing-age-of-ai-2020]] 書 p.11 直接命題
- 與 [[concepts/digital-operating-model]] 的組織層落實
- 與 [[concepts/scale-scope-learning]] 的 Scale 軸機制依賴
