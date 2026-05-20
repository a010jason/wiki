---
title: Resource-Based View (RBV)
type: concept
domain: mgmt
tags: [strategy, RBV, mgmt]
aliases: [RBV, 資源基礎觀點, 資源論]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Ch5
created: 2026-05-20
updated: 2026-05-20
provenance:
  extracted: 0.65
  inferred: 0.3
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-20
ingest_method: read-subagent
---

# Resource-Based View (RBV)

策略管理的內部觀點：當外部環境 volatile 時，企業內部的 resources & capabilities 比 market focus 提供**更穩定**的策略基礎，是 competitive advantage 與 profitability 的 primary source。^[extracted]

對立陣營：Porter 的 outside-in 框架（[[concepts/porters-five-forces]]）。RBV 是從外部結構分析「移到內部」的典範轉移。

## 譜系

| 學者 | 年代 | 貢獻 |
|---|---|---|
| Edith Penrose | 1959 | *The Theory of the Growth of the Firm*；firms grow constrained by their resource bundle |
| Birger Wernerfelt | 1984 | "A Resource-Based View of the Firm"，命名 RBV |
| Jay B. Barney | 1991 | [[concepts/VRIO-framework]]（Valuable / Rare / Imitable / Organization） |
| Robert M. Grant | 1991 / 2022 | 6-criteria 框架（[[concepts/grant-strategic-importance-criteria]]） |
| David Teece | 1997 | [[concepts/dynamic-capabilities]] — 高階能力重組 ordinary capabilities |

## 因果鏈

`Resources → Capabilities → Strategy → Competitive Advantage` ^[extracted]

- **Resources**（三類七型）：Tangible（Financial / Physical）、Intangible（Technology / Reputation）、Human（Skills / Communication / Motivation）
- **Capabilities** 是 resources 的**編排組合**，不是資源本身。整合機制有三：Processes、Structure、Motivation^[extracted]
- 經典案例：Honda 1946-2020 從單一引擎技術衍生 motorcycle → car → marine → generator → F1 → 商務機；Canon 三軸（Precision Mechanics / Fine Optics / Micro-Electronics）交集出全產品線

## 兩條路徑識別資源與能力

| 路徑 | 工具 | 起點 |
|---|---|---|
| **Inside-out（安內）** | [[concepts/value-chain]] | 拆 firm 內部 activity → 找出每段所需 capability |
| **Outside-in（攘外）** | [[concepts/Key-Success-Factors-KSF]] | 從客戶選擇與產業競爭反推 → 需要什麼 capability |

Grant Ch5 強調**兩條都要走**，但未提供兩條衝突時如何取捨的方法。^[ambiguous]

## 經典批判

- **Tautology（同義反覆）**：「有 sustainable advantage 的公司必有 VRIO resources」變成定義性陳述，難證偽
- **Static**：原始 RBV 忽略環境變動 → [[concepts/dynamic-capabilities]] 補強
- **Empirical untestability**：tacit capability 難量測，實證難做^[inferred]

## 醫療 AI PM 視角

PACS 整合能力、FHIR 互通能力、臨床 dataset、放射師信任 —— 哪些是真正稀缺難複製的 resource？^[inferred]

→ 用 [[concepts/grant-strategic-importance-criteria]] 6 維度 + [[concepts/VRIO-framework]] 4 維度雙軌診斷。特別注意 **Appropriability**（[[concepts/appropriability]]）：演算法 capability 鑲嵌在資深工程師身上時，價值可能被員工 appropriate 而非歸股東（Grant Ch5 用 Goldman Sachs 案例：$13.3B 員工薪資 vs $1.8B 股東分紅）。^[inferred]

## Open Questions

- LLM 時代，RBV 對「演算法資源」的適用性？模型本身可被複製，但 fine-tuning data + workflow integration 仍是 resource？^[ambiguous]
- RBV 與 [[concepts/hypercompetition]] 觀點如何 reconcile（Grant Ch4 vs Ch5 在同本書內張力）

## Related

- [[concepts/VRIO-framework]] — operational tool
- [[concepts/grant-strategic-importance-criteria]] — Grant 6 維（含 Durability，VRIO 缺）
- [[concepts/dynamic-capabilities]] — 動態版 RBV
- [[concepts/appropriability]] — 價值捕獲
- [[concepts/value-chain]] — Inside-out 工具
- [[references/grant-contemporary-strategy-analysis]]
