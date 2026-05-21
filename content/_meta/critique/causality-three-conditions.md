---
title: Critique — Causality 三條件
type: meta
target: concepts/causality-three-conditions
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 1, narrow: 2, brittle: 2, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/causality-three-conditions`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 建立 causation 必須同時滿足三條件 — (1) Covariation 共變、(2) Temporal precedence 時間先行、(3) No plausible alternative explanation 排除其他解釋。

- **Q1 假設：**
  - [stated] 三條件**共同充分**（jointly sufficient）建立 causation
  - [hidden] 因果是**確定性 / 單一路徑**（deterministic / single-pathway）— 不處理 probabilistic causation 與多重原因
  - [hidden] 「因」是定義清楚的（counterfactual / interventionist / Mill 的 INUS 並未區分）
  - [hidden] Hume-Mill 經驗論傳統是對的；Aristotelian 四因說、process-based causation 都被默認排除
- **Q2 跨域跨規模：**
  - **物理（quantum）：** Bell 不等式違反顯示 EPR pair 中的 correlation 無 temporal precedence（或本質上違反 locality）— 三條件框架在量子糾纏中崩潰。
  - **複雜系統 / 經濟：** 氣候模型、宏觀經濟均衡有 mutual / simultaneous causation（價格與數量由 supply-demand 同時決定）— 條件 2 temporal precedence 無從定義，但因果推論仍可建立。
- **Q3 來源：** Bhattacherjee Ch5 + Colquitt OB Ch1 — 兩個 secondary textbook。三條件框架根源 Mill 1843 + Hume，但現代因果哲學（Pearl 2009 *Causality*、Woodward 2003 *Making Things Happen*、Cartwright 1983）有更精緻的 counterfactual / interventionist / manipulability 理論。頁面未引這些 modern source，把 19 世紀框架當定論。
- **Q4 反例：** **Pearl 因果計算（do-operator）**用 DAG 假設操作化 intervention，不要求嚴格 temporal precedence；cross-sectional data + 強 structural assumption 也能得 causal inference。**Simultaneous causation** 在均衡模型中存在（價量同時決定），無時間先行卻有因果。
- **Verdict：** `narrow` — 在主流 variance-based 社會科學研究範圍內成立。Pearl 框架（現已是 medical AI / ML 主流）不要求 strict temporal precedence；equilibrium model 中的 simultaneous causation 違反條件 2。

### Claim 2: Cross-sectional field survey 因 IV 與 DV 同時測 → 違反條件 2 temporal precedence → causality 強度弱。

- **Q1 假設：**
  - [stated] Temporal precedence 要求**測量順序**而非僅理論順序
  - [hidden] 所有 cross-sectional data 因果推論皆弱（過度推廣）
  - [hidden] 條件 3 的 statistical tool 補強無法救條件 2（頁面自我矛盾：下方列出 IV/2SLS/PSM 等工具，但本 claim 又斷言 cross-sectional 弱）
- **Q2 跨域跨規模：**
  - **公衛：** John Snow 的 1854 霍亂地圖是 cross-sectional 觀察，被視為流行病學因果推論的奠基性工作。
  - **發展經濟學：** Angrist-Krueger 1991 用 quarter-of-birth 作 instrument 從 cross-sectional Census 推估 schooling 對工資的因果效應 — 整個 Angrist-Pischke 2009 *Mostly Harmless Econometrics* 都基於 cross-sectional 因果推論。
- **Q3 來源：** Bhattacherjee Ch5 — secondary textbook。立場是 management research methodology 主流，但與 1990s 後 economics + epidemiology 的「因果推論革命」（Angrist-Imbens-Rubin、Pearl）相衝突。頁面未引這些更新源。
- **Q4 反例：** **Regression Discontinuity 設計**用 cross-sectional data 建立強 local causal inference（Lee 2008 close elections；Angrist-Lavy 1999 Maimonides class size rule）。**Instrumental Variable 估計**（頁面自己列出此工具）在勞動經濟學 routine 從 cross-sectional 出 causal estimate。
- **Verdict：** `brittle` — 強 claim「cross-sectional → 無法建立 causation」被過去 30 年因果推論革命直接反駁。頁面在「統計工具補強條件 3」一段又承認這些工具能做，但本 claim 未更新絕對化敘述，**頁面內部自我矛盾**。

### Claim 3: 冰淇淋銷量 vs 鯊魚攻擊次數高度相關但實因夏天混淆 — 滿足條件 1 不滿足條件 3。

- **Q1 假設：**
  - [stated] 夏天 IS confounder
  - [hidden] 這是乾淨的 confounding 範例（vs. mediation 或 selection bias）
  - [hidden] 教科書民間範例在教學上可靠
- **Q2 跨域跨規模：**
  - **醫療教學：** 範例被廣泛使用，但在沿海觀光城市中冰淇淋銷量更跟旅遊潮關聯（旅遊潮也增加海濱人口），不是直接被熱度驅動 — 範例可能混淆 mediation 與 confounding。
  - **統計：** 從 Pearl 2009 DAG 觀點，此 confounding 結構需要嚴格 DAG 假設才成立 — 教學版的「夏天同時導致兩者」本身是簡化。
- **Q3 來源：** Colquitt OB Ch1 — secondary。範例本身是統計教育 folklore（Pearson 1897 首倡 spurious correlation 概念，Yule 1903 "Methodist marriages" 反例更經典）。此 specific 冰淇淋/鯊魚範例**無單一原始來源**，是 textbook 流傳。
- **Q4 反例：** 範例本身只是 illustration，不是 load-bearing claim — 沒有強烈 falsifier。但**重複教學 folklore 而非引真實研究**是研究方法教學的常見弱點。Pearl 2009 用 DAG 形式化 confounding 提供更精準範例。
- **Verdict：** `survives` — 作為條件 3（confounding）的教學範例本身有效。它不是頁面深層 claim 的承載者；唯一警告是教學範例的 folklore 性格未標出。

### Claim 4: 醫療 AI 的「我們的 AI 改善 outcome」claim 通常需要 RCT 才能滿足三條件；observational study 強度不足。

- **Q1 假設：**
  - [hidden] RCT 對多數醫療 AI 部署可行 / 合乎倫理
  - [hidden] FDA / regulatory 標準要求 RCT 級證據
  - [stated] Observational study 不足以同時滿足三條件
- **Q2 跨域跨規模：**
  - **醫療影像 AI：** Radiology AI 中 RCT 常不可行（無法隨機分配「誰能看見 AI 預測」而不改變臨床流程）。FDA 510(k) 多數接受 retrospective comparative effectiveness studies。
  - **疫苗：** Post-deployment vaccine effectiveness 標準上由 observational data（case-control、test-negative design）估計，不需 RCT — 仍被 CDC/WHO 視為 causal evidence。
- **Q3 來源：** 頁面自己標 `^[inferred]` — Jason 的應用。**未引 FDA 規範或 medical AI 監管實務文獻**。「需要 RCT」claim 比 FDA 實際要求更嚴。
- **Q4 反例：** **PathAI**（pathology AI）FDA 510(k) 主要靠 retrospective concordance studies，非 RCT。**Aidoc** stroke AI 取得 FDA 用 real-world performance + retrospective comparison。**Babylon AI triage** 用 observational chat data 部署，無 RCT。截至 2026-05-22 FDA-cleared medical AI 多數**未用 RCT** for clearance。
- **Verdict：** `brittle` — 強 claim「需要 RCT」與醫療 AI 監管實務不符。多數 FDA-cleared medical AI 並未 RCT。此 claim 是規範性理想，非描述性事實，頁面把它陳述為事實。

### Claim 5: PSM、IV/2SLS、DID、RD 等統計工具可補強條件 3，等同 randomization。

- **Q1 假設：**
  - [stated] 這些工具替代 randomization
  - [hidden] 每個工具的 identifying assumption（DID 的 parallel trends、IV 的 exclusion restriction、RD 的 continuity、PSM 的 unconfoundedness）在實務中通常滿足
  - [hidden] 這些工具與 RCT 等強度
- **Q2 跨域跨規模：**
  - **發展經濟學：** Banerjee-Duflo-Kremer 2019 Nobel 是因 RCT 但他們同時大量用 IV/DID — 這些工具**不等於 RCT**，每個有強 identifying assumption。
  - **醫療 AI：** PSM 在醫療研究廣用，但 Austin 2014 顯示 PSM 在 propensity score model misspecified 時可有顯著 bias。
- **Q3 來源：** Bhattacherjee Ch5 — secondary textbook。工具列出但**未列關鍵假設**：未提 exclusion restriction（IV）、parallel trends（DID）、continuity（RD）、unconfoundedness（PSM）。
- **Q4 反例：** **Weak instruments**（Bound, Jaeger, Baker 1995）顯示 Angrist-Krueger 1991 schooling instrument 在 weak instrument 下產生 bias estimate。**Austin 2014** PSM 即使良好實施在 propensity model misspecified 時 bias。**Bertrand-Duflo-Mullainathan 2004** DID 在 serial correlation 下標準誤被嚴重低估。
- **Verdict：** `narrow` — 工具確實可行但**只在各自 identifying assumption 滿足時**。頁面把工具列成 randomization 等效替代品，省略 well-known failure modes。

### Overall page verdict

頁面是稱職的 variance-based 研究方法 textbook distillation，但有三個結構性弱點：

1. **忽略因果推論革命**（Pearl 2000-2009、Angrist-Pischke 2009）— 三條件框架被當定論，未承認 Pearl 的 do-calculus、interventionist account 已是 ML/medical AI 主流。
2. **內部自我矛盾**（Claim 2 vs 統計工具段）— 上方斷言 cross-sectional 無法建立 causation，下方又列出 IV/RD/DID/PSM 等正是用於 cross-sectional 因果推論的工具，沒 reconcile。
3. **醫療 AI 應用過度規範化**（Claim 4）— 「需要 RCT」與 FDA 實務不符；多數 FDA-cleared medical AI 用 retrospective / observational evidence。

**Recommended actions：**

1. 在「三條件」段加 caveat，註記此框架根源 Mill 1843，現代 Pearl 2009 / Woodward 2003 提供更精緻的 counterfactual / interventionist 理論
2. 修「Cross-sectional 弱」表格的絕對化敘述為「同 wave 測 IV/DV 時 temporal precedence 條件難滿足，但 RD / IV / natural experiment 可從 cross-sectional 推因果」
3. 在統計工具段補各工具的 identifying assumption（IV 的 exclusion restriction + monotonicity + relevance；DID 的 parallel trends；RD 的 continuity；PSM 的 unconfoundedness + common support）
4. 軟化醫療 AI RCT claim 為「RCT 是 gold standard，但實務上 FDA 多接受 retrospective comparative studies；observational evidence 的因果強度取決於 design」
5. 在「醫療 AI PM 應用」段加 PathAI / Aidoc / Babylon 等實際 cleared AI 的證據類型對照

**Base confidence：** 0.55（current）→ 0.55（cap 0.55 觸發於 ≥1 brittle，已在頂）。
**Lifecycle：** draft → challenged。
