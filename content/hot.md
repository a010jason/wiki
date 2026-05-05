---
title: Hot Cache
updated: 2026-05-05T15:00+08:00
---

# Hot Cache

*A ~500-word semantic snapshot of recent activity. Updated after every major write operation.*

## Recent Activity

- [2026-05-05 15:00] INGEST — Phase 1 pilot smoke：溫金豐 2023/8/20 OKR 課程 PDF ingest，產出 7 頁（OKR / KPI / performance-management / setting-OKR / wen-jin-feng / measure-what-matters-doerr-2018 / OKR-vs-KPI-when-to-use）
- [2026-05-04 11:50] CAPTURE — LLM Wiki 建置 session 存進 wiki，產出 6 頁（1 session journal + 3 concepts + 1 entity + 1 synthesis）
- [2026-05-04 00:30] INIT — vault 建立於 /Users/jason/Documents/wiki

## Active Threads

- **Phase 1 pilot ingest：** smoke 跑 1/20 PDF 完成。下一步驗證 NFC、繁中乾淨度、lifecycle 掛載；通過後跑剩餘 19 個 Tier A PDF
- **CLAUDE.md 結構決議：** B-pragmatic（content/ 為 vault root）；`.env` 已指過去
- **Tier B/C 候選：** Tier B（ESG / 管理專題研討 / 企業經營與倫理 / 管理經濟學）等 Tier A 跑完再評估；Tier C（會計 / 財管教科書）原則不 ingest

## Key Takeaways

- 績效管理有兩條互補路線：evaluation（KPI）vs development（OKR），不是替代
- OKR 三大原則：困難度（會不舒適 + 沒發生過 + 確實有機會）、自下而上參與、組織透明
- KR 寫法 = 「執行方法 + 結果（impact）」；只寫方法 → KPI 化，只寫結果 → 難追蹤
- L1（`~/.claude/projects/.../memory/`）+ L2（此 wiki）是兩層快取，不重做 L1
- Tiered retrieval 是查詢成本分層**不是**回答深度
- 全域裝 skills 便利性 > 干擾風險

## Flagged Contradictions

*None yet.*

## Open Questions（待驗證）

- Ar9av 是否保留 hand-edit
- 中文 NFC vs NFD 是否被偷偷轉換 ← smoke 後檢查
- `claude-history-ingest` 會不會洩漏 credentials
- Schema 撐到 50+ 頁是否壞
- OKR + KPI 混合制在台灣業界（尤其醫療業）落地的細節 — 需要 wiki-research 或補 ingest 釐清
- Doerr 在《Measure What Matters》如何處理 OKR 與獎酬連動 tension — 需要直接 ingest 該書
