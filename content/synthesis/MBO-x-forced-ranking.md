---
title: MBO × Forced Ranking — Absolute Goal vs Relative Ranking
type: synthesis
domain: mgmt
tags: [synthesis, MBO, forced-ranking, performance-management, OKR, kpi, mgmt]
confidence: medium
sources:
  - '[[concepts/MBO]]'
  - '[[concepts/forced-ranking]]'
  - '[[concepts/performance-appraisal-methods-six]]'
  - '[[references/colquitt-OB-textbook]]'
created: 2026-05-22
updated: 2026-05-22
summary: >-
  MBO 與 forced ranking 都是經典績效評估方法但底層邏輯完全相反 — MBO 是**absolute**（每個人對自己目標達成度負責），forced ranking 是**relative**（每個人對同儕排名負責）。同時用兩者會 self-undermine：MBO 鼓勵互助達成目標、forced ranking 鼓勵互相競爭。實務上**只能擇一**或者用 lifecycle 分階段。
provenance:
  extracted: 0.25
  inferred: 0.7
  ambiguous: 0.05
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# MBO × Forced Ranking

## The Connection

兩個都是 Colquitt OB Ch2 / Ch14 的經典績效評估方法，被歸到同一節（成果評估法 + 相對比較法）。但**底層邏輯完全相反**：

| 維度 | MBO（Drucker） | Forced Ranking（Welch / GE） |
|---|---|---|
| **評估基準** | 自己對自己的 goal 達成度 | 自己對 peers 的相對表現 |
| **參考點** | 內部（SMART goal） | 外部（同儕分布） |
| **競爭邏輯** | Non-zero-sum（大家都可達成） | Zero-sum（總有人在底 10%） |
| **時間視野** | 目標期內（季 / 年） | 永遠在比 |
| **行為激勵** | 達成你自己的目標 | 贏過你的 peers |
| **代表案例** | Intel Andy Grove / Hewlett-Packard | GE Jack Welch 20/70/10 |

→ 同時使用兩者會**互相抵消**：MBO 鼓勵 cross-functional 互助達成目標、forced ranking 鼓勵藏資訊 / 不互助以贏排名。^[inferred]

## Where They Co-occur

8 個 page 同時提到兩者：

- **Colquitt OB Ch2** — 同章介紹「成果評估法 vs 相對比較法」
- **[[concepts/performance-appraisal-methods-six]]** — 績效評估 6 大方法的兩個極端
- **多個 HR-related concept 頁面**
- **Jack-Welch / Intel / Andy-Grove** 案例

## Cross-cutting Insight

### 兩者各自的衰減曲線

**Forced Ranking 衰減**（已在 hot.md takeaway）：

> GE 20/70/10 制度，**前 1-2 年 +16% 生產力 / 第 3-4 年 +6% / 第 10 年 ≈ 0%**

—— 因為前 1-2 年砍掉了底 10% 的明確低績效者；3-4 年後底 10% 變成「相對不好但其實 OK」的員工；長期就變 zero-sum game + 抑制合作 + age-based 訴訟。^[extracted]

**MBO 衰減**（隱藏在文獻中）：

- Goal-setting fatigue — 員工開始 sandbag（保守設目標）
- Goal misalignment — 個人目標達成但組織策略沒走對方向
- Dysfunctional measurement — 用易測 KPI 取代真實價值（["**What gets measured gets gamed**"]）

→ 兩者**都會隨時間衰減**，但衰減的原因相反：
- Forced ranking 衰減因為「底部變模糊」
- MBO 衰減因為「目標變遊戲」

## Tensions and Trade-offs

### Tension 1：Cooperation vs Competition

MBO 與 forced ranking 對「員工該如何互動」的假設完全相反：

