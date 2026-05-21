---
title: Critique — Internal Validity
type: meta
target: concepts/internal-validity
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 4, brittle: 1, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.50 → 0.50 }
---

# Critique — `concepts/internal-validity`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Internal validity = 觀察到的 DV 變化**確實**由 hypothesized IV 造成，而非 extraneous variable。

- **Q1 假設：**
  - [hidden] 「Causal effect」是 binary（有/無）—— 但 Pearl 2009 / Rubin 框架區分 total effect / direct effect / indirect effect / heterogeneous treatment effect。
  - [hidden] 「Hypothesized IV」是 well-defined —— 但實務上 IV 與 mediator / moderator 邊界模糊。
  - [stated] Bhattacherjee 教師眉批「內部效度 / causality」。
- **Q2 跨域跨規模：**
  - **跨產業（management → 經濟政策研究）**：Card-Krueger (1994) NJ-PA minimum wage 自然實驗顯示**非實驗 design** 也可達 internal validity 接近 RCT。經濟學整個 credibility revolution (Angrist-Pischke 2010) 重新定義 internal validity。
  - **跨規模（individual-level → cluster-level）**：cluster randomized trial vs individual-level RCT 對 internal validity 要求不同；hierarchical data 的 internal validity 不能單純套用。
- **Q3 來源：** Bhattacherjee Ch5 + 教師眉批 —— **secondary 教科書 + 簡化定義**。**Pearl 2009** *Causality* / **Imbens-Rubin 2015** *Causal Inference for Statistics, Social and Biomedical Sciences* / **Angrist-Pischke 2008** *Mostly Harmless Econometrics* 等現代 causal inference 文獻全未提。
- **Q4 反例：**
  - **Pearl (2009) do-calculus**: 把 internal validity 從 binary 變 graphical identification 問題；observational data + correct DAG = identifiable causal effect。
  - **Heterogeneous treatment effects**: 同一 design 對不同 subgroup 的 internal validity 不同（Imbens-Rubin 2015 ATE vs LATE 區分）。
- **Verdict：** `narrow` — 定義在 1979 Shadish-Cook-Campbell 教學 framework 內成立，但忽略 1990s 後 causal inference revolution。建議加段「Pearl 2009 do-calculus + Imbens-Rubin 2015 potential outcomes framework 是現代補充」。

### Claim 2: 三因果條件 (covariation / temporal precedence / no plausible alternative) —— cross-ref [[concepts/causality-three-conditions]]。

- **Q1 假設：** 與 causality-three-conditions page 同。
- **Q2 跨域跨規模：** 同。
- **Q3 來源：** Cross-ref 已 challenged (causality-three-conditions: 1 survives / 2 narrow / 2 brittle, 主要弱點 忽略 Pearl 2009 因果推論革命 + 頁面自我矛盾 + 醫療 AI 「需要 RCT」與 FDA 實務不符)。
- **Q4 反例：** 同 causality-three-conditions。
- **Verdict：** `narrow` — 透過 cross-ref 繼承 causality-three-conditions 的弱點。建議在本頁加 brief disclaimer 引導讀者看該頁的 critique 摘要。

### Claim 3: 強弱 design 對照：Lab experiment > Field experiment > Quasi > Longitudinal > Cross-sectional > Case research。

- **Q1 假設：**
  - [hidden] Hierarchy 是 universal —— 但取決於 research question 是 efficacy（理想情境）vs effectiveness（實務情境）。
  - [hidden] Lab experiment 是 gold standard —— 但 lab artificiality 自身產生 confound（demand characteristic, Hawthorne effect）。
  - [hidden] Cross-sectional 必然弱 —— 但 IV (instrumental variable) / RD (regression discontinuity) / DID (difference-in-differences) 等 quasi-experimental tools 可顯著提升 cross-sectional internal validity。
  - [stated] Bhattacherjee 表格。
- **Q2 跨域跨規模：**
  - **跨產業（management → 經濟學 / 醫療 AI）**：經濟學自 1990s credibility revolution 後，**natural experiment + IV + RD + DID** 被視為與 RCT 等價的 internal validity 來源（Card-Krueger 1994, Angrist 1990, Hahn-Todd-van der Klaauw 2001）。醫療 AI 領域 real-world evidence（RWE）在 FDA 已正式可接受。
  - **跨規模（n=30 lab → n=10,000 panel）**：small-N lab 即使 random assignment 仍易 Type II error；large-N panel + proper identification 可勝。
