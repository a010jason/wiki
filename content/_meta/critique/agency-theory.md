---
title: Critique — Agency Theory
type: meta
target: concepts/agency-theory
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.50 → 0.50" }
---

# Critique — `concepts/agency-theory`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 「Agency Theory 的核心假設是 self-interested / boundedly rational / risk-averse」

- **Q1 假設：**
  - [hidden] 方法論個人主義 — 預設「人類」可脫離 social embedding 用三個 utility-maximizing 屬性描述
  - [hidden] Risk preference 是穩定 trait，可在不同情境一致預測（與 Kahneman/Tversky prospect theory 衝突）
  - [hidden]「self-interest」= narrow rational economic interest，不含他人關懷 / 身份認同 / 同儕壓力
- **Q2 跨域跨規模：**
  - 醫療（醫師-病人）：self-interested 預測醫師會 over-prescribe，部分成立（DRG 即假設此）；但 ignores 醫師職業認同 + 同儕壓力 + 病人關係 → **narrow holds, 需加 professional norm moderator**
  - 5 人初創團隊：risk-averse 與創業者本質 risk-seeking 衝突；self-interested 也破（共同股權 + mission alignment）→ **三核心假設都失效**
- **Q3 來源：** Ross 1973 + Jensen-Meckling 1976（**secondary**，經典頂尖期刊）；對描述性 claim 充分。
- **Q4 反例：**
  - **Behavioral economics revolution**（Kahneman/Tversky 1979 *Econometrica*）：human risk preference 是 prospect theory，不是 simple risk-averse
  - **Self-Determination Theory**（Deci & Ryan 1985）：證明 humans 有 non-monetary autonomy / competence / relatedness drives
  - **Motivation crowding-out**（Frey 1997, Deci 1971）：monetary incentive 可降低 intrinsic motivation
  - Falsifier：若 high stock-option compensation 系統性**降低** CEO performance（intrinsic crowding-out），三核心假設破裂
- **Verdict：** `narrow` — 在「中等規模、有監管、成熟產業」內成立；超出此 boundary 預測力降低

### Claim 2: 「Behavior-based contract（月薪）無法解決 agency problem」

- **Q1 假設：**
  - [hidden] Monitoring 成本 > 偏差成本（觀察員工不夠便宜）
  - [hidden] Job 是 effort-elastic（多努力 = 多產出）— 對 routine task 不成立
  - [stated] Information asymmetry 存在
- **Q2 跨域跨規模：**
  - 手術台麻醉師：fixed salary 完全 OK — outcome 太難 attribute、effort 必須 maximal、monitoring 由 peer review 提供 → **breaks — fixed salary 在「outcome 不可歸因 + 高自我監督」職業反而最優**
  - Google L7 / Apple ICT5 staff engineer：fixed salary + RSU 是 industry norm；純 outcome-based 對知識工作不適用 → **breaks — 高技能 knowledge work 預設 fixed**
- **Q3 來源：** 教師眉批「代理理論 → 不是固定薪資 → 要有變動薪資」+ Bhattacherjee Ch4 textbook compilation。**tertiary** — 對「fixed salary 無解」這條強斷言不充分。
  - **Red flag**：Holmström 1979 *Bell Journal* 原文細緻 — 認為 fixed salary 是 risk allocation 對 risk-averse agent 最佳；first-best 在不可監督下 second-best 仍是 **fixed + bonus 組合**，**不是無解**。Page 把 textbook simplification 當原文。
- **Q4 反例：**
  - **Costco**：產業最高 fixed salary + 低變動 → 員工 turnover 業界最低 + productivity 業界最高
  - **Toyota**：終身雇用 + 年功序列 + 集體獎金 → 標準 agency 預測會 moral hazard，但 Toyota TPS 全球標竿
  - **Professional service firms**（律師事務所合夥制）：partner-level fixed salary 配 collective profit-share，agency model 預測不靈
  - Falsifier：若 outcome-based comp 系統性顯示降低 long-term firm value → claim 破裂。實證：Enron / Lehman / Wells Fargo 假帳戶 → 偏向支持破裂。
