---
title: Critique — Common Method Bias (CMB / CMV)
type: meta
target: concepts/common-method-bias
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.50 → 0.50" }
---

# Critique — `concepts/common-method-bias`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Common Method Bias 是當 IV 和 DV 用同一 method（同一問卷、同一時間、同一受訪者）測時，產生人為 inflated correlation 的系統性誤差，是 internal validity 威脅。

- **Q1 假設：**
  - [hidden] CMB 主要表現為 inflated correlation（向上偏誤）—— Spector 2006 顯示 CMB 也可能 attenuate
  - [hidden] CMB 是統計層級問題，可以用 post-hoc statistical test 偵測
  - [stated] 同一 method = 同一問卷 / 同一時間 / 同一受訪者
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 病患問卷常合併症狀+滿意度+依從性）：holds + amplified；CMB 風險嚴重
  - 規模（small-N N<150 study）：定義不變但 detection power 極弱，後驗 test 變 useless
- **Q3 來源：** `secondary` strong（Podsakoff 2003 JAP，top journal 高引用）；但 **Spector 2006 ORM "Method Variance in Organizational Research: Truth or Urban Legend?"** 質疑 CMB 影響被研究者誇大，該重要 counter-position 未引
- **Q4 反例：** Spector 2006 主張 CMB 的影響被誇大；許多自評同源 IV-DV 仍展現 differential validity（理論預測 specific correlation pattern）與「全 inflate」不一致；Williams-Brown 1994 simulation 顯示 CMB 反而 attenuate 部分 effect
- **Verdict：** `narrow` — CMB 是 valid 威脅但「inflated correlation」單向描述過窄；Spector 2006 urban-legend 立場未提

### Claim 2: Harman one-factor test 以 50% threshold 判斷 CMB 顯著與否（< 50% → CMB 不顯著）是有效 detection method。

- **Q1 假設：**
  - [hidden] 因子變異 < 50% 即可宣稱「CMB 不存在」（false dichotomy / null-as-absence 謬誤）
  - [hidden] EFA / PCA 抓得到的「single factor」就是 method factor（identification 假設）
  - [stated] 該 test 已被 Aguirre-Urreta 2019 批 power 不足
- **Q2 跨域跨規模：**
  - 產業（醫療多 construct survey，10+ constructs）：N items 多時不太會有單一因子 > 50%，pass test 變 trivially true —— 失去判別力
  - 規模（小樣本 N<150）：power 嚴重不足，pass 結果完全無 informational value
- **Q3 來源：**
  - Aguirre-Urreta-Hu 2019 Monte Carlo `secondary` strong
  - **Podsakoff 2003 原文自身警告**：「we caution that this technique is generally regarded as a relatively insensitive test」—— 該關鍵 caveat 未在 page 直接呈現
  - **Fuller-Simmering-Atinc-Atinc-Babin 2016 *JBR*** meta-critique：Harman test「routinely fails to detect even strong CMB」未引
- **Q4 反例：**
  - Fuller et al. 2016 simulation：已知 CMB 強烈（true variance 30%）情境，Harman test 仍 < 50% threshold → false negative 普遍
  - 若所有 construct 被 CMB equally 污染，因子結構保持多因子（CMB 是 underlying common factor 但 split across observable factors）→ test 完全 invisible
- **Verdict：** `brittle` — 50% threshold 是 arbitrary cut-off；page 提 Harman 為 detection 工具但隨後自承被批 power 不足，邏輯內部矛盾；應明確標示「不要當主要 test」

### Claim 3: Lindell-Whitney (2001) marker variable technique（marker × construct r < 0.300、共享變異 r² < 9%）作為 CMB 偵測準則有效。

- **Q1 假設：**
  - [hidden] Marker variable 可以「理論上無關」於 substantive constructs（這在概念上極難證明）
  - [hidden] r < 0.300 threshold 是 well-validated cut-off
  - [hidden] 「smallest correlation in correlation matrix」可作為 baseline correlation 估算
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 接受度 survey）：醫療場域很難找真正「理論上無關」marker — 病患/醫師問卷的任何 attitudinal 變數都可能與 use intention 間接相關
  - 規模（cross-cultural / multi-language survey）：marker 在不同文化下「無關性」可能變化，threshold 不適用
- **Q3 來源：**
  - Lindell-Whitney 2001 JAP `secondary` strong（原 paper）
  - **Richardson-Simmering-Sturman 2009 *ORM*** 直接批：「the marker variable technique does not adequately control for method bias」未引
  - **Williams-Hartman-Cavazotte 2010** 提出 CFA marker model 取代 baseline correlation 方法未提
- **Q4 反例：**
  - Richardson et al. 2009 simulation：Lindell-Whitney 在 CMB 強烈情況下「provides little useful information」
  - 若 marker 本身受 social desirability 污染（如 page 範例「privacy」本身就是高 social-desirability 概念），「smallest correlation = baseline」估算崩潰
- **Verdict：** `brittle` — Richardson 2009 / Williams 2010 等 10+ 年前的 critique 全未引；threshold 0.300 / 0.090 來源未說明；現代 CFA marker model 替代方案缺席

### Claim 4: Two-wave design + different sources + different scales + anonymous response + question order 是有效 CMB 緩解方法。

