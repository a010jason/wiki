---
title: Platform vs Pipeline（製藥業的兩種開發模式）
type: concept
domain: mgmt
tags: [biotech, pharma, platform, business-model, mRNA, mgmt]
aliases: [platform pharma, pipeline pharma, mRNA platform, drug discovery platform]
sources:
  - textbook:HBS-Case-9-621-032-Moderna-Iansiti-Lakhani-Mayer-Herman-2021
created: 2026-05-06
updated: 2026-05-06
summary: >-
  製藥 / 生技業的兩種商業模式對立。**Pipeline（管道）**：傳統大型藥廠模式，每個藥物是獨立 R&D 案，10-15 年週期、從零開始研究每個分子。**Platform（平台）**：Moderna / Vertex / 23andMe 等新型公司，建立通用底層（如 mRNA、CRISPR、基因組學）讓多個藥物從同一平台衍生，研發週期、成本、決策模式截然不同。Moore 經典類比：「mRNA 是平台，就像 iPhone 一樣；個別藥物則好比應用程式」。可移轉到任何「重 R&D、長週期」產業的策略思考。
provenance:
  extracted: 0.55
  inferred: 0.4
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# Platform vs Pipeline（製藥業）

## 兩種模式對立

| 維度 | Pipeline（傳統大型藥廠）| Platform（[[entities/Moderna]] / Vertex / 23andMe）|
|---|---|---|
| 核心資產 | 個別藥物分子 / 化學專利 | 通用技術底層（mRNA / CRISPR / 基因組）|
| 開發邏輯 | 每個藥物從零開始 | 平台一次搭好，藥物從平台衍生 |
| 週期 | 10-15 年 / 藥 | 平台搭建慢、藥物開發快 |
| 失敗風險 | 單藥失敗 = 該案歸零 | 平台有效時，多藥同時開發降低總風險 |
| 競爭優勢 | 化學分子專利壁壘 | **整個營運模型 + 資料整合**^[inferred] |
| 投資人類型 | 看本益比的傳統製藥投資人 | 看「成功可能性與上市時間」的平台型投資人 |

^[extracted from HBS Moderna case p.5]

## 經典類比：mRNA 是平台、藥物是 app

[[references/iansiti-moderna-case-2021]] p.4 —— Melissa Moore（Moderna 科學家）：^[extracted]

> "我們不只是一家 mRNA 公司，同時也是一家運輸公司。假設莫德納能夠證明這技術在一種藥品上確實能夠發揮效用，那麼這項技術也能適用於所有其他藥物的開發上。**mRNA 是一個平台，就像 iPhone 一樣**。**個別藥物——無論是預防疫苗或是治療性藥品——則好比應用程式**。如果我們能夠讓平台本身順利運作，那便能夠在平台上發展出無數的應用程式。"

—— **iPhone vs apps** 類比是這個概念最經典的口語表達。^[inferred]

## 為何傳統 pharma 是 Pipeline 不是 Platform

[[references/iansiti-moderna-case-2021]] p.5：^[extracted]

> "**大型製藥公司只追求漸進式創新**，這使得風險較大、尚未經過驗證的方法沒有機會被實現。考慮到開發時間和成本，製藥公司通常**專注於一種產品**，並為其投入大量資源。"

→ Pipeline 模式的內在邏輯：^[inferred]

- 開發成本太高（每個藥 $2-3 億）→ 必須選最確定的目標
- 監管路徑太長（10 年）→ 失敗一個案子就**整 cohort 損失**
- → 自然走「漸進式創新」、不冒平台級風險

→ 大型 pharma 不是「不知道平台好」，是**結構上做不到** —— 他們的成本結構與決策層級已適應 Pipeline 邏輯，轉成 Platform 等於拆解整套商業模式。^[inferred]

## Moderna 為何能走 Platform

[[entities/Stephane-Bancel]]：^[extracted]
> "假使依照旗艦先鋒的平台邏輯思考，這表示一種藥物在特定的限制條件下不起作用，那麼許多藥物都會起作用，**一旦方法經過驗證，便可以大幅加快新藥上市的時間**。"

→ 三個結構性條件讓 Moderna 能走 platform：^[inferred]

### 1. mRNA 技術的內在 generality

mRNA 序列像「軟體 instruction manual」（Moore 名言）—— 換序列就能讓細胞製造不同蛋白質。**底層技術 = generic；應用 = 變化無窮**。^[extracted]

### 2. 全套數位化營運模型

[[concepts/digital-operating-model]] + [[concepts/ai-factory]] 讓 Moderna 能同時跑 23 個藥物專案（[[references/iansiti-moderna-case-2021]] Exhibit 8）。沒有 DOM，平台模式的「同時多藥」會造成 complexity 爆炸。^[inferred]

### 3. 自有製造（垂直整合）

