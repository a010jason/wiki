---
title: Shopee
type: entity
domain: marketing
tags: [e-commerce, platform, southeast-asia, pricing-model, mgmt]
aliases: [蝦皮, 蝦皮購物, Shopee.tw]
sources:
  - id: Kotler-MM16e-Wave3-Shopee
    type: case-supplement
    rel_path: 行銷管理/Shopee.pdf
    pages: 2
    sha256: 6f94432365fbab95c1520870303a096b2f1c01ebfa90316d6e91f6d4ec7f8448
    ingested_commit: pending
created: 2026-05-21
updated: 2026-05-21
summary: >-
  東南亞 e-commerce 平台，母公司 Sea Group。在 Kotler MM 16e 補充教材中作為「Merchant / Commission Model」的代表案例，與 Amazon / 阿里巴巴的 Agency Model 對照，凸顯後進平台用低價策略切入既有市場時的定價邊界與反托拉斯風險。
provenance:
  extracted: 0.3
  inferred: 0.7
  ambiguous: 0.0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Shopee

> 教師補充教材以 Shopee 為例對比平台定價模式，但 source 本身內容稀薄（一頁手寫批註 + 一頁象限圖），多數背景敘述靠教師批註與一般領域知識補出。

## What It Is

Shopee 是東南亞與台灣的 C2C / B2C e-commerce 平台，母公司 Sea Group（新加坡，2009 創立，2017 NYSE 上市）。Shopee 2015 年上線，2016 進入台灣，主打**行動 app 優先 + 低價補貼 + 低佣金**。^[extracted]

## 教師補充的核心 Frame

教師在補充教材中把 Shopee 放進**平台定價象限**，與 Amazon / 阿里巴巴對比：

| 模式 | 平台抽成方式 | 利潤特徵 | 代表 |
|---|---|---|---|
| **Agency Model** | 對交易抽高比例佣金 | 高利潤 | 阿里巴巴、Amazon |
| **Merchant Model** | 平台自己進貨、低佣金或補貼 | 低邊際、規模換利潤 | Shopee |
| **Commission Model** | 純佣金抽成 | 介於兩者間 | 一般 marketplace |

^[inferred from instructor annotation]

## UVMC 與掠奪式定價邊界

教師批註指出一個量化規則：

> **價格 > 3 × UVMC（User Value / Market Cost benchmark）→ 觸發 predatory pricing → 面臨反托拉斯風險**

^[inferred from instructor annotation]

這條規則暗示「低價作為市場進入武器」有上限 —— 超過某個比值會從正當競爭變成法律可訴的掠奪式定價。對 Shopee 的補貼策略而言，這是隱性的天花板。

## 商業模式定位

- **後進者賽局**：教師批註明確說明，新進入者可採用 Quad 1（low price → build reputation）策略，但這策略本身**不可持續** —— 等到 reputation 累積足夠後，平台必須轉向更高 margin 的模式（Agency / commission），否則低價陷阱會吃光獲利空間。^[inferred from instructor annotation]
- 與 [[entities/Amazon]] 的差異：Amazon 早年也走低價策略，但快速以 AWS、Prime 訂閱、自有品牌切到 Agency / Service Model；Shopee 是否能複製這條路徑，source 未提。

## 與其他框架的對接

- **vs [[concepts/platform-competition]] / [[concepts/winner-take-all-vs-always-a-share]]**：教師補充並未把 Shopee 放在 GAFA 那種「網路效應 + winner-take-all」的框架，反而強調**商業模式選擇**（Agency vs Merchant）。這與 Eisenmann / Parker / Van Alstyne 那派 platform economics 的視角不同 —— 後者更關注 multi-homing、network externalities。^[inferred]
- **vs [[concepts/3V-market-value-principle]]**：Shopee 對 Customer / Collaborator / Company 三方價值的權衡，補貼期是「貼 Company value 拉 Customer value」；Sustainability 取決於補貼結束後 collaborator（賣家）能不能維持。

## Open Questions

- Source 未提：Shopee 在台灣的具體市佔率、GMV、與 [[entities/Apple]] / [[entities/Amazon]] 對照的數據（教師批註只給定性象限位置）
- Source 未提：PChome / 露天拍賣 / Yahoo 拍賣的三方戰局時間軸
- Shopee 補貼策略終止時點（教師補充未涵蓋本書 16e 出版後事件）

## Related

- [[entities/Amazon]] — Agency Model 對照組
- [[concepts/platform-competition]]
- [[concepts/3V-market-value-principle]]
- [[references/kotler-keller-chernev-marketing-management-16e]] — Wave 3 案例補充
