---
title: Jason 的醫療 AI 筆記
---

醫療 AI PM 的個人長期知識庫——管理、醫療影像 AI、PACS / FHIR、學習筆記跨工作累積。

<div class="stats-row">
  <div class="stat-item">
    <div class="stat-number">4</div>
    <div class="stat-label">概念條目</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">2</div>
    <div class="stat-label">洞察 / 編譯摘要</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">1</div>
    <div class="stat-label">實體</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">1</div>
    <div class="stat-label">日誌條目</div>
  </div>
</div>

## Concepts

- [[concepts/llm-wiki-pattern]] — Karpathy 提的三層架構 + ingest/query/lint 三大操作
- [[concepts/l1-l2-cache-architecture]] — Mehmet 的二層快取設計：always-loaded 規則 + 按需查詢 wiki
- [[concepts/tiered-retrieval]] — Ar9av 的查詢成本分層機制（不是回答深度）
- [[concepts/conways-law]] — 組織結構決定系統架構，1968 軟體定律延伸到 AI 工作流設計

## Entities

- [[entities/Ar9av-obsidian-wiki]] — Claude Code 原生 LLM Wiki 工具，25 個 skills

## Synthesis

- [[synthesis/why-Ar9av-over-alternatives]] — 為什麼選 Ar9av 而非 obsidian-llm-wiki / Mehmet / nvk / kytmanov
- [[synthesis/critical-llm-wiki-three-step]] — Distillation → 質疑 → 對標 三步法，Karpathy 原版 + 批判層

## Journal

- [[journal/2026-05-04-llm-wiki-setup]] — 從零搭起個人 LLM Wiki：選工具、建 vault、客製規範、全域裝
