---
title: 3V × STP — Customer-only vs Multi-stakeholder 行銷框架
type: synthesis
domain: marketing
tags: [synthesis, 3V, STP, kotler, value-creation, multi-stakeholder, mgmt]
confidence: medium
sources:
  - '[[concepts/3V-market-value-principle]]'
  - '[[concepts/STP-framework]]'
  - '[[references/kotler-keller-chernev-marketing-management-16e]]'
created: 2026-05-22
updated: 2026-05-22
summary: >-
  Kotler 16e Ch02 的兩個 hub 框架 STP 與 3V 看似 sequential（STP 找客戶 → 3V 給價值），實際是兩種不同的 value-creation 哲學：STP 假設 customer-only 視角（行銷只服務客戶），3V 強制 multi-stakeholder（同時對 Customer / Collaborator / Company 創造價值）。混用會踩 marketing myopia 陷阱。
provenance:
  extracted: 0.25
  inferred: 0.7
  ambiguous: 0.05
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# 3V × STP — Customer-only vs Multi-stakeholder

## The Connection

STP（Segmentation → Targeting → Positioning）與 3V（Customer / Collaborator / Company Value）都是 Kotler 16e Ch02 的核心框架，常被教學成 **sequential pipeline**：

```
STP（先找客戶）  →  3V（再給價值）  →  7Ts（最後執行）
```

但這個 pipeline 隱藏一個假設：**「找客戶」與「給價值」是兩個獨立階段**。

實際上 3V 揭示這個假設**錯誤** — 3V 強制你**同時**思考三方價值（不只客戶），而 STP 只訓練你看客戶。混用兩個框架時，STP 的 customer-only 視角往往**壓過** 3V 的 multi-stakeholder 訓誡。

→ **STP 與 3V 不是 sequential 而是 orthogonal viewpoints**，要 explicitly 並列考慮才能避免 marketing myopia。^[inferred]

## Where They Co-occur

8 個 page 同時引用兩者：

- **Kotler 16e Ch02** — 兩者都在此章
- **[[concepts/G-STIC-framework]]** — Marketing Planning 的 spine
- **[[concepts/marketing-definition]]** — Ch01 hub，把 customer / collaborator / company 三方 explicitly 列入
- **多個 entity 頁面**（Apple、Amazon、TSMC 等）— 用 STP 描述 segment，用 3V 評估 ecosystem

## Cross-cutting Insight

### STP 的盲點：Collaborator / Company value 被當「外生變數」

STP 的標準教學是：

1. **Segmentation** — 把市場切成同質群
2. **Targeting** — 選擇要服務哪些 segment
3. **Positioning** — 在客戶心中佔位

—— 三步驟**沒有任何一步**問「對 collaborator 創造多少 value」「對 company 自己創造多少 value」。

→ STP 隱含假設：**collaborator 與 company 是 fixed 限制條件**（既有經銷商、既有財務目標）。^[inferred]

### 3V 強制 explicit 多方思考

3V 的三圓交集：

```
        Customer Value
         /        \
        /          \
       /            \
Collaborator        Company
   Value     ←→     Value
```

—— 三圓交集才是 **OVP（Optimal Value Proposition）**。任何 segment 即使對客戶 valuable，若 collaborator 不願推 / company 賺不到錢 → 不是真正可持續的 positioning。^[extracted]

### 接合：3V 應該 modulate STP 的選擇

把兩個框架交叉成 2D：

| | High Collaborator + Company value | Low Collaborator + Company value |
|---|---|---|
| **High Customer value segment** | OVP ✅ 真正可選 segment | 「客戶愛但賺不到」陷阱 |
| **Low Customer value segment** | 「自說自話」陷阱 | 兩端皆輸，淘汰 |

—— STP 在 targeting 階段選 segment 時，必須先過 3V 檢驗。教學常省略這步，導致 marketing plan **理想客戶選好了但商業上沒法 deliver**。^[inferred]

## Tensions and Trade-offs

### Tension 1：STP 教 customer-centricity，3V 教 stakeholder-equity

[[concepts/customer-centricity]] 是 Ch01 的口號（Figure 1.7 把客戶放正中心）。但 3V 把客戶與 collaborator + company 並列。

→ 兩者的潛在衝突：customer-centric 偏 customer-only；3V 偏 multi-stakeholder。在 platform 商模（[[entities/Booking-com]] / [[entities/Shopee]]）尤其衝突 — 平台 collaborator（supplier 端）的 value 與 customer value 之間需要 balance。^[inferred]

### Tension 2：Segmentation 容易做、Collaborator value 容易忽略

STP 的 segmentation 有大量量化工具（cluster analysis、demographic 切分），collaborator value 缺乏對應量化 — 容易在 marketing plan 中被「概念性提及」但沒實質分析。

→ 教師批註對 HTC 案例的指控（出貨給 carrier 而非消費者，[[synthesis/HTC-marketing-research-gap]]）正是 collaborator value 過重 / customer value 不足的具體案例。^[inferred]

### Tension 3：B2B vs B2C 的非對稱

| 商模 | STP 主導 | 3V 主導 |
|---|---|---|
| B2C（消費品） | customer = end consumer，STP 充分 | 3V 偏 nice-to-have |
| B2B（工業品） | customer 不是 end consumer，STP 不夠 | 3V 強制思考整個 supply chain value |
| Platform（雙邊） | 兩邊都是 customer，STP 變雙重 | 3V 直接適用 |

→ **3V 在 B2B / Platform 商模比 STP 重要**；STP 在 B2C 反而充分。

醫療資訊業是 typical B2B + Platform 混血（醫院是 customer，醫師是 user，健保是 collaborator），**STP-only 規劃會錯失 collaborator value 維度**。^[inferred]

## Open Questions

- **3V 的「Customer Value」量化**：Ch02 給出 Total Benefit − Total Cost 公式（[[concepts/customer-value-proposition]]），但 Collaborator Value 與 Company Value 缺乏標準公式
- **數位平台 3V**：當 collaborator 與 customer 是同一群人（UGC platform），3V 需要進一步拆解
- **3V 與 ESG 的對接**：ESG 強調 multi-stakeholder（員工、社群、環境），3V 只列三方 — 兩者是否該整合？

## Related

- [[concepts/3V-market-value-principle]] — Multi-stakeholder value 框架
- [[concepts/STP-framework]] — Customer-only segmentation pipeline
- [[concepts/customer-value-proposition]] — Customer value 量化
- [[concepts/customer-centricity]] — Customer-only 哲學
- [[concepts/G-STIC-framework]] — Marketing planning spine
- [[concepts/marketing-definition]] — Ch01 hub
- [[synthesis/HTC-marketing-research-gap]] — Collaborator-over-customer 失敗案例
- [[references/kotler-keller-chernev-marketing-management-16e]] — Ch02 source
