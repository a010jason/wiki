---
title: VRIO Framework × OKR
type: synthesis
domain: mgmt
tags: [synthesis, VRIO, RBV, OKR, goal-setting, capability-building, mgmt]
sources:
  - "[[concepts/VRIO-framework]]"
  - "[[concepts/OKR]]"
  - "[[concepts/competitive-advantage]]"
  - "[[concepts/KPI]]"
  - "[[concepts/goal-setting-theory]]"
created: 2026-05-22
updated: 2026-05-22
summary: >-
  VRIO 是「資源 lens」（有沒有 sustained advantage 的能力）；OKR 是「目標 lens」（要達成什麼）。兩者操作層級不同卻直接互動：OKR 設計可以**逆向打造** VRIO 資源，也可以耗光時間追 KPI 卻不累積 VRIO。本頁拆出「以 VRIO 為 lens 寫 OKR」的設計準則。
provenance:
  extracted: 0.15
  inferred: 0.75
  ambiguous: 0.10
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# VRIO Framework × OKR

## The Connection

兩個框架在「組織 over time 變什麼樣」這個維度上**互補**但**鮮少被一起談**：

- **[[concepts/VRIO-framework|VRIO]]**：診斷工具 — 此刻哪些資源 Valuable / Rare / Inimitable / Organized，能不能帶來 sustained advantage
- **[[concepts/OKR]]**：操作工具 — 一個季度要達成什麼 Objectives + Key Results，量化追蹤

直覺上兩者不衝突（一個診斷、一個操作）。實際上**多數公司的 OKR 跟 VRIO 沒關係**：OKR 追的是當期可量化的銷售 / 用戶 / 收入指標，**從不問「這季在累積哪個 Inimitable 資源」**。^[inferred]

## Where They Co-occur

3 個 wiki 頁同時 link 兩者：

- [[concepts/competitive-advantage]] — VRIO 是 advantage source，OKR 是 advantage pursuit
- [[references/colquitt-OB-textbook]] — OB 教材並陳兩者作為「組織如何贏」的工具
- [[entities/wen-jin-feng]] — 陽明交大教授課程涵蓋兩者

## Cross-cutting Insight

**OKR 的設計可以逆向打造 VRIO 資源 — 但這需要 PM 主動把「能力建設」寫進 Objectives，不是把「業績目標」當 Objectives**。^[inferred]

### 兩種 OKR 設計對照

| 維度 | KPI-style OKR（多數公司） | VRIO-aware OKR（罕見） |
|---|---|---|
| Objective 寫法 | 「Q3 營收 $10M」 | 「Q3 建立**唯一能在 24 小時內完成自駕資料 fine-tune 的能力**」 |
| Key Results | 都是落後指標（lagging） | 包含 capability milestones（leading） |
| 失敗模式 | 達標但能力沒累積 | 達標難量化、難對齊獎酬 |
| 對 VRIO | 中立到負面 | Inimitable 資源累積機器 |

→ Andy Grove 在 Intel 的原始 OKR 經常是後者（製程節點突破、市占率 vs Motorola），不是純財務目標。Doerr 把 OKR 帶到 Google 後，Google 的 OKR 也多是 capability-oriented（PageRank 改進、爬蟲覆蓋）。^[inferred]

### 為何多數公司退化成 KPI-style

[[concepts/goal-setting-theory|Locke-Latham goal-setting theory]] 的副作用：**Difficult + Specific** 兩準則使得人們偏好「容易量化的 specific 目標」，而 capability building 的 specific 表述很難寫（「建立 Inimitable 的 X」聽起來軟）。^[inferred, drawing on goal-setting theory]

→ OKR 結合 [[concepts/MBO|MBO]] 傳統的執行偏差：MBO 在 1970s-80s 退化成純財務目標，OKR 在 2010s-20s 重蹈覆轍。

## Tensions and Trade-offs

### 1. 時間軸不匹配

- VRIO 的「持續優勢」隱含**多年**（Inimitable 通常需 3-5 年複合累積）
- OKR cadence 是**單季**

→ 季度檢視的 OKR 很難承載多年資源累積。**Annual OKR + Quarterly KR review** 是部分解（Google 內部實踐），但教科書 OKR 教學沒強調這點。^[inferred]

### 2. 「Organized」維度的衝突

VRIO 的 O = Organized to capture value（組織結構支援資源 deploy）。OKR 鼓勵**跨部門對齊**（透明 + bottom-up）— 表面上加強 Organized 維度。但：

- OKR 的 quarterly 切片可能**鎖死當期 deploy 方式**，反而僵化長期 Organized 適應能力
- 過度 OKR transparency 可能洩漏 Inimitable 資源細節（內部 OKR doc 若有 leak）

### 3. KR 量化的 inimitability 矛盾

KR 越好量化，越容易被對手抄。一個能在 OKR doc 上清楚寫出「Q3 完成 X 功能 / 達到 Y 指標」的能力，通常**不 Inimitable**。^[inferred]

→ 真正 VRIO-passing 的能力（causal ambiguity、tacit knowledge、組織文化）**難寫成 KR**。所以 OKR 系統性偏向 visible-but-imitable 的能力建設。

## Open Questions

- **是否該為 VRIO 寫專門的 long-form objective 補 OKR？** 類似 OKR + Hoshin Kanri 結合 — Hoshin 處理 3-5 年策略，OKR 處理 1 季戰術。
- **AI/LLM 時代 OKR 是否該轉向「資料 / 模型 / 流程」三類資源建設？** 傳統 OKR 模板多為產品 / 業務 / 招募，沒明確處理 AI capability building。
- **VRIO「不可模仿性」如何在 OKR 寫法上保護？** 是否該分公開 OKR vs 機密 OKR（戰略 capability KR 不對外）？

## Related

- [[concepts/VRIO-framework]]
- [[concepts/OKR]]
- [[concepts/KPI]]
- [[concepts/MBO]]
- [[concepts/goal-setting-theory]]
- [[concepts/competitive-advantage]]
- [[concepts/dynamic-capabilities]] — VRIO 的動態擴展
- [[synthesis/OKR-vs-KPI-when-to-use]] — Jason 對 OKR/KPI 互補路線的判準
- [[synthesis/G-STIC-vs-OKR-SMART]] — OKR 在三框架嵌套使用中的位置
