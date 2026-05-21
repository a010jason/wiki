---
title: Media Naturalness Theory（MNT, Kock 2001-2005）
type: concept
domain: research-methods
tags: [MNT, kock, communication, media, evolutionary-psychology]
aliases: [MNT, media naturalness, 媒介自然性理論]
sources:
  - reference:Kock-2001-2004-2005
  - reference:Chandra-2022-JMIS
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kock (2001/2004/2005) 提出的 evolutionary-psychology-based theory：F2F（face-to-face）是最自然的溝通模式（人類經 100,000 年演化適應）；中介技術應該盡量模擬 F2F。提出三個 naturalness-providing mechanisms：(1) decrease in cognitive effort, (2) reduction in communication ambiguities, (3) increase in physiological arousal。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Media Naturalness Theory (MNT)

Kock (2001/2004/2005) 提出。^[extracted]

## 核心主張

> F2F（face-to-face）是最自然的溝通模式（人類經 100,000 年演化適應）；中介技術應該盡量模擬 F2F 的特性以降低 communication cost。

## 三個 Naturalness-Providing Mechanisms ^[extracted]

| Mechanism | 中文 | 機制 |
|---|---|---|
| (a) **Decrease in cognitive effort** | 降低認知努力 | 不需多 effort 解讀 |
| (b) **Reduction in communication ambiguities** | 降低溝通歧義 | 多 channels（語音/表情/肢體）降不確定 |
| (c) **Increase in physiological arousal** | 提高生理喚醒 | 「being there」感、real presence |

F2F 在三 mechanisms 上都最強；email 都最弱；video call、voice、IM、chatbot 介於中間。

## 與 Media Richness Theory 的關係 ^[inferred]

MNT vs **Media Richness Theory（MRT, Daft & Lengel 1986）**：

| 維度 | MRT | MNT |
|---|---|---|
| 理論基礎 | 資訊處理需求理論 | 演化心理學 |
| 「Rich」依據 | media 的 cues 多寡 | 對 F2F 演化適應的接近度 |
| Prediction | rich media 處理 equivocal task 較好 | F2F-like media 降三 cost |

MNT 算 MRT 的演化心理學再詮釋版。

## 在 Conversational AI 的應用 ^[extracted]

Chandra et al. 2022（[[references/chandra-2022-human-like-AI-competencies]]）把 [[concepts/human-like-AI-competencies|三維 AI 能力]]分別 map 到 MNT 三 mechanisms：

| AI 能力 | 對應 MNT mechanism |
|---|---|
| Cognitive competency | 降低 cognitive effort |
| Relational competency | 降低 communication ambiguities |
| Emotional competency | 提高 physiological arousal + presence |

→ 這個對應**過於整齊**，可能 post-hoc rationalization（critique 見 [[references/chandra-2022-human-like-AI-competencies]]）。

## 對醫療 AI / chatbot 設計的應用 ^[inferred]

| Medium | F2F-likeness | 應用 |
|---|---|---|
| 醫師親自看診 | 100%（baseline） | 高 trust，高 cost |
| 視訊看診 | ~70% | 中度 trust，疫情後普及 |
| Voice bot | ~40% | trivial task OK，重大決策需 escalate |
| 文字 chatbot | ~25% | 資訊查詢 OK |
| Email / form | ~10% | 非同步、低成本但無 emotional connection |

MNT 預測：**重大病情溝通必須 F2F 或 video，文字 / 自動化不適合**。設計醫療 chatbot 時要明確 boundary — 哪些 task 可自動化、哪些必須升 escalate。

## 限制 ^[inferred]

- 演化心理學基礎本身爭議（一些 evolutionary psych claim 難 falsify）
- 「F2F = baseline」預設 → 對 digital native（從小視訊長大）可能不適用
- 文字溝通的某些特性（precise、async、可保存）反而優於 F2F（用 MNT 解釋偏弱）
- 與 [[concepts/elaboration-likelihood-model|ELM]] 的關係：若 user low motivation 走 peripheral route，high naturalness 可能反成 distraction

## Related

- [[concepts/human-like-AI-competencies]]
- [[references/chandra-2022-human-like-AI-competencies]]
- [[concepts/elaboration-likelihood-model]]
- [[concepts/social-cognitive-theory]]

## Sources

- Kock, N. (2001/2004/2005). Various papers on media naturalness theory.
- [[references/chandra-2022-human-like-AI-competencies]] — JMIS 應用範例
