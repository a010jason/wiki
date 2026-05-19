---
title: Stickiness vs Reach（黏著度 vs 觸及）
type: concept
domain: mgmt
tags: [user-engagement, advertising, platform, metrics, mgmt]
aliases: [黏著度, stickiness, reach, time-spent vs unique-visitors]
sources:
  - textbook:HBS-Case-9-513-060-GAFA-Deighton-Kornfeld-2013
created: 2026-05-06
updated: 2026-05-06
summary: >-
  數位媒體有兩個正交指標：**Reach（觸及，獨立訪客數）** 與 **Stickiness（黏著度，月均用時）**。前者是廣度、後者是深度。同樣高 reach 的兩個服務，黏著度可能差 3-5 倍，這直接決定廣告變現潛力。GAFA case 圖表四的 FB 6:41 vs Google 1:54 是經典 anchor —— 黏著度差 3.5x 是預測 FB 廣告營收將追上 Google 的關鍵伏筆。
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Stickiness vs Reach

## 兩個正交指標

| 指標 | 定義 | 經典 metric |
|---|---|---|
| **Reach（觸及）** | 多少人來 | Monthly Unique Visitors (MUV)、DAU、MAU |
| **Stickiness（黏著度）** | 來的人停多久 | 月均用時、session 長度、人均訪問次數 |

兩者**正交**：高 reach + 低 stickiness（搜索引擎、新聞首頁）跟 高 reach + 高 stickiness（社交網路、影音平台）是不同的物種。^[inferred]

## GAFA case 的經典 anchor 數據

2012 年 9 月，美國 top 10 web brands（[[references/hbs-gafa-case-deighton-2013]] 圖表四）：^[extracted]

| 排名 | 品牌 | Reach（百萬訪客）| Stickiness（月均用時）|
|---|---|---:|---:|
| 1 | Google | 175 | **1:54** |
| 2 | Facebook | 153 | **6:41** |
| 3 | Yahoo | 140 | 2:21 |
| 4 | YouTube | 131 | 1:45 |
| 5 | MSN/Bing | 125 | 1:14 |
| 6 | Microsoft | 89 | 0:43 |
| 7 | AOL | 88 | 2:15 |
| 8 | Amazon | 80 | 0:35 |
| 9 | Wikipedia | 78 | 0:19 |
| 10 | Ask | 75 | 0:12 |

**FB 的 reach 比 Google 少 13%，但黏著度高 3.5x（6:41 vs 1:54）。**^[extracted]

## 為何這個差距那麼重要

廣告變現潛力 ≈ 用戶總時間 = Reach × Stickiness。^[inferred]

| 公司 | Reach × Stickiness | 用戶總時間（小時/月）|
|---|---|---:|
| Google | 175M × 1:54 | 5.5 億小時 |
| Facebook | 153M × 6:41 | **17 億小時** |

**FB 的「廣告載體面積」是 Google 的 3 倍。** 案例寫於 2013 年，當時 FB 只賺 22 億美元 display ad（Google 賺 23 億），但 case 已經暗示「FB sucks up a ridiculously huge and growing share of our time wasted online」。^[extracted from Mark Gongloff 2011]

**13 年後驗證**（2024 年）：Meta 廣告營收年破 1300 億美元，與 Google Search 在伯仲之間 —— 案例的隱含預測正確。^[inferred]

## Stickiness 高的副作用

不是越高越好。Stickiness 對廣告 monetization 是好事，但對用戶 wellbeing / 監管壓力是壞事：^[inferred]

- 高黏著度 = 用戶花更多時間 = 廣告 inventory 多 = 營收高
- 但同時 = "screen time" 監管目標、心理健康訴訟風險、用戶反彈（如近年的 Instagram Reels backlash）

Apple 的策略不同 —— Apple 不靠廣告，所以 Apple 樂意推 "Screen Time" 功能幫用戶**減少**手機使用，間接打擊 Google / FB 的廣告基礎。Stickiness 對不同商業模式的價值符號相反。^[inferred]

## Stickiness 與 Reach 的策略選擇

### 起家階段：先 Reach 還是先 Stickiness？

兩條典型路線：^[inferred]

| 策略 | 例子 | 邏輯 |
|---|---|---|
| Reach-first | Google（搜索），Wikipedia | 先做出大家都會用的工具，靠 reach 撐住，再試圖加 stickiness |
| Stickiness-first | Facebook 早期（哈佛 only），Discord（遊戲社群 only） | 先在小圈子做出極黏著的體驗，再擴張 reach |

Stickiness-first 通常更難擴張，但一旦擴起來護城河更深（用戶資料、社交圖譜、行為記錄都已沉澱）。

### 成熟階段：Reach 已飽和怎麼辦？

當 reach 到天花板（如 Google search 已覆蓋幾乎所有 internet 用戶），剩下的成長只能靠**提升 stickiness**：每用戶花更多時間。Google 推 YouTube、Gmail、Maps、Drive、Photos —— 全是把同一群用戶**從 1:54 拉長到 1:54 + N**的工具。^[inferred]

## 醫療 AI 場景

對醫療 AI 產品（如 [[concepts/AI-輔助診斷]]，待寫）：

- **Reach**：被多少醫師/醫院使用（裝機數、licensed sites）
- **Stickiness**：每位醫師每月使用次數 / 每例診斷使用 AI 的比率

**重醫療 AI 容易迷信 reach（簽下多少醫院）**，但真正能解釋退出率與付費續訂的是 stickiness（醫師有沒有真的天天用）。^[inferred]

→ 對 EBM 之類的醫療 AI 公司而言，「裝了 100 家醫院但 90 家月使用率 < 10%」遠比「裝了 30 家但都重度使用」更危險。^[inferred]

## Open questions

- Stickiness 跟 reach 的乘積（總用戶時間）一直是廣告變現的好 proxy，但**訂閱制**（Netflix、Apple Music）下這個 proxy 不成立。如何在訂閱模式下重新定義？^[ambiguous]
- 醫療 AI 的 stickiness 該怎麼定義 —— 是每位醫師每月開啟次數？還是每例診斷 AI 介入率？哪個更能 predict churn？^[ambiguous]

## Sources

- [[references/hbs-gafa-case-deighton-2013]] 圖表四（2012 Nielsen 數據）
- Mark Gongloff (2011) "Facebook Sucks Up a Ridiculously Huge and Growing Share of our Time Wasted Online" — case 引用 footnote 11
