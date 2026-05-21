---
title: Critique — Construct Validity
type: meta
target: concepts/construct-validity
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/construct-validity`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Bhattacherjee 切兩 approach：Translational validity（理論：face + content）+ Criterion-related validity（實證：convergent + discriminant + concurrent + predictive）。

- **Q1 假設：**
  - [hidden] Construct validity 有「乾淨的兩支樹狀結構」可分。事實上 face/content 同樣可以被「實證化」（如 Lawshe 1975 的 CVR 是內容效度的量化指標），切割沒有頁面寫得那麼乾淨。
  - [hidden] Bhattacherjee Figure 7.2 是 canonical 分類法。
  - [stated] 教師中文眉批「構面效度」採用此分類。
- **Q2 跨域跨規模：**
  - **跨產業（research methods → ML benchmark validity）**：Liu et al. 2023 *"The Validity of Benchmarks for ML Models"* 用的是 Messick (1989) 的 **unified construct validity**（content / substantive / structural / generalizability / external / consequential 六 facets）—— 不採 Bhattacherjee 的兩支分類。Page 的框架無法直接套到 ML 評估有效性。
  - **跨規模（psychometrics → 小樣本 medical adoption scale, n<50）**：實證的 convergent/discriminant 在 n<100 時 power 不足，實務上只能做 translational（face/content），「criterion-related 那支」被迫跳過。分類仍成立但**實作意義近乎不對稱**。
- **Q3 來源：** Bhattacherjee Ch7 slides — **secondary, textbook compilation**。原始框架可追溯至 Cronbach & Meehl (1955)。Messick (1989, 1995) 已將其重構為 unified construct validity，**頁面未引用 Messick** — 略過了 1989 後 30+ 年最重要的理論更新。
- **Q4 反例：**
  - **Messick (1989) Unified Construct Validity** 主張取消 face/content vs criterion-related 的二分結構，改為 6-facet 觀點。AERA-APA-NCME (2014) *Standards for Educational and Psychological Testing* 也採此 unified view。
  - **若 Bhattacherjee 的分類是「the framework」**，那 AERA Standards 採 Messick → 教科書外的學界主流並不採此二分。
- **Verdict：** `narrow` — Bhattacherjee 兩支分類在 IS / 商管研究教學廣用，但頁面把它呈現為「the framework」過頭。建議改寫為「Bhattacherjee 採此分類；Messick 1989 的 unified view 是當代心理計量主流」。

### Claim 2: Face validity is "necessary but not sufficient" for construct validity（slide 強調 Hardesty & Bearden 2004 dartboard）

- **Q1 假設：**
  - [hidden] Face validity **可被獨立評估**且結果穩定（不同 expert judges 結論一致）。
  - [hidden] Face validity 有評估價值 —— Nevo (1985) 與 Anastasi (1988) 認為 face validity 不是 validity 的子類，只是 "test appearance"，混淆「看起來像」與「實際量到」。
  - [stated] Hardesty-Bearden dartboard 比喻 cited。
- **Q2 跨域跨規模：**
  - **跨產業（psychometrics → 醫療採用意願量表）**：醫師 user 對 face validity 的標準是「**看起來像臨床決策**」—— face validity 高的 scale 反而可能驅動 demand-effect bias（受訪者猜到研究者意圖）。「Necessary」在這情境下變成 trade-off。
  - **跨規模（單一 expert → 50-人 Delphi panel）**：face validity 在多人 panel 才有可靠性。單一 expert 的 face validity 評估是 anecdote。「Necessary」的門檻取決於 panel 大小，頁面沒交代。
- **Q3 來源：** Hardesty-Bearden 2004 (*Journal of Business Research*) —— secondary，well-cited but 中等強度期刊。**反方文獻完全未引**（Nevo 1985, Anastasi 1988, Bornstein 1996）。
- **Q4 反例：**
  - **IAT（Implicit Association Test）** 故意設計成 face validity 低（受測者不知在量什麼）以避免社會期待偏誤。Greenwald et al. 1998 與後續文獻認為 IAT 仍具 construct validity。→ Face validity 不是 necessary。
  - **MMPI 臨床量表 K-correction items** 故意夾雜「看起來不像」測 personality 的題目，依然 valid。
  - **覆蓋型 / 投射型測驗（Rorschach, TAT）** 的整個典範 = 故意 low face validity。
- **Verdict：** `narrow` — 在「明示性 Likert 量表」傳統內成立，但 face validity 是「necessary」對 implicit / projective / IAT 類測量都站不住。頁面應把範圍限縮在「explicit self-report scales」。

### Claim 3: CFA convergent validity 三條件：AVE ≥ 0.50、Construct reliability > 0.70、Factor loading t statistic p < 0.001（Anderson-Gerbing 1988 + Fornell-Larcker 1981）

- **Q1 假設：**
  - [hidden] 這些 threshold **對所有 constructs / 所有 sample size 普適**。事實上：(a) Cronbach α / CR > 0.70 是 Nunnally 1978 對「early-stage research」的建議，**confirmatory** 階段他建議 0.90；(b) AVE ≥ 0.50 = 「indicator 平均 explained variance > 0.50」是 Fornell-Larcker 自己訂的 rule of thumb，無 simulation 支持。
  - [hidden] **p<0.001 在 N>200 時幾乎一定通過** → 該 threshold 對「該不該過 convergent」實際無 discriminative power。
  - [stated] Anderson-Gerbing 1988 cited。
- **Q2 跨域跨規模：**
  - **跨產業（marketing → 醫療採用 n=50 的 pilot）**：n=50 時 t-stat 達 p<0.001 困難，門檻不切實際。
  - **跨規模（n=200 → n=5000 大型 panel）**：n=5000 時 p<0.001 是 trivial（所有 loadings 都過），threshold 提供零資訊；AVE 與 CR 才是有區辨力的指標。Threshold 結構與 N 強烈互動，頁面未提。
- **Q3 來源：**
  - AVE ≥ 0.50：Fornell-Larcker 1981 —— **primary**, seminal but 是 heuristic, 無 simulation 證據。
  - CR > 0.70：Nunnally 1978 —— heuristic, 被廣泛 misapplied（Nunnally 對 early-stage 是 0.70，confirmatory 是 0.90，page 沒區分）。
  - p<0.001：convention, 無 specific source cited。
- **Q4 反例：**
  - **Hair et al. (2019)** *Multivariate Data Analysis* (8th ed) 與 **PLS-SEM Guidelines (Hair et al. 2017)** 已將 discriminant validity 標準從 √AVE > correlation 改為 **HTMT < 0.85**（見 Claim 4）。Convergent 的 threshold 也補充「在 exploratory 階段可接受 AVE < 0.50 if CR > 0.60」（Fornell-Larcker 自己 1981 文也提這個彈性）。
  - **Cho & Kim (2015)** *Organizational Research Methods* 指出 Cronbach α / CR 是不同意義的可靠性指標，blanket 「> 0.70」threshold 已過時。
- **Verdict：** `brittle` — Threshold 以「硬規則」呈現，但都是 1980s heuristic 且當代 SEM literature 已修正。Page 應註明 thresholds 是 convention 不是定理，且 modern HTMT-based criteria 已取代部分。

### Claim 4: Discriminant validity 用 √AVE > inter-construct correlation（Fornell-Larcker 1981 變異抽取量檢定）

- **Q1 假設：**
  - [hidden] Fornell-Larcker 檢定具備足夠的 **statistical power** 辨認 discriminant problem。
  - [hidden] AVE 為基底的對比是 discriminant validity 的 gold standard。
  - [stated] Fornell-Larcker 1981 cited。
- **Q2 跨域跨規模：**
  - **跨產業**：相同問題，凡 SEM 應用領域都受 Henseler et al. 2015 critique 影響。
  - **跨規模（n=200 中型 → n=2000 大型）**：Henseler 2015 simulation 顯示 Fornell-Larcker 在 n>500、相關 construct（true r=0.85）情境下 **detection rate < 30%**。HTMT 在同條件下 detection rate > 90%。
- **Q3 來源：** Fornell-Larcker 1981 *Journal of Marketing Research* —— **primary, seminal**, 高被引（>50k）。但**頁面完全沒提 Henseler et al. (2015)** *Journal of the Academy of Marketing Science*，這是過去 10 年最重要的 SEM 方法學更新。
- **Q4 反例：**
  - **Henseler, Ringle & Sarstedt (2015)** *JAMS*: Fornell-Larcker 對 highly-similar constructs 的 detection rate 不足。Monte Carlo 顯示 √AVE > r 在 r_true = 0.85, n=500 時偵測力 < 30%。提出 **HTMT (heterotrait-monotrait ratio)** 作為替代，threshold < 0.85（保守）/ < 0.90（寬鬆）。
  - **Voorhees, Brady, Calantone & Ramirez (2016)** *JAMS* 在 marketing 領域 replication 確認 HTMT > Fornell-Larcker。
  - 2025 SmartPLS / Mplus / lavaan default discriminant report 已多含 HTMT。
- **Verdict：** `brittle` — Fornell-Larcker 在 1981-2015 期間是 gold standard，但 2015 後已被 HTMT 取代。頁面只引 Fornell-Larcker → 反映 textbook 滯後業界 10 年。Cross-ref [[concepts/PLS-SEM-vs-CB-SEM]] 有提 HTMT，但 construct-validity 主頁應 inline 提醒。

### Claim 5: 商管研究界 95% 量表預設 reflective（[[concepts/reflective-vs-formative-measurement]] Coltman 2008）→ 對 formative construct 的 validity 評估完全 ignore

- **Q1 假設：**
  - [hidden] Coltman 2008 的「95%」可以**直接 generalize** 到 2026 的 「商管研究界」全體。
  - [hidden] formative construct 的 validity 評估方法**完全 ignore**（強 universal claim）。
  - [stated] Coltman 2008 cited（透過 sister page）。
- **Q2 跨域跨規模：**
  - **跨產業（MIS → marketing）**：Marketing 領域長期使用 formative composite（如 brand equity 含 awareness + association + perceived quality + loyalty 形成式合成）。「95% reflective」不適用 marketing。
  - **跨產業（MIS → ESG / climate research）**：[[concepts/firm-climate-risk]] 類 construct 多為 formative（exposure × vulnerability × adaptive capacity）。「95% reflective」不適用。
  - **跨規模（單篇 paper → 整個學門）**：Coltman 2008 的原始 sample = MIS Quarterly + ISR 期刊 1980-2007，**特定 sub-discipline 的歷史快照**。Page 把它推廣為「商管研究界」現況是 overgeneralization。
- **Q3 來源：** Coltman, Devinney, Midgley & Venaik (2008) *Journal of Business Research* 57(8): 1250-1262 —— secondary, well-cited (>2000 citations) 但 **原 paper 樣本是 MIS journals**, 不是「商管研究界」整體。Page generalizes 過頭。
- **Q4 反例：**
  - **Diamantopoulos & Winklhofer (2001)** *Journal of Marketing Research* 提供 formative construct 的 4 步驟 validity 評估（content specification / indicator specification / collinearity / external validity）—— 不是「完全 ignore」。
  - **Petter, Straub & Rai (2007)** *MIS Quarterly* 後 MIS 領域 formative 採用率上升至 ~15-20% by 2015（Henseler et al. 2017 估計）。
  - **PLS-SEM 整個典範** (Hair et al. 2017, *A Primer on PLS-SEM*) 把 formative measurement 視為核心工具，**有完整 validity 評估規範**（VIF < 5, outer weights significance, indicator loadings > 0.50）。
- **Verdict：** `brittle` — "95% reflective" 是 2008 對 MIS 子領域的 snapshot，被頁面 generalize 為 2026「商管研究界」現況、且 "完全 ignore" 反方法論。實情：formative 有完整 validity 評估規範，採用率有區域與年份差異。

## Overall page verdict

頁面忠實 distill Bhattacherjee Ch7 slides，**作為「該教科書的整理筆記」是 fit-for-purpose**。但作為「construct validity 是什麼」的 declarative 知識，弱點明顯：

1. **單一 source dependency**：100% Bhattacherjee（除四篇 supporting paper），無 Messick / Henseler / Hair 等過去 30 年的方法學更新
2. **Threshold 以硬規則呈現**：1980s heuristic 被當成定理；當代 simulation 證據（Henseler 2015, Cho-Kim 2015, Hair 2017+）完全缺席
3. **Fornell-Larcker 過時**：HTMT 已成 gold standard 10 年，頁面只在 sister page 提及
4. **Coltman 95% claim 過度推廣**：MIS sub-discipline snapshot 被當成商管全體現況
5. **Formative validity 評估存在卻被宣稱 ignored**：Diamantopoulos-Winklhofer 2001、PLS-SEM 典範整套都有 formative validity 規範

### 建議行動

- **添加段落 "Modern Update (post-2015)"**：補 Henseler HTMT + Hair PLS-SEM guidelines + Messick unified view 三條主線
- **軟化 Claim 5**：把「95% reflective」改為「Coltman 2008 在 MIS 期刊樣本中觀察到 95% reflective，marketing/ESG/climate 領域不同」
- **註明 Fornell-Larcker 為「歷史 gold standard，2015 後 HTMT 推薦」**
- **Threshold 段落加 caveat**：「以下 threshold 是 1980s convention，當代研究會考慮 sample size 與 construct nature 調整」
- **可選：跑 wiki-benchmark 對標心理計量（Messick）+ 統計學（power analysis），會更暴露教科書 vs 業界落差**

`base_confidence` 維持 0.55（brittle cap），lifecycle draft → challenged。
