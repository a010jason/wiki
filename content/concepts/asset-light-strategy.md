---
title: Asset-Light Strategy（輕資產戰略 / 空手道）
type: concept
domain: mgmt
tags: [concept, vertical-integration, capital-allocation, business-model, mgmt, strategy]
aliases: [Asset-light, 輕資產, 空手道戰略, Asset-light business model]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.78
  inferred: 0.17
  ambiguous: 0.05
base_confidence: 0.5
sources:
  - id: HBS-Marriott-90yr-case
    ref: '[[references/HBS-marriott-90yr-case]]'
  - id: HBS-9-619-015-Booking-case
    ref: '[[references/HBS-booking-com-case]]'
related:
  - '[[concepts/management-vs-franchise-contract]]'
  - '[[concepts/vertical-integration]]'
  - '[[concepts/transaction-cost-economics]]'
  - '[[concepts/two-sided-market]]'
  - '[[entities/Marriott-International]]'
  - '[[entities/Booking-com]]'
---

# Asset-Light Strategy（輕資產戰略 / 空手道）

把 **ownership** 與 **operations** 拆開的戰略：公司不擁有大部分資產（房地產 / 設備 / 庫存），但靠 **management contract + brand + platform + IP** 賺管理費 / royalty / commission。^[extracted]

> 教師眉批：「**輕資產戰略，空手道**」（[[references/HBS-marriott-90yr-case|Marriott lecture]] slide p.1） / 「**Asset Light / Platform Heavy**」（[[references/HBS-booking-com-case|Booking lecture]] slide p.4） ^[teacher-annotation]

## 兩種典型形態

### 1. Franchise / Management Contract 型（Marriott）
- **1977 [[entities/Marriott-International|Marriott]] 年報首倡**：「emphasis on management rather than ownership」
- 2017 Marriott 全球 6,000+ 飯店中：旗艦 &lt; 4,000；管理協議 ~1,800；特許經營剩餘
- 美國 80% Marriott 採 franchise；海外 28%
- 收費結構：管理協議 base 3% + incentive 20-25% profit（20-30 年）；franchise royalty 4-6% + 行銷 2-3%
- 2016 營業利潤率 ~45% — **平台級毛利**
- 詳見 [[concepts/management-vs-franchise-contract]]

### 2. 數位平台型（Booking）
- **CGS ≈ 0** — 完全沒有實體庫存
- 2017 Priceline Group：Revenue $12.68B / Cost of revenues $250M → **Gross profit ~98%**
- 業務本質：**agency model** — 客戶在 Booking 訂房、付酒店、Booking 收 ~15% commission
- 教師眉批：「**CGS=0 (digital economy as the resources) / 輕資產戰略（service vs. manufacturer）World 2 &amp; 3**」 ^[teacher-annotation]

## 為什麼選輕資產

### 優勢
- **資本效率高**：少 capex → ROE 高
- **規模擴張快**：不用每家店 / 每張床都自蓋
- **下行風險轉嫁**：景氣衰退 owner 扛 property 貶值，Marriott 仍收 base management fee
- **brand + platform value capture**：把品牌與通路議價權變現
- **稅務與監管靈活**：franchise 可分散 jurisdiction

### 劣勢
- **品質控制弱**：owner 與 platform host 是獨立決策者
- **brand cannibalization 風險**：franchise 主要競爭非自家店
- **長期 IP 與 customer relationship 弱化**（[[entities/Booking-com|Booking]] 33% revenue 給 Google performance ad 是 lock-in 證據；教師眉批：「**Booking 吸 Google 的血**」）
- **體驗一致性**：30 品牌 × 6,000 hotel 的 SOP 落地是長期 governance challenge
- **monopsony risk**：在 OTA / franchise 場景，平台拿走多少 commission 是長期 owner-platform 議價戰場

## 與 [[concepts/transaction-cost-economics|TCE]] 的關係

Asset-light 是 Williamson TCE 的 **hybrid governance**：
- 不是 market spot（純交易）
- 不是 hierarchy（完整 vertical integration）
- 是 **long-term contract** + **partial control** 的混合

關鍵變項：
- **Asset specificity**：飯店 property 是 specific to location，但管理 SOP 是 generic → 適合拆出來
- **Frequency**：franchise 是 ongoing relationship，contract 設計可分攤 transaction cost
- **Uncertainty**：飯店業景氣循環大，asset-light 把不確定性丟給 owner

## 對比：Asset-Heavy 的反例

[[entities/Samsung-Electronics]] 是 asset-heavy + vertical integration 的反例：
- Yun Jong Yong 名言：「**製造外包就輸了**」
- 1998-2003 投資 $19B 蓋新晶片廠；2003 起 10 年再 $17B 在 TFT-LCD
- 客製化晶片售價比業界標準高 17% — **靠 capex + 規模壟斷**換溢價

兩種戰略沒有絕對對錯，**選哪個取決於：**
1. 產業是否規模經濟主導（製造業 yes、服務業多 no）
2. IP 結構是否強（Samsung NAND IP 強，TSMC 製程 IP 更強）
3. 客戶 switching cost 與監管壁壘（asset-heavy 適合監管嚴 / barrier 高的產業）

## Marriott vs Airbnb：asset-light 的兩條路

| | Marriott | Airbnb |
|---|---|---|
| Asset 拆法 | property 拆給 owner，brand+ops 留中央 | property 全在 host，平台只做撮合 |
| 規模門檻 | 高（要 6,000 hotel 才有 brand scale） | 低（從零房源開始） |
| Capacity 結構 | [[concepts/dedicated-vs-flexible-capacity|dedicated]]（owner 已決定 property 用途） | [[concepts/dedicated-vs-flexible-capacity|flexible]]（host 可隨時上下架） |
| Quality 控制 | brand standards + audit | review system + Superhost |
| Loyalty linkage | Bonvoy 母合 1 億會員 | Genius 較弱 — **沒辦法 linkage**（教師眉批） |

詳見 [[synthesis/asset-light-vs-asset-heavy-hospitality]]。

## Open Questions（待 wiki-challenge）

- **下行週期是否仍維持優勢？** 2008 / 2020 pandemic owner 撤資是否會把 Marriott 變成「沒人租 brand」？^[inferred]
- **平台 vs franchise 是不是同質？** 教師把兩者並列「輕資產」，但底層 governance 結構不同（platform two-sided vs franchise unilateral）— 需要拆細 ^[inferred]
- **Asset-light 適不適合醫療 AI？** EBM 軟體 + 醫院硬體 + 雲端推論 — 拆 stack 還是整合是戰略選擇 ^[inferred, Jason 醫療角度]
- **與「微笑曲線」的關係**：asset-light 通常是把製造段（[[concepts/smile-curve|smile curve]] 谷底）外包，保留兩端 — 是否該稱「smile-end strategy」更精確？^[inferred]

## Related

- [[concepts/management-vs-franchise-contract]] / [[concepts/vertical-integration]] / [[concepts/transaction-cost-economics]] / [[concepts/two-sided-market]] / [[concepts/network-externalities]] / [[concepts/dedicated-vs-flexible-capacity]] / [[concepts/multi-brand-hotel-portfolio]] / [[concepts/smile-curve]] / [[concepts/value-chain]]
- [[entities/Marriott-International]] / [[entities/Booking-com]] / [[entities/Airbnb]] / [[entities/Samsung-Electronics]]（反例）
- [[references/HBS-marriott-90yr-case]] / [[references/HBS-booking-com-case]] / [[references/grant-contemporary-strategy-analysis]] Ch10 VI
- [[synthesis/asset-light-vs-asset-heavy-hospitality]]
