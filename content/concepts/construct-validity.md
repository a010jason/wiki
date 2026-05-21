---
title: Construct Validity（構面效度）
type: concept
domain: research-methods
tags: [validity, construct-validity, measurement, methodology]
aliases: [構面效度, construct validity, scale validity]
sources:
  - reference:Bhattacherjee-Ch07-slides (pp.60-65)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Construct validity 是 scale 是否量到「我們想量的那個 unobservable construct」。是 measurement procedure 的 validity（不是 hypothesis 的 internal/external validity）。Bhattacherjee 切兩 approach：Translational validity（理論：face + content）+ Criterion-related validity（實證：convergent + discriminant + concurrent + predictive）。教師中文眉批：「構面效度」。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Construct Validity

教師中文眉批：「**構面效度**」。^[extracted]

## 定義

> Scale 是否真的在測它宣稱要測的 theoretical construct。

**重要區分**：這裡談的是「**measurement procedure 的 validity**」，**不是** hypothesis testing 的 validity（[[concepts/internal-validity|internal]] / [[concepts/external-validity|external]] / [[concepts/statistical-conclusion-validity|statistical conclusion]]）。

## Validity 整體框架（Bhattacherjee Figure 7.2）^[extracted]

```
                  Construct Validity
                          ↓
              ┌───────────┴───────────┐
              ↓                       ↓
      Translational Validity   Criterion-related Validity
      （理論評估：expert        （實證評估：correlational
       judges + Q-sort）          analysis、factor analysis）
              ↓                       ↓
        ┌─────┴─────┐         ┌──────┴──────┐
        ↓           ↓         ↓             ↓
       Face       Content   Convergent /  Concurrent /
      Validity   Validity   Discriminant  Predictive
```

## Translational Validity（兩 sub-type）^[extracted]

### Face Validity（[[concepts/face-validity]]）

> Indicator 表面上是否看起來合理代表 construct？

| 有 face validity | 無 face validity |
|---|---|
| 上教堂頻率測 religiosity | 圖書館借書數測 employee morale |
| 員工 attendance 測 engagement（弱但 acceptable） | absorptive capacity 用 R&D / 營收（**face validity 不佳**但被廣用） |

**Hardesty & Bearden (2004)** dartboard 比喻：
- Face validity = 飛鏢只要「**打中靶**」即可

→ **Necessary but not sufficient** for construct validity（slide 強調）。

### Content Validity（[[concepts/content-validity]]）

> Scale items **涵蓋 construct 內容領域**的程度。

範例（餐廳服務滿意度）：
- 定義 content domain = 食物品質 + 服務人員禮貌 + 等待時間 + 整體氛圍
- Scale 必須涵蓋這 4 面向才有 content validity

**Hardesty & Bearden dartboard 比喻**：
- Content validity = 飛鏢必須**隨機散落整個 dartboard**（涵蓋整個 construct domain）
- 若只集中 dartboard 左半 → 不具 content validity

## Criterion-related Validity（四 sub-type）^[extracted]

### Convergent Validity

> Measure 與「該 construct 的其他 indicator」之相近度（**高** correlation）。

判準（EFA）：
- **Same-factor loading ≥ 0.60**

判準（CFA）：
- **AVE ≥ 0.50**（Fornell & Larcker 1981）
- **Construct reliability > 0.70**
- **Factor loading t statistic p < 0.001**

### Discriminant Validity

> Measure 對「**不該量到**的 constructs」之區辨度（**低** correlation）。

判準（EFA）：
- **Cross-factor loading ≤ 0.30**

判準（CFA，三種程序）：
1. **Chi-square difference test**（限制 vs 不限制模型）
2. **Confidence interval test**（construct 間 correlation CI 不含 1.0）
3. **Variance extracted test**（**√AVE > inter-construct correlation**，Fornell-Larcker）

詳見 [[concepts/AVE-fornell-larcker]]。

### Concurrent Validity

> 與「**同時發生**的具體 criterion」相關度。

範例：學生**微積分成績**是否與**線性代數成績**相關（兩者都是數學）。

### Predictive Validity

> 是否成功預測**理論上應預測**的**未來**結果。

範例：**SAT 分數**是否能預測**大學 GPA**？

需建構 [[concepts/nomological-network]] — 展示 constructs 之間的理論關聯。

→ Slide 強調 concurrent + predictive validity 在實證社會科學**常被忽略**。

