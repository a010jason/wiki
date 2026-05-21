---
title: Critique — Research Design
type: meta
target: concepts/research-design
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 4, brittle: 1, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/research-design`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Research design 是 empirical research 的 blueprint，必須規範 data collection / instrument development / sampling 三大流程。

- **Q1 假設：**
  - [hidden] Design 必須**前置 + 完整 specified** —— 但 grounded theory / lean startup research / 適應性 research 故意 emergent design。
  - [hidden] 三大 process 是窮盡 —— 但 analysis 流程、ethics review、data management 都未列入。
  - [stated] Bhattacherjee Ch5 直接。
- **Q2 跨域跨規模：**
  - **跨產業（management research → ML research）**：ML 領域多數 pre-specify dataset 但實驗 protocol 邊跑邊調（learning rate schedule、ablation 選擇）。「Pre-specified blueprint」不適用 ML R&D。
  - **跨規模（pilot study → large-scale field study）**：pilot study 故意 underspecified 探索 design parameters；large field study 需嚴格 pre-specification（FDA RCT）。Universal blueprint requirement 不對稱。
- **Q3 來源：** Bhattacherjee Ch5 教科書整理 —— secondary。**Glaser-Strauss 1967** *The Discovery of Grounded Theory* / **Yin 2014** *Case Study Research* 5th ed / **Creswell 2014** *Research Design* / **Maxwell 2013** *Qualitative Research Design* 等 design typology 並列 alternative 完全未提。
- **Q4 反例：**
  - **Grounded theory** (Glaser-Strauss 1967, Strauss-Corbin 1990): theoretical sampling 與 constant comparison 都要求**邊蒐邊調**，反對 pre-specified blueprint。
  - **Lean startup customer development** (Blank 2005, Ries 2011): MVP-based iterative learning 反對 fixed-upfront design。
  - **Agile research / discovery research** in PM 領域：sprint-based adaptive design。
- **Verdict：** `narrow` — Blueprint 模型適用 confirmatory + RCT + large-scale survey 等 pre-specified contexts；對 grounded theory / lean startup / agile research 不適用。建議加 caveat「適用 confirmatory pre-specified 研究；emergent / grounded design 故意違反 blueprint 要求」。

### Claim 2: Positivist (演繹, theory-testing, lab/survey, quantitative-default) vs Interpretive (歸納, theory-building, action research/ethnography, qualitative-default)。「重要澄清: positivist/interpretive 不等同 quantitative/qualitative」。

- **Q1 假設：**
  - [hidden] Paradigm 與 reasoning mode + data type 雖**不等同**但仍**強相關**。
  - [hidden] 二分結構窮盡 —— critical realism, pragmatism 第三 paradigm 完全缺席。
  - [stated] page 自己標 ^[extracted] + 教師眉批。
- **Q2 跨域跨規模：**
  - **跨產業**：與 inductive-vs-deductive page critique 重疊 —— ML positivist 多用 inductive、Marxism interpretive 多用 deductive。
  - **跨規模**：mixed methods Tashakkori-Teddlie 2010 主張 paradigm-method 解耦。
- **Q3 來源：** Bhattacherjee 教學分類。Critical realism (Bhaskar 1975, Sayer 1992) + pragmatism (Tashakkori-Teddlie 2010) 第三 paradigm 完全未提。
- **Q4 反例：**
  - **Critical realism**: retroductive 第三 mode, 不純 positivist 也不純 interpretive。
  - **Pragmatist research paradigm** (Morgan 2007 *Journal of Mixed Methods Research*): 主張 paradigm-method 解耦。
- **Verdict：** `narrow` — 二分在教學上整齊，第三 paradigm（critical realism + pragmatism）缺席。建議加段「Critical realism + pragmatist 為第三/第四 paradigm，retroductive 模式不純 inductive 也不純 deductive」。

### Claim 3: 四種 Validity (internal/external/construct/statistical conclusion)；Statistical conclusion validity 對 interpretive design 不適用。

- **Q1 假設：**
  - [hidden] Shadish-Cook-Campbell 4-validity framework 是評估**所有** research 的 universal lens。
  - [hidden] Interpretive research 不需「validity」評估，或用「對應」概念替代。
  - [stated] Statistical conclusion 對 interpretive 不適用 acknowledged。
- **Q2 跨域跨規模：**
  - **跨產業**：design science research (Hevner 2004 *MISQ*) 不採 4-validity，而採 utility / efficacy / efficiency。
  - **跨規模**：qualitative研究（Lincoln-Guba 1985）有完整 alternative 4-criteria 框架。
- **Q3 來源：** Bhattacherjee + Shadish-Cook-Campbell 2002 *Experimental and Quasi-Experimental Designs*。**Lincoln-Guba 1985** *Naturalistic Inquiry* 的 qualitative 4-criteria（credibility, transferability, dependability, confirmability）完全未提。
- **Q4 反例：**
  - **Lincoln & Guba (1985)** *Naturalistic Inquiry*: 4 alternative criteria for qualitative —— credibility (≈internal validity), transferability (≈external validity), dependability (≈reliability), confirmability (≈objectivity)。Page 完全 miss 此 parallel framework。
  - **Tracy (2010)** *Qualitative Inquiry* "Eight 'Big-Tent' Criteria for Excellent Qualitative Research": 提出 8 criteria 包含 sincerity / resonance / meaningful coherence，超越 4-validity。
- **Verdict：** `narrow` — 4-validity 是 positivist universal 但 qualitative tradition (Lincoln-Guba 1985 + Tracy 2010) 有並列 alternative 全未提。建議加段「Qualitative research 對應 Lincoln-Guba 1985 4-criteria framework；Tracy 2010 提出 8-criteria 擴充」。

### Claim 4: Cone of Validity 顯示 internal vs external trade-off 不是絕對 —— Field experiment / Multiple case study / Longitudinal field survey 是「兩高反例」。

- **Q1 假設：**
  - [hidden] 「兩高反例」是 design-level structural property —— 但實作上仍存在資源限制 trade-off。
  - [hidden] Cone of Validity 是 standard framework —— 起源不明確。
  - [stated] page 自承「internal-external validity tradeoff debunked — 待寫」。
- **Q2 跨域跨規模：**
  - **跨產業（medical RCT → IS field study）**：醫療 FDA RCT 強調 internal validity 接受 external 妥協；IS field studies 強調 external，internal 由 statistical control 補足。Trade-off 在 discipline 內仍 default 操作。
  - **跨規模（small-N field experiment → large-N panel survey）**：field experiment n=50 internal 弱; longitudinal n=10,000 external 強 internal 中等。「兩高」是 ideal 不是常態。
- **Q3 來源：** Bhattacherjee Cone of Validity 圖。**Shadish-Cook-Campbell 2002**（4-validity originator）原文觀點：仍承認 trade-off 存在但不是 zero-sum。
- **Q4 反例：**
  - **Cronbach (1982)** *Designing Evaluations of Educational and Social Programs*: 主張 UTOS framework (Units, Treatments, Observations, Settings) 把 internal/external 拆得更細，trade-off 不是 absolute 但 design 約束仍在。
  - **Brewer (2000)** *Handbook of Research Methods in Social and Personality Psychology* Ch1: 整理 internal-external as **gradient**, 不是 binary trade-off。
- **Verdict：** `narrow` — 「兩高反例存在」是正確 critique 但 page 只有 1 句處理，未引 Cronbach 1982 UTOS / Brewer 2000 gradient view 等深入文獻。建議擴展為「Shadish-Cook-Campbell 2002 承認 trade-off 非 zero-sum；Cronbach 1982 UTOS framework + Brewer 2000 gradient view 提供細緻處理」。

### Claim 5: 7 種 popular research designs (experimental/field survey/secondary data/case/focus group/action research/ethnography) + Mixed-mode 推薦 always —— 「collect as much and as diverse data as possible」。

- **Q1 假設：**
  - [hidden] 7 designs 是窮盡 —— 但 design science (Hevner 2004), Q methodology, formal modeling/simulation, network analysis 等不在列。
  - [hidden] Mixed-mode 總是 best —— 但 FDA RCT 故意 NOT mixed-mode。
  - [stated] Bhattacherjee 表格 + 「mixed-mode 推薦」。
- **Q2 跨域跨規模：**
  - **跨產業（management → IS / medical / formal sciences）**：IS 領域 design science research (Hevner-March-Park-Ram 2004 *MISQ*) 是獨立 design 路徑，建構 IT artifacts 而非 study existing phenomena。Medical RCT 故意 pure deductive。Formal sciences (economics theory, mathematical modeling) 不在 7 designs 內。
  - **跨規模（pilot → confirmatory）**：pilot 適合 mixed-mode；confirmatory phase 3 trial 故意 single-method。Universal mixed-mode 不適用。
- **Q3 來源：** Bhattacherjee 教科書 7 designs typology。**Hevner et al. 2004** design science / **Stephenson 1953** Q methodology / **Coleman 1990** *Foundations of Social Theory* formal modeling 全未提。**Bryman 2007** mixed methods 50% failure rate critique 未提。
- **Q4 反例：**
  - **Hevner, March, Park & Ram (2004)** *MIS Quarterly* 28(1): 75-105 "Design Science in Information Systems Research": 是 IS 領域核心 design 路徑，不在 7 designs 內。
  - **Q methodology** (Stephenson 1953, Brown 1980): 結合 quant + qual 但 design ontology 不同於 7 designs。
  - **Bryman (2007)** *Journal of Mixed Methods Research* 1(1): 8-22: 232 篇 mixed-methods 論文中 ~50% 未真正整合 qual + quant —— Universal mixed-mode 推薦過於 aspirational。
  - **FDA Phase 3 RCT**: 故意 NOT mixed-mode, pure deductive single-method confirmatory。
- **Verdict：** `brittle` — 7 designs 列表漏 design science / Q methodology / formal modeling；「Mixed-mode 推薦 always」是 textbook aspiration，Bryman 2007 50% 失敗率反例 + FDA 反例證明 universal claim 過強。建議改為「Bhattacherjee 列 7 種主流 designs；IS design science (Hevner 2004) + Q methodology 為額外 paths；Mixed-mode 在適合情境推薦，但 Bryman 2007 顯示半數論文未真正整合，FDA confirmatory trial 反例存在」。

## Overall page verdict

頁面忠實 distill Bhattacherjee Ch5。**作為「Bhattacherjee research design 教學的整理筆記」是 fit-for-purpose**。但作為「研究設計」的 declarative 知識，幾個系統性弱點：

1. **單一 source dependency**：100% Bhattacherjee Ch5。Yin / Creswell / Maxwell / Hevner / Lincoln-Guba / Cronbach / Brewer 等並列 alternatives 全未提。
2. **Emergent design 缺席**：Grounded theory / lean startup / agile research 反對 pre-specified blueprint，page 未承認此 alternative tradition。
3. **第三 paradigm 缺席**：Critical realism + pragmatism 完全未提（與 inductive-vs-deductive 同問題）。
4. **Qualitative validity 對應框架 missing**：Lincoln-Guba 1985 4-criteria + Tracy 2010 8-criteria 提供 parallel framework 但 page 只承認「Statistical conclusion 對 interpretive 不適用」未進一步。
5. **Cone of Validity 處理過淺**：「兩高反例存在」一句帶過；Cronbach 1982 UTOS + Brewer 2000 gradient 未引。
6. **Design typology 漏 IS 領域核心**：Hevner 2004 design science research (MISQ) 缺席。
7. **Mixed-mode universal claim 過強**：Bryman 2007 critique + FDA 反例 missed。

### 建議行動

- **加段落 "Emergent design tradition"**：Grounded theory, lean startup, agile research
- **加段落 "第三 paradigm"**：Critical realism + pragmatism
- **加段落 "Qualitative validity framework"**：Lincoln-Guba 1985 + Tracy 2010
- **擴展 Cone of Validity 段**：Cronbach 1982 UTOS + Brewer 2000 gradient
- **補 design science research**：Hevner 2004 MISQ
- **軟化 Mixed-mode claim**：引 Bryman 2007 + FDA 反例
- **可選：跑 wiki-benchmark** 對標 IS design science / medical RCT / qualitative research，會更暴露 7 designs typology 的領域 boundary

`base_confidence` 維持 0.55（brittle cap 觸頂），lifecycle draft → challenged。
