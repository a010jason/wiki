---
title: Mobileye Image Deck — Intel × Mobileye × MaaS 案例 figure pack
type: reference
domain: mgmt
tags: [reference, mobileye, intel, autonomous-driving, exhibit-deck, mgmt, strategy]
aliases: [Mobileye exhibit deck, S0_mobileye image deck, Intel Mobileye MaaS case figures]
sources:
  - id: mobileye-image-deck
    type: case-figure-deck
    rel_path: 策略管理/S0_mobileye_圖片整理_更新.pdf.pdf
    drive_url: https://drive.google.com/file/d/1rClmIEfuwa8EGk5MgjTdS-rQTeZPRnIJ/view
    pages: 13
    size_bytes: 1116639
    sha256: d77cebbcd08d3e97fa3844176408c18aa1043917031741996e6dbf846e0b101c
    ingested_commit: 9319bdf
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.45
summary: >-
  Mobileye 案例 figure pack（純 exhibit deck，無 narrative text）— 13 頁含 SAE automation levels / Robotaxi corridor /
  MaaS-RaaS-VaaS-SDS 四層 stack / REM crowdsourced HD map / Intel 2020 財報 / EyeQ 出貨曲線。
  **無教師中文眉批**（pure exhibit pack，搭配主 case 文本使用的視覺輔助）。
  與課程 20240604 課堂題目（C4 source）形成完整 Mobileye 案例組。
  Ingest 2026-05-21 (Wave C 3/4)。
---

# Mobileye Image Deck

## Bibliographic

純 figure pack（13 頁 exhibit images），搭配 Mobileye 主 case 文本使用。Exhibits 1-13 對應 Mobileye / Intel × MaaS 戰略討論。

Source 性質：**case study 的視覺輔助材料，single source 不足以撐起 Mobileye 完整故事**，必須配對主 case 文本（教師講義 / Christensen-style write-up）才能完整 ingest。

## Ingest 範圍與方法

| 階段 | Source | 路徑 | 日期 |
|---|---|---|---|
| Wave C 3/4 | Exhibit deck (13p) | B (subagent) | 2026-05-21 |

13 頁全讀完，無中文眉批，純英文原始 exhibit 圖。

## 已 ingest 的核心內容

新建頁面：
- [[entities/Mobileye]]
- [[concepts/SAE-automation-levels]]（L0-L5 自駕分級，NHTSA 來源）
- [[concepts/robotaxi-corridor-hypothesis]]（Mobileye 主張 Robotaxi 是 consumer-AV 必經 corridor）
- [[concepts/MaaS-RaaS-VaaS-stack]]（三層 + SDS）
- [[concepts/REM-road-experience-management]]（crowdsourced HD map）

可補強既有：
- [[entities/intel-NBI]]（Mobileye 是 Intel NBI failure 的**反面成功案例**）
- [[synthesis/corporate-venturing-isolation-paradox]]（Mobileye 是「acquire + isolate + spin off」的 paradox 解方）
- [[concepts/disruptive-innovation]]（Mobileye 從 L1-L2 ADAS 上攻 L4-L5）
- [[concepts/RPV-framework]]（Intel 對 Mobileye 維持 R/P/V 隔離）

## Exhibit 概要

| Exhibit | 主題 |
|---|---|
| 1 | SAE Automation Levels 0-5（NHTSA） |
| 2 | Robotaxi as necessary corridor to consumer-AV |
| 3 | Cost/mile across mobility options（Taxi / Ride-hailing / Robotaxi / 私家車 / Public transit） |
| 4 | Mobileye Robotaxi prototypes（Nio ES8-based） |
| 5 | MaaS Societal Benefits 8 segments |
| 6 | MaaS market $105B (2018) → $550B (2030)；Robotaxi $160B CAGR ~50% |
| 7 | Competitor map（Waymo / Cruise / Zoox / Argo） |
| 8 | Moovit App：950M users / 3400 cities / 112 countries |
| 9 | Business model：MaaS / RaaS / VaaS / SDS 四層 stack |
| 10 | Mobileye Financials 2018-2020；EyeQ shipped 2.4M → 19.3M |
| 11 | Mobileye Solution Portfolio 四段（Today L1-L2 / Today L2+ / 2022 L4-L5 MaaS / 2025 L3-L5 passenger） |
| 12 | Intel 2020 Income Statement |
| 13 | Intel 2020 Balance Sheet（含 Goodwill $26.97B） |

## 關鍵 financial 觀察

### Mobileye 量化
- 2018-2020 Revenue：$0.7B → $0.9B → **$1.0B**
- Operating income：$0.1B → $0.2B → $0.2B（**op margin ~20%**）
- EyeQ shipments 2014 → 2020：**2.4M → 19.3M units**（CAGR ~41%）

### Intel 2020 對 Mobileye 的關係
- Intel 2020 Revenue $77.87B → Mobileye 占約 **1.3%**
- Intel Goodwill $26.97B（含 Mobileye 2017 收購商譽 $15.3B）
- **2022 Mobileye spin off IPO** 是教師 Parenting Matrix 判斷 ALIEN TERRITORY → 剝離的應驗

## Sources

| ID | 檔 | 頁 | SHA256 (prefix) | Ingested |
|---|---|---|---|---|
| `mobileye-image-deck` | S0_mobileye_圖片整理_更新.pdf.pdf | 13 | `d77cebbc…` | pending |

## Open Questions

- 完整 Mobileye 案例 narrative：本 deck 是 figure pack，需配對主 case 文本才完整
- Tesla 合作分手（2016 Autopilot 事故後）的詳細時序：本 deck 未提
- 2022 Spin off IPO 完整時序與 valuation 動態：本 deck 未提
- Robotaxi CAGR 50% 預測在 2026 視角已過度樂觀（Waymo / Cruise 進度落後）— 案例需要 2026 update

## Related

- [[entities/Mobileye]] / [[entities/Intel]] / [[entities/intel-NBI]] / [[entities/Tesla]] / [[entities/Waymo]] / [[entities/Cruise]]
- [[synthesis/corporate-venturing-isolation-paradox]]（Mobileye = Intel NBI failure 的反面成功案例）
- [[references/christensen-overdorf-2000-HBR-disruptive-change]] Quadrant C-D acquisition + autonomy 路徑
- [[references/shih-thurston-intel-nbi-2010-HBS]]（Intel NBI 失敗對照組）
- [[references/strategy-management-course-2024-nycu]]（2024/06/04 課堂題目組）
- **概念**：[[concepts/SAE-automation-levels]] / [[concepts/robotaxi-corridor-hypothesis]] / [[concepts/MaaS-RaaS-VaaS-stack]] / [[concepts/REM-road-experience-management]] / [[concepts/parenting-matrix-goold-campbell]] / [[concepts/disruptive-innovation]] / [[concepts/RPV-framework]]
