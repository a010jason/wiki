---
title: Critique — Whetten 1989 Theory Building Blocks
type: meta
target: concepts/theory-building-blocks-whetten
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 4, brittle: 1, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/theory-building-blocks-whetten`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Theory 由 4 個 building block 組成：Constructs（What）+ Propositions（How）+ Logic（Why）+ Boundary Conditions（Who/When/Where）。

- **Q1 假設：**
  - [hidden] 4 blocks 是**窮盡 + 互斥**的 decomposition。
  - [hidden] 每個 theory 都可被乾淨拆解成這 4 個 block 而無 remainder。
  - [hidden] 「Constructs」是 atomic unit —— 但 construct 本身也是 theory-laden（Hanson 1958 theory-ladenness）。
  - [stated] Whetten 1989 AMR 直接列舉。
- **Q2 跨域跨規模：**
  - **跨產業（management → ML / 物理）**：ML 論文 (NeurIPS / ICML 標準格式) 是 Model + Experiments + Ablations + Limitations，**不分** constructs / propositions / logic / boundary。物理論文 = Formalism + Predictions + Experimental Tests，也非 4 blocks。Whetten 框架是 management organizational research 的 disciplinary 慣例。
  - **跨規模（micro-theory → grand theory）**：micro-theory（如 leader-member exchange）能乾淨切 4 blocks；grand theory（Marxism, institutional theory, structuration）模糊 —— 「constructs」「propositions」「boundary」全是流動的。
- **Q3 來源：** Whetten 1989 *Academy of Management Review* 14(4): 490-495 —— **primary, seminal**, 高被引（>10k）。但 **Bacharach (1989)** 同期 *AMR* 14(4): 496-515 *Organizational Theories: Some Criteria for Evaluation* 提出**不同** decomposition（variables + relationships + boundaries —— 只有 3 blocks）—— 兩者並列卻 page 只引 Whetten。**Dubin (1978)** *Theory Building* 提出 7 elements（units, laws of interaction, boundaries, system states, propositions, empirical indicators, hypothesis）—— 更精細。
- **Q4 反例：**
  - **Bacharach 1989** 同期 AMR 3-blocks vs Whetten's 4-blocks: 沒有共識「正確」decomposition。
  - **Dubin 1978**: 7 elements, 更精細。
  - **Pearl 2009** *Causality*: 因果 theory 應拆為 DAG structure + 因果 estimands + assumptions + identification strategy —— 完全不同 ontology。
- **Verdict：** `narrow` — Whetten 4 blocks 在 management academic writing 是 useful pedagogical scaffold，但跨領域（物理 / ML / Pearl 因果）與跨同期文獻（Bacharach 1989 / Dubin 1978）多個 alternative decomposition 存在。建議加段「Whetten 4 blocks 是 management research 教學共識；同期 Bacharach 3-blocks 與 Dubin 7-elements 為 alternative」。

### Claim 2: Logic（Why）是最重要的 block —— 「Why」才是 theory 的核心；缺 logic 就不是 theory，無論 construct + proposition 多漂亮（Sutton-Staw 1995 cross-ref）。

- **Q1 假設：**
  - [hidden] 一個 block 可被排為「最重要」 —— 但這預設 theory 有 hierarchical 重要性結構。
  - [hidden] 「Why」優先於「What」 —— 但 descriptive 與 taxonomic theory 的 What 才是核心。
  - [stated] Whetten 1989 強調 + Sutton-Staw 1995 cross-ref。
- **Q2 跨域跨規模：**
  - **跨產業（management → ML / CS）**：機器學習領域 predictive accuracy >> causal explanation。**Why a Transformer works** 仍是 open question（attention is all you need, 7 年後仍無共識 mechanism）但 Transformer 是 ML canonical theory。Why 在 ML 不是核心。
  - **跨規模（descriptive science → explanatory science）**：Periodic Table (Mendeleev 1869) = What-centric, Why 是 quantum mechanics 後補的；Linnaean taxonomy = What-only, no Why。**Big Five personality** = empirical-What 沒有強 Why mechanism (genetic + environmental factors 細節未明)，仍是 personality canonical theory。
- **Q3 來源：** Whetten 1989 + Sutton-Staw 1995 cross-ref —— **management editorial 立場單一**。物理 / 化學 / 生物分類學的 theory 概念完全缺席。
- **Q4 反例：**
  - **Periodic Table / Linnaean classification / Big Five personality** = What-centric canonical theories，「Why」是後補或薄弱。
  - **Newton 1687** *Principia*: F=ma 是 What-relationship 而非 Why-explanation；Newton 自承無 mechanism「I frame no hypotheses」。仍是物理 paradigm theory。
- **Verdict：** `narrow` — Whetten「Logic 最重要」立場在 explanatory social science 成立，但跨領域 What-centric theory 廣存。建議改為「在 management / explanatory social science 內 Logic 是核心；descriptive / taxonomic / predictive theory 中 What 或 model performance 可取代 Why」。

### Claim 3: 每個 block 有 specific evaluation criteria —— 完整性/相關性 (Constructs) / 方向/形式/強度 (Propositions) / 內部一致/可信度 (Logic) / range/limits/scope (Boundary)。

- **Q1 假設：**
  - [hidden] 這些 criteria 是**可操作化** + 跨 reviewer 一致 applied。
  - [hidden] Criteria 之間無 trade-off —— 但實務上「完整性」與「parsimony」對立、「強度」與「unfalsifiability」對立。
  - [stated] Whetten 1989 列舉 criteria。
- **Q2 跨域跨規模：**
  - **跨產業（management peer review → 其他學科）**：管理學 peer review 對「Logic 內部一致」評估有 disciplinary 慣例；ML peer review 對「Logic」幾乎不評，主要評 empirical performance + ablation rigor。
  - **跨規模（短 conference paper → 長 journal article）**：8-page conference 限縮 Logic 段落只能 2-3 句；長 journal 可深入。Criteria 在不同 paper-length 適用度不同。
- **Q3 來源：** Whetten 1989 + 教學分類。Peer review reliability 文獻（Cole-Cole-Simon 1981 *Science*, Bornmann 2011 *Annual Review of Information Science*）完全缺席。
- **Q4 反例：**
  - **Bornmann (2011)** *Annual Review of Information Science and Technology* 45: 197-245: peer review inter-rater reliability ~0.2-0.3 (poor agreement)。Criteria 之間 reviewers 共識**差**。
  - **Cole, Cole & Simon (1981)** *Science* 214: 881-886: NSF panel reviewer agreement 對「significance」與「quality」judgement 接近隨機。
  - **Sutton-Staw 1995 vs Whetten 1989** 在同 outlet 也對「什麼算強 Logic」缺乏共識。
- **Verdict：** `narrow` — Criteria 在 textbook level 列出乾淨，但 peer review 實證顯示 reviewers 對 criteria 共識差。建議加段「Whetten criteria 是 normative ideal；Bornmann 2011 顯示 peer review 對 theoretical evaluation inter-rater reliability ~0.2-0.3」。

### Claim 4: 經濟與政治理論基於不同 underlying assumption，**不直接可比較**；若研究目標是組織內權力結構，不該用經濟理論。

- **Q1 假設：**
  - [hidden] 經濟 / 政治 theory 的 underlying assumptions **不可調和**。
  - [hidden] 「Incommensurability」是 absolute, 非 partial。
  - [hidden] 組織內權力 = 政治 domain, 不能用經濟分析。
  - [stated] Whetten boundary conditions 案例。
- **Q2 跨域跨規模：**
  - **跨產業（pure economics → political economy）**：**Public Choice Theory** (Buchanan-Tullock 1962 *The Calculus of Consent*) 將 rational-choice 假設**直接應用** 到 political behavior（voter, legislator, bureaucrat）—— 整個學派 explicitly 跨經濟-政治 boundary，共享 rational-choice 假設。Nobel 1986 經濟學獎給 Buchanan 即承認此跨界貢獻。
  - **跨規模（國家政策 → 組織內政治）**：**Pfeffer & Salancik (1978)** *The External Control of Organizations* + **Pfeffer (1981)** *Power in Organizations* 用 dependency / resource-based 經濟邏輯分析組織內權力 —— Whetten 自己（同領域 OB scholar）應該知道但 page 未提。
- **Q3 來源：** Whetten 1989 generic claim。Public choice theory / political economy / 組織政治經濟學 文獻完全缺席。
- **Q4 反例：**
  - **Public Choice Theory (Buchanan-Tullock 1962)**: rational-choice 跨經濟政治 boundary, Nobel 1986 認可。
  - **Stigler (1971)** *Journal of Law and Economics* "The Theory of Economic Regulation": 跨經濟政治分析監管 capture。
  - **North (1990)** *Institutions, Institutional Change and Economic Performance*: New Institutional Economics 整個典範跨經濟政治。
  - **Pfeffer-Salancik (1978) + Pfeffer (1981)** 組織理論用經濟 dependency 分析權力 —— management 領域內部反例。
- **Verdict：** `brittle` — 「經濟政治不可比較」是 1970s pre-public-choice 思維；Buchanan 1986 Nobel 後此 claim 在學界已不成立。Pfeffer 自己用經濟邏輯分析組織政治更顯諷刺。建議改寫為「Whetten 1989 引用此 boundary 案例反映 1980s 主流見解；Public Choice + New Institutional Economics + Pfeffer 組織政治經濟學顯示跨領域分析可行，但需 explicit 假設說明」。

### Claim 5: 框架可同等應用於 PRD 寫作 —— What (concepts) / How (KPI影響) / Why (mechanism) / Boundary (用戶情境)，「Why 段最容易薄弱」。

- **Q1 假設：**
  - [hidden] PRD 本質上像 academic theory。
  - [hidden] What/How/Why/Boundary 4 block 在 PM context 等同 academic context 有意義。
  - [stated] page 自承 ^[inferred] tag —— Jason 推論不是 Whetten 原意。
- **Q2 跨域跨規模：**
  - **跨產業（management academic → PM 實務）**：PRD 主要目的是 alignment + execution + decision documentation，不是 falsifiable theory 建構。Whetten 框架 over-academicizes PRD。
  - **跨規模（5-人 startup PRD → 500-人 enterprise PRD）**：startup PRD 強調速度，Whetten 4 blocks 加 friction；enterprise PRD 強調 cross-team alignment，4 blocks 可能 valuable。Universal applicability 過強。
- **Q3 來源：** ^[inferred] 自承為 Jason 推論，無 PM 領域 source。
- **Q4 反例：**
  - **Amazon Working Backwards** (PR-FAQ): 結構為 Press Release + FAQ + FAQs，不映射 4 blocks。
  - **Stripe RFC / Atlassian PageDuty / Linear's PRD template**: 各有結構（Problem/Solution/Tradeoffs/Open Questions），不採 Whetten 4 blocks。
  - **Atlassian PRDs** 強調「decision log」+「assumptions」+「success metrics」+「risks」—— 不同 ontology。
- **Verdict：** `narrow` — Whetten 4 blocks 對 strategic / North-Star-level PRD 有 analogy value，但 tactical PRD（feature spec, bug-fix RFC）over-engineered。建議加 caveat「適用 strategy-level PRD；feature spec 等 tactical document 與 Amazon PR-FAQ / Stripe RFC 等更貼切」。

## Overall page verdict

頁面忠實 distill Whetten 1989 + Bhattacherjee Ch4。**作為「Whetten 框架的整理筆記」是 fit-for-purpose**。但作為「what counts as theory」的 declarative 知識，幾個系統性弱點：

1. **單一 source 過度依賴**：Whetten 1989 + Sutton-Staw 1995（cross-ref）兩篇 ASQ/AMR 1989-1995 文獻。**Bacharach 1989 同期 AMR 3-blocks alternative** / **Dubin 1978 7-elements** / **Pearl 2009 causal DAG ontology** 全未提。
2. **跨領域盲點**：物理 / 化學 / ML / 生物分類學的 theory 概念完全缺席 ——「Logic 最重要」在 explanatory social science 內成立，跨領域常見 What-centric 反例。
3. **Boundary claim 過強**：「經濟政治不可比較」是 1970s pre-public-choice 立場，Buchanan 1986 Nobel 後此 claim 已不成立；組織政治經濟學（Pfeffer 自己）更顯諷刺。
4. **Peer review reliability 缺席**：4 blocks criteria 在 normative 層次乾淨，但 Bornmann 2011 顯示 reviewers 對 theoretical evaluation inter-rater reliability ~0.2-0.3（poor）。
5. **PM 應用過度延伸**：Whetten 框架 over-academicizes PRD；Amazon PR-FAQ / Stripe RFC 等 PM 領域更貼切。

### 建議行動

- **加段落 "同期 alternative decomposition"**：Bacharach 1989 3-blocks + Dubin 1978 7-elements + Pearl 2009 causal DAG
- **軟化 Claim 2**：「Logic 是 explanatory social science 核心；descriptive / taxonomic / predictive theory 中 What 可取代 Why」
- **改寫 Claim 4**：「Whetten 1989 此 boundary 案例反映 1980s 主流；Public Choice + NIE + Pfeffer 組織政治經濟學顯示跨領域分析可行」
- **加段落 "Peer review reliability"**：Bornmann 2011 / Cole 1981 顯示 criteria 應用 inter-rater reliability poor
- **重寫 PM 應用段**：適用 strategy PRD；tactical PRD 引 Amazon PR-FAQ / Stripe RFC alternative
- **可選：跑 wiki-benchmark** 對標物理 / ML / 化學分類學的 theory 概念，會更暴露 Whetten 框架的領域 boundary

`base_confidence` 維持 0.55（brittle cap 觸頂），lifecycle draft → challenged。
