---
title: Concept vs Construct vs Variable（五層辨識）
type: concept
domain: research-methods
tags: [research, methodology, measurement, operationalization, construct]
aliases: [構念辨識, 五層辨識, conceptualization-operationalization]
sources:
  - reference:Bhattacherjee-Ch02-slides (pp.88-117)
  - reference:Bhattacherjee-SSR-book (Ch2)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Bhattacherjee Ch2 的核心 framework：從抽象到可測量的五層辨識 — Concept（一般屬性）→ Construct（為研究選定/創造的抽象概念）→ Operational Definition（如何測量）→ Variable（可測 proxy）→ Measurement（實際數值）。社會科學的 construct 多為 multi-dimensional，這層辨識決定 [[concepts/construct-validity]]。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Concept vs Construct vs Variable

社會科學從抽象到具體的核心辨識。**這層辨識直接決定 [[concepts/construct-validity|construct validity]]**。^[extracted]

## 五層階梯

```
Theoretical level                 Empirical level
────────────────────              ───────────────
Concept                           ↓
  ↓                               
Construct（specific for study）   
  ↓                               
Operational Definition  ──────→   Variable
                                  ↓
                                  Measurement（數值）
```

| 層級 | 定義 | 範例 |
|---|---|---|
| **Concept** | generalizable properties / characteristics 關聯於 objects / events / people | weight、intelligence、satisfaction |
| **Construct** | specifically chosen / created 用以解釋現象的抽象 concept | "Job Satisfaction" 作為研究 construct |
| **Operational Definition** | 「將如何 empirically 測量」的定義 | "income = 個人年薪稅前；temperature = Celsius" |
| **Variable** | abstract construct 的 measurable representation（proxy） | "IQ score" 作為 intelligence 的 proxy |
| **Measurement** | 實際 collect 到的數值 | "IQ = 115" |

## Unidimensional vs Multi-dimensional Construct ^[extracted]

- **Unidimensional**：簡單，單一底層概念 — 例：weight
- **Multi-dimensional**：多重底層 concept 組成 — 例：
  - Communication skill = vocabulary + syntax + spelling
  - **Paternalistic Leadership** = Authoritarianism + Morality + Benevolence（[[concepts/paternalistic-leadership]] 待寫）
  - **Cultural Intelligence (CQ)** = Metacognitive + Cognitive + Motivational + Behavioral（[[concepts/cultural-intelligence-CQ]]）
  - **User Trust in AI** = Ability + Integrity + Benevolence（[[concepts/human-like-AI-competencies]] 待寫）

辨識規則：multi-dimensional 中 higher-order abstraction = construct，lower-order = concept；unidimensional 時界線模糊。

## 跨領域 concept 借用範例 ^[extracted]

社會科學常從自然科學借 concept：

| 來源領域 | 借到的 concept | 商管應用 |
|---|---|---|
| 物理（gravitation） | retail gravitation | store 對消費者吸引度（大小 / 距離） |
| 物理（inertia） | consumer inertia | brand confusion → cognitive/behavioral inertia → purchase decision（Shiu 2021） |
| 物理（distance） | psychological distance | actor 與 event 的主觀距離；unknown vs known online retailer 距離差異 |
| — | **technostress**（新建 concept） | 學新技術產生的心理壓力（Tarafdar et al. 2007 JMIS） |

## Operationalization 的關鍵 ^[extracted]

教師強調：寫 operational definition 必須具體到他人能依此測量。

- ❌ 「income」 — 太籠統
- ✅ 「household monthly income before tax, USD」 — 可重複測量

社會科學 construct 的 operationalization 經常需要量表（Likert、semantic differential）— 詳見 [[concepts/scale-types]]（待寫）。

## Google Scholar 證據（教師 slide p.113）^[extracted]

| 搜尋詞 | 篇數（2013 年數據） |
|---|---|
| "concept validity" | 13 |
| "construct validity" | 4,230 |

→ empirical study 中討論 construct 比 concept 嚴重得多。

## 與 nomological network 的關係

整個五層辨識嵌入 [[concepts/nomological-network|nomological network]]：構念之間的 propositions 與 hypotheses 形成關係網絡。

## 限制 ^[inferred]

- 五層辨識預設 positivist 取向；interpretive paradigm 不需要嚴格 operationalization（subjects' meaning 不能 reduce to scale）
- Multi-dimensional construct 各維度的「等權加總」常被質疑 — 各 dimension 對 outcome 的權重未必相等
- Reflective vs formative measurement（[[concepts/construct-validity]] 將討論）的選擇影響 operational definition

## Related

- [[concepts/theoretical-plane-empirical-plane]] — Bhattacherjee 經典雙平面圖
- [[concepts/nomological-network]]
- [[concepts/proposition-vs-hypothesis]]
- [[concepts/construct-validity]]
- [[concepts/scientific-theory]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch2 slides pp.88-117 + book Ch2
