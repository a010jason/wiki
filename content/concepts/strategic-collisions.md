---
title: Strategic Collisions（策略性碰撞）
type: concept
domain: mgmt
tags: [strategy, AI, digital-transformation, disruption, competition, mgmt]
aliases: [strategic collision, digital vs traditional collision, collateral damage disruption]
sources:
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
created: 2026-05-06
updated: 2026-05-06
summary: >-
  Iansiti & Lakhani (2020) 提出的競爭動態：當 digital operating model 公司「碰撞」到傳統公司時，傳統公司不是被「直接挑戰」而被「附帶傷害」(collateral damage) —— digital firm 從未把傳統 firm 當對手，傳統 firm 卻被輾過。Kodak 不是被 Fuji 或數位相機 startup 殺死，而是被 FB / Tencent / Google 為了搶用戶在「拍照分享」上做平台時順便輾過。與 Christensen disruption theory 互補：disruption 強調挑戰者主動從低端攻擊，strategic collisions 強調 collateral damage。
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Strategic Collisions

## 核心定義

**Strategic Collision**：當一個 [[concepts/digital-operating-model]] 公司為了擴張自己的 user base / data / scope，**順便**把另一個傳統 vertical 的活動數位化，於是和該 vertical 的傳統龍頭發生競爭碰撞。^[inferred from book p.7-8]

**關鍵差別**：

| | Christensen Disruption | Strategic Collision |
|---|---|---|
| 挑戰者意圖 | 主動瞄準傳統公司 | 不一定瞄準，主要為自己 user / data |
| 切入點 | 從低端市場上滲透 | 橫向（從不同 vertical 跨界）|
| 傳統公司視角 | 看到挑戰者來了 | 突然被「不是同行」的人輾過 |
| 關鍵案例 | Innovator's Dilemma 鋼鐵廠、磁碟機 | Kodak vs FB / Tencent / Google |

—— 詳見 [[concepts/disruptive-innovation]] 的對比

## Kodak 的故事 —— Strategic Collision 教科書案例

書 p.7-8 直接點出：^[extracted]

> "Ultimately, Kodak was not killed by Fuji or by a digital photography startup, but by the emergence of smartphone and social network firms. Instead of focusing on industry-level tasks like film processing and marketing, **Facebook, Tencent, and Google focused on connecting users and on capturing and analyzing the information that flows through their networks**. ... These companies never even considered Kodak a competitor; rather the film company was simply collateral damage in the newer companies' race to acquire users on networks that enabled photo sharing as a core service."

**關鍵字：collateral damage**。

### Kodak 死法解構：^[inferred]

- Kodak 自己的競爭定位：**底片公司、相紙公司、化學公司**
- Kodak 觀察的對手：Fuji、Konica、Agfa（傳統底片同業）+ 數位相機 startup（如 Nikon、Canon）
- **真正殺死 Kodak 的人**：FB、Instagram、Tencent
- FB / Instagram 為什麼動 Kodak：**他們需要用戶分享照片來建社交圖譜**，於是把「拍照 → 分享」變成零成本、即時、社交綁定 → 用戶不再需要洗照片、買底片、放實體相簿

—— Kodak 一直在看「同行」，沒看見**完全不同 vertical 的玩家**用 photo sharing 當作他們 DOM 的一部分。^[inferred]

## 為何 collision 比 disruption 更難察覺

傳統公司的雷達系統是「同行情資」：^[inferred]
- 市場部門盯競品（同 vertical 的同行）
- 策略部門盯 Porter Five Forces（替代品 / 新進入者，但仍預設同 industry）
- 高層讀 industry analyst 報告（行業內排名）

**Strategic Collision 的攻擊者不在這些雷達上**：^[inferred]
- 從不同 vertical 來
- 沒被 industry analyst 列為對手
- 自己也沒把傳統公司當對手
- 攻擊發生時，傳統公司還在和「同行」打價格戰

—— 等發現時通常已被輾過。

## 幾組典型的 Strategic Collisions

書中或書暗示的 collisions：^[extracted from book Ch1, inferred]

