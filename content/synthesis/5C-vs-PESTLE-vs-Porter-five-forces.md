---
title: 5C vs PESTLE vs Porter Five Forces — 環境/市場分析的三大框架
type: synthesis
domain: mgmt
tags: [5C, PESTLE, porters-five-forces, environment-analysis, strategy, mgmt]
aliases: [5C vs PESTLE vs Five Forces]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch02
  - book:grant-contemporary-strategy-analysis
  - instructor-annotation:Kotler-Ch02
created: 2026-05-20
updated: 2026-05-20
summary: >-
  三個常被混用的環境/市場分析框架，但其實**範疇與層級不同**。5C 是 target-market 級（含 Collaborator + Company 內視），PESTLE 是宏觀環境級（純外部），Porter Five Forces 是 industry 級（競爭結構）。何時用哪個 ≠ 偏好，是取決於分析的 unit-of-analysis。
confidence: high
provenance:
  extracted: 0.50
  inferred: 0.45
  ambiguous: 0.05
base_confidence: 0.70
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# 5C vs PESTLE vs Porter Five Forces

## 核心命題

三個框架不是替代關係，是**不同層級的分析工具**。混用會導致分析失焦。

教師批註（Ch02 p.18）：5C 的 Context 是「product-market 而非 industry」 — 暗示 5C 比 Porter Five Forces 更「行銷」（消費者中心），Porter 更「策略」（產業結構中心）。^[inferred from instructor annotation]

## 三框架對照表

| 維度 | [[concepts/5C-target-market-framework]] | PESTLE | [[concepts/porters-five-forces]] |
|---|---|---|---|
| **範疇** | Target market 級 | 宏觀環境 | Industry 級 |
| **層級** | Strategic Marketing | 宏觀掃描 | Strategy |
| **元素** | Customers / Collaborators / Competitors / Company / Context | Political / Economic / Sociocultural / Technological / Legal / Environmental | New Entrants / Substitutes / Buyers / Suppliers / Rivalry |
| **以誰為核心** | Customer 居中 | 無核心，環境 | Industry 結構 |
| **強項** | 含 Collaborator + Company 內視 | 純外部、全方位 | 競爭結構深入 |
| **弱項** | Context 子要素粗略 | 不含 Company 與 Competitor | 不含 Customer 與 Collaborator |

## 為什麼這三個容易被混淆

三者都試圖回答「外部環境是什麼樣子」，但各自的 unit-of-analysis 不同：

- **5C** 問：「我這個 product-market 的 stakeholders 是誰？」
- **PESTLE** 問：「整個世界發生什麼事？」
- **Porter Five Forces** 問：「我這個 industry 內競爭結構如何？」

混用會導致：
- 用 PESTLE 替代 5C → 漏掉 Collaborator 與 Customer 細節
- 用 Porter 替代 5C → 漏掉 Company 內視與 Context
- 用 5C 替代 Porter → 競爭結構分析不足

## 何時用哪個

### 用 5C 的場景

- 規劃**特定 product** 的進入策略
- 做 [[concepts/STP-framework]] 之前的市場理解
- 寫 marketing plan 的 situation overview（[[concepts/G-STIC-framework]] 之前）

### 用 PESTLE 的場景

- 跨產業 / 跨地區的策略掃描
- 公司年度策略 review 的 macro context
- 投資決策的 macro risk assessment

### 用 Porter Five Forces 的場景

- 評估**進入新產業**的吸引力
- 分析既有產業的競爭強度變化
- M&A 標的的 industry attractiveness 評估

## 整合使用順序

實務上三個框架可以**串聯使用**：

```
PESTLE（宏觀環境掃描）
   ↓ 篩選有吸引力的產業
Porter Five Forces（產業結構分析）
   ↓ 確認進入產業
5C（特定 product-market 規劃）
   ↓ 進入 STP
```

或反過來，從 specific 到 general：

```
5C（目前 product-market）
   ↓ 想擴展時
Porter Five Forces（相鄰產業）
   ↓ 想跨大市場時
PESTLE（全域環境）
```

## Jason 觀察：醫療 AI 該用什麼框架

EBM PACS / AI 適用三框架的不同用途：^[inferred — Jason 個人延伸]

### PESTLE 用於：
- 法規環境：FDA / TFDA / CE 認證路徑變化
- 健保支付政策：DRG / FFS / Value-based
- 技術趨勢：基礎模型 / Edge AI / Federated Learning

### Porter Five Forces 用於：
- 評估「醫療 AI 產業」整體吸引力（profit margin 是否好賺？）
- 評估**進入新疾病領域**（神經 → 心血管 → 病理）的競爭結構

### 5C 用於：
- 寫 EBM 神經影像 AI 的 GTM plan
- 規劃對醫學中心的 strategic targeting
- 設計 buying center 各角色的訴求

**三者並用而非互換**：早期年度策略用 PESTLE + Porter Five Forces，產品季度規劃用 5C。

## Source 反例 / 質疑

- **三框架的元素互相 overlap** — 5C 的 Context 包含 PESTLE 的元素，5C 的 Customers/Collaborators 與 Porter 的 Buyers/Suppliers 重疊。Source 沒處理這個 redundancy。^[inferred]
- **三框架都是 static** — 都沒處理動態變化、跨產業 collision（[[concepts/strategic-collisions]]）等議題。^[inferred — 隱含批評]
- **在 platform / ecosystem 時代是否還適用** — Iansiti & Lakhani 的 [[concepts/digital-operating-model]] 觀點下，industry boundaries 模糊化，三框架的 unit-of-analysis 可能都失效。^[inferred — 隱含批評]

## Open Questions

- 在 platform 與 ecosystem 時代，三框架是否被新框架（如 Iansiti Strategic Collisions）替代？
- 跨產業（cross-industry）的競爭分析該用哪個框架？三框架都不夠？
- 5C 的 Collaborator 與 Porter 的 Suppliers 是否該合一？

## Related

- [[concepts/5C-target-market-framework]]
- [[concepts/porters-five-forces]]
- [[concepts/strategic-collisions]] — Iansiti 的第三條路
- [[concepts/G-STIC-framework]] — 整合應用
- [[references/kotler-keller-chernev-marketing-management-16e]]
- [[references/grant-contemporary-strategy-analysis]]
