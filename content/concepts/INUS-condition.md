---
title: INUS Condition（必要但不充分的因果條件）
type: concept
domain: mgmt
tags: [concept, causality, philosophy-of-science, mackie, mgmt, strategy]
aliases: [INUS condition, INUS condition Mackie, Mackie causality, 必要但不充分條件]
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.75
  inferred: 0.20
  ambiguous: 0.05
base_confidence: 0.5
sources:
  - id: fighting-with-porter-lecture
    ref: '[[references/fighting-with-porter-lecture]]'
related:
  - '[[concepts/tautology-in-management-theory]]'
  - '[[concepts/falsifiability-popper]]'
  - 'causal inference vs correlation'
  - '[[concepts/causality-three-conditions]]'
  - '[[entities/Tang-Edwin-Yingzhang]]'
---

# INUS Condition

**J. L. Mackie (1965/1974) 哲學概念** — 因果關係的非充分必要結構分析。完整定義：

> **An Insufficient but Necessary part of a condition which is itself Unnecessary but Sufficient for the result**

縮寫即 **I-N-U-S**：
- **I**nsufficient（不充分）
- **N**ecessary（必要）
- 屬於一個 **U**nnecessary（不必要）
- 但 **S**ufficient（充分）的條件

唐瓔璋（[[references/fighting-with-porter-lecture|Fighting with Porter lecture]] slide 6）用此哲學概念**攻擊 Porter「差異化 → 競爭優勢」的充分條件謬誤**。^[teacher-annotation]

## 森林大火比喻（教師主例）

教師自創比喻：「**香煙蒂（競爭優勢）→ 森林大火（價值創造或企業成長）**」 ^[teacher-annotation]

引起森林大火的充分必要條件需要：

1. 有人抽煙
2. 抽煙附近的草木是乾燥易燃的
3. 抽煙者口袋正好有一包香煙和一盒火柴
4. 所有火柴頭是乾燥的
5. 抽煙附近沒有救火設備

**任一條件缺失，火災不會發生**。但**集合 1-5 不是唯一引發森林大火的方式**（也可能是雷擊 / 縱火 / 化學自燃）。

INUS 結構：
- 香煙蒂 **I**：本身不充分（一個煙蒂不夠）
- **N**：但必要（沒它這條 path 不成立）
- 屬於「煙蒂 + 乾燥 + 火柴 + 無救援」這個複合條件
- 該複合條件 **U**：不必要（其他 path 也可引發火災）
- 但 **S**：充分（湊齊就會火災）

## 對 Porter 的攻擊

教師主張：**Porter 把差異化當成競爭優勢的充分條件，但實際上差異化只是 INUS — 必要卻不充分**。^[teacher-annotation]

差異化（Porter Differentiation）作為 INUS：

| 角色 | 內涵 |
|---|---|
| I | 差異化本身不充分（光有差異化不夠贏） |
| N | 但是必要的小拼圖 |
| 在一個 unnecessary 但 sufficient 的條件組合中 | 還需要 organizational culture / routines / resource bundle / dynamic learning capability / causal ambiguity / strategic fit / strategic equifinality / contingency theory 等其他拼圖 |

教師配書封（slide 6）作為「**其他必要拼圖**」：
- Blue Ocean Strategy
- The Long Tail
- Innovator's Solution
- 虎與狐（郭台銘）
- 3% 的超越
- 再造宏碁

意義：「**差異化 + 一堆組織因素 + contextual fit**」整套湊齊才是充分條件；單獨差異化只是 INUS。

## 為什麼 INUS 對策略管理重要

### 1. 反「單因素戰略」迷思
- Porter「Differentiation 戰略」/ Barney「VRIN」/ Christensen「Disruptive Innovation」都隱含單因素 → 結果的論述
- INUS 框架強調：**真實因果是多因素 conjoint，不是 single-cause**

### 2. 對 case study 方法論的啟示
- 看到 Apple 成功 → 歸納「設計差異化」是成功原因 — **這是把 Apple 的 INUS condition 抓出一個放大成普世 sufficient cause**
- Mobileye / Booking / Marriott 各自的 INUS condition 不同
- 對應 [[synthesis/sampling-choice-shapes-results]] — sample 選擇塑造結論

### 3. 對 PM 工作的啟示（Jason 視角）^[inferred]
- 「為什麼這個 feature 成功？」 — 不是單一答案，是 INUS
- 「為什麼 EBM PACS AI 比競品好？」 — IP + 整合 + 客戶服務 + 品牌 + reimbursement code + 時機 等多因素 conjoint
- 「為什麼 ChatGPT 成功而 Bard 失敗？」 — 不該歸於單一技術或單一決策

### 4. 連結 [[concepts/tautology-in-management-theory|tautology critique]]
- Tautology 是定義循環錯誤（「持續優勢 = 持續優勢」）
- INUS 揭示是**多因素結構錯誤**（單一原因 vs 複合條件）
- 兩種錯誤可並存：Porter 命題同時是 tautology + 把 INUS 當 sufficient cause

## Mackie 原始論文

- John L. Mackie (1965). "Causes and Conditions". *American Philosophical Quarterly* 2(4): 245-264.
- Mackie (1974). *The Cement of the Universe: A Study of Causation*. Oxford University Press.

## 對其他學術領域的延伸

INUS 在哲學、社科、流行病學、計算機科學都有應用：

- **流行病學**：吸煙是肺癌的 INUS 條件之一（吸煙 + 基因 + 環境 + 時間）
- **法律**：因果關係判定（"but-for" test + proximate cause）
- **計算機科學**：fault tree analysis、redundancy 設計
- **社會科學**：QCA (Qualitative Comparative Analysis) 由 Ragin 1987 提出，與 INUS 同源

## Open Questions（待 wiki-challenge）

- **INUS 框架的實證應用**：策略管理 / PM 領域是否有系統性 INUS 分析的研究範例？^[ambiguous]
- **與 [[concepts/causality-three-conditions|因果三條件]] 的關係**：時序 + 共變 + 排除替代解釋 是因果推論的另一框架，INUS 是補完還是替代？^[inferred]
- **GenAI 時代 ML 模型的 INUS**：神經網絡的「emergent capability」是 INUS 還是 single dominant cause？^[inferred]
- **與 QCA (Ragin) 的關係**：QCA 是 INUS 的實證版本嗎？^[ambiguous]

## Related

- **概念**：[[concepts/tautology-in-management-theory]] / [[concepts/falsifiability-popper]] / causal inference vs correlation / [[concepts/causality-three-conditions]] / [[concepts/porters-generic-strategies]] / [[concepts/competitive-advantage]] / [[concepts/VRIO-framework]] / [[concepts/dynamic-capabilities]] / [[concepts/causal-ambiguity]]
- **Entity**：[[entities/Tang-Edwin-Yingzhang]] / John-Mackie（哲學家）
- **參考**：[[references/fighting-with-porter-lecture]] / Mackie 1965 / 1974（待建 reference）/ [[references/bhattacherjee-social-science-research]]
