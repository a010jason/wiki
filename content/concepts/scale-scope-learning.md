---
title: Scale, Scope, Learning（SSL 三角優勢）
type: concept
domain: mgmt
tags: [AI, digital-operating-model, network-effects, strategy, mgmt]
aliases: [SSL, digital scale scope learning, Iansiti SSL]
sources:
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
created: 2026-05-06
updated: 2026-05-06
summary: >-
  Iansiti & Lakhani (2020) 提出的數位營運模型三優勢：**Scale**（規模可無限擴張、邊際成本 ≈ 0）、**Scope**（資料 / 演算法可零成本連到其他活動）、**Learning**（嵌入式學習持續改善）。三者同時成立，是 [[concepts/digital-operating-model]] 能反轉傳統營運模型邊際遞減曲線的根本原因。傳統公司頂多得到其中一兩項，digital firm 三項齊全。
provenance:
  extracted: 0.65
  inferred: 0.3
  ambiguous: 0.05
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Scale, Scope, Learning（SSL）

## 三角定義

[[references/iansiti-lakhani-competing-age-of-ai-2020]] 書 p.7 直接整合過：^[extracted]

| 維度 | 數位活動帶來的什麼 | 傳統活動的限制 |
|---|---|---|
| **Scale** | 數位資料零複製成本 → 服務一個用戶或十億用戶的邊際成本 ≈ 0 | 實體服務需 1:1 人力或設備 |
| **Scope** | 數位活動可零成本連到其他數位活動（Amazon 學書本偏好可直接用於影片 / 衣物推薦）| 不同事業需各自團隊、流程、IT |
| **Learning** | 演算法在運行中持續訓練改進 | 員工學習有極限（一人一輩子能處理多少例？）|

—— 三者同時成立 → DOM 公司的 Figure 1-2 邊際遞增曲線。

## 三個維度詳解

### Scale（規模）

> "A digital representation is **infinitely scalable** — it is now possible to easily and perfectly communicate the pattern it represents, replicate it, and transmit it at virtually zero marginal cost to a near infinite numbers of recipients, anywhere in the world." ^[extracted from book p.7]

**機制**：軟體 / 資料的複製成本接近 0；雲端基礎設施按用量付費 → 服務 1 萬還是 1 億用戶，邊際單位成本幾乎不變。^[inferred]

**反例**：傳統零售商每多開一家店要租金、人力、庫存、門市裝潢 → 邊際成本顯著。

### Scope（範疇）

> "Digitizing the activity makes it easily connectable, also at zero marginal cost, to limitless other, complementary activities, dramatically increasing its scope." ^[extracted from book p.7]

**機制**：數位活動之間以 API、共享資料庫、共享演算法相連，跨事業擴張的成本趨近 0。^[inferred]

**書中經典例子**（書 p.10）：^[extracted]
> "Much of what Amazon learns from a consumer's book preferences can be applied to suggestions of videos, clothing, or almost anything else."

—— Amazon 學「讀者愛科幻」這資料，可直接用於 video 推薦、衣物推薦，完全不必為新事業重練演算法。

**反例**：銀行進零售業要重建 IT、員工、流程、合規系統 —— 範疇擴張極貴。

### Learning（學習）

> "The digital activity can embed processing instructions — AI algorithms that shape behavior and enable a variety of possible paths and responses. **This logic can learn as it processes data**, continuously training and improving the algorithms that are embedded in it." ^[extracted from book p.7]

**機制**：演算法在每次決策後自動取得 feedback（用戶點了？沒點？買了？退了？），用於下次訓練 → 學習是 always-on。^[inferred]

**反例**：員工的學習有 capacity 上限、會離職、會疲倦、知識難移轉。

## 為何三者「同時成立」是質變

任一單獨優勢，傳統公司多少能仿效：^[inferred]

