---
title: G-STIC vs OKR vs SMART — 三種目標管理框架的層級差異
type: synthesis
domain: mgmt
tags: [G-STIC, OKR, SMART, goal-setting, planning, mgmt]
aliases: [G-STIC vs OKR vs SMART]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch02
  - book:Doerr-2018-Measure-What-Matters
  - lecture:2023-08-20-溫金豐-OKR
created: 2026-05-20
updated: 2026-05-20
summary: >-
  三個目標管理框架在不同層級服務不同目的。G-STIC 是行銷規劃的整體骨幹（5 步驟覆蓋目標到 control）。OKR 是組織級目標管理（Objectives + Key Results）。SMART 是個人任務級的 goal checklist。三者並用而非互換 — G-STIC 的 G 步驟可以用 OKR 表達，OKR 內部的 KR 可以用 SMART 檢核。
confidence: medium
provenance:
  extracted: 0.45
  inferred: 0.50
  ambiguous: 0.05
base_confidence: 0.60
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# G-STIC vs OKR vs SMART

## 核心命題

三個常被混用的目標管理框架，其實**層級不同 + 用途不同**：

- **G-STIC**（[[concepts/G-STIC-framework]]）— 行銷規劃整體骨幹（5 步驟）
- **OKR**（[[concepts/OKR]]）— 組織級目標管理工具
- **SMART** — 個人任務級的 goal checklist（Specific / Measurable / Achievable / Relevant / Time-bound）

三者並用而非互換。

## 三框架對照表

| 維度 | G-STIC | OKR | SMART |
|---|---|---|---|
| **單位** | 行銷計畫（Marketing Plan） | 組織目標 + 量化結果 | 個人任務目標 |
| **層級** | Marketing Management | Organization-wide | Individual / Task |
| **元素** | Goal + Strategy + Tactics + Implementation + Control | Objective + Key Results | Specific / Measurable / Achievable / Relevant / Time-bound |
| **強項** | 整合 strategy + tactics + control | 自下而上 + 透明 + 衝刺週期 | 易記、易檢核 |
| **弱項** | 設計而非執行細節 | 不處理 strategy / tactics 內容 | 缺 Difficult 維度（過於 conservative） |

## 三框架如何串接

實務上三者可以**嵌套使用**：

```
G-STIC: Goal → Strategy → Tactics → Implementation → Control
        ↓
        用 OKR 表達：
        Objective: 在 Q4 進入醫學中心市場（境界）
        Key Results:
          1. 簽下 3 家教學醫院 POC
          2. 與 2 家 PACS vendor 簽 integration
          3. NPS > 60
        ↓
        每個 KR 用 SMART 檢核：
        KR 1: 「Q4 之前簽 3 家」
          S - Specific ✓
          M - Measurable ✓（3 家）
          A - Achievable ?（待評估）
          R - Relevant ✓
          T - Time-bound ✓（Q4）
```

## 各自的「Goal」概念差異

三框架都有「Goal」概念，但定義不同：

| 框架 | Goal 定義 |
|---|---|
| **G-STIC Goal** | Ultimate criterion for success（含 Monetary + Strategic + Quantitative + Temporal benchmarks） |
| **OKR Objective** | 境界式定性目標（不一定數字化） |
| **SMART** | Specific + Measurable + 時間錨點的具體 outcome |

意涵：G-STIC Goal 比 OKR Objective 更具體（含量化 benchmark），比 SMART 更宏觀（含 Strategic 維度）。

## 為什麼台灣業界容易混淆

很多公司把 OKR 當 SMART 用：

- 寫「Objective: Q4 營收 +30%」 — 這是 SMART，不是 OKR Objective
- OKR 的 Objective 應該是境界式（「成為亞洲成長最快 medical AI 公司」）

或把 OKR 當 G-STIC 用：

- 寫了 OKR 就以為有 strategy → 但 OKR 不涵蓋 Strategy 內容（target market + value prop）
- 需要先有 G-STIC 的 Strategy 步驟（5C + 3V → OVP），再用 OKR 表達 Goal

## Jason 觀察：醫療 AI PM 三框架並用

EBM 行銷規劃應該怎麼用？^[inferred — Jason 個人延伸]

### 年度行銷計畫（G-STIC）
- Goal：「神經影像 AI 在台灣醫學中心市占率達 X%」
- Strategy：[[concepts/STP-framework]] + [[concepts/customer-value-proposition]]
- Tactics：[[concepts/7Ts-marketing-tactics]] 的 7T 計畫
- Implementation：roadmap、預算、人力
- Control：[[concepts/marketing-dashboard]] 四 pathway

### 季度目標（OKR）
- Objective：擴大教學醫院 footprint（境界）
- KR 1：3 家新教學醫院簽 POC
- KR 2：學會 podium 發表 2 篇
- KR 3：媒體報導 5 則

### 個人任務（SMART）
- 「2026 年 8 月底前 PowerPoint 完成台大醫院 POC 提案」（SMART checklist）

意涵：**三框架對應三時間尺度**（年 / 季 / 月），不是替代關係。

## Open Questions

- OKR 與獎酬連結的 tension（[[concepts/OKR]] 提到）在醫療業是否更明顯？醫師 / 業務的 dual-track 獎酬該如何設計？
- G-STIC 的 Control 步驟與 [[concepts/marketing-dashboard]] 的關係是否該獨立成 skill 頁（marketing-control-loop）？
- 三框架是否可以用單一 metadata schema 連起來（讓 OKR 自動 trace 到 G-STIC Goal）？

## Related

- [[concepts/G-STIC-framework]] — Kotler 行銷骨幹
- [[concepts/OKR]] — Doerr / Intel 目標管理
- [[concepts/KPI]] — OKR 對照組
- [[skills/setting-OKR]] — 怎麼設 O 與 KR
- [[synthesis/OKR-vs-KPI-when-to-use]] — Jason 自己的 OKR vs KPI 判斷
- [[concepts/marketing-dashboard]] — G-STIC Control 工具
- [[references/kotler-keller-chernev-marketing-management-16e]]
- [[references/measure-what-matters-doerr-2018]]
