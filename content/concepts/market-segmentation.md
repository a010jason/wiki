---
title: Market Segmentation (市場區隔)
type: concept
domain: marketing
tags: [segmentation, STP, marketing-strategy, kotler, mgmt]
aliases: [Market Segmentation, 市場區隔]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch06
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Kotler 16e Ch06 的市場區隔總論 — 把市場切成 well-defined slices 的工作。消費者市場四大變數族（demographic / geographic / behavioral / psychographic），B2B 市場五層切法。是 [[concepts/STP-framework]] 的 S。
provenance:
  extracted: 0.85
  inferred: 0.10
  ambiguous: 0.05
base_confidence: 0.80
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Market Segmentation

## What It Is

> Market segmentation = 把市場切成 well-defined slices 的工作。
> ^[extracted Ch06]

意涵：行銷者不能服務「所有人」，必須先把市場切片，再從中選 [[concepts/targeting]] 的目標群。Segmentation 是 [[concepts/STP-framework]] 的第一步。

## 消費者市場四大變數族

### 1. Demographic Segmentation

按可觀察的人口特徵切：^[extracted Ch06 p.24-27]

| 變數 | 例 |
|---|---|
| **Age** | 嬰兒 / 兒童 / 青少年 / 成人 / 老人 |
| **Life-cycle stage** | 單身 / 新婚 / 育兒 / 空巢 / 退休（重大事件造成需求轉折） |
| **Gender** | 男 / 女 / 非二元 |
| **Income** | 收入級距 |
| **Race / culture** | Hispanic / Asian / African American 等 |

範例：Gillette Venus（gender segmentation）— 女性拋棄式刮鬍刀。

### 2. Geographic Segmentation

按地理切：^[extracted Ch06 p.28-29]

- Nation / State / Region / County / City / Neighborhood

**進階：Geographic + Demographic 混合 = Nielsen Claritas' PRIZM**

PRIZM 用 zip code 切片，五維度：
- Education and affluence
- Family life cycle
- Urbanization
- Race and ethnicity
- Mobility

### 3. Behavioral Segmentation

按實際行為切（這是 CRM data 時代最強的切法）：^[extracted Ch06 p.30]

- **User status** — 非使用者 / 前使用者 / 潛在使用者 / 首次使用者 / 經常使用者
- **Usage rate** — 輕度 / 中度 / 重度使用
- **Buyer-readiness stage** — 不知道 / 知道 / 有興趣 / 想要 / 意圖購買 / 購買中
- **Loyalty status** — 死忠 / 偏好 / 切換型 / 不固定
- **Occasions** — 日常 / 特殊場合 / 季節性

### 4. Psychographic Segmentation

按心理特質、生活風格、價值觀切：^[extracted Ch06 p.31]

**主要工具：VALS-segmentation-system**

VALS（Values, Attitudes and Lifestyles）由 SRI International 開發，二維結構：
- **Primary Motivation** — Ideals（理想）/ Achievement（成就）/ Self-expression（自我表達）
- **Resources / Innovation** — 高 vs 低

八個 segments：Innovators / Thinkers / Achievers / Experiencers / Believers / Strivers / Makers / Survivors。

範例：Honda Element（針對 Experiencers）。

## B2B 市場五層切法

B2B segmentation 從外到內：^[extracted Ch06 p.32]

```
1. Demographic factors（行業、規模、地點）
   ↓
2. Operating variables（技術、使用狀態、客戶能力）
   ↓
3. Purchasing approaches（採購組織、權力結構、現有關係）
   ↓
4. Situational factors（緊急程度、特定應用、訂單大小）
   ↓
5. Personal characteristics（買家 / 採購者特質、忠誠度、風險態度）
```

意涵：B2B segmentation 比 B2C 多三層（Purchasing / Situational / Personal），反映 [[concepts/buying-center]] 多角色決策結構。

## 關聯概念：[[concepts/long-tail-theory]]

Chris Anderson 2004 提出，B2B 也適用「服務小量多樣需求」的長尾邏輯。

三前提：
1. Lower costs of distributing
2. Latent demand
3. Aggregated

## Segmentation 三準則（隱含）

雖然 Kotler 沒明列，但有效的 segment 應滿足：^[inferred — 行銷學共識]

1. **Measurable** — 可量化大小、購買力
2. **Substantial** — 大到值得服務
3. **Differentiable** — 對行銷組合有不同反應
4. **Actionable** — 可實際接觸與服務

（Kotler 在前版有列「Substantial / Measurable / Accessible / Differentiable / Actionable」5 準則，16e 簡化。）

## Source 反例 / 質疑

- **Demographic segmentation 的批評** — Race / culture 切法在當代行銷學已有 ethical pushback（profiling、bias），source 未提。^[inferred — 隱含批評]
- **VALS 的方法論限制** — source 未提內部信效度爭議。^[inferred — 隱含批評]
- **Behavioral / Psychographic 取資料的隱私問題** — source 未提 GDPR / 個資保護衝突。^[inferred — 隱含批評]
- **Segment 的穩定性** — 教師批註提到「光棍節 → 有沒有賺錢？沒有，退貨率 35%」— Occasion segment 的陷阱：occasion-based 切片可能 over-fit 短期行為。^[inferred from instructor annotation]

## Jason 觀察：醫療 AI 的 Segmentation

EBM PACS / AI 的 segmentation 切法：^[inferred — Jason 個人延伸]

**B2B 五層切法應用：**

1. **Demographic**：醫院 tier（醫學中心 / 區域 / 地區）× specialty（影像科 / 心臟科 / 急診）× 地理（台灣 / 東南亞 / 中東）
2. **Operating variables**：現用 PACS vendor（Sectra / GE / Philips / 其他）× AI 經驗值（從未用過 / 試用過 / 已部署）
3. **Purchasing approaches**：直購（小醫院）vs 委員會審核（醫學中心）vs 健保標案（政府醫院）
4. **Situational factors**：建院 / 換 PACS / 預算季 / 評鑑前
5. **Personal characteristics**：放射科主任 vs IT 主管 vs 院長三角的 risk attitude

關鍵啟示：**EBM 不能用「所有醫院」一套行銷組合**，至少要切「醫學中心 × 健保標案 × Sectra 用戶」這種三層交集 segment 才能差異化定位。

## Related

- [[concepts/STP-framework]] — Segmentation 是 STP 的 S
- [[concepts/targeting]] — Segmentation 之後選 target
- [[concepts/positioning]] — Targeting 之後做 positioning
- [[concepts/customer-persona]] — Segment 視覺化為 persona
- [[concepts/buying-center]] — B2B segmentation 第三層
- [[concepts/long-tail-theory]] — Niche segment 的經濟邏輯
- [[references/kotler-keller-chernev-marketing-management-16e]]
