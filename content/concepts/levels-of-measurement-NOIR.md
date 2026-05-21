---
title: Levels of Measurement (NOIR — Nominal / Ordinal / Interval / Ratio)
type: concept
domain: research-methods
tags: [measurement, NOIR, scale, stevens-1946, statistics]
aliases: [NOIR, levels of measurement, 量表四階, Stevens scales]
sources:
  - reference:Stevens-1946-Science
  - reference:Bhattacherjee-Ch06-slides (pp.47-49)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Stevens (1946) Science 經典：scales 四階 — Nominal / Ordinal / Interval / Ratio。每階決定可用統計工具。常見誤用：Likert 5/7 點明明 ordinal 卻被當 interval 用；AHP 1-9 自稱 ratio scale 但實際不是。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Levels of Measurement (NOIR)

Stevens, S. S. (1946). On the theory of scales of measurement. *Science*. 經典四分法。^[extracted]

## 四階對照表 ^[extracted]

| Scale | 性質 | 中央趨勢 | 可用統計 | 範例 |
|---|---|---|---|---|
| **Nominal**（categorical） | 互斥類別，無大小無距離 | mode | 卡方等非參數 | gender、industry type、religion |
| **Ordinal** | 有排序但不等距 | median, mode（mean 無意義） | percentile、non-parametric（Wilcoxon）、correlation/regression/ANOVA **不適合** | 班排名、Mohs 礦物硬度、CPR 5-point rating |
| **Interval** | 排序 + 等距，**無 true zero** | mean | 完整參數統計 | Fahrenheit / Celsius / IQ |
| **Ratio** | 排序 + 等距 + **true zero**（zero = 真的「沒有」） | mean，且 ratio 有意義 | 全部 | Kelvin temperature、員工數、收入、age、% |

## True Zero 的關鍵 ^[extracted]

| Scale | 有 true zero？ | 範例 |
|---|---|---|
| Interval | ❌ | Celsius 0°C ≠「沒有溫度」；50°F 不等於 100°F「一半溫度」 |
| Ratio | ✅ | Kelvin 0K 是絕對零度；100 員工是 50 員工的 2 倍 |

→ Ratio 才能說「兩倍」「一半」「百分比變化」。

## Likert 5/7 點：教師重點警告 ^[extracted]

> 「Likert 5/7 點明明是 **ordinal**，但我們有時把它當 interval 或 ratio 用」 — 是常見但不嚴謹的做法。

**根本問題**：「strongly disagree → disagree」與「disagree → neutral」的心理距離未必相等 → 不滿足等距。

實務妥協：
- 量表 item 數 ≥ 5 且 anchor 設計嚴謹時 → 把 sum score 當 interval 處理可行
- 嚴格 ordinal 統計（Wilcoxon、ordinal regression）較保守但較難解讀
- → trade-off 是 **rigor vs interpretability**

## AHP 1-9 Scale 的誤用 ^[extracted]

教師打臉案例：**Chang & Yeh (2016)** 自稱「1-9 ratio scale」（1 equally important → 9 extremely more important）— 教師寫**「Not a ratio scale at all」**

理由：
- 1-9 沒有真零（沒有「重要性 = 0」的點）
- 等距性可疑（"strong" 到 "very strong" 與 "weak" 到 "moderate" 心理距離未必相等）
- 嚴格說是 **ordinal**，最多 interval

→ 對 AHP / pairwise comparison / Likert / SemDiff 之類 scale，研究者常**自稱 scale type 比實際高一階** — 教師強調這是 measurement integrity 警示。

## 範例研究

### Ordinal — Todd et al. 1998 ^[extracted]
- CPR training RCT，rater 用 5 點 ordinal（1 not competent → 5 outstanding）
- 用 **Wilcoxon rank-sum test**（不能用 t-test）
- 正確示範：選對 statistical method 配合 ordinal scale

### Interval — Rhee, Hur, Kim 2017 ^[extracted]
- Coworker incivility 4 item，1 (never) → 5 (very often)
- Emotional exhaustion 用 Maslach & Jackson 1981 的 3 item
- 視為 interval 進 SEM

### Ratio — Kang, Alejandro, Groza 2015 ^[extracted]
- Customer share of wallet（0-100%）
- Latent financial risk（0-100%）
- 真 ratio：0% 是真的「沒花錢」

### Ratio — Crick & Crick 2020 ^[extracted]
- 在 wine industry 工作年數 0-60 years（single-item ratio）
- Export ratio
- 真 ratio：0 年是真的「沒做過」

### Ratio 真正範例 ^[extracted]
- % male
- % expatriate
- % senior employees (>10 year tenure)
- % foreign employees

## 選 scale 與 statistical test 的對應 ^[inferred]

| Scale | 描述統計 | 推論統計 |
|---|---|---|
| Nominal | freq, mode | χ², Fisher exact |
| Ordinal | median, mode, IQR | Mann-Whitney, Wilcoxon, Kruskal-Wallis, Spearman |
| Interval | mean, SD | t-test, ANOVA, Pearson correlation, regression |
| Ratio | mean, SD, geometric mean, CV | 同 interval + ratio-based test |

## 對 PM / 醫療 AI 應用 ^[inferred]

醫療 metric 的 scale 選擇：

| Metric | 期望 scale | 實際常被用作 |
|---|---|---|
| Pain score (VAS 0-10) | Ordinal | Interval（嚴格說 0 不算真零） |
| 體溫 (°C) | Interval | Interval |
| 血壓 (mmHg) | Ratio | Ratio |
| 病人滿意度（Likert 1-5） | Ordinal | 多被當 interval 處理 |
| 住院天數 | Ratio | Ratio |
| 院內感染 yes/no | Nominal binary | Binary regression |
| ICD-10 diagnosis | Nominal | Categorical analysis |

醫療 AI PM 設計 KPI 時必須先決 scale，否則後續 statistical comparison 違反假設。

## 限制 ^[inferred]

- NOIR 是 Stevens 1946 框架，後續有人提出 **NOIR + Absolute scale**（如 count）或 **Item Response Theory** 的非線性 scaling
- 「Likert 視為 interval」實務 acceptable degree 在統計學界仍辯論中
- 大樣本（N > 200）下 ordinal-as-interval 偏誤通常可忽略，但小樣本（N < 50）影響大

## Related

- [[concepts/concept-vs-construct-vs-variable]]
- likert scale
- semantic differential scale
- guttman scale
- composite index
- [[concepts/reflective-vs-formative-measurement]]

## Sources

- Stevens, S. S. (1946). On the theory of scales of measurement. *Science*, 103(2684), 677-680.
- [[references/bhattacherjee-social-science-research]] — Ch6 slides pp.47-49
