---
title: 醫療 AI：Platform 型還是 Pipeline 型？
type: synthesis
domain: medical-ai
tags: [medical-ai, platform, strategy, ebmtech, synthesis, mgmt]
aliases: [medical AI platform vs pipeline, 醫療 AI 平台 vs 管道]
sources:
  - textbook:HBS-Case-9-513-060-GAFA-Deighton-Kornfeld-2013
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
  - textbook:HBS-Case-9-621-032-Moderna-Iansiti-Lakhani-Mayer-Herman-2021
  - jason-pm-experience:ebmtech-medical-ai-2024-2026
created: 2026-05-06
updated: 2026-05-06
visibility: internal
summary: >-
  Jason 自己的判斷（2026-05-06）：醫療 AI 公司在 5 年內會分化為 platform 型（如 Sectra、GE Healthcare、可能是 Epic、可能是 Apple Health）和 pipeline 型（單一 AI 模型 vendor）。後者長期會被前者 disintermediate，除非具備獨特資料壁壘。對 EBM 之類的中型醫療 AI 公司而言，最危險的策略是「想當 platform 但沒資源、又不甘只做 pipeline」的中間態。Confidence = medium。
confidence: medium
provenance:
  extracted: 0.1
  inferred: 0.7
  ambiguous: 0.2
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-06
---

# 醫療 AI：Platform 型還是 Pipeline 型？

> **立場：** Jason 自己整理（2026-05-06），confidence = **medium**。
> **來源：** [[references/hbs-gafa-case-deighton-2013]] 框架 + Jason 自身在 ebmtech 的醫療 AI PM 經驗（2024-2026）。
> **Visibility：** Internal — 觸及 ebmtech 產品判斷與競品定位，不發布公開站。
> **Pending validation：** 未對 EBM 同事或業界顧問校驗；未做歷史驗證（2020-2026 醫療 AI 公司分布）。

## TL;DR

**5 年內醫療 AI 公司會分化為兩種商業模式**：^[inferred]

1. **Platform 型**：擁有醫院介面層（PACS / HIS / EMR / 影像存取入口），把多個 AI 模型 plug-in 進來。例：Sectra、GE Healthcare、可能是 Epic（美）、可能是 Apple HealthKit
2. **Pipeline 型**：賣單一 AI 模型（特定部位、特定疾病、特定影像 modality），透過 platform 的 marketplace 觸達醫院

**長期而言：**
- Platform 型賺**通行費**（marketplace 抽成 + 介面層 license）
- Pipeline 型賺**單模型授權費**，但持續被 platform 壓低

→ 中型醫療 AI 公司（如 EBM）若不能在 3 年內**做出 platform、或加入別人 platform、或建出獨特資料壁壘**，會被 disintermediate。^[inferred]

## 框架：把 GAFA case 的命題搬到醫療 AI

[[concepts/platform-competition]] 在消費網路的觀察是：**單一 vertical 龍頭會把優勢延伸成多 vertical 平台**。

醫療 AI 場景的對應假設：^[inferred]

| GAFA case | 醫療 AI 對應 |
|---|---|
| 搜索 → 全網內容入口 | PACS → 全院影像入口 |
| 社交 → 用戶資料壟斷 | EMR → 病人資料壟斷 |
| 硬體 → 介面層控制 | 醫療裝置 → 影像產生入口 |
| 雲端 → 多 vertical 算力 | 醫療雲 → 多模型運算 |

醫療業有**強法規邊界**（FDA、CE、衛福部、HIPAA、GDPR），所以跨界滲透成本遠高於消費網路。但**軟體 / 資料層的 platform 化**正在發生。^[inferred]

## 三類醫療 AI 玩家的長期勝率

### Class A：Platform 型（高勝率）

特徵：
- 已掌握醫院介面層（PACS / HIS / EMR）
- 有資源做 marketplace 與 API 治理
- 有跨醫院議價力

代表：
- **Sectra**（瑞典）—— 北歐 PACS 龍頭，AI marketplace 已上線多年^[inferred]
- **GE Healthcare** —— Edison platform，整合自家 + 第三方 AI^[inferred]
- **Philips IntelliSpace** —— 影像 + AI 整合平台^[inferred]
- **Epic（美國）** —— 從 EMR 切入 AI marketplace（Cosmos、Showroom）^[inferred]

長期勝率：**高**。因為他們已經是醫院 IT stack 的 single sign-on，AI 模型廠商必須通過他們才能賣到醫院。^[inferred]

### Class B：具獨特資料壁壘的 Pipeline 型（中勝率）

特徵：
- 在某個高度專業領域有**獨家標註資料**
- 模型表現顯著優於 platform 內建選項
- 有頂尖醫院的臨床發表背書

代表（醫療影像領域）：
- **Aidoc** —— 多 modality CT 急診 AI，accumulated 標註領先^[inferred]
- **Heartflow** —— Coronary CT FFR 計算，FDA 已通過、保險已給付^[inferred]
- **Paige.AI** —— 病理 AI，紐約 MSK 獨家資料^[inferred]

