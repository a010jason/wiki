---
title: MBO（Management by Objectives / 目標管理）
type: concept
domain: mgmt
tags: [OB, performance-management, MBO, Drucker, Intel, mgmt]
aliases: [MBO, Management by Objectives, 目標管理]
sources:
  - textbook:Colquitt-OB-Ch2-McGraw-Hill-2017
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Drucker 提出的目標管理法，員工與主管共同設定 measurable + specific 目標；目標逐層對齊（corporate → unit → individual）。Intel 是經典落地案例，Andy Grove 三條方針影響後續 OKR。核心哲學：「manager controlled by objectives, not boss」。
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# MBO（Management by Objectives）

## 定義

員工與主管**共同設定** measurable + specific 的目標；目標逐層對齊（corporate → unit → individual）。^[extracted]

教科書範例（OB Ch2 p.134，line manager in factory 適用）：^[extracted]
> "Reducing production waste by 35% within three months by developing and implementing new production procedures"

—— 具體（35% / 3 months / 新流程）、可量化、有時間框。

## 與「Manager 被 Boss 引導」的對比

MBO 的哲學洞察：**「manager controlled by objectives, not boss」**。^[extracted]

意即 — 目標一旦設定，員工的日常行動由**目標**指引，而非「老闆今天交辦什麼」。減少 micromanagement、釋放主管時間、強化員工自主感。^[inferred]

→ 這也是 [[concepts/OKR]] 的精神先驅。Andy Grove 把 MBO 在 Intel 內部 operationalize 後，再由 John Doerr 帶到 Google，成為 OKR。

## Intel Manager's Guide（教科書 p.135-137）

Intel 內部 MBO 落地的三條方針：^[extracted]

1. **Start with a few well-chosen overriding objectives**
2. **Set subordinates' objectives that fit overriding ones**
3. **Allow subordinates to set their own key results**

→ 第 3 條已出現「key results」語彙，是 OKR 的直接前身。^[inferred]

### MBO Process Cycle（5 步驟循環圖）

```
Set Corporate Objectives
    ↓
Set & Align Employee Objectives
    ↓
Monitor
    ↓
Evaluate
    ↓
Reward
    ↓
(回到 Set Corporate Objectives — 進入下一循環)
```

教科書圖示。^[extracted]

## 在 Performance Management 工具箱中的位置

教科書（p.133）將 MBO 列為 5 種 performance management 工具之一，與 BARS / 360-degree feedback / Social networking systems / [[concepts/forced-ranking]] 並列。^[extracted]

**MBO 的鑑別特徵**：評估**結果（objectives 達成度）**，相對於 BARS 評估**行為**。^[extracted]

## 內建反論：MBO 容易發散

教科書講義頁眉批寫「**MBO 要注意"聚焦"的問題**」。^[extracted]

→ MBO 的隱憂是目標清單可能爆炸式擴張，每個 unit / individual 都想塞自己的目標進清單，導致**焦點稀釋**。Intel 三方針的「a few well-chosen」即是針對這個問題的對策。^[inferred]

## 與其他績效工具的對照

| 工具 | 評估什麼 | 主要用途 |
|---|---|---|
| **MBO** | 結果（objectives 達成度） | 績效評估 + 報酬連動 |
| **BARS** | 行為（critical incidents） | 績效評估 + 訓練 |
| **360-degree** | 多角度行為 | **Development**（不適合 ranking）|
| **Forced ranking** | 相對位置 | 強制分配 + 淘汰 |
| **Social networking systems** | 即時 / 同儕回饋 | 持續性 development |

## 與 OKR 的關係（推測）

| 維度 | MBO | OKR |
|---|---|---|
| 提出者 | Drucker（1954）| Andy Grove（Intel 1970s）→ Doerr（Google 1999）|
| 連動報酬 | 通常連動 | 刻意**不**連動（避免目標保守化）|
| 透明度 | 主管 ↔ 員工 | 全公司可見 |
| 失敗容忍度 | 低（連動報酬）| 高（70% 達成即視為佳）|

→ OKR 可視為 MBO 解開「連動報酬」綁定後的版本。^[inferred]

詳見 [[concepts/OKR]] 與 [[synthesis/OKR-vs-KPI-when-to-use]]。

## Boundary / 待批判

- **MBO 在快速變動環境的有效性**：目標設定週期（季 / 年）vs 環境變動週期（週 / 月）的錯位 — source 未討論 ^[ambiguous]
- **量化目標的扭曲效應**：把難以量化的工作（如創意、研究、人才培育）強行量化，可能丟失重點。source 未討論 ^[ambiguous]
- **Intel 案例是否可移植**：Intel 是技術文化、工程師主導；MBO 在金融 / 服務 / 醫療業是否同樣有效，source 未提 ^[ambiguous]
- **連動報酬的張力**：教科書未直接點明 MBO 連動報酬會像 KPI 一樣引發目標保守化（OKR 反命題的根據）^[inferred]

## Related

- [[concepts/OKR]] — MBO 的後代（解 ranking 綁定）
- [[concepts/KPI]] — 與 MBO 在「連動報酬」上重疊
- [[concepts/performance-management]] — 上層 hub
- [[concepts/forced-ranking]] — 並列的 performance 工具
- [[skills/setting-OKR]] — 落地操作（OKR 版）
- [[references/colquitt-OB-textbook]] — Ch2 source
- [[references/measure-what-matters-doerr-2018]] — Doerr 把 MBO 變 OKR 的歷史脈絡
