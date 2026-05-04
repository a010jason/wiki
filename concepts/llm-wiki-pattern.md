---
title: LLM Wiki Pattern (Karpathy)
category: concepts
tags: [llm-wiki, knowledge-management, architecture]
aliases: [Karpathy LLM Wiki, three-layer architecture]
sources:
  - conversation:2026-05-04
  - https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
created: 2026-05-04T11:50:00+08:00
updated: 2026-05-04T11:50:00+08:00
summary: >-
  Karpathy 提的 LLM 自動維護式知識庫 pattern，三層架構（raw / wiki / schema）+ ingest/query/lint 三大操作。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# LLM Wiki Pattern (Karpathy)

由 Andrej Karpathy 在 2026 年 4 月發布的 gist 提出，用 LLM 自動維護的純 markdown wiki 取代兩個對照組：RAG（每次查重做、慢）和傳統筆記（人類維護、會死）。

## What It Is

三層架構：

1. **Raw sources（不可變）** —— 原始文件、PDF、對話 export，系統不修改
2. **The wiki（LLM 維護）** —— 互連的 markdown 頁面，由 LLM 自動寫入與更新
3. **The schema（規範）** —— `CLAUDE.md` / `AGENTS.md` 規定 LLM 如何維護

## How It Works

**三大操作：**

- **Ingest** —— 一個 source 進來，觸發 10-15 頁更新
- **Query** —— 搜 wiki 答完問題後**把好答案 file 回去** wiki（自我成長機制）
- **Lint** —— 找矛盾、孤兒頁、缺的交叉引用

**頁面四種型態：** entity / concept / source / synthesis

**兩個必備檔案：**
- `index.md` —— 每頁一行 summary + link
- `log.md` —— append-only 操作紀錄

## When to Use

適合：
- 個人長期知識累積，跨專案、跨工作
- 已用 LLM 工具為主工作流的場景

不適合：
- 單一專案的 doc / wiki（用 README 即可）
- 需要即時協作的場景（多 agent 平行寫入會踩坑） ^[inferred]

## 思想源頭

1945 Vannevar Bush 的 Memex（trail-following 知識庫）；Bush 沒解決的「誰維護」問題現在交給 LLM。Karpathy 原話：「You never (or rarely) write the wiki yourself — the LLM writes and maintains all of it.」

## Related

- [[concepts/l1-l2-cache-architecture]] —— Mehmet 在 Karpathy 上加的優化
- [[concepts/tiered-retrieval]] —— Ar9av 加的查詢成本優化
- [[entities/Ar9av-obsidian-wiki]] —— 此 pattern 的 Claude Code 實作
