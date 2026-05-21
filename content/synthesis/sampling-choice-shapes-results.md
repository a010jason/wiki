---
title: 同 hypothesis 用四種 sample 得四種結果（Short et al. 2002 經典反例）
type: synthesis
domain: research-methods
tags: [sampling, methodology, internal-validity, generalizability, short-2002, JOM]
aliases: [sampling shapes results, Short Ketchen Palmer 2002]
sources:
  - reference:Short-Ketchen-Palmer-2002-JOM
  - reference:Bhattacherjee-Ch08-slides (chapter closing pp.215-228)
confidence: medium
visibility: public
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Short, Ketchen, Palmer (2002) *J. of Management* 用同一個 hypothesis（CEO duality vs firm performance）在 4 種不同 sample 跑迴歸，得到 positive / negative / null / null **四種不同結果**。教師把這篇放在 Ch8 sampling 章節收尾，作為對「策略管理已發表研究 sampling practice」的方法論警告。Implication：建知識應靠 multiple, disparate samples，不能靠單一 sample 推結論。
provenance:
  extracted: 0.65
  inferred: 0.3
  ambiguous: 0.05
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# 同 hypothesis 四 sample 四結果

## Short, Ketchen, Palmer (2002) 的設計 ^[extracted]

Two-study format 檢驗「sampling 影響策略管理研究」：

**Study 1**：1980-1999 五本頂刊（AMJ, ASQ, JoM, OS, SMJ）**437 篇 organizational performance 研究**的 sampling practice 內容分析。

**Study 2**：同一個 hypothesis（**CEO duality vs performance**）用 4 種不同 sample 跑迴歸：

| Sample 類型 | 結果 |
|---|---|
| **Stratified random sample** | **Positive** relation |
| **Purposive sample**（small single-business firms） | **Negative** relation（支持 agency theory：opportunism 抑制 firm performance） |
| **Available sample** | **No** relation |
| **Simple random sample** | **No** relation |

→ 同一個因果問題，**四種 sample 給四種結論**。

## 核心結論 ^[extracted]

> "Choice of sample can shape a study's results and conclusions."
>
> Findings 只能 generalize 到 **the sampling frame adopted**.

引申自 Dalton et al. (1998)：duality research 過度仰賴 Fortune 500，**結論可能只反映大企業現象**。

## Study 2 的方法論建議 ^[extracted]

> 「The best way to build knowledge about the complex nature of the determinants of performance may be to rely on data from **multiple, disparate samples**.」

→ 單一研究 + 單一 sample = 不可信；**multi-sample replication** 才是建知識的方法。

## 對 wiki / PM / 醫療 AI 的引申 ^[inferred]

### 1. PM 決策的 sampling 陷阱

PM 看到「研究 X 顯示 feature A 提升 retention」時應問：
- 哪個 sample？（Fortune 500 vs SME vs startup）
- 哪個產業？
- 哪個年代？
- 哪個地理？
- 可否在我的 user base 重現？

→ 不能跨 sample 推結論。

### 2. 醫療 AI 上市後驗證

訓練 site 結果 ≠ 部署 site 結果。Short 的論點直接套用：

| 訓練 sample | 部署 sample | 結果可能差異 |
|---|---|---|
| 醫學中心高端設備 | 區域醫院老設備 | 性能下降 |
| 自願加入 study 的醫師 | 一般醫師 | 採用率差異 |
| 重症病例 over-represented | 一般病例 | 過度敏感 |

→ FDA / TFDA 的多 site / 跨地區驗證要求源自類似邏輯。

### 3. Wiki synthesis 的方法論啟示

寫 wiki synthesis 時若只引一篇 paper / 一個 sample 的結論，本質上就是 Short 警告的反例。

→ Synthesis 頁原則：**至少兩個獨立 sample / source 才能下判斷**（[[CLAUDE.md]] synthesis 規則）。

## Counter-arguments ^[inferred]

1. **「同 hypothesis 不同 sample 給不同結果」也可能只是低 statistical power 的隨機差異**，不是真有 boundary。但 Short 的方法是 systematically 同 model 跑不同 sample，比較整合效應，較難用 power 解釋。
2. 「Multi-sample replication」在資源上昂貴 — 學界 incentive 偏向新 study 而非 replication。這是 replication crisis 的結構原因。
3. CEO duality vs performance 是研究 contested issue，本身就 boundary-dependent；可能單一 sample 結果差異是「真有 contingency」而非「sampling artifact」— 但 Short 的論點是「研究者應該明說 contingency 而不是聲稱普遍效應」。

## 與 wiki 其他頁的連結

- [[concepts/sampling-frame]] — Frame ≠ Population 是 Short 的前提
- [[concepts/probability-sampling]] / [[concepts/non-probability-sampling]] — 不同類型 sample
- [[concepts/external-validity]] — sample 影響 generalizability 的核心機制
- [[concepts/falsifiability-popper]] — 一個 sample 的結果無法 falsify theory；需要 multi-sample
- [[references/colquitt-OB-textbook]] — meta-analysis 章節（Ch1）對應「多 sample 整合」是 OB 的解方

## Sources

- Short, J. C., Ketchen, D. J., & Palmer, T. B. (2002). The role of sampling in strategic management research on performance: A two-study analysis. *Journal of Management*, 28(3), 363-385.
- [[references/bhattacherjee-social-science-research]] — Ch8 slides chapter closing
- Dalton, D. R., et al. (1998).（duality + Fortune 500 over-reliance 批評）
