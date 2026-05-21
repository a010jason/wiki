---
title: Platform Competition（平台競爭 / 跨界滲透）
type: concept
domain: mgmt
tags: [platform, strategy, competition, digital-economy, mgmt]
aliases: [平台競爭, 跨界滲透, platform encroachment, sector-boundary war]
sources:
  - textbook:HBS-Case-9-513-060-GAFA-Deighton-Kornfeld-2013
created: 2026-05-06
updated: 2026-05-06
summary: >-
  數位時代下，**單一 vertical 龍頭會把核心優勢延伸成多 vertical 平台**，導致「沒有清晰產業邊界」的競爭格局。GAFA case 的核心觀察 —— 四家公司各從零售/硬體/社交/搜索起家，最終全部跨界互相廝殺。對策略意涵：傳統 industry analysis（Porter Five Forces）的 "industry" 邊界假設失效，要改用「contested boundaries」的視角看競爭。
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Platform Competition（平台競爭）

## 核心命題

**在數位經濟，沒有「我守我的產業、你守你的產業」這件事。**

單一 vertical 的龍頭會把核心優勢（用戶、資料、流量、支付關係、裝置）延伸成跨 vertical 的平台，與其他 vertical 龍頭互相滲透。^[inferred]

[[references/hbs-gafa-case-deighton-2013]] 是這個現象的經典紀錄：

| 起家 vertical | 公司 | 滲透到的領域（2013 截圖）|
|---|---|---|
| 零售 | Amazon | AWS 雲端、Kindle 內容、廣告交易平台、智能手機（FireFly）|
| 硬體 | Apple | iTunes 內容零售、Siri 搜索、Apple Pay、iAd |
| 社交 | Facebook | FB Exchange 廣告、禮品電商、FB Phone、Messenger 支付 |
| 搜索 | Google | Android 手機、YouTube 內容、Google+ 社交、Google Wallet 支付、Google TV |

^[extracted from GAFA case Exhibit 2]

## 為何會發生

四個結構性驅力：^[inferred]

### 1. 邊際成本趨近於零

數位產品（軟體、內容、廣告 inventory）的複製成本接近於零，所以**多角化的成本懲罰小**。實體零售跨足電視製造會是大笑話，但 Amazon 跨足影視製作只是多開一個事業部。

### 2. 用戶資料的範疇經濟（Economies of Scope on Data）

收集你「在 Amazon 買什麼」的資料，可以拿去訓練「該推什麼影片給你」的模型。一份用戶資料**對多個 vertical 都有邊際效益**。

### 3. 入口控制權

掌握用戶與內容/服務的「介面層」——
- Apple = 手機 OS 介面
- Google = 搜索介面
- Amazon = 購物介面
- Facebook = 社交介面

—— 就有能力**強制下游服務商分潤**（App Store 30%、AdSense 60% 給 publisher、Marketplace 給賣家的 seller fee）。介面層贏者通吃。^[inferred]

### 4. Always-on user attention

Smartphone 把用戶從「使用某個服務」變成「持續綁定某個 ecosystem」。Apple 用戶傾向用 iCloud、Apple Music、Apple Pay；Google 用戶傾向用 Gmail、Drive、YouTube。**單一 vertical 的勝利會被用來拉抬其他 vertical**。

## 與傳統 industry analysis 的衝突

傳統 [[concepts/porters-five-forces]] 假設：

> *先界定 industry，再分析 5 forces。*

但 platform competition 的世界裡，**界定 industry 本身就是策略決策**：^[inferred]

| 你怎麼界定？ | Apple 的競爭格局看起來像 |
|---|---|
| 智慧手機產業 | Apple vs Samsung vs 小米 |
| 個人運算裝置 | Apple vs Microsoft vs Google ChromeBook |
| 數位內容入口 | Apple vs Amazon vs Netflix |
| 行動廣告平台 | Apple vs Google vs Facebook |

**全部都「對」，但策略結論完全不同**。Porter 的工具不能告訴你該選哪個 frame，要選哪個是 platform competition 的核心命題。

## 策略含意（與相關概念）

### vs [[concepts/blue-ocean-strategy]]

藍海策略假設「找一塊沒有人爭奪的市場」。Platform competition 的世界裡，**任何成功的藍海最終會被附近的 platform 龍頭吞噬**（因為他們的邊際成本進入很低）。Amazon 進音樂、Google 進手機、Apple 進支付，都不是因為他們是音樂/手機/金融專家。^[inferred]

### vs [[concepts/disruptive-innovation]]

Christensen 的 disruption 理論預設挑戰者「從低端切入」。Platform 競爭裡更常見的是**橫向滲透**（cross-domain encroachment）—— 巨頭從一個 vertical 帶著大量使用者跳進另一個 vertical，**不從低端、直接往中高端打**。Apple Pay 就是直接打進主流支付，不是從低端開始。^[inferred]

### vs [[concepts/value-chain]]

Value chain 思維會把活動分內外（make-or-buy）。Platform 思維會問：「我的 chain 上**哪一段是介面層、能不能變成多 vertical 共用**？」AWS 就是 Amazon 把自己內部的伺服器運維 chain 抽出來變多 vertical 共用平台的經典案例。^[inferred]

## Open questions

- **醫療 AI 適用嗎？** 醫療有強法規邊界（FDA 510(k) / 衛福部許可），跨界滲透成本遠高於消費網路。但醫療 PACS / HIS / FHIR 軟體層**仍可能 platform 化**（Sectra 在做、GE Healthcare 在做）。需要進一步分析。→ 拉到 [[synthesis/medical-ai-platform-vs-pipeline]]^[ambiguous]
- **是否所有 vertical 終將被 platform 化？** Or 有些 vertical 因為法規/物理特性永遠抗拒平台化（核電、特殊化學品製造）？此 case 沒回答。^[ambiguous]
- **2013 → 2026 的 13 年驗證**：四巨頭實際上沒有「全部都贏」—— FB Phone 失敗、Google+ 失敗、Amazon Fire Phone 失敗。所以**跨界滲透有試誤成本**，不是必勝公式。需要補一頁 platform encroachment failure modes（待寫）。^[inferred]

## Sources

- [[references/hbs-gafa-case-deighton-2013]] — 案例本體與 Exhibit 2 / Exhibit 4 數據
- 2013 → 2026 跨年度驗證：Jason 自身觀察^[inferred]
