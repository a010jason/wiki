---
title: Research Design（研究設計）
type: concept
domain: research-methods
tags: [research-design, methodology, validity, positivist, interpretive]
aliases: [research design, 研究設計, blueprint]
sources:
  - reference:Bhattacherjee-Ch05-slides
  - reference:Bhattacherjee-SSR-book (Ch5)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Research design 是 empirical research 的「blueprint」，必須規範 data collection / instrument development / sampling 三大流程。粗分 positivist（theory-testing，多 quantitative）vs interpretive（theory-building，多 qualitative）；mixed-mode 設計通常最佳。是 [[concepts/internal-validity]] / [[concepts/external-validity]] / [[concepts/construct-validity]] / 統計結論效度的設計樞紐。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Research Design

[[concepts/research-process-seven-steps|Bhattacherjee Ch5]] 的研究設計總論，是「方法」上層的 blueprint。^[extracted]

## 定義

> A comprehensive plan for data collection in an empirical research project；是 empirical research 的「blueprint」。

三大 process 必須在 design 中規範：
1. **Data collection process**
2. **Instrument development process**
3. **Sampling process**

## Research Design vs Research Method ^[ambiguous]

教師在 slide 中**沒有明確區分**這兩個術語，而是把 design 視為「包含 method 在內的整體 plan」。實際 slide 用「designs / methods」並列，界線模糊。

通用區分：
- **Design** = 整體架構（experimental vs non-experimental、cross-sectional vs longitudinal）
- **Method** = 具體技法（survey / interview / observation）

## Positivist vs Interpretive 對照 ^[extracted]

| 維度 | Positivist | Interpretive |
|---|---|---|
| 取向 | 演繹（理論出發，由數據解釋理論） | 歸納（資料出發） |
| 目的 | Theory / Hypothesis testing | Theory building |
| 典型 method | Lab experiments、survey research | Action research、ethnography |
| 資料類型 | 預設 quantitative，可含 qualitative | 預設 qualitative，可含 quantitative |
| Reality 假設 | objective、generalizable patterns | subjective interpretation |

教師中文眉批：「演繹：理論出發，由數據解釋理論」「歸納：資料出發」

**重要澄清**：positivist/interpretive **不等同** quantitative/qualitative。

## 四種 Validity ^[extracted]

詳見各自獨立頁。研究設計的核心是 trade-off 四種 validity：

| Validity | 中文 | 對應頁 |
|---|---|---|
| **Internal validity** | 內部效度 | [[concepts/internal-validity]] |
| **External validity** | 外部效度 | [[concepts/external-validity]] |
| **Construct validity** | 構面效度 | [[concepts/construct-validity]] |
| **Statistical conclusion validity** | （無中文眉批） | [[concepts/statistical-conclusion-validity]] 待寫 |

**Statistical conclusion validity 對 interpretive design 不適用**（不用統計檢定）。

## Cone of Validity（不同 design 的 trade-off）^[extracted]

```
High External Validity
        │
        │ ★ Field experiment
        │ ★ Multiple case study
        │ ★ Longitudinal field survey
        │   （兩高反例）
        │
        │ ● Field survey
        │
        │
        │ ● Cross-sectional survey
        │
        └────────────────────────────→
                          High Internal Validity
                                ★ Lab experiment
```

**重要反論**：「internal vs external trade-off」不是絕對 — 兩高反例存在。詳見 [[synthesis/internal-external-validity-tradeoff-debunked]] 待寫。

## 五種 Control 技巧 ^[extracted]

改善 internal validity 的方法：

| 技巧 | 機制 | 適用 |
|---|---|---|
| **Manipulation** | 操弄 IV，與 control group 比較 | experimental / quasi-experimental |
| **Elimination** | 把 extraneous variable 跨組固定 | 所有 design |
| **Inclusion** | 把 extraneous 納入 design 並 separately estimate | 需要較大樣本 |
| **Statistical control** | 把 extraneous 當 covariate 加入統計模型 | survey / 二手資料分析 |
| **Randomization** | 透過 random process 抵消 extraneous | experimental / RCT |

### Random Selection vs Random Assignment ^[extracted]

- **Random selection**：sample 從 population 隨機抽（提升 external validity）
- **Random assignment**：subjects 不論怎麼選來的，到 treatment group 是隨機分派（提升 internal validity）
- 當資源限制無法 random selection 時，**random assignment 是 mandatory**

## 七種 Popular Research Designs ^[extracted]

| Design | 主要強項 | 弱項 |
|---|---|---|
| [[concepts/experimental-design]] | Internal validity | External（lab） |
| [[concepts/field-survey]] | External, 多 IV | Internal, respondent bias |
| [[concepts/secondary-data-analysis]] | 省成本 | Fit 不保證、temporal 不明 |
| [[concepts/case-research]] | 多視角、發現未知因素 | 難 causality / generalize |
| [[concepts/focus-group-research]] | 群體互動 surface ideas | 無 control、小樣本 |
| [[concepts/action-research]] | 連 research 與 practice | bias、context-specific |
| [[concepts/ethnography]] | rich context、最小 bias | 耗時極大、不可 generalize |

待寫 stub：experimental / field-survey / secondary-data / case-research / focus-group / action-research / ethnography 七頁。

## Selecting Design by Stage ^[extracted]

| 研究階段 | 推薦 design |
|---|---|
| Preliminary / 問題不清楚 | Focus group（個人） / Case study（組織） |
| 沒現成 theory，要 build theory | Case research / Ethnography（interpretive） |
| 競爭 theory 存在，要 test 或整合 | Experiment / Survey / Secondary data（positivist） |

**Mixed-mode 推薦**：即使做高度結構化的 survey，也可留 open-ended 題收 qualitative insight；case research 雖以 face-to-face interview 為主，仍應收 quantitative data。

> 「collect as much and as diverse data as possible that can help generate the best possible insights」

## 對 PM 工作的對應 ^[inferred]

PM discovery research 的 design 選擇：

| PM 階段 | 推薦 |
|---|---|
| Problem discovery（不知 user 痛在哪） | Ethnography（shadowing）、in-depth interview |
| Concept validation | Focus group、prototype testing |
| Feature prioritization | Survey（quant）、conjoint analysis |
| Launch impact measurement | A/B test（experimental） |
| Long-term causal claim | Longitudinal cohort、quasi-experiment |

PM 常見錯誤：用 quant survey 做 problem discovery（應該用 qualitative），或用 focus group 驗證 feature impact（應該用 A/B test）。

## Related

- [[concepts/internal-validity]]
- [[concepts/external-validity]]
- [[concepts/construct-validity]]
- [[concepts/causality-three-conditions]]
- [[concepts/positivist-vs-interpretive-research]]
- [[concepts/research-process-seven-steps]]
- [[concepts/sampling-frame]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch5 slides + book Ch5
