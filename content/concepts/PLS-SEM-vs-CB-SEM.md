---
title: PLS-SEM vs CB-SEM（兩 SEM 派系對照）
type: concept
domain: research-methods
tags: [SEM, PLS, CB-SEM, structural-equation-modeling, methodology]
aliases: [PLS-SEM, CB-SEM, partial least squares SEM, covariance-based SEM]
sources:
  - reference:Wold-PLS
  - reference:Hu-Bentler-1998
  - reference:Henseler-2014
  - reference:Chandra-2022-JMIS
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Structural Equation Modeling 兩大派系：CB-SEM（Covariance-Based，LISREL/Amos/Mplus/Lavaan，預設 reflective + multivariate normality + 大樣本）vs PLS-SEM（Partial Least Squares，SmartPLS，可處理 formative + 小樣本 + 非常態，但 fit indices 較少）。常見實務：兩種互補 — PLS-SEM 做主分析，CB-SEM 補 CFI/TLI 適配指標。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.4
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# PLS-SEM vs CB-SEM

## 兩派系對照 ^[extracted, inferred]

| 維度 | **CB-SEM**（Covariance-Based） | **PLS-SEM**（Partial Least Squares） |
|---|---|---|
| 演算法 | 共變數矩陣 fit | partial least squares iteration |
| 軟體 | LISREL / Amos / Mplus / **Lavaan (R)** | **SmartPLS** / WarpPLS |
| 預設 measurement | **Reflective** 為主 | 可處理 **Formative** |
| Sample size 要求 | 大（N > 200 常見） | **小樣本可（N ~ 50-100）** |
| 分布假設 | Multivariate normality | **無 distribution 假設** |
| 主要目的 | **Theory confirmation** | **Theory exploration / prediction** |
| Fit indices | 完整（CFI / TLI / RMSEA / χ²） | 受限（SRMR / dULS / dG / NFI） |
| 因子分數 | 估出 latent score（indeterminate） | **明確算出 composite score** |

## CB-SEM 適配指標 ^[extracted]

| 指標 | Threshold | 解讀 |
|---|---|---|
| **χ² / df** | < 3（寬鬆）/ < 2（嚴格） | 比卡方對 df |
| **CFI**（Comparative Fit Index） | **> 0.90**（acceptable）/ > 0.95（good） | 與 null model 比 |
| **TLI**（Tucker-Lewis Index, NNFI） | **> 0.90** | 懲罰模型複雜度 |
| **RMSEA**（Root Mean Square Error of Approximation） | **< 0.05**（close fit）/ < 0.08（reasonable） | 母體適配誤差 |
| **SRMR**（Standardized Root Mean Residual） | **< 0.08** | 殘差大小 |

## PLS-SEM 適配指標 ^[extracted]

PLS-SEM 因為不基於共變數矩陣，傳統 CFI / TLI 不適用。Henseler 等發展替代：

| 指標 | Threshold | 來源 |
|---|---|---|
| **SRMR** | **< 0.08** | Hu & Bentler 1998 |
| **dULS / dG**（modified distance metrics） | < HI 95% bootstrap quantile | Henseler 2014 |
| **NFI**（Normed Fit Index） | > 0.90 | Bentler & Bonett 1980 |

→ **NFI 偏好 over-parameterized 模型，不推薦單獨用**（chatbot study 自己承認）。

## 何時用 PLS-SEM ^[inferred]

- 小樣本（N < 200）
- 構念含 **formative measurement**
- 資料非常態
- 探索性研究、預測導向
- 模型複雜（多 indicator、多 latent variable、多 path）

## 何時用 CB-SEM ^[inferred]

- 大樣本（N > 250）
- 純 reflective measurement
- 多變量常態
- 理論確認（hypothesis testing）
- 需要完整 fit indices 為 reviewer 接受

## Chandra 2022 雙用範例 ^[extracted]

[[references/chandra-2022-human-like-AI-competencies]] 同時用兩種：

| Stage | 工具 | 結果 |
|---|---|---|
| 主要分析 | PLS-SEM (SmartPLS) | SRMR 0.054-0.057（OK） |
| 補強 | CB-SEM (R Lavaan) | CFI=0.916, TLI=0.905（OK）, RMSEA=0.046 |

**注意：附錄 PDF 印 RMSEA = 0.406 應為 typo（與「< 0.05 close fit」自相矛盾，實際應為 0.046）。**^[ambiguous]

## SEM 結構模型三階段比較（Chandra 2022 範例）^[extracted]

