---
title: Contemporary Strategy Analysis (Grant, 11th ed., Wiley 2022)
type: reference
domain: mgmt
tags: [strategy, textbook, reference, mgmt]
aliases: [Grant strategy textbook, Contemporary Strategy Analysis]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Wiley-2022
source_url: TBD
created: 2026-05-05
updated: 2026-05-20
summary: >-
  Robert M. Grant 的策略管理經典教科書，11th ed (Wiley 2022)。EMBA 策略管理課程教材。
  2026-05-20 完成 Ch1-14（14 章 lecture slides 全部 ingest）。Ch7（Competitive Advantage）2026-05-05 初次 ingest（7 頁）後，於 2026-05-20 完成 audit + backfill：補 4 個獨立概念頁（isolating-mechanisms / causal-ambiguity / strategic-innovation / drivers-of-cost-advantage） + 1 synthesis（Ricardian vs Schumpeterian rent）。
provenance:
  extracted: 0.82
  inferred: 0.15
  ambiguous: 0.03
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Contemporary Strategy Analysis (Grant, Wiley 2022)

## Bibliographic

> Grant, R. M. (2022). *Contemporary Strategy Analysis* (11th ed.). Wiley.

由 Robert M. Grant（Georgetown University）撰寫，是英美 MBA / EMBA 策略管理課程主流教科書之一。^[extracted]

## Ingest 範圍與方法

| 階段 | 章節 | 路徑 | 日期 |
|---|---|---|---|
| Phase 1 | Ch1（Concept of Strategy） | A（主 agent） | 2026-05-05 |
| Phase 1 | Ch7（Competitive Advantage）初次 ingest | A（主 agent） | 2026-05-05 |
| Phase 2 | Ch2-6, Ch8-14（共 12 章 lecture slides） | B（subagent，每章 1 agent） | 2026-05-20 |
| Audit | Ch7 backfill（13p 全文重讀 + 4 獨立概念頁 + 1 synthesis） | A（主 agent，path 內） | 2026-05-20 |

Phase 2 採 path B subagent-first，避免主 agent context 累積；每章用 CLAUDE.md 5 欄 distill template 統一回傳。

## Ch7 已 ingest 的核心內容（2026-05-05 初版 + 2026-05-20 audit）

### 初版 7 頁
- [[concepts/competitive-advantage]] — 形成 + 維繫 hub 頁
- [[concepts/porters-generic-strategies]] — Cost / Differentiation / Focus
- [[concepts/experience-curve]] — BCG 經驗曲線 + PIMS market share data
- [[concepts/value-chain]] — Porter 工具 + Can Mfr linkage
- [[concepts/blue-ocean-strategy]] — Cirque du Soleil + Strategy Canvas
- [[concepts/disruptive-innovation]] — Christensen 機制
- [[skills/differentiation-analysis]] — 需求/供給雙面分析 + Product Integrity

### Audit 新增 5 頁（2026-05-20）
- [[concepts/isolating-mechanisms]] — Rumelt 1984 的 4 層防線（從章內提升為獨立概念）
- [[concepts/causal-ambiguity]] — Lippman & Rumelt 1982（從章內提升為獨立概念）
- [[concepts/strategic-innovation]] — 3 路徑 + 歷史商業模式創新表（從章內提升為獨立概念）
- [[concepts/drivers-of-cost-advantage]] — Grant 7 driver 框架（從 experience-curve.md 提升為獨立概念）
- [[synthesis/competitive-advantage-types-and-sources]] — Ricardian vs Schumpeterian rent + hybrid 條件（補 broken link）

Audit 動機：第一輪 ingest 把多個獨立概念塞在 competitive-advantage 與 experience-curve 兩頁中，跨頁交叉引用時不便。Audit 後拆出獨立概念頁，並保留母頁的整合敘述（hub 角色）。

## Ch1 已 ingest 的核心內容

- [[concepts/strategy]] — 策略定義 + 4 ingredients of success
- [[concepts/strategic-fit]] — Firm × Environment 連結
- [[concepts/intended-vs-emergent-strategy]] — Mintzberg 框架
- [[concepts/corporate-vs-business-strategy]] — 兩層策略

## Ch2-6, Ch8-14 已 ingest 的核心內容（2026-05-20）

### Ch2 Goals, Values, and Performance
- [[concepts/balanced-scorecard]] — Kaplan-Norton 四維度
- 案例錨點：UPS vs FedEx ROA 拆解、Boeing 1996-2004 過度追逐 shareholder value 的反例、Regional Airline BSC 範例

### Ch3 Industry Analysis
- [[concepts/porters-five-forces]] 已存在；本章補充 industry attractiveness 三 driver、barriers to entry 七大來源、KSF 雙軌診斷（demand + supply）
- 案例：US 產業 ROCE 對照（Tobacco 64.5% vs Motor Vehicles 5.7%）、Ferrari 產業邊界、航空業 KSF profit driver model

### Ch4 Further Topics in Industry & Competitive Analysis
- [[concepts/hypercompetition]] — Schumpeterian competition + transient advantage + Winner-Take-All
- Five Forces 第六力（complements）、Business Ecosystems 與 Value Migration、Business Model Canvas、Game Theory 四貢獻、Strategic Group Analysis
- 案例：Wintel、Lego（Jason 旁註）、World Auto / Petroleum Strategic Groups