長期勝率：**中**。資料壁壘可以維持差異化，但仍受 platform 通行費壓榨。^[inferred]

### Class C：通用 Pipeline 型（低勝率）

特徵：
- 賣常見部位 / 常見疾病的 AI 模型（肺結節、骨折、乳房 X 光）
- 訓練資料品質與規模平庸
- 無 platform、無獨家資料

長期勝率：**低**。會被 platform 內建模型 commoditize，或被資料領先的 Class B 取代。^[inferred]

## EBM 的位置（Jason 自評）

> 此區塊涉及 ebmtech 競品判斷與內部策略，標 internal。

**2026-05 截圖判斷：** EBM 目前接近 Class B（特定資料壁壘 + 臨床發表），但還沒有強到能單獨對抗 platform 的議價力。^[inferred]

**最危險的中間態**：想當 Class A（platform）但沒足夠資源（vs Sectra / GE 級別）、又不甘只做 Class B（單模型 vendor）。^[inferred]

**三條可能路徑：**

### Path 1：合作進入 platform marketplace（風險低、上限低）

加入 Sectra / GE / Epic 的 marketplace，接受被通行費抽成。短期穩定收入，長期失去議價權。^[inferred]

### Path 2：在特定 niche 鎖定 Class B 位置（風險中、上限中）

挑 1-2 個 EBM 有資料壁壘的領域（具體哪幾個是 internal），深耕到「即便 platform 抽成，醫院仍指名要 EBM 模型」的程度。^[inferred]

### Path 3：在台灣 / 東亞區域做 platform（風險高、上限高）

利用「在地法規 + 中文/繁體在地化 + 區域 PACS 廠商關係」做地理保護的 mini platform。但這要求大量資源與長銷售週期。^[inferred]

→ Jason 偏好 Path 2 加上 Path 1 的混合（先卡位 Class B、同時保留 platform 通路），而非 Path 3 的孤注一擲。但這還沒對主管或 founder 提出，只是個人判斷。^[ambiguous]

## 與其他 wiki 概念的連結

- 框架來源：[[concepts/platform-competition]]
- 市場結構分析：[[concepts/winner-take-all-vs-always-a-share]] —— 醫療 AI 子市場混合性強，多數是 always-a-share
- Reach vs Stickiness：[[concepts/stickiness-vs-reach]] —— 醫療 AI 的 stickiness（醫師日常使用率）比 reach（簽下醫院數）更能 predict churn
- 案例本體：[[references/hbs-gafa-case-deighton-2013]]

## Open questions（值得進一步驗證）

- 醫療 platform 的「介面層霸權」會被 LLM 重新洗牌嗎？如果 ChatGPT 這類通用 LLM 直接整合進醫師日常工作流程，PACS / EMR 的介面層獨佔還會成立嗎？^[ambiguous]
- Apple HealthKit + Watch 在 5 年內會不會從消費 wellness 跨到正式醫療診斷？這會徹底打亂上述分類。^[ambiguous]
- 中國 / 大陸醫療 AI 的 platform 化（聯影、神州醫療）走得比西方快嗎？台灣業者該抗衡還是合作？^[ambiguous]
- 上述 Class A/B/C 分類沒區分 **影像 AI vs 文字 AI vs 病人決策 AI**，這三類的平台動態可能很不同。^[ambiguous]

## 補充：Iansiti & Lakhani SSL 框架的判讀（2026-05-06 追加）

讀完 [[references/iansiti-lakhani-competing-age-of-ai-2020]] Ch1 後，補充用 [[concepts/scale-scope-learning]] 三軸校驗上述三類玩家：

| Class | Scale | Scope | Learning | 說明 |
|---|---|---|---|---|
| **A: Platform**（Sectra / Epic / GE）| ✅ 高 | ✅ 高（一 platform 跨多 modality / 多 vertical）| ⚠️ 受醫院資料隱私限制 | SSL 二軸領先，learning 軸看法規 |
| **B: 資料壁壘 Pipeline**（Aidoc / Heartflow）| ⚠️ 中（需逐家簽約）| ❌ 低（單模型只解一任務）| ✅ 高（持續學）| 只贏 learning，靠資料壁壘維持差異化 |
| **C: 通用 Pipeline** | ⚠️ 中 | ❌ 低 | ⚠️ 中 | 三軸都不強，被 commoditize 風險高 |

**關鍵洞察**：醫療業的 SSL 三軸天生不對稱 —— **法規與隱私壓制 Learning 軸**（資料無法跨醫院自由共享、無法零成本訓練）。^[inferred]

→ 這讓「靠 Learning 軸取勝」的 Class B 比消費網路困難。Sectra 之類的 platform 沒贏在 Learning（其實也不太能），他們贏在 **Scale + Scope** 兩軸。對 EBM 的策略含意：**不要寄望靠 Learning 軸打敗 platform**，要嘛靠 Scale (深耕台灣 / 東亞 region) 要嘛接受被 platform 通行費抽。^[inferred]

## 補充：humans-on-edge 與醫療法規天花板（2026-05-06 追加）

