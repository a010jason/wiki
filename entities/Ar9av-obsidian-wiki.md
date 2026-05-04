---
title: Ar9av/obsidian-wiki
category: entities
tags: [llm-wiki, tool, claude-code]
aliases: [obsidian-wiki, Ar9av, llm-wiki-skills]
sources:
  - conversation:2026-05-04
  - https://github.com/Ar9av/obsidian-wiki
created: 2026-05-04T11:50:00+08:00
updated: 2026-05-04T11:50:00+08:00
summary: >-
  Claude Code 原生的 LLM Wiki 工具，提供 25 個 skills（setup / ingest / query / capture / lint 等）。Jason 的個人知識庫工具。
provenance:
  extracted: 0.75
  inferred: 0.25
  ambiguous: 0
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# Ar9av/obsidian-wiki

Karpathy LLM Wiki pattern 的 Claude Code 實作，提供 25 個 skills 涵蓋 setup / ingest / query / capture / 維護 / 視覺化。Jason 在 2026-05-04 採用為個人知識庫工具。

## What It Is

- **GitHub：** https://github.com/Ar9av/obsidian-wiki
- **安裝：** `npx -y skills add Ar9av/obsidian-wiki --global --all`
- **全域配置：** `~/.obsidian-wiki/config`（vault path、source dir、claude history path）
- **Vault 位置：** `~/Documents/wiki/`

## 25 個 Skills 分類

### 🟢 每天會用（Top 5）

| Skill | 一句話 |
|---|---|
| `wiki-capture` | 把當前對話存進 wiki |
| `wiki-query` | 搜 wiki 答問題 |
| `wiki-status` | 看 source delta + wiki 健康度 |
| `wiki-ingest` | 文件變 wiki 頁 |
| `wiki-research` | 自主 web 研究 + 寫進 wiki |

### 🟡 偶爾用

`ingest-url` / `claude-history-ingest` / `data-ingest` / `wiki-synthesize`

### 🟠 維護用（季度）

`wiki-lint` / `cross-linker` / `tag-taxonomy`

### 🔵 視覺化

`wiki-dashboard`（需 Obsidian 1.8+ Bases）/ `wiki-export`（JSON / Neo4j / HTML）

### ⚪ 特殊狀況

`wiki-rebuild` / `wiki-setup` / `wiki-update` / `llm-wiki`（理論）/ `skill-creator` / `graph-colorize`

### 🔴 Jason 用不到（其他工具的 history ingest）

`codex-history-ingest` / `copilot-history-ingest` / `hermes-history-ingest` / `openclaw-history-ingest` / `wiki-history-ingest`

## How It Works

實作了 [[concepts/tiered-retrieval]] 機制 + [[concepts/llm-wiki-pattern]] 的 ingest/query/lint 三大操作。詳細決策邏輯見 [[synthesis/why-Ar9av-over-alternatives]]。

**`.manifest.json` delta tracking：** SHA-256 hash 比對，避免重複 ingest 同樣內容。

**Provenance tags：** `extracted`（預設）/ `inferred` / `ambiguous`，每個 claim 都標註。

**Multimodal：** 支援 PDF / 圖片（vision model verbatim 抄文字）/ 對話 JSONL export。

## Open Questions

- **Hand-edit preservation：** README 沒明寫保留手動編輯的行為。用之前要驗證（手編一頁 → 跑 ingest → 看編輯是否被吃）
- 中文 NFC/NFD 是否被偷偷轉換 ^[ambiguous]

## When to Use

- 個人長期知識庫（跨專案、跨工作）
- 已用 Claude Code 為主工作流
- 想要自動化 ingest + 手動潤稿並存

## Related

- [[concepts/llm-wiki-pattern]]
- [[concepts/tiered-retrieval]]
- [[synthesis/why-Ar9av-over-alternatives]]
- [[journal/2026-05-04-llm-wiki-setup]]
