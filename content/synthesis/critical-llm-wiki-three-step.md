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

## Critique（wiki-challenge: 2026-05-04，自己對自己跑）

### Claim 1: Karpathy 純 distillation 在多源衝突時會內部矛盾，不會自動解決
- **Q1 假設：** [hidden] 假設 wiki 規模化到會出現多源衝突（這個 wiki 才 9 頁，現實還沒發生）；[hidden] 假設 LLM ingest 不會自然標記矛盾——但 CLAUDE.md 明文有 `^[ambiguous]` provenance tag，表示工具層已內建矛盾標註機制
- **Q2 跨域跨規模：** 醫療 → consumer SaaS 仍成立且加重（觀點分歧更多）；solo → 50 人團隊則減弱（多人會跨頁比對發現矛盾）
- **Q3 來源：** Codotx 部落格（tertiary）+ Jason 對話（primary 但無實證）。對「不會自動解決」這個強 claim，**unsupported**
- **Q4 反例：** Karpathy 自己跑 LLM Wiki 多月未抱怨此症狀；falsifier = 抽 5 個成熟 LLM Wiki（Karpathy / Mehmet / nvk）檢查實際出現多源衝突的比例
- **Verdict：** `brittle` — claim 合理但 over-stated。應改成「distillation 對多源衝突的處理是 best-effort，可能埋藏矛盾」而非「必然」

### Claim 2: 加質疑+對標兩層能解決 Distillation 的盲點
- **Q1 假設：** [hidden] 假設 LLM 拷問自己會比 LLM 蒸餾自己更有 insight（明顯違反 LLM sycophancy bias 文獻）；[hidden] 假設使用者真的會讀那兩層；[stated] Conway's Law 範例宣稱有效
- **Q2 跨域跨規模：** SaaS 領域批判文章已多，自動 critique 邊際效益遞減；50 人團隊 review 流程已提供批判層，這是 over-engineering solo workflow
- **Q3 來源：** tertiary 部落格 + 一個範例（n=1）。**unsupported**
- **Q4 反例：** LLM 自我 critique 的 sycophancy bias（OpenAI/Anthropic 公開研究）；Conway's Law 範例的「insight」更可能是寫文章時人腦想到的，把功勞算給 LLM 是混淆
- **Verdict：** `unsupported` — 這是方法論的核心 claim，但證據幾乎全 tertiary。需要 A/B 實證或弱化主張

### Claim 3: 4 個問題（假設 / 跨域跨規模 / 來源 / 反例）就是正確的 critique 框架
- **Q1 假設：** [hidden] 假設 4 維度互相獨立且窮盡 critique 空間（漏了邏輯一致性、定義清晰度、可操作性等維度）
- **Q2 跨域跨規模：** 維度 4「來源」在快變的 SaaS 領域意義被稀釋；其餘穩定
- **Q3 來源：** Codotx 部落格（tertiary）。**未引用任何成熟 critical thinking framework**（Toulmin model, Socratic method, Popper）。**unsupported**
- **Q4 反例：** Toulmin model 有 6 元件（claim/data/warrant/backing/qualifier/rebuttal）；學術 peer review 通常 7-10 條；這個 4 問是簡化版而非完整版
- **Verdict：** `brittle` — 是個實用簡化版，但說「就是正確的」太強。應定位為「peer review / Toulmin 的 4 維精簡版」並標明捨棄了什麼

### Claim 4: 對標步驟會產生 non-obvious insights（Conway's Law 範例佐證）
- **Q1 假設：** [hidden] 跨領域類比有效（analogy as valid insight form）；[stated] LLM 比人腦更擅長跨域檢索（hand-waving）；[hidden] Conway 那個範例 representative 而非 cherry-picked
- **Q2 跨域跨規模：** 醫療領域更收斂類比較精準；SaaS 跨域可能拉出大量 spurious 連結
- **Q3 來源：** Conway 範例（primary 但 n=1）。**unsupported**
- **Q4 反例：** 多數歷史類比是 spurious（phlogiston / aether / 體液說）；LLM 特別擅長製造 plausible-but-false analogies；falsifier = 跑 100 次 wiki-benchmark 由第三方專家評估有用率
- **Verdict：** `unsupported` — n=1 不能撐 general claim。改成「Conway 範例顯示對標 *有時* 產生 non-obvious insights」並承認樣本數

