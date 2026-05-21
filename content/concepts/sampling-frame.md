---
title: Sampling Frame（抽樣框架）
type: concept
domain: research-methods
tags: [sampling, sampling-frame, methodology, external-validity, bias]
aliases: [sampling frame, 抽樣框架]
sources:
  - reference:Bhattacherjee-Ch08-slides
  - reference:Bhattacherjee-SSR-book (Ch8, pp.67-68)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Sampling frame = accessible section of target population（通常是有 contact info 的 list）。**Sampling frame ≠ Population**：戒菸研究只能 sample 到門診患者，無法 sample 沒被 program 接觸過的吸菸者。經典 frame biases：American auto industry 員工不能代表全美 workforce、Fortune 500 不能代表全美企業、S&P 只含 publicly traded。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Sampling Frame

## 三層概念 ^[extracted]

```
Population
   ⊇
Sampling frame（research 實際能接觸的）
   ⊇
Sample（實際被選中的）
```

| 層 | 定義 |
|---|---|
| **Population** | all people / items with the characteristic one wishes to understand |
| **Sampling frame** | the list from which potential respondents are drawn（≠ population） |
| **Sample** | a smaller (but hopefully representative) collection from the frame |

## Sampling Frame ≠ Population 的經典案例 ^[extracted]

教師強調的核心 fallacy：

| Frame | Population | Bias 來源 |
|---|---|---|
| Local 公司員工名單 | 全美 professional employees | 過度集中 |
| Fortune 500 list | 全美企業 | SME 被排除 — Fortune 500 多大企業，全美企業大多是 SME |
| S&P large/mid/small cap | 全美企業 | 只含 publicly traded — 私營企業排除 |
| American auto industry 員工 | 全美 workforce | 50 年競爭壓力 → 士氣偏低；workforce 主體在 service / SMB |
| 戒菸門診患者 | 全部吸菸者 | 沒被 program 接觸過的吸菸者**永遠不在 frame** |

→ **Population from which sample is drawn ≠ Population about which we want information**（教師重複強調的口訣）。

## Sampling 三步驟 ^[extracted]

| Step | 任務 |
|---|---|
| 1. 定義 target population | unit of analysis 決定（unit of analysis 待寫） |
| 2. 選 sampling frame | accessible section + 評估 representativeness |
| 3. 選 sampling technique | probability vs non-probability |

## 範例：sampling frame 段落怎麼寫 ^[extracted]

教師花 12 頁解析兩篇期刊 sampling-frame paragraph：

### Schleimer et al. (2014) *J. Business Research*

- Sampling frame：Dun & Bradstreet contact list 上 Australian subsidiary 的 marketing manager
- 1,500 sent → 398 invalid → **1,102 valid frame** → 213 responses → **response rate 19.3%**

### Millson (2015) *J. Product Innovation Management*

- Sampling frame：1,463 firms（electrical equip / medical instruments / heavy construction）
- Simple random without replacement → 抽 204 → 140 firms 同意提供 2 個 product → potential 280 → 131 returned → **response rate 46.8%**

→ 教師教學重點：**「附錄要這樣寫 sampling frame 才完整」**。

## 期刊政策補充 ^[extracted]

教師補上：

> *Human Relations* 政策：**不接受純 lab experiment / 純 student sample 的論文**；除非作為輔助 data collection method。

→ 反映 SSCI 期刊對 external validity 的高要求。

## Bellwether County 的反例 ^[extracted]

教師 chapter opening hook：

- Vigo County, IN 自 1888 起預測美國總統大選結果，僅錯 2 次（second-longest streak）
- 2020 大選後 **bellwether counties 集體失效**：Valencia (NM, 1952 起) 與 Vigo (IN, 1956 起) 都改投 Trump

→ 教學用意：**「歷史穩定的 sampling pattern ≠ representative sample；歷史穩定不保證未來有效」**。

→ 詳見 `synthesis/bellwether-fallacy`（待寫）。

## 對 PM / 醫療 AI 應用 ^[inferred]

醫療 AI 的 sampling frame 陷阱：

| 你的 frame | 你以為的 population | 實際 bias |
|---|---|---|
| 訓練資料來自醫學中心 | 全國醫療系統 | 區域醫院、診所影像參數不同 |
| 自願加入 study 的醫師 | 所有醫師 | 已是創新者（[[concepts/innovation-diffusion-theory]] innovators / early adopters） |
| 同意分享資料的病人 | 所有病人 | 重症 / 多病史 / 老年 over-represented |
| 在醫院內就診的人 | 全部疾病人口 | 未就診者（症狀輕 / 社經地位低）排除 |

→ AI 模型在 trial site 表現好不代表 scale 上去同樣好。**Selection bias 是醫療 AI 上市後最大失敗源**。

## Related

- [[concepts/probability-sampling]]
- [[concepts/non-probability-sampling]]
- sampling bias
- [[concepts/external-validity]]
- unit of analysis — 待寫

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch8 slides
