---
title: Falsifiability（可否證性，Popper）
type: concept
domain: research-methods
tags: [popper, falsifiability, philosophy-of-science, scientific-method]
aliases: [可否證性, 證偽性, Popper falsifiability]
sources:
  - reference:Bhattacherjee-Ch01-slides (pp.87-91, 102-106)
  - reference:Bhattacherjee-Ch04-slides (pp.46-50)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Karl Popper 提出的科學判別準則：理論必須能被否證（disprove）才算 science。不可否證者（如 Freud psychoanalysis、tautology）不是 theory。falsifiability ≠ falsified — 「可被證偽」是好理論的必要條件，「真的被證偽」則代表理論本來就差。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.4
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# Falsifiability（可否證性）

[[entities/Karl-Popper]] 1940s 在 *The Logic of Scientific Discovery* 提出，是 [[concepts/scientific-method-four-criteria|科學方法四準則]]中**最具區辨力**的一條。^[extracted]

## 核心主張

> Science 應該做 **falsifiable predictions**；prediction 錯就 reject theory。

不可否證的論述**不是 theory**，無論在臨床或實務上多有用。

## Falsifiability ≠ Falsified

Bhattacherjee 強調的重要區分：^[extracted]

- 「**Theory falsifiable**」 = 好理論的必要條件（被人有機會證明它錯）
- 「**Theory should be falsified**」 = ❌ 錯誤的詮釋
- 若 theory 真被 falsified，那它**本來就是 poor theory**

→ 科學透過 theory 被證錯、新 theory 取代而進步。Scientist 該嘗試 disprove 自己理論而非繼續找證據證明它。

## 經典案例

### Black Swan（黑天鵝）

歐洲千年只見白天鵝 → induction「all swans are white」→ 1697 澳洲發現黑天鵝 → induction 一夕被 falsified。^[extracted]

Popper 結論：**Induction cannot yield certainty**。詳見 [[concepts/inductive-vs-deductive-research]]。

### Freud Psychoanalysis（負面案例）

Bhattacherjee 明確排除：「Freud psychoanalysis 不可否證，故非 theory」^[extracted]
- 例：「unconscious wishes 驅動行為」— 任何行為都能事後 rationalize 成「源自 unconscious」
- 任何反駁都能被 reframed 為「resistance」或「displacement」
- 無法設計能讓理論被證錯的觀察

### Tautology

「高溫的日子是熱天」— 定義上必為真，不可實證測試，不是 theory。^[extracted]

## 邊界案例與內部張力 ^[extracted, ambiguous]

Bhattacherjee 自己承認此準則嚴格化會排除部分有價值科學：

- **Anthropology / sociology 的 case studies**：觀察自然環境不測 hypothesis → 嚴格說「不可否證」
- 但 slide 自己鬆綁：「大家還是會同意這是 science，因為它推進人類知識」

→ 這構成內部矛盾。Falsifiability 太嚴格 → 排除 observational / descriptive sciences；太鬆 → 失去判別力。

→ 對應 [[concepts/positivist-vs-interpretive-research|interpretive paradigm]] 的反對立場：interpretive 不接受 falsifiability 作為唯一判準。

## 與其他四準則的關係 ^[inferred]

| 準則 | 與 falsifiability 的張力 |
|---|---|
| Replicability | 配套：可重複 → 可被獨立 falsify |
| Precision | 必要條件：定義不清 → 不可 operationalize → 不可 falsify |
| Parsimony | 衝突點：增加 epicycles 維持理論時違反 parsimony 同時降低 falsifiability |

## 對 PM / 醫療 AI 實務的意涵 ^[inferred]

- **產品 hypothesis 設計**：好的 product hypothesis 必須可被 falsified（「這個 feature 會讓 retention 升 X%」可驗證；「我們的 AI 改善診斷品質」太籠統難 falsify）
- **PR-FAQ 寫作**：寫 PR-FAQ 時為產品畫出 falsifiable success metrics，是把 PM 直覺變成 testable claim 的訓練
- **醫療 AI 申報 FDA**：FDA 510(k) 採 substantial equivalence（與既有產品等效），不是嚴格 falsification — 這是 Popper 學派會批評的「too soft」（見 falsifiability tension in social science 待寫）

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 2 narrow / 3 brittle / 0 unsupported。主要弱點是**現代科哲三巨頭（Duhem-Quine / Lakatos / Kuhn）的 omission** —— 把 Popperian 嚴格版當成 demarcation 唯一準則，缺 Lakatos research programmes（解 Newton/Bohr「被 falsified 但仍是 good theory」）、Kuhn paradigm shifts（解 working scientists 對 string theory 等 unfalsifiable theory 的接納）。次要弱點是對 Freud 全盤否定未引 Grünbaum 1984 + Loftus 對 repression 的實際 falsify。
>
> `base_confidence`：0.40 → 0.40（在 brittle cap 0.55 內，保持不變）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑與行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/falsifiability-popper.md`。

## Related

- [[entities/Karl-Popper]]
- [[concepts/scientific-method-four-criteria]]
- [[concepts/inductive-vs-deductive-research]]
- [[concepts/scientific-theory]]
- [[concepts/attributes-of-good-theory]] — falsifiability 是好 theory 五準則之一

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch1 slides pp.87-91, 102-106 + Ch4 slides pp.46-50
