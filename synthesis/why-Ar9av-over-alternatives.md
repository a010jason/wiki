---
title: 為什麼選 Ar9av/obsidian-wiki 而非其他 LLM Wiki 方案
category: synthesis
tags: [llm-wiki, decisions, claude-code]
aliases: [Ar9av decision rationale, LLM Wiki tool choice]
sources:
  - conversation:2026-05-04
created: 2026-05-04T11:50:00+08:00
updated: 2026-05-04T11:50:00+08:00
summary: >-
  針對 Jason（醫療 AI PM、Claude Code 重度使用者）的決策邏輯：選 Ar9av 因為原生 Claude Code 整合，其他方案各有不適配理由。
provenance:
  extracted: 0.5
  inferred: 0.45
  ambiguous: 0.05
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# 為什麼選 Ar9av/obsidian-wiki

## Context

2026 年 4 月底到 5 月初社群冒出多個 LLM Wiki 工具（5/2 obsidian-llm-wiki v0.8.0、kytmanov/obsidian-llm-wiki-local、nvk/llm-wiki、Mehmet/llm-wiki 等）。Jason 是醫療 AI PM at ebmtech，Claude Code 重度使用者，需要長期累積管理 + 醫療 AI 知識。

## Decision

採用 [[entities/Ar9av-obsidian-wiki]]，全域裝。

## Reasoning

### ❌ 為什麼不選 obsidian-llm-wiki v0.8.0
- 主打 **Ollama 本地 LLM** → 跟 Claude 4.7 工作流脫節，等於降級
- 是 Python CLI 不是 Claude Code skill → 跟既有工作流不接軌
- Hand-edit preservation 是賣點（值得 Ar9av 學習），但對 PM 場景仍重要 → 列為 [[entities/Ar9av-obsidian-wiki]] 的 open question 待驗證

### ❌ 為什麼不選 Mehmet/llm-wiki
- **Logseq-based** —— 檔案內含 block IDs（`((block-id))` 語法），不是純 markdown，LLM 讀寫成本高
- 概念（L1/L2 架構）值得抄，但實作不能直接抄 → [[concepts/l1-l2-cache-architecture]]

### ❌ 為什麼不選 nvk/llm-wiki
- 主打 parallel multi-agent research + thesis-driven investigation → 太特化於研究場景 ^[inferred]
- PM 日常知識管理用不到這個層次的功能

### ❌ 為什麼不選 kytmanov/obsidian-llm-wiki-local
- 100% 本地 Ollama 限制 → 同樣降級

### ✅ 為什麼選 Ar9av
- **25 個 Claude Code skills** → 原生整合（不是另外一個 CLI 工具）
- `claude-history-ingest` 直接挖 `~/.claude/projects/` 對話歷史 → 過去所有 session 的洞察可自動入 wiki
- **Tiered retrieval** → wiki 大規模成長後查詢成本仍可控 → [[concepts/tiered-retrieval]]
- **Multimodal ingest** → Jason 有 230 份 PDF + 圖片，原生支援
- `npx skills add` 一行裝完 → 上手成本低

## Implications

- 中文編碼風險仍要警覺（Mehmet umlauts 坑的中文版） → CLAUDE.md 已寫死「NFC normalization + 單線程 ingest + 繁體不簡轉繁」三條規則
- Hand-edit preservation 待驗證 → 用之前先測一頁
- 全域裝後 `~/.claude/skills/` 從 10 個變 35 個，描述空間略增但無功能干擾
- 中文場景下 Ar9av 沒人實測過 → Jason 是早期使用者，需自己回報踩坑 ^[inferred]

## Trade-offs Accepted

| 接受的代價 | 換來的好處 |
|---|---|
| 25 個新 skills 描述空間 | 原生 Claude Code 整合 |
| Hand-edit preservation 不確定 | Ingest 成本低、自動化程度高 |
| 沒人實測中文場景 | 早期使用 → 可貢獻回 community |

## Related

- [[concepts/llm-wiki-pattern]]
- [[concepts/l1-l2-cache-architecture]]
- [[concepts/tiered-retrieval]]
- [[entities/Ar9av-obsidian-wiki]]
- [[journal/2026-05-04-llm-wiki-setup]]
