---
title: Booking.com
type: entity
domain: mgmt
tags: [entity, hbs-case, platform, experimentation-culture, ab-testing, ota, mgmt, strategy]
aliases: [Booking, Bookings.nl, Priceline Group Booking]
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
    type: hbs-case
    ref: '[[references/HBS-booking-com-case]]'
    pages: 27
  - id: Booking-lecture-slide
    type: lecture-slide
    ref: '[[references/HBS-booking-com-case]]'
    pages: 11
related:
  - '[[concepts/ab-testing-as-strategy]]'
  - 'experimentation culture'
  - '[[concepts/agency-vs-merchant-model]]'
  - 'ota business models'
  - 'growth flywheel'
  - 'evidence based management'
  - 'hypothesis driven product'
  - 'fitness landscape'
  - 'red queen effect'
---

# Booking.com

全球最大 OTA（線上旅遊代理），核心為 [[concepts/agency-vs-merchant-model|agency model]]（客戶在 Booking 預訂、付款給酒店、Booking 收 ~15% commission）。1996 由 Geert-Jan Bruinsma 在阿姆斯特丹創辦（原名 Bookings.nl）。**1,500+ 萬 room nights/day 預訂、1.6M+ properties 在 227 國、15,000 員工、70 國 199 辦公室、43 語言**。^[extracted]

> 公司核心 DNA：「**Experiment or die**」—— 同時運行 ~1,000 對照實驗，每天 1,000+ 嚴格測試，**1,800 名技術與產品人員中 75% 用實驗平台**。Lukas Vermeer（Senior Product Owner of Experimentation）：「對照實驗是打造客戶想要的產品的最成功方式」。詳見 [[concepts/ab-testing-as-strategy]]。^[extracted]

## 母公司架構（Priceline Group / Booking Holdings）

6 大品牌、127 億美元 revenue（2017，YoY +18%）、總訂單 812 億（+19%）、毛利 124 億（+21%）；**70-80% 由 Booking 單獨產生**。^[extracted]

- **Booking.com**（旗艦 agency model）
- **Priceline.com**（merchant model 起家）
- **Kayak**（搜尋比價）
- **Agoda**（亞洲市場 agency）
- **Rentalcars.com**（租車）
- **OpenTable**（餐廳訂位）

2017 Total revenues \$12.68B（Agency 9.71B + Merchant 2.13B + Advertising 0.83B）；Cost of revenues 僅 \$250M → Gross profit ~98%；Performance advertising \$4.14B（SEM 主力）；Operating income \$4.54B；Net income \$2.34B；**Market cap (Dec 2017) ≈ \$92.9B**。教師眉批：「**Asset Light / Platform Heavy** / CGS=0 (digital economy as the resources) / **輕資產戰略**」。^[teacher-annotation]

## A/B Testing 文化（核心戰略，不只工具）

### 量化規模

- 每天 1,000+ 嚴格測試
- 同時運行約 1,000 對照實驗（80% 在「核心」住宿預訂主體上）
- 講義版本：2 週 1,000 次 → 年 26,000 次 → 優化 2,600 次（**10% 命中率**）
- 多數測試影響數百萬客流；landing page 同時數兆 permutations live
- p-value 閾值 0.10（90% confidence），power 0.8-0.95，最低 2 週執行期，樣本至少 100 萬獨立訪客
- 雙資料管道驗證；blue flag = 資訊性 / yellow = 留意 / **red = 嚴重（金絲雀煤礦）**

### 組織結構

- **270 teams × 6-8 人 squad**，1 PO + engineer + designer + copywriter + researcher + data analyst
- **任何人皆可發起實驗**（無管理層批准）
- 部門結構（Exhibit 7）：Product 180 teams ≈ 1,200 員工 / Partner Services 30 teams ≈ 190 / Customer Service 25 teams ≈ 155 / Core Infrastructure 40 teams ≈ 240
- 外加 8,000 客服 / 合作夥伴 agents、客服 1,400 員工 / 7×24×43 語言 / 月 100 萬通電話

