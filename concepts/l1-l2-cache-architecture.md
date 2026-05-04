---
title: L1/L2 Cache Architecture (Mehmet Goekce)
category: concepts
tags: [llm-wiki, knowledge-management, optimization]
aliases: [L1 L2 cache, Mehmet 兩層架構]
sources:
  - conversation:2026-05-04
  - https://github.com/MehmetGoekce/llm-wiki
  - https://mehmetgoekce.substack.com/p/i-built-karpathys-llm-wiki-with-claude
created: 2026-05-04T11:50:00+08:00
updated: 2026-05-04T11:50:00+08:00
summary: >-
  Mehmet Goekce 在 Karpathy 上加的 L1/L2 雙層快取：always-loaded 規則（L1）+ 按需查詢 wiki（L2），降低每次對話 context 開銷。
provenance:
  extracted: 0.8
  inferred: 0.2
  ambiguous: 0
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# L1/L2 Cache Architecture (Mehmet Goekce)

LLM 知識庫的二層快取設計：把「每次對話都需要的規則 / 身份 / 慣例」放 L1（自動載入），把「按需查詢的具體知識」放 L2（wiki 頁面）。降低每次對話的 context 開銷。

## What It Is

| 層 | 內容 | 何時載入 | 規模 |
|---|---|---|---|
| **L1** | 規則 / 身份 / credentials 路徑 / feedback 慣例 | 每次 Claude Code session **自動** | ~14 個小檔 |
| **L2** | wiki 頁面（concepts、entities、references 等） | **按需查詢** | 任意大 |

**關鍵：** L1 不入 git（可能含敏感規則、credential 路徑）；L2 可以入 git。

## How It Works

**L1 命名慣例（Mehmet 公開的 5 個範例）：**

| 前綴 | 用途 |
|---|---|
| `feedback_*.md` | 工作慣例規則（檔名規則 / 部署流程 / API limit） |
| `user_*.md` | 使用者身份、品牌、角色 |
| `reference_*.md` | credential 路徑、token rotation、外部資源指針 |

完整 14 檔清單 Mehmet 沒公開。

**Jason 既有 L1：** `~/.claude/projects/-Users-jason-Desktop-2026---AI-PM/memory/` 加上 `MEMORY.md` 索引 + 6 個 entry 檔（`user_role.md`、`feedback_*.md`、`project_llm_wiki_setup.md` 等）已是同結構。^[inferred] 不需重做，只要擴張規模到 ~14 檔。

**L2 命名慣例（Mehmet 用 Logseq）：**
`Wiki___Tech___Strapi.md`（triple-underscore 表示 namespace）。Obsidian 用資料夾結構就好，不需 triple-underscore。 ^[inferred]

## Pipeline 5 階段

Analyze & Extract → Scan Wiki → Update Pages（append-only，5-15 頁/次）→ Quality Gate（schema + credential 掃描）→ Report（commit git）

## When to Use

- L1 適合放：**每次都要的**規則、身份、跟 credential 路徑（路徑而非真 credential）
- L2 適合放：**需要時才查的**具體知識
- L1/L2 重複資訊靠 wiki-lint 抓

## 踩坑

- **平行 agent 寫入** 會把 unicode 字元偷偷簡化（umlauts → ASCII），中文場景對應到 NFC/NFD 轉換 → 必須**單線程 ingest** ^[extracted]
- **多 session 衝突** —— 視 wiki 為 shared resource
- **Hub page 預先建** —— 別預先建，從 ingest 自然長出來
- **Schema 過度設計感** —— 「過了 50 頁會感謝自己」，早定 schema 後續 retrofit 很痛

## Related

- [[concepts/llm-wiki-pattern]] —— Karpathy 原 pattern
- [[concepts/tiered-retrieval]] —— Ar9av 在 L2 之上加的查詢成本優化
- [[synthesis/why-Ar9av-over-alternatives]]
