---
title: Hot Cache
updated: 2026-05-05T19:05+08:00
---

# Hot Cache

*A ~500-word semantic snapshot of recent activity. Updated after every major write operation.*

## Recent Activity

- [2026-05-05 20:10] VERIFY — 5 個已 ingest PDF 全部 pdfinfo 比對頁數確認完整。SOP：未來所有 PDF 必須 pdfinfo + 分批讀完才開始 distill
- [2026-05-05 20:00] AUDIT — OB Ch1 重讀 p.71-125（之前只讀到 p.70），補 2 新頁（contingency-approach、learning-from-failure）+ 更新 2 既有頁（加 5 Anchors、causation、meta-analysis、evidence-based mgmt）
- [2026-05-05 19:30] INGEST — Phase 1 pilot 5/20：Grant 策略管理 Ch1，產出 5 頁（strategy / strategic-fit / intended-vs-emergent-strategy / corporate-vs-business-strategy / grant-contemporary-strategy-analysis）
- [2026-05-05 19:05] MIGRATE — sources_dir 從本機 Desktop 搬到 Google Drive；4 個檔案 hash 重核全部 match（content 沒受影響）
- [2026-05-05 19:00] INGEST — Phase 1 pilot 4/20：OB 教科書 Ch1，6 頁
- [2026-05-05 18:00] INGEST — Phase 1 pilot 3/20：跨文化管理，4 頁
- [2026-05-05 17:00] INGEST — Phase 1 pilot 2/20：Agile Org，6 頁
- [2026-05-05 15:00] INGEST — Phase 1 pilot 1/20：OKR，7 頁

## Active Threads

- **Phase 1 pilot ingest：** **5/20 完成**。下一輪：策略管理組剩 4 個 PDF（ch07 + GAFA + Competing in the age of AI + Moderna）
- **Sources 路徑遷移：** 本機 Desktop → Google Drive `AI PM 資料/管理技能與策略/` ✅；hash 驗證全 match
- **CLAUDE.md 結構決議：** B-pragmatic（content/ 為 vault root）✅
- **Visibility filter（A）：** RemoveInternal plugin 已上 ✅
- **Tier B/C 候選：** Tier A 跑完再評估

## Key Takeaways

- **OB 三層次：** Individual ⊂ Group ⊂ Organization；任何一層議題都被外層影響
- **VRIO 四問：** Valuable / Rare / Inimitable / Organized 都 YES 才有 sustained advantage；OB 是 Inimitable 一柱
- **Pfeffer Rule of 1/8：** 1/2 不信 × 1/2 單點解 × 1/2 不持續 = 只有 12.5% 公司真正拿到 OB practices 的好處
- **OB vs HRM vs Strategy：** OB 是 why、HRM 是 how、Strategy 是 what
- 台灣 Hofstede profile：**高 PD (58) + 高集體 (17) + 偏陰柔 (45) + 高 UA (69) + 極長期 (93)** → agile 導入有結構性阻力
- CQ 提升路徑：**多國短期派外 > 單國長期**；英語能力比在地語言更顯著預測 CQ
- 敏捷組織 Denning 三大法則：**聚焦顧客 / 小就是美 / 網路式結構**；獲利是結果而非目的
- doing agile（局部 Scrum）≠ being agile（組織級轉型）；90% 主管想做、僅 10% 認為自己做到
- **OKR 不是獨立的制度** — 需要 agile 組織的整體配合（領導力、結構、HRM）
- 績效管理兩條互補路線：evaluation（KPI）vs development（OKR），不是替代
- 醫療業 agile 雙軌假說：**法規部分 waterfall + 模型/UX 部分 agile**（待 wiki-challenge 驗證）

## Flagged Contradictions

- 「OKR vs KPI 用環境變動性判斷」與「agile vs waterfall 用產品成熟度判斷」可能矛盾 — 醫療 AI 是「成熟產品在變動環境」，兩判準推不同結論。^[ambiguous]

## Open Questions（待驗證）

- Ar9av 是否保留 hand-edit
- 中文 NFC vs NFD 是否被偷偷轉換 ← smoke 後檢查
- `claude-history-ingest` 會不會洩漏 credentials
- Schema 撐到 50+ 頁是否壞
- OKR + KPI 混合制在台灣業界（尤其醫療業）落地的細節 — 需要 wiki-research 或補 ingest 釐清
- Doerr 在《Measure What Matters》如何處理 OKR 與獎酬連動 tension — 需要直接 ingest 該書