### 核心 quotes（要訣）

- **Vermeer**: 「我們所有產品決策都基於以客戶為中心的可靠證據」 — EBM 教科書定義落地版
- **Vermeer**: 「strategy 不能 A/B test，但搞清楚 strategy 後一切都可測」 — **A/B 不替代領導層**的根本立場
- **Frisby**（Design Director）: 「我們有 21 年歷史但大多數員工是過去六年加入」、「我寧願創造**自我糾正的社區、自我修復的組織**」
- **Gulati**（高級產品負責人）: 「漸進式測試的 DNA 在創新跳變時變成威脅 — 業務模式創新只能來自領導層而非專注漸進式創新的產品團隊」 — A/B testing 的**戰略邊界**承認
- **Tans**: 「我們不再專注做客戶最有利的事情、因為變得更龐大、更關注內部」 — 規模化後的內視風險

## Growth Flywheel（Exhibit 5）

亞馬遜飛輪變體：

```
A/B testing
  → high customer conversion
  → marketing ROI > 1
  → more traffic
  → more partners
  → broader selection
  → influence over supply
  → better prices
  → great customer experience
  → 回到 A/B testing
```

教師眉批：「**Culture 推動 Flywheel**」「**一步一腳印 → 量變質變、積小勝為大勝 [[concepts/minimum-winning-game|Minimum Winning Game]]**」。^[teacher-annotation]

## OTA 產業地位

三大模式：

1. **Advertising**（TripAdvisor，CPC）
2. **Merchant**（Expedia 1996 創立、批發庫存、客戶付給 OTA）
3. **Agency**（Booking — 客戶付酒店、OTA 收 ~15% commission）

Tans：「我們的競爭對手更像旅行社，**agency 更合理**」。

OTA 三巨頭 Expedia、Priceline Group、攜程推動整合；2017 全球線上旅遊銷售 \$6,300 億（YoY +11.5%），2020 預估 \$8,180 億。

**競爭與威脅**：
- Expedia（merchant 對手；含 Hotels.com / Orbitz / Travelocity）
- Airbnb（degree of substitution 有限 — Morgan Stanley 2015 調查 42% 受訪者若無 Airbnb 仍會選酒店）
- **Google Hotel Finder（2011 推出）**：教師眉批「**Booking 吸 Google 的血**」— Google 從 OTA 廣告抽 \$140 億 / 年；Booking 33% revenue 用於 performance advertising 主要付給 Google ^[teacher-annotation]
- [[entities/Amazon]]：被預期進入

## 關鍵角色

- **Geert-Jan Bruinsma**（1996 創辦人，Amsterdam）— **Bookings.nl 起家；AdWords 2000 推出救了 Bookings**（揭示客戶意圖）
- **Gillian Tans**（CEO 2017-）— **第 7 名員工，2002 加入**
- **David Vismans**（CPO）— A/B testing 推手；「沒有資料就跟瞎子一樣」；與 Frisby 香檳賭 Blue Screen 實驗失敗
- **Lukas Vermeer**（Senior Product Owner of Experimentation）
- **Stuart Frisby**（Design Director）— Blue Screen Landing Page 實驗主導者；「自生死」哲學
- **Onno Zoeter**（Chief Data Scientist）— 客服 1,400 人累積回饋變實驗來源
- **Geert-Jan Grimberg**（Product Director）— 阿拉伯國家 mirror 介面案例
- **Deepak Gulati**（高級產品負責人）— 跨越式創新限制論
- **Adrienne Enggist**（前 SVP，已離職）

## 教師眉批採集（核心）

> 「**Why mimic Google's search box design (disruptive innovation)? What can be gained (or lost)? 轉型！！--&gt; 搜尋**」（slide p.1，Blue Screen Landing Page 實驗的 strategic ambiguity） ^[teacher-annotation]

