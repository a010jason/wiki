---
title: PLC vs Stage-Gate vs Adopter Curve — 三套時序模型的整合
type: synthesis
domain: marketing
tags: [PLC, stage-gate, adopter-categorization, time-models, kotler, synthesis, mgmt]
aliases: [PLC vs stage-gate vs adopter curve, three time models, marketing time models integration]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch17,Ch18
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kotler 16e Ch17（PLC）與 Ch18（Stage-Gate + Adopter Curve）給出三套不同視角的時序模型 — 但他們其實是「同一個故事的三個視角」：Stage-Gate 看研發內部時序（pre-launch）、PLC 看銷售與利潤時序（post-launch）、Adopter Curve 看客戶採用時序（post-launch 客戶面）。本文整合這三套模型成「銷售-客戶-產品」的三向時序座標，並用醫療 AI 場景作為應用案例。
confidence: medium
provenance:
  extracted: 0.50
  inferred: 0.45
  ambiguous: 0.05
base_confidence: 0.70
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# PLC vs Stage-Gate vs Adopter Curve

## 命題

Kotler 16e Ch17 + Ch18 給出三套時序模型，但教科書沒明確整合：

| 模型 | 視角 | 時序 |
|---|---|---|
| [[concepts/stage-gate-framework]] | 研發內部 | Pre-launch（idea → commercial） |
| [[concepts/product-life-cycle]] | 銷售與利潤 | Post-launch（intro → decline） |
| [[concepts/adopter-categorization]] | 客戶採用 | Post-launch（innovators → laggards） |

本文主張：這三套模型其實是**同一條時間軸的三個視角**，整合後可形成完整的「產品歷程地圖」。

## 三套模型的時間錨點對齊

```
Stage-Gate (內部時序)
└── Idea ─→ Concept ─→ Business Model ─→ Implementation ─→ Commercial ─→ ★ Launch
                                                                            │
                                                                            ▼
                              ┌─────────────────────────────────────────────┘
                              │
PLC (銷售時序)                ▼
└── Introduction ─→ Growth ─→ Maturity ─→ Decline
        ▲              ▲           ▲              ▲
Adopter Curve (客戶時序)
└── Innovators ─→ Early Adopters ─→ Early Majority ─→ Late Majority ─→ Laggards
        2.5%            13%               34%               34%            16%
```

意涵：
- **Stage-Gate 的 Commercial Deployment** = PLC 的 Introduction 起點 = Adopter 的 Innovators 進場
- **PLC 的 Growth** = Adopter 的 Early Majority 加入 = **Chasm 過後**
- **PLC 的 Maturity** = Adopter 的 Late Majority 主導
- **PLC 的 Decline** = Adopter 的 Laggards 也快用完，新替代品出現

## 三向座標 = 完整地圖

整合後的座標系：^[inferred — Jason 整合]

| 階段 | Stage-Gate（內部） | PLC（銷售） | Adopter（客戶） | 主要任務 |
|---|---|---|---|---|
| 0 | Idea generation | (尚未進市場) | — | 創意收集 + idea validation |
| 1 | Concept validation | — | — | Prototype + alpha test |
| 2 | Business model design | — | — | Target market + value prop |
| 3 | Implementation | — | — | Build product + supply chain |
| 4 | **Selective deployment** | **Introduction** | **Innovators** | 試點、early reference |
| 5 | Market expansion | Growth 早期 | **Early Adopters** | KOL + 媒體 |
| 6 | (post-launch) | **Growth 中期** | **Early Majority**（過 chasm） | Whole product + scale |
| 7 | (post-launch) | **Maturity** | **Late Majority** | Differentiation defense |
| 8 | (post-launch) | **Decline** | **Laggards** | Harvest + divest 規劃 |

## 三模型的內在矛盾

雖然可以整合，但三模型之間有真實衝突：^[inferred]

### 衝突 1：Stage-Gate 與 Lean Startup 對立

Stage-Gate 強調「**多層 gate 確保品質**」；Lean Startup（Eric Ries）主張「**少 gate 快 iterate**」。在數位產品時代，**stage-gate 偏向大公司、lean 偏向 startup**。

### 衝突 2：PLC 是線性 vs Adopter Curve 是累積

PLC 圖示銷售曲線**升降**（bell curve），但 Adopter Curve 顯示累積採用比例**單調上升**（S-curve）。同一產品的兩個數學表達不同。

