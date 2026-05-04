---
title: Hot Cache
updated: 2026-05-04T11:50+08:00
---

# Hot Cache

*A ~500-word semantic snapshot of recent activity. Updated after every major write operation.*

## Recent Activity

- [2026-05-04 11:50] CAPTURE — LLM Wiki 建置 session 存進 wiki，產出 6 頁（1 session journal + 3 concepts + 1 entity + 1 synthesis）
- [2026-05-04 00:30] INIT — vault 建立於 /Users/jason/Documents/wiki

## Active Threads

- **LLM Wiki bootstrap：** vault 建好、規範寫好、全域裝完。Phase 4（試吃 wiki-ingest）下次接
- **首份 ingest 候選：** `策略管理/1GAFA_S.pdf.pdf`（HBS 9-513-060 GAFA 案例）

## Key Takeaways

- L1（已存在於 `~/.claude/projects/.../memory/`）+ L2（這個 wiki）是兩層快取，**不重做** L1
- Tiered retrieval 是查詢成本分層**不是**回答深度
- Vault / Source 是兩個不同概念：vault 是 wiki 的家，source 是要 ingest 的原料
- 全域裝（`~/.claude/skills/` 35 skills）便利性 > 干擾風險

## Flagged Contradictions

*None yet.*

## Open Questions（待 ingest 後驗證）

- Ar9av 是否保留 hand-edit
- 中文 NFC vs NFD 是否被偷偷轉換
- `claude-history-ingest` 會不會洩漏 credentials
- Schema 撐到 50+ 頁是否壞
