---
title: Amazon
type: entity
domain: mgmt
tags: [tech-giant, e-commerce, cloud, platform, sustainability, mgmt]
aliases: [Amazon.com, AMZN, 亞馬遜]
sources:
  - id: HBS-Case-9-513-060-GAFA-Deighton-Kornfeld-2013
    type: hbs-case
    note: GAFA 4-firm comparative case
  - id: Kotler-MM16e-Wave3-AmazonPackaging
    type: case-supplement
    rel_path: 行銷管理/亞馬遜可持續包裝計劃.pdf.pdf
    pages: 3
    sha256: 2bba5c7abc81eb31d2c3c3bd0c7d75dbf7a4851bd4ffca55cdbd2025a1655fad
    ingested_commit: pending
    note: Sustainable packaging / FFP / SIOC case supplement
created: 2026-05-06
updated: 2026-05-21
summary: >-
  1994 年由 Jeff Bezos 創立。從線上書店起家，現為全球最大電商與雲端服務商。GAFA case 中的「零售主導」一角；以 AWS（2002 推出）為跨界滲透的關鍵 lever，從零售 chain 抽出來變成多 vertical 共用的雲端平台。Kotler MM 16e Wave 3 補充涵蓋 Frustration-Free Packaging（FFP）與 SIOC 計劃，是 sustainable marketing 的代表案例。
provenance:
  extracted: 0.8
  inferred: 0.17
  ambiguous: 0.03
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-21
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

## Sustainable Packaging（Kotler MM 16e Wave 3 補充）

教師補充教材以「亞馬遜可持續包裝計劃」三頁文件，把 Amazon 放進 **sustainable marketing / CSR-ESG marketing** 的代表案例。^[extracted]

### Frustration-Free Packaging（FFP）

- **2019 推出**（教師補充列年份；業界普遍認為 FFP 啟動更早約 2008 年，本 source 採 2019 標註）^[extracted]
- 三個設計目標：(a) 減少包裝材料、(b) 提高可回收性、(c) 改善客戶開封體驗（消除「包裝挫折」customer pain point）^[extracted]
- 與供應商（Mattel、Hasbro 等品牌商）共同設計，**packaging spec 由 Amazon 主導**^[extracted]

### Ships in Own Container（SIOC）計劃

- **2015 啟動**^[extracted]
- 自啟動以來**減少超過 100 萬噸包裝材料**使用^[extracted]
- 機制：供應商直接設計符合運輸標準的產品外箱，**不需要 Amazon 端再加二次包裝**
- 配送中心搭配自動化機器，按訂單內容智能選擇最合適的包裝尺寸^[extracted]

### Customer Co-creation

- 商品頁推出「包裝反饋」功能，客戶可對開封體驗評分
- 這是 **two-way packaging design** —— 不只 brand → customer 單向通報，而是 customer → brand 反饋成 design input^[extracted]

### 競爭對標：Walmart

- Walmart 承諾 **2025 年實現 100% 可回收 / 可重複使用 / 可堆肥** 的自有品牌包裝^[extracted]
- 教師補充把 Walmart 列為 Amazon FFP 的主要 sustainability 競爭對手，暗示這已不是「ESG 加分項」而是「retail 主流要求」^[inferred]

### 供應鏈與全球化

- **巴西 Klabin 合作**：使用 100% 回收纖維製成包裝箱^[extracted]
- 多渠道傳播 sustainability narrative：年度永續報告、社交媒體、產品頁、Climate Pledge Friendly 標籤^[extracted]
- **超過 50% 客戶表示更喜歡環保包裝**（教師補充未明 source）^[extracted]

### 4P / 5C / OVP 分析（教師補充框架）

| 框架 | Amazon 永續包裝的應用 |
|---|---|
| **Product** | SIOC + FFP，包裝本身成為產品特徵 |
| **Price** | 將永續成本內化至 Prime 訂閱（不直接漲商品價）^[inferred] |
| **Place** | 配送中心自動化 + Whole Foods 雙通路 |
| **Promotion** | Climate Pledge Friendly 標籤、客戶反饋機制 |
| **5C – Customer** | 超過 50% 偏好環保 |
| **5C – Competitor** | Walmart 2025 承諾、Alibaba（教師標未展開） |
| **5C – Company** | 物流自動化 + 規模化 + reverse logistics（隱含） |

^[inferred from instructor annotation]

### 與 wiki 其他概念的對接

- **vs [[concepts/3V-market-value-principle]]**：FFP 同時提升 Customer value（開封順、安心環保）、Company value（包材成本降低）、Collaborator value（供應商與 Amazon 共設計減 friction），是 3V 同向案例^[inferred]
- **vs [[concepts/holistic-marketing]]**：sustainable marketing 是 holistic marketing 中 **performance marketing pillar** 的具體展開（環境 + 社會 績效併入評估）
- **vs [[concepts/product-differentiation-9-dimensions]]**：包裝作為差異化維度通常被忽略，FFP 把它拉到主軸

## Open questions

- Amazon 進醫療（PillPack、One Medical、Amazon Pharmacy、Amazon Clinic）會不會像 AWS 一樣顛覆？2026 已部分驗證（One Medical 整合中、Amazon Clinic 退出後重來），尚難下結論。^[ambiguous]
- AWS 在醫療 SaaS（HealthLake、Comprehend Medical）的擴張是「平台滲透」還是「sectoral specialization」？^[ambiguous]
- Sustainable packaging 是否存在 **greenwashing 風險**？（教師補充 source 未質疑此面向，但學界對紙箱替代塑膠的 lifecycle 環境權衡有爭議）^[ambiguous]
- Wave 3 補充 source 標 FFP 為 2019 啟動，與業界主流引述 2008 衝突 —— 可能是「FFP 2.0 重啟」與「初版 FFP」的差異，待 cross-source 驗證^[ambiguous]
