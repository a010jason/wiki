---
title: Critique — Attributes of Good Theory（五準則）
type: meta
target: concepts/attributes-of-good-theory
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 3, brittle: 2, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.50 → 0.50 }
---

# Critique — `concepts/attributes-of-good-theory`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 評估 theory 五準則：Logical consistency / Explanatory power / Falsifiability / Parsimony / Generalizability。

- **Q1 假設：**
  - [hidden] 五準則是**窮盡** —— 但 Kuhn 1962 puzzle-solving capacity / Lakatos 1970 progressive research programme / Davis 1971 interestingness / Whetten 1989 boundary specification 都是 alternative criteria 未列入。
  - [hidden] 五準則 commensurable —— 但 logical consistency 是 binary，explanatory power 是 continuous R²，falsifiability 是 binary，parsimony 是 continuous count of constructs，generalizability 是 contextual range —— **不同 ontology 無法直接 trade-off**。
  - [hidden] 五者**地位平等** —— 但 page 自己討論 tensions 暗示有 hierarchy。
  - [stated] Bhattacherjee Ch4 列舉。
- **Q2 跨域跨規模：**
  - **跨產業（management research → ML / 物理）**：ML 評估 criteria 是 test loss / generalization gap / sample efficiency / compute cost / transfer learning ability —— **完全不同 ontology**。物理 theory 評估強調 symmetry / mathematical beauty / experimental confirmation。五準則是 management explanatory social science 慣例。
  - **跨規模（micro-theory → grand theory）**：micro-theory（LMX, expectancy）可乾淨評五準則；grand theory（Marxism, structuration）logical consistency 與 falsifiability 都模糊。
- **Q3 來源：** Bhattacherjee Ch4 教學整理 —— secondary。原始準則散見：Popper (falsifiability), Ockham 14C (parsimony), Hempel (explanatory power), Weick 1995 (G/S/A triangle，page 內 [[concepts/theory-vs-not-theory]] cross-ref)。**整合五準則的具體 source 未明引**。
- **Q4 反例：**
  - **Kuhn (1962)** *Structure of Scientific Revolutions*: theory evaluation 重點是 puzzle-solving capacity within paradigm，五準則之外的標準。
  - **Lakatos (1970)** *Falsification and the Methodology of Scientific Research Programmes*: progressive vs degenerating research programmes —— 動態 criterion，超越靜態五準則。
  - **Davis (1971)** *That's Interesting!*: theory strength 源於 violating assumption expectations —— interestingness 不在五準則內。
  - **Hofstede 1980** cultural dimensions: 無 strong falsifiability，無 strong logical consistency（dimensions 可互相重疊），但是 cross-cultural research canonical theory。
- **Verdict：** `narrow` — 五準則在 management social science 教學是 useful 起點，但 Kuhn / Lakatos / Davis / 跨領域 criteria 全未提；五者不同 ontology 無法直接 trade-off page 未深入。建議改寫為「Bhattacherjee 整理 5 個主流 criteria；Kuhn 1962 puzzle-solving / Lakatos 1970 progressive programmes / Davis 1971 interestingness 為 alternative」。

### Claim 2: Explanatory power 常以 R²（variance explained）衡量 —— UTAUT 在 longitudinal study 解釋 70% usage intention variance（IS 理論高點），TAM 通常 40-50% R²，其他社科 theory R² < 0.20。

- **Q1 假設：**
  - [hidden] R² **可靠地** 捕捉 explanatory power —— 但 R² 對 overfitting 不敏感，in-sample 高不代表 out-of-sample 好。
  - [hidden] R² 跨 study 直接可比 —— 但 sample size、measurement error、construct operationalization 都影響 R²。
  - [hidden] 質性研究有「對應」的 explanatory measure —— page 含糊提「depth/nuance」未操作化。
  - [stated] UTAUT 70% / TAM 40-50% specific 數字。
- **Q2 跨域跨規模：**
  - **跨產業（IS adoption → 醫療診斷 AI）**：醫療 AI 模型常達 in-sample R² > 0.95 但 out-of-sample F1 drop 30% —— R² 嚴重 over-estimate。
  - **跨規模（小樣本 N=200 vs 大樣本 N=20,000）**：N=20k 時隨機 confound 也會給出顯著 R²；R² 應 size-adjusted。
