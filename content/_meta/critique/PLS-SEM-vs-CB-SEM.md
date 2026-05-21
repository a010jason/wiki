---
title: Critique — PLS-SEM vs CB-SEM（兩 SEM 派系對照）
type: meta
target: concepts/PLS-SEM-vs-CB-SEM
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.40 → 0.40" }
---

# Critique — `concepts/PLS-SEM-vs-CB-SEM`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: PLS-SEM 可處理小樣本（N ~ 50-100）、formative measurement、非常態 distribution，是相對 CB-SEM 的核心優勢。

- **Q1 假設：**
  - [hidden] 「small sample 可用」= PLS-SEM 在 N=50-100 estimation 仍 reliable（已被嚴重質疑）
  - [hidden] PLS 的 component-based 演算法本質上能處理 formative（這對 CB-SEM 是設計選擇而非數學限制）
  - [stated] 限制段提「PLS-SEM 早期被批為 sample-size cheap excuse」但未平衡呈現
- **Q2 跨域跨規模：**
  - 產業（醫療 AI pilot N=80）：PLS 派宣稱適合，但 Goodhue-Lewis-Thompson 2012 *MISQ* / Rönkkö-Evermann 2013 顯示 N<100 PLS estimates 高 bias + 低 power
  - 規模（large-N N>500）：PLS 與 CB-SEM 估算 essentially converge，small-sample advantage 消失
- **Q3 來源：**
  - Wold 1982 + Henseler 2014 ORM `secondary` strong（PLS 派 founding works）
  - **Rönkkö-Evermann 2013 *Organizational Research Methods* "A Critical Examination of Common Beliefs About Partial Least Squares Path Modeling"** 系統性反駁 PLS 各種 small-sample advantage claim — 未引
  - **Rönkkö-McIntosh-Antonakis-Edwards 2016 *J Operations Management*** 延續 critique — 未引
  - **Hair 2017 Primer 本身（page 列為 source）已承認 small-sample claim 過度** — page 未明確標示
- **Q4 反例：**
  - Goodhue-Lewis-Thompson 2012 *MISQ* simulation：PLS 在 N<100 對 reflective indicators 提供 biased estimates，type II error 高於 CB-SEM
  - Antonakis et al. 反復 review：CB-SEM 加 Bayesian small-sample correction + 預設值修正後 N=50-100 表現不輸 PLS
  - **「formative 必用 PLS」反例**：MIMIC model（CB-SEM 框架下處理 formative）+ Williams-Edwards-Vandenberg 2003 CB-SEM 兩步 formative approach；reflective-vs-formative-measurement page 的 wiki-challenge 也標出「PLS-SEM-only 過強」相同 issue
- **Verdict：** `brittle` — small-sample claim 已被 Rönkkö 系列 critique 系統性反駁 10 年；formative 必 PLS 二分過簡；page 限制段一行帶過未平衡呈現

### Claim 2: CB-SEM 適配指標 thresholds（CFI > 0.90 acceptable / > 0.95 good、RMSEA < 0.05 close fit / < 0.08 reasonable、SRMR < 0.08、TLI > 0.90、χ²/df < 3）是 standard。

- **Q1 假設：**
  - [hidden] Hu-Bentler 1998/1999 thresholds 為 universal cut-offs（不依賴 sample size、model complexity、distribution）
  - [hidden] CFI/TLI/RMSEA 對 misspecification 同等敏感（實際上各 fit index 偵測不同類型 misspecification）
  - [stated] Hu-Bentler 1998 為來源
- **Q2 跨域跨規模：**
  - 產業（醫療 AI multi-construct N>1000）：χ² 在大樣本必然 reject（高 power），χ²/df < 3 trivially false；CFI/TLI 在大 N + 簡單 model 容易 inflate
  - 規模（小樣本 N<150）：所有 fit index 都不穩定，threshold 失去 meaning
  - **Marsh-Hau-Wen 2004 *Structural Equation Modeling* "In Search of Golden Rules"** 明確警告「don't use Hu-Bentler cutoffs in different conditions」
- **Q3 來源：**
  - Hu-Bentler 1998 *Psychological Methods* `secondary` strong（高引用）
  - **Marsh-Hau-Wen 2004 *SEM*** 警告 thresholds 不通用 — 未引
  - **Heene-Hilbert-Draxler-Ziegler-Bühner 2011 *Psychological Methods*** 顯示 CFI/RMSEA 在某些 misspecification 下 systematically 漏抓 — 未引
  - **Sharma-Mukherjee-Kumar-Dillon 2005 *J Business Research*** 多 fit index 比較 — 未引
