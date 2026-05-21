---
title: Critique — Reflective vs Formative Measurement
type: meta
target: concepts/reflective-vs-formative-measurement
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.50 → 0.50 }
---

# Critique — `concepts/reflective-vs-formative-measurement`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Reflective vs Formative 是 Coltman et al. (2008) JBR 提出的核心 measurement decision — indicator 反映 construct vs indicator 形成 construct，因果方向、indicator 互換性、相關性都對立。

- **Q1 假設：**
  - [hidden] Reflective / formative 是**互斥且窮盡**的二分類。
  - [hidden] Coltman 2008 是 canonical 框架 —— 事實上是**多年文獻的綜述**而非首發：Bollen-Lennox 1991 (*Psychological Bulletin*), Edwards-Bagozzi 2000 (*Psychological Methods*), Jarvis-Mackenzie-Podsakoff 2003 (*JCR*) 早於 Coltman。
  - [stated] Coltman 2008 cited 為主要 source。
- **Q2 跨域跨規模：**
  - **跨產業（marketing → 醫療 PRO）**：SF-36 健康量表理論上是 formative（生理 + 心理 + 社會功能組合），但常以 reflective summary score 報告。實務上 reflective/formative 區分模糊化。
  - **跨規模（multi-item scale → single-item global rating）**：「整體滿意度 1-10」這類單題量表完全不適用 Coltman 框架。框架預設 multi-item，limited applicability。
- **Q3 來源：** Coltman et al. 2008 *Journal of Business Research* 61(12): 1250-1262 —— **secondary**, 高被引（>4000）。但**前置文獻** Bollen-Lennox 1991, Jarvis et al. 2003 完全未引 —— page 把 Coltman 呈現為「提出者」而非「綜述者」。
- **Q4 反例：**
  - **MIMIC models** (Multiple Indicators Multiple Causes; Jöreskog-Goldberger 1975, Bollen 1989) 同一 construct 可**同時**有 reflective + formative indicators，binary split 過於粗糙。
  - **Cenfetelli & Bassellier (2009)** *MIS Quarterly*：純 formative-only constructs 在實際研究 < 5%，多數是 hybrid。
  - **Diamantopoulos, Riefler & Roth (2008)** 提出 3-type 分類：reflective / formative / **composite**（不假設 latent，純線性組合，如 CPI / HDI）—— Coltman 二分把第三類強塞進 formative。
- **Verdict：** `narrow` — Coltman framework 在教學上 widespread 但是**綜述非原創**，且 binary split 忽略 MIMIC + composite 第三類。建議加註「Coltman 2008 是文獻綜述；Bollen-Lennox 1991, Jarvis 2003 為前置；MIMIC + composite 是第三/第四 mode」。

### Claim 2: 因果方向測試（"remove indicator → construct change?"）可靠區分 reflective vs formative — SES、CPI 例為 formative，religiosity 為 reflective。

- **Q1 假設：**
  - [hidden] 因果方向**可在資料前 a priori 判定**且結果穩定。
  - [hidden] 「移除 indicator 後 construct 是否改變」是研究者直觀判斷可解 —— 事實上是 theory-laden judgement。
  - [hidden] 同一 construct 在不同研究者眼中的因果方向會一致。
  - [stated] 教師連發三問範例。
- **Q2 跨域跨規模：**
  - **跨產業（economics → 醫療滿意度）**：「等待時間」→「滿意度」是 cause（formative）；但「我等了好久」→「滿意度」是 effect（reflective）。**Item wording 決定因果方向**，不是 construct 本質。
  - **跨文化**：Western individualism 可能 reflective（latent trait）；collectivist context 為 formative（不同 practices 組合而成）。同一 construct，因文化異向 —— a priori 測試失敗。
- **Q3 來源：** Bhattacherjee Ch6 + Coltman 2008 教學範例。Howell-Breivik-Wilcox 2007（**主要批判**） **完全未引**。
- **Q4 反例：**
  - **Howell, Breivik & Wilcox (2007)** *Psychological Methods* 12(2): 205-218 證明「因果方向測試」在實務上是**循環的**：研究者先依 theory 決定 direction，再宣稱 test 「confirms」之。真正 empirical 的因果方向探索（如實驗操弄 indicator）幾乎沒人做。
  - **Bagozzi (2007)** 反駁 Coltman 2008，主張多數所謂「formative」實則是 mis-specified reflective —— 同 SES 案例可被 reframed 為「真實階層感」的 reflective indicator。
