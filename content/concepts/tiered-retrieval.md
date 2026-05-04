---
title: Tiered Retrieval（Tier 1/2/3）
type: concept
tags: [llm-wiki, retrieval, optimization]
aliases: [Tier 1 2 3, 分層檢索]
sources:
  - conversation:2026-05-04
  - https://github.com/Ar9av/obsidian-wiki
created: 2026-05-04T11:50:00+08:00
updated: 2026-05-04T11:50:00+08:00
summary: >-
  Ar9av 的查詢成本分層機制：先掃 frontmatter，找不到才升 full-text，再不行才動 vector。Tier 不是回答深度，是查詢成本。
provenance:
  extracted: 0.7
  inferred: 0.3
  ambiguous: 0
base_confidence: 0.42
lifecycle: draft
lifecycle_changed: 2026-05-04
---

# Tiered Retrieval（Tier 1/2/3）

[[entities/Ar9av-obsidian-wiki]] 的查詢成本分層機制。**重要釐清：tier 不代表回答深度**，而是「掃多少資料」的成本差別 —— 用最便宜的方式先試，不夠再升級。

## What It Is

| Tier | 讀什麼 | 成本 | 觸發時機 |
|---|---|---|---|
| **Tier 1 — Index** | 只看 frontmatter（標題 / tags / summary 那 5-10 行） | 最便宜 | **永遠先跑** |
| **Tier 2 — Full-text** | 打開整頁 body | 中等 | Tier 1 找到候選但要驗證 |
| **Tier 3 — Semantic** | vector 搜索（需設 `QMD_WIKI_COLLECTION`） | 最貴 | 前兩 tier 都沒找到 |

## How It Works

比喻：找書時 ——
- Tier 1 = 看書背、目錄
- Tier 2 = 翻到那章從頭讀
- Tier 3 = 全圖書館用「意思相近的詞」搜

**設計目標：** 當 wiki 從 20 頁長到 2000 頁，查詢成本要保持平坦。多數問題在 Tier 1 就解決，少數需往下走。

**強制 Tier 1：** 使用者說「快答」/「just scan」/「don't read pages」會強制只跑 Tier 1。

## When to Use

- **每次 wiki-query** 都隱式用這個機制，不必手動觸發
- 想快答時加「快答」關鍵字
- 不想被當下查詢成本驚嚇 → 知道有這個機制可放心 ingest 大量內容

## 對 frontmatter 設計的暗示

因為 Tier 1 只看 frontmatter，**`summary:` 欄位的品質直接決定查詢效率**。每頁 frontmatter 都該有清楚的 1-2 句 summary（≤200 字元）。 ^[inferred]

每個 ingest skill 寫頁時都會自動產 summary，但人手潤稿時要記得：summary 是 wiki 的「第一道索引」。

## Related

- [[concepts/llm-wiki-pattern]]
- [[concepts/l1-l2-cache-architecture]]
- [[entities/Ar9av-obsidian-wiki]]
