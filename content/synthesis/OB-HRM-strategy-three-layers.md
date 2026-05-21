---
title: OB → HRM → Strategy 三層整合
type: synthesis
domain: mgmt
tags: [synthesis, HRM, OB, strategy, RBV, three-layer, mgmt]
confidence: medium
sources:
  - id: NYCU-EMBA-HRM-Lecture-20240224
    type: lecture-slide
    rel_path: 組織與人力資源管理/20240224.pdf
    pages: 3
    sha256: dc6717c33d88feb9f565e10ea5b08a94a4863b38ac694e2d636c10c3cebc7f2f
    ingested_commit: pending
created: 2026-05-21
updated: 2026-05-21
summary: >-
  OB / HRM / Strategy 是「為什麼 / 怎麼做 / 做什麼」三層整合而非平行學科：OB 解釋個體與群體為何這樣行動（why），HRM 是把 OB 落地為 employment lifecycle 制度（how），Strategy 是公司方向決定 HRM 該對齊什麼（what）。三層的 leverage 點：Strategy 設方向、HRM 設系統、OB 解釋為什麼系統會 work / 不 work。
provenance:
  extracted: 0.45
  inferred: 0.55
  ambiguous: 0.0
base_confidence: 0.6
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# OB → HRM → Strategy 三層整合

## 立場

OB、HRM、Strategy 不是三門平行學科，是同一個「人如何在組織中創造價值」問題的**三層解析**：

```
Strategy   = What  ← 公司要往哪個方向、競爭優勢從哪來
   ↓ (translates to demand)
HRM        = How   ← 招/訓/評/酬怎麼設計才能支撐 Strategy
   ↓ (rests on)
OB         = Why   ← 為什麼這個 HRM 設計會讓員工這樣行動
```

跳層思考會踩雷：

- **跳過 OB 做 HRM** → 政策設計違反人性，制度上線就走樣
- **跳過 HRM 做 Strategy** → 策略寫得漂亮但落地失敗（[[concepts/markops-marketing-operations-framework]] 第 5 個 sloppiness 徵兆 = implementation gap）
- **跳過 Strategy 做 HRM** → HR 成為孤立部門，淪為 Personnel Management

## 證據鏈

### 1. 20240224 課堂的直接論述

教師補充直接點明：

> **「根據 OB 的研究結果，來作為 HRM 的根據（nuts-and-bolts）」**^[inferred from instructor annotation]

—— 把 OB 視為 HRM 的「螺絲螺帽」工具庫。

### 2. RBV / VRIO 在三層的延展

同一個 RBV 框架在三層有不同角色：

| 層 | RBV 應用 | 對應 wiki 頁 |
|---|---|---|
| **Strategy** | 公司資源（含人才）作為 sustained advantage 來源 | [[concepts/resource-based-view]] (Grant Ch5) |
| **HRM** | HR 系統如何構成 VRIN | [[concepts/SHRM-three-perspectives]] (溫金豐 Ch3) |
| **OB** | 個體職能 / 動機 / 公民行為作為 inimitable 微基礎 | [[concepts/job-performance]] / [[concepts/organizational-citizenship-behavior]] |

^[inferred]

—— RBV 不是「策略課用一次就丟」的概念，是三層共用的解析工具。

### 3. Job Performance 三層次的 cross-cutting

20240224 課堂引用 Colquitt 的 Job Performance 三層次：

- **Task Performance**（[[concepts/task-performance]]）→ 個體層級的 OB 結構
- **Citizenship Behavior**（[[concepts/organizational-citizenship-behavior]]）→ 群體層級的 OB / HRM 連結
- **Counterproductive Behavior**（[[concepts/counterproductive-workplace-behavior]]）→ 反向行為的 HRM 預防

而 HRM 的「**Performance Appraisal Methods**」（[[concepts/performance-appraisal-methods-six]]）就是這三層的測量工具。Strategy 則決定**哪個層次的績效該被優先獎勵**（cost leadership 偏 task performance；differentiation 偏 citizenship behavior）。^[inferred]

### 4. RBV / SHRM 三派觀點對應 Strategy → HRM

