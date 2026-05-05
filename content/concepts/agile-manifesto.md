---
title: Agile Manifesto（敏捷軟體開發宣言）
type: concept
domain: mgmt
tags: [agile, software-development, mgmt]
aliases: [敏捷軟體開發宣言, Manifesto for Agile Software Development, 2001 Agile Manifesto]
sources:
  - lecture:2023-08-20-溫金豐-敏捷組織與敏捷方法
  - https://agilemanifesto.org/
created: 2026-05-05
updated: 2026-05-05
summary: >-
  2001 年 17 位軟體開發者在猶他州雪鳥度假村簽署的宣言，4 條價值觀＋12 條原則。是 agile 運動的源頭文件，後續 agile transformation 的精神錨點。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Agile Manifesto（敏捷軟體開發宣言）

## 4 條核心價值

> 藉由親自並協助他人進行軟體開發，我們致力於發掘更優良的軟體開發方法。透過這樣的努力，我們建立以下價值觀：

| 重於 | |
|---|---|
| **個人與互動** | 流程與工具 |
| **可用的軟體** | 詳盡的文件 |
| **客戶合作** | 合約協商 |
| **回應變化** | 遵循計劃 |

> 也就是說，雖然右側項目有其價值，但我們更重視左側項目。^[extracted]

關鍵：**右側不是壞事**，只是左側更重要。後人常誤讀成「不要文件、不要計劃」，這是對宣言的扭曲。^[inferred]

## 客戶合作 vs 合約協商 — Jason 邊註

> 客戶聲音情緒 → 著重不認識零件 / 短時間找比較

宣言裡「客戶合作 重於 合約協商」這條對 B2B 軟體尤其有張力：^[inferred]
- B2B 客戶可能合約簽完就不太理你 → 怎麼「合作」？
- 醫療等強合約導向產業 → 合約協商環節很重，跳過會踩雷

→ 不能直接照搬到所有產業，特別是 [[concepts/agile-organization]] 法則 1（聚焦顧客）所言「B2B 沒內部顧客」的問題。

## 與 agile organization 的關係

Manifesto 本身**只談軟體開發方法**，但 [[concepts/agile-organization]] 把這套思維**拉到組織層級**（Denning 2018 等）。延伸過程出現：^[inferred]
- 拉伸：軟體 → 整個組織運作
- 風險：軟體開發的特性（試錯成本低、可分割、迭代式）不一定遷移得到實體製造、醫療、財務等

## 12 條原則（暫不全列）

宣言除 4 條價值觀，還有 12 條原則（最高優先是早期持續交付有價值的軟體、歡迎變更需求、定期反思並調整等）。完整列表見官網 https://agilemanifesto.org/principles.html ^[extracted]

## Related

- [[concepts/agile-organization]] —— 把宣言精神拉到組織層級
- [[concepts/scrum-method]] —— 早期實踐宣言的具體方法
- [[concepts/post-bureaucratic-mindset]] —— 思維基礎

## Sources

- 原文網站 agilemanifesto.org（17 位簽署者）
- [[entities/wen-jin-feng]] 2023/8/20 課程引述
