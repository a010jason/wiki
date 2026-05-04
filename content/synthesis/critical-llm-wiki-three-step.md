---
title: 批判式 LLM Wiki 三步法（Distillation → 質疑 → 對標）
category: synthesis
tags: [llm-wiki, methodology, critical-thinking]
aliases: [批判式三步法, LLM Wiki 批判延伸, distillation-critique-benchmark]
sources:
  - https://codotx.com/news/llm-wiki-compile-blog-knowledge-base/#section-2
  - conversation:2026-05-04
created: 2026-05-04T12:00:00+08:00
updated: 2026-05-04T12:05:00+08:00
summary: >-
  Codotx 部落格提的批判式 LLM Wiki 三步法：在 Karpathy 純 distillation 之上加質疑（對結論問 4 個問題）+ 對標（跨領域找類似現象）。
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
base_confidence: 0.30
lifecycle: challenged
lifecycle_changed: 2026-05-04
---

# 批判式 LLM Wiki 三步法

## Context

> **來源：** [Codotx — LLM Wiki: Compile Blog into Knowledge Base](https://codotx.com/news/llm-wiki-compile-blog-knowledge-base/#section-2)（Section 2）

[[concepts/llm-wiki-pattern]] 的 Karpathy 原版只做 **distillation**—— 把 raw source 蒸餾成結構化 wiki 頁。問題是：

1. 不同 source 對同概念可能**衝突**，單純知識堆疊不會自動解決矛盾，wiki 內部會混亂
2. 沒有外在質疑，**認知盲區照搬**到 wiki 裡

這個三步法在 distillation 後加兩層批判：**質疑 + 對標**。需要主動要求 LLM 搜尋或模擬對立觀點，**為認知盲區「裝上一面鏡子」**。

## Method

### 第一步：Distillation

用**剃刀法則**處理每篇文章——「刪掉這條資訊，會影響理解嗎？」不會就刪。

最後只留：
- 核心結論（**不超過 3 條**）
- 支撐每條結論的關鍵證據

一篇 3000 字的文章濃縮後通常**剩 200 字左右**。剩下的 2800 字不是廢話，是脈絡和細節，不是核心知識。

### 第二步：質疑

對每條核心結論問**四個問題**：

1. **這個結論依賴哪些前提假設？**
2. **換個產業、換個規模，還成立嗎？**
3. **資料來源可靠嗎？**
4. **有沒有沒提到的反例？**

這是跟 Karpathy 方案**最大的差異** —— 它強迫 LLM 不只記錄知識，還要對知識做 stress-test。

### 第三步：對標

**跨領域找類似現象**。聽起來抽象，但實際跑出來常有意外發現。

**範例：Paperclip AI 虛擬公司 → 對標 [[concepts/conways-law]]**

寫一篇講「用 Paperclip 打造 AI 虛擬公司」的文章時，對標步驟拉出了 Conway's Law（組織結構決定系統架構）。

那篇文章的 AI 團隊編制是 **CEO + PM + 設計師 + 工程師 + QA**，直接複製了人類公司的組織結構。但 AI 的協作模式可能需要完全不同的組織設計 —— **CEO 角色的失敗可能正是因為人類的階層管理邏輯不適用於 AI 團隊**。

寫文章當下只在記錄「AI 虛擬公司好不好玩」，**完全沒想過這跟六十年前的軟體工程定律有關**。但 LLM 把這兩件事放在一起，產生新理解。

## Implications

- **設計 AI 工作流時容易不自覺套用人類組織思維**，而這可能正是效果不好的原因 ^[inferred]
- 對標的價值不是預先知道要連結哪個概念，而是**讓 LLM 跨領域檢索**，產生非顯然連結
- 質疑步驟需要 LLM 「假裝有對立立場」 —— 這是 prompt 設計的事，不是工具支援的事 ^[inferred]
- 三步法跑下來，每篇 source 處理時間會比 Karpathy 原版**長 2-3 倍**，但 wiki 知識密度高很多 ^[inferred]

## 跟 Ar9av 既有 skills 的對應

| 三步法步驟 | Ar9av 對應 skill |
|---|---|
| Distillation | `wiki-ingest`（內建） |
| 質疑 | **沒有原生支援** —— 需自己加 prompt 或建 custom skill |
| 對標 | `wiki-synthesize` 接近，但偏「找頁面間的綜合 gap」，不是「跨領域對標」 |

→ 完整實作三步法需要**擴 Ar9av**：加 `wiki-challenge`（質疑）+ `wiki-benchmark`（跨域對標）兩個 custom skill ^[inferred]

## Open Questions

- 質疑步驟跑出來的「結論依賴的前提假設」要存在哪？同頁 frontmatter 加 `assumptions:` 欄位？還是另立 page？
- 對標步驟需要的「跨領域檢索」用 [[concepts/tiered-retrieval]] 的 Tier 3 semantic search 夠不夠？還是需要更廣的 web search？
- 三步法跑完的 page 該不該標 `lifecycle: reviewed`（vs 預設的 draft）—— 既然多做了批判，confidence 應該更高 ^[inferred]

## Critique 摘要

> **2026-05-04 跑了一次 wiki-challenge + wiki-benchmark（自己對自己批）**
>
> 5 條核心 claim：3 條 unsupported、2 條 brittle、0 條 survives。整頁靠單一 tertiary source（Codotx 部落格）+ 一個 cherry-picked 範例（Conway's Law）撐，缺實證。對標發現 4 問是 peer review / Socratic / Popper 的 ad-hoc 簡化版，沒承認血統。
>
> `base_confidence`：0.42 → 0.30；`lifecycle`：`draft` → `challenged`。
>
> 完整逐條質疑、對標表、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/critical-llm-wiki-three-step.md`。

## Related

- [[concepts/llm-wiki-pattern]] —— Karpathy 原版（只做 distillation）
- [[concepts/conways-law]] —— 第三步「對標」的範例概念
- [[concepts/tiered-retrieval]] —— 對標可能用到的檢索機制
- [[entities/Ar9av-obsidian-wiki]] —— 實作 distillation 的工具，但缺質疑/對標 skill
- [[journal/2026-05-04-llm-wiki-setup]] —— 本方法論首次寫進 wiki 的 session

## TODO

- [x] 設計 `wiki-challenge` skill prompt 模板（質疑步驟自動化） — 2026-05-04 完成於 `~/.claude/skills/wiki-challenge/SKILL.md`
- [ ] 設計 `wiki-benchmark` skill prompt 模板（對標步驟自動化）
- [ ] 把 5 條強 claim 改寫成「proposal under evaluation」（critique 結果驅動）
- [ ] 引入 Toulmin model / Popper falsifier / TRIZ analogy 文獻 link
- [ ] 跑 5 篇實測 source（三步法 vs 純 distillation 比較時間與輸出）— 把 `^[inferred]` 換成 `^[measured]`
- [ ] 升級 Q4 從「找反例」（主觀）→「specify falsifier」（客觀，Popperian 強形式）
- [ ] 跟 Codotx 文章其他章節對照，看作者有沒有提其他補充方法
