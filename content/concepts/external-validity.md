---
title: External Validity（外部效度 / Generalizability）
type: concept
domain: research-methods
tags: [external-validity, generalizability, research-design, sampling]
aliases: [external validity, 外部效度, generalizability]
sources:
  - reference:Bhattacherjee-Ch05-slides (pp.384-470)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  External validity = observed associations 能否從 sample 推到 population 或推到其他人 / 組織 / 脈絡 / 時間。兩 sub-type：Population validity（推到母體）+ Ecological validity（推到其他現實 setting）。Field survey / 自然 setting study 強；Lab experiment 弱。常與 [[concepts/internal-validity]] 被視為 trade-off，但 field experiment / longitudinal survey / multiple case study 是兩高反例。
provenance:
  extracted: 0.95
  inferred: 0.05
  ambiguous: 0
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# External Validity

## 定義 ^[extracted]

> Observed associations 能否從 sample 推到 population，或推到其他人 / 組織 / 脈絡 / 時間。

## 兩個 Sub-type ^[extracted]

| Sub-type | 推到哪裡 | 範例 |
|---|---|---|
| **Population validity** | 整個母體 | 從 200 名大學生樣本推到全美大學生 |
| **Ecological validity** | 其他現實 setting | 從台灣樣本推到馬來西亞；從醫院 A 推到醫院 B |

## 強弱 design 對照 ^[extracted]

| Design | External validity | 為何 |
|---|---|---|
| **Field survey** | **強** | 自然 setting、樣本可隨機 |
| **Field study** | 強 | 在真實環境發生 |
| **Naturalistic study** | 強 | 例：Koppers et al. 2020 schema CBT 自然臨床研究 |
| Multiple case study | 中強 | 多 site 可累積 |
| **Lab experiment** | **弱** | artificially contrived treatments |

## Internal vs External Trade-off：被反駁的「絕對」^[extracted]

教師明確反駁：

> 「有人主張 internal 與 external validity 互相 trade-off，但這不是絕對的。」

**兩高反例**：
- **Field experiments**（強 internal control + 真實 setting）
- **Longitudinal field surveys**（temporal precedence + 自然樣本）
- **Multiple case studies**（深度 + 跨 site 累積）

→ 詳見 `synthesis/internal-external-validity-tradeoff-debunked`（待寫）。

## Random Selection vs Random Assignment 對 External Validity ^[extracted]

- **Random selection**（從 population 隨機抽 sample）→ 提升 external validity
- **Random assignment**（subject 到 group 隨機分派）→ 提升 internal validity

當資源限制無法 random selection 時，random assignment 仍可保 internal validity，但**跨母體 generalizability 較難確認**。

## 應用案例（教師 slide 引用）^[extracted]

| 案例 | 用途 |
|---|---|
| Zhang, Hempel, Han, Tjosvold (2007) JAP — 104 家中國公司 TMS 研究 | Ecological validity（真實 firm context） |
| Koppers et al. (2020) BMC Psychiatry — schema CBT 臨床研究 | Ecological validity（自然臨床 setting） |
| Lu (2022) JAP — Asians don't ask（薪資談判）| Field study 的 ecological validity |

## 對醫療 AI PM 應用 ^[inferred]

醫療 AI clinical study 的 external validity 挑戰：

| 限制因素 | 影響 |
|---|---|
| 訓練 site bias | 只在 1-2 醫學中心訓練 → 推到區域醫院失敗 |
| Demographic narrow | 樣本偏白人男性 → 對其他族裔表現差（fairness） |
| Camera / scanner 型號 | 不同 vendor 影像參數差異 |
| 病程分佈 | 訓練樣本多為晚期 → 早期診斷失準 |
| 時間漂移 | 訓練數據是 2018-2020；2024 上線時 disease pattern 已變 |

→ 醫療 AI 的 external validity 是 FDA / NMPA / TFDA 監管重點。

## 限制 ^[inferred]

- External validity 本質依賴 sample frame 是否代表 population（[[concepts/sampling-frame]]）— frame bias 直接拉低 external validity
- 「足夠 representative」沒有絕對門檻 — 統計上多 generalize 仍需 judgment call
- 純 lab experiment 的 generalizability 質疑可用「mechanism 一致即可 generalize」反駁 — 但這個 mechanism 假設本身需證明
- Cross-cultural ecological validity 是當代心理學 replication crisis 的核心議題（WEIRD samples 問題）

## Related

- [[concepts/internal-validity]]
- [[concepts/construct-validity]]
- [[concepts/research-design]]
- [[concepts/sampling-frame]]
- [[concepts/probability-sampling]]

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch5 slides pp.384-470
