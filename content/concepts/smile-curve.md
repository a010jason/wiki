---
title: Smile Curve (微笑曲線)
type: concept
domain: mgmt
tags: [concept, value-chain, manufacturing, vertical-integration, taiwan-industry, mgmt, strategy]
aliases: [Smile Curve, 微笑曲線, Stan Shih smile curve, 施振榮微笑曲線]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.8
  inferred: 0.15
  ambiguous: 0.05
base_confidence: 0.55
sources:
  - id: HBS-Flextronics-case
    ref: '[[references/HBS-flextronics-international-case]]'
related:
  - '[[concepts/value-chain]]'
  - '[[concepts/vertical-integration]]'
  - '[[concepts/ems-industry]]'
  - '[[entities/Acer]]'
  - '[[entities/Hon-Hai-Foxconn]]'
  - '[[entities/Flextronics-International]]'
---

# Smile Curve（微笑曲線）

施振榮 1992 年在 Acer 經營策略中提出的 value chain 視覺化框架。橫軸是 value chain 各環節（R&amp;D / Patent / Production / Distribution / Branding / Marketing / Service），縱軸是 value-add（毛利率）。曲線呈**微笑形狀** — **兩端高、中間低**。^[extracted]

> 核心命題：**Manufacturing 在谷底，R&amp;D + Brand 在兩端高峰**。對代工為主的台灣企業（Acer 自身、鴻海、Quanta）是戰略警示：**靠製造永遠賺辛苦錢**。

## 圖示結構

```
高 ┐                                  ┌─ 高
   │   R&D                            │  Brand
   │   Patent                         │  Marketing
   │   Design                         │  Service
價 │\                                  /│
值 │ \                                / │
   │  \                              /  │
   │   \                            /   │
   │    \  Component / Assembly   /    │
低 │     \________________________/     │
   └─────────────────────────────────────
      價值鏈位置（左：上游 / 右：下游）
```

## 為什麼 Manufacturing 在谷底

**進入壁壘低**：
- 設備、SOP、人力相對標準化
- 規模經濟 + 模組化 → [[concepts/contract-manufacturing-cm|CM]] 快速崛起
- 競爭多、議價弱 → margin 壓縮（[[concepts/kotler-keller-chernev-marketing-management-16e|Kotler]] Wave 2 takeaway：「**代工 = price taker**」）

**飛輪反向**：
- 越多 OEM 外包製造 → CM 工廠越多 → 越捲 → margin 越薄
- [[references/HBS-flextronics-international-case|Flextronics case]] Exhibit 2：2002 EMS top 6 中 5 家 net loss

## 兩端為什麼高

### 左端（上游）：R&amp;D / Patent / Design
- IP 護城河（patent thicket、軟體授權）
- 客戶 switching cost 高
- 例：Qualcomm（CDMA IP）、ARM（IP 授權）、Intel（CPU design + fab）、TSMC（製程節點 IP）

### 右端（下游）：Brand / Marketing / Service / Channel
- **Customer 認知 capital**（[[concepts/brand-equity|brand equity]]、[[concepts/brand-mantra|brand mantra]]）
- 通路控制（Apple Stores、Amazon FBA）
- After-sales service lock-in（IBM、Lexus）

## 教師眉批（slide p.22）

> [[references/HBS-flextronics-international-case|Flextronics lecture]] slide p.22 明確提示：**Flex 該走的不是 ODM，是上爬到 R&amp;D/Patent 或 Branding/Marketing 一端** ^[teacher-annotation]
>
> 末頁眉批：「**鴻海～～OEM → OBM infocus**」 — Foxconn InFocus 收購（2013）作為 EMS→OBM（Own Brand Manufacturing）的軌跡 ^[teacher-annotation]

## 台灣產業實例

