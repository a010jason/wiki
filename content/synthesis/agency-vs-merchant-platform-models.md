---
title: Agency vs Merchant Model — 跨產業 Platform 商模對比
type: synthesis
domain: mgmt
tags: [synthesis, platform-business, ota, e-commerce, business-model-comparison, mgmt, strategy]
aliases: [Agency vs Merchant cross-industry, Platform business model synthesis]
created: 2026-05-21
updated: 2026-05-21
summary: >-
  [[concepts/agency-vs-merchant-model]] 商模不只 OTA 業有；在 e-commerce、ride-hailing、food delivery、cloud SaaS、音樂影音、房地產等平台行業都看得到變體。跨產業對比：OTA（Booking agency / Expedia merchant）、e-commerce（Tmall agency / Shopee merchant / Amazon hybrid）、外送（UberEats / 美團）、SaaS（Salesforce / AWS）、影音（YouTube / Netflix）、房產（591 broker / iBuyer 已關門）。Agency 模式長期占優趨勢：Booking 70-80% 集團 revenue vs Expedia merchant 業務逐年衰退。
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
base_confidence: 0.45
confidence: medium
sources:
  - id: HBS-9-619-015-Booking-case
    ref: '[[references/HBS-booking-com-case]]'
related:
  - '[[concepts/agency-vs-merchant-model]]'
  - 'ota business models'
  - 'two sided market'
  - '[[concepts/asset-light-strategy]]'
  - '[[entities/Booking-com]]'
  - '[[entities/Shopee]]'
  - 'Expedia'
  - '[[entities/Amazon]]'
---

# Agency vs Merchant Model — 跨產業對比

[[concepts/agency-vs-merchant-model|Agency vs Merchant 商模]] 不只 OTA 業有；在 e-commerce、ride-hailing、food delivery、cloud SaaS 等平台行業都看得到變體。本頁綜合 [[references/HBS-booking-com-case|Booking case]] + [[references/kotler-keller-chernev-marketing-management-16e|Kotler Wave 3 Shopee case]] + 既有 [[entities/Amazon]] entity 的多源資料，做跨產業比對。^[Jason synthesis]

## 跨產業對比表

| 產業 | Agency 玩家 | Merchant 玩家 | Hybrid 玩家 |
|---|---|---|---|
| **OTA / 飯店** | [[entities/Booking-com|Booking.com]]、Agoda、TripAdvisor（advertising） | Expedia、Hotels.com、Priceline.com、Travelocity | Marriott Brand.com（自家 agency） |
| **e-commerce** | 阿里巴巴（Tmall 第三方）、eBay、Etsy | [[entities/Shopee]]（自有貨）、京東自營、Costco | Amazon（FBA marketplace + first-party retail 雙軌） |
| **食物外送** | UberEats、DoorDash（餐廳是賣家） | 美團（自有 cloud kitchen 部分）、Foodpanda 自營區 | 大部分外送都偏 agency |
| **Ride-hailing** | Uber、Lyft（driver 是 contractor，但平台對 UI / pricing 強控） | 黃車（自有車隊）、計程車行 | Uber 屬 hybrid（pricing / surge 是 platform 控制） |
| **Cloud SaaS** | Salesforce AppExchange（第三方 app） | AWS / Azure / GCP（自家服務） | Salesforce 自家 SaaS + AppExchange 雙軌 |
| **音樂 / 影音** | YouTube（creator 內容） | Netflix（自製 + 授權 + 後台庫存） | Spotify（兼授權 + Podcast 自製） |
| **房地產** | 591、Realtor.com（broker 代理） | iBuyer（OpenDoor、Zillow Offers — 已關門） | Compass 等 hybrid broker tech |

## 為什麼 Agency 模式長期占優（trend observation）^[inferred]

過去 20 年數據顯示 agency 模式普遍贏 merchant：
- **Booking 70-80% 集團 revenue**（vs Expedia merchant 業務逐年衰退）
- **阿里巴巴 Tmall** 賺得比 京東自營 多（雖然京東後來轉 hybrid）
- **Amazon FBA marketplace** 占 Amazon 整體 GMV 60%+
- **iBuyer 全行業失敗**（Zillow Offers 2021 關門虧 \$500M）

可能原因：
1. **資本效率**：不擔庫存 → ROE 高
2. **規模擴張快**：不用對每個 SKU 做評估
3. **下行風險轉嫁**：景氣衰退賣方擔損失
4. **長尾經濟學適合 agency**：merchant 對小眾品類沒效率
5. **資料 lock-in 反而 agency 更強**（賣方依賴平台流量超過依賴客戶 contact）

## 為什麼 Merchant 模式仍有立足之地

不是所有人都該走 agency：

### 1. 高度標準化 commodity 適合 merchant
- Costco 自有品牌 / Aldi / 全聯 — 規模採購壓低成本是核心競爭力
- AWS / Azure — 標準化 cloud 服務反而適合 merchant（不能讓第三方上 unstable instance）

