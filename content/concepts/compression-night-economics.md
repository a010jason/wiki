---
title: Compression Night Economics（飯店業尖峰夜經濟學）
type: concept
domain: mgmt
tags: [concept, hospitality, capacity-strategy, yield-management, mgmt, strategy]
aliases: [Compression nights, Peak-night economics, 飯店尖峰夜, ADR-RevPAR-Occ]
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
  - id: HBS-Marriott-90yr-case
    ref: '[[references/HBS-marriott-90yr-case]]'
related:
  - '[[concepts/dedicated-vs-flexible-capacity]]'
  - '[[concepts/asset-light-strategy]]'
  - '[[concepts/yield-management]]'
  - '[[concepts/dynamic-pricing]]'
  - '[[entities/Marriott-International]]'
  - '[[entities/Airbnb]]'
---

# Compression Night Economics

飯店業專屬概念：**95%+ booked 之夜稱為 compression night**。儘管佔總房晚比例小，卻產生不成比例的收入，且是 [[concepts/dedicated-vs-flexible-capacity|dedicated vs flexible capacity]] 競爭的關鍵戰場。^[extracted]

## 量化錨點（[[references/HBS-marriott-90yr-case|Marriott case]]，美國 10 大市場 2011-2016）

- Compression nights 佔總房晚 **4.9%**
- 但產生 **8% 收入**（不成比例）
- ADR（Average Daily Rate）在 compression night **可比平時高 35%-10x**
- **房晚槓桿率**：8 / 4.9 ≈ **1.6x** — 即 compression night 的單位收入是平均的 1.6 倍

## 紐約對照案例

2016 紐約 hotel 對照（極端對比）：

| 日期 | ADR | Occupancy | Airbnb 預訂 | Airbnb 占比 |
|---|---|---|---|---|
| 1/10（淡日） | \$148 | 55.7% | 2,487 房 | 3.9% |
| 12/31（NYE compression） | **\$418** | **92.3%** | **6,475 房** | **5.7%** |

關鍵觀察：
1. **ADR 從 \$148 → \$418 = 2.83x**（compression premium 巨大）
2. **Airbnb 在 peak day 漲量更多**（2,487 → 6,475 = 2.6x），**證明 flexible capacity 在 compression 補位**
3. Marriott / Hilton 等 dedicated capacity 玩家**無法擴容**，所以 Airbnb 拿到 incremental peak demand

## 為什麼 compression night 是 dedicated capacity 的瓶頸

教師眉批：「**萬豪被綁樁** / **Compression night 的時候吐房源 → 渡大月 → 造成萬豪入住率不到 100%**」 ^[teacher-annotation]

機制：
- **物理上限**：Marriott 一棟飯店有固定房間數，不能在 NYE 突然多開 100 間
- **價格上限（隱性）**：教師眉批：「**Q. Should/Can Marriott increase to the 'peak' price?**」— 連鎖品牌有 brand standard pricing，**漲到 \$1,000+ 會破壞 brand perception**，個體 Airbnb host 沒這顧慮
- **動態 staffing 困難**：飯店需要 housekeeping、front desk staff，peak day 加班成本高
- **「半年不開張、開張吃半年**」 — 教師中文比喻 ^[teacher-annotation]

## Marriott 怎麼應對

實際做的不多（case 暗示）：
- **Bonvoy loyalty** 鎖死 dedicated capacity 的 demand 端（50% 入住來自會員）
- **Brand portfolio 30 品牌** 涵蓋不同 price tier，自家 cannibalize 不如失去客戶到 Airbnb
- **Element / Homes &amp; Villas / PlacePass** — 嘗試做自家 flexible capacity 補位
- **Compression night 仍是給 Airbnb / boutique hotel 的 structural 開口**

## 對 Yield Management 的延伸

Compression night 是 [[concepts/yield-management|yield management]] 的最高難度場景：

| 維度 | 平常日 | Compression night |
|---|---|---|
| Demand elasticity | 中等 | 極低（剛性需求） |
| Optimal pricing strategy | 接近 ADR | 大幅溢價 |
| Risk | 賣不出去 | 賣太便宜（leave money on table） |
| Channel mix | OTA + Brand.com 平衡 | 偏 Brand.com 直銷（保留 margin） |

Booking.com / Expedia 等 OTA 在 compression night 的 commission 對 Marriott 是 high opportunity cost。

## 推測適用其他行業 ^[inferred]

可能對應的 compression analogues：

- **航空業**：黃金週 / 春運的航線（United / Delta dedicated 機隊上限）
- **電力業**：尖峰用電（夏季空調）— 跟 flexible energy（家戶太陽能）的混合模型
- **雲端 IaaS**：黑五 / 雙 11 流量尖峰（AWS 自家容量 vs reserved instance）
- **醫療業**：流感季 / pandemic surge — 固定病床 vs telemedicine 擴容 ^[Jason 醫療延伸]
- **餐飲**：跨年夜 / 母親節大餐 — fine dining 滿座 vs flexible delivery 補位

## Open Questions（待 wiki-challenge）

- **8% 收入 / 4.9% 房晚 數據**：是 Marriott 自家數據還是 STR / CBRE 等產業報告？^[ambiguous]
- **下行週期 compression nights 是否消失？** 2020 pandemic 期間紐約 NYE 是否也 92% occupancy？^[inferred]
- **OTA + Airbnb 是否會「壓平」compression premium？** 透明定價 + 全網比價是否會把 \$418 ADR 壓回？^[inferred]
- **Marriott 為何不大規模做 surge pricing？** 監管 / brand standard / loyalty member 抗議 — 哪個是真正 binding constraint？^[ambiguous]

## Related

- [[concepts/dedicated-vs-flexible-capacity]]
- [[concepts/asset-light-strategy]]
- [[concepts/yield-management]]
- [[concepts/dynamic-pricing]]
- [[concepts/price-elasticity-of-demand]]
- [[concepts/price-discrimination]]（peak pricing 是 3rd-degree price discrimination 一例）
- [[concepts/two-sided-market]]
- [[entities/Marriott-International]] / [[entities/Airbnb]] / [[entities/Booking-com]] / [[entities/Expedia]]
- [[references/HBS-marriott-90yr-case]]
- [[references/kotler-keller-chernev-marketing-management-16e]] Ch11 pricing（Uber surge / airline peak 對應）
