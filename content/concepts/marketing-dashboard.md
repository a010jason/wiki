---
title: Marketing Dashboard (4 Pathway 框架)
type: concept
domain: marketing
tags: [marketing-dashboard, marketing-metrics, performance, kotler, mgmt]
aliases: [Marketing Dashboard, marketing metrics, MDSS]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch05
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch05 提出的 marketing 績效監控框架 — 四個 pathway：Customer metrics（awareness→preference→trial→repeat purchase）、Unit metrics（單位銷量 / 成本）、Cash-flow metrics（ROI / NPV）、Brand metrics（品牌權益）。是 [[concepts/G-STIC-framework]] Control 步驟的具體落地。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.70
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Marketing Dashboard

## What It Is

> Marketing Dashboards = 即時資訊面板（銷售 vs 預測、通路效能、品牌權益、人力資本發展）。
> ^[extracted Ch05]

意涵：行銷不是看單一 ROI 數字，是看多 pathway 的綜合面板。

## 四個 Pathway

Kotler 提出 marketing dashboard 的四條 pathway：^[extracted Ch05]

### 1. Customer Metrics Pathway

顧客漏斗：

```
Awareness → Preference → Trial → Repeat Purchase
```

每階段都有量化指標。對應 [[concepts/successive-sets]]：Awareness Set → Consideration Set → Choice Set → Choice。

### 2. Unit Metrics Pathway

- 單位銷量
- 每單位行銷成本
- 毛利優化

對應 micro-level 的行銷 ROI 分析。

### 3. Cash-flow Metrics Pathway

- 短期 ROI
- Program / Campaign 的 NPV（淨現值）

對應財務責信。

### 4. Brand Metrics Pathway

品牌權益的長期影響：
- 消費者感知健康（perception health）
- 財務健康（financial health）

對應 Aaker / Keller brand equity 模型。

## 三個 Productivity 工具

Marketing dashboard 是其中之一，Kotler 列三個產出工具：^[extracted Ch05]

| 工具 | 角色 |
|---|---|
| **Marketing metrics** | 量化、比較、解釋行銷績效的指標集合 |
| **Marketing mix modeling** | 整合零售掃描資料、出貨資料、定價 / 媒體 / 促銷支出，分析行銷活動的精確效果 |
| **Marketing dashboards** | 即時面板（含上述四個 pathway） |

## 在 G-STIC 中的位置

Marketing Dashboard 是 [[concepts/G-STIC-framework]] Control 步驟的核心工具：

```
G-STIC: Goal → Strategy → Tactics → Implementation → Control
                                                       ↓
                                                Marketing Dashboard
                                                ├── Customer metrics
                                                ├── Unit metrics
                                                ├── Cash-flow metrics
                                                └── Brand metrics
                                                       ↓
                                              Loop back to Goal
```

## Source 反例 / 質疑

- **四個 pathway 沒有 priority** — 同時看四面板，不同 pathway 給出衝突信號時怎麼判斷？^[ambiguous]
- **Customer pathway 的線性漏斗** 在數位時代被批評不符合現代消費旅程；source 在描述中加了「or some less linear model」這句保留字眼。^[extracted + 隱含批評]
- **Marketing mix modeling 假設過去資料能預測未來** — 在 platform / 演算法主導的數位通路下假設可能崩潰。^[inferred — 隱含批評]
- **Brand metrics 的測量爭議** — 「消費者感知健康」是 NPS 還是其他指標？source 沒給操作定義。^[ambiguous]

## Jason 觀察：醫療 AI 的 Marketing Dashboard

EBM PACS / AI 適用的 dashboard pathway：^[inferred — Jason 個人延伸]

### Customer Metrics（適度修改）

```
Awareness (醫師 / IT) → KOL Endorsement → POC 試用 → Department Deployment → Hospital Renewal
```

醫療 AI 比消費品多兩階段（POC + Department vs Hospital）。

### Unit Metrics

- per-study 推論成本
- per-hospital sales 成本
- per-medical-center renewal margin

### Cash-flow Metrics

- 多年訂閱 NPV
- POC 投入回收期
- Bundle deal 與單品 ROI 對比

### Brand Metrics

- KOL 提及率（學會 / 期刊）
- 醫師信任度（NPS for clinicians）
- PACS vendor 共同提案率

關鍵：**醫療 AI 的 Brand Pathway 比 B2C 重要很多** — 因為醫師決策是 narrative-driven，brand 是 narrative carrier。

## Related

- [[concepts/G-STIC-framework]] — Dashboard 是 Control 步驟工具
- [[concepts/marketing-research-process]] — Research 是 dashboard data 的來源
- [[concepts/successive-sets]] — Customer pathway 的細化
- [[concepts/customer-value-proposition]] — Unit / Brand metrics 的 value 邏輯
- [[concepts/balanced-scorecard]] — 對照的多面板框架
- [[references/kotler-keller-chernev-marketing-management-16e]]