[[concepts/humans-on-edge-ai-in-core]] 在醫療業有特殊張力：^[inferred]

- Amazon 的 edge = AI 還搞不定的物理動作（撿不規則形狀的貨）
- 醫療的 edge = AI 還搞不定的判讀 + **法規強制人類簽字**
- → 醫療的 edge 不會隨 AI 變強而縮小，因法規天花板存在

→ 對 EBM PM 的具體含意：產品定位**不是「我們的 AI 比醫師強」**（醫師討厭、法規不允許、市場不買），**而是「讓醫師處理 edge case，AI 把 routine 接走」**。文案、demo、銷售話術都該圍繞「醫師時間重新分配」，而非 AI benchmark 數字。^[inferred]

## Strategic Collisions 對醫療業的潛在攻擊（2026-05-06 追加）

[[concepts/strategic-collisions]] 提醒：醫療 AI 業者該盯的雷達不只「同業」：^[inferred]

| Digital Firm | 醫療受害者潛力 | 真正在做什麼 |
|---|---|---|
| Apple HealthKit / Watch | 健檢業、慢病管理 | 黏住用戶 |
| Google DeepMind / Med-PaLM | 二級會診、線上問診 | LLM 應用佈局 |
| Amazon Pharmacy / One Medical | 連鎖藥局、家醫科 | 補完 Prime 閉環 |

醫療業相對被法規保護所以 collision 速度慢，但**不是不會發生**。EBM 的雷達應超出「醫療 AI 同業」。

## 補充：Moderna 是 DOM 化生技 anchor，醫療 AI 該借鑒什麼（2026-05-06 追加）

讀完 [[references/iansiti-moderna-case-2021]] 後，Moderna 是「醫療業實際做出 [[concepts/digital-operating-model]] 的活案例」。對醫療 AI 業者的可移轉教訓：^[inferred]

### 1. Day 1 數位化、不要「先做事業再補 IT」

[[entities/Stephane-Bancel]] 名言：「**從一開始就執行數位化比在數據源系統中後處理容易多了**」。EBM 之類醫療 AI 公司若想長期勝出，**現在就該砸資源建 [[concepts/ai-factory]]**，不要等「等案子穩定」才補。後補成本至少 10x。^[inferred]

### 2. CDO 不是裝飾性職位

Moderna 從 bioMérieux 挖角 Damiani 任 [[concepts/cdo-chief-digital-officer]]，與 COO 雙重彙報、跨部門整合權。**沒有 CDO 級組織治理權，AI Factory 推不動**，因為金字塔下層的 Cloud / Integration 跨部門基礎建設沒有單一部門 CEO 認領。^[inferred]

### 3. 自有製造（垂直整合）在快速變動領域是 hedge

Moderna 砸 $1.25 億美元蓋諾伍德工廠（無營收狀態），讓他們 COVID 時 42 天送疫苗、3 個月與 Lonza 完成技轉。對醫療 AI 業：**「自有資料管道 + 自有訓練設施」**是類比的 hedge —— 完全靠醫院給資料、靠雲端廠商訓練、未來會被卡死。

### 4. 平台思維（mRNA = iPhone, drugs = apps）可直接套到醫療 AI

[[concepts/platform-vs-pipeline-pharma]] 命題對醫療 AI 完全平行：

| 模式 | 醫療 AI 對應 |
|---|---|
| Pipeline | 每個 AI 模型獨立開發、賣給醫院（Aidoc / Heartflow / Paige.AI 早期）|
| Platform | 建底層 AI infrastructure 給多模型用（Sectra Amplifier / GE Edison / Epic Cosmos）|

→ EBM 若想長期不被 platform 通行費抽，得**或者建自己的 mini platform**（在 EBM 強的 vertical 上、區域內）**或者深耕資料壁壘 niche**（單模型但 unbeatable）。**最危險的是「Pipeline 公司想要 Platform 估值」的中間態**。^[inferred]

### 5. 投資人類型對齊：選錯投資人會把 platform 公司逼回 pipeline

Talukdar（Moderna IR）：「**這與我們說服技術型或財務型投資人的方式截然不同**」。

→ 如果 EBM 想走 platform 路線，融資階段就得**主動挑「平台思維 + 看上市時間」的投資人**，而非「看本益比 + 看單一產品 milestone」的投資人。否則一輪融資後就被 board 逼回 pipeline 思維。^[inferred]

### 6. 警告：Moderna 是 DOM 成功 prototype 還是 COVID 才能成立的特例？

2026 視角：Moderna 股價自高點跌 90%+，COVID 後 next product 還在 ramp up。**單一商品週期風險**仍在驗證中。

→ 醫療 AI 業者學 Moderna 時要**分清楚 process（DOM 化、AI Factory）vs context（COVID 機會視窗）**。前者可移植、後者不可。^[inferred]

## 立場改變紀錄

- **2026-05-06**：初版立場 + Iansiti & Lakhani SSL 框架補充 + Moderna case 借鑒段落。後續若改變立場，新增段落而非改舊段落，保留軌跡。
