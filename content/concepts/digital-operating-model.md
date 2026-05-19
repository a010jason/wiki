---
title: Digital Operating Model（數位營運模型）
type: concept
domain: mgmt
tags: [AI, digital-transformation, operating-model, strategy, mgmt]
aliases: [DOM, digital ops model, 數位營運模型, AI-driven operating model]
sources:
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
created: 2026-05-06
updated: 2026-05-06
summary: >-
  Iansiti & Lakhani (2020) 的核心框架：用 AI 作為「runtime」（執行所有 process 的環境），讓軟體 / 演算法在 critical path 上做即時決定，員工只處理 AI 還搞不定的邊緣任務。傳統營運模型的價值曲線是邊際遞減的 S 形（規模大 → complexity 上升 → 內耗），數位營運模型的價值曲線是邊際遞增的指數形（規模大 → 資料多 → AI 變強 → 服務變好）。Figure 1-2 是這個框架的單一最重要視覺化。
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Digital Operating Model（DOM）

## 核心定義

> *Operating model = 公司用來把 value proposition 轉化成實際送到客戶手上產品/服務的所有資產與流程*^[inferred]

**Traditional operating model**：員工執行 critical-path 任務，軟體是被人「呼叫」的工具。^[extracted]

**Digital operating model**：軟體 / AI / 演算法在 critical path 上即時決定，員工只處理邊緣 / 例外任務。^[extracted]

—— 差別不在「用不用軟體」（傳統公司也用軟體），差別在 **critical path 上誰做主**。^[inferred]

## 「AI as Runtime」隱喻

[[references/iansiti-lakhani-competing-age-of-ai-2020]] 引用 Satya Nadella：

> "AI is the 'runtime' that is going to shape all of what we do." ^[extracted]

**Runtime 在軟體工程的原意：你的程式碼跑在裡面的執行環境**（如 Node.js / JVM / Python runtime），不是你呼叫的工具，而是決定程式怎麼跑、用多少記憶體、什麼順序、遇錯怎麼處理的整個基礎設施。

書套到企業：**AI 已從工具變成企業的 runtime** —— 不是被員工呼叫的功能，而是員工進來幫忙的環境。^[inferred]

具體例子（書 p.4）：^[extracted]
- Amazon 即時定價、產品推薦
- Walmart mobile app 的個人化
- Ant Financial 即時放貸決策
- Next Rembrandt 創作

—— 全部是「AI 在 critical path 上做主，人類只設目標 / 邊界 / 例外」。

## Figure 1-2：DOM vs 傳統的價值曲線

書最重要的單一圖（p.8）：^[extracted]

```
Value
  ▲
  │            ╱  Digital
  │          ╱   operating model
  │        ╱     (邊際遞增，指數)
  │      ╱
  │ ───       ─── Traditional
  │ ╲             operating model
  │   ╲          (邊際遞減，S 形)
  │     ───
  └────────────────► Users
```

### 為何傳統 ops 邊際遞減

公司規模愈大：^[extracted]
- 員工人數上升 → 溝通協調 complexity 上升
- 流程節點上升 → bug / error / 例外處理上升
- 管理層級上升 → 決策延遲上升
- → **每多一個用戶、邊際成本上升、邊際收益下降**

### 為何 DOM 邊際遞增

數位活動的 3 特性（書 p.7）：^[extracted]
1. **Infinite scalability** — 數位資料複製成本 ≈ 0
2. **Connectability** — 數位活動可零成本接到其他數位活動
3. **Embedded learning** — 演算法可在運行中持續訓練改進

→ **每多一個用戶**：
- 更多資料 → 演算法更強 → 服務更好 → 吸引更多用戶（正循環）
- 邊際成本不上升（軟體零複製成本）
- 邊際收益上升（資料規模效應）

—— 這正是 [[concepts/scale-scope-learning]] 三角的機制基礎。

## DOM 的三個結構性條件

要有 DOM，必須同時滿足：^[inferred]

### 1. 任務數位化（Digitization of activity）

任務本身可以被表達成資料（Amazon 的「推薦哪個商品」可以；醫師「讀片並判斷有沒有腫瘤」也可以）。

**反例**：理髮、按摩、實體手術 —— 任務本身有大量物理操作，目前還無法 100% 數位化。

### 2. 資料管道（Data pipeline）

