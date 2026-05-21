---
title: Intel NBI（Intel's New Business Initiatives）
type: entity
domain: mgmt
tags: [intel, corporate-venturing, intrapreneurship, innovation, mgmt]
aliases: [Intel NBI, Intel New Business Initiatives, NBI]
sources:
  - case:Shih-Thurston-2010-Intel-NBI-A-HBS-9-609-043
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Intel 內部的 corporate venturing 單位，2003 年成立，初隸 Intel Capital，2007 年移至 TMG。任務是「以 Intel 既有能力為基礎，孵化與 microprocessor core 鄰接或不同的新業務」。三大 T-Up 成功（WiMAX / LPCO / Larrabee）都被 main divisions 吸收，從未孕育出獨立新事業。HBS 案例 9-609-043 的主角組織。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Intel NBI（New Business Initiatives）

## What it is

> Intel 為了**在 microprocessor core 之外建立新成長引擎**而成立的 internal corporate venturing 單位。設於 Hillsboro, Oregon 的 Hawthorn Farm facility，靠近 Intel 主要 microprocessor 製造廠。^[extracted]

不同於 intel corp 的 Intel Capital（外部 VC 投資），NBI 是**內部孕育新業務**的單位，介於 R&D、Incubator 與 corporate venturing 之間。

## 組織歷史

| 年 | 事件 |
|---|---|
| 2003 | Angela Biever（自 NBG 轉任）任 NBI 首任 GM；NBI 隸屬 Intel Capital |
| 2005 | Arvind Sodhani 任 Intel Capital 新總裁，引入 IRR / revenue growth / time-to-cash 三項硬指標 |
| 2006 | Rich Wykoff（前 Intel Capital 投資總監）接任 NBI GM |
| 2007 | NBI 自 Intel Capital 移至 TMG（Technology and Manufacturing Group） |
| 2009 | 案例 (A) 設定時間點：Wykoff 準備策略檢討 |

^[extracted]

## 主要成果與失敗

### 三大「T-Up」成功（但都被吸收）

| 項目 | 性質 | 主要對手 | 結局 |
|---|---|---|---|
| WiMAX | broadband wireless | Qualcomm | T-Up 給 main division |
| LPCO（Low-Power Chipset Organization） | Atom processor 的 system controller hub | AMD / Nvidia | T-Up 給 Mobile/Chipset Group |
| Larrabee | high-end graphics | Nvidia | T-Up 給 Visual Computing |

**「T-Up」= transition up to mainstream division**。NBI **從未** deliver 過真正獨立、能「graduate」成 standalone business 的 venture。^[extracted]

### Dogs（失敗案例）

Vovonic、PassEdge、WSPO 等被講義整理列為「Dogs」象限——但案例本身對這些單位細節不深入。^[extracted-from-lecture]

### 為什麼失敗？

案例與課堂討論累積出多層原因：^[extracted, inferred]

1. **HQ 強制的財務節奏**：quarterly IRR / monthly justify funding（vs. VC 的 long-term）→ 新事業在 maturity 前就被砍
2. **Leverage Intel processes 的副作用**：要 NBI 用 Intel 的 sales channel / manufacturing / HR / financial system → ventures 失去 [[concepts/RPV-framework]] 配置自由
3. **內部 vs 外部 metrics**：Intel 用 microprocessor 邏輯衡量 NBI ventures → strategic proximity 變成必要條件
4. **「Catch-22」**：incubate close to core → 被批不夠 differentiated；incubate far from core → 被批沒 strategic proximity，graduate 不回去
5. **"Step-child position"**：NBI 在 Intel 內部歷來地位偏低，資源 / 政治籌碼不足
6. **Manufacturing 副作用**：NBI start-ups 想用 Intel 最先進製程，但 volume 不夠 justify cost → 多數轉向外部 foundry，反而失去與 Intel 製造優勢的連結
7. **Learning 無法累積**：BAM 評審制度（Exhibit 3）沒有結構化把 failed venture 的 lesson 餵回下一輪（"random walk"）

詳見 [[synthesis/corporate-venturing-isolation-paradox]] 把上述原因整合成一個 system view。

## "Catch-22" 的原始引文

