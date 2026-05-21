---
title: HiPPO Decision Making（最高薪意見決策反指標）
type: concept
domain: mgmt
tags: [concept, decision-making, evidence-based-management, anti-pattern, kohavi, mgmt, strategy]
aliases: [HiPPO, Highest Paid Person's Opinion, HiPPO decision making, Kohavi HiPPO]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.5
sources:
  - id: kohavi-ms-exp-2009
    ref: '[[references/kohavi-2017-HBR-online-experiments]]'
related:
  - '[[concepts/evidence-based-management]]'
  - '[[concepts/ab-testing-as-strategy]]'
  - '[[concepts/overall-evaluation-criterion]]'
  - '[[concepts/decision-making-biases]]'
  - '[[entities/Ronny-Kohavi]]'
---

# HiPPO Decision Making

**Highest Paid Person's Opinion** — Ronny Kohavi 自創縮寫，**反指標**：當組織決策依賴「在場最高薪 / 最高 title 的人說了算」而非 evidence。^[extracted]

> Kohavi（Microsoft ExP）把 HiPPO 玩偶（河馬 hippopotamus）製成公司紀念品 → **MS 印度甚至有 fan club** — 從反諷到文化標誌。^[extracted]

## 為什麼 HiPPO 是反指標

### 1. Experts can't predict outcomes
Kohavi HBR 2017 量化：
- **Google / Bing：10-20% 實驗顯著為正**
- **Microsoft 整體：1/3 正、1/3 中性、1/3 負**
- 連 design expert 都看不出 Bing 顏色實驗會贏（年化 +\$10M）— **evidence took the place of theory**

### 2. Holland 2005 研究 150K idea 22 年
「**人覺得有用」與「真的有用」毫無相關**」 — Kohavi 在 MS-ExP paper 用此數據反駁「實驗太貴」claim。

### 3. QualPro 統計 75% 業務改進想法零效或負效
**3/4 直覺判斷是錯的**。HiPPO 模式下不會發現自己錯。

### 4. 醫療歷史教訓
**doctors 1923 年的醫療標準包含 200 年 bloodletting（放血治療）** — 即使醫療專業，沒有 controlled trial 就會錯數百年。

## HiPPO 出現的場景

### Product Design
- 「我覺得這個 button 應該大一點」（PM 直覺）
- 「我們的 UX 改版應該贏」（Design expert）
- 解：A/B test 全部丟進去測

### Strategy
- 「我們應該進印度市場」（CEO 直覺）
- 「應該收 Yahoo」（高層提案）
- Kohavi 引 Davenport 2009：strategy formulation 無法 A/B test，但仍需 **scenario planning + structured analysis** 取代純 HiPPO

### Investment
- 「我們應該 R&amp;D 加 30%」（CFO 直覺）
- 解：Bezos TV 廣告測 15 個月、兩個市場驗證

## Anti-HiPPO 文化建構

### Microsoft ExP 的 culture-change playbook（Kohavi）

1. **教育**：500+ 員工受訓統計 + DOE class；寫《Practical Guide to Controlled Experiments on the Web》
2. **語言**：HiPPO 玩偶 + 「**Experiment or Die!**」海報
3. **獎勵**：KR 不要綁 feature 而是綁 key metric → 鼓勵 evidence-based shipping
4. **流程**：80% Bing 提案先跑 controlled experiment（low-risk bug fix / OS upgrade 例外）

### Booking.com 的版本（[[entities/Booking-com]]）

- **任何員工皆可發起實驗**，不需主管批准
- **270 teams 自組織**，每 team 6-8 人 squad
- Frisby「**自我糾正的社區、自我修復的組織**」 — 從根本去 HiPPO 化

## 為什麼 HiPPO 仍普遍

### 1. Confirmation bias
- 高層通過 self-selection 已是「過去判斷對的人」
- 但 survivorship bias — 過去對不代表未來對

### 2. Power dynamics
- 「Loss of Power」（Kohavi 引 Linsky &amp; Heifetz）
- PM / designer / editor 把 「proposing alternatives = 承認不知道誰會贏」視為威脅

### 3. Speed
- A/B test 要 2 週 / 100 萬 user 樣本
- HiPPO 1 小時做決定 — 短期 efficient

### 4. Reward system
- 公司常 SMART goal 給 「ship feature X」獎勵 → 而非「improve metric Y」
- HiPPO 推 feature 容易交差

## HiPPO 邊界 / 反例

### 何時 HiPPO 反而對

- **A/B 不適用**：strategic decision（M&amp;A / 新市場進入 / business model 轉向）
- **樣本不足**：&lt; 幾千 DAU 的小產品 / B2B 長 sales cycle
- **倫理 / 法律**：受 GDPR / FDA / 醫療隱私限制的決策
- **緊急應變**：incident response、危機處理

### 「Expert intuition」可信的條件（Kahneman 2009）

- 規律性高的環境（chess、火災現場救援）
- 提供 quick + accurate feedback
- 長期 deliberate practice 訓練

但這些條件**在多數商業 / 產品決策中不滿足** → HiPPO 反指標仍有效。

## 連結 [[concepts/decision-making-biases|決策偏誤]]

HiPPO 是多種 cognitive bias 的組合：
- **Authority bias**：盲信權威
- **Confirmation bias**：自己的判斷被歡迎
- **Halo effect**：高 title = 各方面強
- **Sunk cost fallacy**：「我已經做這麼久」
- **Overconfidence**：高薪伴隨過度自信

## 對 PM 工作的啟示（Jason 視角）^[inferred]

醫療 AI PM 的 HiPPO 風險：
- 主任醫師 vs AI 工程師 vs 你（PM）三方意見衝突
- 主任醫師有臨床經驗（local intuition 對）但對技術可行性可能 HiPPO
- AI 工程師對技術對但對臨床 workflow HiPPO

### 防 HiPPO 策略：
1. **每個 decision 都嘗試找 evidence**（pilot study / customer interview / log data）
2. **明確區分**：strategic decision（無法測）vs operational decision（可 A/B）
3. **PM 自己是 anti-HiPPO 守門員**：把 evidence 帶到桌上
4. 對應 [[concepts/evidence-based-management|EBMgt]] 三階段

## Open Questions（待 wiki-challenge）

- **HiPPO 在亞洲 / 集體主義文化的特性**：是否更強（高 Power Distance）？^[inferred]
- **創辦人主導 vs HiPPO 邊界**：Jobs / Bezos / Musk 算 productive HiPPO 還是反 anti-pattern？^[inferred]
- **AI 時代的 HiPPO**：LLM 是否變成新的 HiPPO（「AI 說的對」未經 evidence）？^[inferred]
- **跨產業 HiPPO 強度**：投行 vs tech 公司 vs 製造業 vs 醫療 — HiPPO 普及度應有差異 ^[ambiguous]

## Related

- **概念**：[[concepts/evidence-based-management]] / [[concepts/ab-testing-as-strategy]] / [[concepts/overall-evaluation-criterion]] / [[concepts/decision-making-biases]] / [[concepts/bounded-rationality]] / [[concepts/experimentation-culture]] / [[concepts/causal-inference-vs-correlation]] / [[concepts/hypothesis-driven-product]]
- **Entity**：[[entities/Ronny-Kohavi]] / [[entities/Microsoft]] / [[entities/Booking-com]]
- **參考**：[[references/kohavi-2017-HBR-online-experiments]] / [[references/HBS-booking-com-case]] / Kahneman《Thinking, Fast and Slow》
