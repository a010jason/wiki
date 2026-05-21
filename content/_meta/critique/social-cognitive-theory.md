---
title: Critique — Social Cognitive Theory (SCT)
type: meta
target: concepts/social-cognitive-theory
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.50 → 0.50 }
---

# Critique — `concepts/social-cognitive-theory`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Triadic reciprocal causation — Person、Behavior、Environment 三方兩兩互動，三組均為 reciprocal。

- **Q1 假設：**
  - [stated] 三 pair 都是 reciprocal
  - [hidden] 因果可以無 temporal anchoring 進行雙向建模
  - [hidden] 沒有單向主導
- **Q2 跨域跨規模：**
  - **物理因果：** 雙向因果不相容於嚴格的 temporal precedence（[[concepts/causality-three-conditions]] 條件 2）— SCT reciprocal model 違反 mainstream 因果推論的基本條件之一。
  - **跨文化：** 高 power-distance / collectivist 文化中 environment → person 主導，person → environment 弱。Reciprocal symmetry 在跨文化不成立。
- **Q3 來源：** Bandura 1977/1986 — secondary（具名 foundational source）強來源。但 **falsifiability 批評**自 1980s 即有（Bunge 1979 *Causality and Modern Science*、Phillips & Orton 1983 *Psychological Review*）— 頁面在「限制」段點到但**未認真處理**。
- **Q4 反例：** **Falsifiability 問題**：若 A↔B↔C reciprocally，任何觀察到的 correlation 都可被「解釋」 — Popper 對 unfalsifiable theory 的核心批評正是此。Phillips-Orton 1983 即此 critique。**SCT 實證研究現實**：研究者在 SEM 測試時必須**選一條方向**（e.g., environment → self-efficacy → behavior），「reciprocal」理論被操作化為 unidirectional — 理論宣稱與實證方法系統性矛盾。
- **Verdict：** `brittle` — Reciprocal triadic causation 的 falsifiability 問題（Phillips-Orton 1983, Bunge 1979）是 well-known 40 年 critique，頁面僅在「限制」薄弱承認。實證 SCT 研究以單向操作化，背叛理論宣稱。

### Claim 2: Self-efficacy 在多層級運作 — 個人 / 電腦 / 工作 / 創意 / 團隊 / 集體 efficacy。

- **Q1 假設：**
  - [stated] Self-efficacy 是 hierarchical construct
  - [hidden] 層級理論上 distinct（非僅測量變體）
  - [hidden] Collective efficacy ≠ 個人 self-efficacies 加總
- **Q2 跨域跨規模：**
  - **醫療團隊：** 在醫院團隊「team efficacy」測量常與成員個人 efficacy 平均相關 r > .7 — 區分在實務中模糊。
  - **不同任務：** 同個人的 computer self-efficacy 與 creative self-efficacy 可能 uncorrelated — undermine 階層假設。
- **Q3 來源：** Bandura 1977-1997 — secondary 強來源。後續 Gist-Mitchell 1992、Zellars-Tepper 2003 細化 sub-types。Bandura 1997, 2000 自己有 collective efficacy 專書。但頁面把多層級當定論，未提**Eden 1992** 等 cross-level 不相關證據。
- **Q4 反例：** **Eden 1992** 發現 computer self-efficacy 與 general self-efficacy 在同個人身上 uncorrelated — 挑戰階層假設。**Vancouver-Kendall 2006**（**頁面自己引!**）顯示 self-efficacy 在 within-person 層級可有**負向**後續 performance 效應 — 挑戰 SCT 「self-efficacy 正向」核心 claim，**但頁面未整合此 finding 到主敘述**。
- **Verdict：** `narrow` — 多層級概念上存在；實證區分比頁面暗示模糊。不同 sub-type 未必形成乾淨階層。

### Claim 3: Hirst et al 2015 *JoM* — exploitation/exploration climate 對 performance/creativity 的效應有 diminishing return，受 self-efficacy moderator。

- **Q1 假設：**
  - [stated] Self-efficacy 同時 linear + curvilinear moderate
  - [hidden] Hirst 2015 finding 推廣到 sample 外
  - [hidden] Diminishing return 是 self-efficacy 普遍性質
- **Q2 跨域跨規模：**
  - **跨產業：** Hirst 2015 sample 特定（R&D / 創意團隊）。複製到服務業 / 醫療業未必顯示 diminishing return。
  - **跨文化：** 高 power-distance 文化中 climate 效應未必受 self-efficacy 中介（compliance 主導）。
- **Q3 來源：** Hirst et al 2015 *Journal of Management* — primary（top-tier mgmt journal peer-reviewed），強來源。**但頁面把 H1 列為發現，未明說 H1 是否被支持、是否為 single-study、複製狀態**。管理學 single-study 複製率約 30-50%。
- **Q4 反例：** **Vancouver-Kendall 2006**（頁面自己引）顯示**負向** within-person efficacy 效應，與 Hirst 2015 的「positive-then-curvilinear」預設方向相反。**Sitzmann-Yeo 2013** meta-analysis 進一步質疑 self-efficacy 對 performance 的 causal 解讀。
- **Verdict：** `narrow` — Hirst 2015 是 solid single study；頁面呈現未標 replication caveat 與相反 findings。

### Claim 4: Bandura 四個 self-efficacy 來源（mastery / vicarious / verbal persuasion / physiological）直接應用於醫療 AI onboarding 設計。

