---
title: Perceptual Map (品牌感知圖)
type: concept
domain: marketing
tags: [perceptual-map, positioning, visualization, kotler, mgmt]
aliases: [Perceptual Map, brand map, positioning map]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch07
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch07 — 視覺化品牌在客戶心智中的相對位置。通常雙軸（如 Quality × Price、Trendy × Different），把競爭品牌標在 2D 平面上。背後統計工具：PCA / MDS / Factor Analysis / Canonical Analysis / Latent Structure Analysis。是 [[concepts/frame-of-reference]] 內部的 visual representation。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.70
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Perceptual Map

## What It Is

> Perceptual Maps = consumer perceptions 與 preferences 的視覺化。
> ^[extracted Ch07 p.17]

雙軸 2D 平面，把競爭品牌在 [[concepts/frame-of-reference]] 內部標出相對位置。

## 範例（Ch07 PPT 案例）

### 範例 1：奢侈手袋（BrandAsset Valuator）

軸 1：Exclusive ↔ Accessible
軸 2：Trendy ↔ Different

品牌位置：LV / Gucci / Dior / Burberry / Coach / Kate Spade / D&G / Michael Kors / Ralph Lauren / CK / Vera Bradley / Lilly Pulitzer

### 範例 2：串流服務（The Langston Co. Aug 2019）

軸 1：Quality of Content ↔ Value for Expenditure
軸 2：Expected vs Current（時間維度）

品牌位置：Netflix / Hulu / Prime Video / Disney+ / NBCU / HBO Max

注意：本範例有雙重覆蓋（current map + expected map），可見動態變化。

## 用途

1. **競爭分析** — 看自家品牌與對手的相對位置
2. **空白機會** — 圖上空缺處可能是未被服務的 segment
3. **重新定位規劃** — 從現在位置到目標位置的 trajectory
4. **straddle 風險檢核** — 同時跨兩象限的品牌是 straddle positioning 候選

## 背後的統計工具

教師批註：「Map 的背後是統計」。^[inferred from instructor annotation]

| 工具 | 用途 |
|---|---|
| **PCA**（Principal Component Analysis） | 從多 attributes 提取主成分作為軸 |
| **MDS**（Multidimensional Scaling） | 從 dissimilarity matrix 推 2D 位置 |
| **Factor Analysis** | 找潛在 factor 作為軸 |
| **Canonical Analysis** | 兩組變項間的相關結構 |
| **Latent Structure Analysis** | 推未觀測變項 |

意涵：Perceptual map 不是隨手畫的，是 marketing research 統計分析的視覺化輸出。

## 怎麼建立

1. 透過 survey 取得消費者對多品牌、多 attributes 的評分
2. 用 PCA / MDS 把高維評分降到 2D
3. 把品牌在 2D 平面上標出
4. 軸的標籤由 attributes 的 loadings 決定（例：軸 1 是高 loading 在 quality / luxury → 標 "Premium"）

## Source 反例 / 質疑

- **2D 平面過簡** — 真實競爭是 N 維，降到 2D 損失資訊。^[inferred]
- **Map 是 snapshot** — 不反映動態變化（範例 2 用 expected vs current 雙圖部分緩解但不完整）。^[inferred]
- **Survey-based 的 selection bias** — 受訪者組成決定 map 結果。^[inferred — 隱含批評]
- **品牌位置會 self-fulfill** — 一旦 map 廣傳，品牌會被「框」在那個位置，難 reposition。^[inferred]

## Jason 觀察：醫療 AI 的 Perceptual Map

EBM PACS / AI 競爭格局的 perceptual map：^[inferred — Jason 個人延伸]

### Map 1（模型 FOR）

軸 1：模型精度 ↔ 解釋性
軸 2：覆蓋廣度 ↔ 深度專精

| 品牌 | 位置 |
|---|---|
| GE Edison | 高覆蓋 + 中精度 + 低解釋 |
| Aidoc | 高精度 + 急診專精 + 中解釋 |
| EBM（目前） | 中精度 + 影像專精 + 中解釋 |

空白區：**高解釋 + 深專精**（EBM 可考慮往這個象限走）

### Map 2（整合 FOR）

軸 1：PACS 整合度 ↔ 獨立 SaaS
軸 2：本地化 ↔ 全球標準

| 品牌 | 位置 |
|---|---|
| Sectra AI Module | 高整合 + 全球 |
| GE Edison | 高整合（只 GE）+ 全球 |
| Aidoc | 獨立 SaaS + 全球 |
| EBM | 中整合 + 高本地化（台灣健保） |

空白區：**高整合 + 高本地化**（EBM 已在這附近，可加深）

兩張 map 對比：EBM 在 Map 1（模型 FOR）位置普通，在 Map 2（整合 FOR）位置突出。**重設 FOR 從 1 → 2 是策略級動作**。

## Related

- [[concepts/positioning]] — Map 是 positioning 的視覺化
- [[concepts/frame-of-reference]] — Map 在 FOR 內部
- [[concepts/points-of-difference-and-parity]] — Map 上的位置由 POD/POP 決定
- [[concepts/market-segmentation]] — Map 可疊 segment overlay
- [[concepts/marketing-research-process]] — Map 是 research 輸出
- [[references/kotler-keller-chernev-marketing-management-16e]]
