---
title: 人力資源規劃與供需預測（HRP）
type: concept
domain: mgmt
tags: [HRM, HR-planning, workforce-planning, forecasting, succession-planning, mgmt]
aliases: [HRP, workforce-forecasting, manpower-planning]
sources:
  - id: NYCU-EMBA-HRM-Lecture-0504-Ch3-4
    type: lecture-slide
    rel_path: 組織與人力資源管理/0504-講義.pdf.pdf
    pages: 15
    sha256: 30a0c58723050987eecfc3735c514d0bb94fbf28be4eee1b3472554af07a917f
    ingested_commit: pending
created: 2026-05-21
updated: 2026-05-21
summary: >-
  人力資源規劃（HRP）是依企業成長與發展需要事先預測人力需求 + 供給並設計對策的流程。預測方法分判斷性（管理估計 / 德爾菲 / 情境分析）與數學性兩派；對策視短缺 / 過剩走不同路徑（多能工 / 外籍工人 / 提前退休 / 遇缺不補等）。
provenance:
  extracted: 0.8
  inferred: 0.2
  ambiguous: 0.0
base_confidence: 0.65
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# 人力資源規劃與供需預測

## 一句話

HRP = **預測企業未來「需要多少人」與「能拿到多少人」之間的 gap，並設計補救方案**。預測對了規劃才有意義。

## 流程

```
組織目標
   ↓
需求預測（需要多少人？）  ←→  供給預測（能拿到多少人？）
                ↓
            供需關聯
       ↓                ↓
  短缺對策            過剩對策
```

^[extracted]

教師批註指出：「**規劃的基礎是正確的預測**」「企業都有目標？沒有目標又如何？」— 暗示如果上層策略不清，HRP 整個流程的 input 就有問題。^[inferred from instructor annotation]

## 預測方法二分法

### 判斷性預測（qualitative）

| 方法 | 機制 | 適用 |
|---|---|---|
| **管理估計**（management forecast） | 直接由部門主管估計 | 小組織、變化快、無歷史數據 |
| **德爾菲法**（Delphi method） | 多輪匿名專家估計 + 收斂 | 需 cross-functional 整合 |
| **情境分析**（scenario analysis） | 多套未來情境下的人力需求 | 高度不確定環境（產業轉型） |

^[extracted]

### 數學性預測（quantitative）

source 未詳細列舉，但業界常見：

- **比率分析**（ratio analysis）— 例如每 $1M 業績配 X 個業務
- **趨勢外推**（trend extrapolation）— 歷史人力與業績的線性回歸
- **計量模型**（econometric model）— 含產業變數的多變量模型

^[inferred]

## 內部供給分析工具

教師補充列出三個內部盤點工具：

| 工具 | 用途 |
|---|---|
| **人力置換圖**（replacement chart） | 短期接班視覺化 — 每個關鍵職位有 backup A/B/C |
| **人才檔案**（skills inventory） | 中長期人才資料庫 — 員工技能、語言、證照、潛能 |
| **接班計畫**（succession plan） | 高階關鍵職位的多年培養路徑 — 含**測量評估、能力缺口分析、量身訂作的發展計畫** |

^[extracted]

接班計畫的設計暗含**人力資本投資理論**（human capital investment）— 把人才視為可累積、可培育的投資標的。^[inferred]

## 外部供給影響因素

教師補充列出三個影響外部供給的結構性因素：

- **失業率** — 高失業 = 易招、薪資壓低；低失業 = 難招、薪資談判力提升
- **人口結構** — 出生率、勞動參與率、教育程度分布（[[concepts/HR-future-trends-five-axes]] 詳述）
- **勞工價值觀改變** — Y/Z 世代的工作意義訴求改變傳統招募論述

^[extracted]

## 短缺對策 vs 過剩對策

| 方向 | 對策 |
|---|---|
| **短缺** | 短期人員 / 互相支援 / 延後退休 / 外籍工人 / **多能工培養**（最值得做的長期解） |
| **過剩** | 組織瘦身 / 提前退休 / **遇缺不補**（最溫和） / 減時 / 進修 |

^[extracted]

**多能工培養 vs 遇缺不補**是兩個方向最值得單獨記的對策 —— 前者是短缺時的能力建設、後者是過剩時的低痛裁員。其他多半是 short-term tactical 措施。^[inferred]

## 景氣循環的挑戰

教師批註 p.29 指出：**「不同時期（景氣循環）需要不同應對」** — HRP 不是一次性規劃，必須隨景氣 update 預測。^[inferred from instructor annotation]

- 景氣上升：以**多能工 + 延退**準備未來擴張
- 景氣下降：以**遇缺不補 + 進修**保留 talent 但減低薪資成本

## 對接其他框架

- **vs [[concepts/SHRM-three-perspectives]]**：HRP 是 SHRM contingency 觀點的具體應用 — 把外部環境 + 內部策略翻成具體的人力需求數字
- **vs [[concepts/G-STIC-framework]]** (Kotler)：HRP 的「目標 → 需求預測 → 對策」流程是 G-STIC 的 HR 版
- **vs [[concepts/balanced-scorecard]]**：BSC 的 Learning & Growth 維度 = HRP 的 input
- **vs [[concepts/forced-ranking]]**：forced ranking 是過剩對策中「精緻化裁員」的特殊做法

## Open Questions

- Source 未提：數學性預測的具體公式 / 案例（教科書應該有但 lecture 只給名稱）
- Source 未提：HR Analytics / People Analytics 在現代 HRP 的應用（[[concepts/HR-future-trends-five-axes]] 暗示但 Ch4 未展開）
- 接班計畫在台灣家族企業的特殊性 — source 未提

## Related

- [[concepts/SHRM-three-perspectives]] — Ch3 上游
- [[concepts/HR-future-trends-five-axes]] — Ch12 對人口結構衝擊的延伸
- [[concepts/forced-ranking]] — 過剩對策的延伸
- [[references/wen-2023-HRM-textbook]] — Ch4 source
