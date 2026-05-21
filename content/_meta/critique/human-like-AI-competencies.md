---
title: Critique — Human-Like AI Competencies（Chandra 2022 三維模型）
type: meta
target: concepts/human-like-AI-competencies
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 1, brittle: 4, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.35 → 0.35" }
---

# Critique — `concepts/human-like-AI-competencies`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Chandra et al. (2022) 借用 Boyatzis (1991) 把 conversational AI 的擬人能力操作化為三維 construct（Cognitive / Relational / Emotional Competency），是有效的分類。

- **Q1 假設：**
  - [hidden] 人類 individual competency 分類可以直接搬到 AI agent，construct transferability 不需獨立驗證
  - [hidden] 三維在實證上可獨立操作化（discriminant validity 充足）
  - [stated] 借用 Lee (2010) 「去掉 social」是合理刪減
  - [hidden] 「擬人能力」可從 user perception 角度測量，而不必從 AI 系統能力本身測量
- **Q2 跨域跨規模：**
  - 產業（B2B enterprise AI agent，例 customer-service automation 平台）：partially holds。Cognitive 仍是核心，但 relational 在 B2B 長期 vendor relationship 反而強，與 Chandra 在 B2C consumer chatbot 結論不同
  - 規模（單任務 chatbot → LLM-based general-purpose agent，如 ChatGPT / Claude）：強烈 breaks。GPT-4 後 AI 同時展現三維能力，分類失去判別力；Boyatzis 1991 manager competency 框架被 long-context multi-turn dialog 機制超越
- **Q3 來源：** `secondary` — 單一論文 Chandra-2022-JMIS（top journal、named authors），但對「三維是 valid 構念分類」這種 strong constructional claim，single-paper sourcing 不夠。Boyatzis 1991 是 indirect support（原書講 manager 不是 AI）
- **Q4 反例：** Replika 2023 切掉 erotic role-play 後 user backlash —— Emotional 與 Relational 在實際 user attachment 中無法分離（Skjuve 2021, 2022），三維獨立性受質疑
- **Verdict：** `brittle` — single-paper sourcing + pre-LLM 時代 + 構念 transferability 未獨立驗證

### Claim 2: 三維各自對應 Media Naturalness Theory 一個 naturalness mechanism（cognitive ↔ 降低 cognitive effort、relational ↔ 降低 ambiguity、emotional ↔ 提供 arousal/presence）。

- **Q1 假設：**
  - [hidden] MNT 5 mechanism 是嚴格「一對一」對應，不是 many-to-many
  - [hidden] 每維只增強對應 mechanism，不會 cross-cut（emotional 不會 reduce cognitive effort？）
  - [stated] MNT 本身（Kock 2005）的 5 mechanism 框架成立
- **Q2 跨域跨規模：**
  - 產業（醫療 voice assistant）：mapping break — 醫療術語講解需 cognitive accuracy + emotional empathy 同時，「降低 cognitive effort」與「physiological arousal」可能 conflict（simplified 不專業 vs 專業增加 anxiety）
  - 規模（multi-modal AI，文字+語音+視覺）：mapping 完全 break — emotional 不再只是 arousal，視覺 cues 引入 fourth/fifth mechanism
- **Q3 來源：** `secondary` 偏弱 — 是 Chandra 2022 author 提出的 theoretical mapping，無 independent confirmation；MNT 原文（Kock 2005）並沒為 conversational AI 寫這個 one-to-one mapping
- **Q4 反例：** AI tutor（Cognitive 主導）也可能因 reading-comprehension feedback 提供「being there」感（emotional mechanism），不是嚴格的「cognitive 只對應 cognitive effort reduction」
- **Verdict：** `brittle` — author 單方 theoretical mapping，缺 independent test 與 cross-mechanism interaction 證據

### Claim 3: 「artificial brain（cognitive）+ artificial heart（emotional）缺一不可」—— Cognitive (β=0.260) 與 Emotional (β=0.243) 顯著正向、Relational (β=-0.027) 不顯著。

- **Q1 假設：**
  - [hidden] 新加坡商管生 18-22 歲樣本可外推到一般 chatbot 使用者群
  - [hidden] β=-0.027 不顯著 ≠「relational 真的沒效」 — type II error / underpowered / 樣本量問題未討論
  - [hidden] 主效應 β 可以做為 importance ranking（忽略 mediation 結構 / interaction）
  - [stated] 文章列了 4 個 boundary conditions 解釋 null result
- **Q2 跨域跨規模：**
  - 產業（醫療慢性病陪伴 chatbot）：break。Woebot RCT (Fitzpatrick et al. 2017)、Wysa RCT (Inkster et al. 2018)、Beatty et al. 2022 等顯示 therapeutic alliance（≈ relational）是 mental health bot 的 strong engagement / outcome predictor
  - 規模（B2B enterprise chatbot vs single-app consumer chatbot）：B2B relational 更重要（trust / fairness 影響 contract renewal）
- **Q3 來源：** `secondary` 但對 strong negative claim 嚴重不夠 —— null result 推論 absence of effect is fallacious；該頁未報 power analysis 或 effect-size CI
- **Q4 反例：** Replika user attachment 研究（Skjuve 2021, 2022）、Character.ai 60% session length 由 emotional + relational role-play 驅動 —— relational engagement 是主要 driver
- **Verdict：** `brittle` — null result 被 over-interpreted 為「relational 不重要」；缺 power / CI / replication

