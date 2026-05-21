---
title: Disruptive Innovation × Value Chain
type: synthesis
domain: mgmt
tags: [synthesis, disruptive-innovation, value-chain, Porter, Christensen, strategy, mgmt]
sources:
  - "[[concepts/disruptive-innovation]]"
  - "[[concepts/value-chain]]"
  - "[[concepts/competitive-advantage]]"
  - "[[concepts/RPV-framework]]"
  - "[[concepts/platform-competition]]"
  - "[[entities/Flextronics-International]]"
created: 2026-05-22
updated: 2026-05-22
summary: >-
  Value Chain 是描述性 — 拆解現有企業如何創造價值；Disruption 是動態的 — 描述 value chain 如何被重組。每個成功的 disruption 都是 value chain restructuring，不只是「更便宜的產品」。本頁拆出三種重組模式 + 為何 Porter 框架本身偵測不到 disruption。
provenance:
  extracted: 0.15
  inferred: 0.75
  ambiguous: 0.10
base_confidence: 0.32
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# Disruptive Innovation × Value Chain

## The Connection

兩個框架在「企業如何競爭」的描述粒度上互補但時間軸相反：

- **[[concepts/value-chain|Value Chain]]（Porter 1985）**：靜態描述 — 把企業活動拆成主要活動（採購→製造→行銷→銷售→服務）+ 支援活動，找 cost 與 differentiation 的來源
- **[[concepts/disruptive-innovation|Disruption]]（Christensen 1997）**：動態描述 — 新進者用**不同的 value chain 結構**繞過 incumbent，逐步侵蝕

→ **每個 disruption 本質上是 value chain 重組**，不只是產品創新。但 Porter 框架本身沒提供「偵測 disruption」的工具。^[inferred]

## Where They Co-occur

5 個 wiki 頁同時 link 兩者：

- [[concepts/competitive-advantage]] — Porter 與 Christensen 兩派並陳
- [[concepts/RPV-framework]] — Resources / Processes / Values，Processes 對應 value chain 活動
- [[concepts/platform-competition]] — 數位巨頭跨界滲透即 value chain 重組（[[references/hbs-gafa-case-deighton-2013|GAFA case]]）
- [[entities/Flextronics-International]] — 經典「value chain 兩端高、中間谷底」（[[concepts/smile-curve|Smile Curve]] disruption）
- [[references/grant-contemporary-strategy-analysis]] — Ch5 + Ch7 並用

## Cross-cutting Insight

**Disruption 的三種 value chain 重組模式**（從 wiki cases 歸納）：^[inferred]

### 1. 活動省略型（Skip）

新進者**直接刪除既有 value chain 中的環節**：

- Netflix 對 Blockbuster：刪除「實體店面 + 還片」環節
- Booking.com 對傳統旅行社：刪除「線下櫃台」（[[entities/Booking-com]]）
- Amazon 對書店：刪除「物流壓貨在零售店」

→ Porter value chain 預設「所有活動都會做」，這型 disruption 違反該假設。

### 2. 活動倒轉型（Invert）

把支援活動變主要活動（或反之）：

- [[concepts/smile-curve|Smile Curve]]：製造從主要活動變成谷底，R&D + Brand 從支援活動變成兩端高（[[entities/Flextronics-International]] ODM 嘗試案例）
- Airbnb 對 Marriott：「資產持有」從主要活動變成不必要（host 持有）；「平台運營」從支援活動升為主要
- [[concepts/asset-light-strategy|Asset-light Strategy]] — Marriott 1977 年報已預見

→ Porter 對主要 vs 支援活動的固定分類，遮蔽了「活動角色互換」的可能。

### 3. 活動模組化型（Modularize）

把整條 value chain 拆成可獨立外包的模組：

- EMS / ODM 對垂直整合廠商（[[entities/Flextronics-International]]）
- AWS 對企業 IT：把「IT 基礎設施」從每家公司的支援活動，變成 Amazon 主要活動
- Stripe 對信用卡 acquiring：把「支付處理」從每家電商的活動，集中到一個 API

→ 結果是「smile curve 形狀的價值分佈」— Porter 看不到（每段都「合理」），但加總起來是巨大的價值轉移。

## Tensions and Trade-offs

### 1. Porter 視角下 disruption 看不見

[[concepts/value-chain|Value Chain]] 分析告訴你「現在誰在哪一段賺多少」，但**它無法 surface「整條鏈會被別人重畫」的 risk**。^[inferred]

→ Christensen 的 RPV 框架部分填這個洞：Resources / Processes / Values，其中 **Processes 對應 value chain 活動**。但 RPV 預設「Processes 是 inertia 來源」，這恰是 Porter 預設「Processes 是優勢來源」的反面。

### 2. Value Chain 假設邊界穩定

Porter 1985 預設「企業邊界給定」，只在邊界內優化。但 [[concepts/platform-competition|platform competition]] 與 [[concepts/transaction-cost-economics|TCE]] 都指出邊界可變 — disruption 經常**改變邊界**而非邊界內的活動。^[inferred]

### 3. 為何 incumbent value chain 優化反而加速死亡

Christensen 的精髓在這：incumbent 把現有 value chain 的每個環節做到極致（Porter 式優化），會：

- 強化 RPV 的 Processes（更難改）
- 鎖死 cost structure（更高的 fixed cost → 退不到低端市場）
- 培養 organizational identity「我們是 X 業者」（[[concepts/icarus-paradox|伊卡洛斯悖論]]）

→ Porter 的 cost / differentiation 建議在 disruption 來臨前是對的，來臨後變成自殺。**何時切換是 PM 最難判斷的事**。

## Open Questions

- **是否有「disruption-resistant value chain」設計？** Apple 的 walled garden + 自有 silicon + 自有 retail 是 value chain 高度垂直整合 — 看似 disruption 風險高，實際是 disruption-resistant（每個環節都壟斷）。^[ambiguous]
- **GenAI 對 value chain 的影響？** LLM 是「活動省略」（取代多個白領活動）+「模組化」（API 化各種 white-collar work）的混合。Porter 框架是否需要修訂？
- **平台型 value chain 是否該畫成 cycle 不是 chain？** Marketplace 的價值流動是雙向（買方對賣方付錢，平台對雙方收費），「鏈」的 metaphor 已不適用 — [[concepts/agency-vs-merchant-model]] 對 Porter 框架的補強。

## Related

- [[concepts/value-chain]]
- [[concepts/disruptive-innovation]]
- [[concepts/RPV-framework]]
- [[concepts/smile-curve]]
- [[concepts/platform-competition]]
- [[concepts/asset-light-strategy]]
- [[concepts/icarus-paradox]]
- [[concepts/agency-vs-merchant-model]]
- [[entities/Flextronics-International]]
- [[synthesis/disruptive-innovation-x-VRIO-framework]] — 姐妹頁，從資源視角看同一場 disruption
- [[synthesis/back-to-core-turnaround-pattern]] — Apple/Lego/Samsung 的 value chain 重塑
