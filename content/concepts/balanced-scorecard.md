---
title: Balanced Scorecard
type: concept
domain: mgmt
tags: [strategy, performance-management, mgmt]
aliases: [BSC, 平衡計分卡]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Ch2
created: 2026-05-20
updated: 2026-05-20
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.4
summary: >-
  Kaplan & Norton 提出的策略執行框架，把組織 performance 拆成 Financial（shareholder）/ Customer / Internal（操作流程）/ Learning & Growth 四維度，避免單看財務指標的短視。四階串接：Strategy Map → Performance Measures → Targets → Initiatives —— 沒有 strategy map 的 BSC 只是 dashboard。與 KPI（單一指標）、OKR（目標 + 關鍵結果）可疊用：BSC 提供維度框架，OKR cascade 目標，KPI 是具體 measures。Boeing 1996-2004 案例為反證 —— 過度追逐 shareholder value 致 R&D 砍光、737-MAX 災難。
lifecycle: draft
lifecycle_changed: 2026-05-20
ingest_method: read-subagent
---

# Balanced Scorecard

Kaplan & Norton 提出的策略執行框架，把組織 performance 拆成四個互補維度，避免單看財務指標的短視。^[extracted]

## 四個維度

| 維度 | 問題 | 衡量範例 |
|---|---|---|
| **Financial** | 對 shareholder 的表現？ | Market value growth、Seat revenue growth、Operating margin |
| **Customer** | 顧客怎麼看我們？ | On-time arrival rating、% seat occupancy、NPS |
| **Internal** | 我們必須擅長什麼？ | On-ground time、Defect rate、Cycle time |
| **Learning & Growth** | 我們能持續改善與創造價值嗎？ | % staff trained、Innovation pipeline、Employee engagement |

Grant Ch2 給 Regional Airline 範例：Financial（Market Value +25%/yr、Seat Revenue +20%/yr）、Customer（On-time 業界第一、98% 客滿）、Internal（On Ground Time <25 min、On-Time Departure 93%）、Learning（Ground crew skill coverage 70/90/100% over years 1/4/6）。^[extracted]

## 四階串接

`Strategy Map → Performance Measures → Targets → Initiatives`：先畫策略地圖（四維度間的因果關係），再選 measures，設目標，最後綁定 initiatives 與資源。沒有 strategy map 的 BSC 只是 dashboard。^[inferred]

## 與 [[concepts/KPI]] / [[concepts/OKR]] 的差別

- **KPI** 是單一指標，BSC 是「指標群+因果關係」的系統。
- **OKR** 是「目標+關鍵結果」的雙層結構（[[skills/setting-OKR]]），強調 stretch 與 alignment；BSC 強調**多維度平衡**與 strategy map 因果。
- 三者可疊用：BSC 提供維度框架，OKR 把每維度的目標 cascade，KPI 是 measures 層的具體指標。^[inferred]

## 為什麼需要

[[entities/wen-jin-feng]] 上課強調的 Pfeffer [[concepts/rule-of-one-eighth]]：知道 ≠ 做到。BSC 把「組織該關心的事」結構化、視覺化，迫使高層在資源配置時不能只盯財務數字。^[inferred]

Grant Ch2 的 Boeing 教訓（pursuing profit vs pursuing profit drivers）正是反例：1996-2004 過度追逐 shareholder value → 砍 R&D → 失去 Airbus 之爭 → 737-MAX 災難。BSC 的「Internal」「Learning」維度就是避免這種「短期財務勝利、長期競爭力流失」的緩衝。^[inferred]

## Open Questions / 待 wiki-challenge

- BSC 的四維度是否窮盡？stakeholder（員工、社區、ESG）需不需要第五維度？^[ambiguous]
- 指標選擇的主觀性：同一策略選不同 measures 結論會完全不同（source 未討論）
- 跨文化適用性：高 power distance 文化（東亞）的 BSC 是否容易淪為高層強加指標？^[ambiguous]

## Related

- [[concepts/KPI]] — 指標層
- [[concepts/OKR]] — 目標層
- [[concepts/performance-management]] — 母概念
- [[references/grant-contemporary-strategy-analysis]] — Ch2 源頭
