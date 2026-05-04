---
title: Critique — 批判式 LLM Wiki 三步法
type: meta
target: synthesis/critical-llm-wiki-three-step
ran_by: wiki-challenge
ran_at: 2026-05-04
verdicts: { survives: 0, narrow: 0, brittle: 2, unsupported: 3 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.42 → 0.30 }
---

# Critique — `synthesis/critical-llm-wiki-three-step`

完整質疑+對標內容，公開 wiki 上的對應頁只放結論摘要。

## Critique（wiki-challenge: 2026-05-04）

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
