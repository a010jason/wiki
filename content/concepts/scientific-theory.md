---
title: Scientific Theory
type: concept
domain: research-methods
tags: [theory, research, methodology, causality, falsifiability]
aliases: [theory, scientific theory, 科學理論]
sources:
  - reference:Bhattacherjee-Ch04-slides
  - reference:Bhattacherjee-SSR-book (Ch4)
  - reference:Whetten-1989
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Theory 是 constructs + propositions + logic + boundary conditions 組成的系統，在某些 assumptions 下對 phenomenon 提供 logical / systematic / coherent 的解釋。核心強調「why」而非「what」或「how」。與 prediction 區分：prediction 只需 correlation，explanation 需要 causation 三條件。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# Scientific Theory

## 定義 ^[extracted]

> Scientific theory 是 constructs（concepts）和 propositions（constructs 之間的關係）組成的系統，在某些 assumptions 與 boundary conditions 下，對 phenomenon 提供 logical, systematic, coherent 的解釋。

核心：**解釋「why」事情會發生，不只是 describe 或 predict**。

## Prediction vs Explanation ^[extracted]

關鍵區分：

| 維度 | Prediction | Explanation |
|---|---|---|
| 需求 | Correlations | Causation 三條件 |
| 條件 | Statistical relationship | [[concepts/causality-three-conditions]] |
| 例子 | 黑箱 ML 模型可預測但說不清為什麼 | Theory 須能解釋機制 |

Statistically significant correlations **不必然**代表 causation。

詳見 [[concepts/causality-three-conditions]]。

## Idiographic vs Nomothetic 解釋 ^[extracted]

| 取向 | 範圍 | 範例 |
|---|---|---|
| **Idiographic** | 解釋單一事件，詳細精確但不可推廣 | 「你考差是因為忘了考、塞車、恐慌、前晚加班、狗吃課本」 |
| **Nomothetic** | 解釋一類事件，less 精確但廣泛適用 | 「學生考差是因為準備不足、緊張、注意力缺失症」 |

→ Theory 本質為 **nomothetic** —— 用少數變數解釋廣泛現象。

## 什麼不是 theory ^[extracted]

詳見 [[concepts/theory-vs-not-theory]]：
- ❌ Data / facts
- ❌ Typologies / taxonomies（爭議）
- ❌ Empirical findings 列表
- ❌ References 列表
- ❌ Variables 列表
- ❌ Diagrams
- ❌ Hypotheses alone

> 「一堆事實不是 theory，就像一堆石頭不是房子。」

Theory 在 **conceptual level** 運作，基於 **logic** 而非 observations。

## Theory 的 4 個好處 ^[extracted]

1. 提供 phenomenon 發生的 **underlying logic**（key drivers / outcomes / processes）
2. **Sense-making** — 整合過往實證、調和矛盾發現（找 contingent factors）
3. **指引未來研究**（識別值得研究的 constructs/relationships）
4. **累積知識**（橋接其他 theory、重新評估既有 theory）

## Theory 的限制 ^[extracted]

- 簡化現實，可能解釋不足
- 可能讓研究者戴上**盲眼罩**（blinders），錯失未被理論定義的重要 concept
- Many theories 是 partial explanations（Feyerabend 1993：no single theory ever agrees with all the known facts in its domain）
- 任何理論知識都是 **interim position**，永遠處於 transformation / development

## Building Blocks ^[extracted]

Whetten (1989) 四大 building blocks，詳見 [[concepts/theory-building-blocks-whetten]]：

| Block | 對應問題 |
|---|---|
| Constructs | What |
| Propositions | How |
| Logic | Why |
| Boundary conditions | Who / When / Where |

## 評估準則 ^[extracted]

詳見 [[concepts/attributes-of-good-theory]]：

1. Logical consistency
2. Explanatory power
3. **Falsifiability**（[[concepts/falsifiability-popper]]）
4. **Parsimony**（Ockham's razor）
5. Generalizability

## Theory vs Model ^[extracted]

| 維度 | Theory | Model |
|---|---|---|
| 角色 | Explanation (or prediction) | Representation |
| 性質 | abstract、conceptual | concrete、operationalizable |
| 範例 | Agency Theory | Agency 模型的 SEM 圖示 |

Model development 包含 inductive + deductive reasoning。

## Theorizing 四種 approach ^[extracted]

Steinfeld & Fulk (1990) 提出，詳見 theorizing approaches 待寫：

1. **Inductive grounded theory** — 從觀察 build theory
2. **Bottom-up with predefined framework**（IPO 等）
3. **Extend existing theory to new context**
4. **Apply by analogy**（如 Markus 1987 把核爆 critical mass 類比 network growth）

## 對 PM / 醫療 AI 工作的應用 ^[inferred]

PM 工作的 theory 級論述常被混為 description：

| Theory 等級 | PM 範例 |
|---|---|
| Description | 「用戶 churn 主要發生在第 7 天」 |
| Prediction | 「DAU < 3 的用戶 30 天 churn 機率 80%」 |
| Theory（解釋） | 「Lack of habit-formation loop → 用戶無法形成 reward expectation → churn」 |

優秀 PM 在 strategy doc 中追求 theory-level「why」，而非堆 metric。

## 與 wiki 的對應 ^[inferred]

寫 wiki synthesis 頁本質是在做 theorizing — 整合多源 + 提 underlying logic。詳見 [[concepts/theory-vs-not-theory]]。

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 2 narrow / 3 brittle / 0 unsupported。最大弱點：頁面把 positivist organizational research 的 theory 觀當作普世真理 — prediction-vs-explanation 二分被當定論（Cartwright/Salmon 反駁未引）、「theory 基於 logic 而非 observations」違反 Quine/Hanson/Kuhn 的 theory-ladenness 共識（且把 grounded theory 排除）、5 條評估準則的內部張力（falsifiability vs parsimony；Darwin、string theory 反例）未討論。
>
> `base_confidence`：0.55 → 0.55（brittle cap 觸頂）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/scientific-theory.md`。

## Related

- [[concepts/theory-building-blocks-whetten]]
- [[concepts/attributes-of-good-theory]]
- [[concepts/theory-vs-not-theory]]
- [[concepts/proposition-vs-hypothesis]]
- [[concepts/causality-three-conditions]]
- [[concepts/falsifiability-popper]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch4 slides + book Ch4
- Whetten, D. A. (1989). What constitutes a theoretical contribution? *Academy of Management Review*, 14(4), 490-495.
- Sutton, R. I., & Staw, B. M. (1995). What theory is not. *ASQ*, 40(3), 371-384.
