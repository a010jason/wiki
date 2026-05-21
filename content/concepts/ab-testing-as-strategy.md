---
title: A/B Testing as Strategy (not just tool)
type: concept
domain: mgmt
tags: [concept, experimentation, evidence-based-management, organizational-learning, ab-testing, mgmt, strategy]
aliases: [A/B testing strategy, Experimentation as strategy, Lukas Vermeer Booking experimentation]
created: 2026-05-21
updated: 2026-05-21
summary: >-
  A/B testing 是公司戰略而非工具或方法。[[entities/Booking-com]] 把 A/B testing 提升到組織 DNA 等級：1,800 名技術產品人員 75% 用實驗平台、270 teams 自組織、每天 1,000+ 嚴格測試、同時 ~1,000 並行對照實驗、年 26,000 次實驗 10% 命中率。Lukas Vermeer 核心立場：「strategy 不能 A/B test，但搞清楚 strategy 後一切都可測」 —— A/B testing 不替代領導層。三層意義：替代 HiPPO 權威來源、替代 product roadmap 設計、構成組織學習與 retention 基礎。
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.75
  inferred: 0.20
  ambiguous: 0.05
base_confidence: 0.45
sources:
  - id: HBS-9-619-015-Booking-case
    ref: '[[references/HBS-booking-com-case]]'
related:
  - 'experimentation culture'
  - 'evidence based management'
  - 'growth flywheel'
  - 'hypothesis driven product'
  - 'causal inference vs correlation'
  - 'fitness landscape'
  - '[[entities/Booking-com]]'
---

# A/B Testing as Strategy

**A/B testing 是公司戰略，不只是工具或方法**。[[entities/Booking-com|Booking.com]] 把 A/B testing 提升到組織 DNA 等級：1,800 名技術產品人員中 75% 用實驗平台、270 teams 自組織、每天 1,000+ 嚴格測試、同時 ~1,000 並行對照實驗。^[extracted]

> 核心 quote — **Lukas Vermeer**（Senior Product Owner of Experimentation）：「**strategy 不能 A/B test，但搞清楚 strategy 後一切都可測**」 — A/B testing **不替代領導層**的根本立場。^[extracted]

## A/B testing 是 strategy 的三層意義

### 1. 替代決策層級的權威來源
- 取代「資深主管直覺」「最有 title 的人說了算」（HiPPO = Highest Paid Person's Opinion）
- Vermeer：「我們所有產品決策都基於以客戶為中心的可靠證據」
- **任何員工皆可發起實驗**，不需主管批准 — 把 ad-hoc 個人決策權搬到 data-validated 平台

### 2. 替代 product roadmap 的設計方式
- 不是「決定要做 X 再做 X」，而是「持續測試 N 個變體，留下 winner」
- 10/10 實驗中 9 次失敗，但**失敗不等於失敗的實驗**（Vermeer：「進一步調查 → 它告訴我 customers don't want X」是有價值的）
- Frisby：「我們有 21 年歷史但大多數員工是過去六年加入」、「我寧願創造**自我糾正的社區、自我修復的組織**」

### 3. 構成組織學習與 retention 的基礎
- 教師眉批：「**ecosystem / 270 個 Teams → 自組織 / 組織學習能力 / 學習型組織的五項修練**」 ^[teacher-annotation]
- 新員工第一天就被信任做實驗（Isbrucker：「你思考方式可控制後續發展」）
- 客服 1,400 員工累積回饋變實驗來源（Onno Zoeter）

## A/B testing 在 Booking 的量化規模

- 同時 ~1,000 對照實驗（80% 在「核心」住宿預訂主體上）
- 每天 1,000+ 嚴格測試
- 年 26,000 次實驗、優化 2,600 次（**10% 命中率**）
- p-value 0.10、power 0.8-0.95、最低 2 週、樣本至少 100 萬獨立訪客
- Blue flag = 資訊性、Yellow = 留意、Red = 嚴重（**金絲雀煤礦**）
- multiple millions impact per landing-page experiment
- 多數測試影響數百萬客流；landing page 同時數兆 permutations live

## A/B testing 的戰略邊界（為何 strategy 自己不能 A/B test）

教師核心引述：

