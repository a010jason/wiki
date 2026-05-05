---
title: Scrum Method
type: concept
domain: mgmt
tags: [scrum, agile, software-development, mgmt]
aliases: [Scrum, 敏捷方法, scrum framework]
sources:
  - lecture:2023-08-20-溫金豐-敏捷組織與敏捷方法
created: 2026-05-05
updated: 2026-05-05
summary: >-
  最普及的 agile method。三角色（Product Owner / Developers / Scrum Master）+ 短週期迭代（sprint, 1-4 週）+ 5 個會議（規劃／每日 stand-up／檢視／回顧 / refinement）。核心是「不一次做對位、靠迭代逼近 MVP」。
provenance:
  extracted: 0.75
  inferred: 0.2
  ambiguous: 0.05
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Scrum Method

## 與瀑布式對照

[[concepts/agile-organization|敏捷]] 思維最常見的具體實作。對照傳統 waterfall：^[extracted]

| 模式 | 流程 |
|---|---|
| **Waterfall（瀑布式）** | Business Requirements → System Requirements → Design → Build → Test → Deploy（單向） |
| **Scrum（敏捷式）** | Product Backlog → Sprint 規劃 → Sprint Backlog → 每日 Scrum → Sprint 執行 → Sprint 審查 → Sprint 回顧 → 下一 Sprint（迭代） |

## 三種核心角色

| 角色 | 職責 |
|---|---|
| **Product Owner（產品負責人）** | 對 Product Backlog 負責、決定優先序、代表客戶價值 ^[extracted] |
| **Developers / Team Members（開發人員）** | 自組織、自定迭代工作量、自定執行方式 ^[extracted] |
| **Scrum Master（敏捷教練）** | 通常是「關注流程」的人，移除障礙；不是命令者 ^[extracted] |

## Sprint 結構

- **長度：** 1–4 週的短週期（short cycle）^[extracted]
- **不是一次到位：** 每個 sprint 產出 **可能可交付的產品增量（Potentially Shippable Product Increment）**
- **80/20 法則：** 不追求完美交付，先交 80% 收 20% 風險 ^[extracted]

## 五種 Sprint 會議

| 會議 | 目的 |
|---|---|
| Sprint Planning | 決定本 sprint 要做什麼 |
| Daily Scrum（stand-up） | 每日同步進度、阻礙 |
| Sprint Review | 對 stakeholders 展示成果、收回饋 |
| Sprint Retrospective | 團隊內檢視流程、調整 |
| Backlog Refinement | 整理待辦項目、估算 |

^[extracted]

## Denning 的 10 條實務作法（Scrum 精神延伸）

來自 Denning 2018，溫金豐 2023 引述：^[extracted]
1. 工作以**短週期**整合
2. 管理者**不打斷**團隊工作
3. 團隊**對顧客**負責，非對管理者
4. 團隊**自定**完成所需時間
5. 團隊**自定**每迭代要做多少
6. 團隊**自定**每迭代執行方式
7. 每迭代結束時**評估自己**績效並產出成果
8. 透過使用者描述與觀點，**預設好工作目標**
9. 管理者**移除障礙**
10. 團隊**系統性檢視**並持續改善

## Open Questions（Jason 補）

> iOS 更新版有時候即使大量測試也不知道 bug — 像 SVS @ EBM 的情境。^[inferred]
>
> 這帶出 agile 在「錯誤代價高」場域（醫療、航空、金融）的張力 — 詳見 [[synthesis/agile-vs-waterfall-when-to-use]]。

> Scrum 的成功本質與 culture / ego / politics / fear 高度相關 — 真要 fix the **process** not **product**。^[inferred] 引這條的 Jason 邊註提示 Scrum 失敗常常不是流程問題，是組織心理問題。

## Related

- [[concepts/agile-organization]] —— Scrum 是 agile org 的工具之一
- [[concepts/agile-manifesto]] —— 2001 的精神宣言
- [[skills/leading-agile-transformation]] —— Scrum 之上的組織級轉型
- [[concepts/OKR]] —— 都強調自主、透明、迭代

## Sources

- [[entities/wen-jin-feng]] 2023/8/20 課程
- [[references/denning-2018-age-of-agile]]
