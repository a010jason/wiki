---
title: Critique — Instrumental Variable + 2SLS（處理內生性）
type: meta
target: concepts/instrumental-variable-2SLS
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.40 → 0.40" }
---

# Critique — `concepts/instrumental-variable-2SLS`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 好的 IV 必須 (1) Relevance（與內生 IV 相關）+ (2) Exogeneity / Exclusion restriction（與 error 不相關，只透過內生 IV 影響 Y）。

- **Q1 假設：**
  - [hidden] Exclusion restriction 在統計上「可區分於 confounding」（page 自承不可實證測試但仍當主定義一部分）
  - [hidden] Linear 2SLS 框架下「IV-X-Y 路徑」清楚（非線性 / interaction effect 下 IV identification 崩潰）
  - [stated] 兩條件是 IV identification 的 sufficient conditions
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 評價研究）：醫療場景幾乎沒有 plausible IV — 醫師背景、醫院規模都可能直接影響 outcome 違反 exclusion
  - 規模（社群媒體大樣本 vs 臨床小樣本）：大樣本下 Mendelian randomization (Davey Smith 2003) 提供 GWAS-based IV；小樣本下 IV identification 不可行
- **Q3 來源：** Hausman 1978 + Stock-Yogo 2005 `secondary` strong；但 **Angrist-Imbens-Rubin 1996 *JASA* LATE framework**（現代 IV 兩條件正式陳述）+ **Angrist-Pischke 2009 *Mostly Harmless Econometrics*** 等現代 IV bible 全未引
- **Q4 反例：** **LATE framework (Angrist-Imbens-Rubin 1996)** 兩條件之外還需要 SUTVA、monotonicity (no defiers)、independence 等四條件，page 只列兩個過簡化；heterogeneous treatment effect 下 IV 只 identify LATE（compliers' effect），不是 ATE — page 在「限制」段末有一行提但未在主 claim 反映
- **Verdict：** `narrow` — 兩條件是 textbook 簡化；現代 IV identification 需 LATE framework 四條件；page 自己「限制」段提 LATE 但未整合進主定義

### Claim 2: Cragg-Donald Wald F > 10 是 weak IV detection threshold（Stock-Yogo 2005）；< 10 → IV 太弱，2SLS 偏誤可能大於 OLS。

- **Q1 假設：**
  - [hidden] 「> 10」是 well-validated universal threshold，不依賴 sample size / 內生 IV 數量
  - [hidden] Cragg-Donald F 在多 IV / 多內生 IV 下仍 well-defined
  - [hidden] First-stage F 與 Cragg-Donald F 可互換使用（在 single endogenous regressor 下相等，多 endogenous 下不等）
  - [stated] Stock-Yogo 2005 為來源
- **Q2 跨域跨規模：**
  - 產業（金融市場 high-frequency data 大樣本 N>10000）：F > 10 過於寬鬆，被建議升到 100+
  - 規模（醫療 RCT 小樣本 N<200）：F > 10 還是太寬鬆，weak IV bias 嚴重
  - 兩個情境都 break — 10 不是 universal threshold
- **Q3 來源：**
  - Stock-Yogo 2005 `secondary` strong（econometrics textbook 級）
  - 但 Stock-Yogo 原 paper 的 F=10 是 single endogenous regressor + size distortion 10% tolerance 的特定 simulation 結果
  - **Olea-Pflueger 2013 *J Bus Econ Stat*** 改進版顯示 F=10 在 heteroskedasticity / clustered errors / multiple IVs 下嚴重失效
  - **Lee-McCrary-Moreira-Porter 2022 *American Economic Review* "Valid t-ratio Inference for IV"**：SE-robust setting 下，新建議 F > 104.7 才能保證 5% 名義 size 對應 5% 實際 size
  - **Andrews-Stock-Sun 2019 *Annual Review of Economics*** review：「F > 10 has been used routinely but it does not protect against weak-IV problems in modern settings」
