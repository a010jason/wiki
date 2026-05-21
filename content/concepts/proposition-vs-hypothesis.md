---
title: Proposition vs Hypothesis
type: concept
domain: research-methods
tags: [research, methodology, hypothesis, theory]
aliases: [proposition hypothesis, 命題假設]
sources:
  - reference:Bhattacherjee-Ch02-slides (pp.114-125)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Proposition（理論層）= construct 之間的關係，不必 testable；Hypothesis（經驗層）= variable 之間的關係，必須 testable + measurable。Hypothesis 強弱光譜：相關 < 有方向 < 因果。Proposition 在難以 lab test 的領域（economics、archaeology、sociology）作為研究推進工具。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Proposition vs Hypothesis

## 核心區分

| 維度 | Proposition | Hypothesis |
|---|---|---|
| 平面 | Theoretical Plane | Empirical Plane |
| 元素 | construct 之間 | variable 之間 |
| 是否 testable | ❌ 否（純概念） | ✅ 是（必須 measurable） |
| 是否 falsifiable | 弱：靠 internal consistency + convincing | 強：可被資料拒絕 |
| 範例 | "Intelligence is positively related to academic achievement" | "IQ score is positively related to GPA" |

詳見 [[concepts/theoretical-plane-empirical-plane]]。

## Hypothesis 強弱光譜 ^[extracted]

教師 Ch2 slide pp.116-117 的三層強度：

| 強度 | Hypothesis 範例 |
|---|---|
| 弱（相關） | "Students' IQ **is related to** academic achievement" |
| 中（有方向） | "Students' IQ is **positively** related to academic achievement" |
| 強（因果） | "Students' IQ **has a positive effect on** academic achievement" |

→ 越強的 hypothesis 越好，因為：
- 給予更明確的 falsification 條件
- 推進更多 theory
- 更多 boundary 可挑戰

## Hypothesis as Educated Guess ^[extracted]

> Hypothesis 的 composition 是 creative process，但必須建立在 existing knowledge 上。

教師化學反應範例：不懂化學會誤以為「極冷可加速反應」（事實相反）→ 強調 background reading 重要。

## Proposition 的合法用途 ^[extracted]

並非所有研究都能立即測 hypothesis。Proposition 在以下情境合法：

1. **由 concept 間關係指出 promising 探索方向**（pre-hypothesis 推進工具）
2. **在 valid hypothesis 難成立的領域**作為共同 assumption：
   - High-complexity systems：sociology、economics
   - 實驗成本過高：經濟政策、跨國比較
   - 只剩 fragment：考古、古生物
3. **跨 paradigm 對話**：positivist 與 interpretive 研究者可在 proposition 層找共同語言

## Proposition 的 drawback ^[extracted]

教師明列限制：

1. **難以證偽**：不靠 testable data
2. 只要 **convincing + internally consistent** 就看似有效
3. 當 new testable data 出現後，常被發現錯誤或不準

→ 對應 [[concepts/falsifiability-popper]]：proposition 之所以「不算 fully scientific」就是因為 falsifiability 弱。

## 對 PM 的應用 ^[inferred]

PM 工作中也常處於 proposition / hypothesis 之間：

- **Vision / North Star 層**：通常是 proposition 級（無法直接測 "amplify human creativity"）
- **OKR / Roadmap 層**：proposition → hypothesis 的橋接（"amplify creativity" → "increase active editor count by 15%"）
- **Feature ticket 層**：testable hypothesis（"this button increases CTR by 2%"）

優秀 PM 能在三層之間維持一致 narrative。

## Related

- [[concepts/theoretical-plane-empirical-plane]]
- [[concepts/concept-vs-construct-vs-variable]]
- [[concepts/falsifiability-popper]]
- [[concepts/scientific-theory]]
- [[concepts/inductive-vs-deductive-research]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch2 slides pp.114-125
