---
title: Good Theory 評估五準則
type: concept
domain: research-methods
tags: [theory, popper, ockham, methodology, falsifiability, parsimony]
aliases: [good theory criteria, theory evaluation, 好理論判準]
sources:
  - reference:Bhattacherjee-Ch04-slides (pp.38-58)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  評估 theory 好壞的五準則：(1) Logical consistency（內部邏輯）、(2) Explanatory power（解釋力，可用 R²）、(3) Falsifiability（Popper 可否證性）、(4) Parsimony（Ockham 簡約）、(5) Generalizability（推廣性）。Falsifiability 與 Parsimony 是核心張力來源。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.5
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# Good Theory 評估五準則

## 五準則 ^[extracted]

| # | 準則 | 中文 | 評估方式 |
|---|---|---|---|
| 1 | **Logical consistency** | 邏輯一致 | constructs / propositions / boundary 之間邏輯一致？ |
| 2 | **Explanatory power** | 解釋力 | 常以 regression 的 R²（variance explained）衡量；解釋目標 phenomenon 優於 rival theory |
| 3 | **Falsifiability** | 可否證性 | [[concepts/falsifiability-popper]]：能被 disprove |
| 4 | **Parsimony** | 簡約 | Ockham's razor：用最少變數解釋最多 phenomenon |
| 5 | **Generalizability** | 推廣性 | 含在 parsimony 討論中；parsimonious theory 較易 generalize |

## 1. Logical Consistency ^[extracted]

範例反面：theory 假設 rationality，但 construct 卻包含 non-rational concept → 不一致 → poor theory。

## 2. Explanatory Power ^[extracted]

操作化常用 R²（variance explained）：
- UTAUT 在 longitudinal study 中解釋 **70% 的 usage intention 變異**（slide 強調這是 IS 理論的高點）
- TAM 通常 40-50% R²
- 其他多數 social science theory R² < 0.20

**質性研究的對應**：詳盡解釋 phenomenon 的能力（depth、nuance）。

## 3. Falsifiability ^[extracted]

[[entities/Karl-Popper]] 1940s 提出。詳見 [[concepts/falsifiability-popper]]。

關鍵區分：
- **Theory falsifiable** = 好條件（給人證明它錯的機會）
- **Theory falsified** = 表示它本來就差

Tautology（「高溫的日子是熱天」）不可實證測試 → 不是 theory。

## 4. Parsimony（Ockham's Razor）^[extracted]

源自 14 世紀 Father William of Ockham：

> 在能充分解釋觀察證據的競爭性解釋中，**最簡單（最少變數 / 最少假設）的理論最好**。

Parsimonious theory：
- 有較高 degrees of freedom
- 較易 generalize
- 不能無限增加 constructs，否則違背「simplified explanation」的本意

**Parsimony 操作化案例**：Li et al. (2006) Omega SCM 研究 — 用 **sequential Chi-square difference test** 比較 proposed model 與三個 alternative models；α=0.05 下，移除任何一條連結都顯著降低模型適配度 → 所有連結都重要 → proposed model 被採用為 parsimonious version。

教師中文眉批：「用來判斷模型之間的差異是否具有統計學上的顯著性...意味著每次移除連結後，模型的適配度顯著降低，這些連結對模型是重要的。」

## 5. Generalizability ^[extracted]

含在 parsimony 討論中。Parsimonious theory 較易推廣到其他 context、setting、population。

但 generalizability 也受 [[concepts/external-validity]] 影響 — sample 限制、boundary conditions 收窄都會降低 generalizability。

## 五準則間的張力 ^[inferred]

| 衝突對 | 張力 |
|---|---|
| Falsifiability vs Parsimony | 為維持 falsifiability 增加 epicycles → 違反 parsimony |
| Explanatory power vs Parsimony | 加更多 construct 必能增加 R² → 但降低 parsimony |
| Generalizability vs Boundary conditions | 收窄 boundary 提升 internal consistency → 降低 generalizability |
| Logical consistency vs 跨領域 borrowing | 跨領域類比（如核爆 → network growth）有 logical 跳躍風險 |

## 對 PM 工作的應用 ^[inferred]

PM strategy 也應跑五準則 self-check：

| 準則 | PM 應用 |
|---|---|
| Logical consistency | 願景、目標、KPI 是否邏輯一致？ |
| Explanatory power | 這個 framework 真的解釋為什麼用戶留下嗎？ |
| Falsifiability | 哪些 metric 能證明 hypothesis 錯？ |
| Parsimony | 你的 strategy 是不是「啥都解釋」？ |
| Generalizability | 跨地區 / 跨用戶 segment 適用嗎？ |

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 3 narrow / 2 brittle / 0 unsupported。主要弱點：100% Bhattacherjee Ch4 single-source；Kuhn 1962 puzzle-solving / Lakatos 1970 progressive programmes / Davis 1971 interestingness 等 alternative criteria 未提；R² 操作化是 1980s textbook simplification，adjusted R² / AIC / BIC / Shmueli 2010 explanatory-vs-predictive 區分缺席；Ockham parsimony 在 ML scaling laws (Kaplan 2020) + double-descent (Belkin 2019 PNAS) 領域實證失敗，Forster-Sober 1994 AIC 形式 substitute 未提；五準則間 tensions 描述真實但 Akaike 1973 / Schwarz 1978 / Pareto frontier / Bayesian model averaging 50 年發展未提；跨領域盲點明顯。
>
> `base_confidence`：0.50 → 0.50（brittle cap 0.55 內）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/attributes-of-good-theory.md`。

## Related

- [[concepts/scientific-theory]]
- [[concepts/theory-building-blocks-whetten]]
- [[concepts/falsifiability-popper]]
- [[concepts/scientific-method-four-criteria]]
- [[entities/Karl-Popper]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch4 slides pp.38-58
