---
title: 2026-05-04 LLM Wiki 建置 session
category: journal
tags: [llm-wiki, knowledge-management, obsidian, setup]
sources:
  - conversation:2026-05-04
created: 2026-05-04T11:50:00+08:00
updated: 2026-05-04T11:50:00+08:00
summary: >-
  從零搭起個人 LLM Wiki：選工具（Ar9av/obsidian-wiki）、建 vault、客製規範、全域裝完。Phase 4 試吃留待下次。
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# 2026-05-04 LLM Wiki 建置 session

*Session captured: 2026-05-04*

## Topics Covered

- LLM Wiki 研究脈絡（Karpathy / Mehmet / Ar9av / 5/2 社群動態）
- 工具選擇（為什麼選 Ar9av 不選 obsidian-llm-wiki v0.8.0）
- Vault 與 Source 心智模型
- Tier 1/2/3 retrieval 機制
- Schema 設計（從 Mehmet 8 namespace 改為 Ar9av 預設 9 個）
- 25 個 wiki skills 功能盤點
- Setup 全流程（vault 建立、衝突處理、Obsidian 對接、全域裝）

## Key Takeaways

1. **Wiki / Obsidian / Skill 是三個獨立概念。** Vault 是資料夾，Obsidian 是編輯器，wiki skills 是 LLM 維護工具，三者交疊但獨立。
2. **L1（已存在）+ L2（新建）** —— 既有 `~/.claude/projects/.../memory/` 已是 L1 結構，不必重做，只要擴張規模。詳見 [[concepts/l1-l2-cache-architecture]]
3. **Schema 不是從零畫**，工具有預設，只 namespace 需客製。
4. **Source 跟 wiki vault 不能在同一資料夾。** ^[inferred] 個人 wiki 的生命週期遠長於單一專案。
5. **全域裝（35 skills）** 共存於 `~/.claude/skills/`，便利性遠超干擾風險。

## Decisions Made

- **工具：** [[entities/Ar9av-obsidian-wiki]]，**不選** obsidian-llm-wiki v0.8.0（Ollama 降級）/ Mehmet/llm-wiki（Logseq）/ nvk/llm-wiki（過度特化）。完整邏輯見 [[synthesis/why-Ar9av-over-alternatives]]
- **Vault 位置：** `~/Documents/wiki/`，不放 AI PM repo 內（個人 vs 公司 / 生命週期 / git 歷史不污染）
- **Schema：** 用 Ar9av 預設 namespace（`concepts/entities/skills/references/synthesis/journal/projects/_archives/_raw`），**不**用 Mehmet 的 8-namespace 結構
- **Source dir：** `/Users/jason/Desktop/2026專案/AI PM/管理技能與策略`（11 個 MBA 主題、230 份 PDF，平均 4MB/檔，70% 估計有料）
- **Skills 範圍：** **全域裝**，35 個 skills（10 個原本 + 25 個 wiki-*）共存於 `~/.claude/skills/`
- **配置雙重：** `~/Documents/wiki/.env`（vault 內，project 啟動讀）+ `~/.obsidian-wiki/config`（home，全域 skills 讀）

## Setup 踩坑紀錄

- **空 Obsidian vault 巢狀資料夾：** `管理技能與策略/管理技能與策略/.obsidian` 是之前隨手建的，已移到垃圾桶
- **Skills/ namespace 衝突：** `npx skills add` 在 vault 頂層建 `skills/` 給 universal agents，跟 wiki schema 的 `skills/` namespace 衝突 → 改名 `.skills-universal/`
- **Obsidian 開錯 vault：** 第一次用 `open -a Obsidian ~/Documents/wiki` 結果它在裡面又建了個 `wiki vault/` 子資料夾 → 已清掉並修 `obsidian.json` registry

## Open Questions

- Ar9av 是否保留手動編輯（hand-edit preservation）—— 用之前要 dry-run 一頁驗證
- 中文 NFC vs NFD 是否被偷偷轉換（Mehmet umlauts 坑的中文版）—— 寫一段繁中後 ingest，diff 比對
- `claude-history-ingest` 抓對話會不會洩漏 credentials（MEMORY.md 含 1Password 路徑）—— 第一次跑前小範圍測
- 50+ 頁時 schema 是否壞 —— 累積 30 頁時跑 wiki-lint

## Phase 4（Pending）

下次自己在新 Claude Code session 跑 wiki-ingest，建議首選 `策略管理/1GAFA_S.pdf.pdf`（HBS 9-513-060 GAFA 案例，已確認內容豐富，**不要**選 Tiffany.pdf 那種雜記）。

## Related

- [[concepts/llm-wiki-pattern]]
- [[concepts/l1-l2-cache-architecture]]
- [[concepts/tiered-retrieval]]
- [[entities/Ar9av-obsidian-wiki]]
- [[synthesis/why-Ar9av-over-alternatives]]