- **Q4 反例：**
  - 大樣本研究 χ² always significant（rejecting H₀ of perfect fit）—— χ²/df < 3 在 N>1000 essentially impossible for any non-trivial model
  - Heywood case：fit index 全 pass 但 estimates 為 negative variance（model misspecification 嚴重但 index 沒抓到）
- **Verdict：** `brittle` — Hu-Bentler 1998 thresholds 在 fit-index methodology literature 已被 Marsh-Hau-Wen 2004 / Heene 2011 質疑 universal 適用性；page 把 thresholds 當絕對 cut-off 過度

### Claim 3: CB-SEM 是 theory confirmation 工具，PLS-SEM 是 theory exploration / prediction 工具——二分定位。

- **Q1 假設：**
  - [hidden] 「confirmation vs exploration」是 SEM 派系本質性差別（實際上是 historical positioning，非數學差別）
  - [hidden] Prediction 與 confirmation 不可並用同一 model
  - [stated] 對照表第 6 行「主要目的」明列
- **Q2 跨域跨規模：**
  - 產業（醫療 AI prediction model）：modern PLSpredict (Shmueli et al. 2016) 支持 PLS 做 explicit prediction，但 CB-SEM 一樣可 cross-validation 預測
  - 規模（mature research domain N=1000+）：CB-SEM 也可被用做 model comparison / theory testing 而非只 confirmation
- **Q3 來源：**
  - Hair 2017 Primer 推 PLS-SEM 為 prediction 工具 `secondary` strong（但有 conflict of interest — Hair 是 SmartPLS 推廣者）
  - **Shmueli 2010 *Statistical Science* "To Explain or to Predict?"** 區分 explanatory vs predictive modeling — 與 page 二分不同（Shmueli 主張同 model 可雙用）— 未引
  - **Antonakis-Bendahan-Jacquart-Lalive 2010 *Leadership Quarterly*** 反駁 PLS 為 prediction 工具的優越性 — 未引
- **Q4 反例：**
  - Shmueli et al. 2016 *European J Marketing* PLSpredict 工具明示 PLS 可做 explicit prediction，反駁「PLS 是 exploration」立場
  - TAM (Davis 1989) 用 CB-SEM 廣泛 confirm 卻同時做 prediction（intention → behavior）
  - ML modeling vs SEM 的對照才是 prediction 工具真正分界（ML > SEM in pure prediction），非 PLS-SEM 內部派系
- **Verdict：** `narrow` — 二分是 marketing 派系 historical positioning，現代 SEM 主流（Shmueli, Sharma, Hair 2024+）已模糊邊界；page 把 historical position 當本質定位

### Claim 4: PLS-SEM 用 SRMR < 0.08 + dULS/dG (< HI 95% bootstrap) + NFI > 0.90 替代 CFI/TLI 是 valid fit assessment（Henseler 2014）。

- **Q1 假設：**
  - [hidden] PLS-SEM 適合做 model fit assessment（這本身被某些立場挑戰）
  - [hidden] SRMR threshold < 0.08 從 CB-SEM 移植到 PLS-SEM 仍有效
  - [stated] NFI 偏好 over-parameterized 模型，不推薦單獨用（page 自承）
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 模型）：PLS-SEM SRMR 在 medical research 應用稀少，主要在 marketing / IS；threshold 跨域 transferability 弱
  - 規模（小樣本 N=50-100）：bootstrap-based dULS/dG 在小樣本 instability 高
- **Q3 來源：**
  - Henseler 2014 ORM `secondary` strong
  - **Hair et al. 2017 Primer 自己警告**「PLS-SEM model fit 概念仍有爭議，不要過度依賴」未在 page 直接呈現
  - **Rönkkö-Evermann 2013** 主張 PLS-SEM 本質上「fit assessment 不適用」因 PLS 不是 modeling covariance structure — 未引
- **Q4 反例：**
  - Goodhue-Lewis-Thompson 2017 *J Marketing Research* simulation: PLS-SEM SRMR 在 known model misspecification 下不穩定 detect
  - Henseler 2014 自己後續論文（Henseler et al. 2016）承認 PLS-SEM fit indices methodology 仍待完善
- **Verdict：** `brittle` — PLS-SEM model fit 概念本身存在 methodological 爭議（Rönkkö 立場 vs Henseler 立場），page 偏 Henseler 派未平衡呈現

### Claim 5: 近年期刊論文常雙用 PLS-SEM + CB-SEM（PLS 主分析 + CB-SEM 補 fit indices）以避免 reviewer 質疑——是 best practice。

