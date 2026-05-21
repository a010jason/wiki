---
title: Human-Like AI Competencies（Chandra 2022 三維模型）
type: concept
domain: research-methods
tags: [conversational-AI, chatbot, AI, anthropomorphism, trust, engagement]
aliases: [human-like AI, AI competencies, 擬人化 AI 能力]
sources:
  - reference:Chandra-2022-JMIS
  - reference:Boyatzis-1991-competent-manager
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Chandra, Shirish, Srivastava (2022 JMIS) 借用 Boyatzis (1991) individual competency 分類，把 conversational AI 的「擬人能力」操作化為三維 construct：Cognitive / Relational / Emotional Competency。每維對應 Media Naturalness Theory 的一個 naturalness mechanism。User Trust 中介到 User Engagement。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.35
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Human-Like AI Competencies

## 三維構念 ^[extracted]

| 維度 | 定義 | 對應 [[concepts/media-naturalness-theory|MNT]] 機制 |
|---|---|---|
| **Cognitive Competency** | interpret + apply learning + 完成 user-defined task | 降低 cognitive effort |
| **Relational Competency** | support / cooperate / collaborate；建立 fair, considerate 人際關係 | 降低 communication ambiguities |
| **Emotional Competency** | 感知、調節、回應 user 情緒（pleasure / thrill / anger / boredom / distress） | 提高 physiological arousal + 提供 presence / "being there" 感 |

理論血統：
- **Boyatzis (1991)** *Competent Manager* — 人類個體 competency 分類
- **Lee (2010)** — 進一步切 cognitive / relational / emotional / social
- **Chandra et al. 2022** — 借用到 AI agent，去掉 social

## 中介模型 ^[extracted]

```
Cognitive Competency  ─┐
                        │       Trust              User
Relational Competency ─┼─→ (mediator) ─────→  Engagement
                        │
Emotional Competency  ─┘
```

User Trust 三因子（Mayer-Davis-Schoorman 1995）：
- **Ability**（4 items）
- **Integrity**（3 items）
- **Benevolence**（3 items）

User Engagement 三維（Schaufeli 等）：
- **Vigor**
- **Absorption**
- **Dedication**

## 實證結果 ^[extracted]

| Hypothesis | 結果 |
|---|---|
| Cognitive → engagement | 顯著正向（β=0.260） |
| **Relational → engagement** | **不顯著**（β=-0.027） |
| Emotional → engagement | 顯著正向（β=0.243） |
| Trust mediation（Cognitive、Emotional） | 部分中介，β 從直效降但未歸零 |

→ Chandra 等下結論：**「artificial brain（cognitive）+ artificial heart（emotional）」缺一不可**，但 relational 未支持。

## 範例 chatbot ^[extracted]

| Chatbot | 主要能力 |
|---|---|
| **Mitsuku** | Cognitive（Loebner Prize 5 屆冠軍，open-domain conversational） |
| **Bus Uncle** | Functional cognitive（Singapore bus info） |
| **Woebot** | Emotional（CBT therapy / 心理健康 bot） |

## 應用範例 ^[extracted]

- **Grammarly** — cognitive 範例（AI 寫作工具）
- **Netflix / Amazon 推薦** — relational competency 範例（學偏好）
- **WeChat 內建 AI** — cognitive efficiency（不離開 app 就下單付款）
- **Singapore Airlines "Kris"** — 簡單資訊查詢，無法 contextual 對話（反例）
- **Cogito**（MIT Sloan 校友共創） — call center 用語音情感分析
- **Pepper robot** — 情感感知機器人
- **Robo advisor** — Hildebrand & Bergner (2019)：human-like Robo advisor 即使建議錯，使用者也三倍機率接受
- **Affectiva Automotive AI** — 車內情感識別

## H1b 不支持的 4 個 Boundary Conditions ^[extracted, inferred]

作者事後補的解釋（critique 警示見 [[references/chandra-2022-human-like-AI-competencies]]）：

| BC | 內容 |
|---|---|
| BC#1 | chatbot 無法 capture prior interactions（每次對話從 0 開始） |
| BC#2 | chatbot 類型（simple transactional 不需 relational） |
| BC#3 | user 類型（inexperienced 分不出 chatbot 跟人類對話差別） |
| BC#4 | privacy concerns（建立 relationship 需吃進更多 user info → 焦慮 / creepy / uncanny valley） |

## Uncanny Valley 風險 ^[inferred]

- **Mori (1970)** + **Ho & MacDorman (2017)**
- emotional empathy 過頭 → creepy zone
- 醫療 AI 對話設計的 trade-off：足夠 human-like 增加 trust vs 過度像人 → 跌入 uncanny valley

## 對醫療 AI PM 應用 ^[inferred]

醫療 chatbot / voice assistant 設計三維 trade-off：

| 應用 | 高權重維度 |
|---|---|
| 病患衛教 bot | Emotional（同理）+ Cognitive（資訊準確） |
| 客服 chatbot（保險理賠） | Cognitive 主導 |
| 心理健康 / 慢性病陪伴 | Emotional 主導（Woebot 範例） |
| 預約掛號 transactional | 純 Cognitive，relational 反而 over-design |

**警告**：H1b 不支持暗示「friendliness alone 提不了 engagement」 — 設計醫療 chatbot 別把「親切招呼」當主軸，要建在 cognitive + emotional 之上。

## 限制 ^[inferred]

- 構念效度本身爭議：直接把人類能力分類搬到 AI（[[references/chandra-2022-human-like-AI-competencies|Chandra 2022 critique]]）
- Pre-LLM 時代研究 — GPT/Claude/Gemini 來後三維關係可能重排
- Sample 偏新加坡 18 歲商管生 — 對醫療 / 銀髮族外推性弱

## Related

- [[references/chandra-2022-human-like-AI-competencies]]
- [[concepts/media-naturalness-theory]]
- [[concepts/elaboration-likelihood-model]] — dual-process 相似邏輯
- [[concepts/social-cognitive-theory]] — Bandura self-efficacy 是 ELM moderator
- [[concepts/concept-vs-construct-vs-variable]] — 三維構念的辨識
- [[concepts/common-method-bias]] — Chandra 等示範 CMB 雙方法

## Sources

- [[references/chandra-2022-human-like-AI-competencies]]
- Boyatzis, R. E. (1991). *The Competent Manager*.
- Lee, K. (2010). Individual competencies.
