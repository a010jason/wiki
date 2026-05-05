---
title: Porter's Five Forces（波特五力分析）
type: concept
domain: mgmt
tags: [Porter, five-forces, strategy, mgmt]
aliases: [Five Forces, 五力分析, Porter 五力]
sources:
  - textbook:Colquitt-OB-Ch1-McGraw-Hill-2017
created: 2026-05-05
updated: 2026-05-05
summary: >-
  Michael Porter 的 Industrial Organization 觀點工具：分析產業競爭強度的 5 個力量（既有競爭、新進入者、替代品、買方議價、賣方議價）。與 VRIO（內部 RBV）互補。
provenance:
  extracted: 0.8
  inferred: 0.18
  ambiguous: 0.02
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Porter's Five Forces

## 屬於 I/O Perspective

Industrial Organization (I/O) 觀點：**外部因素決定 performance 與 profit potential**。^[extracted] 與 Resource-Based View (RBV, [[concepts/VRIO-framework]]) 互補 —— 一個往外看產業結構，一個往內看公司資源。

## 五個力量

中間是「Rivalry Among Existing Competitors（既有競爭者間的競爭）」，四周圍是其他 4 個力：^[extracted]

```
                Threat of New Entrants
                         ↓
Bargaining Power  →  Rivalry Among   ←  Bargaining Power
   of Suppliers       Existing            of Buyers
                     Competitors
                         ↑
                Threat of Substitute Products
```

## 各力的決定因子

| 力 | 決定因子 |
|---|---|
| **Rivalry Among Existing Competitors** | 競爭者數量、多樣性、產業集中度、產業成長、品質差異、品牌忠誠、退出障礙、轉換成本 |
| **Threat of New Entrants** | 進入障礙、規模經濟、品牌忠誠、資本需求、累積經驗、政府政策、通路取得、轉換成本 |
| **Bargaining Power of Suppliers** | 供應商數量與規模、產品獨特性、自製替代能力 |
| **Bargaining Power of Buyers** | 客戶數量、訂單規模、競爭者差異、價格敏感度、自製能力、資訊充足度、轉換成本 |
| **Threat of Substitute Products** | 替代品數量、買方替換意願、相對價格效能、產品差異化感知、轉換成本 |

^[extracted]

## I/O vs RBV 的互補

實務上應同時做兩個分析：^[inferred]

| 視角 | 看哪 | 工具 |
|---|---|---|
| **I/O（外部）** | 產業結構是否吸引、能不能玩 | Porter Five Forces |
| **RBV（內部）** | 自己有沒有 sustained advantage | VRIO |

只看外部 → 進不利的產業也以為穩、看不見競爭對手的內部優勢
只看內部 → 自我陶醉、對市場結構變化反應慢

## 對 ebmtech 醫療資訊業的應用草稿

> 註：以下是把框架套到自己工作的 hypothetical 思考，未跟主管或同事驗證。^[ambiguous]

| 力 | 醫療資訊業（台灣）強度 |
|---|---|
| 既有競爭 | 中—Sectra / GE / Philips / EBM 等少數玩家，產業集中 |
| 新進入者 | 低—法規與認證高度進入障礙（ISO 13485、TFDA、HIPAA-equiv） |
| 供應商議價 | 中—硬體部分被 NVIDIA 等寡占牽制 |
| 買方議價 | 高—大醫院議價力強、健保壓力大 |
| 替代品 | 低—短期沒明顯替代，但「雲端 / SaaS PACS」可能是長線替代 |

→ 結構性看，**醫療資訊業仍是有保護的產業**，但「買方議價力高 + 雲端替代風險」是要長線觀察的兩條風險線。^[inferred]

## Related

- [[concepts/VRIO-framework]] —— RBV，互補視角
- [[concepts/organizational-behavior]] —— OB 在 RBV 找定位
- [[references/colquitt-OB-textbook]]

## Sources

- [[references/colquitt-OB-textbook]] —— McGraw-Hill OB Ch1 引述
- 原典：Porter, M. E. (1979). *How Competitive Forces Shape Strategy*. Harvard Business Review