### Claim 5: 三步法時間長 2-3 倍但知識密度高很多
- **Q1 假設：** [stated] 「知識密度」可量化（但未定義指標）；[hidden] 高密度 = 高使用價值（不必然線性）；[hidden] 2-3 倍是 stable 估算
- **Q2 跨域跨規模：** SaaS 因資訊量大時間倍數可能更高；50 人團隊可分攤，個人時間倍數較低
- **Q3 來源：** frontmatter 自己標 `^[inferred]`。**none**
- **Q4 反例：** 弱 claim 一眼看出 brittle 反而 critique 很快，可能 < 2 倍；高品質 source 卻可能 > 5 倍因為 critique 困難。Falsifier = 計時 20 篇 source
- **Verdict：** `unsupported` — 自己已標 inferred，沒測過。應改成「估 2-3 倍，實測待補」

### Overall page verdict

5 條 claim 中：1 brittle / 2 brittle / 2 unsupported / 4 unsupported / 5 unsupported = **3 unsupported + 2 brittle，0 survives**。

這個方法論頁本身**沒有經過它倡議的批判**。核心問題：所有強 claim 都靠單一 tertiary source（Codotx 部落格）+ 一個 cherry-picked 範例（Conway's Law），缺乏實證與既有 critical thinking 文獻的 grounding。

**建議行動：**
1. 把 5 條強 claim 全部降格為「proposal under evaluation」
2. 引用 Toulmin model / Socratic method / Popper falsification，把 4 問定位成它們的精簡版而非原創
3. 跑 5+ 篇實際 ingest 用三步法 vs 純 distillation，記錄時間與輸出品質——把 inferred 的數字換成 measured
4. 同步降 `base_confidence` 從 0.42 → 0.30（已執行）；`lifecycle: draft` → `challenged`（已執行）

## Cross-domain Benchmark（wiki-benchmark 預先跑）

對標 = 找成熟學科裡功能相同的機制，看本方法借了什麼、漏了什麼。

| 三步法元素 | 對標到的成熟機制 | 本方法借到 | 漏掉什麼 |
|---|---|---|---|
| 整體（distill + critique） | **學術 peer review**（同儕審查） | reviewer guideline 的「找弱點」精神 | 多 reviewer 多元視角、reviewer 利益衝突檢查 |
| Q1 假設 | **Socratic method**（蘇格拉底詰問法） | 問「你為什麼這樣想」的精神 | 連環追問（Q1 之後還要 Q1.1, Q1.2…）、產出「為止點」 |
| Q2 跨域跨規模 | **De Bono Black Hat**（六頂思考帽） | 結構化 negative thinking | 系統地用其他帽子（白/紅/黃帽），單做 black 易陷悲觀 |
| Q3 來源可靠 | **Wikipedia citation policy / Cochrane evidence hierarchy** | 來源分層概念（primary / secondary / tertiary） | 強度 grading（A/B/C class evidence）、衝突來源處理 |
| Q4 反例 | **Popper falsifiability**（科學哲學） | 「找反例」精神 | 應該問的不是「能不能想到反例」而是「**什麼會 falsify**」（前者主觀、後者客觀） |
| 對標步驟 | **FMEA / TRIZ analogy matrix**（工程界跨域類比） | 跨域檢索精神 | TRIZ 的 40 個 inventive principles 是經實證有效的 analogy 集合，三步法是 ad-hoc |

**對標產生的非顯然連結：**
- 三步法的 4 問**已經 reinvent** 了學術 peer review 簡化版，但沒承認血統。把它正名為「peer review for solo workflow」會讓 positioning 更清楚
- Q4「找反例」的弱形式（subjective）vs Popper 的強形式（specify falsifier）——**升級 Q4 措辭**就能加大 critique 強度
- 對標步驟跟 TRIZ 類比矩陣同源——TRIZ 有 60 年實證，可借它的 40 principles 當 prior（不從 0 開始類比）
- peer review 的 multi-reviewer 設計提示：**單一 LLM critique 自己有 sycophancy 風險**，應該多 LLM 或多 prompt persona 跑 critique（解 Claim 2 的 unsupported 問題）

**對標降到的信心：** 對標證實這個方法論「方向對但未發明新東西」——降低原創性主張、提升可操作性（借既有框架的細節）。

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
