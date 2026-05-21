---
title: Markops — Marketing Operations 策略框架
type: concept
domain: marketing
tags: [marketing, operations, framework, BCG, kotler, mgmt]
aliases: [markops, marketing-operations, marketing-ops]
sources:
  - id: Kotler-MM16e-Wave3-Markops
    type: case-supplement
    rel_path: 行銷管理/Markops.pdf
    pages: 4
    sha256: 45e53d1e62055205d2f2dfcf20bdc992b71fbbae4b3e1ac2e0dd47e8f7465b52
    ingested_commit: pending
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kotler MM 16e 教師補充教材定義的 Markops（Marketing Operations）策略框架：以「1E + 5Cs + STP + 7Ts → 動態調整」為架構，搭配 CNC / MS 雙指標、BCG 資源配置矩陣、行銷拙劣 5 大徵兆。不是 MarTech 工具或軟體 stack 概念，是 portfolio-level 的行銷管理紀律。
provenance:
  extracted: 0.7
  inferred: 0.3
  ambiguous: 0.0
base_confidence: 0.6
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Markops — Marketing Operations 策略框架

> **語意澄清**：英文業界（HubSpot / Marketo 圈）對 "Marketing Ops" 多指 MarTech stack 與 campaign automation；本 source 用的 Markops 是更上層的 **portfolio-level 行銷管理紀律**，不涉及工具層。兩個用法應在 wiki 中區隔。

## 整體架構

教師補充以一行 formula 概括 Markops：

> **1E + 5Cs + STP + 7Ts → 動態調整**

^[inferred from instructor annotation]

四個 building block 拼接 + 一條動態反饋線：

| Block | 意義 |
|---|---|
| **1E** | Environment 環境分析 |
| **5Cs** | [[concepts/5C-target-market-framework]]（Customers / Collaborators / Competitors / Company / Context） |
| **STP** | [[concepts/STP-framework]]（Segmentation / Targeting / Positioning） |
| **7Ts** | [[concepts/7Ts-marketing-tactics]]（Product / Service / Brand / Price / Incentives / Communication / Distribution） |
| **動態調整** | 持續用 metric 反饋 → 調整資源配置 |

這個架構是 Kotler 全書框架的 **operationalization** —— 不是新增概念，而是把 5C / STP / 7Ts 串成一條可執行流水線。

## 兩個核心指標

教師補充明確指定 Markops 的雙指標：

| 指標 | 全名 | 意義 |
|---|---|---|
| **CNC** | Cumulative Net Contribution | 累計淨收益（橫跨多期 / 多產品） |
| **MS** | Market Share (in $) | 最後一期的市場佔有率（以金額計，非單位數） |

^[extracted]

雙指標的張力：

- **CNC 偏短期、財務、可量化** → 容易過度優化現有產品
- **MS 偏長期、戰略、佔位** → 為未來保留 option

教師暗示兩者需要**同步追蹤**而非二選一，否則容易陷入「賺現金但失去未來」（過度收割）或「衝市佔但虧損擴大」（過度補貼）兩個陷阱。^[inferred]

## BCG 矩陣與資源配置動詞

教師補充把 BCG growth-share matrix 重新標註為**動作而非分類**：

| BCG 位置 | 教師標註動詞 |
|---|---|
| Stars（高成長 + 高市佔） | **invest** |
| Question Marks（高成長 + 低市佔） | **maintain** |
| Cash Cows（低成長 + 高市佔） | **milk** |
| Dogs（低成長 + 低市佔） | **divest** |

^[inferred from instructor annotation]

這個標註的價值在於：把 BCG 從「現況描述工具」轉成「Markops 的 portfolio 決策工具」—— 每個產品 / SKU / brand 都被指派一個動詞，動態調整迴路就明確了。

## 行銷拙劣的 5 大徵兆（p.155 引用）

教師批註列出 Marketing sloppiness 的五個 anti-pattern：

1. **反應太快** → 違背「快思慢想」（Kahneman），premature optimization
2. **遺漏 KSF**（Key Success Factor） — 沒辨識出本品類真正的決勝點
3. **Drowning in data** — 量測過剩、結論不足
4. **缺乏 Strategy 與 Knowledge** — 戰術執行強但沒上層方向
5. **Implementation problem** — 計劃漂亮但落地失敗

^[extracted]

第 1 點直接 cite Kahneman，把 marketing 與 [[concepts/bounded-rationality]] / [[concepts/decision-making-biases]]（OB Ch11）建立連結。^[inferred]

## 其他工具引用（教師補充的散點）

- **Gravity Model of Trade** — Subway 選點案例 ^[extracted]
- **Price-SWOT Map** — p.144 引用 ^[extracted]
- **Break-even analysis**：`p × q = FC + VC × q` ^[extracted]
- **ARIMA** 時間序列預測（要求市場需求 stable） ^[extracted]
- **學習效果 → 馬太效應**（大者恆大）^[inferred from instructor annotation]
- **經銷商定價邏輯**：通常占終端售價 25%；999 終端 → 經銷 750-804 ^[extracted]

## 與 Kotler 框架的對接

- **vs [[concepts/G-STIC-framework]]**：G-STIC 是 single-product 的策略 + 執行 + 控制三段論；Markops 是 portfolio-level 的 G-STIC 集合管理。
- **vs [[concepts/marketing-dashboard]]**：Marketing Dashboard 是 metric layer，Markops 是包覆 dashboard 的 decision layer —— 教師補充強調「drowning in data」這個徵兆，暗示 dashboard 沒有 Markops 框架時容易反成負擔。
- **vs [[concepts/marketing-research-process]]**：Research Process 給 input，Markops 給 output 決策動詞（invest / maintain / milk / divest）。
- **vs [[concepts/integrated-digital-marketing-six-pillars]]**：六支柱是 execution-pillar 層（SEO / 社群 / 數據廣告 / O2O / 口碑 / PR），Markops 是包覆這些 execution pillars 的 portfolio decision 層 — Markops 決定 invest/milk 各 pillar 多少資源。

## 與業界「Marketing Ops」用法的差異

| 維度 | 本 source 的 Markops | 業界（HubSpot / Marketo） |
|---|---|---|
| 抽象層級 | Portfolio / 策略層 | Tooling / 流程層 |
| 核心指標 | CNC + MS | MQL → SQL conversion, attribution, MROI |
| 主導角色 | CMO / GM | Marketing Ops Manager / RevOps |
| 工具 | BCG matrix, gravity model | HubSpot / Marketo / Salesforce / Segment |

兩個用法都合理，但**不能互換**。wiki 同名造成混淆時應在條目開頭澄清語意。^[inferred]

## Open Questions

- Source 未提：1E（Environment）的具體拆解（PESTLE? 5 Forces? 自製框架?）
- Source 未提：CNC 計算的折現假設、跨期權衡規則
- Source 未提：與 OKR / KPI 體系如何 mapping
- 業界版 Marketing Ops 與本框架的整合可能性（要不要寫一個對照頁）

## Related

- [[concepts/5C-target-market-framework]]
- [[concepts/STP-framework]]
- [[concepts/7Ts-marketing-tactics]]
- [[concepts/G-STIC-framework]]
- [[concepts/marketing-dashboard]]
- [[concepts/bounded-rationality]] — 「反應太快」徵兆的對接
- [[references/kotler-keller-chernev-marketing-management-16e]] — Wave 3 案例補充
