---
title: Agency Theory（代理理論）
type: concept
domain: mgmt
tags: [agency, organizational-economics, ross-1973, jensen-meckling, contracts]
aliases: [代理理論, principal-agent theory]
sources:
  - reference:Ross-1973
  - reference:Jensen-Meckling-1976
  - reference:Bhattacherjee-Ch04-slides (pp.87-126)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Ross (1973) 與 Jensen & Meckling (1976) 提出的組織經濟學經典理論。解釋 principal-agent 關係目標不一致時的情境。核心問題：information asymmetry → moral hazard + adverse selection。解方：outcome-based contract（如 stock option）、monitoring、可續約 contract。教師中文眉批：「代理理論 → 不是固定薪資 → 要有變動薪資」。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.5
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# Agency Theory

組織經濟學經典理論。原由 Ross (1973) 提出，Jensen & Meckling (1976) 大幅發展。^[extracted]

## 解釋什麼

**Principal-agent 關係目標不一致**的情境：
- 雇主-員工
- Executive-股東
- 買-賣方
- 病人-醫師
- 銀行-借款人（[[references/huang-2022-firm-climate-risk-bank-loan]] 待寫）

**目標**：找出最佳 contract、最小化 goal incongruence。

## 核心假設 ^[extracted]

- 人類為 **self-interested**
- **Boundedly rational**
- **Risk-averse**

## 問題本質 ^[extracted]

```
Information Asymmetry
        │
        ↓
┌─────────────────────────────────┐
│ Principal 無法充分觀察 agent     │
│        行為或評估 agent 技能      │
└─────────────────────────────────┘
        │
        ↓
   兩種失靈：
   • Moral hazard（道德風險）：agent 不努力
   • Adverse selection（逆向選擇）：agent 謊報技能
```

## 解方 ^[extracted]

| 策略 | 機制 |
|---|---|
| **Behavior-based contract**（月薪） | 無法解決問題 |
| **Outcome-based contract**（佣金、completion fee） | 對齊 agent 與 principal 利益 |
| **混合契約**（部分基本 + 部分績效） | 平衡 risk-sharing 與 incentive |
| **Stock option** | outcome-based 的極端形式 |
| **Monitoring**（聘 supervisor） | 抵銷 moral hazard |
| **可續約 contract** | 取決於 performance（部分 outcome-based） |
| **改善任務結構** | 使其更 programmable / observable |

## 教師中文眉批 ^[extracted]

> 「代理理論 → 不是固定薪資 → 要有變動薪資」
>
> 「保健因子 / 激勵因子」「雙因素理論...弗里德里克·赫茨伯格（Frederick Herzberg）1950 年代末提出」

→ 教師把 agency theory 拉到激勵架構與雙因素理論做對比（herzberg two factor theory 待寫）。

## 經典張力：與 Two-Factor Theory 衝突 ^[inferred]

- **Agency Theory**：薪資應變動 + outcome-based 才能激勵 → 薪資是激勵工具
- **Herzberg Two-Factor**：薪資是**保健因子**（hygiene factor），不是激勵因子；缺乏會 dissatisfaction 但增加不會 motivation

兩理論在「薪資是否激勵」立場相反。Synthesis 候選頁：`synthesis/agency-theory-vs-two-factor-theory`（待寫）。

## 應用案例 ^[extracted]

- **員工 stock option** = outcome-based
- **員工月薪** = behavior-based
- **Journal of Marketing 論文** *Job Satisfaction, Job Performance, and Effort: A Reexamination Using Agency Theory*：H3-H6 圍繞 effort 作為 cost、fixed compensation 對 job satisfaction 顯著但對 effort 不顯著
- **銀行貸款 covenants**（[[references/huang-2022-firm-climate-risk-bank-loan]]）：銀行對氣候曝險公司加 collateral / covenants — 用 control rights 補價格機制不足

## 限制 / 反例 ^[extracted, inferred]

- **Job performance 對 job satisfaction 有正向影響**，與標準 agency theory 對立（但可能在 repeated principal-agent interaction 模型下成立）
- **過度強調 self-interest** → 忽略 social motivation、intrinsic motivation
- **Risk-averse 假設不普遍**：creative workers / entrepreneurs 風險偏好可能 risk-seeking
- **跨文化適用性**：在高 [[concepts/hofstede-cultural-dimensions|collectivist]] 文化中，individual outcome-based contract 可能破壞團隊合作

## 對醫療 AI PM 應用 ^[inferred]

- **醫院採購 AI 系統**：醫院（principal）對 AI 廠商（agent）的 information asymmetry — AI 性能是廠商私有 info
  - 解方：performance-based pricing、SLA、independent validation、可續約合約
- **醫師-病人關係**：經典 agency 案例 — 醫師（agent）有資訊優勢，病人（principal）難判斷醫療必要性
  - 監管 / DRG / EBM 都是 agency 控制機制

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 2 narrow / **3 brittle** / 0 unsupported。主要弱點：page 是 textbook compilation，過度簡化 Holmström 1979（hybrid contract is dominant solution）；忽略 behavioral economics（prospect theory）、SDT、motivation crowding-out 等對核心假設的系統性挑戰；「Agency vs Herzberg 立場相反」是 false dichotomy — 兩理論 unit of analysis 不同實則互補。Claim 4「Journal of Marketing 論文」引用 untraceable，需補 cite 或刪。
>
> `base_confidence`：0.50 → 0.50（維持，brittle cap 0.55 內）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/agency-theory.md`。

## Related

- [[concepts/scientific-theory]]
- [[concepts/innovation-diffusion-theory]]
- [[concepts/elaboration-likelihood-model]]
- herzberg two factor theory — 待寫
- incomplete contract theory — 待寫

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch4 slides pp.87-126
- Ross, S. A. (1973). The economic theory of agency. *American Economic Review*, 63(2), 134-139.
- Holmstrom, B. (1979). Moral hazard and observability. *Bell Journal of Economics*, 10(1), 74-91.
- Jensen, M. C., & Meckling, W. H. (1976). Theory of the firm. *Journal of Financial Economics*, 3(4), 305-360.
