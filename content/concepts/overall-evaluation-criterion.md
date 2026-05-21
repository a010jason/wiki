---
title: Overall Evaluation Criterion（OEC — A/B testing 的測量靈魂）
type: concept
domain: mgmt
tags: [concept, ab-testing, measurement, kohavi, mgmt, strategy]
aliases: [OEC, Overall Evaluation Criterion, Kohavi OEC, A/B testing metric design]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.55
sources:
  - id: kohavi-hbr-2017
    ref: '[[references/kohavi-2017-HBR-online-experiments]]'
  - id: kohavi-ms-exp-2009
    ref: '[[references/kohavi-2009-microsoft-ExP]]'
related:
  - '[[concepts/ab-testing-as-strategy]]'
  - '[[concepts/sample-ratio-mismatch]]'
  - '[[concepts/HiPPO-decision-making]]'
  - '[[concepts/twymans-law]]'
  - '[[entities/Booking-com]]'
  - '[[entities/Microsoft]]'
---

# Overall Evaluation Criterion (OEC)

**Ronny Kohavi 一以貫之的 A/B testing 核心概念**：實驗的**唯一 north-star metric**，用來判定 treatment 是否該 ship。**設計 OEC 比設計實驗本身更難**。^[extracted]

Kohavi 引 Lewis Carroll：「**If you don't know where you are going, any road will take you there**」 — OEC 是 A/B testing 的「knowing where you're going」。^[extracted]

## 定義

OEC = 一個 **單一可量化 metric**（或加權組合），用來判斷實驗結果：
- 若 OEC 在 treatment 顯著 &gt; control → ship treatment
- 若 OEC 在 treatment 顯著 &lt; control → ship control
- 若統計不顯著 → maintain status quo（多數情況）

## 為什麼 OEC 設計這麼難

### 短期 vs 長期 tradeoff

**Bing 反例**（[[references/kohavi-2017-HBR-online-experiments|HBR 2017]]）：

- 降低搜尋結果相關性 → 用戶反而 issue 更多 queries（**query share ↑**）+ click 更多 ads（**短期 revenue ↑**）
- 但**長期**用戶會流失到 Google
- 若 OEC 設成「query share」或「click-through revenue」 → 會 ship 一個自殺的 treatment

**Bing 最終 OEC**：
> **Minimize queries per task/session, maximize tasks/sessions per user**

意義：每個 task 用越少 query 完成越好（搜尋越精準）+ 每個用戶來越多次越好。

### Proxy metric 陷阱

**Office Online Page Redesign 案**（[[references/kohavi-2009-microsoft-ExP|MS-ExP 2009]]）：

- 新版設計看起來更美
- 但 **Buy button 點擊率 -64%**
- 推測原因：Control 顯示了產品價格，user 找到價格就點 buy；Treatment 沒顯示
- **OEC 教訓**：應該量「**actual purchase**」而非「buy button clicks」 — proxy 距離真正 outcome 太遠時會誤導

### 多 metric 整合

Bing 累積 **&gt;6,000 metrics**，按 vertical 模板分組。OEC 在現實是**多 metric 的加權函數**而非單一指標。^[extracted]

## OEC 設計原則

### 1. 對齊長期 user value
- 短期 metric（click / DAU / revenue per session）可能誤導
- 長期 metric（retention / LTV / NPS）才是真正 north star

### 2. 對齊組織 strategy
- 增長期：偏 acquisition / engagement metrics
- 變現期：偏 ARPU / monetization metrics
- 防禦期：偏 retention / churn metrics

### 3. 平衡兩端
- 太抽象（如「客戶滿意度」）→ 無法操作化
- 太具體（如「banner CTR」）→ 易被局部優化坑

### 4. 每年 review 一次
- 商模變化 / 競爭變化 / 用戶行為變化都會讓 OEC 過期
- Kohavi 建議：**OEC 每年 review**

### 5. Holdout 驗證
- 用 holdout group 長期不收新 treatment → 對照長期累積效果
- 防 incremental shipping bias（每次都通過 OEC 但長期偏離）

## 反例 / OEC 失敗模式

