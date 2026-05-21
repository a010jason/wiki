---
title: CAGE Distance Framework
type: concept
domain: mgmt
tags: [global-strategy, internationalization, mgmt]
aliases: [CAGE, Ghemawat CAGE, 國際化距離]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Ch11
created: 2026-05-20
updated: 2026-05-20
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-20
ingest_method: read-subagent
---

# CAGE Distance Framework

Pankaj Ghemawat 提出的跨國市場進入評估框架：把「距離」拆成四種維度，幫助判斷哪個市場該優先進、哪個策略需要在地化。^[extracted]

## 四個維度

| 維度 | 內容 | 對哪類產業最敏感 |
|---|---|---|
| **Cultural** | 語言、宗教、社會規範、消費習慣 | TV、出版、食品、酒類 |
| **Administrative / Political** | 缺乏共同政治貨幣聯盟、政治敵意、弱法制、貿易壁壘 | 能源、國防、電信 |
| **Geographical** | 缺共同邊界 / 運輸通訊基礎、易腐易碎 | 水泥、玻璃、牛奶、金融服務 |
| **Economic** | 消費所得差異、勞動成本差異、購買力 | 奢侈品、勞力密集服飾 |

國際化決策的精髓 = 「打開或繞過哪個 CAGE 距離」。^[extracted]

## 與 [[concepts/porters-five-forces]] 的關係

CAGE 是 national diamond + market entry 的補強。Porter National Diamond 解釋「為什麼這個國家在某產業有優勢」（factor conditions、demand conditions、related industries、firm rivalry）；CAGE 解釋「為什麼從 A 國進 B 國有摩擦」。^[inferred]

## Bartlett-Ghoshal MNC Typology 對照

跨國組織三型 + 第四型理想：^[extracted]

| 時期 | 類型 | 結構 | 例 |
|---|---|---|---|
| 1900-39 | European MNC | Decentralized Federation（國家子公司自足） | Unilever |
| 1945-70 | American MNC | Coordinated Federation（HQ 主導技術產品） | IBM |
| 1970s-80s | Japanese MNC | Centralized Hub（全球策略 home base 主導） | Toyota |
| 理想 | **Transnational (TNC)** | 整合、分散、彼此依賴的網路 | （理論模型，難以純粹實現） |

→ TNC 是 Bartlett-Ghoshal 提出來解 Global Integration vs National Differentiation 兩難的「理想型」；現實中協調成本極高。

## Ghemawat's AAA Triangle

CAGE 是診斷工具，AAA 是策略選擇：^[extracted]

| 策略 | 對應 | 量化 proxy |
|---|---|---|
| **Adaptation** | 在地化、降低 CAGE 距離傷害 | 廣告/銷售比相對對手 |
| **Aggregation** | 跨國整合、規模化 | R&D/銷售比相對對手 |
| **Arbitrage** | 套利、利用 CAGE 差異 | 勞動成本/銷售比相對對手 |

Cognizant、Tata Group 是 Arbitrage 範例；Toyota、Apple 是 Aggregation；麥當勞、Unilever 在不同市場做 Adaptation。

## 醫療 AI 跨國部署的判讀

| 距離維度 | 醫療 AI 摩擦點 |
|---|---|
| Cultural | 臨床診斷流程、患者期望、放射師信任建立 |
| Administrative | FDA / CE / TFDA / PMDA / NMPA approval pathway 不通約 |
| Geographical | data residency、PACS 整合需在地 SI |
| Economic | 國家 reimbursement 結構差異、CAPEX vs OPEX 偏好 |

→ 多數醫療 AI 廠商會發現 Administrative 距離最致命（每個國家都要重新做監管 dossier），Cultural + Geographical 次之。Arbitrage 策略（在低成本國訓練、高 reimbursement 國銷售）在醫療 AI 通常不可行 —— data 跨境受限。^[inferred]

## Open Questions

- AAA Triangle 的 proxy（廣告比、R&D 比、勞動成本比）是否真能 capture 策略意圖？source 未驗證^[ambiguous]
- 地緣脫鉤（chip war、data sovereignty）下，CAGE 距離是否需加上 "Geopolitical" 第五維度？^[inferred]

## Related

- [[concepts/scale-scope-learning]] — Iansiti 的數位營運 SSL 三角，與 CAGE 互補
- [[concepts/strategic-collisions]] — digital firm 跨界場景
- Bartlett-Ghoshal-MNC-typology — 對應的組織型態（待建）
- [[references/grant-contemporary-strategy-analysis]] — Ch11 源頭