> "In many ways, NBI was trapped in a 'Catch-22.' They could either incubate close to the core, and be criticized for failing to differentiate their projects from the hypothetical purview of mainstream business units, or they could incubate away from the core and be criticized for growing businesses that lacked 'strategic proximity,' businesses that ended up being nearly impossible to graduate into highly focused mainstream divisions."  
> ——Shih & Thurston (2010), p.2

^[extracted]

## Pipeline Development Model（NBI idea sourcing）

```
IDEA
 (Intel Labs / Business Groups / Academia / MCM / Personal Networks /
  Intel Capital / Employees / Venture Firms / Manufacturing / Research)
   ↓
CONCEPT → INVESTIGATION → SEED Business Plan → BUSINESS Launch/Incubate
   ↓
TRANSITION → Valuation Point
```

→ 講義對此模型的批評：**把策略創新降為線性 R&D 管線**，預設「蓋好 pipeline 就會 innovation」是片面的——忽略了 [[concepts/disruptive-innovation]] 的非線性本質與 [[concepts/RPV-framework]] 的組織配置問題。^[extracted-from-margin]

## NBI Venture Review Process（評審節奏）

```
SAM（3-5 months）→ BAM I → Ops Review × 3 → Retrospective
                  → BAM II（Year 2）
                  → BAM III..n（Year n）
```

- **SAM** = Strategic Assessment Milestone（推測）^[ambiguous]
- **BAM** = Business Assessment Milestone（推測）^[ambiguous]

問題：BAM 之間的 Ops Review 用 short-term metric 衡量；Retrospective 雖然在末端，但 learning 沒餵回下一輪 SAM —— **organizational learning loop 開放但不閉合**。^[extracted-from-margin, inferred]

## 後續：Intel 的轉向

案例只到 2009 年。2009 年後 Intel 對「新業務建立」的策略明顯轉向：^[inferred]

| 年 | 動作 | 對應 4-quadrant fit matrix |
|---|---|---|
| 2014 | NBI 漸併入其他 group，independent unit 消失 | 內部 organic 路徑 abandon |
| 2015 | Altera 收購（USD 167 億）—— FPGA 業務 | C 象限：獨立門戶 holding |
| 2017 | **Mobileye 收購（USD 153 億）—— ADAS / Autonomous Driving** | C 象限：獨立門戶 holding |
| 2019 | 賣掉 5G smartphone modem 業務給 Apple | 內部失敗業務外賣 |

→ Intel **用 NBI 證明 organic growth 在 microprocessor giant 內難以成功，然後改走外部併購（C 象限）路徑**。Mobileye 至今保留高度獨立性運作，是這個策略的代表。^[inferred]

## 對醫療 AI PM 的延伸

> 註：以下是把框架套到自己工作的 hypothetical 思考。^[inferred]

EBM 若要孕育 microprocessor-PACS 以外的新業務（如 AI native screening、telemedicine workflow），NBI 的教訓很直接：

1. **Avoid metric contagion**：不要用 PACS 的 metric（installed base、IRR、IT-budget cycle）衡量新業務
2. **Avoid leveraging too hard**：不要強迫新業務用 EBM 既有 sales channel —— 客戶不一定重疊
3. **Choose quadrant explicitly**：A（內部擴大）/ B（雙元）/ C（spinoff）/ D（製造 in-house 但商業化 spinout）—— **Intel 案例顯示 C 對 disruptive innovation 最務實**
4. **Define success differently from Day 1**：「第六步錯」是 NBI 死因，**用什麼 metric** 比 metric 數字本身更重要

## Related

- [[references/shih-thurston-intel-nbi-2010-HBS]] —— 案例本體
- [[concepts/RPV-framework]] —— 診斷新業務 fit 的 Christensen 框架
- [[concepts/intrapreneurship-vs-venture-capital]] —— Exhibit 1 的對比
- [[concepts/disruptive-innovation]] —— 上層理論
- [[concepts/isolating-mechanisms]] —— HQ 對新業務的隔離（反向用法）
- [[concepts/causal-ambiguity]] —— organizational learning 失敗
- [[synthesis/corporate-venturing-isolation-paradox]] —— Catch-22 的 system view

## Sources

- [[references/shih-thurston-intel-nbi-2010-HBS]] —— HBS 9-609-043
- 講義：陽明交大 EMBA 策略管理（2024/4/9 版）
- Mobileye 收購事實：Intel 公告 2017-03-13^[extracted]