收集資料、清洗、標註、餵給演算法的整套基礎設施存在且持續流動。^[extracted from book Ch3 reference]

### 3. 演算法在 critical path 上有決策權（AI in the core）

不只是「AI 給建議、人決定」，而是「AI 直接行動、人只處理例外」。^[extracted from book p.11 "humans on the edge"]

—— 詳見 [[concepts/humans-on-edge-ai-in-core]]

## 為何傳統公司轉型很難（不只是技術問題）

書 p.20 強調：^[extracted]

> "But we believe this transformation is about more than technology; it's about the need to become a different kind of company. ... Confronting this threat does not involve spinning off an online business, putting a laboratory in Silicon Valley, or creating a digital business unit. Rather, it involves a much deeper and more general challenge: rearchitecting how the firm works..."

關鍵阻力：^[inferred]
- **組織心智模型**：員工把自己定位為「critical path 上的執行者」，DOM 要他們變成「邊緣例外處理者」 — 大量心理抗拒
- **資源分配**：傳統公司資源照舊架構分到部門，DOM 需要打破筒倉
- **獎酬系統**：傳統公司獎酬綁在「執行任務的好壞」，DOM 下任務由 AI 執行，獎酬綁在「設計與監督 AI」 — 整套 HR 要重寫
- **法規 / 合約包袱**：銀行、保險、醫療都有「決策需人類簽字」的法規條件，AI 無法取代

## 已驗證的 DOM 案例

書 Ch1 主要案例：^[extracted]
- **Amazon**：collaborative filtering、Echo / Alexa（50,000 個 third-party skill at 2018/9）
- **WeChat / Tencent**：1999 Open ICQ → 2011 WeChat → API platform；Tencent + Ant Financial 觸及消費者數 = 美歐最大銀行 10 倍
- **Walmart 反擊嘗試**：併 Jet.com / Bonobos、與 Microsoft 結盟、Intelligent Retail Lab、Amazon Go 風格 cashier-less

## 對醫療 AI 的含意

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]

醫療 AI 業務模型的兩條岔路：^[inferred]

| | Pipeline 思維（傳統） | DOM 思維 |
|---|---|---|
| AI 角色 | 醫師的工具，給 second opinion | 流程的 runtime，先 triage / pre-read / draft 報告 |
| 醫師角色 | 全程主導 | 處理 AI 拒簽 / 例外 / 高風險案 |
| Scaling | 線性（一個醫師讀 N 例 / 天）| 指數（AI runtime 看完，醫師只簽字）|
| 醫療法規 | 沒挑戰 | 強制 human-in-the-loop，無法 100% AI core |

醫療業因法規邊界不能 100% 採用 DOM，但**部分 DOM 化**（pre-read / triage / 自動化報告草擬）已是現況。^[inferred]

## 與其他 wiki 概念的關係

- 隱喻層：「AI as Runtime」（本頁含）
- 機制層：[[concepts/scale-scope-learning]] — DOM 為何能反轉價值曲線
- 哲學層：[[concepts/weak-ai-sufficiency]] — DOM 不需要 AGI，weak AI 已夠
- 組織層：[[concepts/humans-on-edge-ai-in-core]] — 員工該擺哪
- 競爭層：[[concepts/strategic-collisions]] — DOM 公司碰到傳統公司會怎樣
- 案例本體：[[references/iansiti-lakhani-competing-age-of-ai-2020]]

## Open questions

- LLM 出現（2022-）後，書中 DOM 框架是否需要重新校正？LLM 把「需要什麼 AI 能力」的門檻大幅拉低，許多原本要客製演算法的場景現在 prompt 就能解 —— 這讓 DOM 化的成本曲線重新洗牌^[ambiguous]
- 醫療業在「法規限制無法 100% DOM」的條件下，**怎樣的部分 DOM 化最有 ROI**？^[ambiguous]
- DOM 公司的 Figure 1-2 邊際遞增曲線是否會永遠成立？或是到某個 user 數會撞到隱私 / 信任 / 監管的天花板而轉折？（書 p.18 暗示後者，但沒給數字）^[inferred]

## Sources

- [[references/iansiti-lakhani-competing-age-of-ai-2020]] Ch1 全文
- Satya Nadella runtime 引言（書 p.3）
- Figure 1-2（書 p.8）