- **Q1 假設：**
  - [hidden] 這四個來源從 Bandura 原始 context（運動、anxiety 治療）乾淨 transfer 到醫療 AI
  - [hidden] Onboarding manipulation 產生的 self-efficacy 可預測 AI adoption
  - [stated by inference] 這四個是窮盡來源
- **Q2 跨域跨規模：**
  - **醫療 AI 特定：** Bandura 原本四個來源是個人技能習得（高爾夫揮桿、克服怕蛇）。醫療 AI 採用是**多 stakeholder 組織決策**（醫院 admin、IT、醫師、計費員）— 個人 self-efficacy 未必預測組織層採用。
  - **跨產業：** 工業 AI / 金融 AI 採用更受 regulatory clarity 主導，self-efficacy 非主要 driver。
- **Q3 來源：** `^[inferred]` — Jason 自身應用。**無醫療 AI 研究 cite**。Bandura 1977 是運動 / anxiety context；transfer 到醫療 AI 需證據橋接。頁面做設計處方無實證基礎。
- **Q4 反例：** **Aidoc / PathAI training** 部署無顯式「四個來源」設計 — 採用主要靠 workflow integration + FDA clearance，非 self-efficacy engineering。**Watson Health@MD Anderson onboarding** 有大量 mastery（pilot tests）+ verbal persuasion（領導推薦）+ vicarious（其他醫師示範）— 高 self-efficacy build-up — 但採用仍失敗。**Self-efficacy ≠ adoption** 直接反例。
- **Verdict：** `brittle` — 自信設計處方「建構 self-efficacy 應該…」做了 causal chain（4 sources → self-efficacy → AI adoption）的實證主張卻無醫療 AI 證據；Watson Health 反例直接展示 efficacy ≠ adoption。

### Claim 5: Self-efficacy 與 TPB（Perceived Behavioral Control）、Expectancy Theory（E→P）、Goal-setting 三個理論的核心構念對應 / 共通。

- **Q1 假設：**
  - [stated] 這些構念近 equivalent
  - [hidden] 概念重疊 = 實證 equivalent
  - [hidden] 理論可透過此橋接 unified
- **Q2 跨域跨規模：**
  - **跨研究：** Stajkovic-Luthans 1998 meta-analysis（r = .38 with performance, high heterogeneity）顯示 self-efficacy 與 PBC、E→P 相關但**不完全 overlap**。
  - **跨文化：** TPB PBC 在不同文化中含義不同（Ajzen 2002 reframing），映射 self-efficacy 不乾淨。
- **Q3 來源：** Inferred bridging claim — 無 cite。**Ajzen 1991 / 2002 明確區分 PBC ≠ self-efficacy**（PBC = self-efficacy + controllability + external constraints），但頁面把它們呈現為 near-equivalent。
- **Q4 反例：** **Ajzen 2002** 釐清 PBC = self-efficacy + controllability — 兩者**非同一構念**。Bandura 1997 自己也區分 self-efficacy（內部能力信念）vs outcome expectancy（外部結果預期）— expectancy theory 的 E→P 部分等同 self-efficacy 但 V → O 與 outcome expectancy 對應，並非完全 equivalent。
- **Verdict：** `narrow` — 概念重疊真實但頁面過度宣稱 equivalence。PBC ≠ self-efficacy（Ajzen 2002）；expectancy theory E→P 近似但 Bandura 自己區分 self-efficacy vs outcome expectancy。

### Overall page verdict

SCT 頁面覆蓋 Bandura 核心框架，但有三個 notable gaps：

1. **Triadic reciprocal causation 的 falsifiability 問題**（Phillips-Orton 1983 *Psychological Review*、Bunge 1979）是 40 年 critique — 任何 reciprocal 模型在 Popperian 意義下 unfalsifiable。頁面僅在「限制」薄弱承認且未連結到 [[concepts/falsifiability-popper]]（諷刺：兩頁同 Tier 1/2 都已 challenged）。
2. **醫療 AI inferred 應用過度處方化**（Claim 4）— 把 Bandura 1977 運動/anxiety context 的四來源直接搬到醫療 AI 設計，無實證橋接；Watson Health 反例直接證明 efficacy ≠ adoption。
3. **負向 self-efficacy 效應未整合**：Vancouver-Kendall 2006 *JAP* 顯示 within-person 負向效應 — **頁面自己引此 paper**但未把此 finding 整合到主框架，仍呈現 self-efficacy 為正向 driver。

**Recommended actions：**

1. 修「三方互動」段加 falsifiability 註記：「reciprocal causation 受 Phillips-Orton 1983 / Bunge 1979 批評為 unfalsifiable；實證研究實際上以單向 SEM 操作化」，並 wikilink [[concepts/falsifiability-popper]]
2. 把 Vancouver-Kendall 2006 within-person 負向效應**從應用段提升到 self-efficacy 段主敘述**，承認 self-efficacy 非單純正向
3. 改寫「醫療 AI PM 應用」段為條件式：「個人技能習得情境下 Bandura 四來源適用；組織決策層（hospital admin / IT / billing / clinical workflow）需另外框架」，加 Watson Health 反例 + Aidoc/PathAI 對比
4. 修「與其他理論」表，加 Ajzen 2002 cite 明說 PBC ≠ self-efficacy（PBC = self-efficacy + controllability）；加 Bandura 1997 self-efficacy vs outcome expectancy 區分
5. 在「限制」段加 Phillips-Orton 1983 / Bunge 1979 explicit cite

**Base confidence：** 0.50（current）→ 0.50（cap 0.55 觸發於 ≥1 brittle，已低於 cap）。
**Lifecycle：** draft → challenged。
