---
title: Nomological Network（構念網絡）
type: concept
domain: research-methods
tags: [research, methodology, construct-validity, theory, measurement]
aliases: [構念網絡, nomological net, theoretical network]
sources:
  - reference:Bhattacherjee-Ch02-slides (pp.111-112)
  - reference:Cronbach-Meehl-1955
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Cronbach & Meehl (1955) 提出的概念：一組相關 construct 之間的整體 relationship 網絡（含 IV、DV、Mediator、Moderator）。是 construct validity 的最高層次（nomological validity）— 一個 construct 在預期關係網絡中行為符合理論，才算真正測對。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Nomological Network

## 定義

一組相關 construct 之間的整體 relationship 網絡 — 涵蓋 IV、DV、Mediator、Moderator 之間所有預期關係。^[extracted]

教師範例（Ch2 slide p.111）：

```
            Effort
              ↓ (moderator)
Intelligence ────→ Academic Achievement ────→ Earning Potential
   (IV)              (Mediator)                    (DV)
```

## Construct Validity 的最高層次 ^[extracted]

[[concepts/construct-validity]] 的多層次中：
- **Convergent / Discriminant validity** 測單一 construct 自身
- **Nomological validity** 測 construct 在**整個網絡中**的行為是否符合理論預期

→ 若 IQ 與 academic achievement 高相關（符合理論），且 IQ 與 shoe size 不相關（符合理論），則 IQ 量表的 nomological validity 強。

## 思考如 researcher ^[extracted]

教師強調：研究者不只能 abstract 單一 concept，還要心智可視化整個 nomological network — 這是 [[concepts/theoretical-plane-empirical-plane|theoretical plane]] 操作的核心能力。

「能在兩平面間穿梭」進階版 = 能在三維 nomological network 中導航。

## 範例：完整 nomological network ^[extracted]

教師 Ch2 引用 Huang & Lin 2021（J. Leadership & Org Studies）paternalistic leadership 模型：

```
Authoritarianism ─────→ Emotional Exhaustion (0.71***) ─→ Team Performance (-0.40***)
                  ╲                                      ╱
                   ╲ → Team Identification (0.28*) ────→ Team Performance (0.59***)
Benevolence ─────→ Emotional Exhaustion (-0.64***)
Morality ──→ ...
```

→ 三維度 paternalistic leadership construct（[[concepts/paternalistic-leadership]] 待寫）在 nomological network 中對 Team Performance 既有正路徑（via identification）也有負路徑（via exhaustion）— 構成 double-edged sword。

## 對 PM / 系統設計的應用 ^[inferred]

設計產品 metric framework 時應建構類似的 nomological network：

- **North Star**（DV）
- **Inputs**（IV）
- **Leading indicators**（Mediator）
- **Segment / Cohort**（Moderator）

優秀的 metric tree 不只是樹狀 list，而是 nomological network — 變數之間的因果與調節關係明示。

## 限制 ^[inferred]

- Cronbach-Meehl 1955 的原始版本假設 hypothetico-deductive；對 interpretive paradigm 不直接適用
- Nomological network 需要 prior theory；新興 construct 沒有 established network 可比對
- 「符合預期關係」可能是 confirmation bias 而非真實 validity（需 pre-registration 防範）

## Related

- [[concepts/theoretical-plane-empirical-plane]]
- [[concepts/construct-validity]]
- [[concepts/concept-vs-construct-vs-variable]]
- [[concepts/proposition-vs-hypothesis]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch2 slides pp.111-112
- Cronbach, L. J., & Meehl, P. E. (1955). Construct validity in psychological tests. *Psychological Bulletin*, 52(4), 281-302.
