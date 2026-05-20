---
title: Customer Persona (顧客輪廓)
type: concept
domain: marketing
tags: [persona, customer-profile, targeting, kotler, mgmt]
aliases: [Customer Persona, persona, buyer persona, user persona]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch06
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch06 — 把抽象的 segment 變成具象的「一兩個假想 target 消費者」的詳細描繪，含 demographic / psychographic / geographic / attitudinal / behavioral 五維資訊。是 [[concepts/targeting]] 的 Tactical Targeting 工具，連接 segmentation 到 specific marketing actions。
provenance:
  extracted: 0.80
  inferred: 0.15
  ambiguous: 0.05
base_confidence: 0.70
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Customer Persona

## What It Is

> Personas = 一兩個「假想 target 消費者」的詳細描繪，含 demographic / psychographic / geographic / attitudinal / behavioral 資訊。
> ^[extracted Ch06 p.20]

意涵：把 segment 從統計集合（30-40 歲都市女性）變成具象人物（張曉華，38 歲，台北市內湖區外商行銷主管）。

## 為什麼需要 Persona

Segment 是 abstract、persona 是 concrete：

- Segment 給 marketing planner 用
- Persona 給 product designer、copywriter、UX designer 用

意涵：persona 是 **bringing segments to life** — 把 [[concepts/market-segmentation]] 的 output 變成 product/UX team 能直接用的人物腳本。

## Persona 包含什麼

Kotler 列五維資訊：^[extracted Ch06]

| 維度 | 內容 |
|---|---|
| **Demographic** | 年齡 / 性別 / 收入 / 教育 / 職業 |
| **Psychographic** | 價值觀 / 生活風格 / 人格特質（VALS）|
| **Geographic** | 居住地 / 工作地 / 城市類型 |
| **Attitudinal** | 對品類的態度（信賴 / 嘲諷 / 中立） |
| **Behavioral** | 使用習慣 / 購買頻率 / loyalty status |

## Persona 建構方法

Kotler 提到用 **multivariate analysis**：^[extracted]

- Cluster analysis 把客戶分群
- Factor analysis 找潛在維度
- 從 cluster centroid 構建 representative persona

意涵：**Persona 不是憑空編的**，是從 marketing research data 統計推導出的具象化。

## Persona 的應用層

不同團隊用 persona 的方式不同：

| 團隊 | 用法 |
|---|---|
| **Marketing** | 寫 copy / 設計 campaign 訴求 |
| **Product** | 決定 feature priority / 設計 user flow |
| **UX** | 寫 user story / 設計 information architecture |
| **Sales** | 設計 sales script / 預測反對意見 |

## 與其他 framework 的關係

### vs JTBD（Christensen Jobs-to-be-Done）

對比：

| 框架 | 焦點 |
|---|---|
| **Persona** | 「誰」買 — 人物畫像 |
| **JTBD** | 「為什麼」買 — 任務情境 |

兩者互補不衝突 — Persona 給「誰」，JTBD 給「Hire 你做什麼工作」。

教師批註（Ch04）：Buying center 與 JTBD struggling moments 都在拆解「決策不是單人事件」。^[inferred from instructor annotation]

### vs Buyer Persona vs User Persona

- **Buyer Persona** — 採購決策者（B2B 場景）
- **User Persona** — 實際使用者
- 在 B2B 中兩者常分離，B2C 中常合一

對應 [[concepts/buying-center]] — B2B 場景下要為 7 角色各做 persona。

### vs Empathy Map

Empathy Map（Says / Thinks / Does / Feels）是 persona 的視覺化變體，焦點在「同理而非畫像」。

## Source 反例 / 質疑

- **Persona 的代表性問題** — 一兩個 persona 怎能代表整個 segment？^[inferred — 隱含批評]
- **Persona 過於具象的副作用** — 團隊容易把 persona 當「真實的人」，誤把 fictional traits 當真實需求。^[inferred]
- **Persona 老化** — 寫好的 persona 一年後可能不符合新客戶輪廓，但團隊仍照舊使用。^[inferred — 隱含批評]
- **Persona 的多樣性盲點** — Single persona 可能反映 designer 自己的偏見（如多數 SaaS persona 都是 "白人男性 30 歲"）。^[inferred]

## Jason 觀察：醫療 AI 的 Persona

EBM PACS / AI 的 multi-persona 規劃：^[inferred — Jason 個人延伸]

因為醫療採購是 [[concepts/buying-center]] 多角色，需要為**每個角色**建 persona：

### Persona A：放射科主任（Influencer + Decider）
- 50 歲，醫學中心放射科主任
- 學會理事，每年參加 RSNA
- 痛點：科內年輕醫師工作負荷大、晚班報告品質不穩
- 對 AI 信賴度：中等（看過很多 over-claim）
- 觸發購買：科內 KPI 壓力 + KOL 同行使用

### Persona B：IT 主管（Influencer + Gatekeeper）
- 45 歲，醫學中心 IT 部門主任
- 痛點：PACS 整合複雜、外部 SaaS 資安風險、合規
- 對 AI 信賴度：低（更在乎 stability 與 security）
- 觸發購買：放射科要求 + 院長指示

### Persona C：年輕放射科醫師（User）
- 32 歲，住院醫師 / 主治
- 痛點：每天 200+ 片要看，加班晚十點
- 對 AI 信賴度：高（喜歡 fancy tech）
- 觸發購買：實際 demo 中能看到 workflow 加速

### Persona D：院長（Approver）
- 60 歲，行政背景
- 痛點：評鑑、減誤診、健保支付
- 對 AI 信賴度：依靠 KPI 與 KOL 推薦
- 觸發購買：總體 ROI + 競爭醫院 pressure

意涵：**EBM 行銷材料不能單一 persona** — 對 4 個 persona 要 4 套訊息。

## Related

- [[concepts/targeting]] — Persona 是 Tactical Targeting 工具
- [[concepts/market-segmentation]] — Persona 從 segment 推出
- [[concepts/buying-center]] — B2B 多 persona 對應
- [[concepts/STP-framework]] — Persona 在 STP 流程中
- [[references/kotler-keller-chernev-marketing-management-16e]]