- **Verdict：** `brittle` — claim 是 textbook simplification；原文 Holmström/Ross/J&M 未斷言「fixed salary 無解」；大量產業反例（Costco / Toyota / 律師事務所）

### Claim 3: 「Outcome-based contract（佣金、stock option）對齊 agent 與 principal 利益」

- **Q1 假設：**
  - [hidden] Outcome 是**可歸因**到 agent 行為 — 但很多 outcome 是 luck / market / 他人合作
  - [hidden] Agent 不會 **game** 出 metric（Goodhart's law）
  - [hidden] Short-term outcome ≈ long-term value
  - [stated] Agent risk-averse
- **Q2 跨域跨規模：**
  - 醫療 AI 廠商 performance-based pricing：outcome「fewer missed diagnoses」 — 廠商把 sensitivity 拉高 → 一堆 false positive → 名義 outcome 好但臨床惡化 → **narrow — 需加 multi-metric 防 game**
  - 50 人團隊個人 stock option：適用但 free-rider 問題仍存在；Google / Facebook 改用 RSU 而非個人 outcome metric → **holds with modification**
- **Q3 來源：** 同 Claim 1（Ross / J&M），**secondary**。但 Holmström 1979 細緻：risk-averse agent 下完全 outcome-based 反而 sub-optimal（agent over-bears risk）。Page 過度簡化。
- **Q4 反例：**
  - **Wells Fargo 假帳戶 scandal** (2016)：員工為 cross-sell quota 開假帳戶 → outcome-based 反而導致 misalignment + 客戶傷害 + 3B USD 罰款
  - **Enron**：stock-option 過度激勵 → CEO 操弄財報 → 公司崩塌
  - **Goodhart's law**：「當 measure 變成 target，它就不再是好 measure」是反 outcome-based 的根本原則
  - **CEO short-termism**：stock option 推 CEO 削減 R&D / 大規模回購 → long-term harm
  - **Bebchuk & Fried (2004)** *Pay Without Performance*：CEO comp 與 firm performance 系統性脫鉤
  - Falsifier：若實證顯示 outcome-based pay 公司 long-term ROA 系統性低於 fixed-pay 公司 → claim 破裂。實證偏向支持此。
- **Verdict：** `narrow` — outcome-based 對齊利益**僅當** outcome 可歸因 + 不可 game + short-term ≈ long-term；page 沒提這些 boundary conditions

### Claim 4: 「Job performance 對 job satisfaction 有正向影響，與標準 agency theory 對立」

- **Q1 假設：**
  - [hidden] Effort 對 agent 是 cost（disutility）→ performance ↑ → effort cost ↑ → satisfaction ↓
  - [hidden]「Satisfaction」與「utility」可 equate — 但 SDT / Bandura 區分 outcome-utility vs intrinsic competence satisfaction
  - [stated]「Repeated interaction」會改變單期 model（page 自己提救援）
- **Q2 跨域跨規模：**
  - 醫療：高 performance 醫師（low missed diagnosis rate）通常更滿意 — 不是「對齊 utility」而是 mastery / professional identity → **breaks standard agency；SCT/Bandura 早就解釋這個**
  - 50 人 senior engineer：完成 high-impact ship → satisfaction 高（intrinsic） → **breaks**
- **Q3 來源：** Page 寫「Journal of Marketing 論文」H3-H6 但**未列具體 cite**（不是 frontmatter sources 的任何一篇）。**none** — 無 cite 的「journal 結論」不可驗證。
  - **Red flag**：引用「Journal of Marketing 論文」但 sources frontmatter 不含此引用，是 untraceable 強斷言。
- **Q4 反例：**
  - 整個 **intrinsic motivation literature**（Deci & Ryan 1985 SDT）是 systematic 反例 — performance → competence → satisfaction（直接 path 不需透過 outcome compensation）
  - **Flow state**（Csikszentmihalyi 1990）：高 performance 與 satisfaction 共生於 flow，不是 trade-off
  - **Judge et al. 2001 meta-analysis** *Psych Bulletin*：satisfaction-performance correlation **positive (r≈0.30)** — 不是 trade-off
  - Falsifier：若 controlled study 顯示 performance increase 系統性降低 satisfaction → claim 守住
