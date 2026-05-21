---
title: Critique — What Theory Is NOT (Sutton & Staw 1995)
type: meta
target: concepts/theory-vs-not-theory
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 4, brittle: 1, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.50 → 0.50 }
---

# Critique — `concepts/theory-vs-not-theory`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 五件「不是 theory」的東西：references、data、variables、diagrams、hypotheses 都不能取代 causal explanation。

- **Q1 假設：**
  - [hidden] 此五項是**窮盡列舉** —— 其他「不是 theory」的東西如 metaphor、narrative、analogy、case description 不被列入但同樣是常見 confusion source。
  - [hidden] 五項與 theory **互斥** —— 但 theory 通常**包含** references / hypotheses / diagrams 作為 component。Sutton-Staw 自己也承認 "as a bridge"。
  - [hidden] 「不是 theory」是 binary judgement —— 實務上是 continuum。
  - [stated] Sutton-Staw 1995 ASQ cited 直接。
- **Q2 跨域跨規模：**
  - **跨產業（management research → ML / 自然科學）**：NeurIPS / ICML / Nature 等期刊把 empirical findings、benchmarks、模型架構視為主要 contribution。「data are not theory」會 invalidate 90% 機器學習論文。不同 discipline 對「what counts as contribution」epistemic norms 不同。
  - **跨規模（個別 paper → discipline）**：management research 內部 Sutton-Staw 立場是 ASQ / AMR / AMJ 的編輯偏好，但 *Strategic Management Journal* 在 1990s 後逐漸接納 grounded / inductive papers，標準有 drift。
- **Q3 來源：** Sutton-Staw 1995 *ASQ* 40(3): 371-384 —— **primary 編輯立場**, 高被引（>4000）。但 **同期 Weick 1995 反方** 同被引用卻被 page 認為「slide 沒深入」—— 等於只引用一方主張。
- **Q4 反例：**
  - **Doty & Glick (1994)** *AMR* 19(2): 230-251 主張 **typology IS theory**：configurational typologies（Miles-Snow, Porter generic strategies）滿足 theory 條件，被 Sutton-Staw 排除是不公。Page 在「限制」段落自承此問題但未在主文體現。
  - **Eisenhardt (1989)** *AMR* 14(4): 532-550 *Building Theories from Case Study Research* 主張 case study 過程中 data + analysis 即是 theory-building。
  - **Grounded theory** (Glaser-Strauss 1967, Strauss-Corbin 1990): 全套方法論認為 data → 經 axial / selective coding → theory 是合法 theory-building 路徑。
- **Verdict：** `narrow` — 五項列表在 ASQ-AMR-AMJ 三大 outlet 是 editorial standard，但跨學科（ML / physics / grounded research）與跨期刊（SMJ）多有破例。建議改寫為「Sutton-Staw 1995 在 ASQ 編輯立場下提出，特定 outlet 適用；ML / grounded theory / typology research 等領域有 alternative standards」。

### Claim 2: Theory 的核心是「why」（causal explanation），不是「what」或「how」。

- **Q1 假設：**
  - [hidden] 「Why」、「what」、「how」是清晰可分 —— 但實務上 narrative 解釋常混合三者。
  - [hidden] Causal explanation 是 theory **唯一** 功能 —— 但 taxonomic / descriptive / mathematical theory 不是 causal 仍是 theory。
  - [stated] Kaplan 1964 quote: "Data describe which, theory explains why"。
- **Q2 跨域跨規模：**
  - **跨產業（management → 自然科學）**：物理學 **General Relativity** 是 structural equations (Einstein field equations)，不講「why mass curves spacetime」只描述 mathematical relationship。仍是 theory。**Linnaean taxonomy** 是 descriptive classification 不是 causal 仍是 theory。
  - **跨規模（micro → macro）**：micro-theory（leader-member exchange dyad）有清晰 causal claim；macro-theory（institutional theory）多是 structural / descriptive，因果鏈薄弱仍被接納。
- **Q3 來源：** Kaplan 1964 + Sutton-Staw 1995 —— 兩者均屬 management / social science **explanatory** tradition。物理學 / 數學 / 生物分類學的 theory 概念完全缺席。
- **Q4 反例：**
  - **Big Five personality**（Goldberg 1990）= 5-dimensional structural description，不是 causal theory，但是 personality 領域 canonical theory（被 ASQ 自己引用）。
  - **Hofstede cultural dimensions** = descriptive structure 不是 causal，仍是 cross-cultural research canonical theory。
  - **Pearl 1995 / 2000 causal model** 反向：causal explanation 不是 theory 主體而是 model selection 的後續，theory 是 DAG structure 本身。
  - **Cartwright (1983)** *How the Laws of Physics Lie*：物理「laws」不是 causal claims that 解釋 why，而是描述 regularity 的 representational tools。