> Vermeer：「**strategy 不能 A/B test**」
> Gulati：「**漸進式測試的 DNA 在創新跳變時變成威脅 — 業務模式創新只能來自領導層而非專注漸進式創新的產品團隊**」
> Vismans：「**A/B 無法替代領導層**做業務模式創新、新產品團隊組建」

### 為什麼？
1. **新業務沒 baseline**：你要測 X 才能驗證，但 X 還不存在；用 0 user base 跑 A/B 沒統計力
2. **跨越式創新需要長期投資**：A/B 偏好 2 週內可見的小變化，新 BU 需要 2-5 年才能看到果
3. **戰略需要 framing**：A/B 只能測 within frame 的變體，不能測 frame 本身（如「我們該不該進新興市場」這類問題沒 A/B 變體）
4. **Villas.com 反例**：Tans 自承「之前推 Villas.com 沒有資料支援自己直覺、幾年後關站」 — 強行 A/B 結果可能是**保守化**，錯過 disruptive 機會

## Causal Inference 階梯（教師框架）

slide p.5：「**Survey → 果果造因 / Database → GIGO / Experiment → Cause-effect**」 ^[teacher-annotation]

| 方法 | 因果效力 | Booking 立場 |
|---|---|---|
| Survey | 「果果造因」（先有結果再倒推因） | 不可信 |
| Database analytics | GIGO（garbage in garbage out） | 補充參考 |
| **A/B experiment** | **Cause-effect**（真正因果驗證） | 主力 |

詳見 causal inference vs correlation。

## 與 EBM / Hypothesis-Driven Product / Growth Flywheel 的關係

- **evidence based management**：EBM 三階段（select best available evidence → systematic decision-making → re-evaluating &amp; adapting）對應 A/B 流程的 hypothesis → experiment → re-test
- **hypothesis driven product**：Booking 自有 Hypothesis Template（Exhibit 9）= Theory（prior + condition + behavior）+ Validation（effects + metrics）+ Objective（motivation for customer/partner/business）
- **growth flywheel**：A/B → conversion → marketing ROI → traffic → partners → selection → prices → CX → A/B（飛輪閉環）
- **fitness landscape**：A/B 在 NK fitness landscape 中找 local optima 的有效方法，但**容易卡在 local 而非 global**（教師眉批 NK 模型 / Stuart Kauffman / 可調的崎嶇）— 這是「漸進式測試 vs 跨越式創新」張力的數學基礎

## 為什麼不是所有公司都能複製？

教師眉批：「**為什麼 Google 沒辦法學？因為 Google 只做 Research、不做服務？**」 ^[teacher-annotation]

Booking-style A/B-as-strategy 需要的**前提條件**：
1. **數百萬日活流量**（樣本量門檻）
2. **高度標準化 customer journey**（變項可隔離）
3. **轉化是清楚的 KPI**（不是「滿意度」這類 fuzzy 指標）
4. **bottom-up culture**（教師眉批 slide p.3）
5. **CGS ≈ 0 的數位商模**（試錯成本低）
6. **270 teams 自組織 + 學習型組織五項修練的組織底料**

醫療業 / B2B 工業 / 政府服務多缺其中 3-4 項 — 不能直接複製 Booking 模式。^[inferred]

## Open Questions（待 wiki-challenge）

- **A/B 文化是否實際上保守化了 Booking？** Villas.com 失敗 + Airbnb 迴應慢 = 證據點 ^[inferred]
- **「A/B 是 strategy」vs「A/B 只是執行 strategy 的工具」**：Vermeer 自己同時主張兩者 — 這是合一還是矛盾？^[inferred]
- **道德爭議**：A/B 測「請立即預訂」「客房緊張」「只剩三間客房」推播 — 稀缺性人為製造優化是否該被 A/B 收斂？^[ambiguous]
- **跨產業適用性**：醫療 AI 是否能用 A/B testing 驗證 PACS 介面設計？FDA / IRB 邊界在哪？^[inferred, Jason 醫療角度]

## Related

- experimentation culture
- evidence based management
- hypothesis driven product
- causal inference vs correlation
- growth flywheel
- fitness landscape
- champion vs challenger
- [[concepts/minimum-winning-game]]
- [[entities/Booking-com]] / Lukas-Vermeer / Stuart-Frisby / David-Vismans
- [[references/HBS-booking-com-case]]
- ab testing strategic limits

- [[synthesis/ab-testing-x-booking-strategic-limits]] — Booking 案例 + 戰略邊界