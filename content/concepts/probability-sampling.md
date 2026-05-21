---
title: Probability Sampling（機率抽樣）
type: concept
domain: research-methods
tags: [sampling, probability-sampling, random, methodology, external-validity]
aliases: [probability sampling, 機率抽樣, random sampling family]
sources:
  - reference:Bhattacherjee-Ch08-slides (pp.40-153)
  - reference:Bhattacherjee-SSR-book (pp.69-70)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Probability sampling = 每個 unit 有 non-zero 且 known 機率被選；估計量 unbiased（前提：按 probability 加權）。五大技術：Simple random / Systematic / Stratified / Cluster / Matched-pairs / Multi-stage。適用 generalizability 重要時。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Probability Sampling

## 定義 ^[extracted]

兩個共同屬性：
1. 每個 unit 有 **known non-zero probability** 被選
2. Sampling procedure 含 **random selection**

→ Sample 統計量是 **unbiased estimates**（前提：weighted by probability of selection）。

**適用情境**：**generalizability 重要時**（要把結論推回 population）。

## 六種技術概覽 ^[extracted]

| 技術 | 核心機制 | 適用 |
|---|---|---|
| Simple random | 純隨機 | Frame 平均、無需子分群 |
| Systematic | 每隔 k 個抽 | Frame 已排序、節省工 |
| Stratified | 分層後組內隨機 | 子群 homogeneous |
| Cluster | 抽 cluster 後組內全測 | 地理分散 |
| Matched-pairs | bipolar 配對 | 兩 subgroup 比較 |
| Multi-stage | 多技術組合 | 大規模、跨層 |

## 1. Simple Random Sampling

所有可能 subset 機率相等。^[extracted]

**操作**：Excel `RAND()` 對 1,000 firms 產 random number → 排序 → 取前 200。

**優點**：simplicity = strength；frame 未切割，inferences 最 generalizable。

**範例**：
- Anitha (2014) *Int'l J. Productivity & Performance Mgmt*：CODISSIA 中低階管理員工，700 份問卷 → 383 valid → **55% response rate**
- Vivek & Ravindran (2007)：CODISSIA 小型製造商 792 firms → 抽 75 firms

## 2. Systematic Sampling ^[extracted]

Frame 按 criterion 排序，每隔 **k = N/n（sampling ratio）** 抽一個。

**起點 ≠ 第一個**：從前 k 個內隨機選 starting point。

範例：1,000 firms 抽 200 → k=5 → 從前 5 firms 隨機選 1 → 之後每第 5 個。

**範例文章**：
- Slaughter & Ang (1996) *Communications of the ACM*：1984-94 *Computerworld* IS 求才廣告 content analysis，每季第 2 週的廣告全收 → 1,600 units / 20,000 = **sampling ratio 8%**
- Pun & Hui (2002) *TQM*：香港塑膠業 850 firms，每 10 個取 2，抽 170（20%）→ 47 valid → 27.6% response rate

## 3. Stratified Sampling ^[extracted]

Frame 切成 **homogeneous, non-overlapping subgroups (strata)**，每 stratum 各做 simple random。

### Proportional vs Non-proportional

| 類型 | 機制 | 結果 |
|---|---|---|
| Non-proportional | 各 stratum 等數量（如 67 / 67 / 67） | 對 small subgroup oversampling |
| **Proportional** | 按 population 比例（100 大 / 300 中 / 600 小 → 抽 20 / 60 / 120） | 直接代表 |

→ Non-proportional 不必然較差，**只要事後依比例加權即可**。

**範例**：
- Cropanzano, James, Konovsky (1993) *JOB*：醫院 500 名護士，按 floor / division 分層
- Lee, Jang, Lee (2018) *Personnel Review*：391 中國製造廠 alliances，stratified + proportional-to-size（Särndal et al. 2003），strata = 中國東岸 12 個 region

## 4. Cluster Sampling ^[extracted]

Population 地理分散 → 切 clusters（通常地理邊界）→ 隨機抽幾個 cluster → **cluster 內全測**。

範例：紐約州 city government → 按 county 分 cluster → 抽 3 county → 該 county 內所有 office 都訪。

**缺點**：between-cluster variability 拉高 sample estimate 變異 → generalizability **比 simple random 差**。

## Stratified vs Cluster 對照 ^[extracted]

| 維度 | Stratified | Cluster |
|---|---|---|
| **所有 strata 都在 sample？** | ✅ 是 | ❌ 只 subset of clusters 在 sample |
| **內部適合的 homogeneity** | **內部 homogeneous 時最好** | **內部 heterogeneous 時最好** |

## 5. Matched-Pairs Sampling ^[extracted]

比較 population 內兩 subgroup（如「高獲利」vs「低獲利」firms）：
1. Frame 分組
2. 一組做 simple random
3. 每 firm 配對另一 subgroup（按 size / industry / etc.）

**Ideal for bipolar 差異**。

**範例**：
- Helsper & Whitty (2010)：UK ICM Research 10 萬 panel，married couples 配對
- **Ferrier (2001)** *AMJ*：Fortune 500 中各四位數 SIC industry 排名前一前二的 firms (1987-93)，16 industries × 2 firms × 7 years = 224 firm-year observations
- Hughes-Morgan & Ferrier (2014) *J. Managerial Issues*：35 industries × 70 firms × 7 years = 490 firm-year

## 6. Multi-Stage Sampling ^[extracted]

前述 single-stage 的**組合**。

**範例**：
- **Zhou, Gao, Yang, Zhou (2005)** *J. Business Research* — 中國 multi-stage 經典：
  - Stage 1：按收入分高度開發（北京/上海/廣州）、中度（南京/武漢/成都）、開發中（西安/長春/貴陽）
  - Stage 2：各市抽 20 家 100+ 員工 manufacturing firm = 180 firms
  - 每 firm 取 22 respondents（1 senior marketing mgr + 1 senior personnel mgr + 10 junior mgrs + 10 front-line）
  - Frame 3,960 → multi-source / multi-informant design
  - Face-to-face interview + 半天薪資現金 → **response rate 69.48%**
- Zhu et al. (2015) *J. Clinical Nursing*：濟南 4 家三甲醫院；Stage 1 抽醫院；Stage 2 cluster 抽護士

## Random Sampling Benefits / Limitations ^[extracted]

**Benefits**：
1. Simple to use
2. Represents the population（唯一干擾是 sampling error）
3. Clear conclusions

**Limitations**：
- 需要 **full list of everyone in the population**；大母體下不可得 → 需考慮其他抽樣法

## 對醫療 AI PM 應用 ^[inferred]

| 技術 | 醫療 AI 應用情境 |
|---|---|
| Simple random | 從病歷庫隨機抽影像做 validation |
| Stratified | 按疾病嚴重度 / 年齡層 / 性別分層抽，確保子群代表 |
| Cluster | 多醫院 site，先抽 site 再抽 case |
| Matched-pairs | Case-control study（疾病組 vs 對照組） |
| Multi-stage | 跨國 / 跨地區 / 跨醫院的大規模 validation |

選 sampling 技術時必須前置：**[[concepts/sampling-frame]] 設計**（哪些 cases / sites accessible）。

## Related

- [[concepts/sampling-frame]]
- [[concepts/non-probability-sampling]]
- sampling bias
- [[concepts/external-validity]]
- [[concepts/research-design]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch8 slides pp.40-153
