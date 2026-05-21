---
title: STP × Buying Center — STP 的 B2C 偏向 + B2B 擴展
type: synthesis
domain: marketing
tags: [synthesis, STP, buying-center, B2B, B2C, kotler, segmentation, mgmt]
confidence: medium
sources:
  - '[[concepts/STP-framework]]'
  - '[[concepts/buying-center]]'
  - '[[concepts/business-buying-process]]'
  - '[[references/kotler-keller-chernev-marketing-management-16e]]'
created: 2026-05-22
updated: 2026-05-22
summary: >-
  STP 框架預設 customer 是「個人 decision-maker」— 這是 B2C 偏向。B2B 場景下 customer 是 buying center（7 角色集體決策），STP 需要與 buying-center 整合使用：Segmentation 不只切公司、要切 buying center 角色；Targeting 要選對影響圈的人；Positioning 要對 7 角色給不同訊息。否則 STP 在 B2B 形同空轉。
provenance:
  extracted: 0.3
  inferred: 0.65
  ambiguous: 0.05
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# STP × Buying Center — B2C 偏向 vs B2B 擴展

## The Connection

STP（Segmentation → Targeting → Positioning）是 Kotler 框架最核心的 marketing pipeline，但它有一個**隱藏假設**：

**Customer 是「個人 decision-maker」，做購買決策時用自己的偏好。**

—— 這是 B2C 假設。在 B2B 場景，customer 是**公司**，但實際做決策的是**buying center**（[[concepts/buying-center]]），由 7 種角色集體影響：

| Buying Center 7 角色 | 功能 |
|---|---|
| **Initiators**（發起者） | 發起需求 |
| **Users**（使用者） | 實際使用產品 |
| **Influencers**（影響者） | 提供技術評估、規格 |
| **Deciders**（決策者） | 最終拍板 |
| **Approvers**（核可者） | 預算 / 流程核可 |
| **Buyers**（採購） | 執行採購、議價 |
| **Gatekeepers**（守門員） | 控制資訊流向（如秘書） |

—— **STP 套到 B2B 時，每個 S/T/P 都要對應 7 個角色而不是「公司」這個抽象單元**。否則 marketing plan 在 B2B 形同空轉。^[inferred]

## Where They Co-occur

8 個 page 同時提到兩者：

- **Kotler 16e Ch04 + Ch06** — Ch04 介紹 buying-center / business-buying-process；Ch06 介紹 STP 的 segmentation / targeting
- **[[concepts/business-buying-process]]** — 8 階段 B2B 流程
- **多個 B2B-related entity 頁面**
- **教師批註多處**：「**B2B 是 buying group 不是 buying decision-maker**」

## Cross-cutting Insight

### STP 在 B2C vs B2B 的差別

| STP 步驟 | B2C（STP-only 充分） | B2B（必須整合 buying-center） |
|---|---|---|
| **Segmentation** | 切**個人** demographic / behavior | 切**公司** + **buying center 角色** 雙層 |
| **Targeting** | 選擇要服務的個人 segment | 選擇要服務的公司 + **影響圈的角色** |
| **Positioning** | 在個人客戶心中佔位 | 在 buying center **每個角色** 心中各佔位 |

→ B2B 的 STP 是 **2D（公司 × 角色）**，B2C 是 1D。教學常用 B2C 例子（牙膏、洗髮精、汽車）讓學員以為 STP 是 1D — 這是 STP 在 B2B 落地時最大障礙。^[inferred]

### 醫療資訊業案例（EBM 對 PACS / HIS）

把 STP × buying-center 套到醫療場景：

**Segmentation**：
- 公司層：醫學中心 / 區域醫院 / 地區醫院 / 診所
- 角色層 - 每個公司內：
  - **Users**：放射科醫師、技術師
  - **Influencers**：資訊室主任、醫事科
  - **Deciders**：副院長 / 院長
  - **Approvers**：董事會 / 衛福部審批
  - **Buyers**：採購單位
  - **Gatekeepers**：秘書、IT 採購助理

