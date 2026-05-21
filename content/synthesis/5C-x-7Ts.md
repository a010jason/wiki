---
title: 5C × 7Ts — Analysis 上游 + Tactics 下游
type: synthesis
domain: marketing
tags: [synthesis, 5C, 7Ts, kotler, marketing-planning, mgmt]
confidence: medium
sources:
  - '[[concepts/5C-target-market-framework]]'
  - '[[concepts/7Ts-marketing-tactics]]'
  - '[[concepts/G-STIC-framework]]'
  - '[[references/kotler-keller-chernev-marketing-management-16e]]'
created: 2026-05-22
updated: 2026-05-22
summary: >-
  5C（Customers/Collaborators/Competitors/Company/Context）是 marketing 上游 analysis，7Ts（Product/Service/Brand/Price/Incentives/Communication/Distribution）是下游 tactics。教學常 sequential 帶過，但實務的關鍵 insight 是：5C 中沒分析的 C 對應 7T 必然失靈 — 缺 Competitor analysis → Price T 沒 reference；缺 Context analysis → Communication T 沒 channel anchor。
provenance:
  extracted: 0.25
  inferred: 0.7
  ambiguous: 0.05
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# 5C × 7Ts — Analysis Upstream + Tactics Downstream

## The Connection

Kotler 16e Ch02 把 marketing planning 拆成兩個框架：

- **5C** = 上游 situational analysis（Customers / Collaborators / Competitors / Company / Context）
- **7Ts** = 下游 tactical mix（Product / Service / Brand / Price / Incentives / Communication / Distribution）

教學常用 sequential pipeline：

```
5C 分析環境 → STP 選 target → 3V 定 value → 7Ts 設計 mix
```

但這個 pipeline 隱含 **5C → 7Ts mapping 是「全自動」** 的假設 — 只要 5C 做完，7Ts 就會「自然 follow」。

實際上 **每個 T 對應特定 C，缺 C 直接導致 T 設計錯誤**。本頁把這個 mapping 顯式化。^[inferred]

## Where They Co-occur

8 個 page 同時提到兩者：

- **Kotler 16e Ch02** — 兩者都在此章
- **[[concepts/G-STIC-framework]]** — Goal-Strategy-Tactics-Implementation-Control 的 Tactics 段就是 7Ts；Strategy 段含 5C
- **[[concepts/STP-framework]]** — STP 在 5C 與 7Ts 之間的橋
- **多個 entity 案例**（Apple、TSMC 等）

## Cross-cutting Insight

### 5C → 7Ts 的非顯式 mapping

把兩個框架交叉：

| 5C 維度 | 主要驅動哪個 / 哪幾個 7T |
|---|---|
| **Customer** | Product / Service / Brand（用戶要什麼 → 給什麼） |
| **Collaborator** | Distribution / Incentives（通路與獎勵） |
| **Competitor** | **Price** / Brand / Communication（差異化座標） |
| **Company** | 全部 7T 的 internal constraint（資源、能力） |
| **Context**（PESTLE-like） | Communication（channel）/ Distribution（regulatory） |

^[inferred]

→ **每個 T 至少有一個 primary C，少做哪個 C 對應的 T 必然失靈**：

- 沒做 Competitor analysis → Price 沒 reference point → 不是定太高就是定太低
- 沒做 Collaborator analysis → Distribution 設計不出來 → 通路衝突
- 沒做 Context analysis → Communication 用錯 channel → 觸及不到 target

### 反向：7Ts 給 5C 的 feedback

5C → 7Ts 不是單向。實務上 7Ts 設計時暴露的問題會反饋給 5C：

- Price 設計時發現「客戶不買」→ 重新分析 Customer
- Distribution 設計時發現「通路抗拒」→ 重新分析 Collaborator
- Communication 設計時發現「channel 阻塞」→ 重新分析 Context

→ **5C 與 7Ts 是迭代的，不是一次性 cascade**。^[inferred]

## Tensions and Trade-offs

### Tension 1：5C 的 5 個 C 重要性不均

教學把 5 個 C 並列，實際上**重要性高度不均**：

| C | 真實重要性 | 為何 |
|---|---|---|
| Customer | ★★★★★ | 一切的起點 |
| Competitor | ★★★★ | 定位的座標 |
| Context | ★★★ | 邊界條件 |
| Company | ★★★ | 自評（內視，易盲） |
| Collaborator | ★★ | 多數小公司忽略 |

→ 平均分配 5C 分析時間 → 過度分析次要 C。^[inferred]

### Tension 2：7Ts 的 7 個 T 也重要性不均

| T | 真實重要性 | 為何 |
|---|---|---|
| Product | ★★★★★ | 核心 |
| Communication | ★★★★ | 客戶感知 |
| Price | ★★★★ | 直接 P&L |
| Distribution | ★★★ | 觸及 |
| Brand | ★★★ | 長期累積 |
| Service | ★★ | 多半被 Product 吞噬 |
| Incentives | ★ | 戰術 |

→ 教學給 7Ts 等權，實務上 Product / Communication / Price 是核心。^[inferred]

### Tension 3：5C 沒 Context 等於 PESTLE 沒做

5C 的 **Context** 是 PESTLE（Political / Economic / Social / Technological / Legal / Environmental）的簡化版。許多 marketing plan 把 Context 用一段話帶過，等於 PESTLE 沒做。

→ 在動態 / 跨國 / 受監管產業（醫療、金融、能源），Context **應該是 5C 中最重的 C**，但教學排序最後。^[inferred]

→ 參考 [[synthesis/5C-vs-PESTLE-vs-Porter-five-forces]] — 環境分析三框架的 unit-of-analysis 差異。

## 對醫療資訊業的應用草稿

EBM 在做 PACS / HIS 規劃時的 5C × 7Ts mapping：

| C | 對應 T 的具體建議 |
|---|---|
| **Customer**（醫院、醫師）| Product：PACS 必須符合 DICOM；Service：教育訓練；Brand：可信賴度 |
| **Collaborator**（HIS 廠商、IT 整合商）| Distribution：透過整合商落地；Incentives：sales rep 抽成設計 |
| **Competitor**（Sectra / GE / Philips）| Price：對照競品定價；Communication：差異化訊息（在地服務） |
| **Company**（EBM 工程能力、財務）| 整體限制：能不能撐 enterprise 級客戶 |
| **Context**（健保政策、TFDA、HIPAA-equiv）| Communication：合規訊息；Distribution：醫療資安規範 |

—— 5C 任一缺失，對應 T 必然失靈。^[inferred]

## Open Questions

- **5C 的 Context 與 PESTLE-framework 的整合**：應該替 5C-Context 加 explicit PESTLE checklist 嗎？
- **7Ts 的 Service / Brand 是否該被 Product 吞掉**：Kotler 16e 把 PSB 列為三個獨立 T，但實務上多重疊
- **數位產品的 7Ts 變形**：SaaS 公司的 Distribution = "channel" 概念失效，應該怎麼變？

## Related

- [[concepts/5C-target-market-framework]] — Situational analysis 上游
- [[concepts/7Ts-marketing-tactics]] — Tactical mix 下游
- [[concepts/G-STIC-framework]] — Marketing planning spine
- [[concepts/STP-framework]] — 5C 與 7Ts 之間的橋
- [[concepts/3V-market-value-principle]] — Value 層 framing
- [[synthesis/5C-vs-PESTLE-vs-Porter-five-forces]] — 環境分析框架 unit-of-analysis 差異
- [[synthesis/3V-x-STP]] — 同層 Ch02 hub 的另一組關係
- [[references/kotler-keller-chernev-marketing-management-16e]] — Ch02 source