| Model | 內容 | R² | ΔR² |
|---|---|---|---|
| Model 1 | Only controls | 0.325 | — |
| Model 2 | + IV（無 mediator） | 0.492 | 0.167 |
| Model 3 | + User Trust mediator | 0.514 | 0.022 |

→ 標準 mediation analysis 報告格式。

## Mediation Analysis in PLS-SEM ^[extracted]

| 指標 | 含義 |
|---|---|
| **Direct effect** | IV → DV 直接路徑 |
| **Specific indirect effect** | IV → Mediator → DV 路徑 |
| **Total effect** | Direct + indirect |
| Partial vs full mediation | β drops but ≠ 0（partial）/ β → 0 not significant（full） |

Chandra 2022 結果：cognitive & emotional 部分中介（β 降但未歸零）。

## Stone-Geisser Q²（Predictive Relevance）^[extracted]

PLS-SEM 用 **blindfolding** 算 Q²：
- **Q² > 0** → 模型有 predictive relevance
- Chandra 2022 omission distance = 7，三模型 Q² 全 > 0 → confirm

## 對 PM / 醫療 AI 應用 ^[inferred]

設計醫療 AI 量表 + 驗證 user experience 模型時的工具選擇：

| 情境 | 建議 |
|---|---|
| Pilot study N=50-100 | **PLS-SEM** |
| 大規模 validation N>250 | **CB-SEM** |
| 含 formative metric（如 satisfaction = 速度 + 準確 + 親切 的 index） | **PLS-SEM** |
| 純 reflective + reviewer 要求完整 fit | **CB-SEM**（Lavaan free / Amos / Mplus） |
| 探索新 chatbot UX 對 trust 影響 | **PLS-SEM** |
| 確認既有 TAM / UTAUT 在醫療場景 | **CB-SEM** |

近年期刊論文常**雙用**（PLS 主分析 + CB-SEM 補 fit indices）以避免 reviewer 質疑。

## 限制 ^[inferred]

- PLS-SEM 早期被批為「sample-size cheap excuse」— 小樣本下偏誤仍存在
- CB-SEM 對 multivariate normality 違反的 robustness 有限（Bootstrapping 補救）
- 兩派系陣營有意識形態之爭（Marketing PLS 派 vs Psychology CB-SEM 派）
- **HTMT、Cragg-Donald F、SRMR threshold 都是 simulation-based heuristic**，非絕對門檻

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 2 narrow / 3 brittle / 0 unsupported。整頁主要弱點是**呈現兩派系時偏 Hair-Henseler PLS 立場，方法論 critique literature 缺席**：(1) PLS 小樣本 + formative 優勢被 Rönkkö-Evermann 2013 *ORM* "Critical Examination of Common Beliefs" + Goodhue-Lewis-Thompson 2012 *MISQ* 系列 critique 系統性反駁 10 年未引；(2) CB-SEM Hu-Bentler 1998 thresholds 被 Marsh-Hau-Wen 2004 *SEM* "In Search of Golden Rules" + Heene 2011 警告不適用於不同 N / model complexity；(3) confirmation vs exploration 二分過時，Shmueli 2010 *Stat Sci* "To Explain or to Predict?" + PLSpredict 2016 已模糊邊界；(4) PLS fit indices 是 Henseler 派 vs Rönkkö 派 ongoing 爭議，page 偏 Henseler 立場；(5)「雙用 best practice」page 自承為 reviewer 接受目的（sociology of science 邏輯），非方法論 best practice，Antonakis et al. 2010 *LQ* 反對為審稿妥協嚴謹度未引。
>
> `base_confidence`：0.40 → 0.40（已在 brittle cap 0.55 內，原值偏低反映 page 自我警示）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/PLS-SEM-vs-CB-SEM.md`。

## Related

- [[concepts/construct-validity]]
- [[concepts/AVE-fornell-larcker]]
- confirmatory factor analysis
- exploratory factor analysis
- [[concepts/reflective-vs-formative-measurement]] — PLS-SEM 更擅長處理 formative
- [[references/chandra-2022-human-like-AI-competencies]] — PLS + CB 雙用範例

## Sources

- Wold, H. (1982). *Soft modeling: The basic design and some extensions*.
- Hu, L., & Bentler, P. M. (1998). Fit indices in covariance structure modeling. *Psychological Methods*, 3(4), 424-453.
- Henseler, J., et al. (2014). Common beliefs and reality about PLS. *Organizational Research Methods*, 17(2), 182-209.
- Hair, J. F., et al. (2017). *A Primer on Partial Least Squares Structural Equation Modeling (PLS-SEM)*.
