---
title: Common Method Bias (CMB / CMV)
type: concept
domain: research-methods
tags: [CMB, CMV, common-method-bias, podsakoff, harman, methodology, validity]
aliases: [CMB, CMV, common method bias, common method variance]
sources:
  - reference:Podsakoff-2003-JAP
  - reference:Lindell-Whitney-2001-marker
  - reference:Chandra-2022-JMIS
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Common Method Bias = 同一 method（如同一問卷一次填）導致 IV 與 DV 之間 inflated correlation 的系統性誤差。Podsakoff et al. (2003) JAP 經典論文整理偵測與緩解方法。**雙偵測方法**：(1) Harman one-factor test（單因子變異 < 50%）+ (2) Lindell-Whitney marker variable（marker 相關 < 0.300 / 共享變異 < 9%）。**主要緩解**：two-wave design / different sources / different scales。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.5
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# Common Method Bias (CMB / CMV)

## 定義 ^[extracted]

> Common Method Bias 是當 IV 和 DV 用同一 method（同一問卷、同一時間、同一受訪者）測時，產生**人為 inflated correlation** 的系統性誤差。

也稱 **Common Method Variance（CMV）**。

## 為何 CMB 是 [[concepts/internal-validity]] 威脅 ^[inferred]

CMB 會虛增 IV-DV correlation → 即使真實因果關係薄弱也呈現顯著效應 → 拒絕 null hypothesis 錯誤上升 → 推論失準。

## 雙偵測方法 ^[extracted]

### 1. Harman's One-Factor Test

把所有 items 一起跑 EFA / PCA：
- **若單一因子變異 > 50%** → CMB 顯著
- **若單一因子變異 < 50%** → CMB 不顯著

**Chandra 2022 結果**：3 個主因子共解釋 67%，**最大因子僅 28.4%（<50%）** → CMB 不顯著。

### 2. Lindell & Whitney (2001) Marker Variable Technique

選一個與 main constructs 理論上**無關**的 marker variable，計算 marker 與所有 construct 的 correlation：

| 判準 | Threshold |
|---|---|
| Marker × construct correlation | **< 0.300** |
| 共享變異（r²） | **< 9%（即 < 0.090）** |
| 所有 inter-construct correlation | **< 0.900** |

**Chandra 2022**：以「privacy」為 marker → 最高 r = 0.151 → r² = 2.3% → **< 9% threshold** → CMB 不顯著。

## Harman 的批評與補強 ^[extracted]

Harman one-factor test 已被批評：
- **Aguirre-Urreta & Hu (2019)** Monte Carlo 證明 **power 不足**
- **Gorrell et al. (2011)** 嫌它**缺乏理論基礎**

→ 現代論文常**同時做** Harman + Lindell-Whitney（甚至加 unmeasured latent method factor approach 三保險）。

## 緩解 CMB 的方法 ^[extracted, inferred]

| 方法 | 機制 |
|---|---|
| **Two-wave / Longitudinal design** | IV 在 T1 測、DV 在 T2 測（時間隔開）。Chandra 2022 用 4 週間隔 |
| **Different sources** | 自評 IV、他評 DV（如員工自評滿意度、主管評績效） |
| **Different scales** | IV 用 Likert、DV 用 semantic differential |
| **Anonymous response** | 降 social desirability bias |
| **Question order** | 把 DV 放問卷前面、IV 放後面（不讓受訪者推斷因果） |
| **Marker variable** | 含 marker 在問卷中以便偵測 |

## 經典反例 ^[inferred]

**Social desirability bias 在 questionnaire 上「沒有有效解法」**（Bhattacherjee Ch9 警告）— 即使做 Harman / Lindell-Whitney 都 pass，受訪者答「應該的」答案的系統性偏誤仍可能存在。

## Chandra 2022 完整 CMB 套餐 ^[extracted]

範本（[[references/chandra-2022-human-like-AI-competencies]]）：

1. **Design 層**：two-wave，4 週間隔
2. **Detection 層**：
   - Harman one-factor：最大因子 28.4% < 50%
   - Lindell-Whitney marker（privacy）：最高 r=0.151，r²=2.3% < 9%
3. **報告**：明確說明兩個 test 結果支持「無 CMB 問題」

## 對 PM / 醫療 AI 應用 ^[inferred]

PM 做 user research / clinician survey 必避：

| 反例 | 修正 |
|---|---|
| 同一問卷問 IV（perceived AI usefulness）+ DV（intention to use） | Two-wave 或 different source（一週後再問 actual usage） |
| 同一受訪者答「症狀」+「滿意度」 | Symptom 用 clinical record、satisfaction 用 patient survey |
| 滿意度問卷自己填，過了滿意度的人才填 | Anonymous + 強制全員填 |

→ Survey 結果太完美（IV 與 DV correlation > 0.7）通常**不是好事**，可能是 CMB inflated。

## 限制 ^[inferred]

- Harman + Lindell-Whitney 都是 detection 而非 prevention — 即使「沒偵測到」也不代表沒有
- Marker variable 的「理論上無關」判斷主觀
- Pre-registration 雖能降低多種 bias 但對 CMB 直接效果有限
- 質性研究本身較不擔心 CMB（沒統計效應），但有類似的 interviewer bias 問題

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 2 narrow / 3 brittle / 0 unsupported。整頁主要弱點是**把 CMB 處理成 detection-pass 邏輯，缺方法論 critique 文獻整合**：(1) CMB 概念單向描述 inflated correlation，Spector 2006 ORM "urban legend" 立場 + Williams-Brown 1994 attenuation 未提；(2) Harman test 50% threshold 被 Fuller 2016 *JBR* simulation 證明在強 CMB 下仍 false negative 普遍，且 Podsakoff 2003 原文自身警告「relatively insensitive」未在 page 直接呈現；(3) Lindell-Whitney marker technique 被 Richardson-Simmering-Sturman 2009 *ORM* 直接批「不足以 control method bias」、Williams 2010 CFA marker model 替代方案未提；(4) 緩解方法表格與 page 自承「social desirability 沒有有效解法」未 reconcile；(5)「detect → pass → 宣稱 no CMB」邏輯被 Spector et al. 2019 *JoM* 共同立場文質疑為 backwards logic，single case Chandra 2022 不足以作 best practice template。
>
> `base_confidence`：0.50 → 0.50（在 brittle cap 0.55 內）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/common-method-bias.md`。

## Related

- [[concepts/internal-validity]]
- [[concepts/construct-validity]]
- [[concepts/research-design]]
- [[references/chandra-2022-human-like-AI-competencies]] — 完整 CMB 套餐範本
- [[concepts/instrumental-variable-2SLS]] — 處理 endogeneity 的另一武器

## Sources

- Podsakoff, P. M., MacKenzie, S. B., Lee, J.-Y., & Podsakoff, N. P. (2003). Common method biases in behavioral research. *Journal of Applied Psychology*, 88(5), 879-903.
- Lindell, M. K., & Whitney, D. J. (2001). Accounting for common method variance in cross-sectional research designs. *JAP*, 86(1), 114-121.
- Aguirre-Urreta, M. I., & Hu, J. (2019). Detecting common method bias. *Communications of the AIS*.
- [[references/chandra-2022-human-like-AI-competencies]] — JMIS 完整應用範例