| 假設 | MBO | Forced Ranking |
|---|---|---|
| 員工間關係 | 合作（共享資源達成各自目標） | 競爭（拿別人的份） |
| 經理角色 | 教練（幫員工達成目標） | 法官（區分 top/bottom） |
| 失敗的歸因 | 結構 / 流程 / 資源不足 | 個人能力不足 |
| 處理 underperformer | 培育 / 重設目標 | 淘汰 |

→ 在 OB 三維 framework（[[concepts/job-performance]]）中，forced ranking 鼓勵 **task performance** 但抑制 **citizenship behavior** — 反之 MBO 兼顧兩者。^[inferred]

### Tension 2：Absolute vs Relative 的場景適配

| 場景條件 | 適合 MBO | 適合 Forced Ranking |
|---|---|---|
| 工作可獨立完成（業務、寫作）| ✓ | ✓ |
| 工作需高度合作（研發、設計）| ✓✓ | ✗ |
| 環境變動快 | ✓（目標可調）| ✗（基準不穩定） |
| 績效差異大 | ✓ | ✓✓ |
| 績效差異小 | ✓ | ✗（區分不出來） |
| 公司急需淘汰 | ✗（不夠激進） | ✓（有 mechanism） |
| 公司急需擴張 | ✓ | ✗（人才流失） |

→ **沒有 universal best practice**，取決於工作性質 + 公司階段。^[inferred]

### Tension 3：OKR 介於兩者之間？

OKR 常被當「現代 MBO」，但 OKR 對 stretch goal（70% 達成已算成功）的鼓勵，使它比傳統 MBO 更不像「絕對評估」。

| 框架 | 對「達成 100%」的態度 |
|---|---|
| MBO | 達成 = 成功 |
| OKR | 達成 70% = 成功（達成 100% 表示目標太保守） |
| Forced Ranking | 無絕對閾值，看 peers |

→ OKR 是 MBO 與 forced ranking 的混血變體 — absolute goal-setting + relative interpretation。^[inferred]

詳見 [[synthesis/OKR-vs-KPI-when-to-use]]。

## 實務組合：Lifecycle 階段分用

教師批註對 GE 案例：「20/70/10 制度第 1-2 年 +16%、長期 ≈ 0%」暗示 forced ranking 是 **短期 surgical tool**，不是長期文化。

組合建議：

| 公司階段 | 主要框架 | 配套 |
|---|---|---|
| **快速擴張期** | MBO + 個人目標達成 | 不用 forced ranking |
| **轉型期 / 急需淘汰** | Forced ranking 1-2 年 | 期後切回 MBO |
| **成熟穩定期** | OKR / KPI 混合 | Forced ranking 應該關閉 |

→ **forced ranking 是工具不是文化**。把它常設化 = 自找衰減。^[inferred]

## Open Questions

- **台灣本地接受度**：高 PD + 集體性的台灣文化下（[[synthesis/taiwan-culture-mgmt-implications]]），forced ranking 是否 backfire 更嚴重？
- **AI / People Analytics 的衝擊**：當績效資料可實時 stream，是否讓 forced ranking 變成 continuous（而非 annual）？是否讓 MBO 的 goal 可動態調整？
- **遠距 / Hybrid Work 的影響**：MBO 適合（outcome-based），forced ranking 困難（缺乏觀察）— 趨勢上 MBO 勝？

## Related

- [[concepts/MBO]] — Drucker / Intel 目標管理
- [[concepts/forced-ranking]] — GE 20/70/10
- [[concepts/performance-appraisal-methods-six]] — 6 大方法總覽
- [[concepts/goal-setting-theory]] — Locke-Latham 為 MBO 的學理底座
- [[concepts/OKR]] — Mixed variant
- [[concepts/KPI]] — Absolute measurement
- [[concepts/job-performance]] — Task vs Citizenship 三維
- [[synthesis/OKR-vs-KPI-when-to-use]] — 同類別 framework 選擇
- [[synthesis/taiwan-culture-mgmt-implications]] — 文化適配
- [[references/colquitt-OB-textbook]] — Ch2 / Ch14 source
