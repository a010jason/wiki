---
title: Critique — External Validity
type: meta
target: concepts/external-validity
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 4, brittle: 1, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/external-validity`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 兩個 sub-type — Population validity（推到母體）+ Ecological validity（推到其他現實 setting）。

- **Q1 假設：**
  - [hidden] 2 sub-types 是窮盡 —— 但 Lynch 1982 *JCR* 提出 **4 sub-types**：population / ecological / **temporal** / **treatment variation**。Time generalization 與 treatment generalization 完全缺席。
  - [hidden] Population 與 ecological 互斥 —— 但實務上重疊（推到「未來台灣大學生」同時涉及兩者）。
  - [stated] Bhattacherjee 教科書 2 分類。
- **Q2 跨域跨規模：**
  - **跨產業（management → ML / medical AI）**：ML 領域 **temporal generalizability**（distribution shift, concept drift）是核心問題（Quinonero-Candela et al. 2009 *Dataset Shift in Machine Learning*）。醫療 AI 模型 train on 2018-2020 data，2024 deploy 時疾病 pattern 改變 —— 不是 population 或 ecological，是 temporal validity。
  - **跨規模（單 study → multi-site replication）**：multi-site replication 涉及 ecological + temporal 同時，page 2-type 框架不足。
- **Q3 來源：** Bhattacherjee 2-type。**Lynch (1982)** *Journal of Consumer Research* 9(3): 225-239 "On the External Validity of Experiments in Consumer Research" 4-type framework + **Calder-Phillips-Tybout (1981)** *JCR* effect-vs-theory application generalizability 區分全未提。
- **Q4 反例：**
  - **Lynch (1982)** 4-type framework: 加 temporal + treatment variation。
  - **Calder-Phillips-Tybout (1981)** *JCR*: 區分「**effect generalizability**」（直接推 effect size）vs「**theory generalizability**」（推 underlying mechanism）—— 兩者要求不同。
  - **ML distribution shift literature** (Quinonero-Candela 2009): temporal/covariate/concept shift 是獨立 validity dimensions。
- **Verdict：** `narrow` — 2-type 框架在 1980s management research 是 textbook 標準，但 Lynch 1982 4-type + ML 領域 temporal/distribution shift 顯示 2 type 不足。建議加段「Lynch 1982 4-type framework (population/ecological/temporal/treatment) + Calder 1981 effect-vs-theory generalizability 為擴展」。

### Claim 2: Field survey / Field study / Naturalistic study 強；Lab experiment 弱（artificially contrived treatments）。

- **Q1 假設：**
  - [hidden] Lab experiment 的目標 = 直接 generalize observed effects to natural settings —— 但 Mook 1983 反駁：lab 目標是 **mechanism identification 不是 effect transfer**。
  - [hidden] Field study 自動 generalizable —— 但 field study 的 sample (e.g., 特定醫院) 也是有限 population，不必然 generalize。
  - [hidden] Naturalistic = high external validity 等價 —— 但 naturalistic 中的 selection bias 可削弱 generalization。
  - [stated] Bhattacherjee 表格。
- **Q2 跨域跨規模：**
  - **跨產業（cognitive psych → 醫療 AI）**：認知心理學 lab studies 主張 mechanism universality（如 visual attention 機制）；現代 brain imaging studies 仍多 lab-based, 因 mechanism-level generalization。
  - **跨規模（單一 field site → multi-site）**：單一 field site 的 external validity 未必勝過 lab。
- **Q3 來源：** Bhattacherjee 教科書 hierarchy。**Mook (1983)** *American Psychologist* 38(4): 379-387 "In Defense of External Invalidity" 完全未提。
- **Q4 反例：**
  - **Mook (1983)** 主張 lab experiments 目標是 **theoretical question testing 而非 effect generalization**。「External invalidity」可被 acceptable when goal is mechanism。
  - **Anderson-Lindsay-Bushman (1999)** *Current Directions in Psychological Science*: 整理 38 個 meta-analyses 顯示 lab effects 與 field effects 高度 correlated (r ≈ 0.73)，「lab artificiality」過度誇大。
  - **單一醫學中心 field study** (e.g., Mass General 單一 hospital 研究): field 但 ecological validity 有限。
- **Verdict：** `narrow` — Field strong / Lab weak hierarchy 在 ecological generalization 情境成立，但 mechanism-level generalization 不適用；Anderson-Lindsay-Bushman 1999 meta-meta-analysis 顯示 lab-field correlation r=0.73。建議改為「Lab experiment 在 effect transfer 弱；mechanism-level 跨 lab-field correlation r≈0.73 (Anderson 1999)；Mook 1983 主張 lab 目標應為 mechanism testing」。

### Claim 3: Internal vs External trade-off「不是絕對」—— Field experiment / Longitudinal field survey / Multiple case study 是兩高反例。

- **Q1 假設：** 與 research-design Cone of Validity claim 重疊。
- **Q2 跨域跨規模：** 同。
- **Q3 來源：** Bhattacherjee 一句帶過 + page 自承「synthesis/internal-external-validity-tradeoff-debunked — 待寫」。Cronbach 1982 UTOS / Brewer 2000 gradient view 未引（與 research-design critique 重疊）。
- **Q4 反例：** 同 research-design Claim 4。
- **Verdict：** `narrow` — 主張正確但處理過淺（一句 + 三例）。建議擴展引 Cronbach 1982 UTOS framework + Brewer 2000 gradient view + Shadish-Cook-Campbell 2002 reformulation，並補完 待寫 synthesis page。

### Claim 4: Random selection → 提升 external validity；Random assignment → 提升 internal validity。當資源限制無法 random selection 時，random assignment 仍可保 internal validity，但跨母體 generalizability 較難確認。

- **Q1 假設：**
  - [hidden] Random selection + Random assignment 是**獨立的兩個 levers**，可分別 deploy。
  - [hidden] 實務上 RCT 通常 random select —— 但**幾乎所有 RCT 都 NOT random select**，eligibility criteria 嚴格限縮 sample。
  - [hidden] 「跨母體 generalizability 較難確認」是 mild caveat —— 但實證顯示 RCT effects 在 trial-eligible vs general population 可差 50%+ (Rothwell 2005 Lancet)。
  - [stated] Bhattacherjee 教科書 standard claim。
- **Q2 跨域跨規模：**
  - **跨產業（management → 醫療 RCT）**：FDA Phase 3 trial sample 通常排除老人、孩童、孕婦、合併症患者、polypharmacy 等 —— 「random selection」對絕大多數 RCT 是 fiction。Rothwell 2005 *Lancet* 365: 82-93 "External validity of randomised controlled trials: 'to whom do the results of this trial apply?'" 整理顯示 trial-eligible population 通常 < 10% of real-world patients。
  - **跨規模（pilot RCT → pragmatic trial）**：explanatory RCT 強 internal validity 弱 external；pragmatic trial (Schwartz-Lellouch 1967, Roland-Torgerson 1998) 故意設計 high external。**Different RCT 類型有不同 external profile**，page 把 RCT 視為單一 design。
- **Q3 來源：** Bhattacherjee 教科書 simple framing。**Rothwell 2005 Lancet** （external validity RCT 標誌性 critique）+ **Schwartz-Lellouch 1967 explanatory vs pragmatic trial** + **CONSORT extensions for pragmatic trials** (Zwarenstein et al. 2008 BMJ) 全未提。
- **Q4 反例：**
  - **Rothwell (2005)** *Lancet*: 醫療 RCT 的 random assignment 強 internal validity，但 random selection 幾乎不存在，trial-eligible < 10% of real-world patients。「Random selection → external validity」實務不成立。
  - **Schwartz-Lellouch (1967)** *Journal of Chronic Diseases*: explanatory（強 internal）vs pragmatic（強 external）trial 是 design 選擇，非 random selection 解決。
  - **Frieden (2017)** *NEJM* "Evidence for Health Decision Making — Beyond Randomized, Controlled Trials": 主張 real-world evidence (RWE) 與 cohort studies 在 external validity 勝過 RCT。
  - **FDA 21st Century Cures Act (2016)**: 正式接受 RWE 作為 supplemental evidence，部分原因即 RCT external validity 不足。
- **Verdict：** `brittle` — page 採 1979 textbook framing 將 random selection 視為標準工具，**忽略 50 年醫療 RCT 實證顯示 random selection 幾乎不可行 + trial-eligible population < 10%**。「跨母體 generalizability 較難確認」是 understatement。建議改寫為「Random selection 理論上提升 external validity 但醫療 RCT 實務幾乎不可行 (Rothwell 2005 Lancet)；pragmatic trial (Schwartz-Lellouch 1967) 與 RWE (FDA 2016) 是 alternative external validity 路徑」。

### Claim 5: 醫療 AI 5 項 external validity 挑戰 — 訓練 site bias / Demographic narrow / Camera scanner 型號 / 病程分佈 / 時間漂移。

- **Q1 假設：**
  - [hidden] 5 項是窮盡 —— 但漏 label noise heterogeneity、regulatory differences (CE vs FDA vs NMPA)、screening vs symptomatic population shift、prevalence-driven PPV shift 等多項。
  - [hidden] Bias 是 binary 存在/不存在 —— 但實務上是 continuous fairness metric (Demographic Parity, Equalized Odds 等)。
  - [stated] ^[inferred] tag —— Jason 自承推論。
- **Q2 跨域跨規模：**
  - **跨產業（醫療影像 → 醫療 NLP / 病理 / 基因組）**：影像 AI external validity 挑戰與 病理 AI、基因組學 AI、臨床 NLP 不同。Stain variation (病理) / sequencer batch effect (基因) / institutional jargon (NLP) 不在 5 項。
  - **跨規模（單醫院 deployment → 跨國 deployment）**：跨國有 regulatory + epidemiology + healthcare system 等額外 dimensions。
- **Q3 來源：** ^[inferred] Jason 推論，無 specific paper cited。**Finlayson et al. (2021)** *NEJM* "The Clinician and Dataset Shift in Artificial Intelligence" / **Sounderajah et al. (2021)** *Nature Medicine* "STARD-AI checklist" / **Liu et al. (2019)** *Lancet Digital Health* DECIDE-AI 等醫療 AI external validity 文獻全未提。
- **Q4 反例：**
  - **Finlayson et al. (2021)** *NEJM* 385(3): 283-286: 系統整理醫療 AI dataset shift 8 types: institutional / epidemiological / behavioral / technological / etiological / pre-modification / modification / post-implementation。5 項只 cover 1-2 type。
  - **Prevalence-driven PPV shift**: Bayes 定理 PPV depends on prevalence; AI model F1 stable but PPV 跨人群可變化 10x。
  - **Regulatory shift**: CE-marked AI in EU 移到 FDA 需要重新驗證 external validity，反向亦然。
- **Verdict：** `narrow` — 5 項 mention 是 reasonable starting point 但遠未完整。Finlayson 2021 NEJM 8-type dataset shift framework + PPV shift + regulatory shift 提供更完整 taxonomy。建議改寫為「醫療 AI external validity 挑戰 (Finlayson 2021 NEJM 8-type dataset shift framework)」並引 STARD-AI + DECIDE-AI 等 reporting standards。

## Overall page verdict

頁面忠實 distill Bhattacherjee Ch5 + 一些醫療 AI 應用。**作為「Bhattacherjee external validity 教學的整理筆記」是 fit-for-purpose**。但作為「外部效度」的 declarative 知識，幾個系統性弱點：

1. **2-type 框架過簡**：Lynch 1982 JCR 4-type (加 temporal + treatment) + Calder-Phillips-Tybout 1981 effect-vs-theory 區分缺席。
2. **Lab vs Field hierarchy 過嚴**：Mook 1983 lab 目標 mechanism 不是 effect transfer + Anderson 1999 lab-field correlation r=0.73 未提。
3. **Trade-off 處理過淺**：與 research-design Cone of Validity 同問題，一句帶過 + 待寫 synthesis 未補。
4. **Random selection 對 RCT 是 fiction**：Rothwell 2005 Lancet trial-eligible < 10% + Schwartz-Lellouch 1967 pragmatic trial + FDA 2016 RWE 接受度 完全缺席。
5. **醫療 AI 5 challenges 漏多項**：Finlayson 2021 NEJM 8-type dataset shift framework + STARD-AI + DECIDE-AI 醫療 AI reporting standards 未提。
6. **單一 source dependency**：100% Bhattacherjee + Jason 自己推論的醫療 AI 段落。

### 建議行動

- **加段落 "Lynch 4-type framework"**：加 temporal + treatment validity
- **加段落 "Mook 1983 lab 目標重新框架"**：lab 不必直接 generalize；Anderson 1999 r=0.73
- **擴展 trade-off 段**：Cronbach 1982 UTOS + Brewer 2000 gradient view，補完 待寫 synthesis page
- **改寫 Claim 4**：Rothwell 2005 RCT external validity critique + pragmatic trial + RWE alternative
- **重寫醫療 AI 段**：Finlayson 2021 NEJM 8-type dataset shift framework 為基底
- **可選：跑 wiki-benchmark** 對標 ML distribution shift literature + 醫療 RCT generalizability，會更暴露 1979 框架的時代局限

`base_confidence` 維持 0.55（brittle cap 觸頂），lifecycle draft → challenged。
