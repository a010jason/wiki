---
title: Elaboration Likelihood Model（ELM, Petty & Cacioppo 1986）
type: concept
domain: research-methods
tags: [ELM, persuasion, dual-process, psychology, petty-cacioppo]
aliases: [ELM, elaboration likelihood, 推敲可能性模式]
sources:
  - reference:Petty-Cacioppo-1986
  - reference:Bhattacherjee-Ch04-slides (pp.150-184)
  - reference:Bhattacherjee-Sanford-2006-MISQ
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Petty & Cacioppo (1986) 心理學的 dual-process attitude formation theory。兩條 influence routes：Central（仔細思考 argument quality）vs Peripheral（依賴 cues 如專家背書）。Elaboration likelihood = ability + motivation；高 → central route 主導，低 → peripheral route 主導。教師眉批：「直接路徑 / 間接路徑」。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Elaboration Likelihood Model (ELM)

Petty & Cacioppo (1986) 提出，心理學經典 dual-process attitude formation theory。^[extracted]

## 雙路徑 ^[extracted]

| Route | 中文（教師眉批） | 機制 |
|---|---|---|
| **Central route** | 直接路徑 | 仔細思考 issue-related arguments、評估 relevance / 優劣，形成 informed judgment |
| **Peripheral route** | 間接路徑 | 依賴 external cues（先前使用者數、專家背書、代言人 likeability）而非 argument quality |

## Elaboration Likelihood ^[extracted]

決定哪條路徑主導的兩個因素：

```
Elaboration Likelihood = Ability + Motivation
```

| 條件 | 路徑主導 |
|---|---|
| 高 ability + 高 motivation | **Central route**（受 argument quality 影響） |
| 低 ability 或 低 motivation | **Peripheral route**（受 peripheral cue 影響） |

**重要**：ELM 是**情境特性**，非個人特質。同一人在不同情境下會切換路徑。

## 經典範例 ^[extracted]

- 醫師對自己領域用 **central route**（評估藥物 RCT 數據）
- 同一醫師對車輛維修則靠 **peripheral cue**（mechanic 推薦）
- 同樣是「買決定」，elaboration likelihood 完全不同

## Bhattacherjee & Sanford (2006) MISQ 經典應用 ^[extracted]

把 ELM 套到 IT 採用（user perception of usefulness）：

| ELM 元素 | Operationalization |
|---|---|
| Motivation | **Job relevance**（IT 與工作的相關性） |
| Ability | **User expertise**（使用者經驗） |
| Argument quality → perceived usefulness | H4 |
| Source credibility → perceived usefulness / attitude | H5-H6 |

H4-H9 假設：
- Job relevance 與 user expertise 對「argument quality → 認知有用性」是**正向 moderator**
- 對「source credibility → 態度 / 認知有用性」是**負向 moderator**

→ 即：用戶越懂、越覺得相關 → 越在乎 argument quality（central route）；反之則受 source credibility 影響（peripheral）。

## Lin & Huang (2021) IJBM 應用案例 ^[extracted]

P2P lending investment intention：
- 加入 **financial self-efficacy**（Bandura 1977）與 **financial risk preference** 作 moderator
- H3：financial self-efficacy 正向 moderate「argument quality → trust」
- H5：financial risk preference 負向 moderate「argument quality → trust」

## 對行銷 / PM 應用 ^[inferred]

### 廣告 / 行銷文案設計

| 用戶 elaboration likelihood | 行銷重點 |
|---|---|
| 高（懂行 + 在乎） | 紮實的 argument、技術規格、數據對比 |
| 低（外行 / 不在乎） | KOL 背書、社群證據、emotional appeal |

→ 為什麼 B2B SaaS 銷售常做 case study 與技術 deep dive（central），而 B2C 快消品做名人代言（peripheral）。

### 醫療 AI PM 應用 ^[inferred]

對不同 stakeholder 用不同路徑：

| Stakeholder | 適用 route | 內容 |
|---|---|---|
| 主治醫師 / 科主任 | **Central** | 臨床 study、sensitivity / specificity、cost-benefit |
| 院長 / CIO（不深入臨床） | **Peripheral** | 競爭醫院已採用、學會認證、媒體報導 |
| 病人 | **Peripheral** | 醫師推薦、學會背書 |

→ 同一個產品的 deck 對不同對象要切版本。

### 醫療 AI 推廣的弔詭

醫師理應 high ability，但對 AI 通常 low motivation（懷疑）→ ELM 預測會走 peripheral route — 依賴**同儕醫師背書**而非數據說服。這是醫療 AI 採用緩慢的關鍵。

## 限制 ^[inferred]

- 雙路徑可能同時運作（並非絕對二分）
- Motivation / ability 的測量在不同研究不一致
- 後續 dual-process theory（System 1 vs System 2, Kahneman）框架更廣
- 跨文化適用性（高 [[concepts/hofstede-cultural-dimensions|collectivist]] 文化中 peripheral cue 權重可能更高）

## Related

- [[concepts/scientific-theory]]
- [[concepts/theory-of-planned-behavior]]
- [[concepts/innovation-diffusion-theory]]
- [[concepts/social-cognitive-theory]] — 包含 self-efficacy 是 ELM moderator 之一
- [[concepts/human-like-AI-competencies]] — 待寫，Chandra 2022 在 conversational AI 也用 ELM-like dual-process 邏輯

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch4 slides pp.150-184
- Petty, R. E., & Cacioppo, J. T. (1986). *Communication and Persuasion: Central and Peripheral Routes to Attitude Change*.
- Bhattacherjee, A., & Sanford, C. (2006). Influence processes for information technology acceptance. *MIS Quarterly*, 30(4), 805-825.
- Lin, C.-P., & Huang, H.-Y. (2021). *International Journal of Bank Marketing*, 39(7), 1134-1149.