- **Q3 來源：** Bhattacherjee Ch4 + UTAUT (Venkatesh et al. 2003 *MIS Quarterly*) —— UTAUT 70% 數字 原出處正確。但**未提 adjusted R², AIC, BIC, cross-validation R²** 等現代統計學派的修正方法。Shmueli 2010 *Statistical Science* explanatory vs predictive R² 區分完全缺席。
- **Q4 反例：**
  - **Shmueli (2010)** *To Explain or to Predict?* *Statistical Science* 25(3): 289-310: R² 適用於 explanatory model 但**對 predictive model 不適用**；後者應用 cross-validation MSE / out-of-sample R²。
  - **Adjusted R² / AIC / BIC**: 1973 Akaike 後 R² 已被 penalize-complexity 變體取代。
  - **Burnham & Anderson (2002)** *Model Selection and Multimodel Inference*: AIC 在 explanatory model selection 已成主流，R² 是過時 textbook simplification。
- **Verdict：** `brittle` — R² 操作化是 1980s textbook simplification，1990s 後 adjusted R² / AIC / BIC / cross-validation 已成主流；Shmueli 2010 explanatory vs predictive 區分 critical 但 page 未提。建議改寫為「Bhattacherjee 列 R² 是 1980s textbook 操作化；現代統計學派用 adjusted R² / AIC / BIC / cross-validation R²，Shmueli 2010 區分 explanatory vs predictive」。

### Claim 3: Falsifiability —— Theory falsifiable = 好條件，Theory falsified = 本來就差；tautology 不是 theory。

- **Q1 假設：**
  - [hidden] Falsifiable vs falsified 是清晰的 binary distinction。
  - [hidden] Tautology / definitional truth 是 theory 失敗模式 —— 但科學中存在 definitional theory（如數學定理）也可為知識。
  - [stated] Popper 1940s cited 經 cross-ref [[concepts/falsifiability-popper]]。
- **Q2 跨域跨規模：**
  - **跨產業**：與 falsifiability-popper page critique 重疊 —— ML 領域 falsifiability 概念不適用（neural networks unfalsifiable in Popperian sense）。
  - **跨規模**：grand theory 常 unfalsifiable 仍 useful（Marx, Freud, Bandura）。
- **Q3 來源：** Bhattacherjee Ch4 + cross-ref falsifiability-popper（已 challenged）。Duhem-Quine / Lakatos / Kuhn 反 Popperian 立場仍未提。
- **Q4 反例：**
  - **Lakatos 1970**: Newton's mechanics 與 Bohr atomic model 都 falsified 仍是 progressive theory。
  - **string theory** unfalsifiable 但物理界 30+ 年接納為候選 theory。
  - cross-ref falsifiability-popper critique 已詳述。
- **Verdict：** `narrow` — page 採 Popperian 嚴格立場（已透過 cross-ref 繼承 falsifiability-popper 的弱點）。建議加 caveat「現代科哲 Lakatos / Kuhn 認為 falsified 與 unfalsifiable 都可作為 working theory，視 paradigm 階段而定」。

### Claim 4: Parsimony (Ockham's razor) —— 用最少變數解釋最多 phenomenon；parsimonious theory 較易 generalize。

- **Q1 假設：**
  - [hidden] 「最簡」是 well-defined —— 但 simplicity 有多種測度（# constructs / # parameters / # axioms / Kolmogorov complexity），結論可不同。
  - [hidden] Parsimony **always** good —— 但 ML 領域 scaling laws 反此原則。
  - [stated] 14C Ockham 起源 + Li et al. 2006 Omega chi-square 案例。
- **Q2 跨域跨規模：**
  - **跨產業（management research → ML）**：GPT-4 175B 參數遠勝 simple linear regression on same task。**ML scaling laws** (Kaplan et al. 2020) 顯示 more parameters → better performance, 不是 less。Ockham razor 在 ML 領域實證**失敗**。
  - **跨規模（small dataset → big data）**：small data 適用 parsimonious models（避免 overfitting）；big data 適用 over-parameterized models（double-descent phenomenon, Belkin et al. 2019 PNAS）。Parsimony 是 sample-size-dependent，不是 universal。
- **Q3 來源：** 14C Ockham（philosophical principle）+ Li et al. 2006 Omega（單一 SCM empirical 案例）。**現代 Bayesian model selection BIC / Forster-Sober 1994 / ML scaling laws** 完全缺席。
- **Q4 反例：**
  - **Kaplan et al. (2020)** *Scaling Laws for Neural Language Models* arXiv:2001.08361: ML model performance 隨參數數正比，Ockham 失效。
  - **Double descent** (Belkin et al. 2019, PNAS 116(32): 15849-15854): over-parameterized models perform better past interpolation threshold —— 違反 Ockham。
  - **Forster & Sober (1994)** *British Journal for the Philosophy of Science* 45: 1-35: 提供 AIC-based 形式化解決 simplicity vs accuracy tradeoff —— Ockham 是 informal heuristic，AIC 是 formal substitute。