- **Verdict：** `brittle` — page 把 causal direction test 呈現為「教師範例三問即可定奪」，但 2007-2009 的文獻爭議顯示此測試在研究實務上**幾乎 tautological**。應補引 Howell et al. 2007 + Bagozzi 2007 的批判。

### Claim 3: 同一 construct 可雙向操作化 —「Performance / Customer Satisfaction 是 reflective 還是 formative？It depends.」

- **Q1 假設：**
  - [hidden] 研究者**可自由選擇**任一 operationalization。
  - [hidden] 選擇不會根本改變 measurement 內容。
  - [stated] 教師範例直接呈現兩種操作化。
- **Q2 跨域跨規模：**
  - **跨產業（marketing performance → 醫療 outcome）**：reflective performance（Likert「整體治療感受」）vs formative outcome（lab values + symptom scores 組合）—— 名為「performance」實則量到不同東西。Reframing 不只是 measurement choice，是 conceptual choice。
  - **跨規模（pilot n=50 → registry n=10,000）**：小樣本 競爭模型 fit 無法區分；大樣本可實證選擇。「It depends」在小樣本 essentially 是「無從選擇」。
- **Q3 來源：** Bhattacherjee 教學範例，無 specific paper cited。Diamantopoulos-Siguaw 2006 反方文獻未引。
- **Q4 反例：**
  - **Diamantopoulos & Siguaw (2006)** *British Journal of Management* 17(4): 263-282 實證顯示同一 construct 用 reflective vs formative operationalization 在 structural model 中產出**顯著不同**的 path coefficient 與 fit indices。**選擇是 consequential，不是 free choice**。
  - **MacKenzie, Podsakoff & Jarvis (2005)** *JAP*: mis-specification 為 reflective when actually formative 會導致 Type I error rate 上升 4-5x。
- **Verdict：** `narrow` — "It depends" 在哲學層次成立但實證後果不對稱。建議加「Diamantopoulos-Siguaw 2006 顯示選擇後果 consequential，path coefficients 顯著差異；MacKenzie 2005 顯示 mis-specification 增加 Type I error」。

### Claim 4: Coltman 等發現 JIBS / JoM 2006 約 95% 量表預設 reflective，完全沒考慮 formative —— 研究界盲點。

- **Q1 假設：**
  - [hidden] 2006 年單一 year × 2 journals 的 snapshot 可**直接 generalize** 到 2026 整個研究界。
  - [hidden] 「完全沒考慮過」推論 authors 未經思考 —— 也可能是 considered 並 rejected（雖無法 verify）。
  - [stated] Coltman 2008 specific 95% 數字 cited。
- **Q2 跨域跨規模：**
  - **跨產業（marketing JoM + IB JIBS → IS MISQ）**：Petter-Straub-Rai (2007) *MIS Quarterly* 在 IS 領域發現 formative misapplication 與 use 共約 30%（不是「完全沒」）；Roberts-Thatcher (2009) 估計 IS 領域 formative 採用率 ~15-20%（2009 數據）。
  - **跨規模（2006 snapshot → 2026 現況）**：PLS-SEM 教科書（Hair et al. 2017 *Primer*, 2022 *Advanced Issues*）2010 後爆炸成長；formative 在 PLS-SEM 文獻中是 default discussion。「95% 盲點」是 2006 pre-PLS-SEM-boom 的歷史快照。
- **Q3 來源：** Coltman 2008 引用其原始 sample —— **JIBS 與 JoM 2006 single year**, 兩本期刊。Page 把這推廣為「研究界」整體現況是 **overgeneralization 兩個維度**（單年 + 兩 journals）。
- **Q4 反例：**
  - **Petter, Straub & Rai (2007)** *MIS Quarterly* 31(4): 623-656：IS 領域 formative 採用率與 misuse 共約 30%，遠高於 5%。
  - **PLS-SEM 整套典範** (Hair et al. 2017 *A Primer on PLS-SEM*, 2nd ed): formative 是核心工具，有完整評估規範（VIF < 5, outer weights significance, indicator loadings > 0.50）。
  - **Henseler, Hubona & Ray (2016)** *Industrial Management & Data Systems*: 2010s IS 文獻 formative 使用率持續上升。
  - **Marketing brand equity research** (Yoo & Donthu 2001, *Journal of Business Research*) 長期使用 formative composite。
- **Verdict：** `brittle` — 「95% reflective」是 2006 兩 journals snapshot 被 generalized 為 2026 研究界整體；PLS-SEM movement 已部分關閉這個 blind spot。建議改寫為「Coltman 2008 在 JIBS+JoM 2006 sample 中觀察到 95% reflective；IS / PLS-SEM 文獻後續顯著提升 formative 使用率」。