- **Q3 來源：** Bhattacherjee 教科書 hierarchy。**Angrist-Pischke 2008 / Imbens-Rubin 2015** 的 modern causal inference hierarchy（randomization > natural experiment > matching > regression）未提。
- **Q4 反例：**
  - **Card & Krueger (1994)** *American Economic Review* 84(4): 772-793 NJ-PA minimum wage 自然實驗：cross-sectional + DID 達到 RCT-level internal validity。Nobel 2021 經濟學獎給 Card 即承認。
  - **Hahn-Todd-van der Klaauw (2001)** *Econometrica* 69(1): 201-209 regression discontinuity：observational 但 internal validity 高。
- **Verdict：** `narrow` — Hierarchy 在 1979 Campbell-Stanley 傳統內成立，但 1990s 後 quasi-experimental tools (IV/RD/DID) 顛覆此 ordering。建議加段「現代計量 (Angrist-Pischke 2008) 顯示 natural experiment + proper identification 可達 RCT-level internal validity」。

### Claim 4: Campbell-Stanley 8 威脅命名（history / maturation / testing / instrumentation / mortality / regression / selection / selection × 其他）。

- **Q1 假設：**
  - [hidden] 8 威脅是窮盡 —— 但 Cook-Campbell 1979 / Shadish-Cook-Campbell 2002 已擴展。
  - [hidden] Campbell-Stanley 1963 命名是 disciplinary 共識 —— 但 page 自承「Bhattacherjee Ch5 沒採此命名」。
  - [hidden] 跨領域 applicable —— 但 ML / 醫療 AI 特有威脅（algorithmic bias, data drift, label noise）不在列。
  - [stated] page 提「為何 Bhattacherjee 跳過？」自問。
- **Q2 跨域跨規模：**
  - **跨產業（social science → ML）**：ML 領域 internal validity 威脅包含 distribution shift / dataset bias / overfitting / spurious correlation，不在 Campbell-Stanley 8。
  - **跨規模（individual study → meta-analysis）**：meta-analysis 的 internal validity 威脅是 publication bias / heterogeneity / quality variation，Campbell-Stanley 8 不適用。
- **Q3 來源：** Campbell-Stanley 1963 *Experimental and Quasi-Experimental Designs for Research*。**Shadish-Cook-Campbell 2002** *Experimental and Quasi-Experimental Designs for Generalized Causal Inference* 是 1963 的更新版，page 未提。
- **Q4 反例：**
  - **Shadish-Cook-Campbell (2002)** 擴展 Campbell-Stanley 1963 為 9 internal validity threats + interaction with selection types。Page 採過時版本。
  - **Crook & Crook (1989)** *Educational Researcher*: 識別 12 額外 threats 包括 「neutralized」 + 「instability」。
  - **Algorithmic bias** (Mehrabi et al. 2021 *ACM Computing Surveys*): ML-specific threats not in 1963 list。
- **Verdict：** `narrow` — Campbell-Stanley 1963 是經典 baseline 但 2002 更新版 + 跨領域擴展未提。建議加段「Shadish-Cook-Campbell 2002 更新版有 9 threats；ML 領域額外有 algorithmic bias / distribution shift / overfitting」。

### Claim 5: 5 種 control 技巧 (manipulation / elimination / inclusion / statistical control / randomization) + 4 種 respondent bias 緩解 (two-wave / different sources / Harman / Lindell-Whitney)。

- **Q1 假設：**
  - [hidden] 5 controls + 4 CMB mitigations 是窮盡。
  - [hidden] 這些都 sufficient mitigations —— 但 Harman 與 Lindell-Whitney 已被 critique（cross-ref common-method-bias，已 challenged）。
  - [hidden] Statistical control = covariate adjustment 即可 —— 但 modern causal inference 強調 propensity score / IV / DID / RD 等比 simple covariate adjustment 更 robust。
  - [stated] cross-ref common-method-bias 待寫；該 page 已被 challenged。
- **Q2 跨域跨規模：**
  - **跨產業（management → 經濟學）**：經濟學 internal validity tools = propensity score matching (Rosenbaum-Rubin 1983) + IV (instrumental variable) + RD + DID + synthetic control (Abadie-Diamond-Hainmueller 2010)。Bhattacherjee 5 controls 過時。
  - **跨規模（small n → big data）**：big data 適用 ML-based confounding adjustment（double ML, Chernozhukov et al. 2018 *Econometrics Journal*）。