| 公司 | 起點 | 嘗試移動 | 結果 |
|---|---|---|---|
| **Acer** | OEM 製造 | 1990s 推 Acer brand + Aspire | brand 嘗試成功（part），現為 PC top 5 |
| **Hon Hai (Foxconn)** | EMS 製造（Flex 同業） | 2013 收 InFocus，2016 收 Sharp | OBM 嘗試中，Sharp brand 已是右端資產 |
| **TSMC** | Foundry 純製造 | 不爬 brand，但深化 R&amp;D 與 process node IP | 用「左端 + 中段壟斷」雙重防護，**反例 — 證明谷底也能贏，只要進入壁壘極高** |
| **HTC** | ODM (HTC 過去做手機 ODM) | 2007 轉自有品牌 | 短暫高峰後失敗（Quietly Brilliant 行銷失誤） |
| **BenQ** | 明基電通製造 | 2001 收 Siemens 手機 | 失敗，巨虧 |
| **ASUS / Pegatron** | 華碩拆分 — ASUS 走品牌、Pegatron 留代工 | 雙軌策略 | 兩家分別在兩端定位 |
| **[[entities/Flextronics-International|Flextronics]]** | EMS | Phone 1-4 嘗試 ODM | 客戶不買單，未達到 R&amp;D 或 brand 端 |

## TSMC 反例（教師眉批 Kotler）

教師曾在 Kotler Ch09 Service Marketing 講義眉批：「**TSMC IP Mail yield > 100% 移植到服務業**」 — TSMC 用 process IP + scale 把 manufacturing 從谷底拉到接近 R&amp;D 端的價值 ^[teacher-annotation]

這是 smile curve 框架的**邊界條件反例**：
- 不是所有 manufacturing 都在谷底
- 當 manufacturing 本身具備 **IP scarcity + 規模經濟壟斷 + customer switching cost** 三重防護時，可以脫離谷底
- TSMC、ASML（曝光機獨佔）、ASE（封測龍頭）是少數突破例

## 反例 / 邊界條件

- **平台型公司不適用**：Google / Booking / Uber 沒有「製造」中段，整條 curve 結構不同 — smile curve 是製造業 / 硬體業框架
- **服務業 smile**：左端是 platform / IP（如 [[entities/Booking-com|Booking A/B testing engine]]）、中段是 operations、右端是 brand — 結構類似但語言要重新框
- **整合者反例**：Apple 同時在 R&amp;D（晶片 M-series）+ Manufacturing（Foxconn 整合）+ Brand 三端 — **vertical integration 可以同時打三點**，但需巨額 capex 與品牌 momentum
- **時序性**：施振榮 1992 提出時是 PC era；2024 後 GenAI / 平台戰場是否還適用？^[ambiguous]

## 對醫療 AI 的延伸（Jason 視角）^[inferred]

醫療 AI 的 smile curve 可能是：

- **左端**：演算法 IP（FDA-cleared models）、PACS integration patents、訓練資料壁壘
- **中段**：模型訓練 / 推論 / DICOM 整合（變 commodity 趨勢）
- **右端**：臨床品牌（醫師信任）、reimbursement codes、whole product / 客戶服務

EBM 接近**左端 + 右端雙佈局**型 — Sectra、GE 等 platform 在左端 lock-in；Aidoc / Heartflow 在右端走 reimbursement code。

## Open Questions（待 wiki-challenge）

- **施振榮 1992 原文出處？** 一般網路引述為 Acer 內部講話 / 自傳，缺學術論文錨點 ^[ambiguous]
- **Smile curve 與 Porter [[concepts/value-chain]] 的差異**：Porter 是「activities 對應 cost vs differentiation」；Smile curve 是「activities 對應 value-add %」 — Smile 更直觀但 Porter 更系統 ^[inferred]
- **平台時代是否需重畫？** 平台型公司沒「中段製造」— smile 框架可能要改為 W-curve / U-curve？^[inferred]

## Related

- [[concepts/value-chain]] / [[concepts/vertical-integration]] / [[concepts/ems-industry]] / [[concepts/contract-manufacturing-cm]] / [[concepts/original-design-manufacturing-odm]] / [[concepts/transaction-cost-economics]]
- [[entities/Acer]] / [[entities/Hon-Hai-Foxconn]] / [[entities/Flextronics-International]] / [[entities/TSMC]] / [[entities/HTC]] / [[entities/Apple]]
- [[references/HBS-flextronics-international-case]]
- [[references/grant-contemporary-strategy-analysis]] Ch10 vertical integration
