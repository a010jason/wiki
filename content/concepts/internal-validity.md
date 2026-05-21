---
title: Internal Validity（內部效度）
type: concept
domain: research-methods
tags: [internal-validity, causality, research-design, methodology]
aliases: [internal validity, 內部效度, causality]
sources:
  - reference:Bhattacherjee-Ch05-slides (pp.38-39, 56-127)
  - reference:Bhattacherjee-Ch10-survey-experiment
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Internal validity = 觀察到的 DV 變化**確實**由 hypothesized IV 造成，而非 extraneous variable。需滿足 [[concepts/causality-three-conditions|因果三條件]]。實驗 design 強，cross-sectional survey 弱。常見威脅：history / maturation / testing / instrumentation / mortality / regression to mean。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Internal Validity（內部效度）

教師中文眉批：「**內部效度 / causality**」。^[extracted]

## 定義

> 觀察到的 dependent variable 變化**確實**由 hypothesized independent variable 造成，而非 extraneous variable。

## Causality 三條件 ^[extracted]

教師眉批：「**共變 / 時間先行 / 沒有其他貌似為真的解釋**」

詳見 [[concepts/causality-three-conditions]]。

1. **Covariation of cause and effect**
2. **Temporal precedence**
3. **No plausible alternative explanation**

## 強弱 design 對照 ^[extracted]

| Design | Internal validity | 為何 |
|---|---|---|
| Lab experiment | **強** | 能 manipulate IV、控制 extraneous variables、random assignment |
| Field experiment | 中強 | manipulation OK，但控制較弱 |
| Quasi-experimental | 中 | 缺 random assignment |
| Longitudinal survey | 中 | 滿足 temporal precedence |
| **Cross-sectional field survey** | **弱** | IV 與 DV 同時測，違反 temporal precedence；respondent bias |
| Case research | 弱 | 缺 control |

## 常見威脅 ^[extracted]

雖然 Ch5 slide **沒明列** Campbell & Stanley 經典 8 威脅命名，但 Ch10（experimental research）有：

| 威脅 | 含義 |
|---|---|
| **History** | 研究期間發生外部事件（疫情、政策） |
| **Maturation** | 受試者自然成長（孩子變大、員工變熟練） |
| **Testing** | Pretest 本身影響 posttest（學會做題） |
| **Instrumentation** | 測量工具改變（量表版本、實驗者熟練度） |
| **Mortality** | Dropouts 系統性（系統性流失改變樣本組成） |
| **Regression to the mean** | 極端值自然回歸 |
| **Selection** | 組與組之間 baseline 不同 |
| **Selection × 其他**（quasi-experiment 特有） | selection-maturation、selection-history 等 |

→ Bhattacherjee Ch5 slide 用一般語言提 spurious correlation、respondent bias、manipulation failure 等，**沒採 Campbell-Stanley 經典命名**（給 wiki-challenge 用：教師為何跳過？）。

## 改善 Internal Validity 的五種 Control ^[extracted]

詳見 [[concepts/research-design]]：

1. **Manipulation** — 操弄 IV
2. **Elimination** — 跨組固定 extraneous
3. **Inclusion** — 把 extraneous 納入 design
4. **Statistical control** — covariate 進 regression
5. **Randomization** — random selection + random assignment

## Respondent Bias（field survey 特有威脅）^[extracted]

社會性 desirable response 會傷 internal validity：
- Social desirability bias（受訪者答「應該的」答案）
- Common method bias（同一份問卷測 IV+DV 產生 inflated correlation）
- Acquiescence bias（傾向同意）

**降低 CMB 的方法**（[[concepts/common-method-bias]] 待寫）：
- Two-wave design（IV 與 DV 隔時間測）
- Different sources（自評 IV、他評 DV）
- Harman one-factor test
- Lindell-Whitney marker variable

## 對 PM / 醫療 AI 應用 ^[inferred]

聲稱「我們的產品提升了 outcome」前的 internal validity 自查：

| 提問 | 滿足？ |
|---|---|
| 用戶用了產品後 outcome 改善了嗎？（covariation） | 通常 yes |
| Outcome 改善是在使用**之後**？ | Cross-sectional 比較常違反 |
| 排除其他原因了嗎？（同期換主管、市場變化） | 通常未驗證 |

→ 若三者不能同時 yes，只能 claim correlation，不能 claim causal effect。

## Related

- [[concepts/causality-three-conditions]]
- [[concepts/external-validity]]
- [[concepts/construct-validity]]
- [[concepts/research-design]]
- [[concepts/common-method-bias]] — 待寫
- experimental design — 待寫

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch5 slides + Ch10 experimental research
