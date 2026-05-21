---
title: Instrumental Variable + 2SLS（處理內生性）
type: concept
domain: research-methods
tags: [IV, 2SLS, endogeneity, causality, econometrics, methodology]
aliases: [instrumental variable, 2SLS, 工具變數, two-stage least squares]
sources:
  - reference:Hausman-1978
  - reference:Stock-Yogo-2005
  - reference:Chandra-2022-JMIS
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Instrumental Variable (IV) + Two-Stage Least Squares (2SLS) 處理 endogeneity（內生性，reverse causality / omitted variable / measurement error 等）。IV 必須(1) 與內生 IV 相關（relevance）、(2) 與 error 不相關（exogeneity / exclusion restriction）。穩健性檢驗三劍客：first-stage F、Cragg-Donald Wald F（> 10）、Sargan / Basman、Durbin-Wu-Hausman endogeneity test。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Instrumental Variable + 2SLS

處理 **endogeneity（內生性）** 的計量經濟學工具。^[extracted]

## 什麼是 Endogeneity ^[inferred]

當 IV 與 error term 相關時，OLS 估計值有偏。三大來源：

1. **Reverse causality**（Y → X 而非 X → Y）
2. **Omitted variable bias**（漏掉的 confounder 同時影響 X 與 Y）
3. **Measurement error in X**

→ 違反 [[concepts/causality-three-conditions|因果三條件]]之條件 3（無 plausible alternative）。

## IV 的兩條件 ^[extracted]

好的 IV 必須：

| 條件 | 內容 | 操作 |
|---|---|---|
| 1. **Relevance** | IV 與內生 IV 相關 | First-stage regression 顯著 |
| 2. **Exogeneity / Exclusion restriction** | IV 與 error 不相關（只透過內生 IV 影響 Y） | 理論論證 + Sargan / Basman test |

## 2SLS 流程 ^[extracted]

```
Stage 1: 內生 IV = α + β·IV + γ·controls + ε₁
              → 得 X̂（predicted X）
Stage 2: Y = α' + β'·X̂ + γ'·controls + ε₂
              → β' 是 IV-adjusted 因果效應
```

## 三劍客穩健性檢驗 ^[extracted]

### 1. First-stage F（IV Relevance）

- F-statistic 應顯著
- 強 IV 的 first-stage 應有高 R²

### 2. Cragg-Donald Wald F（Weak IV Test）

- **Threshold：> 10**（Stock & Yogo 2005）
- < 10 → IV 太弱，2SLS 偏誤可能大於 OLS
- Chandra 2022 結果：17.58 / 10.0 / 26.35 → cognitive 與 emotional 通過，relational 邊緣

### 3. Sargan / Basman Overidentifying Restrictions Test

- 當 IV 數 > 內生 IV 數 時可做
- **H₀：所有 IV exogenous**
- **不拒絕 H₀** → 支持 exogeneity（**但不能證明**）

### 4. Durbin / Wu-Hausman Endogeneity Test

- **H₀：X exogenous（不需 IV）**
- **拒絕** → 內生性存在，2SLS 有 added value
- **不拒絕** → OLS 即可
- Chandra 2022：cognitive 與 emotional 拒絕（內生），**relational 不拒絕（外生）** → relational 不需 IV

## Chandra 2022 經典範例 ^[extracted]

對應 [[concepts/human-like-AI-competencies|chatbot 三維能力]]，各找兩個 IV：

| 內生 IV | IV 工具 |
|---|---|
| Cognitive | Usefulness + Need fulfillment-autonomy |
| Relational | Openness-to-novelty + Empathy |
| Emotional | Entertainment + Social presence |

**2SLS 結果**：
- Cognitive β=1.15 (p<0.01) — 顯著正向
- Emotional β=1.23 (p<0.01) — 顯著正向
- Relational β=0.42 (ns) — **不顯著**

→ 與 OLS 結論一致（[[references/chandra-2022-human-like-AI-competencies|H1b 不支持]]在 IV 後仍不支持）。

## 替代與互補方法 ^[inferred]

| 方法 | 與 IV 對比 |
|---|---|
| **OLS with controls** | 處理已知 confounders，不處理 reverse causality |
| **Difference-in-Differences (DiD)** | 政策研究常用，需要 treatment timing |
| **Regression Discontinuity Design (RDD)** | 連續變數 cutoff 周圍比較 |
| **Propensity Score Matching (PSM)** | 模擬 randomization，假設 observable controls 充足 |
| **Heckman Selection Correction** | 處理 sample selection bias |
| **Fixed Effects** | 控制 time-invariant unobservables |

選擇取決於資料結構 + 假設可信度。

## 對 PM / 醫療 AI 應用 ^[inferred]

PM A/B test 與 observational study 的差距：
- **A/B test**（experiment）：隨機分派 → 自動滿足 exogeneity → 不需要 IV
- **Observational data**（多數產品 dashboard） → 想 claim causality 需要：
  - 找 natural experiment（如 GDPR rollout 作 IV）
  - 跑 DiD（policy change 前後對比）
  - PSM（matching control 與 treatment 用戶）

醫療 AI 上市後 claim「我們的 AI 降低 missed diagnosis」需要 IV 或 RCT，否則只是 correlation。

## 限制 ^[inferred]

- **找到「真正」exogenous IV 極難** — 「good IV is hard」是計量經濟學共識
- IV 強度不足（weak IV）→ 2SLS 偏誤可能大於 OLS（Bound, Jaeger, Baker 1995）
- Exclusion restriction（exogeneity）**不可實證測試** — 永遠是 theoretical argument
- 多重 IV 解讀困難（LATE：Local Average Treatment Effect 只對 compliers 適用）

## Related

- [[concepts/causality-three-conditions]]
- [[concepts/internal-validity]]
- [[concepts/common-method-bias]] — 處理同 method 偏誤，IV 處理內生性
- [[references/chandra-2022-human-like-AI-competencies]] — 完整 2SLS 套餐
- [[references/huang-2022-firm-climate-risk-bank-loan]] — 反例（未做 IV，被學生質疑）

## Sources

- Hausman, J. A. (1978). Specification tests in econometrics. *Econometrica*, 46(6), 1251-1271.
- Stock, J. H., & Yogo, M. (2005). Testing for weak instruments in linear IV regression.
- Wooldridge, J. M. *Econometric Analysis of Cross Section and Panel Data*.
- [[references/chandra-2022-human-like-AI-competencies]] — JMIS 完整應用範例
