---
title: Causality 三條件（共變 / 時間先行 / 排除其他解釋）
type: concept
domain: research-methods
tags: [causality, research, methodology, internal-validity]
aliases: [因果三條件, three conditions of causality]
sources:
  - reference:Bhattacherjee-Ch05-slides (pp.38-39)
  - reference:Bhattacherjee-Ch04-slides
  - reference:Colquitt-OB-Ch1
created: 2026-05-21
updated: 2026-05-21
summary: >-
  建立 causation（而非 correlation）必須同時滿足三條件：(1) Covariation 共變，(2) Temporal precedence 時間先行（因必先於果），(3) No plausible alternative explanation 排除 spurious correlation。對應 [[concepts/internal-validity]] 的核心。教師中文眉批：「共變 / 時間先行 / 沒有其他貌似為真的解釋」。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Causality 三條件

## 三條件

| # | 條件 | 中文（教師眉批） | 內容 |
|---|---|---|---|
| 1 | **Covariation of cause and effect** | 共變 | cause 發生 → effect 也發生；cause 不發生 → effect 不發生 |
| 2 | **Temporal precedence** | 時間先行 | cause 在時間上必須**先於** effect |
| 3 | **No plausible alternative explanation** | 沒有其他貌似為真的解釋 | 排除 spurious correlation 與 confounding variables |

來源：Bhattacherjee Ch5 slide pp.38-39；亦見於 [[concepts/scientific-method-OB|Colquitt OB Ch1]] 的相同三條件論述。^[extracted]

## 與不同 research design 的對應 ^[extracted]

| Design | Causality 強度 | 為何 |
|---|---|---|
| Laboratory experiment | 強 | 可 manipulate IV、控制 extraneous、隨機分派 |
| Field experiment | 中強 | manipulation OK，控制較弱 |
| Quasi-experimental | 中 | 缺 random assignment |
| Longitudinal field survey | 中 | 滿足 temporal precedence，但難排除 alternatives |
| **Cross-sectional field survey** | **弱** | IV 與 DV 同時測 → 違反條件 2 |
| Case research | 弱 | 缺 control → 難建立 covariation 與排除 alternatives |

## 經典反例 ^[extracted]

來自 [[concepts/scientific-method-OB|Colquitt OB Ch1]]：

> **冰淇淋銷量 vs 鯊魚攻擊次數**高度相關 — 但這是因為**夏天**這個共同混淆變數，不是冰淇淋導致鯊魚攻擊。

→ 滿足條件 1（covariation）但**不滿足條件 3**（plausible alternative = 夏天）。

## 條件 2 的細節：Temporal Precedence ^[extracted]

「因必須先於果」看似簡單，但在 cross-sectional survey 中常被忽略：
- 同一份問卷同時測 IV（leadership style）與 DV（employee satisfaction）→ 無法區分「leadership 影響 satisfaction」還是「satisfaction 員工對 leadership 評價偏正」
- 解法：**Longitudinal design**（不同 wave 測 IV 與 DV）或 **2SLS instrumental variable**（用 IV 處理內生性，[[concepts/instrumental-variable-2SLS]] 待寫）

## 條件 3 的細節：Plausible Alternatives ^[extracted]

[[concepts/internal-validity]] 列出常見 threats（Bhattacherjee Ch10）：
- **History**：研究期間發生外部事件
- **Maturation**：受試者自然成長（孩子變大、員工變熟練）
- **Testing**：pretest 本身影響 posttest
- **Instrumentation**：測量工具變化
- **Mortality**：dropouts 系統性
- **Regression to the mean**：極端值自然回歸

## 統計工具補強條件 3 ^[extracted]

| 工具 | 用途 |
|---|---|
| Statistical control（covariate 加入 regression） | 控制已知 confounders |
| Randomization | 抵消未知 confounders（experiment 的關鍵） |
| Instrumental variable / 2SLS | 處理內生性（reverse causality + omitted variable） |
| Difference-in-Differences | 政策研究中比較介入組與對照組的時間變化 |
| Regression Discontinuity | 連續變數的 cutoff 周圍比較 |
| Propensity Score Matching | observational data 模擬 randomization |

→ 醫療 AI 的 causal claim（「我們的 AI 改善 outcome」）通常需要 RCT 才能滿足三條件；observational study 強度不足。

## 與其他概念的連結 ^[inferred]

- [[concepts/scientific-method-four-criteria|Falsifiability]]：條件 3 在邏輯上對應 falsifiability — 必須排除 rival explanations 才能保住 theory
- [[concepts/inductive-vs-deductive-research]]：inductive 推論常滿足 1 但未必滿足 2、3（黑天鵝、銷售下滑案例）
- [[concepts/scientific-theory|Theory]]：[[concepts/scientific-theory|good theory]] 應解釋 **causation** 而不只是 prediction

## 醫療 AI PM 應用 ^[inferred]

部署 AI 系統前的「AI 改善 outcome」claim 須驗證三條件：

1. **Covariation**：AI deployment 期間 outcome 改善？（必要但不充分）
2. **Temporal precedence**：outcome 改善是在 AI 部署**之後**才發生？（cross-sectional 比較無法答）
3. **Alternative explanations**：是否同時換了主治醫師？醫院流程改造？疫情季節？
   - 若皆否 → 較可信 causation
   - 若皆是 → 只能 claim correlation

→ 這是醫療 AI 上市後 post-market surveillance 的核心方法論挑戰。

## Related

- [[concepts/internal-validity]]
- [[concepts/scientific-method-OB]] — Colquitt OB 版本
- [[concepts/inductive-vs-deductive-research]]
- [[concepts/research-design]]
- experimental design

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch5 slides pp.38-39
- [[references/colquitt-OB-textbook]] — Ch1 同論述