### 失敗 1：把短期 metric 當 OEC
- Bing 把「query share」當 OEC → 降相關性反而贏
- 解：加長期 retention check

### 失敗 2：把 proxy 當 OEC
- Office 把「Buy button click」當 OEC → 美化首頁但傷購買
- 解：直接量 outcome（purchase / activation / payment）

### 失敗 3：忽略 negative externality
- 廣告 metric 上升但 user trust 下降（破壞 long-term reputation）
- 解：OEC 加 negative metric 防護

### 失敗 4：OEC 不一致（跨 team）
- 不同 team 用不同 OEC → 跨 BU 衝突
- 解：center-of-excellence 統一 OEC framework

## OEC 在 Booking vs Microsoft 對比

| 維度 | Booking.com | Microsoft ExP |
|---|---|---|
| 主要 OEC | **BPD (Booking Per Day)** — 每日預訂量 | **Bing query share + revenue per session** + 6,000 supporting metrics |
| OEC ownership | Distributed — 每 team 自選 KPI（在 BPD 框架下） | Centralized — ExP team 定義 framework |
| OEC review | 持續（A/B test 本身在 evolve OEC） | 年度 review |
| 文化驅動 | Frisby「自我糾正組織」 | Kohavi「HiPPO 玩偶」+ 500+ training class |

## OEC 與 Strategy 的關係

[[concepts/ab-testing-as-strategy|Booking case A/B as strategy]] 的 Vermeer quote：「**Strategy 不能 A/B test，但搞清楚 strategy 後一切都可測**」 — **OEC 是 strategy 落地到測量的橋樑**。^[extracted]

- 沒有 strategy → 不知道該 maximize 什麼 → OEC 設計無方向
- 有 strategy 但無 OEC → 知道方向但無法驗證
- **OEC = 把 strategy 操作化的關鍵**

## 對 PM 工作的啟示（Jason 視角）^[inferred]

醫療 AI PM 場景的 OEC 設計：

### 短期 metric（容易設但易誤導）
- DAU / 使用次數 / 客戶數
- 模型 sensitivity / specificity / AUC

### 長期 metric（真正 north star 但難量）
- Patient outcome（mortality / morbidity reduction）
- Clinical workflow time saved
- Reimbursement code 申請成功率
- Hospital 簽約 stickiness（multi-year contract）

### OEC 設計建議
- **主 OEC**：年度 hospital revenue retention rate
- **輔助 metrics**：模型 performance / 客戶 NPS / 工作流時間
- 對齊 strategy：增長期偏 hospital count；變現期偏 revenue per hospital
- 每年 review

## Open Questions（待 wiki-challenge）

- **OEC 跨產業普適性**：B2B 場景（如醫療 AI）OEC 比 B2C 難 — 用戶不是 click 而是 long sales cycle ^[inferred]
- **AI 系統的 OEC**：當 product 是 ML model 時，「performance metric」vs「business outcome」如何取捨？^[inferred]
- **OEC 與 [[concepts/象-數-理-epistemology|象數理]] 的關係**：OEC 是「數」層級的精緻化，但「理」層級（為什麼這個 OEC 是對的）才是真難點 ^[inferred, Jason synthesis]
- **Kohavi 原始 OEC 定義細節**：HBR 簡化版可能不夠 — 原 KDD 2009 paper 是否有更完整的 OEC mathematical formulation？^[ambiguous]

## Related

- **概念**：[[concepts/ab-testing-as-strategy]] / [[concepts/experimentation-culture]] / [[concepts/sample-ratio-mismatch]] / [[concepts/HiPPO-decision-making]] / [[concepts/twymans-law]] / [[concepts/causal-inference-vs-correlation]] / [[concepts/evidence-based-management]] / [[concepts/hypothesis-driven-product]] / [[concepts/象-數-理-epistemology]]
- **Entity**：[[entities/Ronny-Kohavi]] / [[entities/Booking-com]] / [[entities/Microsoft]] / [[entities/Bing]]
- **參考**：[[references/kohavi-2017-HBR-online-experiments]] / [[references/kohavi-2009-microsoft-ExP]] / [[references/HBS-booking-com-case]]
