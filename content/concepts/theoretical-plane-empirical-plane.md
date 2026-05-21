---
title: Theoretical Plane vs Empirical Plane（Bhattacherjee 雙平面圖）
type: concept
domain: research-methods
tags: [research, methodology, theory, hypothesis, bhattacherjee]
aliases: [雙平面, two planes, theoretical empirical, plane diagram]
sources:
  - reference:Bhattacherjee-Ch02-slides (pp.110, 114)
  - reference:Bhattacherjee-SSR-book (Ch2)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Bhattacherjee 經典圖：研究在兩個平面之間穿梭 — Theoretical Plane（construct + proposition）和 Empirical Plane（variable + hypothesis），用 operationalization 垂直連結。這是「think like a researcher」的核心心智模型。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Theoretical Plane vs Empirical Plane

Bhattacherjee Ch2 的視覺核心。研究者必須能在兩個平面之間自由穿梭 — 這是 PhD 教育最大缺口的能力。^[extracted]

## 雙平面圖

```
Theoretical Plane                                       Empirical Plane
────────────────                                        ───────────────

  Construct A ──── Proposition ─────→ Construct B
       │                                       │
       │ operationalization                    │ operationalization
       ↓                                       ↓
  Variable A ────── Hypothesis ─────→ Variable B
                                              ↑
                                              Measurement
```

## 兩平面的對應 ^[extracted]

| 元素 | Theoretical Plane | Empirical Plane |
|---|---|---|
| 內容 | abstract、unmeasurable | concrete、measurable |
| 關係表達 | **Proposition**（命題） | **Hypothesis**（假設） |
| 元素 | **Construct** | **Variable** |
| 用途 | theory-building、explanation | testing、validation |

教師眉批：「**Proxy = 代理變數**」— variable 是 construct 的 proxy。

## Construct 與 Variable 對照（中譯）^[extracted]

- Construct（抽象，不可測）：intelligence、job satisfaction、leadership style
- Variable（可測 proxy）：IQ score（測 intelligence）、Schaufeli 17-item scale（測 work engagement）、LMX-7（測 LMX 品質）

## Proposition 與 Hypothesis 對照 ^[extracted]

**Proposition**（理論層）：
> "Intelligence is positively related to academic achievement"
（用 construct 表達）

**Hypothesis**（經驗層）：
> "IQ score is positively related to GPA"
（用 variable 表達，可測，可拒絕）

詳見 [[concepts/proposition-vs-hypothesis]]。

## Nomological Network 擴展

當 construct 多到一定程度，雙平面變成網絡。範例（教師 slide p.111）：

```
Theoretical:    Intelligence ─→ Academic Achievement ─→ Earning Potential
                                       ↑
                                     Effort
                                  (moderator)
```

詳見 [[concepts/nomological-network]]。

## 「Think Like a Researcher」的核心 ^[extracted]

教師強調：研究者必須能 visualize the abstract from observations + mentally connect dots + synthesize 成 generalizable theories — 換言之，**能自由在兩平面間移動**。

> 這項技能要 many years 才能養成；美國大學/研究所/業界都不教，是 PhD 學生最大短板。

## 對 PM 工作的對應 ^[inferred]

PM 工作可重新理解為雙平面：

| Theoretical Plane（PM） | Empirical Plane（PM） |
|---|---|
| "User Engagement" construct | DAU / session length / retention 指標 |
| Jobs-to-be-Done construct | actual usage data |
| "Product-Market Fit" construct | NPS、qualitative interview signals |
| North Star Metric construct | 實際 dashboard 數字 |

優秀 PM 能在兩平面間穿梭 — 不只看 dashboard，能 abstract 成「用戶要的 job」；不只談 strategy，能 operationalize 成可測 metric。

→ 與 [[concepts/scientific-theory|theory building]] 對 PM 的價值見 `synthesis/research-mindset-pm-application`（待寫）。

## Related

- [[concepts/concept-vs-construct-vs-variable]]
- [[concepts/proposition-vs-hypothesis]]
- [[concepts/nomological-network]]
- [[concepts/inductive-vs-deductive-research]]
- [[concepts/scientific-theory]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch2 slides pp.110, 114 + book Ch2
