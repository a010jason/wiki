---
title: Core Competency (Kotler 三條件版)
type: concept
domain: mgmt
tags: [core-competency, RBV, kotler, prahalad-hamel, strategy, mgmt]
aliases: [Core Competency, 核心競爭力, core competence]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch06
  - paper:Prahalad-Hamel-1990-The-Core-Competence-of-the-Corporation
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch06 整合 Prahalad & Hamel 1990 的核心競爭力概念，給出三條件版：(1) 對 perceived customer benefit 有顯著貢獻、(2) 可應用在多個市場、(3) 競爭者難以模仿。是 [[concepts/targeting]] 中 Target Compatibility 的深層基礎，與 [[concepts/VRIO-framework]] 互補。
provenance:
  extracted: 0.80
  inferred: 0.15
  ambiguous: 0.05
base_confidence: 0.75
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Core Competency

## What It Is

Kotler 16e Ch06 整合 Prahalad & Hamel 1990《The Core Competence of the Corporation》原始概念，給出**三條件版**：^[extracted Ch06]

> 核心競爭力必須同時：
> 1. **是 competitive advantage 的來源** — 對 perceived customer benefit 有顯著貢獻
> 2. **可以應用在多個市場** — 不是單一產品 / 單一市場的能力
> 3. **競爭者難以模仿** — 不能輕易被買到 / 學到 / 抄襲

意涵：不是所有能力都是 core competency，三條件同時滿足才算。

## 三條件細節

### 條件 1：對 Perceived Customer Benefit 有顯著貢獻

關鍵字：**perceived** — 客戶要感受得到。

例：
- TSMC 的 3nm 製程 → 客戶（Apple、Nvidia）感受到性能優勢 ✓
- 公司內部某個高效 ERP → 客戶感受不到 ✗（是 efficiency 不是 core competency）

### 條件 2：可應用在多個市場

關鍵字：**leverageable** — 跨市場可複製。

例：
- Honda 的引擎技術 → 應用在汽車、機車、割草機、發電機 ✓
- 某家公司只會做一種利基商品 → 不可 leverage ✗

### 條件 3：競爭者難以模仿

關鍵字：**inimitable** — 不能被輕易學走。

來源（呼應 [[concepts/isolating-mechanisms]]）：
- **Causal ambiguity**（[[concepts/causal-ambiguity]]）— 連自己也不確定為何能做到
- 累積效應（time compression diseconomies）
- 路徑依賴 / 歷史條件
- 默會知識（tacit knowledge）

## 與 Prahalad & Hamel 1990 原版的關係

Prahalad & Hamel 1990 HBR 原始定義較模糊（"the collective learning in the organization, especially how to coordinate diverse production skills and integrate multiple streams of technologies"）。

Kotler 三條件版是後人整理出的可操作標準，**並非完全等同原版**。^[inferred]

## 與 [[concepts/VRIO-framework]] 的關係

Barney 1991 VRIO 框架 = Valuable / Rare / Inimitable / Organized 四問。

對比：

| Kotler 三條件 | VRIO 四問 |
|---|---|
| 對 perceived customer benefit 有顯著貢獻 | Valuable |
| 可應用在多個市場 | （無對應） |
| 競爭者難以模仿 | Rare + Inimitable |
| —— | Organized |

差異：
- VRIO 多了 **Rare**（稀有）— 即使 Valuable + Inimitable 也未必 Rare
- VRIO 多了 **Organized**（組織能用出來）
- Kotler 多了 **跨市場 leverageability**

兩框架互補：VRIO 看資源本身屬性，Kotler 看資源能否驅動 cross-market growth。

## 教師批註：核心競爭力的辨識陷阱

教師批註指出三個判斷盲點：^[inferred from instructor annotation Ch06 p.14]

- **「有競爭力 ≠ 有核心競爭力」** — 例：中芯國際（有產能但缺技術深度）
- **「有核心業務 ≠ 有核心競爭力」** — 例：中國銀行（業務 dominant 但不 inimitable）
- **「沒有核心技術 ≠ 沒有核心競爭力」** — 例：Moderna（在 mRNA 平台組合上有 unique capability，不是單一技術）

意涵：Kotler 三條件其實有判斷模糊地帶，需要實證辨識。

## Source 反例 / 質疑

- **三條件的 ex post 偏誤** — 多數 core competency 是事後才被認定，事前難以辨識。^[inferred — 隱含批評]
- **跨市場 leverageability 在何種程度算「多個」** — 兩個市場？五個？source 沒給標準。^[ambiguous]
- **Inimitability 的時效性** — 沒有永久 inimitable 的能力，只是模仿成本不同。^[inferred]
- **與 strategic flexibility 的張力** — Core competency 一旦累積，公司可能 locked-in 在過時能力（path dependency 變成 competency trap）。^[inferred — 隱含批評]

## Jason 觀察：醫療 AI 公司的 Core Competency 評估

EBM 的 core competency 自評（三條件）：^[inferred — Jason 個人延伸]

**候選 1：對台灣放射科 workflow 的深度理解**
- 條件 1 ✓ — 醫師感受得到（報告填寫順暢、健保碼匹配）
- 條件 2 ? — 跨市場 leverage 受限（東南亞可能、歐美難）
- 條件 3 ✓ — 國際大廠難以為單一市場 customize 到這個深度
- **結論**：在東南亞圈是 core competency，全球不是

**候選 2：本地 KOL 與學會關係網**
- 條件 1 ✓ — 醫師感受得到（同行背書）
- 條件 2 ? — 跨 vertical 也可 leverage（從放射科到病理科到心臟科）
- 條件 3 ✓ — 累積式關係，國際大廠進不來
- **結論**：是 core competency

**候選 3：模型 SOTA 性能**
- 條件 1 ✓ 
- 條件 2 ✓ — 跨疾病可 leverage
- 條件 3 ✗ — 國際大廠在 SOTA 上規模碾壓
- **結論**：不是 core competency，是 table stake POP

## Related

- [[concepts/targeting]] — Target Compatibility 用 core competency
- [[concepts/VRIO-framework]] — 互補框架
- [[concepts/isolating-mechanisms]] — Inimitability 的具體機制
- [[concepts/causal-ambiguity]] — 最強的 isolating mechanism
- [[concepts/resource-based-view]] — RBV 理論
- [[concepts/competitive-advantage]] — Core competency 是 competitive advantage 的源頭
- [[references/kotler-keller-chernev-marketing-management-16e]]
- [[references/grant-contemporary-strategy-analysis]]
