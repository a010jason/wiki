---
title: 科學方法的四個目標（Description / Prediction / Explanation / Control）
type: concept
domain: research-methods
tags: [scientific-method, research, methodology]
aliases: [four goals of science, 四目標, description-prediction-explanation-control]
sources:
  - reference:Bhattacherjee-Ch01-slides (p.6)
  - reference:Bhattacherjee-SSR-book (Ch1)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  科學方法四個遞進目標：Description（特徵？）→ Prediction（多可能發生？）→ Explanation（什麼導致？）→ Control（能讓它發生 / 不發生？）。能描述未必能預測，能預測未必能解釋，能解釋未必能控制。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# 科學方法的四個目標

教師在 Ch1 slide p.6 強調的核心 framework。**四目標遞進，能達到下一階明確比上一階更困難**。^[extracted]

| 目標 | 中文 | 問題 | 範例 |
|---|---|---|---|
| **Description** | 描述 | 「特徵是什麼？」 | 民調、descriptive statistics、ethnography |
| **Prediction** | 預測 | 「多可能發生？」 | 信用評分模型、選舉模型、流行病預測 |
| **Explanation** | 解釋 | 「**為什麼**會這樣？」 | 因果推論、機制模型 |
| **Control** | 控制 | 「能讓它發生 / 不發生？」 | 政策介入、產品改版、臨床治療 |

## 遞進關係

教師強調的 sequential 邏輯：^[extracted]

- 能 **describe** 不代表能 **predict**（描述一群人投票模式，不等於能預測未來選舉）
- 能 **predict** 不代表能 **explain**（黑箱模型可能準確預測但說不清為什麼）
- 能 **explain** 不代表能 **control**（解釋為什麼孩子學業成績差不等於能改善它）

這對「prediction = explanation」的誤解是直接反駁：[[concepts/scientific-theory]] 強調 prediction 與 explanation 是**不同層次**的目標，且 prediction 只需要 correlation，但 explanation 需要 [[concepts/causality-three-conditions|因果三條件]]。

## 與 research design 的對應

不同 research design 強在不同目標：^[inferred]

| Design | 強在哪個目標 |
|---|---|
| Descriptive survey | Description |
| Predictive modeling / machine learning | Prediction |
| Experimental design（experimental design） | Explanation（causality） |
| Policy intervention / A/B test in production | Control |

## 醫療 AI PM 應用 ^[inferred]

四目標套到醫療 AI 產品週期：
- **Description**：放射科 reading 量、 false negative 率、流程瓶頸（baseline measurement）
- **Prediction**：AI 模型預測哪張影像有 lesion（這是 ML 任務本身）
- **Explanation**：為什麼模型在某 demographic 表現差？（fairness audit）
- **Control**：把 AI 嵌入工作流，主動降低 missed diagnosis（產品介入）

純預測 AI 而沒 explanation 就部署 → 黑箱風險；解釋了但沒有 control loop → 知道問題卻沒改變 outcome。

## Related

- [[concepts/scientific-method-four-criteria]]
- [[concepts/scientific-theory]]
- [[concepts/causality-three-conditions]]
- three types of scientific research

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch1 slide p.6 / book Ch1
