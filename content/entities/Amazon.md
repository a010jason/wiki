---
title: Amazon
type: entity
domain: mgmt
tags: [tech-giant, e-commerce, cloud, platform, mgmt]
aliases: [Amazon.com, AMZN, 亞馬遜]
sources:
  - textbook:HBS-Case-9-513-060-GAFA-Deighton-Kornfeld-2013
created: 2026-05-06
updated: 2026-05-06
summary: >-
  1994 年由 Jeff Bezos 創立。從線上書店起家，現為全球最大電商與雲端服務商。GAFA case 中的「零售主導」一角；以 AWS（2002 推出）為跨界滲透的關鍵 lever，從零售 chain 抽出來變成多 vertical 共用的雲端平台。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Amazon

> 此頁是 [[references/hbs-gafa-case-deighton-2013]] ingest 出來的 entity skeleton，將在後續案例累積時補完。

## Quick facts（2012 截圖，來自 GAFA case 圖表一）^[extracted]

| 項目 | 數值 |
|---|---|
| 創立 | 1994（Jeff Bezos）|
| 市值 | $110.7B |
| 毛利率 | 25.3% |
| 營收 | $57.3B |
| 利潤 | 虧損 |
| 員工 | 81,400 |

> 註：2026 年 Amazon 市值已逾 1.5 兆美元，員工逾 150 萬，AWS 成為主要利潤來源 —— 上表是 2012 截圖，純供 GAFA case 解讀用。^[inferred]

## 案例中的角色（2013 截圖）

### 從幾近破產到電子零售龍頭

- 2001/12 首次年度盈利 $5M，扭轉連續六年虧損^[extracted]
- 2013 年全球年收入 ~$570 億；圖書數位媒體 37%、日用百貨 59%、AWS + 信用卡支付 4%^[extracted]
- 美國 2013 線上零售收入 $310 億 ≈ **後 100 名美國網路零售商總和的五分之一**^[extracted]

### AWS 是跨界滲透的關鍵 lever

- 2002 年推出，原本給賣家用，**很快擴展到非零售客戶**（Dropbox、Reddit、《紐約時報》等）^[extracted]
- 從零售 chain 抽出來變多 vertical 共用平台，是 [[concepts/platform-competition]] 的經典案例^[inferred]

### SKU 戰

Amazon 與線上線下競爭對手的數位相機 SKU 對比^[extracted]：

| 通路 | SKU 數量 |
|---|---:|
| Walmart 實體店 | 30 |
| Target.com | 210 |
| Walmart.com | 408 |
| **Amazon** | **8,010**（其中 450 種由 Amazon 直接零售）|

8,010 個 SKU 對手只有 30-400 之間，這是長尾經濟的具體展現。

### 廣告業務（2012 評為「廣告業沉睡的巨人」）

- 2011 推出 Amazon Advertising Network（廣告網路）^[extracted]
- 用 collaborative filtering 推薦 + retargeting cookie，但 2013 規模仍小^[extracted]

## GAFA case Exhibit 2 中的 7 維能力

| 能力 | Amazon 的位置（2013）|
|---|---|
| 搜索 | 有限（站內）|
| 社交 | 評價系統 |
| 零售 | **主導** |
| 電視 | 網路串流（Prime Video 早期）|
| 智能手機 | FireFly（後失敗）|
| 支付 | 信用卡 |
| 廣告 | 廣告交易平台（早期）|

## 與其他 wiki 概念

- 案例本體：[[references/hbs-gafa-case-deighton-2013]]
- 跨界滲透分析：[[concepts/platform-competition]]
- WTA 分析：[[concepts/winner-take-all-vs-always-a-share]] — 零售是 always-a-share，Amazon 試圖用 Prime 把它「WTA 化」
- 醫療 AI 對照思考：[[synthesis/medical-ai-platform-vs-pipeline]]

## Open questions

- Amazon 進醫療（PillPack、One Medical、Amazon Pharmacy、Amazon Clinic）會不會像 AWS 一樣顛覆？2026 已部分驗證（One Medical 整合中、Amazon Clinic 退出後重來），尚難下結論。^[ambiguous]
- AWS 在醫療 SaaS（HealthLake、Comprehend Medical）的擴張是「平台滲透」還是「sectoral specialization」？^[ambiguous]
