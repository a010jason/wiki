---
title: Agile vs Waterfall — 何時用哪個（醫療業視角）
type: synthesis
domain: mgmt
tags: [agile, waterfall, decision, mgmt]
aliases: [agile vs waterfall, 敏捷還是瀑布]
sources:
  - lecture:2023-08-20-溫金豐-敏捷組織與敏捷方法
  - jason-margin-notes:2023-08-20-Agile-handwritten
created: 2026-05-05
updated: 2026-05-05
summary: >-
  Jason 自己的判斷：醫療資訊系統不是「該換成敏捷」的問題，而是「不同產品階段／不同子系統用不同方法」。法規受監管的部分官僚不可少，模型迭代與用戶體驗的部分敏捷不可缺。
confidence: medium
provenance:
  extracted: 0.2
  inferred: 0.65
  ambiguous: 0.15
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Agile vs Waterfall — 何時用哪個（醫療業視角）

> 立場：Jason 自己整理（2026-05-05），confidence = medium。
> 來源：[[entities/wen-jin-feng]] 2023/8/20 課程下半段 + 自己 PDF 邊註。
> 呼應 [[synthesis/OKR-vs-KPI-when-to-use]] 同型結構（不是替代而是並用）。

## TL;DR

醫療資訊系統不該整體選邊。把產品拆成幾個層次，**每層套不同方法**：

- **法規受監管的部分**（醫材上市流程、CAPA、變更管制、SOUP 管理） → **waterfall + 強官僚**，跳級會違法
- **模型／演算法迭代** → **agile**，沒迭代就追不上 SOTA
- **用戶體驗與新功能** → **agile + MVP**，但要小心客戶關係維護

## 三個判準（合用 [[concepts/agile-organization]] 適用情境表）

### 判準 1：錯誤代價

| 錯誤代價 | 適合 | 例 |
|---|---|---|
| 高（會傷害病人、違法、財損巨大） | Waterfall + 受控變更 | 醫材韌體、HIS 計費邏輯 |
| 中（影響流暢度但可回退） | Hybrid（敏捷開發 + 瀑布上線） | 報告排版、UX 優化 |
| 低（可學習） | Agile / Scrum 全套 | 內部工具、AI 模型實驗 |

理由：Rigby 等 2016 表的「過程中錯誤的影響」一欄就是這個切點。^[inferred]

### 判準 2：客戶參與意願

醫療業特有的張力：醫師客戶**很忙、不想當 beta tester**。^[inferred] Agile Manifesto 「客戶合作 重於 合約協商」這條對醫療客戶失效 — 客戶簽了合約之後不太理你，你想要快速迭代回饋拿不到。

→ 解法可能是**內部代理客戶**（醫療事務團隊扮演 voice of customer），但這會稀釋真實客戶聲音。^[inferred]

### 判準 3：產品成熟度

Jason 邊註：**穿著衣服改衣服 → 契機 → 快掛了的時候**。^[extracted]

意思是：成熟產品「邊賣邊改」風險高，通常等「快掛了」（PMF 失靈）才動結構級重構。^[inferred] 反過來：新產品 / 早期市場可以激進敏捷。

> EBM: 醫療→穩定→waterfall → 擴大應用→試了之後有問題再改（MVP）→ 錯誤是必然的 → 客戶關係怎麼辦？？客戶特性、產品特性區分 ^[extracted-from-margin]

這段邊註直指：**從穩定醫療市場擴大到非醫療鄰近市場時，客戶/產品特性都變了**，敏捷的「錯誤是必然」對既有醫療客戶是違約，對新市場才合理。

## 對 Jason 自己的決策意涵（PM @ ebmtech）

> 註：以下是把框架套到自己工作的 hypothetical 思考，未跟主管或同事驗證。^[ambiguous]

可能的雙軌：
- **核心醫療裝置線**（影響臨床決策、需 510(k) / TFDA 登記）→ Waterfall 為主，每年 1–2 個受控版本
- **AI 模型線**（部署在合規包裝內）→ Agile，模型本身可以快速迭代，**包裝層不變則不需重審**
- **使用者體驗 / 工作流程優化** → Agile + Scrum，2 週 sprint
- **跨產品 / 平台 / 內部工具** → Agile，無監管包袱

## 反論 / Self-critique

### 反對 1：「分層套用」說起來容易做起來難

醫療業 PMS（Post-Market Surveillance）會自動把所有 patch 都拉進變更管制流程 — 即使是 UI 改動，照法規也要 documentation。雙軌實質上會被法規壓回單軌（保守）。^[inferred]

### 反對 2：客戶參與意願差不該是不敏捷的理由

如果客戶不想合作，可能是**產品本身對他們的痛點抓不準**，敏捷的本意就是逼產品團隊去 talk to user。把它當成「醫療客戶不適合敏捷」的理由可能是 self-fulfilling。^[inferred]

### 反對 3：產品成熟度判準與 OKR vs KPI 判準衝突

[[synthesis/OKR-vs-KPI-when-to-use]] 的判準 1 是「環境變動性」，這篇是「產品成熟度」。**兩者可能矛盾** — 成熟產品在變動環境（醫療 AI 是典型）該用什麼？^[ambiguous] 需要再想。

## Outstanding Questions

1. 醫療 AI 公司有實際 case study 採雙軌的嗎？需要 wiki-research
2. EBM 的競爭對手（Sectra、GE、Philips）的研發節奏是 waterfall 還是 agile？
3. ISO 13485 / IEC 62304 的 agile-friendly 解讀有官方指引嗎？（FDA 2022 有發 pre-cert program guidance）
4. 我這個分類本身會被 wiki-challenge 攻擊在哪？

## 升級條件（→ challenged）

跑 [[skills/leading-agile-transformation]] 與本頁的 wiki-challenge，看雙軌假說能否撐住。

## Related

- [[concepts/agile-organization]]
- [[concepts/scrum-method]]
- [[concepts/agile-manifesto]]
- [[concepts/post-bureaucratic-mindset]]
- [[skills/leading-agile-transformation]]
- [[synthesis/OKR-vs-KPI-when-to-use]] —— 同型結構的姊妹頁