- **Verdict：** `brittle` — page 自己提的反例，引用 untraceable，「repeated interaction」救援薄弱；應改寫為「Agency Theory 原始 single-period model 預測有問題，現代 dynamic agency 模型已修正」

### Claim 5: 「Agency Theory vs Herzberg Two-Factor 在『薪資是否激勵』立場相反」

- **Q1 假設：**
  - [hidden] 兩理論在比較同一個東西 — 但 Agency 是 **contract design / incentive theory**，Herzberg 是 **employee motivation psychology**，**unit of analysis 不同**
  - [hidden]「薪資 = 變動薪資」— Herzberg 原文針對「basic pay」說是 hygiene，沒否認「performance bonus 可激勵」
  - [hidden] 兩理論對「激勵」定義一致 — Agency 的「激勵」= align effort with principal goal；Herzberg 的「激勵」= satisfaction 與 motivation 心理區分
- **Q2 跨域跨規模：**
  - 醫療：醫師薪資 + bonus design — Herzberg 預測 base salary 不能激勵但 mastery/autonomy 能；Agency 預測 outcome-based bonus 能激勵 → **兩者其實互補不衝突**
  - 50 人新創：fixed salary（Herzberg hygiene）+ stock option（Agency outcome-based）+ mission（Herzberg motivator）→ **三者同時運作**，不是「立場相反」
- **Q3 來源：** Page 自己 inferred (`^[inferred]`)。**none** — page 自承這是 LLM 合成。
- **Q4 反例：**
  - **Variable Pay Theory**（Lawler 1971）整合 Agency + Two-Factor：variable pay 透過 perceived contingency 兩理論都能解釋
  - **Self-Determination Theory**（Deci & Ryan）：autonomy-supportive 條件下 monetary 不傷害 intrinsic motivation — 兩理論並非二元對立
  - Falsifier：若 Herzberg 1968 *HBR* 原文有「performance-based pay 也是 hygiene」的明確陳述 → 立場確實相反。但 Herzberg 原文「KITA」針對 base pay 與 punishment，對 outcome-based pay 較模糊。
- **Verdict：** `brittle` — page 自承 inferred；兩理論 unit of analysis 不同的事實未被處理；「立場相反」是 oversimplification — 實際是 **complementary**（覆蓋不同層面）

### Overall page verdict

5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported。

**主要弱點**：
1. Page 是 textbook compilation，過度簡化 Holmström 1979 等核心 agency 文獻；二分「fixed vs outcome-based」實則 dominant solution 是 hybrid（fixed + bonus）
2. 忽略 behavioral economics（Kahneman/Tversky）、Self-Determination Theory（Deci/Ryan）、motivation crowding-out（Frey）等對核心假設的系統性挑戰
3. 「Journal of Marketing 論文」引用 untraceable（Claim 4）— 需補 cite 或刪
4. 「Agency vs Herzberg 立場相反」是 false dichotomy — 兩理論 unit of analysis 不同，實則互補

**強點**：
- 歷史脈絡（Ross 1973 / Jensen-Meckling 1976 / Holmström 1979）正確
- 應用案例（醫院採購 / 醫師-病人）具體且接地
- 「跨文化適用性」反例（collectivist 文化）有提到

**推薦行動**：
1. **加 Holmström 1979 為主要 source**；補「hybrid contract is dominant solution」說明
2. **補 Goodhart's law / Wells Fargo / Enron** 為 outcome-based contract 的著名反例
3. **Claim 4 補 cite** 或改寫為「現代 dynamic agency 已修正單期 model」
4. **Claim 5 改寫**：兩理論 unit of analysis 不同 → 不是「對立」是「覆蓋不同層面」，可被 Lawler 1971 Variable Pay Theory 整合
5. **核心假設段加 caveat**：behavioral economics 已修正 risk-averse 為 prospect theory；SDT 已修正 self-interested 為 autonomy/competence/relatedness 三 drives

**Base confidence**：1+ brittle → cap at 0.55；目前 0.50，**維持 0.50**（不下調，因為 page 本身已在限制內且有 reflexive critique section）。

**Lifecycle**：`draft` → `challenged`，`lifecycle_changed: 2026-05-22`。