### Claim 4: Trust（Mayer-Davis-Schoorman 1995 三因子 Ability/Integrity/Benevolence）部分中介 Cognitive/Emotional → Engagement。

- **Q1 假設：**
  - [hidden] MDS 1995 organizational trust scale 適用 human-AI trust（concept transferability）
  - [hidden] 中介關係是 linear additive，沒有 interaction 或 non-linear（uncanny valley）
  - [stated] Trust 是 mediator 不是 moderator
- **Q2 跨域跨規模：**
  - 產業（醫療 AI）：medical AI trust 文獻（Asan et al. 2020；Tonekaboni et al. 2019）顯示 clinical trust 與 consumer trust 差異大；benevolence 維度幾乎無關（醫師信 AI 因 accuracy + explainability，非 benevolence）
  - 規模（B2B enterprise 一次性使用 vs consumer 長期使用）：consumer 一次性 chatbot 互動的 trust 維度可能塌縮為單一「能力信任」
- **Q3 來源：** MDS 1995 是 secondary（AMR top journal）原始 trust scale，且 Toreini 2020 / Glikson-Woolley 2020 等 follow-up 文獻 corroborate 用 trust scale 於 AI；非 Chandra 單一證據
- **Q4 反例：**
  - LLM era：用戶常 in spite of distrust 仍 use ChatGPT（utility 主導 engagement，trust 鬆綁 mediation）
  - Anthropomorphism 過頭：trust 增加但 backlash 也增加（uncanny valley），引發 non-linear mediation
- **Verdict：** `narrow` — concept transfer 有 prior literature support，但 LLM era 後可能 break；中介關係 linear 假設未充分驗證

### Claim 5: H1b 不支持的 4 個 boundary conditions（無 prior interaction memory / chatbot 類型 / user inexperienced / privacy concerns）是合理事後解釋。

- **Q1 假設：**
  - [hidden] 4 個 BC 是 a priori reasoning 而非 ad hoc rationalization 來救 null result
  - [hidden] 4 個 BC 同時成立而非互相矛盾
  - [hidden] BC#3「inexperienced user 分不出」隱含 user-expertise moderator，但研究中沒實際測 expertise × relational interaction
  - [stated] 該頁明說「作者事後補的解釋」——已自我標記為 post-hoc
- **Q2 跨域跨規模：**
  - 產業（醫療 AI）：4 BC 在病患 chatbot 場景似乎全部成立（無 prior interaction / 多 transactional / inexperienced / 高 privacy）——但這正說明該 model 在醫療領域預測能力崩潰，而非「BC 解釋了 null」
  - 規模（LLM-based agent with session memory）：BC#1（無 prior interaction memory）已被現代 LLM long-context memory 打破
- **Q3 來源：** `none` / weak inferred —— BC 由 Chandra 2022 author 提出，**無 independent 實證測試**；rollout 用戶質疑的「ad hoc rationalization 嫌疑」合理
- **Q4 反例：**
  - BC#2「simple transactional 不需 relational」與航空業 service-recovery 文獻矛盾（complaint resolution 越 transactional 越需要 fairness perception = relational element）
  - BC#3 與 ELIZA effect（Weizenbaum 1966）矛盾 —— inexperienced user **更**容易 anthropomorphize 且更感知 relational cue
- **Verdict：** `brittle` —— post-hoc rationalization 嫌疑明顯、無 independent test、部分與既有文獻矛盾。差一步到 `unsupported`，僅因該頁明確標記「作者事後補」並連到 reference critique 而保留 `brittle`

### Overall page verdict

5 claims：0 survives / 1 narrow / 4 brittle / 0 unsupported。整頁主要弱點是**單篇 paper 過度推廣**：Chandra 2022 是 pre-LLM 時代、新加坡商管生樣本、cross-sectional survey 設計的單一研究，但被當作三維 construct 框架的 universal claim 來操作化。具體 brittle 結構：

1. **構念 transferability 未獨立驗證** — 人類 individual competency → AI agent 的搬遷，僅靠原 paper 自我論述，無 independent construct validation。LLM era 後三維獨立性（discriminant validity）尤其受挑戰
2. **Null result 被 over-interpret** — Relational β=-0.027 非顯著被當成「relational 不重要」，但無 power analysis；既有 mental health bot RCT 文獻直接矛盾此結論
3. **MNT mapping 是 author 單方 theoretical claim** — 「三維對應三 mechanism」並非 MNT 原文設計，跨多模態 / 醫療 context 時 mapping 崩潰
4. **4 個 BC 是 post-hoc rationalization** — 該頁已自承「事後補」，但仍以表格形式平鋪呈現未做質疑層；至少 2 個 BC 與既有文獻矛盾

**Recommended actions（不在本 skill 自動執行，由 Jason 自己決定要不要改原頁）：**

- Claim 3 改寫成「Chandra 2022 *在該樣本下* relational 不顯著」而不是「relational 不重要」；補 type II error 與 mental health bot 反證
- Claim 5 表格上方加一句「警告：post-hoc，無 independent test，BC#2 與服務復原文獻矛盾、BC#3 與 ELIZA effect 矛盾」
- 限制段補「LLM era construct validity 危機」與「null-as-evidence-of-absence 謬誤」兩條
- 對 Replika / Character.ai / Woebot RCT 三個明確反例 cross-link 為 [[concepts/...]]，做為 falsifier evidence
- 醫療 AI 應用表格上方加警告：4 個 BC 在醫療 chatbot 全部成立 = 該 model 在醫療領域 predictive validity 弱，不是「BC 解釋了 null」
