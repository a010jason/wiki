---
title: Mobileye
type: entity
domain: mgmt
tags: [entity, autonomous-driving, israel, intel-subsidiary, adas, mgmt, strategy]
aliases: [Mobileye, Mobileye Global, EyeQ, Mobileye Vision]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.4
sources:
  - id: mobileye-image-deck
    ref: '[[references/mobileye-image-deck]]'
related:
  - 'Intel'
  - '[[entities/intel-NBI]]'
  - '[[synthesis/corporate-venturing-isolation-paradox]]'
  - 'SAE-automation-levels'
  - 'robotaxi corridor hypothesis'
  - 'MaaS-RaaS-VaaS-stack'
  - '[[concepts/parenting-matrix-goold-campbell]]'
---

# Mobileye

以色列自駕視覺 AI 公司，**EyeQ 系列 SoC** 是全球 ADAS / AV 主流晶片之一。1999 創辦 → 2014 NYSE IPO → **2017 Intel 收購 \$15.3B** → 2017-2022 Intel 內結構性隔離 → **2022/10 Spin off NASDAQ IPO（MBLY）**。^[extracted]

> 戰略意義：**Mobileye 是 [[entities/intel-NBI|Intel NBI failure]] 的反面成功案例** — Intel 沒走「內部 ventured + dissolved」的 NBI 路徑，而是走「**acquire + structurally isolate + spin off**」的 Christensen Quadrant C 路徑（[[references/christensen-overdorf-2000-HBR-disruptive-change]]）。^[teacher-annotation, Jason synthesis]

> 教師 [[concepts/parenting-matrix-goold-campbell|Parenting Matrix]] 判斷（[[references/strategy-management-course-2024-nycu|2024/06/04 課堂]]）：「**Mobileye + Intel 不是母合優勢**」— Mobileye 對 Intel 是 ALIEN TERRITORY + VALUE TRAP 區。**2022 spin off 應驗教師預測**。^[teacher-annotation]

## 公司沿革

| 年 | 事件 |
|---|---|
| **1999** | Amnon Shashua + Ziv Aviram 在耶路撒冷創辦 |
| 2007 | First EyeQ chip 量產（Mercedes 採用） |
| 2010s | EyeQ 進入主流 OEM ADAS 配套 |
| 2014/8 | NYSE IPO（MBLY），募資 \$0.89B |
| **2017/8** | Intel 收購 **\$15.3B**（當時以色列史上最大科技交易） |
| 2017-2022 | Intel 內結構性隔離：**Israel-based / 品牌獨立 / 商業模式自主**（B2B chip + B2B MaaS + 自家 robotaxi prototype） |
| 2020 | 收 Moovit（MaaS app，950M users / 3400 cities） |
| **2022/10/26** | NASDAQ IPO（MBLY），Intel 仍持 ~94% 股權 |
| 2023+ | 持續為 ADAS / AV 市場主力，營收 ~\$2B |

## 量化（2020，case 時點）

- Revenue \$1.0B（2018 \$0.7B → CAGR ~20%）
- Operating income \$0.2B（op margin ~20%）
- EyeQ 累計出貨 **2014 2.4M → 2020 19.3M units**（CAGR ~41%）
- 佔 Intel 2020 total revenue ~1.3%

## EyeQ 晶片系列

| 世代 | 製程 | 用途 |
|---|---|---|
| EyeQ1-4 | 較舊 | 基本 ADAS / Mercedes 早期 |
| EyeQ5 | 7nm TSMC | L2-L3 ADAS |
| EyeQ6 / 6H | 7nm | Premium ADAS |
| EyeQ Ultra | 5nm | L4 SDS（system-on-chip 整合） |
| EyeQ8 / 後續 | 持續演化 | L4-L5 |

## Solution Portfolio 四段戰略（image deck Exhibit 11）

```
Today L1-L2 ADAS          → SoC + SW 賣 OEM
Today L2+ / L2++          → 加值 ADAS + REM + Vision Zero RSS
2022 L4 / L5 MaaS         → Full-service MaaS + SDS to operators
2025 L3-L5 passenger cars → SDS to OEMs (Chauffeur mode)
                           ↓
                  底層 REM (Road Experience Management)
                  ADAS 車隊 crowdsource → HD map
```

戰略邏輯：**用 L1-L2 ADAS 規模化資金 + 資料，往上補 L4 Robotaxi，再 scale-down 回 L3-L5 私家車**。典型 [[concepts/disruptive-innovation|disruption from foothold]] + data flywheel。

## 教師 Parenting Matrix 判斷（2024/06/04 課堂）

教師明點 Mobileye-Intel 是 **ALIEN TERRITORY + VALUE TRAP** 混合：

| 維度 | Intel-Mobileye 評估 |
|---|---|
| **母公司增值能力 fit** | **Misfit** — Intel = PC/server CPU 文化 / commodity-driven / 規模製造；Mobileye = AI 視覺 / 汽車產業 / 軟體+服務 |
| **母公司增值機會 fit** | 部分 Benefit（晶圓製造）+ 部分 Misfit（自駕 long sales cycle / 汽車 OEM 關係 / 地圖資料 / SDS 開發） |
| **結論** | 「**Mobileye + Intel 不是母合優勢**」 |