> 「**Survey --&gt; 果果造因 / Database --&gt; GIGO / Experiment --&gt; Cause-effect**」（slide p.5）— 三種研究方法的 causal validity 階梯 ^[teacher-annotation]

> 「**為什麼 Google 沒辦法學？因為 Google 只做 Research、不做服務？**」（slide p.6） ^[teacher-annotation]

> 「**失敗率高？不 Care / 集體智慧**」（slide p.6） ^[teacher-annotation]

> 「**ecosystem / 270 個 Teams → 自組織 / 組織學習能力 / Lego-like extension / 學習型組織的五項修練**」（slide p.7） ^[teacher-annotation]

> 「**NK 模型 / Stuart Kauffman / 可調的崎嶇 健身景觀 / 可調崎嶇性捕捉了整體大小和局部丘陵山谷的數量**」（slide p.11，fitness landscape） ^[teacher-annotation]

## Blue Screen Landing Page（案例 cliffhanger）

Frisby 提案實驗（Exhibit 11）：全新藍色背景、Google 式單一搜尋框、首頁同時提供住宿+機票+租車。

- Tans 與 Vismans 不相信此實驗會提升 conversion（最重要 KPI）
- 風險：大規模客流困惑與流失
- **Vismans 與 Frisby 賭一瓶香檳「測試會失敗」**
- 員工已運行 30-40 個前置實驗
- Frisby 花 5-6 週設計（vs 其他測試多僅幾小時）
- 機票與租車交給合作夥伴 (kayak.com / rentalcars.com)

案例 cliffhanger：Tans 該如何介入？教師講義 p.10 三選項：「Tans should not get involved / Tans should ask Frisby to make changes / 介入到什麼程度」。

## Open Questions（待 wiki-challenge）

- **A/B testing 的戰略邊界**：Gulati 與 Vismans 都承認 A/B 無法替代領導層做業務模式創新 — 那它是 strategy substitute 還是 strategy enabler？^[inferred]
- **Villas.com 失敗教訓**：Tans 自承「之前推 Villas.com 沒有資料支援自己直覺、幾年後關站」 — A/B culture 是否實際上**保守化**了 Booking，讓它對 Airbnb 的迴應慢？^[inferred]
- **A/B 道德爭議**：「請立即預訂」「客房緊張」「只剩三間客房」訊息推播在內部 Workplace 群組曾辯論 — **稀缺性與緊迫感的人為製造**是否該被 A/B 優化掉？
- **Loyalty Genius vs Marriott Bonvoy**：Booking 無 Bonvoy 等級的母合 loyalty linkage — 為何 OTA 玩家做不出？是商模差異還是策略選擇？^[ambiguous]
- **Booking 吸 Google 的血 vs 共生**：33% revenue 給 Google performance ad 是否可持續？Google Hotel Finder 是否會把 Booking 變成 commodity？^[teacher-annotation]

## Related

- **概念**：[[concepts/ab-testing-as-strategy]] / experimentation culture / [[concepts/agency-vs-merchant-model]] / ota business models / growth flywheel / evidence based management / hypothesis driven product / champion vs challenger / causal inference vs correlation / fitness landscape / [[concepts/minimum-winning-game]] / red queen effect / two sided market / [[concepts/network-externalities]] / [[concepts/dominant-design]] / asset light business model
- **Entity**：Airbnb / Expedia / [[entities/Marriott-International]] / [[entities/Google]] / TripAdvisor / [[entities/Amazon]] / [[entities/Shopee]]（agency vs merchant 對照）
- **參考**：[[references/HBS-booking-com-case]] / [[references/grant-contemporary-strategy-analysis]] Ch3 / Ch4 / Ch9 / [[references/measure-what-matters-doerr-2018]]
- **Synthesis**：ab testing strategic limits / [[synthesis/agency-vs-merchant-platform-models]]

- [[synthesis/booking-x-adcenter-platform-learning]] — vs AdCenter 對偶案例：學習速度作為決勝因子
- [[synthesis/ab-testing-x-booking-strategic-limits]] — A/B 文化的 strategic limits