諾伍德工廠 $1.25 億美元投資。**Pipeline 公司可以外包製造**（每藥成本可控）；**Platform 公司必須自有製造**（同一套產線跑多藥的學習曲線只有自己跑才能累積）。^[inferred]

## 對其他產業的可移轉性

「Platform vs Pipeline」對立可套到任何「重 R&D + 長週期」產業：^[inferred]

| 產業 | Pipeline 模式 | Platform 模式 |
|---|---|---|
| 製藥 | Pfizer / J&J / Roche（每藥獨立）| Moderna / Vertex（mRNA / CFTR 平台）|
| 半導體 | 個別 ASIC 設計 | TSMC（製程平台）/ NVIDIA CUDA（軟體平台）|
| 軟體 SaaS | 每客戶客製 | Salesforce / Snowflake（多 tenant 平台）|
| 醫療 AI | 每模型獨立模型 vendor | Sectra / Epic 平台 + 第三方 AI marketplace |
| 創投 | 傳統 VC 等案子 | [[concepts/flagship-pioneering-model]]（venture creation）|
| 內容創作 | 一次性影集 / 電影 | Netflix（演算法 + 觀看資料平台）|
| 製造 | OEM 接單做 | Foxconn 模組化平台 |

→ Platform 模式的**通則**：「先一次性投資底層基礎設施，後續每個產品邊際成本急遽下降」。這是 [[concepts/scale-scope-learning]] 中 Scope 軸的具體表現。^[inferred]

## 投資人類型對齊

[[references/iansiti-moderna-case-2021]] p.5-6：Lavinia Talukdar（Moderna IR）說：^[extracted]

> "莫德納的平台性質**更容易吸引習慣於投資尚未有營收、尚未開始獲利的企業的廣泛型投資人**，這類型的投資人較不使用本益比（大型製藥公司的標準投資指標）做為評估投資報酬率的指標。"
>
> "我們挑選了專注投資成長階段公司的投資人，他們關注成功的可能性和上市時間。**這與我們說服技術型或財務型投資人的方式截然不同**。"

→ Platform 模式公司必須**主動選對投資人** —— 把錯的投資人吸引進來，他們會用本益比要求公司「轉成 Pipeline 公司」毀掉平台優勢。^[inferred]

→ 對 PM / 創業者：**找投資人也是策略決策**，不是「誰給錢都要」。^[inferred]

## Pipeline 模式的反擊

Pipeline 巨頭近年也在試圖 platform 化：^[inferred]

- Pfizer 與 BioNTech 合作 mRNA 疫苗
- Roche 收購基因檢測公司 Foundation Medicine
- AstraZeneca 收 Alexion（罕病平台）

→ 但**核心矛盾**：Pipeline 公司的內部組織 / 獎酬 / 文化全圍繞 Pipeline 邏輯，**買進 platform 公司後容易把它變回 pipeline**（如 Big Pharma 過去買進 biotech 後逐步官僚化）。^[inferred]

## 對醫療 AI 業的策略含意

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]

醫療 AI 業者也面對 Platform vs Pipeline 抉擇：^[inferred]

| 模式 | 醫療 AI 對應 | 例子 |
|---|---|---|
| **Pipeline** | 每個 AI 模型獨立開發、賣給醫院 | Aidoc / Heartflow / Paige.AI（單病灶） |
| **Platform** | 建底層 AI infrastructure 給多個模型用 | Sectra Amplifier / GE Edison / Epic Cosmos |

→ EBM 等中型醫療 AI 公司若想長期不被 platform 通行費抽，得**或者建自己的 mini platform**（在 EBM 強的 vertical 上、區域內）**或者深耕資料壁壘 niche**（單模型但 unbeatable）。**最危險的是「Pipeline 公司想要 Platform 估值」的中間態**。^[inferred]

## 與其他 wiki 概念

- 案例本體：[[references/iansiti-moderna-case-2021]] / [[entities/Moderna]]
- 框架基礎：[[concepts/digital-operating-model]] / [[concepts/scale-scope-learning]]
- 跨平台理論基礎：[[concepts/platform-competition]]
- venture creation 平行案例：[[concepts/flagship-pioneering-model]]
- 醫療 AI 對照：[[synthesis/medical-ai-platform-vs-pipeline]]

## Open questions

- 現有 mRNA 平台真的能跨疫苗 / 癌症 / 罕病這麼廣？或者只在預防性疫苗有效，其他應用會被生物學限制打回 pipeline 模式？^[ambiguous]
- LLM 是 platform 還是 model？（單一 LLM 可解多任務 → platform；但每個 task 仍需 fine-tune → 像 pipeline）這對「platform vs pipeline」二分本身的有效性提出挑戰。^[ambiguous]
- 中國藥廠（如恆瑞、石藥）是否在走 Platform 模式？或仍是 Pipeline + 仿製藥？^[inferred]
