---
title: Agency vs Merchant Model（platform 兩種商模）
type: concept
domain: mgmt
tags: [concept, platform-business, ota, e-commerce, business-model, mgmt, strategy]
aliases: [Agency model, Merchant model, Platform business model, Booking agency Expedia merchant]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.5
sources:
  - id: HBS-9-619-015-Booking-case
    ref: '[[references/HBS-booking-com-case]]'
related:
  - 'ota business models'
  - 'two sided market'
  - '[[concepts/asset-light-strategy]]'
  - '[[entities/Booking-com]]'
  - 'Expedia'
  - '[[entities/Shopee]]'
  - '[[synthesis/agency-vs-merchant-platform-models]]'
---

# Agency vs Merchant Model

平台商模的兩種典型結構，差異在於 **平台是否取得庫存所有權 + 客戶付款流向**。

## 定義對照

| 維度 | Agency Model | Merchant Model |
|---|---|---|
| **庫存所有權** | 賣方（酒店 / 商家）擁有 | **平台批發**取得（短期 inventory） |
| **客戶付款流向** | 客戶 → **賣方**（平台後收 commission） | 客戶 → **平台**（平台再付賣方） |
| **commission rate** | ~15%（典型 OTA agency） | 較高 markup |
| **取消政策** | 寬鬆（賣方控制） | 較嚴（平台已扣款） |
| **賣方議價權** | 較強（保留 pricing） | 較弱（被平台壓貨） |
| **平台風險** | 低 — 不擔庫存 | 高 — 擔庫存 + 取消 |
| **客戶體驗** | 與酒店直接互動感較強 | 平台是 sole face |
| **資料 ownership** | 賣方持有客戶 contact | 平台持有客戶 contact |
| **典型玩家** | [[entities/Booking-com|Booking.com]]、Agoda | Expedia、Priceline.com、Hotels-com |

## 三種 OTA 商模（補完 — ota business models 詳）

教師眉批（[[references/HBS-booking-com-case|Booking lecture]] slide p.2）：

> 「1. **Advertising business model**: TripAdvisor, CPC
> 2. **Merchant business model**: Expedia
> 3. **Agency business model**: Booking.com」 ^[teacher-annotation]

第 3 個（Advertising）是 publisher 模式：平台不撮合交易，只賣廣告位 + 點擊（如 TripAdvisor、Trivago metasearch）。

## Tans 為何選 Agency

Tans CEO 立場：「我們的競爭對手更像旅行社，**agency 更合理**」 ^[extracted]

理由：
1. **下行風險**：景氣衰退時 merchant 模式扛庫存風險（已批發 → 賣不掉就吃）
2. **資料 lock-in 較弱**：客戶與酒店直接接觸 → Booking 必須靠 brand + UX 維持 stickiness（A/B testing 飛輪變得關鍵）
3. **規模可快速擴張**：不用對每家酒店做 inventory 評估 + 鎖價
4. **與酒店是 partner 而非對手**：[[entities/Marriott-International|Marriott]] 等大連鎖較願意上 Booking 而非 Expedia（OTA disintermediation 戰爭中 Booking 是相對 friendly 端）

## E-commerce 場景延伸（Shopee vs 阿里巴巴）

教師在 [[references/kotler-keller-chernev-marketing-management-16e|Kotler Wave 3]] 已歸納（Shopee case）：

| 模式 | 庫存 | 典型 | 毛利 |
|---|---|---|---|
| **Agency model** | 商家庫存 | 阿里巴巴、Amazon（third-party） | 高佣金、高毛利 |
| **Merchant model** | 平台批發 | [[entities/Shopee|Shopee]]（自有貨）、Amazon（first-party） | 低毛利規模換量 |
| Commission model | 介於兩者 | — | — |

Shopee 自有貨模式 = merchant；Amazon 兼做兩種（FBA marketplace = agency-ish + 自家 retail = merchant）。

## 為什麼這個區分重要

### 1. 商模決定組織能力需求
- **Agency** 需要 demand-side 能力：UX、A/B、search ranking、conversion optimization → **Booking 270 teams 自組織 + A/B 文化**就是這條路的極致
- **Merchant** 需要 supply-side 能力：採購、庫存管理、物流、付款風險 → **Expedia / Hotels.com 較重後台 + 議價團隊**

### 2. 商模決定 monetization 路徑
- Agency：commission 比例壓力（賣方 disintermediation 風險）
- Merchant：markup margin 壓力（消費者比價 + 競爭者銷售）

### 3. 商模決定 risk profile
- Agency：customer satisfaction risk（賣方品質不在你手上）
- Merchant：inventory write-down risk（庫存賣不掉變損失）

### 4. 商模決定客戶旅程的「平台 face」強度
- Agency：客戶記得「我訂了某酒店」
- Merchant：客戶記得「我跟 Expedia 訂的」

## 反例 / 邊界條件

- **混合模式很常見**：Amazon 同時做 first-party retail (merchant) + third-party marketplace (agency)；Marriott 直接做 Brand.com 也是 agency
- **Booking 也有少量 merchant inventory**（特別針對特定行銷活動）— 純度不是 100%
- **Uber / Lyft 介於兩者**：driver 是 independent contractor（agency-ish），但平台對 fare、UI、payment 控制度極高（merchant-ish）
- **Subscription 模式不適用**：Netflix / Spotify 是 licensor + aggregator，不是 agency 也不是 merchant

## 為何 [[entities/Marriott-International|Marriott]] 推「It Pays to Book Direct」

Marriott 的 Brand.com 是 **agency model 對 OTA 的反擊**：
- 客戶在 Marriott.com 直接訂 = Marriott 拿 100% revenue
- 客戶經 Booking 訂 = Marriott 給 ~15% commission
- 教師眉批：「**Booking 吸 Google 的血**」 — Booking 自己也 33% revenue 給 Google performance ad
- OTA 13.33% 預訂佔比（2016，自 2014 10.14% 三年連升）— Marriott 防守戰場

## Open Questions（待 wiki-challenge）

- **Agency vs Merchant 在 GenAI 時代是否會重組？** AI 訂房 agent 直接呼叫酒店 API，是否會繞過 OTA 中間層？^[inferred]
- **Booking 33% performance ad 給 Google**：這比例是否會被 Google Hotel Finder 自己吃掉？^[inferred]
- **跨地域 monopsony 形成**：歐洲 Booking 60-70% market share 已被歐盟反壟斷盯上 — agency model 規模到極致是否會引發監管？^[inferred]
- **Loyalty linkage 在兩種模式中的位置**：Agency 模式較弱（資料給賣方），Merchant 模式較強（資料在平台）— 但 Booking Genius 已嘗試 — 邊界在哪？^[ambiguous]

## Related

- ota business models / two sided market / [[concepts/asset-light-strategy]] / [[concepts/network-externalities]] / ota disintermediation / [[concepts/dominant-design]]
- [[entities/Booking-com]] / Expedia / [[entities/Marriott-International]] / [[entities/Shopee]] / [[entities/Amazon]] / TripAdvisor / Trivago
- [[references/HBS-booking-com-case]] / [[references/HBS-marriott-90yr-case]] / [[references/kotler-keller-chernev-marketing-management-16e]]
- [[synthesis/agency-vs-merchant-platform-models]]