**Targeting**：
- 選哪一**類醫院** + 攻哪些**角色**？
- 「醫學中心 × 放射科醫師」≠「醫學中心 × IT 主任」 — 完全不同訊息

**Positioning**：
- 對放射科醫師：UX 流暢、AI 輔助、減少誤判
- 對 IT 主任：可整合、安全、可運維
- 對副院長：ROI、合規、品牌
- 對採購：價格、保固、付款條件

—— 一個 Demo Day 7 個角色都到場，但每個角色聽到 / 看到的 should 不同（5 個維度 = 5 個 sub-positioning）。^[inferred]

## Tensions and Trade-offs

### Tension 1：個人偏好 vs 集體決策的權衡

B2B 決策的悖論：

- **個人偏好**（每個 buying center 角色）— 7 套不同的價值排序
- **集體決策**（公司）— 必須收斂成 1 個採購決定

→ STP 教學沒處理「**多人偏好如何收斂**」這個機制。Buying center 7 角色互相影響，最終決策可能是 deciders 拍板、但 influencers 早就鎖死了 short list。^[inferred]

### Tension 2：Gatekeeper 的「祕密 power」

Buying center 角色中，**Gatekeeper** 是最被低估的：

- 他們不下決策但**控制資訊流向**
- 在台灣 B2B（特別醫療業）秘書 / 採購助理常是真正的 gatekeeper
- 他們可以決定哪個廠商的提案 ever 進到 decider 桌上

→ STP 的「Positioning」如果只對 decider 設計訊息，**訊息根本不會 reach decider**（被 gatekeeper 擋掉）。需要對 gatekeeper 另設 sub-positioning。^[inferred]

### Tension 3：B2B 銷售週期 + STP 動態

B2B 採購週期常 6-18 個月，期間 buying center 角色**會變動**（人事異動、部門重組）。

→ STP 在 B2B 不是 one-shot，是 **continuous re-segmentation**：

| 銷售階段 | 應該 re-do 的 STP 步驟 |
|---|---|
| 初次接觸 | Segmentation（誰是潛在 buyer） |
| 需求發掘 | Targeting（誰是真正的 decider） |
| 提案 | Positioning（對每個角色給不同訊息） |
| 議價 | Re-targeting（誰真正持有議價權） |
| 簽約 | Re-positioning（最後一哩說服） |

—— STP 在 B2B 是迭代而非 sequential cascade。^[inferred]

## 對 EBM / 醫療資訊業的延伸

醫療業 STP × buying-center 的具體 leverage point：

- **目前可能 over-invest 在 Deciders（院長）的關係**，under-invest 在 Influencers（資訊室 + 醫事科）
- **Users（醫師）的 voice 在採購決策中常被忽略** — 但離開後流失成本最高，是長期 retention 關鍵
- **Gatekeeper 在台灣醫療業特別強**（秘書文化）— 訊息設計應該對 gatekeeper friendly（容易摘要、容易轉傳）

## Open Questions

- **STP × buying-center 的量化**：Kotler 16e 給 segmentation 5 變數族（demographic / psychographic 等），buying-center 的「角色 segmentation」缺乏對應量化工具
- **數位 buying center**：B2B SaaS 採購（如 AWS / Salesforce）的 buying center 是否更扁平？決策權是否往 Users（工程師）下放？
- **AI Agent 作為 buying center 新角色**：當 AI 助理參與 RFP 評估，它是 Influencer 還是 Gatekeeper？

## Related

- [[concepts/STP-framework]] — Segmentation pipeline
- [[concepts/buying-center]] — B2B 7 角色
- [[concepts/business-buying-process]] — B2B 8 階段流程
- [[concepts/targeting]] — STP 中段
- [[concepts/positioning]] — STP 末段
- [[concepts/customer-persona]] — 個人 segmentation 的工具（B2C-flavored）
- [[synthesis/3V-x-STP]] — STP 的 customer-only 偏向
- [[synthesis/HTC-marketing-research-gap]] — Customer-as-Carrier 的失敗案例（buying-center 錯位的特例）
- [[references/kotler-keller-chernev-marketing-management-16e]] — Ch04 / Ch06 source