- **Verdict：** `brittle` — Ockham 在 1980s 統計建模時代 reasonable，但 2010s 後 deep learning + double-descent 顯著反例。Page 把 Ockham 當 universal principle 而非 historically-bounded heuristic。建議改寫為「Ockham razor 是 management/social science 慣例；ML scaling laws 與 double-descent 是反例；formal substitute 為 AIC/BIC（Forster-Sober 1994）」。

### Claim 5: 五準則間有張力 —— Falsifiability vs Parsimony, Explanatory power vs Parsimony, Generalizability vs Boundary conditions, Logical consistency vs 跨領域 borrowing。

- **Q1 假設：**
  - [hidden] Tensions 是 fundamental 而非 resource-bounded。
  - [hidden] Tensions 無 formal resolution —— 但 AIC framework 形式化解決 accuracy vs simplicity。
  - [stated] ^[inferred] tag —— Jason 自承推論。
- **Q2 跨域跨規模：**
  - **跨產業（management → 統計）**：統計建模領域對「explanatory vs parsimony」tradeoff 有 50 年形式解決（Akaike 1973 AIC, Schwarz 1978 BIC, Foster-Sober 1994 formal proof AIC predictive optimality）。Page 把 tension 呈現為「無解決」是因為未涉統計文獻。
  - **跨規模（單 theory → 多 theory comparison）**：Pareto frontier multi-objective optimization 是現代 ML / 統計學派標準 framework —— tensions 不是 absolute trade-off。
- **Q3 來源：** ^[inferred] 自承為 Jason 推論。Akaike 1973 / Schwarz 1978 / Forster-Sober 1994 / Pareto frontier 文獻全未提。
- **Q4 反例：**
  - **Forster & Sober (1994)** *BJPS*: 形式證明 AIC 在 finite-sample 下 predictively optimal —— accuracy vs simplicity tension 有 formal resolution。
  - **Pareto frontier multi-objective optimization** in ML: tensions 是 trade-off curve 非 zero-sum。
  - **Bayesian model averaging** (Hoeting et al. 1999): 不選單一 theory 而 average over all，繞過 tensions。
- **Verdict：** `narrow` — Tensions 描述真實但 page 暗示「無形式解決」是因未涉統計學派 50 年發展（AIC/BIC/Pareto/BMA）。建議加段「Akaike 1973 + Schwarz 1978 + Forster-Sober 1994 為 explanatory power vs parsimony tension 提供 formal 解決方案；Pareto multi-objective optimization 為現代框架」。

## Overall page verdict

頁面忠實 distill Bhattacherjee Ch4。**作為「Bhattacherjee 五準則教學的整理筆記」是 fit-for-purpose**。但作為「what counts as good theory」的 declarative 知識，幾個系統性弱點：

1. **單一 source dependency**：100% Bhattacherjee Ch4。Kuhn 1962 / Lakatos 1970 / Davis 1971 / Forster-Sober 1994 / Shmueli 2010 / Burnham-Anderson 2002 全未提。
2. **R² 操作化是 1980s textbook simplification**：adjusted R² / AIC / BIC / cross-validation R² / Shmueli explanatory vs predictive 完全缺席。
3. **Ockham parsimony 跨領域失效**：ML scaling laws + double-descent + AIC formal 處理皆反此原則的 universal applicability。
4. **Tensions 描述真實但解決方案 missed**：Akaike 1973 / Schwarz 1978 / Forster-Sober 1994 / Pareto / Bayesian model averaging 50 年發展未提。
5. **跨領域盲點**：物理 / ML / 統計 evaluation criteria 完全不在討論範圍。

### 建議行動

- **加段落 "Alternative theory evaluation traditions"**：Kuhn puzzle-solving / Lakatos progressive programmes / Davis interestingness
- **改寫 Claim 2**：「R² 是 1980s textbook 操作化；現代統計學派 adjusted R² / AIC / BIC / cross-validation」+ 引 Shmueli 2010
- **改寫 Claim 4**：「Ockham 在 management/social science 慣例；ML scaling laws + double-descent 反例；AIC/BIC formal substitute」+ 引 Forster-Sober 1994 + Kaplan 2020
- **加段落 "Tensions 的 formal 解決"**：AIC/BIC/Pareto frontier/Bayesian model averaging
- **可選：跑 wiki-benchmark** 對標統計 model selection + ML evaluation 跨領域 criteria

`base_confidence` 維持 0.50（brittle cap 0.55 內），lifecycle draft → challenged。
