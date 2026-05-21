---
title: Theory of Planned Behavior（TPB, Ajzen 1991）
type: concept
domain: research-methods
tags: [TPB, TRA, ajzen, behavior, intention, psychology]
aliases: [TPB, planned behavior, 計畫行為理論]
sources:
  - reference:Ajzen-1991
  - reference:Bhattacherjee-Ch04-slides (pp.127-138)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Ajzen (1991) 在 Theory of Reasoned Action（TRA, Fishbein & Ajzen）基礎上加入 Perceived Behavioral Control，形成 TPB：Behavior ← Intention ← Attitude + Subjective Norm + Perceived Behavioral Control。是 social psychology / IS 領域最常被引用的行為預測理論之一。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Theory of Planned Behavior (TPB)

## TRA 起源

Theory of Reasoned Action（Fishbein & Ajzen 1975）：

```
Attitude toward behavior  ─┐
                            ├→ Intention → Behavior
Subjective norm           ─┘
```

### TRA 限制 ^[extracted]

1. **Attitude 與 norm 易混淆**（可互相 reframe）
2. **假設 intention 形成後可自由行動**，忽略 ability / time / environment / habit 限制

→ TPB（Ajzen 1991）正是為了修正第 2 點。

## TPB 模型 ^[extracted]

```
Attitude toward behavior       ─┐
                                 │
Subjective norm                ─┼→ Intention → Behavior
                                 │
Perceived Behavioral Control   ─┘
                                  ↘
                                   ──→ Behavior (直接，不經 intention)
```

加入第三個 antecedent：**Perceived Behavioral Control**（PBC）— 對執行行為難易度的感知。

PBC 同時：
- 影響 intention（覺得能控制 → 較強 intention）
- **直接**影響 behavior（即使 intention 強，缺實際能力也做不到）

## 三大 antecedent ^[extracted]

| Antecedent | 定義 | 範例 |
|---|---|---|
| **Attitude toward behavior** | 對行為的正/負感覺 | 「運動很好玩」 |
| **Subjective norm** | 感受到「重要他人」是否認為該行為應被執行 | 「我朋友覺得我該運動」 |
| **Perceived Behavioral Control** | 對行為難易度的感知 | 「我能找時間運動」 |

## 應用案例 ^[extracted]

- **Chen & Tung (2014)** *Int'l J. Hospitality Mgmt*：消費者訪 green hotel intention
- **Yoon (2011)** *J. Business Ethics*：結合 TPB 與 ethics theory 解釋 digital piracy
- **Velez (2015)**：video games 的行為意圖
- **Mishra, Akman, Mishra (2014)** *Computers in Human Behavior*：環境永續行為
- **Kashif et al. (2017)** *Personnel Review*：員工 OCB

## 與 TAM / UTAUT 的關係 ^[inferred]

- **TAM**（Davis 1989）：精簡版 TPB，只保 perceived usefulness + perceived ease of use 作為 IT 採用的 attitude 來源
- **UTAUT**（Venkatesh et al. 2003）：整合 TPB + TAM + 其他六個 model（UTAUT）

## 限制 ^[inferred]

- 假設 rational decision-making → 對 habit / impulse / system-1 行為解釋力弱
- Self-report intention 與 actual behavior 之間 gap（intention-behavior gap）
- 三 antecedent 的相對權重在不同情境差異大
- 對集體決策、社會運動的解釋力弱

## 對醫療 AI PM 應用 ^[inferred]

預測臨床醫師採用 AI 工具：

| TPB Antecedent | 醫師採用 AI 的具體 |
|---|---|
| Attitude | 「這個 AI 真的對診斷有幫助」 |
| Subjective Norm | 「資深主治醫師、住院醫師都在用」 |
| PBC | 「我能在 30 秒內把 AI 結果讀完並整合到 report」 |

→ 三項都要做：產品（attitude）、推廣（norm）、UX（PBC）。

## Related

- [[concepts/scientific-theory]]
- UTAUT — 待寫
- [[concepts/social-cognitive-theory]] — 相關行為預測理論
- [[concepts/innovation-diffusion-theory]] — 互補的 adoption 理論

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch4 slides pp.127-138
- Ajzen, I. (1991). The theory of planned behavior. *Organizational Behavior and Human Decision Processes*, 50(2), 179-211.
- Fishbein, M., & Ajzen, I. (1975). *Belief, attitude, intention and behavior*.
