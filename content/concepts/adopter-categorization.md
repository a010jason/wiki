---
title: Adopter Categorization (Rogers 採用者 5 類)
type: concept
domain: marketing
tags: [adopter-categorization, diffusion-of-innovations, Rogers, innovators, early-adopters, chasm, kotler, mgmt]
aliases: [adopter categorization, diffusion curve, Rogers' 5 categories, innovators, early adopters, early majority, late majority, laggards]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch18
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Kotler 16e Ch18 Figure 18.4（沿用 Everett Rogers 1962《Diffusion of Innovations》）的採用者 5 類 — Innovators 2.5%、Early Adopters 13%、Early Majority 34%、Late Majority 34%、Laggards 16%。是進入 [[concepts/product-life-cycle]] 後的客戶面時序模型，補足 PLC 的銷售曲線視角。Geoffrey Moore 後續加入「Chasm」概念解釋 Early Adopters → Early Majority 的高失敗率。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.80
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Adopter Categorization

## What It Is

Kotler 16e Ch18 Figure 18.4 — 創新採用者的時間分佈：^[extracted Ch18 Figure 18.4 p.26]

```
%採用 ▲
      │                                  ┌──────────────────────────────┐
      │                                  │   Late Majority │ Laggards   │
      │                ┌─────────────────┤      34%        │   16%      │
      │                │   Early Majority│                 │            │
      │                │       34%       │                 │            │
      │     ┌──────────┤                 │                 │            │
      │     │ Early    │                 │                 │            │
      │     │ Adopters │                 │                 │            │
      │     │   13%    │                 │                 │            │
      │  ┌──┤          │                 │                 │            │
      │  │I │          │                 │                 │            │
      │  │2.5         │                 │                 │            │
      └──┴──┴──────────┴─────────────────┴─────────────────┴────────────→ Time
```

來源：**Everett M. Rogers《Diffusion of Innovations》1962**。Kotler 16e Figure 18.4 直接引用。^[inferred — 經典文獻]

## 5 類採用者特徵

| 類別 | % | 特徵 |
|---|---|---|
| **Innovators**（創新者） | 2.5% | 願冒風險、追新、收入高、教育高、社交圈外向 |
| **Early Adopters**（早期採用者） | 13% | 意見領袖、受尊敬、深思熟慮但仍願嘗試 |
| **Early Majority**（早期多數） | 34% | 跟隨意見領袖、實用主義、不冒險 |
| **Late Majority**（晚期多數） | 34% | 懷疑、等多數人用了才用、價格敏感 |
| **Laggards**（落伍者） | 16% | 守舊、被傳統綁住、最後才用 |

## 與 PLC 的對應

PLC 的 4 階段對應到採用曲線的 5 類：^[inferred — 兩理論整合]

| PLC | 主要客戶 |
|---|---|
| Introduction | Innovators + Early Adopters |
| Growth | Early Majority |
| Maturity | Late Majority |
| Decline | Laggards |

意涵：產品團隊應**先理解現在賣給誰**，才能設計對應的行銷組合。^[inferred]

## Geoffrey Moore 的「Chasm」延伸

Rogers 原版假設**採用曲線連續**，但 Geoffrey Moore（《Crossing the Chasm》1991）指出在 Early Adopters → Early Majority 之間有一道「**鴻溝**（chasm）」：^[inferred — 廣為人知的擴展，Kotler 16e 未必直接引用但業界常用]

```
                                  ✕ CHASM ✕
                                     │
    Innovators │ Early Adopters    Early Majority │ Late Majority │ Laggards
      Vision         Vision    ←──── Pragmatist ────→
      driven         driven         Practical
                                    Reference-based
```

關鍵差異：
- Innovators + Early Adopters 是 **vision-driven**（願意冒險換大利益）
- Early Majority 是 **pragmatist**（要看 reference customer、要 whole product）

Chasm 意涵：很多新創公司在 Early Adopters 階段看似成功（早期客戶 + media buzz），但跨不到 Early Majority 就死掉 — 因為兩群客戶要的東西**根本不同**。

## 跨 Chasm 的策略

Moore 提出：^[inferred — 業界共識]
- **Bowling pin strategy**：先攻一個 vertical 拿到「全套解決方案」+ reference customers，再橫向擴張
- **Whole product**：Early Majority 要的不是技術，是「我用了能解決完整問題」— 包括諮詢、訓練、整合、保固
- **Reference-able customers**：3-5 個同產業客戶證實 ROI，pragmatist 才會跟進

## Adopter Categorization 在醫療場景

醫療 AI 的採用曲線扭曲：^[inferred — Jason 個人延伸]

| Rogers 類別 | 醫療 AI 對應 |
|---|---|
| Innovators | 研究型醫學中心、AI lab 醫師、論文 driven |
| Early Adopters | KOL 醫師、學會理事、影像科主任 |
| **CHASM** | **這道鴻溝在醫療特別寬** — 因為 Early Majority 要的是法規 + reimbursement + IT 整合 + 訓練 |
| Early Majority | 區域醫院影像科、有 IT 支援的中型醫院 |
| Late Majority | 地區醫院、診所、保守醫師 |
| Laggards | 偏遠地區、老醫師、抗拒科技者 |

意涵：醫療 AI 廠商在 Early Adopters 階段（KOL 機構）取得成功**不代表 product-market fit**。要過 chasm 必須：
1. 累積**至少 3 個有 reimbursement 的 reference 醫院**
2. 通過**主要 PACS 廠商**的整合認證
3. 有**完整 onboarding + training package**（不只賣模型）

教師批註提到 Bird electric scooters 案例討論「狂潮 vs 趨勢、PLC 階段判斷」— 也是 chasm 判斷的延伸練習。^[inferred from instructor annotation Ch17 p.26]

## Source 反例 / 質疑

- **比例固定 vs 產業差異**：2.5% / 13% / 34% / 34% / 16% 是 Rogers 觀察農業創新的數字；在不同產業比例可能差很多。^[inferred]
- **採用速率非常數**：曲線形狀（陡 or 緩）隨產品 vary，但 Rogers 模型給單一形狀。^[inferred]
- **多次採用（re-adoption）忽略**：產品迭代下，同一人可能多次「採用」新版；單次採用模型過簡。^[inferred]
- **數位產品的採用曲線壓縮**：TikTok 在 2-3 年內走完曲線，與傳統科技 10-20 年完全不同。^[inferred]

## Jason 觀察：跨 chasm 的優先動作

EBM / 中型醫療 AI 廠商若已過 Innovators + Early Adopters 階段、卡在 chasm：^[inferred — Jason 個人延伸]

1. **不要再追論文發表**（給 Innovators 看的）— 改成做 reimbursement case study
2. **不要追新 modality 拓展**（給 Early Adopters 看的）— 改成做 PACS / EMR 整合
3. **不要追 KOL endorsement**（已過）— 改成做 reference hospital 系統化 ROI report
4. **不要追 features**（功能差異化）— 改成做 whole product（含 training、support、SLA）

## Related

- [[concepts/product-life-cycle]] — PLC 是銷售面、adopter curve 是客戶面，互補
- [[concepts/stage-gate-framework]] — NPD 完成後進入採用曲線
- [[concepts/disruptive-innovation]] — Christensen 的 disruption 模型 + Rogers 的採用曲線結合
- [[concepts/customer-persona]] — 不同採用者類別需設計不同 persona
- [[concepts/STP-framework]] — Targeting 應對應採用曲線的當前位置
- [[references/kotler-keller-chernev-marketing-management-16e]]
