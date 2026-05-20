---
title: SOR Model (Stimulus-Organism-Response, 消費者行為)
type: concept
domain: marketing
tags: [SOR, consumer-behavior, kotler, mgmt]
aliases: [SOR Model, Stimulus-Organism-Response, S-O-R]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch03
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch03 Figure 3.1 — 消費者行為的 macro 模型。Stimulus（行銷戰術 7Ts + 市場環境 5Cs）→ Organism（Consumer Characteristics 文化/社會/個人 + Consumer Psychology 動機/感知/情緒/記憶）→ Response（Buying Decision Process + Purchase Decision）。是 Ch03 的章節骨幹。
provenance:
  extracted: 0.90
  inferred: 0.05
  ambiguous: 0.05
base_confidence: 0.75
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# SOR Model (Consumer Behavior)

## What It Is

Kotler 16e Ch03 Figure 3.1 的消費者行為 macro 模型：^[extracted Ch03 p.5]

```
Stimulus (S) → Organism (O) → Response (R)
```

意涵：消費者不是黑盒子 — 中間有 Organism（characteristics + psychology）介入處理，輸入到輸出之間並非線性。

## 三段結構

### Stimulus（S）— 兩塊輸入

| 區塊 | 內容 | 對應 |
|---|---|---|
| **Marketing Tactics** | Product / Service / Brand / Price / Incentives / Communication / Distribution | [[concepts/7Ts-marketing-tactics]] |
| **Market Context** | Economic / Technological / Legal / Political / Sociocultural / Physical | [[concepts/5C-target-market-framework]] Context 維 |

### Organism（O）— 兩塊中介

| 區塊 | 內容 | 對應 |
|---|---|---|
| **Consumer Characteristics (Macro)** | Cultural / Social / Personal factors | 詳見 [[concepts/reference-groups]]、Hofstede 文化維度 |
| **Consumer Psychology (Micro)** | Motivation / Perception / Emotions / Memory | 詳見 [[concepts/maslow-hierarchy-of-needs]]、Selective attention/distortion |

### Response（R）— 兩塊結果

| 區塊 | 內容 | 對應 |
|---|---|---|
| **Buying Decision Process** | Problem recognition → Information search → Evaluation → Purchase → Postpurchase | [[concepts/buying-decision-process-consumer]] |
| **Purchase Decision** | Product choice / Brand choice / Store choice / Purchase quantity / Timing / Payment method | 細項決策 |

## 為什麼是 SOR 不是 SR

行為主義（Skinner SR）忽略 Organism，認為 stimulus 直接決定 response。SOR（Belk 1975 等修正）把 Organism 拉回模型：

- 同樣的廣告（S），不同消費者反應不同 → 因為 Organism 不同
- 行銷者控制 S，但 R 是 S × O 的函數，O 是 marketing research 想理解的對象

## 三段如何串連

實務上 SOR 是 funnel 不是箭頭：

1. **Stimulus**：行銷者**設計**這部分（7Ts），環境 Context 部分**理解**而非控制（5Cs）
2. **Organism**：行銷者**研究**這部分（marketing research），不能控制
3. **Response**：行銷者**測量**這部分（dashboards、sales metrics）

Marketing research 的主要工作 = 把 O 黑盒子打開（通過 surveys、ethnographic、neuromarketing）。

## 與其他模型的關係

### vs [[concepts/buying-decision-process-consumer]] 5 階段

5-stage 是 SOR 的 R 部分內部展開。SOR 是更大的框架，5-stage 是其中一塊。

### vs EKB Model

EKB Model 1968 把 Information Processing（Exposure / Attention / Comprehension / Acceptance / Retention）作為獨立階段，SOR 把這部分折進 Organism 的 Consumer Psychology。^[inferred]

EKB 比 SOR 更早，SOR 是行銷學常用的簡化版。

### vs Customer Journey Map

Customer Journey 是 SOR 在數位時代的延伸 — 把 R 的 buying decision 加上時間軸與多 touchpoint 維度。

## Source 反例 / 質疑

- **Stimulus 與 Context 的界線模糊** — 廣告是 Stimulus 還是 Context？source 沒給判定。^[ambiguous]
- **Macro vs Micro Organism 的分割** — Cultural factors 與 Memory 都會交互影響，硬分兩塊是教學方便。^[inferred — 隱含批評]
- **單向箭頭忽略 feedback loop** — Response 後的 satisfaction 會回饋成新的 Organism state，但 model 是線性的。^[inferred — 隱含批評]

## Jason 觀察：醫療 AI 的 SOR

醫療 AI 採購是 B2B 決策，SOR model 適用度有限：^[inferred — Jason 個人延伸]

- **Stimulus**：行銷 7Ts 比一般 B2B 更受法規限制（不能直接廣告）
- **Organism**：醫師 Organism 受醫學教育、學會、KOL 高度影響 — Reference groups 占比極大
- **Response**：不是個人 buying decision，是 [[concepts/buying-center]] 多角色集體決策 → 應該用 B2B 8-stage process 而非消費者 5-stage

## Related

- [[concepts/buying-decision-process-consumer]] — SOR 的 R 部分
- [[concepts/maslow-hierarchy-of-needs]] — Organism 的 Motivation
- [[concepts/reference-groups]] — Organism 的 Social factors
- [[concepts/customer-journey-map]] — SOR 的數位時代延伸
- [[concepts/business-buying-process]] — B2B 對應流程
- [[references/kotler-keller-chernev-marketing-management-16e]]