- 傳統大公司能做到 scale（中央工廠 + 全球供應鏈）
- 傳統 conglomerate 能做到 scope（GE、3M、Samsung 跨多事業）
- 傳統老師傅 / 醫師 / 顧問能做到 learning（個人經驗累積）

**但傳統公司很難三者同時成立** —— scale 大會吃掉 scope（部門變多 = 整合難）、scope 大會傷害 learning（不同事業學習難共享）。

DOM 公司用 AI 作為 runtime，三者同步擴張：^[inferred]
- scale 因軟體零複製成本不衰減
- scope 因 API 與資料共享輕鬆擴張
- learning 因演算法持續訓練永不停止

—— 這個「三軸同步擴張」是 DOM 在 Figure 1-2 邊際遞增的數學基礎。^[inferred]

## 與其他學者的相關概念

| 文獻 | 對應概念 | 異同 |
|---|---|---|
| Penrose (1959) | Resources & capabilities | 古典 RBV，沒區分 digital vs analog |
| Nelson & Winter (1982) | Organizational routines | 強調 learning 但 pre-digital |
| Hagiu, Eisenmann, Parker | Multi-sided platform | 強調 scope (連兩邊用戶)，但對 learning 著墨少 |
| Brynjolfsson & McAfee | Second Machine Age | scale + learning 強，scope 較弱 |
| Iansiti & Lakhani | **SSL 三軸整合** | 把三軸放在同一個營運模型框架下 |

—— Iansiti & Lakhani 的貢獻是**整合**，不是發明任一單軸。^[inferred]

## SSL 在傳統公司的部分採用

傳統公司不必全有全無，可以**部分 SSL 化**：^[inferred]

| 例子 | 採用了哪幾軸 |
|---|---|
| Walmart Retail Link + 雲端整合（書 p.12-13）| Scale（雲端）+ 部分 Learning（資料分析）|
| Mastercard / Fidelity / Roche AI 轉型（書 p.18）| Learning 為主、Scale & Scope 部分 |
| 醫院導入 PACS + AI pre-read | Scale（單例邊際成本下降）+ Learning（模型優化），Scope 弱 |

→ 完整 SSL 三軸需要重新設計營運模型（→ [[concepts/digital-operating-model]]）；部分 SSL 採用是傳統公司的**過渡**策略。^[inferred]

## 對醫療 AI 的判讀

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]

醫療 AI 公司的 SSL 評估：^[inferred]

| 公司類型 | Scale | Scope | Learning |
|---|---|---|---|
| Class A：PACS / EMR platform（Sectra / Epic / GE）| ✅ 高 | ✅ 高（一個 platform 跨多 modality / 多 vertical）| ⚠️ 受醫院資料隱私限制 |
| Class B：資料壁壘 pipeline（Aidoc / Heartflow）| ⚠️ 中（需逐家醫院簽約）| ❌ 低（單模型只解一個任務）| ✅ 高（持續從新案例學）|
| Class C：通用 pipeline | ⚠️ 中 | ❌ 低 | ⚠️ 中 |

→ Class A 在 SSL 三軸領先 → 長期勝率高。Class B 只贏在 Learning，所以**只有資料壁壘 + 持續學習速度**能維持差異化。

## Open questions

- 醫療業隱私 / GDPR / HIPAA 等法規是否系統性地壓制醫療 AI 的 Learning 軸（限制資料跨醫院共享）？這是醫療業 SSL 三軸天生不對稱的根因？^[inferred]
- LLM 時代的 SSL 是否需要重新校正？基礎模型本身是 scale + learning 的怪物，在它之上做 application 的公司是否反而弱化自己的 SSL？（吃 OpenAI / Google 提供的 scale & learning，自己只剩 scope）^[ambiguous]

## Sources

- [[references/iansiti-lakhani-competing-age-of-ai-2020]] Ch1 p.7 直接定義
- Figure 1-2（書 p.8）— SSL 結果的視覺化
- 與 [[concepts/digital-operating-model]] 為機制 vs 結果關係