- **Q1 假設：**
  - [hidden] 時間隔開（如 4 週）足以打破 method-specific bias 但不破壞理論因果關係
  - [hidden] Different source（自評 IV、他評 DV）通常 feasible 在組織研究中
  - [hidden] 受訪者不會記憶第一次答案影響第二次（temporal independence 假設）
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 病患體驗）：two-wave 在病患 dropout 高的情境（急診後 follow-up）attrition bias 嚴重，可能比 CMB 更壞
  - 規模（small clinical RCT N=50-200）：two-wave 損失 20-30% sample 後 power 崩潰
  - PM survey 場景：自己用 AI 工具自己評，找不到他評者，different source 不 feasible
- **Q3 來源：**
  - Podsakoff 2003 JAP `secondary` strong
  - **Conway-Lance 2010 *JBP*** 對 self-report CMB 全盤質疑（「method bias is not always present even with self-reports」）未引
  - **Spector-Rosen-Richardson-Williams-Johnson 2019 *JoM*** 共同立場文「procedural remedy > post-hoc detection」未引
- **Q4 反例：**
  - Two-wave 對「stable trait-like bias」（social desirability、negative affectivity）幾乎無效 — 同一人 T1/T2 trait 一致
  - Different source 對「shared organizational context」bias 無效（員工自評 + 主管評，但兩者共享部門文化 climate effect）
  - **Page 自己提到「Social desirability bias 在 questionnaire 上『沒有有效解法』」—— 與本 claim「緩解方法 effective」直接衝突，需頁面內部 reconcile**
- **Verdict：** `narrow` — 緩解方法對 random / state-like method effect 有效，但對 trait-like / shared context bias 效果有限；page 自身亦承認此邊界但未明確 reconcile

### Claim 5: Chandra 2022 完整 CMB 套餐（two-wave 4 週 + Harman 最大因子 28.4% + Lindell-Whitney marker r=0.151 → 報告「無 CMB 問題」）構成 best practice 範本。

- **Q1 假設：**
  - [hidden] 「detect → 通過 threshold → 報告 no CMB 問題」是科學合理的舉證邏輯
  - [hidden] Chandra 2022 的 single-case implementation 可被當 best practice template
  - [stated] Best practice = procedural（design） + statistical（detection） 雙層
- **Q2 跨域跨規模：**
  - 產業（醫療 AI 多中心研究）：「two-wave 4 週」在病患 outcome 場景 attrition 過高，需 pre-registration + blinded outcome assessment 取代
  - 規模（千人 panel）：可加 unmeasured latent method factor approach 第三層；單純 Harman+Lindell-Whitney 已被視為不足
- **Q3 來源：**
  - Chandra-2022-JMIS（page 唯一 example）`secondary` 但 single case
  - 用一個 case 範本當「best practice」是 weak inference；應引 Podsakoff 2024 (如有) / Edwards 2008 / Bagozzi 2011 systematic guidelines
- **Q4 反例：**
  - **Fuller et al. 2016**：研究者 routinely 報告「Harman pass → no CMB」是 misleading practice；JBR 編輯立場已不接受 Harman 作為主要 detection
  - **Spector et al. 2019 *JoM*** 共同立場文：「pass detection → claim no CMB」是 backwards logic；procedural remedy 應優於 post-hoc detection
  - Pre-registration + open materials 才是更可靠的 prevention；detection-after-fact 本質上有限
- **Verdict：** `brittle` —「detect → pass → 宣稱 no CMB」邏輯被 2019+ methodological literature 嚴正質疑；single case 過強推廣為「best practice 範本」

### Overall page verdict

5 claims：0 survives / 2 narrow / 3 brittle / 0 unsupported。整頁主要弱點是**把 CMB 處理成 detection-pass 邏輯，缺方法論 critique 文獻整合**：

1. **CMB 概念單向描述** — 只談 inflated correlation；Spector 2006 urban-legend 立場 + Williams-Brown 1994 attenuation 未提
2. **Harman / Lindell-Whitney 兩 test 既警告 power 不足又推薦使用** — 內部邏輯矛盾未 reconcile；Fuller 2016、Richardson 2009、Williams 2010 等 10+ 年前的 critique 全缺席
3. **「detect → pass → 宣稱 no CMB」邏輯被現代方法論立場文質疑** — Spector et al. 2019 *JoM* 共同立場「procedural > post-hoc」、Fuller 2016 編輯立場、Conway-Lance 2010 等未引
4. **Single case（Chandra 2022）作為 best practice template** — weak inference；應引 systematic guidelines

**Recommended actions（不在本 skill 自動執行）：**

- Claim 1 加 Spector 2006 ORM "urban legend" 反方立場一行；補 attenuation 方向 CMB 可能性
- Claim 2 把 Harman 從「雙偵測方法」之一降級為「歷史性 test, do not rely on」並引 Fuller 2016 / Podsakoff 2003 原文自身的「relatively insensitive」warning
- Claim 3 補 Richardson-Simmering-Sturman 2009 ORM critique；提 Williams 2010 CFA marker model 為現代替代
- Claim 4 在「緩解方法」表格上方加警告：「以下方法對 random/state-like method effect 有效；對 trait-like bias（social desirability / negative affectivity / shared context）效果有限」與最後「沒有有效解法」段落 reconcile
- Claim 5 修「best practice 範本」為「一個 published example, 但 2019+ 方法論立場主張 procedural remedy + pre-registration 比 detection-pass 更重要」；引 Spector et al. 2019 共同立場文
- 新增「Open methodological debate」段：把 Spector vs Podsakoff 兩派立場明確化（CMB 嚴重程度 + detection 可靠性的爭議）