- **Q3 來源：** Bhattacherjee 5 controls + 4 CMB mitigations。**Rosenbaum-Rubin 1983 propensity score / Angrist 1990 IV / Abadie 2010 synthetic control** 等現代 tools 全未提。Cross-ref common-method-bias page 已 challenged 顯示 Harman / Lindell-Whitney 都已被反方文獻批 power 不足。
- **Q4 反例：**
  - **Propensity Score Matching** (Rosenbaum-Rubin 1983 *Biometrika*): observational data 的 confounding 調整 gold standard，Bhattacherjee 「statistical control」過於簡化。
  - **Synthetic Control** (Abadie-Diamond-Hainmueller 2010 *JASA*): case study + comparative analysis 的 internal validity 提升。
  - **Double Machine Learning** (Chernozhukov et al. 2018): big data + ML 的現代 causal inference。
  - **Fuller et al. (2016)** *JBR*: Harman single-factor test simulation 顯示 false negative 嚴重。
- **Verdict：** `brittle` — 5 controls + 4 CMB mitigations 是 1979-2000 framework；現代 causal inference toolkit (propensity score / IV / RD / DID / synthetic control / double ML) + CMB critique (Fuller 2016) 完全缺席。建議改寫為「Bhattacherjee 列 5 基本 controls；現代 quasi-experimental tools (Rosenbaum-Rubin 1983 PSM, Angrist 1990 IV, Abadie 2010 SC, Chernozhukov 2018 DML) 為擴展」+ 警告 Harman / Lindell-Whitney 已被 Fuller 2016 / Richardson 2009 批 power 不足。

## Overall page verdict

頁面忠實 distill Bhattacherjee Ch5 + Ch10。**作為「Bhattacherjee internal validity 教學的整理筆記」是 fit-for-purpose**。但作為「內部效度」的 declarative 知識，幾個系統性弱點：

1. **單一 source dependency**：100% Bhattacherjee + Campbell-Stanley 1963 古典。Pearl 2009 / Imbens-Rubin 2015 / Angrist-Pischke 2008 / Shadish-Cook-Campbell 2002 等現代 causal inference + 更新 threats taxonomy 全未提。
2. **Design hierarchy 過時**：「Lab experiment 強，cross-sectional 弱」hierarchy 反映 1979 立場；1990s credibility revolution (Card-Krueger 1994, Angrist-Pischke 2008) 已顛覆 ordering。
3. **5 controls 框架過時**：1979 框架，現代 propensity score / IV / RD / DID / synthetic control / double ML 完全缺席。
4. **CMB 緩解方法已被反方文獻批**：Cross-ref common-method-bias page 顯示 Harman / Lindell-Whitney 都已被 Spector 2006 / Fuller 2016 / Richardson 2009 critique 但本頁未承認。
5. **跨領域盲點**：ML / 經濟學 / 醫療 AI 的 internal validity 威脅 + tools 完全不在討論範圍。
6. **Cross-ref dependency**：依賴 causality-three-conditions（已 challenged）+ common-method-bias（已 challenged）+ research-design（已 challenged）三個被質疑的 page，但本頁未繼承這些 critiques。

### 建議行動

- **加段落 "Credibility Revolution (1990s後)"**：Card-Krueger 1994, Angrist 1990, Pearl 2009, Imbens-Rubin 2015
- **改寫 Design hierarchy**：「1979 框架；natural experiment + IV/RD/DID 可達 RCT-level internal validity」
- **加段落 "Modern Quasi-Experimental Toolkit"**：propensity score matching / IV / RD / DID / synthetic control / double ML
- **更新 threats taxonomy**：Campbell-Stanley 1963 → Shadish-Cook-Campbell 2002 9 threats + ML-specific
- **警告 CMB methods**：Harman + Lindell-Whitney 已被 Fuller 2016 + Richardson 2009 批 power 不足
- **添加 cross-ref disclaimer**：本頁依賴的 cross-ref pages 都已 challenged，繼承其弱點
- **可選：跑 wiki-benchmark** 對標經濟學 credibility revolution + ML causal inference + 醫療 RWE，會更暴露 1979 框架的時代局限

`base_confidence` 維持 0.50（brittle cap 0.55 內），lifecycle draft → challenged。
