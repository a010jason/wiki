---
title: CDO（Chief Digital Officer / 數位長）
type: concept
domain: mgmt
tags: [organization-design, digital-transformation, leadership, c-suite, mgmt]
aliases: [Chief Digital Officer, 數位長, CDO role, digital transformation officer]
sources:
  - textbook:HBS-Case-9-621-032-Moderna-Iansiti-Lakhani-Mayer-Herman-2021
created: 2026-05-06
updated: 2026-05-06
summary: >-
  推動公司數位轉型 + 建構 [[concepts/ai-factory]] 的 C-suite 職位。Moderna 的 Marcello Damiani 是經典案例 —— 2015 年從 bioMérieux 挖角，與 Bancel 雙重彙報，跨越 COO 賦予整合 AI Factory 的權限。CDO 不只是「IT 主管」，是**架構師 + 跨部門協調者 + 流程重設計者**。Damiani 名言：「**轉換過程不能只是盲目的把手動過程直接數位化，流程被打下來必須重新設計架構來適應數位資訊環境**」—— 這定義了 CDO 與 CIO 的根本差異。
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# CDO（Chief Digital Officer）

## 為何需要這個職位

[[concepts/digital-operating-model]] 轉型不是「IT 部門做一做就好」：^[inferred]

- 跨所有部門（業務、研發、製造、HR、法遵）
- 重新設計流程而非自動化現有流程
- 牽涉組織心智模型改造
- 要花錢但短期沒 ROI

→ 沒有 C-level 背書的職位**沒有跨部門整合能力**。CDO 就是這個缺位的填補者。^[inferred]

## CDO vs CIO 的根本差異

| 維度 | CIO（Chief Information Officer）| CDO（Chief Digital Officer）|
|---|---|---|
| 主要任務 | 維運 IT 基礎設施 | 重新設計營運模型 |
| 對流程的態度 | 數位化既有流程 | 重設計流程才數位化 |
| 對部門的角色 | 服務部門需求 | 跨部門 architect |
| 對 ROI 的態度 | 每筆 IT 投資要算 ROI | 部分基礎建設長期才見效 |
| 業務理解深度 | 不必很深 | 必須夠深才能跨部門翻譯 |

^[inferred]

## Moderna 的 Damiani 案例

[[references/iansiti-moderna-case-2021]] 的 Marcello Damiani 是經典 CDO 案例。^[extracted]

### 怎麼來的

[[entities/Stephane-Bancel]] 在 bioMérieux 已認識 Damiani。2015 年挖角到 Moderna：^[extracted]

> "他挖角自己的前同事、生物梅里埃前技術長達米安尼。構建數位科技與藥訊息業務流程建置是達米安尼的關鍵，公司執行數位化的需求得到班賽爾的認同。"

### 治理權設計

> "達米安尼位居與卓越營運長的雙重身分賦與他跨部門整合莫德納各部位數位化工作建置的權力。" ^[extracted]

→ **與 COO 雙重彙報**——這是 CDO 能跨部門做事的結構性前提。沒有這個權限設計，CDO 會被各部門 silos 鎖死。^[inferred]

### 名言：流程要重新設計，不只是把手動數位化

> "我跟班賽爾的想法也得到他認同。'**讓達米安尼著手設計流程是關鍵，數位化只有在流程順暢合理的情境下才具有意義。如果模擬流程本身很糟，數位化的結果也會一蹋糊塗。**'達米安尼補充道：'**轉換過程不能只是盲目的把手動過程直接數位化，流程被打下來必須重新設計架構來適應數位資訊環境**'。" ^[extracted]

→ 這個 quote 是 CDO 與 CIO 的最大分水嶺。CIO 會把現有 Excel 表單做成 web 表單（自動化既有流程）；CDO 會質疑「這個流程一開始為什麼要這樣？」並重新設計。^[inferred]

## CDO 的具體職責

從 Damiani 的工作看 CDO 該做什麼：^[inferred]

### 1. 設計 AI Factory 金字塔

