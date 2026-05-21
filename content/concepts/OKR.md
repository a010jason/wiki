---
title: OKR (Objectives and Key Results)
type: concept
domain: mgmt
tags: [OKR, performance-management, goal-setting, org-design, mgmt]
aliases: [Objectives and Key Results, 目標與關鍵成果法]
sources:
  - lecture:2023-08-20-溫金豐-OKR-管理技能發展專題
  - book:Doerr-2018-Measure-What-Matters
  - book:王怡淳-2022-你真的搞懂OKR了嗎
  - paper:Niven-Lamorte-2016
created: 2026-05-05
updated: 2026-05-05
summary: >-
  Intel Andy Grove 建立的目標管理方法，核心是 Objective（境界式定性目標）+ Key Results（量化成果），強調自下而上參與 + 組織透明，與 KPI 的 top-down 路線形成對照。
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.55
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# OKR (Objectives and Key Results)

## What It Is

OKR 是一種目標管理方法，全名 Objective and Key Results。源自 Intel，由前 Intel CEO Andy Grove 建立在企業內部使用，後 Google、Microsoft、阿里巴巴等科技巨頭採用而廣為人知。^[extracted]

> OKR 是一個批判性的思維框架及使組織持續保持紀律的準則，旨在確保員工可以共同合作，並且專注做出可以衡量的貢獻，提升績效以持續推動公司向前。
> —— Niven and Lamorte (2016)

OKR 不只是「目標設定」工具，而是一種「管理團隊」的方式。沒有一間企業是完成年度目標設定後就能成功，關鍵是設定目標的過程中如何鼓勵員工主動創造價值（王怡淳, 2022）。^[extracted]

## Core Structure

- **Objective（O，目標）** —— 一種「境界」，定性表述，不一定數字化。例：「成為全亞洲成長最快的 IC 設計公司」
- **Key Results（KR，關鍵成果）** —— 與 O 密切相關，量化、可衡量；通常一個 O 搭配 3 個 KR ^[extracted]，但實務上 3–5 個較合理（太少不具體、太多會失焦）^[inferred]
- KR 寫法應包含「執行方法 + 結果（impact）」，例：「每月拜訪 10 位新潛在客戶，並帶來 5% 業績成長」^[extracted]

詳細設定方法見 [[skills/setting-OKR]]。

## OKR 與 KPI 的根本差異

OKR 屬於 **performance development**（與員工 potential 相關），KPI 屬於 **performance evaluation**（透過獎懲）—— 兩者是 [[concepts/performance-management]] 的兩條路線，不是替代關係。^[extracted]

| 面向 | OKR | KPI |
|---|---|---|
| 目標設定路線 | 自下而上 + 自上而下交互運作 | top-down 指令分配 |
| 強調 | 制定目標的過程、團隊自主性、透明度 | 數字成果、效率 |
| 適用情境 | 變動性高、目標／環境／競爭態勢／potential 不明確 | 相對穩定、變動性低、拚 market share／成本／效率 |
| 與獎酬連結 | 通常脫鉤（避免員工保守訂目標） | 直接連動 |

詳見對照頁 [[concepts/KPI]] 與 [[synthesis/OKR-vs-KPI-when-to-use]]。

## 三大原則

1. **目標屬性**：強度（困難度）+ 內容（清晰度／具體度）
2. **目標設定過程**：自下而上 + 自上而下的「交互運作」，員工有空間自訂目標
3. **組織透明度**：目標、進度、結果定期公開，全員可查（Intel 案例：所有員工可透過系統查閱 CEO 目標）^[extracted]

## CFR：持續性績效管理

OKR 通常與 CFR 搭配使用：^[extracted]
- **C**onversation —— 對話
- **F**eedback —— 回饋
- **R**ecognition —— 讚揚

CFR 解決的是「OKR 設好之後怎麼管」的執行面問題。

## 實證

廖沛綺（2023, 陽明交大經管所碩論）對「目標設定 → 員工投入 → 員工績效」三層關係做跨層次研究，主要支持的假說：^[extracted]
- H1-2 / H1-3：目標清晰度 + 參與度 對 員工投入 有顯著正向影響
- H2-1 / H2-2：員工投入 對 角色內 / 角色外行為 有顯著正向影響
- H3-3 / H3-4：目標清晰度 對 角色內 / 角色外行為 有顯著正向影響
- H3-6：目標設定參與度 對 角色外行為 有顯著正向影響

意涵：OKR 透過「讓員工感受到被 develop 而非被 evaluate」這個機制，提升投入度，進而提升績效。^[inferred]

## Key Tension：OKR 與獎酬怎麼連？

如果目標真的「具挑戰性、看到會不舒適」，連動獎酬會逼員工保守訂目標 —— 但完全脫鉤又難以驅動。^[ambiguous]

實務常見折衷：**底薪比例拉高 + 獎酬連結公司整體表現**（淡化個人 OKR 達成率），個人 OKR 用於 development，KPI 用於 evaluation。但這個組合在台灣業界落地與否、Intel 自己怎麼處理的細節，本 source 未明確說明。^[ambiguous]

## Sources & Authority

主要參考文獻（溫金豐 2023/8/20 課程列出）：
- [[references/measure-what-matters-doerr-2018]] —— John Doerr 的 OKR 經典書
- 王怡淳 (2022). 《你真的搞懂 OKR 了嗎？以 Intel 為師，打造最強作戰部隊》. 布克文化
- 廖沛綺 (2023). 探討 OKR、員工投入及角色績效之關係—跨層次研究. 陽明交大經管所碩論
- Niven, P. R. & Lamorte, B. (2016). *Objectives and Key Results*

授課者：[[entities/wen-jin-feng]]

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 3 narrow / 2 brittle / 0 unsupported。**主要弱點**：(a) 規範性主張多（bottom-up 交互 / dev vs eval 分工）— 與 Google / 阿里 / 台灣中型公司實際導入實況不符；(b) 唯一實證依賴單一碩論（廖沛綺 2023），「參與度顯著正向」結論與 Locke-Latham goal-setting 50 年文獻部分矛盾。
>
> `base_confidence`：0.60 → 0.55；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/OKR.md`。

## Related

- [[concepts/KPI]] —— 對照組
- [[concepts/performance-management]] —— OKR 與 KPI 的上層分類
- [[skills/setting-OKR]] —— 怎麼設 O 與 KR 的 how-to
- [[synthesis/OKR-vs-KPI-when-to-use]] —— Jason 自己的判斷：何時用哪個
- [[synthesis/VRIO-framework-x-OKR]] — synthesis：用 VRIO lens 寫 OKR vs KPI-style OKR 的退化模式