- **Q4 反例：**
  - **Lee et al. 2022 *AER*** 是 2024 年計量 IV literature 最大重新評估：robust SE 下 F = 10 仍 over-reject 五倍以上；新 threshold F > 104.7
  - Bound-Jaeger-Baker 1995 *JASA* 原始 weak IV critique 用論證方向相反 — BJB 主張「F < 10 危險」，page 反推為「F > 10 安全」是不對稱推論
- **Verdict：** `brittle` — Cragg-Donald F > 10 是 single-IV single-regressor heuristic；現代 robust SE 設定下被 Lee et al. 2022 推到 > 104.7；rollout 用戶質疑「simulation heuristic」嫌疑成立

### Claim 3: Durbin / Wu-Hausman endogeneity test 拒絕 H₀ → 內生性存在，2SLS 有 added value；不拒絕 → OLS 即可。

- **Q1 假設：**
  - [hidden] Hausman test 本身有足夠 power 偵測內生性（pre-test bias 問題）
  - [hidden] 「先測再選 OLS vs 2SLS」邏輯不引入 selection bias / post-model-selection inference 問題
  - [hidden] Hausman test 在 IV 為 valid（exogenous）的前提下才有意義 — circular logic if exogeneity is questionable
- **Q2 跨域跨規模：**
  - 產業（醫療隨機臨床試驗）：A/B test 隨機已 satisfy exogeneity，Hausman test 多餘
  - 規模（小樣本 N<200）：Hausman test power 低，常 fail to reject 但內生性確實存在（type II error）
- **Q3 來源：**
  - Hausman 1978 `secondary` strong（原 paper）
  - **Guggenberger 2010 *Econometric Theory*** 證明 Hausman pre-test 在 weak IV 下產生嚴重 size distortion 未引
  - **Andrews-Stock 2007** post-model-selection inference 問題未提
- **Q4 反例：**
  - Guggenberger 2010：weak IV 下做 Hausman pre-test 然後選 OLS 或 2SLS，inflate type I error 至 50%+
  - 醫療 AI cross-sectional 場景常 Hausman test 顯示「不拒絕」但因 small sample / weak IV，並非真正 exogeneity
- **Verdict：** `brittle` — 現代計量已警告 Hausman pre-test 在 weak IV 下不可靠；「拒絕 → 用 2SLS / 不拒絕 → 用 OLS」decision rule 過度簡化；post-model-selection inference 問題未提

### Claim 4: Sargan / Basman overidentifying restrictions test 不拒絕 H₀ → 支持所有 IV 都 exogenous（但不能證明）。

- **Q1 假設：**
  - [hidden] 「H₀ 不拒絕 = exogeneity 證據」邏輯（null-as-evidence 謬誤，類似 CMB Harman test）
  - [hidden] 至少一個 IV 必須 exogenous 才能 identify model — test 本身依賴此假設（circular）
  - [stated] 「但不能證明」caveat
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 評價多 IV）：常見「Sargan pass → claim valid IVs」但 power 不足
  - 規模（小樣本）：Sargan power 嚴重不足，false negative 普遍
- **Q3 來源：**
  - Sargan 1958 / Basman 1960 `secondary` strong（原 papers）
  - **Parente-Santos Silva 2012 *J Econometrics*** 證明 Sargan test 在 heteroskedasticity 下不一致 未引
  - **Newey 1985 *Econometrica*** conditional moment 替代版未提
- **Q4 反例：**
  - 所有 IV 共同 invalid（同方向偏） → Sargan test 不會拒絕（test 是 relative 不是 absolute exogeneity test）
  - **Page 範例 Chandra 2022 各內生 IV 只用 2 個 IV，over-identified test 自由度極低，power 嚴重不足；單 IV 場景 Sargan 完全不適用** —— page 未明確這個邊界
- **Verdict：** `brittle` — null-as-evidence 邏輯類似 CMB Harman test 弱點；Sargan 在 modern robust SE 下被 Parente-Santos Silva 2012 質疑；page 範例 low-df 場景下 Sargan power 不足

