---
title: 醫療 AI 公司的 ESG 涵義
type: synthesis
domain: medical-ai, esg, pacs, taiwan
tags: [medical-AI, ESG, PACS, taiwan, sustainability]
confidence: medium
visibility: internal
created: 2026-05-21
updated: 2026-05-21
summary: >-
  醫療 AI 公司（PACS / 影像 AI / FHIR 整合廠商）面對 ESG 監管：E（環境）支柱衝擊小但成長中、S（社會）支柱是核心（演算法公平性、資料治理 GDPR/HIPAA、醫師可解釋性 EU AI Act、客戶醫院關係、病人權益、AI 取代臨床醫師議題）、G（治理）支柱是 IPO 前置。Scope 3 上游供應商（[[entities/TSMC]] 晶片、AWS / GCP 雲端）的減碳壓力會傳導下來；AI 訓練的碳排估算（LLM 訓練可達數百噸 CO2e）已成議題。
lifecycle: draft
lifecycle_changed: 2026-05-21
---

> Visibility: **internal**（涉及 ebmtech 工作脈絡的策略推演）

## TL;DR

醫療 AI 公司（如 PACS / 影像 AI / FHIR 整合廠商）面對 ESG 監管時，**E（環境）支柱衝擊小但成長中、S（社會）支柱是核心、G（治理）支柱是 IPO 前置**。三大具體要求：(1) [[concepts/ISSB-IFRS-S1-S2]] 銜接時程、(2) Scope 3 上游供應商（[[entities/TSMC]] 晶片、雲端服務）的減碳壓力傳導、(3) 醫療 AI 的**演算法公平性、資料治理、醫師可解釋性**屬於 S+G 交集的特殊議題。

## E 支柱：環境足跡

| 項目 | 醫療 AI 公司現況 |
|---|---|
| **直接排放（Scope 1）** | 低（辦公室空調、出差） |
| **能源間接（Scope 2）** | 中（資料中心、AI 訓練 / 推論用電） |
| **Scope 3** | 高（雲端服務 AWS / GCP 上游、晶片廠 [[entities/TSMC]]、客戶醫院的影像系統耗能） |

→ **AI 訓練的碳排估算**已成議題（LLM 訓練可達數百噸 CO2e）；推論端隨業務量增加。

## S 支柱：社會責任

醫療 AI 的 S 支柱**特別重**，因產品直接影響病人安全：

| 議題 | 對應準則 |
|---|---|
| **演算法公平性** | 性別、種族、年齡偏見（部分國家強制揭露） |
| **資料治理** | GDPR、HIPAA、台灣個資法、客戶醫院的 BAA |
| **醫師可解釋性** | EU AI Act、FDA SaMD 規範 |
| **客戶醫院關係** | 不應壟斷、不應綁定升級 |
| **病人權益** | 訓練資料的去識別化、二次使用同意 |
| **AI 取代臨床醫師的議題** | 與醫師工作權的張力 |

## G 支柱：治理（IPO 前重點）

| 議題 | 對應 |
|---|---|
| **演算法決策的責任歸屬** | 對應 [[concepts/director-fiduciary-duty]] |
| **內部稽核** | 模型版本管理、訓練資料來源稽核 |
| **獨立董事** | [[concepts/independent-director]] —— 早期建立 |
| **資料外洩應變** | [[concepts/crisis-management-PDCA]] 框架 |

## 台灣監管時程銜接（[[concepts/ISSB-IFRS-S1-S2]]）

| 年 | 適用公司 |
|---|---|
| 2026 | 資本額 ≥ 100 億元（多數醫療 AI 公司未達） |
| 2027 | ≥ 50 億元 |
| 2028 | 其餘上市櫃 |

→ 醫療 AI 公司多在 2027-2028 進入強制揭露範圍，**3 年內建立 ESG 報告能力**為合理時程。

## 三條具體策略建議

### 1. 早期建立 [[concepts/scope-1-2-3-emissions]] 盤查能力

- 採用 [[concepts/ISO-14064-1]] 組織盤查
- 重點：Scope 3 雲端 + 晶片供應鏈
- 工具：NetZero Pro（[[references/esg-lecture-corpus]] / CarbonDisclosure-Tang-2023）

### 2. 演算法治理 = S + G 交集

- 模型版本管理 = 內控
- 資料來源稽核 = 內稽
- 偏見揭露 = ESG 報告

### 3. 客戶醫院的 ESG 要求傳導

- 大型醫院（如台大、長庚）已採 GRI / SASB 揭露
- 其供應鏈（含醫療 AI 供應商）會被要求 Scope 3 排放數據
- **早做的廠商可成為標案加分項**

## 與 [[synthesis/medical-ai-platform-vs-pipeline]] 的連動

- **Platform model** 規模化後 Scope 3 衝擊大
- **Pipeline model** 個案靈活但難系統化揭露
- → ESG 揭露能力可能成為 platform vs pipeline 抉擇的隱性因素

## 來源

- [[references/esg-lecture-corpus]]（全 14 份）
- [[entities/TSMC]]、[[concepts/RE100]]、[[concepts/SBTi]]
- Jason 工作脈絡（ebmtech 醫療 AI PM）
