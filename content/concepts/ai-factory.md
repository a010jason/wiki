---
title: AI Factory（AI 工廠）
type: concept
domain: mgmt
tags: [AI, digital-operating-model, infrastructure, organization-design, mgmt]
aliases: [AI factory, AI 工廠, decision factory, AI infrastructure stack]
sources:
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
  - textbook:HBS-Case-9-621-032-Moderna-Iansiti-Lakhani-Mayer-Herman-2021
created: 2026-05-06
updated: 2026-05-06
summary: >-
  Iansiti & Lakhani (2020) 在書 Ch3 提出的概念：DOM 公司的核心是一座**可擴展的「決策工廠」**，系統性地把資料 / 演算法 / 軟體 / 連通性整合成基礎設施，讓 AI-driven automation 與 insights 持續產出。Moderna case Exhibit 4「數位化金字塔」是這個概念的最佳視覺化（Cloud → Integration → IoT → Automation → Analytics → AI → Digital）。對醫療 AI 業：要建 AI Factory 不只是「導入幾個 AI 模型」，是要重新架構從基礎設施到組織文化的整套 stack。
provenance:
  extracted: 0.6
  inferred: 0.35
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# AI Factory

## 核心定義

[[references/iansiti-lakhani-competing-age-of-ai-2020]] Ch3 提出：^[extracted]

> "The core is to create a scalable **'decision factory'** to systematically enable data-driven and AI-driven automation, analysis, and insights."

**3 個關鍵組件**：^[extracted]
1. **AI 演算法**（做預測、影響決策）
2. **資料管道**（餵養演算法）
3. **軟體 / 連通性 / 基礎設施**（把上兩者跑起來的環境）

→ AI Factory 不是「公司有用 AI」，是**有一座工業級規模產出 AI 決策的整套基礎設施**。^[inferred]

## Moderna 數位化金字塔（最具體的視覺化）

[[references/iansiti-moderna-case-2021]] Exhibit 4：^[extracted]

```
                  DIGITAL              ← 頂：商業成果
              ARTIFICIAL INTELLIGENCE   ← AI 模型 / 演算法
                  ANALYTICS             ← 數據分析
              AUTOMATION & ROBOTICS     ← 流程自動化
              INTERNET OF THINGS (IoT)  ← 設備互聯
                  INTEGRATION           ← 系統整合
                    CLOUD               ← 基底
```

**讀法**（由下而上）：每一層**依賴下面的層才能成立**。^[inferred]

- 沒有 Cloud → 沒辦法做 system-wide Integration
- 沒有 Integration → IoT 設備是孤島
- 沒有 IoT → Automation 沒有資料點
- 沒有 Automation → Analytics 是手動拼湊
- 沒有 Analytics → AI 沒有訓練 / 評估資料
- 沒有 AI → 「Digital」只是表面口號

→ **不可跳級**。許多公司直接從「上 AI」開始，沒做下面的 Cloud / Integration → AI 模型訓不起來、跑不穩、用不久。^[inferred]

## Moderna AI Factory 的 3 條建構原則

[[entities/Marcello-Damiani]]（Moderna CDO）總結：^[extracted]

### 第一條：雲端（Cloud）

> "我們的基礎建立在將所有的運算和資料流的處理放到雲端設施。這是我們做出的第一個決定。" ^[extracted]

Moderna 2013 起用 AWS，**從第一天就 Cloud-first**。^[extracted]

→ 為何重要：本地部署的傳統 IT 架構天生抗拒 Integration（部門間檔案分散、版本不一）。Cloud 是 Integration 的物理前提。^[inferred]

### 第二條：整合（Integration）

> "**不同的系統間未經整合，沒有辦法很好的協同工作**...在莫德納，我們希望業務流程和數據能夠被整合。我們透過物聯網（IoT）連接實驗室儀器，並藉此達到數據整合。" ^[extracted]

→ Damiani 把 Integration 當作 AI Factory 的 keystone —— 不是裝個 ESB，是**所有資料、設備、流程都能無縫互通**。^[inferred]

### 第三條：自動化和機器人（Automation & Robotics）

> "首先我們要讓流程更成熟。**移除容易出錯的手動工作是第一步**。"^[extracted]

> "一旦每個島嶼穩定，便將它們連結成一個更大的自動化集合體。" ^[extracted]

從「islands of automation」串成「automation continent」是關鍵動作。Moderna 警告**過早或過全面的自動化也具有風險**。^[extracted]

## AI Factory 的核心循環（[[concepts/scale-scope-learning]] 的 Learning 軸）