- **Verdict：** `narrow` — 在 explanatory social science 傳統內成立，但跨領域（物理 / 數學 / 生物分類 / descriptive psychology）descriptive / structural theory 均不適用此 narrow 定義。建議加 caveat「在 management / explanatory social science 內成立；跨領域包含 descriptive / taxonomic / structural theory 不以 causal 為核心」。

### Claim 3: Strong theory 三特徵 — delves into underlying processes / 三方向延伸（microprocesses / lateral / upward）/ laced with convincing logical interconnected arguments。

- **Q1 假設：**
  - [hidden] 三特徵是 sufficient + necessary —— 但 parsimonious 強 theory 可不 delve deep。
  - [hidden] Disciplinary consensus 存在 —— page 第 30-32 行自己說「theory-building literature 自己 inconsistent... 全無共識」，自我矛盾。
  - [stated] Sutton-Staw 三特徵 list。
- **Q2 跨域跨規模：**
  - **跨產業（management → 物理）**：**Special Relativity** E=mc² + Lorentz transformation 是 parsimonious、no process narrative、no 三方向延伸。**Hamilton's principle** 全 variational、no causal mechanism listed。極簡是強度而非弱點。
  - **跨規模（micro → macro）**：micro-theory 易滿足三特徵；grand theory（Marxism, Parsons functionalism）反而模糊，但仍是 canonical theory。
- **Q3 來源：** Sutton-Staw 1995 編輯立場單一。**Popper falsifiability** + **Ockham parsimony** + **Hempel explanatory power** 等其他 theory-strength 準則並列，被 page 忽略。
- **Q4 反例：**
  - **Einstein 特殊相對論**：parsimonious、無 process narrative、單方向預測，仍是物理學 paradigm theory。
  - **MIT Sloan / behavioral economics** 強調 narrow + specific theory 勝於 broad + speculative —— Camerer-Loewenstein-Rabin's behavioral models 故意 narrow。
  - **Davis (1971)** *"That's interesting!"* 標準（interestingness = surprising assumption）—— theory strength 源於 violating reader expectations，不需 delve deep。
- **Verdict：** `narrow` — 三特徵在 ASQ-style management theory 有用，但跨領域對 parsimonious theory 不公平；page 內部「全無共識」自承削弱此三特徵的權威性。建議加段「三特徵反映 Sutton-Staw 編輯偏好；parsimonious + counter-intuitive 是 alternative strength source（Davis 1971, Camerer 2003）」。

### Claim 4: Strong theory 兩種「貢獻」：揭示 naked eye 看不見的 implications，或 run counter to common sense。

- **Q1 假設：**
  - [hidden] 「Common sense」是穩定 baseline —— 但 common sense 因 audience 而異（PhD 學生的 common sense ≠ practitioner 的 common sense）。
  - [hidden] Counter-intuitive 即是 good theory —— 但 confirmatory 與 replication 也是科學進步必要環節。
  - [stated] Sutton-Staw two-route claim。
- **Q2 跨域跨規模：**
  - **跨產業（management → 醫療）**：醫療 evidence-based medicine 強調 replication 與 confirmatory studies；「counter to common sense」standard 在 systematic review / meta-analysis 不適用。
  - **跨規模（grand theory → mid-range theory）**：Merton 1968 中程理論主張 modest scope + 可實證測試，**不要求 counter-intuitive**。
- **Q3 來源：** Sutton-Staw 編輯立場單一。Replication crisis 文獻（Open Science Collaboration 2015 *Science*, Munafò et al. 2017 *Nature Human Behaviour*）完全未引。
- **Q4 反例：**
  - **Replication crisis literature** (Open Science Collaboration 2015 *Science* 349, aac4716): 確認「平凡」findings 的 replication 是 critical contribution，**不是 weak theory**。Sutton-Staw 標準會 systematically 貶低 replication 研究。
  - **Cumming (2014)** *Estimation* approach 強調 incremental + accumulating evidence 而非 single counter-intuitive insight。
  - **Big Five personality / Hofstede dimensions**：empirical + 看似直觀但是 canonical theory；Sutton-Staw 標準下被低估。
  - **Davis (1971)** 的 "interestingness" 標準雖然支持 counter-intuitive，但 Davis 自己也警告 over-radical counter-intuitive ideas 會被 dismissed as wrong。
