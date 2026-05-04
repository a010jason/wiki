---
title: Conway's Law
category: concepts
tags: [software-engineering, organization-design, mental-model]
aliases: [康威定律, organizational structure determines system architecture]
sources:
  - https://www.melconway.com/Home/Conways_Law.html
  - https://codotx.com/news/llm-wiki-compile-blog-knowledge-base/#section-2
  - conversation:2026-05-04
created: 2026-05-04T12:00:00+08:00
updated: 2026-05-04T12:00:00+08:00
summary: >-
  Melvin Conway 1968 年提出：組織的溝通結構會反映在它設計出的系統架構上。1968 年只談軟體，但延伸到 AI 工作流設計時揭示「人類組織思維可能正是 AI 團隊失敗主因」。
provenance:
  extracted: 0.6
  inferred: 0.4
  ambiguous: 0
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# Conway's Law

> "Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure."
> — Melvin Conway, 1968

「組織結構決定系統架構」—— 設計系統的組織，會產出**反映其溝通結構**的設計。

## What It Is

Melvin Conway 在 1968 年的論文 "How Do Committees Invent?" 提出。原本是觀察：**軟體系統的模組邊界，往往對應到組織的部門邊界**。例如：

- 4 人團隊寫編譯器 → 會做出 4 階段編譯器
- 前後端兩個獨立團隊 → 系統一定有清楚的 API 邊界
- 微服務架構流行的時代，組織也跟著切成小團隊（微服務 ≈ 小團隊）

## How It Works

**反向應用（Inverse Conway Maneuver）：** 想要某種系統架構，就**先重組組織**，讓溝通結構自然產出該架構。

這是為什麼很多公司轉型微服務時要先做組織改造 —— 不改組織只改 code 是反 Conway's Law，會被組織重力打回原型。 ^[inferred]

## When to Use

- 設計大型系統前先看組織圖
- 跨團隊整合系統卡住時，問「這個邊界對應到組織哪條線」
- 評估技術決策時，問「這個架構需要什麼樣的組織才撐得起」

## 在 AI 工作流的延伸

這是 [[synthesis/critical-llm-wiki-three-step]] 第三步「對標」的**範例**。

**情境：** 寫「Paperclip 打造 AI 虛擬公司」的文章 → 對標拉出 Conway's Law。

**洞察：** 那篇文章的 AI 團隊編制是 **CEO + PM + 設計師 + 工程師 + QA**，直接複製了人類公司的組織結構。但 AI 的協作模式**可能需要完全不同的組織設計** —— CEO 角色的失敗可能正是因為**人類的階層管理邏輯不適用於 AI 團隊**。 ^[inferred]

**普適結論：** 設計 AI 工作流時，容易不自覺地**套用人類組織的思維模式**，而這可能正是效果不好的原因。 ^[inferred]

## 對 PM 的啟示

| 場景 | Conway's Law 的提醒 |
|---|---|
| 組多 agent system | 先想 agent 之間的溝通結構，再決定 agent 數量 |
| 設計 AI 產品團隊 | 不要照搬「PM + 工程 + QA」這種人類分工 |
| 評估 AI 工具 | 看它預設的 agent 角色是不是無腦複製人類角色 |

## Related

- [[synthesis/critical-llm-wiki-three-step]] —— 對標方法論的範例
- [[concepts/llm-wiki-pattern]] —— LLM Wiki 也是「LLM 工作流的系統設計」，Conway's Law 適用