Moderna Exhibit 5 顯示中央正循環：^[extracted]

```
More data → Better algorithms → Better mRNA medicines → More trials, experiments → ...
```

這個循環是 AI Factory 的「永動機」。每多一輪 → 演算法更強 → 產出更好 → 引發更多實驗 → 收更多資料 → 更強演算法。^[inferred]

→ 對應 [[references/iansiti-lakhani-competing-age-of-ai-2020]] 書中 [[concepts/scale-scope-learning]] 的 Learning 軸。^[inferred]

## AI Factory 的組織治理

需要 [[concepts/cdo-chief-digital-officer]] 高層級職位推動：^[extracted]
- Moderna 2015 從 bioMérieux 挖角 Damiani 任 CDO
- Damiani **與營運長雙重彙報** —— 賦予跨部門整合 AI Factory 的權限
- Bancel：「正確的想法也得到班賽爾的認同」 —— 高層強力支持^[extracted]

→ 沒有 CDO 級組織治理權，金字塔下層的 Cloud / Integration 推不動，因為這些跨部門基礎建設**沒有單一部門 CEO 認領**。^[inferred]

## 對醫療業的應用

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]

醫院的 AI Factory（如 Sectra / Epic / GE Edison）會長什麼樣：^[inferred]

| 層級 | 醫院 AI Factory 對應 |
|---|---|
| Cloud | 雲端 PACS / AWS HealthLake / Azure Health Bot |
| Integration | DICOM / FHIR / HL7 整合層 |
| IoT | 影像設備（CT / MRI / X-ray）+ 監視設備（ECG / pulse oximetry）連網 |
| Automation | 自動 routing 影像、自動標註、自動排程 |
| Analytics | RIS / EMR 報表、流程挖掘 |
| AI | 影像 AI（lung nodule / 骨折）、文本 AI（報告生成）、預測 AI（再入院、敗血症）|
| Digital | 醫師時間重新分配 + 病人結果改善 |

→ 醫療 AI 業者賣 AI 模型 = 賣金字塔頂端的一片瓦；但醫院真正缺的是**整座金字塔**。把 AI 當做產品 vs 把 AI Factory 當做產品，是 vendor 規模分水嶺。^[inferred]

## 對 EBM PM 的可移轉教訓

> 部分內容涉及 ebmtech 產品判斷，做為 internal 思考。

兩條策略路線：^[inferred]

| 路線 | 賣什麼 | 客戶看到的 |
|---|---|---|
| **AI 模型 vendor** | 單個模型（如 lung nodule 偵測）| 某金字塔頂端的一個 AI |
| **AI Factory provider** | 整套 AI 部署、運維、回饋、訓練的整合服務 | 「我們把醫院從還沒 cloud 的狀態 boost 到能跑 AI」 |

→ 多數醫療 AI 新創卡在前者（被 PACS platform 通行費抽）；EBM 若能往 AI Factory 部分功能延伸（不必整套，先做 Integration / Automation 兩層），可能是與 PACS platform 區隔的路徑。^[inferred]

## 與其他 wiki 概念

- 機制依賴：[[concepts/digital-operating-model]] —— AI Factory 是 DOM 的物理基礎
- 學習機制：[[concepts/scale-scope-learning]] —— Learning 軸的具體形態
- 組織治理：[[concepts/cdo-chief-digital-officer]] —— 推動 AI Factory 的 leadership
- 案例本體：[[references/iansiti-moderna-case-2021]] / [[references/iansiti-lakhani-competing-age-of-ai-2020]]
- 醫療業對照：[[synthesis/medical-ai-platform-vs-pipeline]]

## Open questions

- LLM 時代的 AI Factory 結構是否需要重新校正？基礎模型把「需要什麼 AI 能力」門檻降低 —— 是否縮減金字塔上面幾層？^[ambiguous]
- 中型公司能不能跳過自建 AI Factory，用「租用 AI Factory（如 Snowflake + Databricks + Modal + LangChain）」？^[inferred]
- 醫療業 AI Factory 的 Integration 層（DICOM / HL7 / FHIR）特別痛 —— 是否成為醫療 AI 化最大瓶頸？^[ambiguous]

## Sources

- [[references/iansiti-lakhani-competing-age-of-ai-2020]] Ch3 概念定義（本 ingest 範圍未涵蓋詳述、僅 Ch1 提及）
- [[references/iansiti-moderna-case-2021]] Exhibit 4（金字塔視覺化）+ Exhibit 5（Learning 循環）
- Damiani / Bancel / Andres / Johnson 多人 quote 描述具體建構方法
