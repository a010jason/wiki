---
title: Scientific Method for OB（OB 的科學方法）
type: concept
domain: mgmt
tags: [scientific-method, OB, research, mgmt]
aliases: [How do we know things about OB, OB 知識方法]
sources:
  - textbook:Colquitt-OB-Ch1-McGraw-Hill-2017
created: 2026-05-05
updated: 2026-05-05
summary: >-
  OB 學科如何產生知識：不靠經驗 / 直覺 / 權威，靠科學循環（Theory → Hypothesis → Data → Verification → Theory）。實證主要透過相關係數（correlation coefficient）。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.32
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Scientific Method for OB

## 四種「方法」

人類獲取「知識」的途徑（Methods of Knowing）：^[extracted]

| 方法 | 說明 | 風險 |
|---|---|---|
| **Experience（經驗）** | 個人或他人的親身經歷 | 樣本小、選擇偏誤 |
| **Intuition（直覺）** | 「感覺」出來的判斷 | 認知偏誤 |
| **Authority（權威）** | 因為某某老師 / 大師說的 | 權威也會錯 |
| **Science（科學）** | 系統性、可重複、可被否證 | 慢、貴 |

OB 學科**選 Science** —— 教科書知識多數來自科學研究，而非經驗 / 直覺 / 權威。^[extracted]

## 科學循環

```
       ┌──────→  Theory  ──────┐
       │                        │
  Verification              Hypotheses
       │                        │
       └──────  Data  ←─────────┘
```

四個節點：^[extracted]

1. **Theory** —— 一組（口頭或符號）斷言，說明變數**怎麼** + **為什麼**相關，以及在**什麼條件下**該相關 / 不該相關。
   例：Affective Event Theory（情感事件理論）

2. **Hypotheses** —— 從理論推出的可檢驗陳述
   例：「社會性表彰行為與工作績效有正相關」

3. **Data** —— 蒐集可測量變數的數據

4. **Verification** —— 用統計方法（如相關係數）檢驗 hypothesis 是否成立 → 結果回饋修正 Theory

## ⚠️ Correlation ≠ Causation

**重要免責**：相關係數本身不證明因果。教科書（Colquitt et al. Ch1, p.74）強調：^[extracted]

要證明 X 因果地導致 Y，需要三個條件**同時成立**：
1. **Correlation** — X 與 Y 有相關
2. **Temporal precedence** — X **在 Y 之前**發生
3. **Elimination of alternative explanations** — 排除其他可能解釋（特別是混淆變數 confounding variables）

經典反例：冰淇淋銷量 vs 鯊魚攻擊次數 高度相關 — 但是因為**夏天**這個共同混淆變數，不是冰淇淋導致鯊魚攻擊。^[extracted]

→ OB 文獻看到「X 與 Y 顯著相關」時要警覺：**這只是條件 1 達成**，2 和 3 未必。^[inferred]

## Correlation Coefficient（相關係數）

OB 實證最常用的工具：^[extracted]

- **r = +1.00** —— 完全正相關（X 增 Y 也增）
- **r = 0** —— 無相關
- **r = −1.00** —— 完全負相關（X 增 Y 減）

強度從散佈圖的緊密度判斷：**越緊密 = 越強相關**。

例（教科書）：Social Recognition Behaviors vs Job Performance
- (a) r = 1.00：點全在一條線上
- (b) r = 0.50：點有趨勢但散
- (c) r = 0.00：點隨機分布

## Meta-Analysis（多研究整合）

單一研究的相關係數有抽樣誤差。**Meta-analysis** 是把多個研究的相關係數**加權平均**，得到更穩健的估計。^[extracted]

Meta-analysis 是 OB 學科累積知識的關鍵工具：^[inferred]
- 單一研究：r = 0.32（n=200）— 訊號但不可靠
- 50 個研究的 meta-analysis：r = 0.28（n_total = 12,000）— 訊號可信很多

## Evidence-Based Management（EBM）

> Meta-analyses can form the foundation for **evidence-based management**—the use of scientific findings to inform management practice. ^[extracted]

對應醫學界的 evidence-based medicine。核心主張：^[inferred]
- 管理決策應該基於 systematic research（meta-analysis 結果），而非個別主管的「經驗 / 直覺 / 權威」
- 每個重要的人事決策前先問：「這條 practice 有 meta-analysis 支撐嗎？效果量多大？」

→ 但 EBM 在實務上落地不易（[[concepts/rule-of-one-eighth]] 解釋為什麼）。^[inferred]

## 限制與批判

OB 的科學方法有幾個侷限：^[inferred]

1. **無法做 RCT** —— 多數 OB 研究是 observational，因為你不能隨機分派員工的人格、文化背景
2. **公司之間異質性高** —— 在 Google 有效的不見得在台積電有效
3. **效果量通常小** —— OB 變數的 R² 經常 < 0.2，意味很多變異未解釋
4. **Replication crisis** —— 心理學界自 2010s 以來大量發現重要研究無法重複；OB 受牽連

## 對讀者的意涵

讀 OB 文獻時要問：^[inferred]
1. 這是來自 Science 還是 Experience / Intuition / Authority？
2. 樣本是什麼？產業 / 國別 / 規模 / 年代？
3. 效果量多大？r = 0.1 還是 0.5？
4. 有 replication 嗎？

## 與 wiki 的批判層連結

[[synthesis/critical-llm-wiki-three-step]] 的「質疑」步驟 Q3「來源可信度」與本頁的科學方法層級對應：^[inferred]
- ✅ tier 1 = peer-reviewed studies with replication
- ⚠️ tier 2 = single empirical study
- ⚠️ tier 3 = textbook synthesis (without primary source check)
- ❌ tier 4 = blog / consultant claim

## Related

- [[concepts/organizational-behavior]] —— OB 學科本身
- [[references/colquitt-OB-textbook]]
- [[synthesis/critical-llm-wiki-three-step]] —— 批判方法的對應層級

## Sources

- [[references/colquitt-OB-textbook]] —— McGraw-Hill OB Ch1
