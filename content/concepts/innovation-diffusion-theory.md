---
title: Innovation Diffusion Theory（IDT, Rogers）
type: concept
domain: mgmt
tags: [IDT, diffusion, rogers, innovation, adoption, technology]
aliases: [IDT, diffusion of innovations, 創新擴散理論]
sources:
  - reference:Rogers-1962-1995-2003
  - reference:Bhattacherjee-Ch04-slides (pp.139-149)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Everett Rogers《Diffusion of Innovations》(1962, 1995, 2003) 經典理論。創新透過特定管道、跨時間、在特定 social system 中傳播。S-curve 累積採用曲線；五類採用者（innovators / early adopters / early majority / late majority / laggards）；五個創新特徵（CPA / CPL / ADV / OB / TRI）影響採用率。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Innovation Diffusion Theory (IDT)

Everett Rogers《Diffusion of Innovations》（1962, 1995, 2003）經典。教師中文眉批：「**創新擴散理論**」。^[extracted]

## 核心定義 ^[extracted]

> 創新（idea / practice / object 被認為是 new 的）透過**特定管道**、**跨時間**、在**特定 social system** 中傳播。

四要素：
1. **Innovation**
2. **Communication channels**
3. **Time**
4. **Social system**

## S-Curve 累積採用曲線

```
累積採用率 100% ─────────────────────────
              ╱
            ╱
          ╱        <- 主流市場
        ╱
      ╱
    ╱  <- 早期市場
   ╱
  ╱
─╱  時間 ───────────────────────────────→
```

個體採用時間呈近似常態分布；累積曲線呈 S。

## 五類採用者 ^[extracted]

按採用時序的五個類別（Rogers 1995）：

| 採用者 | 比例（常態分布近似） | 特徵 |
|---|---|---|
| **Innovators** | 2.5% | 冒險、技術迷、高收入 |
| **Early Adopters** | 13.5% | 意見領袖、受社群尊重 |
| **Early Majority** | 34% | 深思熟慮、跟隨 |
| **Late Majority** | 34% | 懷疑、經濟壓力 |
| **Laggards** | 16% | 保守、傳統 |

→ Geoffrey Moore 的 "Crossing the Chasm" 框架就是在這個基礎上提出「Early Adopters 與 Early Majority 之間有鴻溝」。

## 五個 IDT Constructs（影響採用率）^[extracted]

| Construct | 縮寫 | 內容 |
|---|---|---|
| **Compatibility** | CPA | 與現有 value、experience、needs 相容 |
| **Complexity** | CPL | 使用難度（負向：越複雜越慢） |
| **Relative Advantage** | ADV | 比既有 alternative 好多少 |
| **Observability** | OB | 結果是否可見 / 可示範 |
| **Trialability** | TRI | 能否先試用再決定 |

→ 設計新產品時應 maximize 4 個（CPA / ADV / OB / TRI）+ minimize 1 個（CPL）。

## 五階段 Adoption Process（個人層）^[extracted]

1. **Knowledge** — 知道有這個 innovation 存在
2. **Persuasion** — 形成 favorable / unfavorable attitude
3. **Decision** — 決定採用或拒絕
4. **Implementation** — 實際使用
5. **Confirmation** — 後續確認決策

每階段都可能 drop off。

## 應用案例 ^[extracted]

- **Carter & Bélanger (2005)** *Information Systems Journal*：e-government services 信任、創新與接受因子
- **Lee, Hsieh & Hsu (2011)**：IDT + TAM 解釋 e-learning 系統使用意圖
- **Wang et al. (2012)** *Service Industries Journal*：IDT + Transaction Cost Theory 解釋 web ATM 採用

## 與 wiki 既有概念的連結

[[concepts/adopter-categorization]]（Kotler MM 16e Ch18）即源自 Rogers — innovator / early adopter / early majority / late majority / laggard 同樣五分類。

[[concepts/forces-fighting-new-ideas]]（Kotler）也與 IDT 對抗創新的力量相關。

## 對醫療 AI PM 應用 ^[inferred]

醫療 AI 在醫院的擴散：

| IDT 構念 | 醫療 AI 對應 |
|---|---|
| Compatibility | 與既有 PACS / HIS / 工作流整合？ |
| Complexity | 醫師上手難度（30 秒能讀懂結果？） |
| Relative Advantage | 比現行手動判讀好多少？省時間？降誤診？ |
| Observability | 結果能讓其他醫師「看到」改善？ |
| Trialability | 醫院能 pilot 一個科別再 scale 嗎？ |

**Crossing the Chasm 對醫療 AI**：早期採用者是創新醫師 / 醫學中心，但要 cross chasm 進主流醫師（區域醫院、診所）通常卡在 Compatibility 與 Complexity。

## 限制 ^[inferred]

- 五類採用者比例是常態分布近似，未必符合所有 innovation 的實際分布
- 忽略 network effects（後採用者價值不只看自身屬性，還看已採用者數量；[[concepts/network-externalities]] 待寫）
- 對「拒絕」與「discontinuance」處理薄弱
- 跨文化 generalizability 在 Hofstede 高 uncertainty avoidance 文化中採用率系統性較慢

## Related

- [[concepts/adopter-categorization]] — Kotler MM 對應頁
- [[concepts/forces-fighting-new-ideas]] — Kotler MM 對應頁
- UTAUT — 整合 IDT + TAM + 其他
- [[concepts/theory-of-planned-behavior]]
- [[concepts/elaboration-likelihood-model]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch4 slides pp.139-149
- Rogers, E. M. (1962/1995/2003). *Diffusion of Innovations*. Free Press.