### 衝突 3：Chasm 在 PLC 中不可見

[[concepts/adopter-categorization]] 中 Geoffrey Moore 的 **chasm** 是 Early Adopters → Early Majority 之間的「**死亡谷**」。但 PLC 的銷售曲線 通常**沒有顯示 chasm** — 因為 chasm 期間銷售平滑下滑，但 PLC 把它畫成 growth。

意涵：**PLC 模型隱藏了 chasm 的存在**。實務 PM 看 PLC 以為自己在 Growth，但其實可能正在 chasm 中。

## 量表（教師延伸）

教師批註提到 Gartner Hype Cycle，可疊加為第四層時序：^[inferred from instructor annotation Ch17]

```
Gartner Hype Cycle:  Trigger → Peak → Trough → Slope → Plateau
```

對應到 Adopter Curve：
- Trigger = Innovators
- Peak（過度期望） = Early Adopters 末期（**這正是 chasm 之前**）
- **Trough（幻滅谷）** = **Chasm**（Moore 的 chasm 與 Gartner trough **概念同構**）
- Slope = Early Majority
- Plateau = Late Majority + Laggards

整合：**Moore 的 chasm = Gartner 的 trough = PLC 上看不見的死亡谷**。

## 應用案例：醫療 AI 廠商在哪個位置

EBM / 中型醫療 AI 廠商可用本框架自我定位：^[inferred — Jason 個人延伸]

| 廠商 | Stage-Gate | PLC | Adopter | 真實位置 |
|---|---|---|---|---|
| 早期新創 | Implementation | (未上市) | — | 燒 funding 期 |
| 中早期 | Selective deployment | Introduction | Innovators（KOL 醫院） | 看似成功但 chasm 在前 |
| **中期（最危險）** | Market expansion | Growth 早期 / **chasm** | Early Adopters → 卡住 | **多數醫療 AI 廠商死在這** |
| 中後期 | Post-launch | Growth | Early Majority | 進到 reimbursement + PACS 整合 |
| 後期 | Post-launch | Maturity | Late Majority | Defense + acquisition target |

實務建議：醫療 AI 廠商若已過 Stage-Gate 與 Introduction，但仍只有 Innovators + Early Adopters 客戶 → 警訊：可能正在 chasm。對策見 [[concepts/adopter-categorization]]「跨 chasm 的優先動作」。

## 三套模型該何時用

| 場景 | 該用哪套 |
|---|---|
| 評估「現在該不該繼續投資」 | Stage-Gate 的 gate validation |
| 評估「銷售下行該收割還是再投資」 | PLC 的階段判斷 |
| 評估「下一批客戶在哪、怎麼接觸」 | Adopter Curve + Chasm |
| 評估「emerging tech 的時序預期」 | Gartner Hype Cycle（疊加） |
| **整體產品歷程地圖** | 本文整合的三向座標 |

## Counter-arguments

- **三模型整合過度簡化**：實務中產品歷程混亂，不會這麼整齊對齊。^[ambiguous]
- **數位時代曲線壓縮**：TikTok 在 2-3 年內走完三模型，速度遠超 Kotler 假設。^[ambiguous]
- **平台型產品的時序非線性**：Amazon / Google 不斷推新服務，每個服務有自己的歷程，整體無單一時序。^[ambiguous]
- **三模型都是 ex-post 觀察**：你能 ex-ante 知道現在在哪嗎？實務 PM 經常誤判位置。^[inferred]

## Jason 個人立場

立場 confidence: **medium**

**較強的立場**：三模型確實**可以對齊**，且對齊後給出比單一模型更完整的圖像。

**較弱的立場**：對齊後的具體階段劃分（Selective deployment = Introduction = Innovators）有過度簡化嫌疑，實務需要結合產業特性微調。

**最強的立場**：**識別自己在 chasm 中** 是這個整合視角的最大實用價值 — PLC 看不到 chasm、Adopter Curve 看得到。

## Related

- [[concepts/product-life-cycle]] — 銷售時序視角
- [[concepts/stage-gate-framework]] — 研發內部視角
- [[concepts/adopter-categorization]] — 客戶採用視角
- [[concepts/product-market-growth-framework]] — 4 象限策略視角（不是時序但互補）
- [[concepts/disruptive-innovation]] — 新替代品出現的 decline 機制
- [[references/kotler-keller-chernev-marketing-management-16e]]
