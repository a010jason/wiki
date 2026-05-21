---
title: AVE & Fornell-Larcker Criterion
type: concept
domain: research-methods
tags: [validity, AVE, fornell-larcker, CFA, SEM, methodology]
aliases: [AVE, Fornell-Larcker, average variance extracted, 平均變異抽取量]
sources:
  - reference:Fornell-Larcker-1981
  - reference:Bhattacherjee-Ch07-slides
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Fornell & Larcker (1981) JMR 經典：用 Average Variance Extracted（AVE，平均變異抽取量）評估 convergent + discriminant validity。**Convergent**：AVE ≥ 0.50（變異中超過一半被 construct 解釋）。**Discriminant（Fornell-Larcker criterion）**：每個 construct 的 √AVE > 該 construct 與其他 construct 的所有 correlation。教師中文眉批：「AVE 高於 0.36 為勉強接受標準」— 台灣 MIS 業界妥協值。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# AVE & Fornell-Larcker Criterion

Fornell & Larcker (1981) *Journal of Marketing Research* 經典。^[extracted]

## AVE 定義

**Average Variance Extracted**：每個 construct 的指標方差中，被該 construct 解釋的平均比例。

可粗略視為「**construct 解釋自身 indicators 變異的平均能力**」。

## 兩種用途

### 1. Convergent Validity

判準：**AVE ≥ 0.50**

意義：construct 變異 > 50% 來自自身（而非 measurement error） → indicators 收斂到同一 construct。

**勉強接受標準**：AVE ≥ 0.36（教師中文眉批，台灣 MIS 業界妥協值，比 Fornell-Larcker 原文寬鬆）。^[extracted]

### 2. Discriminant Validity（Fornell-Larcker Criterion）

判準：**每個 construct 的 √AVE > 該 construct 與其他 construct 的所有 correlation**

意義：construct 與自身 indicators 的關係**強於**與其他 construct 的關係 → 與其他 construct 區辨出來。

## Correlation Matrix 對角線顯示 √AVE ^[extracted]

教師 slide 用 4-construct 矩陣示範：

| | C1 | C2 | C3 | C4 |
|---|---|---|---|---|
| **C1** | **√AVE₁** | r₁₂ | r₁₃ | r₁₄ |
| **C2** | r₂₁ | **√AVE₂** | r₂₃ | r₂₄ |
| **C3** | r₃₁ | r₃₂ | **√AVE₃** | r₃₄ |
| **C4** | r₄₁ | r₄₂ | r₄₃ | **√AVE₄** |

對每個 construct，對角線（√AVE）必須**大於**該列 / 該欄的所有 off-diagonal r。

## Confidence Interval 範例（slide pp.828-836）^[extracted]

CFA output 範例：
- F1 與 F5 的 correlation = 0.714，SE = 0.044
- 兩倍 SE = 0.088
- 95% CI = 0.714 ± 0.088 = **(0.626, 0.802)**
- **CI 不含 1.0** → 支持 discriminant validity（兩 construct 真的不一樣）

## 三種 Discriminant Validity 檢定 ^[extracted]

Lin (2010) 應用 Fornell & Larcker (1981)：

1. **Chi-square difference test**（限制 vs 不限制模型；Bonferroni 校正 α=0.01 時 critical χ² = 11.58）
2. **Confidence interval test**（construct 間 r CI 不含 1.0）
3. **Variance extracted test**（√AVE > inter-construct r）

→ 三者全過才是 strong discriminant validity。

## AVE 與其他 metric 對照 ^[inferred]

| Metric | 用途 | Threshold |
|---|---|---|
| **AVE** | Convergent | ≥ 0.50（嚴格）/ ≥ 0.36（勉強） |
| **Composite Reliability (CR)** | 內部一致性 | > 0.70 |
| **Cronbach α** | 內部一致性 | > 0.70 |
| **√AVE > r** | Discriminant | Fornell-Larcker |
| **HTMT** | Discriminant（近代） | < 0.85 / 0.90 |

## HTMT（Heterotrait-Monotrait Ratio）— Fornell-Larcker 的繼任者 ^[inferred]

Henseler 等（2015）批評 Fornell-Larcker criterion：在 simulation 中 detect 不到部分 discriminant validity 問題 → 推 HTMT：

> **HTMT < 0.85**（嚴格）或 **HTMT < 0.90**（寬鬆）

近年 PLS-SEM 期刊論文常**同時**報 Fornell-Larcker + HTMT 雙保險。

## 對 PM / 醫療 AI 量表開發應用 ^[inferred]

當設計醫療 AI patient experience / clinician adoption 量表時：

| Step | 檢驗 |
|---|---|
| 1. Pilot data 跑 EFA | factor loading ≥ 0.60, cross ≤ 0.30 |
| 2. Calculate Cronbach α | ≥ 0.70 per factor |
| 3. CFA model fit | CFI / TLI > 0.90, RMSEA < 0.08 |
| 4. **AVE per construct** | **≥ 0.50** |
| 5. Composite Reliability | > 0.70 |
| 6. **√AVE > all inter-construct r** | Fornell-Larcker pass |
| 7. **HTMT < 0.85** | bonus discriminant evidence |

跳過 AVE / Fornell-Larcker → reviewers 直接 reject paper 或量表不可信。

## 限制 ^[inferred]

- AVE 只適用 **reflective measurement**（[[concepts/reflective-vs-formative-measurement|formative construct]] 沒有 AVE 概念）
- Fornell-Larcker 在 simulation 中**敏感度不足**（Henseler 2015 批評）→ 近代偏好 HTMT
- 「0.36 勉強接受」沒有理論基礎，是業界經驗值；引用須註明來源
- 取 √AVE 與 r 比較有點 ad hoc — 為何 √ 而不是平方根的其他變體？

## Related

- [[concepts/construct-validity]]
- convergent validity
- discriminant validity
- confirmatory factor analysis
- exploratory factor analysis
- [[concepts/PLS-SEM-vs-CB-SEM]]

## Sources

- Fornell, C., & Larcker, D. F. (1981). Evaluating structural equation models with unobservable variables and measurement error. *Journal of Marketing Research*, 18(1), 39-50.
- Henseler, J., Ringle, C. M., & Sarstedt, M. (2015). A new criterion for assessing discriminant validity in variance-based SEM. *JAMS*, 43(1), 115-135.
- Lin, C.-P. (2010). *Journal of Business Ethics*, 94, 517-531.
- [[references/bhattacherjee-social-science-research]] — Ch7 slides
