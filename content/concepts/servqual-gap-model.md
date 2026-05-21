---
title: SERVQUAL Gap Model (Parasuraman, Zeithaml, Berry, 1985)
type: concept
domain: marketing
tags: [servqual, service-quality, gap-model, parasuraman, zeithaml, berry, kotler, mgmt]
aliases: [SERVQUAL, Gap Theory, 5-gap model, P-Z-B model, SQ = P - E]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch09
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Parasuraman、Zeithaml、Berry 1985 提出的服務品質模型，Kotler 16e Ch09 採用為服務品質衡量框架。核心公式 SQ = P − E（Perceived 減 Expected）；五個 gap 描述服務品質失敗的可能位置（從管理層認知偏差到第一線執行）。是 [[concepts/service-marketing-4Is]] Variability 特徵的衡量工具，也是 [[concepts/service-marketing-triangle]] 失靈時的診斷地圖。
provenance:
  extracted: 0.80
  inferred: 0.15
  ambiguous: 0.05
base_confidence: 0.75
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# SERVQUAL Gap Model

## What It Is

SERVQUAL（**Service Quality**）是 Parasuraman / Zeithaml / Berry 1985 提出的服務品質衡量模型。Kotler 16e Ch09 採用其 5-gap 框架診斷服務失敗位置。^[extracted Ch09 p.27]

核心公式：

```
SQ (Service Quality) = P (Perceived service) − E (Expected service)

SQ > 0  → 滿意（perception 超越期望）
SQ = 0  → 達標
SQ < 0  → 不滿意（perception 低於期望）
```

意涵：服務品質**不是絕對量**，是**相對於客戶期望**的差值。同樣的服務水準，期望高的客戶會不滿，期望低的客戶會驚喜。

## 5 Gap 框架

服務品質失敗的可能 gap 位置：^[extracted Ch09 p.27]

| Gap | 失敗位置 | 描述 |
|---|---|---|
| **GAP 1** | 管理層 ↔ 客戶期望 | 管理層對「客戶真正想要什麼」認知偏差 — Kotler 認為這是**最大根因** |
| **GAP 2** | 管理層認知 ↔ 服務品質規格 | 管理層知道客戶要什麼，但寫不出可執行的服務規格 |
| **GAP 3** | 服務品質規格 ↔ 實際服務交付 | SOP 寫好了，但員工執行不出來（訓練 / 動機問題） |
| **GAP 4** | 服務交付 ↔ 對外溝通 | 廣告承諾 > 實際交付 → 客戶失望 |
| **GAP 5** | 期望服務 ↔ 感知服務 | 上述 1-4 累積到客戶端的最終差距 |

每個 gap 都對應**不同的修補手段**：
- GAP 1 → marketing research、VoC、IPA
- GAP 2 → service design、blueprint
- GAP 3 → training、empowerment、internal marketing
- GAP 4 → 對外溝通管控、不要 overpromise
- GAP 5 → 整合上面所有

## 期望的形成

客戶的 Expected service 來自四個來源：^[extracted Ch09 — 經典 SERVQUAL 文獻]

1. **口碑**（word of mouth）
2. **個人需求**（personal needs）
3. **過去經驗**（past experience）
4. **對外溝通**（external communications — 廣告、PR）

意涵：**廣告管理 = 期望管理**。承諾太多 → GAP 4 必然擴大。Kotler 認為「underpromise, overdeliver」是 service brand 的鐵律。^[inferred Ch09]

## 五個服務品質維度（RATER）

SERVQUAL 原始量表（22 項問卷）衡量五維度：^[inferred — 經典 SERVQUAL，Kotler 16e 簡述]

| 維度 | 內容 |
|---|---|
| **Reliability** | 可靠地、準確地提供承諾的服務 |
| **Assurance** | 員工知識與禮貌、傳達信任感 |
| **Tangibles** | 設施、設備、員工儀容、印刷品 |
| **Empathy** | 個人化關懷、了解客戶 |
| **Responsiveness** | 願意幫忙、提供即時服務 |

Reliability 通常是客戶最看重的維度（research 結果）。

## Importance-Performance Analysis (IPA)

SERVQUAL 衍生工具：把每個服務屬性繪在 2x2 矩陣：^[extracted Ch09 p.22]

```
              Performance HIGH
                    │
    Keep up the     │    Possible
    good work       │    overkill
                    │
    HIGH ─────────────────── LOW Importance
                    │
    Concentrate     │    Low
    here (急迫!)    │    priority
                    │
              Performance LOW
```

意涵：診斷「該優先補哪一塊」的工具。Butterball Premium Onions 案例。^[extracted Ch09 p.22]

教師批註：「**顧客心聲（VoC）** / **顧客重要性—績效（IPA）**」— 強調這兩個工具的關鍵性。^[inferred from instructor annotation Ch09 p.22]

## 教師批註：與 TSMC 品質管理連動

教師批註：「**SQ = P − E → Expect 和 Perceive → TSMC 品質管理 vs 顧客期望—體驗**」— 教師主張**製造業的品質管理思維**（Six Sigma、SPC）可移轉到服務品質的測量。^[inferred from instructor annotation Ch09 p.27]

意涵：把 SERVQUAL 當作服務業的 Six Sigma 入口，量化「平均期望 − 平均感知」的標準差，控制服務品質的離散度（[[concepts/service-marketing-4Is]] Variability 的根本對策）。

## Source 反例 / 質疑

- **GAP 1 認知偏差怎麼量？** — Kotler 沒給操作方法。Marketing research 雖能逼近，但 management 的隱性偏見難測。^[ambiguous]
- **SERVQUAL 五維度的跨產業普適性** — 學術界爭議：在 IT 服務、醫療、教育，五維度的權重是否一致？^[inferred — 學術文獻爭議]
- **P − E 的測量先後順序問題** — 同一張問卷裡先問期望再問感知，會產生 anchoring bias。^[inferred — 方法論爭議]
- **數位通路的 SERVQUAL 失效**：純線上服務（app）的「Inseparability」與「Tangibles」維度退化，五維度需要重新設計。^[inferred]

## Jason 觀察：醫療 AI 的 SERVQUAL gap

EBM PACS / AI deployment 場景下：^[inferred — Jason 個人延伸]

| Gap | 醫療 AI 對應的失敗 |
|---|---|
| GAP 1 | PM 沒去現場看醫師工作流，假設「敏感度 95% 就贏了」（實則醫師更在意 turn-around time） |
| GAP 2 | 知道醫師要快，但寫不出 SLA |
| GAP 3 | SLA 寫了，但 IT 部署沒做好 GPU 資源管理，inference latency 飆 |
| GAP 4 | 廣告講「seamless 整合 PACS」，實際安裝 3 個月 |
| GAP 5 | 醫師對 AI 失去信心 → KOL 不再 endorsement |

→ 醫療 AI PM 該定期跑 SERVQUAL 內部審計，特別是 GAP 1（去看現場）與 GAP 4（管廣告承諾）。

## Related

- [[concepts/service-marketing-4Is]] — Variability 衍生的測量需求
- [[concepts/service-marketing-triangle]] — 三角失靈 → SERVQUAL gap
- [[concepts/marketing-dashboard]] — Customer pathway 中可嵌入 SERVQUAL
- [[concepts/marketing-research-process]] — GAP 1 的修補工具
- [[references/kotler-keller-chernev-marketing-management-16e]]