- **Verdict：** `brittle` — 「Counter to common sense」privileges sensationalism over rigor。Replication crisis literature 與現代 estimation-based science 反駁此標準；Sutton-Staw 標準與 evidence-based 科學進步不一致。建議軟化為「Strong theory 可透過 reveal hidden implications **或** counter-intuitive insight 做出貢獻，但 Open Science 後 replication / incremental 亦被接納為合法 contribution」。

### Claim 5: Weick (1995) 同期回應「what theory is not, theorizing is」—— Generality / Simplicity / Accuracy 三者間 tradeoff (Weick 經典 triangle)，不可能同時最大化。

- **Q1 假設：**
  - [hidden] G/S/A 是 theory 的**唯一**評估維度。
  - [hidden] 三者 tradeoff 是 fundamental 而非 resource-bounded。
  - [stated] Weick 1995 cited 但 page 自承「slide 沒深入」。
- **Q2 跨域跨規模：**
  - **跨產業（management → ML）**：現代 ML scaling laws (Kaplan et al. 2020, *Scaling Laws for Neural LMs* arXiv:2001.08361) 顯示 large models 可同時 high generality + high accuracy，只犧牲 simplicity。Tradeoff 是 resource-bounded 不是 fundamental。
  - **跨規模（small theory → grand theory）**：mid-range theory (Merton 1968) 故意犧牲 generality 換取 accuracy + simplicity；grand theory 犧牲 accuracy 換 generality。
- **Q3 來源：** Weick 1995 ASQ 40(3): 385-390 —— **primary** 同期回應 Sutton-Staw，high citations。但 page 自承「Bhattacherjee 沒深入」—— 等於 secondhand 簡述。
- **Q4 反例：**
  - **GPT-4 / Claude / Gemini** 等大模型可同時 generality（任務廣）+ accuracy（任務內精確），sacrificing only simplicity。Weick triangle 在 modern AI 下不適用。
  - **理論物理 Standard Model** generality 跨所有粒子物理 + accuracy 10 decimal places + simplicity reasonable（一個 Lagrangian）—— 三者均高。
  - **DSGE 模型 (Dynamic Stochastic General Equilibrium)** 在宏觀經濟生態 generality + 統計 accuracy + 數學 simplicity 兼顧。
- **Verdict：** `narrow` — Weick triangle 在 1995 small-scale theorizing 情境成立，但 modern ML + 物理 Standard Model 證明三者可在大資源下同時改善。建議加註「Weick triangle 假設 fixed-resource theorizing；現代大模型 / 物理理論顯示 resource scaling 可緩解 tradeoff」。

## Overall page verdict

頁面忠實 distill Sutton-Staw 1995 + Weick 1995 + Bhattacherjee Ch3。**作為「Sutton-Staw 編輯立場的整理筆記」是 fit-for-purpose**。但作為「什麼是 theory」的 declarative 知識，幾個系統性弱點：

1. **編輯立場單一**：100% Sutton-Staw 觀點；Doty-Glick 1994 typology=theory / Eisenhardt 1989 case-based theory-building / grounded theory 等 alternative 全未引正面整合。
2. **跨領域盲點**：物理 / 數學 / 生物分類學的 descriptive / structural theory 完全不在討論範圍 —— "theory = causal why" 是 management explanatory tradition 的 narrow definition。
3. **「Counter to common sense」privileges sensationalism**：與 replication crisis literature / estimation approach 不一致；Open Science 2015 / Cumming 2014 缺席。
4. **Page 自我矛盾**：第 30-32 行說 theory-building literature「全無共識」但隨後採 Sutton-Staw 立場為金科玉律。
5. **Weick 同期反方未深入**：page 自承「slide 沒深入」但仍給予 secondhand 簡述；Weick 反方的力道被 minimized。

### 建議行動

- **加段落 "反方文獻 (1994-1995, post-2015)"**：Doty-Glick 1994 typology-as-theory, Eisenhardt 1989 case-based theory, Open Science 2015 replication crisis
- **加段落 "Theory in other disciplines"**：物理 structural / 生物 taxonomic / 數學 representational theory —— Sutton-Staw 不適用
- **軟化 Claim 4**：「Counter to common sense 是強度 source 之一，但 replication / incremental confirmation 在 Open Science 後亦合法」
- **拆出 Weick 段落**：充分展開 Weick 反方論證（page 自承 secondhand 即可改進）
- **加段落 "Inductive / grounded research 的處境"**：page 在「限制」段落自承不公平但未補正
- **可選：跑 wiki-benchmark** 對標物理 / 生物 / ML 的 theory 概念，會更暴露 Sutton-Staw 框架的領域 boundary

`base_confidence` 維持 0.50（已在 brittle cap 0.55 內），lifecycle draft → challenged。
