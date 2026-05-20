---
title: STP Framework (Segmentation → Targeting → Positioning)
type: concept
domain: marketing
tags: [STP, segmentation, targeting, positioning, marketing-strategy, kotler, mgmt]
aliases: [STP, Segmentation Targeting Positioning, S-T-P]
sources:
  - book:kotler-keller-chernev-marketing-management-16e Ch01,Ch02,Ch06,Ch07
created: 2026-05-20
updated: 2026-05-20
summary: >-
  行銷管理的三步驟核心流程 — 把市場切開（Segmentation）、挑出要服務的群（Targeting）、在他們腦中佔位（Positioning）。是 Kotler 體系的脊椎，連接 Ch02 marketing planning 到 Ch06+Ch07 的具體執行。與 [[concepts/G-STIC-framework]] 的 Strategy 步驟相互嵌套。
provenance:
  extracted: 0.80
  inferred: 0.15
  ambiguous: 0.05
base_confidence: 0.80
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# STP Framework

## What It Is

**STP** = Segmentation → Targeting → Positioning，是 Kotler 行銷策略的三步驟流程：^[extracted Ch01-07]

1. **Segmentation（區隔）** — 把市場切成 well-defined slices（demographic / geographic / behavioral / psychographic）
2. **Targeting（鎖定）** — 從 segments 中挑出「公司能為其優化 offering」的群
3. **Positioning（定位）** — 設計 offering 與 image，使其在目標群心智中佔據 distinctive place

教師口訣：**「先認識市場 → 找到神木的種子 → 再決定價值主張」**（outside-in 思維）。^[inferred from instructor annotation Ch02]

## Why STP 不是 STP — 而是「STP 套娃在 G-STIC 裡」

STP 是 [[concepts/G-STIC-framework]] 的 Strategy 步驟的內部結構：

```
G-STIC:  Goal → Strategy → Tactics → Implementation → Control
                  ↓
             [Target Market (5C analysis)] + [Value Proposition (3V → OVP)]
                  ↓
                  STP:  Segment → Target → Position
                  ↓
             7Ts Marketing Tactics（Product / Service / Brand / Price / Incentives / Communication / Distribution）
```

意涵：STP 不是 standalone，是 Strategy 步驟下的 substructure；Positioning 完成後才往下落到 [[concepts/7Ts-marketing-tactics]]。

## 三步驟細節

### 1. Segmentation（Ch06）

把市場按變數族切片。四大變數族：^[extracted Ch06]

| 變數族 | 變數例 | 工具 |
|---|---|---|
| Demographic | Age、Life-cycle stage、Gender、Income、Race | 普查資料 |
| Geographic | Nation / Region / City / Neighborhood | Nielsen Claritas PRIZM (geo + demo) |
| Behavioral | User status、Usage rate、Buyer-readiness、Loyalty、Occasions | CRM data |
| Psychographic | 心理特質、生活風格、價值觀 | VALS Segmentation System |

**B2B 五層切法**：Demographic（行業 / 規模 / 地點）→ Operating variables → Purchasing approaches → Situational factors → Personal characteristics。^[extracted Ch06]

詳見 [[concepts/market-segmentation]]。

### 2. Targeting（Ch06）

**Strategic vs Tactical Targeting** 雙層：^[extracted Ch06]

- **Strategic targeting**（Why / When）— 聚焦在公司能藉由 customizing offering 滿足其需求的客戶。兩個必要條件：
  - **Target compatibility**：公司能否為目標客戶創造 superior value？
  - **Target attractiveness**：這些客戶能否為公司創造 superior value？
- **Tactical targeting**（How）— 辨識「用什麼方式接觸到這些 strategically important 客戶」（customer profile、persona、effectiveness-efficiency 對齊）

**Targeting 三邏輯：** Mass marketing / Targeted marketing（極限是 one-to-one）/ Mass customization。^[extracted Ch06]

**Multiple-segment targeting 兩條路：** Product specialization vs Market specialization。

詳見 [[concepts/targeting]]、[[concepts/strategic-vs-tactical-targeting]]。

### 3. Positioning（Ch07）

> Positioning = the act of designing the company's offering and image to occupy a distinctive place in the minds of the target market.
> ^[extracted Ch07 p.10]

關鍵在「在目標市場心智中佔據獨特位置」 — 不是物理位置，是 mind-space。

**Positioning 三大要素：**
- **Frame of Reference** — 用什麼來 benchmark（哪個品類？哪些競爭者？）→ [[concepts/frame-of-reference]]
- **Points of Difference (POD)** — 我有你沒有，3D 準則：Desirable / Deliverable / Differentiating → [[concepts/points-of-difference-and-parity]]
- **Points of Parity (POP)** — 你有我也有，三型：Category / Correlational / Competitive

**Positioning 溝通工具：**
- Positioning statement（category membership + POPs + PODs）
- [[concepts/narrative-branding]] — Setting / Cast / Narrative arc / Language
- [[concepts/primal-branding]] — Patrick Hanlon 7 要素

## 三步驟之間的緊張

教師批註指出：「波特的差異化只停在 BU 而已」 — 暗示 Kotler 的 POD 是 brand / ecosystem / cross-category 層級，而 Porter 的差異化只到 product / business unit 層級。^[inferred from instructor annotation Ch07]

詳見 [[synthesis/porter-vs-kotler-differentiation-debate]]。

## Jason 觀察：STP 套用到醫療 AI

醫療 AI PM 場景下：^[inferred — Jason 個人延伸]

- **Segmentation**：醫院 tier（醫學中心 / 區域 / 地區）、specialty（影像科 / 心臟科 / 急診）、PACS vendor lock-in 狀況、IT 採購預算層級
- **Targeting**：strategic compatibility = 是否能整合既有 PACS 工作流；strategic attractiveness = 醫院規模與後續導入潛力
- **Positioning**：通常 frame of reference 是「比較準的 AI 模型」（功能 framing），但可以重設為「比較會講話的影像科助理」（語言 framing） — 翻轉 frame of reference 是 EBM 等中小型醫療 AI 廠商可能的策略

待 [[synthesis/STP-applied-to-medical-AI-PM]] 展開。

## Related

- [[concepts/G-STIC-framework]] — STP 是 G 之後 S 的內部結構
- [[concepts/5C-target-market-framework]] — STP 之前的市場理解
- [[concepts/3V-market-value-principle]] — Positioning 的 value 邏輯
- [[concepts/market-segmentation]]、[[concepts/targeting]]、[[concepts/positioning]] — 三步驟各自獨立頁
- [[references/kotler-keller-chernev-marketing-management-16e]] — 教科書頁
