---
title: Service Blueprint (服務藍圖)
type: concept
domain: marketing
tags: [service-blueprint, service-design, customer-journey, kotler, mgmt]
aliases: [service blueprint, blueprinting, line of interaction, line of visibility]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch09
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kotler 16e Ch09 Figure 9.1 介紹的服務流程視覺化工具 — 把客戶旅程與後台運營在同張圖上展開，標出 line of interaction（客戶可見/不可見的邊界）、line of visibility（前台/後台邊界）、line of internal interaction（內部互動邊界）。是服務 [[concepts/service-marketing-4Is]] Inseparability 與 Variability 的設計工具，也是 [[concepts/service-marketing-triangle]] Interactive marketing 的 SOP 來源。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.75
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Service Blueprint

## What It Is

服務藍圖 = 把整個服務流程畫成**橫向 swim lane**，標出**三條垂直分界線**，讓 service designer 能看到每個 touchpoint 的前後台關係。^[extracted Ch09 p.12]

Kotler 16e Ch09 Figure 9.1 範例：**過夜旅館住宿（Overnight Hotel Stay）藍圖** — 從客戶到達 lobby、check-in、進房、用餐、check-out 全程展開。^[extracted Ch09 p.12]

## 三條分界線

```
┌──────────────────────────────────────────────┐
│  Customer Actions     （客戶看得到也做的）   │
├──────────────── Line of Interaction ──────────┤
│  Onstage Employee    （員工前台行為）        │
├──────────────── Line of Visibility ───────────┤
│  Backstage Employee  （員工後台行為）        │
├──────────────── Line of Internal Interaction ─┤
│  Support Processes   （IT / 物流 / 供應鏈）   │
└──────────────────────────────────────────────┘
              時間軸 →
```

| 分界線 | 上方 / 下方 |
|---|---|
| **Line of Interaction**（互動線） | 上：客戶行為；下：員工前台行為 |
| **Line of Visibility**（可見線） | 上：客戶看得到的員工行為；下：客戶看不到的後台行為 |
| **Line of Internal Interaction**（內部互動線） | 上：服務員工；下：支援系統（IT、HR、供應鏈） |

## 用途

藍圖是**服務 SOP 的可視化版本**，用途包括：^[inferred Ch09]

1. **失敗點偵測**：哪個 touchpoint 最易出錯（Fail Point F1, F2...）
2. **等待時間設計**：客戶可見區的等待 vs 後台處理時間
3. **物理證據（Physical Evidence）標註**：每個 touchpoint 客戶能看到的「有形化」線索 — 對應 [[concepts/service-marketing-4Is]] Intangibility 的有形化策略
4. **訓練教材**：員工知道整個系統，不只自己那一段
5. **重設計起點**：先畫 as-is，再畫 to-be，識別 gap

## Service Blueprinting vs Customer Journey Map

兩者常被混用，但有差異：^[inferred — 業界共識]

| 比較項 | Service Blueprint | Customer Journey Map |
|---|---|---|
| 視角 | 組織內部 + 客戶 | 純客戶視角 |
| 後台展示 | 有（line of visibility 之下） | 通常沒有 |
| 主要產出 | 流程 SOP、失敗點修補 | 情感曲線、痛點識別 |
| 對應 marketing 三角 | Interactive + Internal | External |

意涵：兩者互補，但 blueprint 更**內部 operational**、journey map 更**外部 experiential**。

## Source 反例 / 質疑

- **靜態圖無法捕捉變化**：服務隨時間調整，blueprint 過幾個月就過時。^[inferred]
- **複雜服務的可讀性**：醫院、機場這類超複雜服務，blueprint 畫到後來變成蜘蛛網。^[inferred]
- **數位服務的 line 模糊**：純線上服務的「line of visibility」幾乎消失（用戶看不到後台 API 是常識）；blueprint 的三線分法需要重新定義。^[inferred — Jason 質疑]

## Jason 觀察：醫療 AI 服務藍圖

EBM PACS / AI deployment 的 blueprint 範例：^[inferred — Jason 個人延伸]

```
Customer Actions:    [醫師打開 PACS] → [點開影像] → [看到 AI 標註] → [接受/修改] → [簽報告]
─── Interaction ─────────────────────────────────────────────────────
Onstage Employee:    （第一線：技術支援 hotline，平常隱形）
─── Visibility ──────────────────────────────────────────────────────
Backstage Employee:  PACS admin、AI 模型監控
─── Internal Interaction ────────────────────────────────────────────
Support Processes:   GPU 推論服務、DICOM gateway、模型 update CI/CD
```

**Fail Points 標註：**
- F1：DICOM gateway 解析失敗 → AI 沒結果
- F2：GPU 排隊太長 → latency 飆
- F3：模型偏見導致 false positive → 醫師失信
- F4：UI 標註位置偏移 → 醫師誤判

醫療 AI PM 的服務 blueprint **比一般 SaaS 複雜一層**：因為「Customer Actions」橫跨醫師、技師、IT 三角色，每個角色都有自己的 blueprint。

## Related

- [[concepts/service-marketing-4Is]] — Intangibility 有形化、Variability SOP 化的設計起點
- [[concepts/service-marketing-triangle]] — Interactive marketing 的 SOP 來源
- [[concepts/servqual-gap-model]] — GAP 2（規格 ↔ 交付）的修補工具
- [[references/kotler-keller-chernev-marketing-management-16e]]