### 2. 品質控管關鍵
- Netflix 自製內容（House of Cards、Squid Game）是 brand asset
- 醫藥配送 / fresh food / 高價精品 — 平台必須控制品質端到端

### 3. 客戶體驗統一性
- iPhone + iOS + App Store：Apple 不允許「半 agency」（拒絕 Epic Games 自架 store）
- Tesla 直銷不走經銷商 — 為了統一品牌體驗

### 4. 監管 / 安全 要求
- Pharmacy / financial services / aviation — agency 風險太高
- 證券交易（broker-dealer 是 hybrid，但 clearing 是 merchant-like）

## Tans 為何選 Agency（[[entities/Booking-com|Booking]] case）

Tans CEO 立場：「我們的競爭對手更像旅行社，**agency 更合理**」 ^[extracted]

具體理由（從 case 整理）：
1. **景氣衰退時 merchant 模式扛庫存風險**
2. **與酒店是 partner 而非對手**（Marriott 等大連鎖較願意上 Booking）
3. **規模可快速擴張**（不用對每家酒店做 inventory 評估 + 鎖價）
4. **資料 lock-in 較弱但 brand + UX 飛輪可以補**（→ A/B testing 文化）

## Shopee 為何選 Merchant（[[references/kotler-keller-chernev-marketing-management-16e|Kotler Wave 3]]）

[[entities/Shopee|Shopee]] 在東南亞選自有貨 merchant model：
- **品質控管**：東南亞物流 / 退貨機制不成熟，merchant 確保 SLA
- **競爭低門檻區隔**：阿里巴巴強的是 agency（Tmall），Shopee 用 merchant 切不同 niche
- **規模換利潤**：自承毛利低，靠大量壓供應商成本

教師 Wave 3 takeaway：「**Agency model 抽高佣金、高利潤；Merchant model 平台自有貨、低毛利規模換利潤；commission model 介於兩者**」 ^[teacher-annotation, Wave 3]

## Amazon 的雙軌實驗

Amazon 是少數**同時做 agency + merchant** 的玩家：

- **First-party retail**（merchant）：Amazon 自買自賣，物流 + 客服自負
- **Third-party marketplace + FBA**（agency-ish）：賣家上架，Amazon 收 commission + FBA 物流費

優劣勢：
- 雙軌讓 Amazon 收 take-rate（agency 端）+ 自家 margin（merchant 端）
- 但**內部利益衝突**：Amazon 自家 retail 部門和 marketplace 賣家**競爭同一個 SKU**（賣家投訴：Amazon 自家 retail 把 best-seller 的 niche 都搶了）
- 監管 FTC / 歐盟 已盯上這個 self-preferencing

## GenAI 時代是否會重組商模？^[inferred]

可能變化：
1. **AI agent 直接 call API 訂房 / 買貨** — 繞過平台 UI 層，OTA 流量被剪斷
2. **賣方 disintermediation 加速** — 賣方用 AI 自己做客服 + 推薦，不需平台
3. **資料壁壘變鬆**：LLM 訓練資料公開化，平台的「customer intent 解讀」優勢縮減
4. **新平台類型**：AI 模型平台（HuggingFace、Replicate）— 接近 agency model（第三方上傳模型，平台抽 inference fee）

但 platform 不死：
- **trust / brand / 客戶服務**仍是 platform 提供
- **monetization 機制**仍需要中介
- 只是 **value capture 比例**會改變（從 15% commission 可能壓到 5%）

## Open Questions（待 wiki-challenge）

- **Agency vs Merchant 邊界在「平台對 pricing / inventory / customer」三者控制度**：是否能設計三維 spectrum 取代二分？^[inferred]
- **Subscription / Membership 模式**：Netflix / Spotify / Amazon Prime — 是 merchant 還是 agency？或第三類？^[ambiguous]
- **Marketplace + Self-Operated 的雙軌 governance**：Amazon 內部如何避免 self-preferencing 衝突？^[inferred]
- **跨產業普適性**：本框架在 B2B 業（如 ERP SaaS、半導體 ecosystem）是否同樣適用？^[inferred]

## Related

- [[concepts/agency-vs-merchant-model]] / ota business models / two sided market / [[concepts/asset-light-strategy]] / [[concepts/network-externalities]] / ota disintermediation / [[concepts/long-tail-theory]] / [[concepts/dominant-design]]
- [[entities/Booking-com]] / [[entities/Shopee]] / Expedia / [[entities/Amazon]] / [[entities/Marriott-International]] / Alibaba / eBay / Netflix / Spotify
- [[references/HBS-booking-com-case]] / [[references/kotler-keller-chernev-marketing-management-16e]] Wave 3 / [[references/HBS-marriott-90yr-case]]