[[concepts/ai-factory]] 6 層每一層的設計、預算、人員、廠商選擇都需 CDO 統籌。

### 2. 跨部門流程重設計

不是「整合既有系統」，是**重新問「這個流程一開始該怎麼設計才適合數位環境？」**

### 3. 文化與獎酬調整

DOM 轉型需要員工從「執行者」變「邊緣處理者 + AI 設計者」（→ [[concepts/humans-on-edge-ai-in-core]]）。CDO 要與 HR 協作重設獎酬。

### 4. 廠商與整合決策

哪些用 SaaS（Moderna 用 Workday 給 HR、85% 用現成 SaaS）、哪些自建（核心業務 / 研究 / 技術開發）—— 這些決策跨部門、需 CDO 統籌。^[extracted]

### 5. 與 CEO 對話、爭取資源

DOM 化早期燒錢沒收益，CDO 必須持續說服 CEO「就算現在沒回報、繼續投資」。

## CDO 的失敗模式

實務上 CDO 角色很容易失敗：^[inferred]

### 1. 只給職稱、沒給權力

「設個 CDO 但不准動部門 silos / 預算 / 員工 KPI」—— CDO 變裝飾性職位、只能做局部 IT 升級。

### 2. CDO 與 CIO 互相消耗

兩者職責重疊、互搶預算 → CDO 退化成 CIO-2 或 CIO-1。

### 3. CEO 信心動搖

DOM 轉型 1-2 年沒收益、CEO 換、CDO 失去後盾 → 整個 program 倒退。

### 4. CDO 找了沒業務理解的人

業界很多 CDO 來自純 IT 背景、不懂業務 → 跨部門對話失敗。Moderna 找 Damiani 是因他 bioMérieux 業務經驗深厚。^[inferred]

## 對 EBM PM 的可移轉教訓

> 此區塊涉及 ebmtech 內部判斷，部分屬 internal 思考。

醫療 AI 公司是否需要 CDO？^[inferred]

| 公司階段 | CDO 必要性 |
|---|---|
| < 50 人 | CTO 兼即可 |
| 50-200 人 | 開始痛、可考慮 |
| > 200 人 + 多產品線 | **必要** —— 跨產品線資料整合需有人專責 |

EBM 若往 platform 化發展（→ [[synthesis/medical-ai-platform-vs-pipeline]]），CDO 級職位是結構性必要 —— 不是「有空再請」、是「沒有就 platform 不會成立」。^[inferred]

## 跨產業可移轉

CDO 角色可套到任何「需要數位轉型但有部門 silos」的產業：^[inferred]

| 產業 | CDO 在做什麼 |
|---|---|
| 銀行 | 整合 core banking + digital banking + fintech 三層 |
| 製造業 | Industry 4.0 / smart factory 整合 |
| 醫院 | EMR + PACS + AI + 病患入口整合 |
| 媒體 | 紙本出版 + 數位訂閱 + 廣告平台整合 |
| 零售 | 線下店 + 電商 + app + 廣告整合 |

→ **共同 pattern**：原組織因歷史因素分裂成多 silos，CDO 是縫合者。^[inferred]

## 與其他 wiki 概念

- 機制依賴：[[concepts/ai-factory]] —— CDO 是 AI Factory 的工程設計師
- 上層哲學：[[concepts/digital-operating-model]]
- 組織後果：[[concepts/humans-on-edge-ai-in-core]]
- 案例本體：[[entities/Moderna]] / [[entities/Stephane-Bancel]] / [[references/iansiti-moderna-case-2021]]

## Open questions

- LLM 時代 CDO 角色會變嗎？「我們公司要不要用 ChatGPT」這類議題是否會壓過原本 CDO 重 architecture 設計的本職？^[ambiguous]
- 中小企業（< 50 人）真的可以省 CDO 嗎？或者「軟性 CDO」（兼任、外部顧問）也能達成相似效果？^[inferred]
- CDO 與 Chief AI Officer (CAIO) 的職責切分？2024-2026 業界 CAIO 浮現，是否會吃掉 CDO？^[ambiguous]