教師判斷的應驗：**Intel 2022 spin off MBLY** — 認識到母合錯位後沒走 NBI failure，走 acquire-isolate-spin off。^[teacher-annotation]

## 與 [[entities/intel-NBI|Intel NBI failure]] 的對比

[[synthesis/corporate-venturing-isolation-paradox|Corporate venturing isolation paradox]] 兩個典型路徑：

| 路徑 | 結構 | 結果 |
|---|---|---|
| **Intel NBI**（[[entities/intel-NBI|HBS 9-609-043]]） | 內部 ventured + 受 Intel R/P/V 牽制 | Failure（dissolved） |
| **Intel Mobileye** | External acquired + 結構性隔離（Israel + 獨立品牌 + 獨立商業）+ Spin off | **Success**（IPO valuation 釋放） |

**關鍵差異**：Intel 對 Mobileye 採取 Christensen Quadrant C 應對 disruptive change 的正確路徑 — heavyweight team in spinout organization。

## 關鍵 MaaS 戰略元素

### 1. Robotaxi Corridor Hypothesis
Mobileye 主張 **Robotaxi 是 consumer-AV 的必經 corridor**：
- SDS cost 太高 → 先 fleet 化攤平
- Regulation 在 geo-fenced fleet 易管理
- Geographic scale 透過 mapping 達成

### 2. MaaS-RaaS-VaaS-stack
- **MaaS**（Mobility-as-a-Service）— end-to-end multi-modal
- **RaaS**（Ride-as-a-Service）— Robotaxi 為主
- **VaaS**（Vehicle-as-a-Service）— 提供完整車輛
- **SDS**（Self-Driving System）— 賣 stack 給 operators

### 3. REM-road-experience-management
ADAS 車隊 crowdsource → HD map → 反向 fuel AV + 智慧城市 — 典型 **data flywheel**。

## 競爭格局（image deck Exhibit 7）

| 玩家 | SDS | SDV | Fleet Mgmt | Mobility Svcs |
|---|---|---|---|---|
| **Mobileye** | Build | Partner | Partner | Moovit |
| **Waymo** | Build | Build | Build | Build |
| **Cruise** | Build | Build | Partial | Build（**已 2023 停運**） |
| **Zoox** | Build | Build | Build | Build |
| **Argo** | Build | Build | TBD | TBD（**已 2022 結束**） |

**2026 視角更新**：Argo AI 2022 結束（Ford + VW 撤資），Cruise 2023 加州 DMV 停運。**Mobileye 是少數仍商業營運 + 獨立公開上市的 AV 公司**。

## Tesla 合作分手（2016）

Mobileye-Tesla 早期合作（EyeQ3 用於 Autopilot），2016/7 Tesla Autopilot 致命事故後雙方分手。Tesla 改自研 FSD chip + 純視覺路線；Mobileye 走 camera+REM 路線。

兩條路線的對撞至 2026 仍未定論：
- Tesla：**直接訴諸 consumer AV，跳過 robotaxi corridor**
- Mobileye：**robotaxi corridor 必經**

## 關鍵角色

- **Amnon Shashua** — Co-founder, President &amp; CEO
- **Ziv Aviram** — Co-founder
- **Pat Gelsinger** — Intel CEO（推動 2022 spin off）

## Open Questions（待 wiki-challenge）

- **Robotaxi corridor hypothesis 是否會被驗證？** Waymo 2024 Phoenix / SF 持續但小規模；Cruise 已停 ^[2026 backfill]
- **Mobileye vs Tesla FSD 兩路線**：camera-only vs camera+REM 何者勝？^[ambiguous]
- **2022 spin off 後 valuation**：MBLY 初期 \$17B → 2024 fluctuating；vs 2017 Intel 收 \$15.3B 是否 paid off？^[inferred]
- **與 [[entities/intel-NBI|Intel NBI]] 的對比是否成立？** Mobileye 是 acquired entity 而非 internal venture — 嚴格說不是 NBI 的反例，是不同 path ^[inferred]
- **教師 Parenting Matrix 判斷的學術正當性**：ALIEN TERRITORY 處置該全 divest，但 Intel 仍持 94% — 是部分執行還是新 framework？^[inferred]

## Related

- **概念**：SAE-automation-levels / robotaxi corridor hypothesis / MaaS-RaaS-VaaS-stack / REM-road-experience-management / [[concepts/parenting-matrix-goold-campbell]] / [[concepts/disruptive-innovation]] / [[concepts/RPV-framework]] / [[concepts/organizational-ambidexterity]] / [[concepts/strategic-innovation]] / [[concepts/penguin-problem-game-theory]]
- **Entity**：Intel / [[entities/intel-NBI]] / Tesla / Waymo / Cruise / Amnon-Shashua / Pat-Gelsinger / Moovit
- **參考**：[[references/mobileye-image-deck]] / [[references/strategy-management-course-2024-nycu]]（2024/06/04 課堂） / [[references/christensen-overdorf-2000-HBR-disruptive-change]] / [[references/shih-thurston-intel-nbi-2010-HBS]]（NBI 對照）
- **Synthesis**：[[synthesis/corporate-venturing-isolation-paradox]]（Mobileye = NBI failure 反面成功案例）