### Claim 5: 2SLS 是處理三大 endogeneity 來源（reverse causality / omitted variable / measurement error）的工具。

- **Q1 假設：**
  - [hidden] 三大 endogeneity 來源可被同一 IV 同時處理（實際上 IV 對不同來源 robustness 不同）
  - [hidden] 2SLS 是 linear-additive，不適 nonlinear endogeneity（probit / logit 需要 control function approach）
  - [stated] 三大來源列出
- **Q2 跨域跨規模：**
  - 產業（醫療 AI cross-sectional survey）：reverse causality 下 IV 難找；measurement error in X 需 different IV strategy（test-retest）
  - 規模（large-N panel）：fixed effects + IV 組合更常見；single IV 在 panel 下未必夠
- **Q3 來源：**
  - 三大 endogeneity 來源是 textbook（Wooldridge 列）`secondary` strong
  - **Imbens-Wooldridge 2009 *Journal of Economic Literature*** review 已主張不同 endogeneity 來源需 different identification 策略，不是 IV 一招打全部 — 未引
- **Q4 反例：**
  - Measurement error in Y 不是 endogeneity（IV 無效）— page 沒區分 X-side vs Y-side measurement error
  - Selection bias（Heckman 1979）作為第四類 endogeneity，IV 處理 partial 但常需 explicit selection model — page 在「替代方法」表格列了 Heckman 但未在主 claim 整合「為何 IV 不能處理 selection」
- **Verdict：** `narrow` — 三來源描述正確但「IV 處理一切」過度推廣；現代 causal inference 更主張依 endogeneity 來源選 IV / DiD / RDD / panel FE / Heckman

### Overall page verdict

5 claims：0 survives / 2 narrow / 3 brittle / 0 unsupported。整頁主要弱點是**Stock-Yogo 2005 時代的 IV 處方未跟上 2010s+ 計量 IV literature**：

1. **Cragg-Donald F > 10 是過時的 single-IV heuristic** — Lee-McCrary-Moreira-Porter 2022 *AER* 在 robust SE 下推到 F > 104.7；Olea-Pflueger 2013 multiple-IV 修正版未提。這是用戶 rollout 已標出的核心 issue
2. **Hausman pre-test 邏輯被 Guggenberger 2010 警告** — 在 weak IV 下 inflate type I 至 50%+；post-model-selection inference 問題未提
3. **Sargan test 用 null-as-evidence 邏輯** — 邏輯弱點與 CMB Harman test 同源；Parente-Santos Silva 2012 heteroskedasticity 不一致未引；Chandra 2022 範例 low-df 場景下 Sargan 不適用
4. **LATE framework 四條件未在主定義整合** — Angrist-Imbens-Rubin 1996 / Angrist-Pischke 2009 *MHE* 現代 IV bible 全未引；heterogeneous treatment effect 下 IV 只 identify LATE
5. **「2SLS 處理三大 endogeneity」過度推廣** — Imbens-Wooldridge 2009 *JEL* 主張不同 endogeneity 來源需 different identification

**Recommended actions（不在本 skill 自動執行）：**

- Claim 1 主定義加 LATE framework 四條件提醒；引 Angrist-Pischke 2009 *MHE* 為現代 IV bible
- Claim 2 把「F > 10」改為「F > 10 是 Stock-Yogo 2005 single-IV heuristic；2024+ 現代計量 SE-robust 下需 F > 104.7（Lee et al. 2022 *AER*）」並引 Olea-Pflueger 2013 multiple-IV 修正
- Claim 3 補 Hausman pre-test 在 weak IV 下危險的 Guggenberger 2010 警告
- Claim 4 補「null-as-evidence 邏輯弱點；low-df 下 power 不足；Chandra 2022 範例 single IV per regressor 不適用」
- Claim 5 補「不同 endogeneity 來源需 different identification strategy（Imbens-Wooldridge 2009 *JEL*）」
- 新增「Modern IV literature post-2010」段：Lee et al. 2022 / Olea-Pflueger 2013 / Guggenberger 2010 / Mendelian randomization 等近年發展