溫金豐 Ch3 的 SHRM 三派 ([[concepts/SHRM-three-perspectives]])：

| SHRM 派 | 三層位置 |
|---|---|
| **RBV** | Strategy → HRM 的傳遞鏈（HR 系統 = inimitable 資源） |
| **Best Practice** | HRM 內部的「universal 怎麼做」（不問 Strategy） |
| **Contingency** | Strategy → HRM 的條件式對齊 |

—— 三派裡只有 **Best Practice** 在三層中**單獨蹲在 HRM 層**，這也是它被批評「忽視 Strategy」的原因（Pfeffer's Rule of 1/8 = 大多數公司因為 Strategy 抽離只拿到 12.5% 的 best practice 效益）。^[inferred]

### 5. Five Forces / 5C / PESTLE 並排不是 Strategy 的全部

[[synthesis/5C-vs-PESTLE-vs-Porter-five-forces]] 已經點出三框架的 unit-of-analysis 差異 — 三框架都是「**Strategy 對外**」的分析工具，但 HRM 與 OB 對外只透過 Strategy 間接接觸：

```
外部環境 → (5C/PESTLE/5Forces) → Strategy → HRM → OB
```

—— **OB 部門幾乎沒有「對外分析」的必要**（除非是「跨文化管理」這類特殊主題，[[entities/wen-jin-feng]] 0827 課程涵蓋）。

## Implication

### 對 HRM 部門

- **不能只懂 best practice** —— 必須上學一層 Strategy（搞清楚公司要什麼）+ 下學一層 OB（搞清楚員工會怎麼反應）
- HRBP 模型（[[concepts/ulrich-hr-roles]]）的關鍵假設就是 HR 要能跨三層對話

### 對 PM / 策略人員

- 寫 strategy roadmap 時必須**同時設計 HRM 系統**（資源配置 + 人才計畫），否則只是空中閣樓
- Markops 框架 ([[concepts/markops-marketing-operations-framework]]) 的「1E + 5C + STP + 7T → 動態調整」也是 HRM 適用的

### 對 Jason 個人

- 在 ebmtech 規劃醫療 AI 產品時，要對應思考：(a) Strategy 層（差異化 vs 成本）、(b) HRM 層（招到對的醫療 AI 工程師、培訓成本）、(c) OB 層（跨領域團隊的協作衝突、醫師 + 工程師的 dual identity）
- 跨團隊衝突的 root cause 多半在 **Strategy 不清楚 → HRM 制度衝突 → OB 表面化為個人摩擦**

## Counter-arguments / Open Questions

- **OB → HRM 單向是否成立？** 反向也存在 — HRM 制度創造的 OB 現象（例如 forced ranking 引發 [[concepts/groupthink]] 抑制效應）。三層不是純單向。^[ambiguous]
- **Strategy 是否真的可以 cascade 到 HRM？** 在新創公司可能；在大企業 HRM 慣性 > Strategy 變動速度，反向是 HRM 限制 Strategy 可選空間（[[concepts/organizational-inertia]]）
- **「跨領域」管理是不是第四層？** 例如跨文化、跨地域、跨產業 — 是不是該獨立成第四層 axis？或仍是 Strategy 的子集？

## 對既有 hot.md takeaway 的對接

hot.md 既有句：

> **OB vs HRM vs Strategy：OB 是 why、HRM 是 how、Strategy 是 what**

—— 本頁把這句話展開成完整論述 + 證據鏈。

## Related

- [[concepts/SHRM-three-perspectives]] — RBV / Best Practice / Contingency 三派
- [[concepts/ulrich-hr-roles]] — HRBP 跨三層對話
- [[concepts/job-performance]] / [[concepts/task-performance]] / [[concepts/organizational-citizenship-behavior]] / [[concepts/counterproductive-workplace-behavior]] — OB 層的具體
- [[concepts/resource-based-view]] — Strategy 層 RBV
- [[references/wen-2023-HRM-textbook]] — HRM 教科書
- [[references/colquitt-OB-textbook]] — OB 教科書
- [[references/grant-contemporary-strategy-analysis]] — Strategy 教科書
- 2026-05 — 本 synthesis 的當時 context