### Claim 5: Formative 不可用 CFA / Cronbach α；需 PLS-SEM with formative path —— item 不可隨意刪。

- **Q1 假設：**
  - [hidden] PLS-SEM 是 formative 的**唯一**方法。
  - [hidden] Cronbach α「不適用」是 universal，沒有其他 reliability 觀念可用。
  - [stated] table 95-99 列出 PLS-SEM 推薦。
- **Q2 跨域跨規模：**
  - **跨產業（marketing → ML feature engineering）**：RFM score（recency-frequency-monetary 組合）是 formative composite feature，現代 ML 用 gradient boosting / linear models 不用 PLS-SEM。PLS-SEM 不是 universal。
  - **跨規模（n=200 → n=20）**：n=20 時 PLS-SEM 也無法穩定識別 formative model；page 沒交代 sample size minimum。
- **Q3 來源：** Diamantopoulos 2006 cited，但 PLS-SEM-only 主張本身的 source 是 Hair et al. 2017 系列，**未明引**。
- **Q4 反例：**
  - **MIMIC models in CB-SEM** (Jöreskog 1973, Bollen 1989) 可處理混合 formative + reflective —— **CFA-based** 而非 PLS-SEM。
  - **Williams, Edwards & Vandenberg (2003)** *Journal of Management* 提出 CB-SEM 2-step procedure 處理 formative，前提是 construct 至少有 2 個 reflective indicator 或 2 個 outcome 作 identification。
  - **Hair et al. (2017)** 本人也承認 CB-SEM 在 identification conditions 滿足時可 model formative —— page 過度二分。
  - **Composite reliability (Werts-Linn-Joreskog 1974)** 與 **rho_A (Dijkstra-Henseler 2015)** 提供 formative-friendly reliability 概念，不是「α 不適用就完全沒 reliability」。
- **Verdict：** `brittle` — "Formative 必須 PLS-SEM, CFA 完全不可用" 過強；MIMIC、Williams 2003 2-step CB-SEM 都是 viable 替代。Composite reliability / rho_A 也適用 formative。Page 應軟化為「PLS-SEM 是 formative 的主流路徑，但 MIMIC + 2-step CB-SEM 是 alternative」。

## Overall page verdict

頁面忠實 distill Coltman 2008 + Bhattacherjee Ch6 + 教師範例，**作為「Coltman 框架的整理筆記」是 fit-for-purpose**。但作為「reflective vs formative measurement」的 declarative 知識，幾個系統性弱點：

1. **時間錯位（time-frozen at 2006-2008）**：Coltman 2008 = JIBS+JoM 2006 snapshot；PLS-SEM 後續 boom（Hair 2017+）顯著改變 formative 採用率，頁面未更新
2. **前置文獻缺席**：Bollen-Lennox 1991, Jarvis et al. 2003, Edwards-Bagozzi 2000 都是 Coltman 之前的關鍵奠基者，全未提
3. **反方論述完全缺席**：Bagozzi 2007 反 Coltman、Howell 2007 反 causal direction test、Diamantopoulos-Riefler-Roth 2008 第三類 composite —— 全未引
4. **Binary split 過簡**：MIMIC + composite 是第三/第四 mode，被頁面壓進 formative
5. **PLS-SEM-only 立場過強**：MIMIC + 2-step CB-SEM 是 viable alternative

### 建議行動

- **加段落 "預前置文獻"**：列 Bollen-Lennox 1991 + Jarvis 2003 + Edwards-Bagozzi 2000 為 Coltman 的奠基
- **加段落 "反方文獻 (2007-2009)"**：Bagozzi 2007, Howell 2007, Diamantopoulos-Riefler-Roth 2008
- **軟化 Claim 4**：「Coltman 2008 在 JIBS+JoM 2006 sample 中觀察到 95%；PLS-SEM movement 後形成性採用率上升」
- **加段落 "MIMIC 與 composite"**：第三類 + Coltman 2008 未涵蓋的 hybrid
- **軟化 Claim 5**：「PLS-SEM 是主流但非唯一；MIMIC + Williams 2003 2-step CB-SEM 是 alternative」
- **可選：跑 wiki-benchmark** 對標心理計量 70 年論辯（Cronbach-Meehl → Bollen-Lennox → Edwards-Bagozzi → Coltman → Henseler PLS-SEM）

`base_confidence` 維持 0.50（已在 brittle cap 0.55 內），lifecycle draft → challenged。
