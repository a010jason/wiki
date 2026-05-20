---
title: Intended vs Emergent Strategy（Mintzberg）
type: concept
domain: mgmt
tags: [strategy, Mintzberg, strategic-process, mgmt]
aliases: [Mintzberg strategy, intended emergent realized, design vs process]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Wiley-2022-Ch1
  - paper:Mintzberg-strategic-planning
created: 2026-05-05
updated: 2026-05-05
summary: >-
  Henry Mintzberg：策略不是純設計（top-down 規劃），也不是純過程（emergent），實際是兩者交集。Mintzberg 對 formal strategic planning 的 3 大批判：fallacy of prediction / detachment / formalization。
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Intended vs Emergent Strategy（Mintzberg 框架）

## 兩個極端

| 極端 | 機制 |
|---|---|
| **Strategy as Design（理性設計）** | Planning + rational choice → **INTENDED STRATEGY** |
| **Strategy as Process（過程演化）** | Many decision makers responding to multitude of external/internal forces → **EMERGENT STRATEGY** |

兩者都流向：**REALIZED STRATEGY**（真正執行的策略）

```
Strategy as Design                Strategy as Process
        │                                  │
        ↓                                  ↓
INTENDED STRATEGY  ──→  REALIZED  ←──  EMERGENT STRATEGY
                       STRATEGY
```

^[extracted]

## Mintzberg 的三個批判

對 formal strategic planning 的 3 個 fallacy（謬誤）：^[extracted]

### 1. The Fallacy of Prediction（預測的謬誤）
> The future is unknown.

formal planning 假設你能預測 5–10 年後的市場、技術、競爭者，但實際上未來不可知。**用預測為錨的計畫 = 先行失敗**。^[inferred]

### 2. The Fallacy of Detachment（分離的謬誤）
> Impossible to divorce formulation from implementation.

planning 部門寫出策略、operations 部門執行 —— 這個分工本身就是錯。**真正的策略洞察通常出現在執行的過程**，不在會議室。^[inferred]

### 3. The Fallacy of Formalization（形式化的謬誤）
> Inhibits flexibility, spontaneity, intuition and learning.

把策略形式化（PPT、KPI、Gantt）會壓抑彈性、自發、直覺、學習。**策略是動態活動，不是文件**。^[inferred]

## 對應到 Strategy 思維光譜

Jason 邊註整理（兩端對照）：^[extracted-from-margin]

| Strategy as Design | Strategy as Process |
|---|---|
| Analytic（SWOT, optimal） | Pivoting / Contingent（權變）/ Learning |
| 計畫導向 | 動態導向 |
| 理性選擇 | 試錯演化 |

實務不是非此即彼，而是 **plan + emerge** 並用：^[inferred]
- 用 design 設出**初始假設與方向**（intended）
- 用 process 在執行中**修正、學習、轉向**（emergent）
- 結果是 realized strategy

## 對應的當代框架

| Mintzberg | 當代延伸 |
|---|---|
| Emergent strategy | [[concepts/agile-organization]]（Denning 三大法則）|
| Process learning | [[concepts/scrum-method]]（迭代）|
| Fallacy of formalization | [[concepts/post-bureaucratic-mindset]] |
| Fallacy of detachment | OKR 的「自下而上參與」（[[concepts/OKR]]）|

→ 整個 agile 運動可看作 Mintzberg 1990s 批判的工程化。^[inferred]

## 對 ebmtech 等成熟產業的張力

> 註：以下是把框架套到自己工作的 hypothetical 思考，未跟主管或同事驗證。^[ambiguous]

醫療資訊業這類**監管 + 長銷售週期**產業，formal planning 仍有價值（合規流程、產品認證、客戶採購週期都需要計畫）。但 emergent strategy 在以下場景非用不可：
- AI 模型迭代（試了才知道）
- 新興市場進入（沒有歷史可比）
- 技術變革（雲端 / SaaS PACS 衝擊）

→ 雙軌：核心業務 design-heavy，新業務 process-heavy。對應 [[synthesis/agile-vs-waterfall-when-to-use]]。

## Related

- [[concepts/strategy]] —— 上層概念
- [[concepts/agile-organization]] —— Mintzberg emergent 的當代落地
- [[concepts/scrum-method]] —— process-based 工作模式
- [[concepts/OKR]] —— 嘗試把 design 與 process 結合的目標管理
- [[synthesis/agile-vs-waterfall-when-to-use]] —— Jason 的雙軌判斷
- [[entities/intel-NBI]] —— Intel CEO 世代（Noyce / Moore / Rock / Grove）對應 DRAM → Microprocessor → Internet 的策略轉折，部分 deliberate（Grove "Only the Paranoid Survive"）部分 emergent
- [[references/grant-contemporary-strategy-analysis]]

## Sources

- [[references/grant-contemporary-strategy-analysis]] Ch1
- 原典：Mintzberg, H. (1994). *The Rise and Fall of Strategic Planning*