| Digital Firm | 傳統 vertical 受害者 | Digital firm 真正在做什麼 |
|---|---|---|
| FB / Instagram | Kodak / Fuji（底片）| 連接用戶分享生活 |
| WhatsApp / WeChat | 電信業（SMS、國際電話）| 通訊圖譜建立 |
| Uber / Didi | 計程車業 | 移動性即時分配 |
| Airbnb | 連鎖飯店 | 房屋資產活化 / 旅遊體驗平台 |
| Amazon | 書店、零售、雲端對手 | 用戶採購行為資料 |
| Tencent / Ant Financial | 銀行、保險、券商 | 在地生活閉環 |
| YouTube / Spotify | CD 唱片業、廣播業 | 內容分發平台 |
| Apple Pay / Google Wallet | 信用卡網路 | 行動裝置黏著度 |

## 對被攻擊的傳統公司：怎麼防

書 p.18 給的建議（書 Ch10 詳解）：^[extracted]

1. **Rearchitect operating model**：不能把現有部門再加個「數位轉型小組」，必須整套重新架構（→ [[concepts/digital-operating-model]]）
2. **Buy your way in**：併購 digital startup（如 Walmart 併 Jet.com / Bonobos）
3. **Partner with platform giants**：與 AWS / Azure / Microsoft 結盟（如 Walmart-Microsoft 雲端結盟）
4. **Become an AI factory**：自己變成 [[references/iansiti-lakhani-competing-age-of-ai-2020]] Ch3 的 AI Factory（Mastercard / Fidelity / Roche 是書中提到的成功案例）

但**最大阻力是組織心智**：^[inferred]
- 中階主管的權力、預算、員工人數，全部建立在傳統 operating model 上
- 全面 DOM 轉型 = 對中階主管的 existential threat
- → 結果：表面響應（成立「數位轉型辦公室」），實際 sabotage

## 對醫療 AI 的含意

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]

醫療業可能被 strategic collision 攻擊的潛在來源：^[inferred]

| Digital Firm | 醫療 vertical 受害者 | 真正在做什麼 |
|---|---|---|
| Apple HealthKit / Watch | 健檢業、慢病管理 | 讓用戶被裝置黏住 |
| Google DeepMind / Med-PaLM | 二級會診、線上問診 | LLM 應用佈局 |
| Amazon Pharmacy / One Medical | 連鎖藥局、家醫科 | 補完 Prime 訂閱閉環 |
| 字節跳動健康 / 平安好醫生 | 中國醫院 outpatient | 用戶健康黏著度 |
| Stripe / Square | 醫院帳務後台 | B2B 支付閉環 |

—— 醫療業相對較被法規保護（FDA / HIPAA / 在地醫師執業），所以 collision 速度慢，但不是不會發生。^[inferred]

EBM 之類醫療 AI 公司的雷達應該超出「醫療 AI 同業」，盯：^[inferred]
- Apple、Amazon、Google 在醫療領域的動作
- 中國科技巨頭在台灣的影子（聯影醫療、字節 PICOOC）
- 雲端服務商（AWS HealthLake、Azure Health Bot）的 platform 化

## 與其他 wiki 概念

- [[concepts/platform-competition]] — 概念近親，但 platform-competition 強調**互相**滲透；strategic collisions 強調**單向**輾壓 + collateral damage 視角
- [[concepts/disruptive-innovation]] — Christensen 框架的補充而非取代
- [[concepts/digital-operating-model]] — Strategic Collision 的攻擊者必然是 DOM 公司
- [[concepts/scale-scope-learning]] — DOM 公司能 collide 是因 SSL 三軸給他們不可比擬的擴張力

## Open questions

- 醫療業何時會出現 Kodak-規模的 Strategic Collision 受害者？目前看 PACS / EMR 廠商抗壓性高，但 5-10 年呢？^[ambiguous]
- 法規邊界是 collision 的天花板還是緩衝？醫療法規讓 Apple Health 不能直接做診斷 —— 是保護傳統廠商還是只延後了 collision？^[inferred]

## Sources

- [[references/iansiti-lakhani-competing-age-of-ai-2020]] 書 p.7-8 Kodak 案例直接命題
- 書 Ch7 整章 "Strategic Collisions" 詳解（本 ingest 範圍未涵蓋，待後續補）
