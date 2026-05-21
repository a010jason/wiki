---
title: Critique — Scientific Theory
type: meta
target: concepts/scientific-theory
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/scientific-theory`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Scientific theory 是 constructs（concepts）和 propositions（constructs 之間的關係）組成的系統，在某些 assumptions 與 boundary conditions 下，對 phenomenon 提供 logical, systematic, coherent 的解釋。

- **Q1 假設：**
  - [stated] Bhattacherjee/Whetten 的 building-block model 是規範性正確的
  - [hidden] Theory 是 **componential**（可分解為離散組件），而非 holistic / paradigmatic（Kuhn 1962）
  - [hidden] 「logical, systematic, coherent」是普世標準 — 排除了包含 paradox 或 dialectical 結構的 theory（例：Marxist 辯證唯物論、量子力學的 wave-particle complementarity）
- **Q2 跨域跨規模：**
  - **產業換到 physics：** 量子力學以「波粒二象性」聞名地違反直覺邏輯，但仍是公認 theory。Bhattacherjee 的「logical, systematic, coherent」框架適合社會科學的 variance-based theory，套到現代物理就出現張力。
  - **規模換到工業界：** Whetten/Bhattacherjee 設計給學術 theorizing。工業界 PM/工程師很少把 boundary conditions 明白寫出來，更常用「framework」「model」「heuristic」這些字 — 定義本身的場域局限性沒被頁面點明。
- **Q3 來源：** Bhattacherjee SSR Ch4（secondary, textbook）+ Whetten 1989 AMR（secondary, peer-reviewed top journal）。社科組織研究脈絡下源頭強，但定義以「普世」姿態呈現，未說明 sources 都來自 organizational research 學科。
- **Q4 反例：** **Darwin《On the Origin of Species》(1859)** 是公認 theory，但難以拆成乾淨的 constructs + propositions + boundary conditions — 它本質是 narrative + mechanism（natural selection）。同樣，Kuhn 的「paradigm」與 Lakatos 的「research programme」都拒絕還原成 constructs+propositions。
- **Verdict：** `narrow` — 在 positivist organizational research 範圍內成立；定義以社科組織學科為中心，未承認此局限。

### Claim 2: Statistically significant correlations 不必然代表 causation；prediction 只需 correlation，explanation 需要 causation 三條件。

- **Q1 假設：**
  - [hidden] Prediction 與 explanation 能被乾淨切分（Pearl 因果推論、Granger causality 模糊了這個區分）
  - [hidden] Hume 的 induction problem 被擱置或假定已解決
  - [stated] 因果三條件（covariation、time order、no spurious cause）既是必要又是充分
- **Q2 跨域跨規模：**
  - **物理：** Hempel-Oppenheim 的 deductive-nomological 模型中，successful prediction 就是 explanation — 兩者在物理學中經常重合。把它們切開的是社科文獻的 metatheoretical move。
  - **醫療 AI：** 黑盒 ML 模型確實只給 prediction 無 explanation — 這點與頁面一致。但 FDA / regulatory 越來越要求 explainability，且 mediation analysis 模糊了 prediction-explanation 邊界。
- **Q3 來源：** Bhattacherjee Ch4 — secondary textbook。嚴格的 prediction-vs-explanation 區分源自 Hempel & Oppenheim 1948，但 Salmon (1989)、Cartwright (1983 *How the Laws of Physics Lie*)、Woodward (2003) 已長期論辯。頁面把它呈現為定論，未引這些 critique。
- **Q4 反例：** **Newton 萬有引力定律** F = Gm₁m₂/r² 完美 predict 行星軌道，但 Newton 自承「hypotheses non fingo」— 他沒有 causal mechanism。儘管缺機制解釋，我們仍稱它為 theory。**統計力學**中 partition function 同時做 prediction 和 explanation，兩者無從切開。
- **Verdict：** `brittle` — 乾淨的 prediction-vs-explanation 二分在哲學科學界爭議已久（Cartwright、Salmon、Woodward）。頁面當定論呈現，省略反方。

### Claim 3: Theory 本質為 nomothetic —— 用少數變數解釋廣泛現象。

- **Q1 假設：**
  - [hidden] Generalizability 是 theory 的構成性條件，而非僅一項好屬性
  - [hidden] Idiographic 解釋**不是** theory — 只有 nomothetic 才算
  - [stated] 「少變數解釋多現象」是 theory 的目標
- **Q2 跨域跨規模：**
  - **歷史學：** 完全 **idiographic**（Windelband 1894 nomothetic-idiographic 區分的源頭）。歷史學的 theory（例：為何 WWII 爆發）是 idiographic 但仍被視為理論。
  - **質性研究：** Geertz 的 "thick description"、人類學 case-based theorizing 是 idiographic 取向，被學界當作理論而非單純描述。
- **Q3 來源：** Bhattacherjee — secondary。Nomothetic-idiographic 區分源自 Windelband 1894，但「theory is nomothetic」是 **positivist commitment**，不是普世共識。頁面未引 process theory（Mohr 1982 variance-vs-process 區分）。
- **Q4 反例：** **Grounded theory**（Glaser & Strauss 1967）從具體個案歸納建構，常帶 idiographic 性格。**Eisenhardt 1989** 從少數 case 建 theory 是 AMR/AMJ 範式。**Freud / Erikson** 的精神分析理論建立在臨床個案，仍被視為 theory。
- **Verdict：** `narrow` — 在 nomothetic / variance-based 研究範圍內成立。Process theory、idiographic theory、grounded theory 被這個框架排除，頁面未承認這個 boundary。

### Claim 4: Theory 在 conceptual level 運作，基於 logic 而非 observations。

- **Q1 假設：**
  - [stated] Logic 先於 observation 在 theory-building 中
  - [hidden] Theory 與 observation 可乾淨分離（Quine 1951 *Two Dogmas of Empiricism* 直接挑戰此分）
  - [hidden] 「theory-ladenness of observation」（Hanson 1958、Kuhn 1962）不影響此 claim
- **Q2 跨域跨規模：**
  - **自然科學：** Theory-ladenness 在物理學/生物學被廣泛承認 — 你「看到」什麼取決於你帶什麼 theory。「基於 logic 而非 observations」過度簡化。
  - **質性研究：** Grounded theory 完全 **建在 observations 上**。這條 claim 把整個 inductive theorizing 排除在外。
- **Q3 來源：** Bhattacherjee / Whetten — secondary，organizational research bias 明顯。Quine、Hanson、Kuhn 的反論未引。
- **Q4 反例：** **Mendel 豌豆實驗** — 遺傳理論直接從觀察建構。**Kepler 三定律** — 從 Tycho Brahe 觀察資料推導而來。兩者都是觀察先於 logic 的 theory-building 範例。
- **Verdict：** `brittle` — 重現了 1958 年後已被 Hanson / Kuhn / Quine 持續批判的 positivist 立場，且 inductive theorizing 整個被排除。

### Claim 5: Theory 的評估準則為 5 條：logical consistency、explanatory power、falsifiability、parsimony、generalizability。

- **Q1 假設：**
  - [stated] 這 5 條是正確的評估準則
  - [hidden] 5 條共同必要（jointly necessary）
  - [hidden] Falsifiability 與 parsimony 互不衝突（實際上常衝突 — 簡潔理論往往過度推廣）
  - [hidden] Generalizability 是普世追求（idiographic / 場景特定 theory 故意犧牲此項）
- **Q2 跨域跨規模：**
  - **粒子物理：** String theory 為了 explanatory power 犧牲 parsimony（加上 11 維度），且**缺乏 falsifiability**（無實驗區辨能力）— 卻仍被許多物理學家接受。
  - **醫療 AI / 管理：** 多數 PM 級 theory（如「user-centered design improves outcomes」）太 vague 而**無法 Popperian 意義上 falsify**，卻仍是有用 working theory。
- **Q3 來源：** Bhattacherjee Ch4 — secondary textbook compilation。這份 5 條準則**不是來自單一權威來源**，而是 Popper（falsifiability）+ Ockham（parsimony）+ Hempel（explanatory power）+ Whetten（consistency）的聚合。頁面把它呈現為固定清單，未說明這是 textbook 編者的整合。
- **Q4 反例：** **Darwin 1859 natural selection** 在 1859 年 parsimony 低（引入新機制）、Popper 自己 1976 半承認其 falsifiability 弱（後又部分撤回），仍是公認 canonical theory。**String theory** 的「是不是 theory」爭議精準擊中此 list — 缺 falsifiability 卻被許多物理學家接受。
- **Verdict：** `narrow` — 作為社科方法論教科書 checklist 成立；5 條來自不同傳統的聚合，彼此常衝突（如 falsifiability vs parsimony），這層張力頁面未討論。

### Overall page verdict

頁面是稱職的教科書 distillation，但**重現了一個 positivist-organizational research 立場當作普世真理**。最 brittle 的三點：

1. **Prediction-vs-explanation 二分**（Claim 2）在哲學科學界爭議已久（Cartwright、Salmon、Woodward），但頁面當定論呈現。
2. **「theory 基於 logic 而非 observations」**（Claim 4）違反 Quine/Hanson/Kuhn 的 theory-ladenness 共識，且把 inductive theorizing 排除。
3. **5 條評估準則**（Claim 5）被當作固定清單，未承認 falsifiability vs parsimony 常衝突，且 Popper 自己 1976 對 Darwin 的部分撤回沒提。

兩條 narrow（定義 + nomothetic）的共同毛病是**未承認 source 來自社科組織研究**這個 boundary condition — 諷刺地違反了頁面自己強調的 Whetten 第四 building block。

**Recommended actions：**

1. 在「定義」段加 boundary 註記，明說此定義來自 positivist organizational / variance-based research 傳統，physics / 歷史學 / 質性研究有不同 theory 觀
2. 在「Prediction vs Explanation」加 caveat，引 Cartwright 1983 / Hempel 1948 並承認此二分在哲學界爭議
3. 「Theory 在 conceptual level 運作」改寫為「在多數情境下優先運作於 conceptual level」，並加註 theory-ladenness of observation（Hanson 1958）
4. 在「Idiographic vs Nomothetic」段補一句：grounded theory 與 Eisenhardt 1989 個案 theory 顯示 idiographic theory 存在
5. 「評估準則」加註：5 條源自不同傳統（Popper、Ockham、Hempel、Whetten），falsifiability ↔ parsimony 常衝突；string theory / Darwin 是檢驗反例

**Base confidence：** 0.55（current）→ 0.55（cap 0.55 觸發於 ≥1 brittle，已在頂）。
**Lifecycle：** draft → challenged。
