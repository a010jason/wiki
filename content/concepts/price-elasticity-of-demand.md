---
title: Price Elasticity of Demand (需求的價格彈性)
type: concept
domain: marketing
tags: [price-elasticity, demand-curve, pricing, kotler, microeconomics, mgmt]
aliases: [price elasticity, elastic demand, inelastic demand, PED]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch11
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kotler 16e Ch11 介紹的核心定價概念 — 需求對價格變動的敏感度。Elastic demand（彈性 > 1）：降價帶動更大比例的銷量增加；Inelastic demand（彈性 < 1）：降價也不能拉動銷量。是 [[concepts/pricing-6-steps]] 第 2 步的核心。也是 [[concepts/brand-equity]] 的下游效應 — brand power 降低需求彈性。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.80
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Price Elasticity of Demand

## What It Is

**需求彈性（Price Elasticity of Demand, PED）** = 需求量變動百分比 ÷ 價格變動百分比^[extracted Ch11 p.8-9]

```
PED = (%ΔQ) / (%ΔP)
```

由於價格上升通常使需求下降，PED 通常是負值；實務常取絕對值。

| 數值範圍 | 類型 | 意義 |
|---|---|---|
| \|PED\| > 1 | **Elastic demand**（有彈性） | 降價 → 銷量增加比例 > 降價比例 → 總收入增加 |
| \|PED\| = 1 | Unit elastic | 收入不變 |
| \|PED\| < 1 | **Inelastic demand**（缺乏彈性） | 降價也不太拉銷量 → 總收入下降 |

## 圖示

Kotler 16e Ch11 Figure 11.1：^[extracted Ch11 p.9]

```
Price                          Price
  ↑                              ↑
  │                              │
  │ ╲                            │
  │  ╲                           │  ╲
  │   ╲                          │     ╲
  │    ╲ Inelastic              │       ╲ Elastic
  │     ╲                        │         ╲
  │      ╲                       │           ╲
  └────────→ Quantity            └─────────────→ Quantity

  陡曲線：降價 5% → Q 增 1%       平曲線：降價 5% → Q 增 15%
```

教師批註：「**Inelasticity: 就算降價，也不下多少**」— 解釋 inelastic 的直觀含義。^[inferred from instructor annotation Ch11 p.15]

教師批註：「**不是經濟學家想的直線！**」— 提示真實需求曲線不是線性。^[inferred from instructor annotation Ch11 p.15]

## 影響彈性的因素

需求彈性受多個因素驅動：^[inferred Ch11 — 經濟學共識]

| 因素 | 對彈性的影響 |
|---|---|
| **替代品豐富度** | 替代品多 → 彈性高（容易跳船） |
| **必需品 vs 奢侈品** | 必需品彈性低；奢侈品彈性高 |
| **價格佔收入比** | 比例高 → 彈性高（買房 vs 買糖） |
| **時間長短** | 短期彈性低（習慣難改）；長期彈性高 |
| **品牌忠誠** | 高 brand equity → 彈性低 |
| **產品差異化程度** | 差異化高 → 彈性低 |

## 與 Brand Power 的關係

[[concepts/brand-equity]] 的核心下游效應之一就是**降低需求彈性**：^[extracted Ch10 p.9]

> Brand power 與需求的價格彈性、市場份額、成本結構、獲利能力有關。

意涵：高 brand power → inelastic demand → 漲價時客戶不流失。這是 brand 對股東價值的最直接機制。

## 跨 Channel 的彈性差異

數位通路與實體通路的彈性差異：^[inferred — 業界共識]

- **數位**：價格透明（比價 app 一鍵搜尋）→ 高彈性
- **實體**：搜尋成本高、品牌信任 → 低彈性

意涵：同樣產品在不同通路應採取不同價格策略，這是 Amazon 與實體店 retailer 摩擦的根因。

## Source 反例 / 質疑

- **平均彈性 vs 個體彈性**：總體市場 PED 可能 0.8（inelastic），但對某 segment 是 2.0（elastic）— 平均掩蓋差異。^[inferred]
- **不對稱彈性**：消費者對漲價的反應比降價的反應更激烈（loss aversion）— 古典 PED 假設對稱。^[inferred]
- **參考價格（reference price）影響**：實際彈性受到客戶**期望價**影響，不是純粹的當下價格。^[extracted Ch11 p.5]
- **市場演化**：產品從新奇到普及到 commodity 的演化中，PED 通常升高（替代品變多、客戶教育完成）— 不是靜態。^[inferred]

## Jason 觀察：醫療 AI 的需求彈性

醫療 AI 的需求彈性**極度 inelastic**：^[inferred — Jason 個人延伸]

原因：
1. 醫院決策是 budget-driven，不是 price-shopping
2. 切換成本極高（PACS 整合、訓練、合約）
3. 信任驅動 → brand power 強 → 彈性更低
4. 替代品稀少（同 modality 的競品有限）

意涵：**醫療 AI 廠商不該打價格戰** — inelastic 市場降價只是吃自己利潤、不會擴大銷量。應走 [[concepts/luxury-branding]] 的高端路線。

但有例外：**中國市場** — 教師批註「**China race to the bottom**」— 中國醫療 AI 廠商已經把市場拉到價格戰，elasticity 升高。海外廠商進中國要重新評估。

## Related

- [[concepts/pricing-6-steps]] — PED 是 Step 2 的核心
- [[concepts/pricing-methods]] — 不同方法對 PED 有不同假設
- [[concepts/brand-equity]] — Brand power → inelastic 的因果鏈
- [[concepts/customer-value-proposition]] — Value 高 → 彈性低
- [[references/kotler-keller-chernev-marketing-management-16e]]
