---
title: 期望值模型（Expectancy-Value Model）
type: concept
domain: marketing
tags: [marketing, consumer-behavior, decision-model, kotler]
aliases: [Expectancy-Value Model, EV model, 多屬性評估模型]
sources:
  - Kotler-MM16e-Ch03
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kotler Ch03 Evaluation of Alternatives 階段引入：消費者對品牌進行多屬性評估的算法。每品牌看成一組屬性，每屬性有「相信此品牌在該屬性的表現」(belief, B_i) × 「該屬性對自己的重要性」(evaluation, E_i)；最終態度 A = Σ B_i × E_i。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# 期望值模型（Expectancy-Value Model）

## 算式

$$A = \sum_{i} B_i \times E_i$$

| 符號 | 意涵 |
|---|---|
| $A$ | 對該品牌的整體態度（attitude score） |
| $B_i$ | Belief：消費者相信此品牌在屬性 $i$ 上的表現程度 |
| $E_i$ | Evaluation：該屬性對消費者的重要性／價值 |

^[extracted from Kotler Ch03 p.27-28]

## Kotler 的範例（Table 3.1 Laptop Choice Set）

對 laptop 採用 4 個屬性評估 4 個品牌：^[extracted]

| 屬性 | A | B | C | D |
|---|---:|---:|---:|---:|
| Memory Capacity | 8 | 7 | 10 | 5 |
| Graphics Capability | 9 | 7 | 4 | 3 |
| Size and Weight | 6 | 7 | 3 | 8 |
| Price | 9 | 7 | 2 | 5 |

→ 每個 $B_i$ 乘以該屬性對使用者的 $E_i$ 後加總，得 4 個品牌的 attitude score，比較選最高的。

## 在 Kotler 決策模型中的位置

> "Evaluation of alternatives: Beliefs and attitudes, Information processing, Expectancy-value model" ^[extracted from Ch03 p.27]

Expectancy-Value 是 **Evaluation of Alternatives 階段**的核心評分算法 — 把消費者腦中對品牌的模糊感受量化為可比較的分數。^[inferred]

## 限制／適用邊界

- **適用 high-involvement 決策**：消費者願意花認知資源計算的場景（買筆電、買車、買保險）
- **Low-involvement 改用 decision heuristics**（捷思）：消費者直接憑印象、品牌、推薦人選擇，**不**做完整 expectancy-value 計算 ^[inferred from Kotler Ch03 p.30 ELM]
- Kotler 未提屬性數的上限（超過幾個屬性消費者就放棄算？）^[ambiguous]

## Related

- [[concepts/buying-decision-process-consumer]] — Evaluation 階段
- [[concepts/successive-sets]] — Choice Set 內部評分（提供候選給此模型）
- [[concepts/perceived-risk]] — Purchase 階段的 intervening factor
- [[concepts/customer-journey-map]] — 跨時間延伸
- [[references/kotler-keller-chernev-marketing-management-16e]] — Source

## Open Questions

- Belief × Evaluation 是 additive 還是 multiplicative？compensatory vs non-compensatory 模型差異？^[ambiguous]
- AI 推薦演算法是否在替使用者執行此計算？對行銷端有何影響？^[ambiguous]
