---
title: Dedicated vs Flexible Capacity
type: concept
domain: mgmt
tags: [concept, capacity-strategy, demand-cycle, platform-vs-pipeline, mgmt, strategy, teacher-original-framework]
aliases: [Dedicated capacity, Flexible capacity, 太平盛世 vs 大飢荒]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.5
  inferred: 0.40
  ambiguous: 0.10
base_confidence: 0.4
sources:
  - id: HBS-Marriott-90yr-case
    ref: '[[references/HBS-marriott-90yr-case]]'
related:
  - '[[concepts/compression-night-economics]]'
  - '[[concepts/asset-light-strategy]]'
  - '[[concepts/two-sided-market]]'
  - '[[entities/Marriott-International]]'
  - '[[entities/Airbnb]]'
---

# Dedicated vs Flexible Capacity

**教師原創框架**（[[references/HBS-marriott-90yr-case|Marriott 90yr lecture]] slide p.14）— 解釋為何 dedicated-capacity 玩家（Marriott）和 flexible-capacity 玩家（Airbnb）會在不同需求週期分別領先。^[teacher-annotation]

> **核心命題**：「If demand is flat, **dedicated capacity** (Marriott) is the most efficient... When demand is variable, dedicated capacity is insufficient, that will be filled by **flexible capacity** (Airbnb).」 ^[teacher-annotation, slide p.14]

## 中文比喻

教師標：「**太平盛世（fat margins）vs 大飢荒（青黃不接）**」 ^[teacher-annotation]

| 需求曲線 | 最佳容量結構 | 代表玩家 |
|---|---|---|
| **平穩 (flat)** = 太平盛世 | Dedicated（固定資產 + 員工 + SOP） | Marriott, Hilton, IHG, 大型連鎖飯店 |
| **波動 (variable)** = 大飢荒 / 尖峰 | Flexible（zero-marginal-cost host pool） | Airbnb, Uber 共享經濟玩家 |
| **混合** = 平峰互補 | dedicated 為主 + flexible 為補 | 飯店業現實：peak day Marriott 滿，Airbnb 吸溢出 |

## 為什麼這個框架重要

### Dedicated Capacity 的優勢
- 規模經濟（property × loyalty × brand）
- 預測性收入（contract、loyalty 母合 linkage）
- 品質一致（SOP 控制）
- **太平盛世下 fat margins 是真實的**

### Dedicated Capacity 的劣勢
- **無法在 peak 急速擴容**（教師眉批：「**Marriott 受循環影響較大**」）
- 不能在 demand drop 時急速縮容（property + lease + staff 是固定成本）
- 對應的 [[concepts/compression-night-economics|compression night]]：95%+ booked 之夜佔房晚 4.9% 但產生 8% 收入 — **Marriott 拿不到 peak premium**
- 教師眉批：「**萬豪被綁樁 / Compression night 的時候吐房源 → 渡大月 → 造成萬豪入住率不到 100%**」 ^[teacher-annotation]

### Flexible Capacity 的優勢
- **High marginal cost, low investment cost**（教師眉批 slide p.5）— 從 host 視角，多一晚的邊際成本接近零，但完整投資（買房）是 host 自己負擔的 sunk cost
- 對平台來說：**沒有 capacity 上限**，需求高峰 host pool 自動擴張
- 不需自建 property

### Flexible Capacity 的劣勢
- 品質不一致
- **無 loyalty 母合 linkage**（教師眉批：「為什麼 loyalty program can't work for Airbnb? **沒辦法 linkage 沒辦法槓桿資源（母合優勢）**」） — Airbnb host 是獨立資源，跨 property 無法 cross-sell ^[teacher-annotation]
- 監管 risk（NY 30 天禁令、稅務、消防）
- 對 host 不適合 commercial 規模（30% NYC Airbnb 房源由 2+ 套整租 host 控制，已被監管視為「商業旅館」）

## 邊際成本戰場（教師核心觀點）

slide p.5：「**Why Airbnb has high marginal- (but low investment-) cost? / The real battlefield is in marginal cost**」 ^[teacher-annotation]

教師主張 marginal cost 是真正戰場：
- Marriott 的 marginal cost 低（多賣一晚成本接近零，但前提是 occupancy &lt; 100%）
- Airbnb host 的 marginal cost 也低（多接一單清潔費攤平）
- 平台之間競爭，**真正贏者是邊際成本低 + capacity 可彈性的玩家**

但 slide p.12 教師又寫：「**Marriott More complex / Airbnb simpler；Airbnb higher marginal cost**」 — 與 p.5 矛盾。可能是指 Airbnb host 邊際成本「相對 hosting 體驗」較高（清潔、賓客互動），不是純財務 marginal cost。

## 與飯店業 compression-night 的 mapping

詳見 [[concepts/compression-night-economics]]：

- 太平盛世（flat demand 360 天）：Marriott 領跑，賺 fat margins
- 大飢荒 / 尖峰（compression nights，4.9% 房晚）：**Marriott 容量瓶頸，Airbnb 補位**
- 紐約對照（2016）：1/10 ADR $148 / Occ 55.7% / Airbnb 賣 2,487 房（3.9%） vs 12/31 ADR $418 / Occ 92.3% / Airbnb 賣 6,475（5.7%）— **Airbnb 在 peak day 漲量更多**

## 跨產業適用性（推測）

可能適用：
- **計程車 vs Uber**：傳統 fleet = dedicated；Uber driver pool = flexible
- **倉儲 vs 順豐快遞外賣**：自有倉 = dedicated；眾包配送 = flexible
- **醫院 vs telemedicine network**：自有床位 = dedicated；遠距醫生 network = flexible（Jason 醫療 AI 角度的延伸）^[inferred]
- **製造 vs Flextronics 動態產能**：[[entities/Flextronics-International|EMS]] 是 OEM 的 flexible capacity 形式（OEM dedicated to brand + design，EMS flexible to volume swings）^[inferred]

## Open Questions（待 wiki-challenge）

- **此框架是教師原創還是引自某論文？** Marriott case 內部沒明引；slide 只在 Q3a 用「dedicated capacity vs flexible capacity」一句帶過 — 教師眉批是主要詮釋源 ^[ambiguous]
- **flexible capacity 在 down-cycle 表現？** Airbnb host 流動性是否在需求暴跌時也很高（host 退出比 Marriott 賣樓快）？^[inferred]
- **混合策略真的可行嗎？** Marriott 推 Homes &amp; Villas + PlacePass 是混合嘗試 — 但 host 招募邏輯與 hotel asset 邏輯完全不同，**這是「組織能力」的雙元論挑戰** ^[inferred]
- **與 [[concepts/organizational-ambidexterity]] 的關係**：dedicated 是 exploit、flexible 是 explore，混合是 ambidextrous — 但**容量結構**而非 product/process 的雙元

## Related

- [[concepts/compression-night-economics]]
- [[concepts/asset-light-strategy]]
- [[concepts/two-sided-market]]
- [[concepts/network-externalities]]
- [[concepts/organizational-ambidexterity]]
- [[entities/Marriott-International]] / [[entities/Airbnb]]
- [[references/HBS-marriott-90yr-case]]
- [[references/grant-contemporary-strategy-analysis]] Ch10 vertical scope