### Ch5 Resources and Capabilities
- [[concepts/resource-based-view]] — RBV 母框架（Penrose、Wernerfelt、Barney、Teece 譜系）
- 已存在的 [[concepts/VRIO-framework]] 對接 Grant 6-criteria（Relevance / Scarcity / Durability / Transferability / Replicability / Appropriability），**Durability 是 VRIO 缺的補強**
- 案例：Honda 1946-2020、Canon 三軸、3M 1902-2020、Icelandair 2×2、Goldman Sachs appropriability（$13.3B 員工薪資 vs $1.8B 股東分紅）

### Ch6 Organization Structure
- [[concepts/cooperation-vs-coordination]] — 組織存在的兩個根本問題
- Weber bureaucracy 七原則、loose coupling、organizational structure 三原型（functional / multidivisional / matrix）、Mechanistic vs Organic（Burns & Stalker）
- 案例：Booz Allen Hamilton 1992-1998 matrix 重組、Ryanair / GE / Sony / Royal Dutch Shell 結構圖

### Ch8 Industry Evolution and Strategic Change
- [[concepts/industry-life-cycle]] — ILC 四階段 + S-Curve + regeneration 反例
- Organizational Inertia 五大來源、Tushman 技術變革三分類、Ambidexterity（structural vs contextual）、Knowledge Conversion SECI + Grant 加 Systematization
- 案例：Klepper US Auto 1895-1960 shakeout、1912 vs 2018 全球十大市值公司洗牌、Hyundai Motor capability sequencing、Oil Majors childhood imprint

### Ch9 Innovation and Technology-based Industries
- [[concepts/dominant-design]] — 三鎖死機制（learning effects / switching costs / coordination requirements）
- Appropriability Regime（Teece 四槓桿）、Network Externalities 三來源、Standards War 戰術、Innovation Modes 2×2
- 案例：19 個產業 Innovator vs Follower 對照（多數 follower 勝出）、Pharma/PC/Smartphone 三 pie chart、VHS vs Betamax、IBM-PC vs Apple Mac

### Ch10 Vertical Integration and the Scope of the Firm
- [[concepts/transaction-cost-economics]] — Coase-Williamson 框架
- Corporate scope 三維度（vertical × product × geographical）、VI benefits/costs、quasi-VI 光譜、Chandler Visible Hand 八命題
- 案例：Tesla 全 VI vs Ford Focus Electric 分工、Samsung 轉型、Sony / TSMC / ZARA / Alibaba scope 對照、汽車產業 OEM/Tier 1/2/3 階層

### Ch11 Global Strategy
- [[concepts/CAGE-distance-framework]] — Ghemawat 四維距離（Cultural / Administrative / Geographical / Economic）
- Patterns of Internationalization 四象限、Porter National Diamond、Bartlett-Ghoshal MNC Typology、AAA Triangle
- 案例：Boeing 787 全球生產分散、iPhone X 供應鏈、Nike R&D-製造-行銷分流

### Ch12 Diversification
- 三道測試（Attractiveness / Cost of Entry / Better-Off）、Economies of Scope（operational + strategic relatedness）、Parenting Advantage 概念引入
- 動機批判：Growth-seeking diversification 傷股東價值；Risk Spreading 對 shareholder 無價值（CAPM）
- 案例：Conglomerate discount 浪潮（1980-90s）、Emerging-Market Conglomerate（Tata、Reliance、SK、LG）、LVMH / Virgin

### Ch13 Implementing Multibusiness Strategy
- Portfolio Models 三種（BCG / GE McKinsey / Ashridge）、Synergy 三來源、McKinsey Restructuring Pentagon
- Strategic Planning vs Financial Control 兩種 corporate management styles、Leading Change 四工具
- M&A 績效實證：Cost savings 平均高估 25%、revenue 高估 70%；收購方股東負報酬

### Ch14 Current Trends in Strategic Management
- 21 世紀 turbulent 環境（4 forces）、Rethinking Strategy 五方向、Strategic Characteristics of Digital Industries（network externalities → swift erosion）、Emerging Shape of Business Enterprise（network of network / loose coupling / self-organization / permeable boundary）
- 主張：「shareholder primacy 已過時」、enterprise value + parenting advantage 為新指導原則

## Ingest TODO（剩餘工作）

- **Ch7（Competitive Advantage）**：PDF 已在 source（`/Users/jason/.../ch07_Competitive Advantage.pdf.pdf`，1.5MB），但其概念（cost leadership、differentiation、value chain analysis）部分已在 [[concepts/porters-generic-strategies]] / [[concepts/value-chain]] 涵蓋。後續若要完整補，採 path A。
- 多數新建 concept page 為 stub 級，需後續 wiki-challenge 加質疑層

## 為什麼選 Grant

- 比 Porter 更整合（涵蓋 RBV + I/O + dynamic capabilities）
- 比 Mintzberg 更結構化（適合教科書）
- 比 Christensen 更實務應用

## Open Questions

- 11th ed (2022) 與 10th ed (2018) 主要差異？^[ambiguous]
- 課堂老師是哪位？（PDF 集為 Google Drive `策略管理` 資料夾） ^[ambiguous]
- Grant 的 Strategic Fit 概念是否有原創貢獻，或綜合 Andrews、Porter？^[ambiguous]

## Related

- [[concepts/strategy]]
- [[concepts/strategic-fit]]
- [[concepts/balanced-scorecard]]
- [[concepts/hypercompetition]]
- [[concepts/resource-based-view]]
- [[concepts/cooperation-vs-coordination]]
- [[concepts/industry-life-cycle]]
- [[concepts/dominant-design]]
- [[concepts/transaction-cost-economics]]
- [[concepts/CAGE-distance-framework]]
- [[concepts/VRIO-framework]]
- [[concepts/porters-five-forces]]
- [[concepts/corporate-vs-business-strategy]]
- [[concepts/intended-vs-emergent-strategy]]