## EFA 判準（教師強調）^[extracted]

| 判準 | Threshold |
|---|---|
| Eigenvalue | > 1.0 |
| Same-factor loading | ≥ 0.60（convergent） |
| Cross-factor loading | ≤ 0.30（discriminant） |
| Rotation | orthogonal（假設 construct 不相關）/ oblique（假設相關） |

## CFA 判準（Lin 2010 應用 Fornell-Larcker）^[extracted]

**Convergent 三條件**：
1. Factor loading t statistic 都 **p < 0.001**（Anderson & Gerbing 1988）
2. **AVE ≥ 0.50**
3. **Construct reliability > 0.70**

**Discriminant 三程序**：
1. Chi-square difference test（**Bonferroni 校正**：α=0.01 時 critical χ² = 11.58）
2. CI test（CI 不含 1.0）
3. √AVE > inter-construct correlation

## MTMM（Multi-Trait Multi-Method）^[extracted]

每個 construct 用兩種以上方法測（survey + observation；或 teacher + parent 兩組 respondent）。

教師明寫：「**onerous and relatively less popular approach**」。

## Hajli 2014 案例 ^[extracted]

教師用 Hajli 2014 一個案例橫跨全部 validity 類型：face / content / construct / convergent / discriminant / AVE / Fornell-Larcker — 是該課推薦的「整套 validity 評估範例」。

## 與 reliability 的關係（shooting-target 比喻）^[extracted]

| 情境 | Reliability | Validity |
|---|---|---|
| 彈著點集中且在靶心 | ✅ | ✅ |
| Valid 但 not reliable | ❌ | ✅ |
| **Reliable 但 not valid**（校準錯的體重計） | ✅ | ❌ |
| 都不 | ❌ | ❌ |

兩者都必要，無法用一個取代另一個。

## 對 PM / 醫療 AI 應用 ^[inferred]

醫療 AI 量表設計（如 patient satisfaction、clinician adoption intention）必須走完 validity 評估：

| Stage | 工作 |
|---|---|
| Conceptualization | 定義 construct domain（這是什麼？不是什麼？） |
| Face validity | 拿 draft items 給 5-10 個 expert clinician 看 |
| Content validity | 涵蓋所有 sub-dimensions？dartboard 散開了嗎？ |
| Pilot test（n=30-100） | EFA 看 loadings、Cronbach α |
| Validation study（n=200+） | CFA：AVE + Fornell-Larcker + 三 discriminant 程序 |
| Predictive test | 量表分數能預測未來 outcome 嗎？ |

→ 跳過任何一步就上市 → 量表結果不可信、決策無依據。

## 限制 ^[inferred]

- Construct validity 永遠是 ongoing 的（沒有「最終驗證」），即使通過全套程序仍可能在新樣本失敗
- 「constructs 之間應 low correlation」預設 constructs **本質可分** — 但社會科學 constructs 常有概念重疊（compassion vs empathy、organizational commitment vs organizational identification）
- Hardesty-Bearden dartboard 比喻直覺但操作上不精確（dartboard 邊界由誰定？）
- 商管研究界 95% 量表預設 reflective（[[concepts/reflective-vs-formative-measurement]] Coltman 2008）→ 對 formative construct 的 validity 評估完全 ignore

## Related

- [[concepts/scale-reliability]]
- [[concepts/face-validity]]
- [[concepts/content-validity]]
- [[concepts/convergent-validity]]
- [[concepts/discriminant-validity]]
- [[concepts/AVE-fornell-larcker]]
- [[concepts/exploratory-factor-analysis]]
- [[concepts/confirmatory-factor-analysis]]
- [[concepts/nomological-network]]
- [[concepts/classical-test-theory]]
- [[concepts/reflective-vs-formative-measurement]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch7 slides pp.60-65
- Hardesty, D. M., & Bearden, W. O. (2004). The use of expert judges in scale development. *Journal of Business Research*, 57(2), 98-107.
- Fornell, C., & Larcker, D. F. (1981). Evaluating structural equation models with unobservable variables. *JMR*, 18(1), 39-50.
- Lin, C.-P. (2010). *Journal of Business Ethics*, 94, 517-531.
- Anderson, J. C., & Gerbing, D. W. (1988). Structural equation modeling in practice. *Psychological Bulletin*, 103(3), 411-423.