- **Q1 假設：**
  - [hidden] 兩 method 估算 essentially comparable（如果有意義 disagree 怎麼辦？）
  - [hidden] Reviewer 看到「兩 method 都做」就接受（這是 social practice 不是 methodological merit）
  - [stated] 「為了 reviewer 接受」（page 自承 sociology of science 邏輯）
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 學術 publication）：醫療 SEM 研究遠少於 marketing/IS，雙用 practice 不流行
  - 規模（高 sample N>500）：兩 method 估算 converge，雙用 redundant
- **Q3 來源：**
  - Chandra 2022 single case `secondary` 但 single example，過度推廣為「best practice」
  - **Antonakis-Bendahan-Jacquart-Lalive 2010 *Leadership Quarterly*** 主張不該妥協統計嚴謹度遷就 reviewer — 未引
  - 「為了 reviewer 接受」是 sociology of science 邏輯，非方法論 best practice
- **Q4 反例：**
  - 若兩 method 結果衝突（如 PLS-SEM 顯著、CB-SEM 不顯著），page 沒告訴讀者怎麼處理
  - Hair et al. 2024 系列警告：機械式雙用無方法論意義；若 model 設計適合 PLS 就純 PLS、適合 CB 就純 CB
  - 學術 incentive 問題：雙用 = 多寫一段方法、易過審 ≠ 科學嚴謹
- **Verdict：** `narrow` — 雙用實務存在但「best practice」過強；page 自承「為了 reviewer 接受」即承認是 sociology of science 邏輯，未升級為方法論 best practice

### Overall page verdict

5 claims：0 survives / 2 narrow / 3 brittle / 0 unsupported。整頁主要弱點是**呈現 PLS 派 vs CB-SEM 派時偏 Hair-Henseler PLS 立場，方法論 critique literature（Rönkkö, Antonakis, Goodhue）缺席**：

1. **PLS 小樣本 + formative 優勢** — Rönkkö-Evermann 2013 ORM 系列 critique 10 年來系統性反駁未引；page 自承「sample-size cheap excuse」但未平衡呈現；reflective-vs-formative-measurement 的 wiki-challenge 也標出「PLS-SEM-only 過強」同樣 issue
2. **CB-SEM Hu-Bentler thresholds 被當絕對 cut-off** — Marsh-Hau-Wen 2004 *SEM* "In Search of Golden Rules" 警告 + Heene 2011 misspecification 偵測限制全未引
3. **Confirmation vs Exploration 二分過時** — Shmueli 2010 "To Explain or to Predict?" 與 PLSpredict 2016 已模糊邊界
4. **PLS fit indices 是 Henseler 派 vs Rönkkö 派的 ongoing 爭議** — page 偏 Henseler 立場呈現 Henseler 2014 thresholds，Rönkkö 「PLS 本質 fit 不適用」立場缺席
5. **雙用「best practice」邏輯** — page 自承為 reviewer 接受目的（sociology of science），非方法論 best practice

**Recommended actions（不在本 skill 自動執行）：**

- Claim 1 把「小樣本可」改為「PLS 派宣稱小樣本可，Rönkkö-Evermann 2013 / Goodhue 2012 反駁顯示 N<100 PLS bias 嚴重」並引 ORM 系列 critique；formative 必 PLS 改為「formative 在 PLS 默認支援，但 CB-SEM 經 MIMIC + Williams-Edwards-Vandenberg 2003 兩步可處理」
- Claim 2 在 CB-SEM fit indices 表格上方加警告：「Hu-Bentler 1998 thresholds 是 single-condition simulation 結果，Marsh-Hau-Wen 2004 警告不同 N / model complexity 不適用」
- Claim 3 補 Shmueli 2010 *Stat Sci* "To Explain or to Predict?" + PLSpredict 2016 顯示 PLS 也能 confirm / CB-SEM 也能 predict
- Claim 4 新增「PLS fit 概念的方法論爭議」段：Henseler vs Rönkkö 兩立場並列
- Claim 5 把「best practice」改為「reviewer-incentive driven practice」，引 Antonakis et al. 2010 反對為審稿妥協嚴謹度
- 新增「Modern SEM literature post-2010」段：Rönkkö-Evermann 系列、Hair 2017+ 自我修正、PLSpredict、Shmueli 統一框架等
- 把限制段「兩派系陣營有意識形態之爭」升級為主段落並標明 Marketing PLS 派 vs Psychology/Econometrics CB-SEM 派的 historical conflict
