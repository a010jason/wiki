---
title: Buying Center (B2B 七角色決策結構)
type: concept
domain: marketing
tags: [B2B, buying-center, organizational-buying, kotler, mgmt]
aliases: [Buying Center, organizational buying, B2B 採購委員會]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch04
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch04 — B2B 採購決策不是單人事件，是多角色集體決策。七種角色：Initiators / Users / Influencers / Deciders / Approvers / Buyers / Gatekeepers。一個人可能扮多角色，同一角色也可能多人擔任。對醫療 AI PM 等同醫院採購委員會。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.80
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Buying Center

## What It Is

> Buying Center = 組織內所有參與某次採購決策的人員集合，扮演七種不同角色。
> ^[extracted Ch04 p.7]

意涵：B2B 採購不是 sales rep × 採購主管的單線關係，是多角色集體決策。

行銷者三問：^[extracted Ch04 p.10]
1. 誰是主要決策參與者？
2. 他們影響哪些決策、深度多少？
3. 他們用什麼評估標準？

## 七種角色

| 角色 | 中文 | 職責 |
|---|---|---|
| **Initiators** | 發起者 | 提出需求 / 啟動採購 |
| **Users** | 使用者 | 實際使用產品的人 |
| **Influencers** | 影響者 | 定義規格、影響決策（技術專家 / 顧問） |
| **Deciders** | 決策者 | 做最終選擇 |
| **Approvers** | 核准者 | 授權預算與決定 |
| **Buyers** | 採購者 | 執行採購、議價、簽約 |
| **Gatekeepers** | 守門員 | 控制資訊流（秘書、助理、IT 守門員） |

## 角色動態

七種角色可由不同人扮演，也可由同一人兼任多角色：^[extracted Ch04 p.8-9]

- 中小企業：CEO 可能同時是 Initiator / Decider / Approver / Buyer
- 大企業：七角色由七個不同部門 / 級別擔任

Buying center 的目的：**seek the best value from fewer and better suppliers**。

參與者各有不同利益、權威、地位、被說服敏感度，甚至使用**不同決策標準** — 同一個 RFP 在七雙眼睛中是七個不同的問題。

## Selling to Buying Centers

行銷 / 業務的工作不是「對採購主管簡報」，而是：^[extracted Ch04 p.10]

1. 識別所有七個角色
2. 為每個角色定制 message
3. 在不同時間點接觸不同角色
4. 確保 Gatekeeper 不擋住關鍵 information

## 與 [[concepts/business-buying-process]] 的關係

Buying Center 是「**誰**做決策」，Business Buying Process 是「**怎麼**做決策」。

八階段購買流程中每階段的「責任人」是 buying center 不同角色：

| 階段 | 主要角色 |
|---|---|
| Problem recognition | Initiator + User |
| Need description / Spec | User + Influencer |
| Supplier search | Buyer + Influencer |
| Proposal solicitation | Buyer |
| Supplier selection | Decider + Approver |
| Contract negotiation | Buyer |
| Performance review | User + Decider |

## 跨概念對照

### vs JTBD（Christensen Jobs-to-be-Done）

Buying Center 與 JTBD struggling moments 都在拆解「決策不是單人事件」，但：

- **JTBD** — 拆 user 的需求脈絡（情境、阻力、推力）
- **Buying Center** — 拆組織決策結構（角色、權力、評估標準）

兩者互補：JTBD 在 user 層，Buying Center 在組織層。同一個 B2B 採購要兩種框架並用。

### vs Sales Funnel

Sales funnel 是 leads → opportunity → close 的 progression，但 buying center 是同一個 deal 內部的**橫向角色分工**，與 funnel 正交。

## Source 反例 / 質疑

- **七角色清單沒有定量驗證來源 cite** — Webster & Wind 1972 原始模型在投影片未被 cite。^[inferred — 隱含批評]
- **角色界線不清** — Decider vs Approver 在多數實務情境難區分；source 未給判定標準。^[ambiguous]
- **角色穩定性** — 同一公司不同採購案，七角色可能由不同人擔任；source 未處理角色 fluidity。^[ambiguous]
- **SaaS / Product-Led Growth 的崩解** — End user 可自助試用、付費，buying center 七角色被壓縮到一人（典型如 Slack、Notion）；Kotler 框架是「正式採購」bias。^[inferred — 隱含批評]

## Jason 觀察：醫院採購委員會 = 經典 Buying Center

EBM PACS / AI 銷售場景下的七角色映射：^[inferred — Jason 個人延伸 / visibility-consideration: internal candidate]

| 角色 | 醫院內對應 |
|---|---|
| **Initiator** | 放射科主任（看到 workflow 痛點）/ 院長（推動數位轉型 KPI） |
| **User** | 放射科醫師、技師、住院醫師 |
| **Influencer** | 院內 IT 主管、KOL、外部學會專家、醫工部 |
| **Decider** | 放射科主任 + IT 主任 + 副院長（聯席） |
| **Approver** | 院長 / 董事會 / 採購委員會（大筆預算） |
| **Buyer** | 採購室 / 總務組 |
| **Gatekeeper** | 院長祕書、IT 部門 firewall 規範 |

關鍵啟示：
- **單純做 demo 給「採購窗口」是無效的** — 因為 Buyer 角色沒有評估能力
- **必須同時做 KOL 學會背書（Influencer）+ 工作流 demo（User）+ ROI 簡報（Approver）**
- **Gatekeeper 容易低估** — 醫院 IT 部門對外部 SaaS 整合的審核常常 block 整案
- **這也呼應 [[concepts/holistic-marketing]] 的 Relationship marketing 支柱** — 醫療 AI 不是賣產品給單點，是建立全院關係網

## Related

- [[concepts/business-buying-process]] — 8 階段購買流程
- [[concepts/buying-situations]] — Straight rebuy / Modified / New task 三型
- [[concepts/business-market-characteristics]] — B2B 10 大特徵
- [[concepts/customer-persona]] — 對 buying center 多角色都要做 persona
- [[concepts/STP-framework]] — Targeting 涵蓋 buying center 多角色
- [[references/kotler-keller-chernev-marketing-management-16e]]

- [[synthesis/STP-x-buying-center]] — Buying center 擴展 STP 到 B2B