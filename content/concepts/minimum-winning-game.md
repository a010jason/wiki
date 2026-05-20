---
title: Minimum Winning Game (MWG)
type: concept
domain: strategy
tags: [MWG, beachhead, strategy, burgelman, high-tech-startup, mgmt]
aliases: [MWG, Minimum Winning Game, 最低限致勝賽局]
sources:
  - paper:Burgelman-Siegel-2007-Cutting-the-Strategy-Diamond
  - book:kotler-keller-chernev-marketing-management-16e Ch07
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Burgelman & Siegel 2007 提出。高科技創業公司應先設定一個明確且規模有限的市場，建立穩定獲利基礎（第一個 MWG），再連續推進到下一個 MWG。Intel 是典型案例：SRAM → DRAM → EPROM → CPU。對標 [[concepts/strategic-innovation]] 的 incremental disruption 路徑與 Moore 跨鴻溝 beachhead 概念。
provenance:
  extracted: 0.80
  inferred: 0.15
  ambiguous: 0.05
base_confidence: 0.70
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Minimum Winning Game (MWG)

## What It Is

Burgelman & Siegel 2007《Cutting the Strategy Diamond》提出：^[extracted Ch07 p.18 教師批註]

> 高科技創業公司應先設定一個**明確且規模有限**的市場，建立穩定獲利基礎（第一個 MWG），再**連續推進**到下一個 MWG。

對比：
- **不是**「一口氣攻全球大市場」
- **不是**「亂槍打鳥試多個方向」
- **是**「先贏一個 well-scoped niche，再向外擴」

## Intel 案例（教師批註）

教師長註解 Intel 如何用 MWG 連續推進：^[inferred from instructor annotation]

```
SRAM → DRAM → EPROM → CPU
```

每一步都是當時的 MWG：
- **SRAM**（1969-1970）：第一個 MWG，存活下來
- **DRAM**（1970-1980）：第二個 MWG，營收主力
- **EPROM**（1970s）：第三個 MWG，毛利支柱
- **CPU**（1980s-）：第四個 MWG，最終壟斷市場

關鍵：**每一步 MWG 的成功累積資源、能力、市場地位，撐起下一個 MWG 的進攻**。

## 與其他 framework 的關係

### vs Beachhead Strategy

Moore《Crossing the Chasm》的 beachhead = 在 mainstream market 中先攻一個小灘頭。

對比：
- **Beachhead** 強調「跨鴻溝」(crossing the chasm) — 從 early adopters 到 early majority
- **MWG** 強調「連續性」 — 每個 winning game 後接下一個

兩者互補：Beachhead 是 MWG 的特例（第一個 MWG = beachhead）。

### vs [[concepts/strategic-innovation]]

Strategic innovation 的「新組合」需要 MWG 連續推進，而不是大爆炸式 disruption。

### vs Lean Startup MVP

Lean MVP 是 product 級的 minimum，MWG 是 market 級的 minimum。MVP 答「最小產品」，MWG 答「最小可贏市場」。

### vs [[concepts/blue-ocean-strategy]]

Blue Ocean 強調 reframe 競爭規則開新市場（reframe-driven），MWG 強調連續推進累積（scope-driven）。^[inferred — Jason 個人區分]

## 為什麼 MWG 適合高科技 startup

教師批註的隱含論點：^[inferred]

- 高科技市場的不確定性高 → 無法一次選對大市場
- 資源有限 → 無法多戰場
- 學習效應大 → 每個 MWG 完成可累積 capability
- 競爭快速 → 必須連續推進，不能在單一 MWG stagnate

## 應用條件

不是所有公司都適合 MWG 策略：^[inferred]

- ✅ 高科技 / 高不確定產業
- ✅ 資源有限的新創
- ✅ 有 capability 累積效應的業務
- ❌ 大企業有規模優勢、可同時多戰場
- ❌ 純通路或低毛利商品
- ❌ 無學習曲線的業務

## Source 反例 / 質疑

- **MWG 數量沒有上限指引** — 多少個 MWG 之後才算成熟？^[ambiguous]
- **MWG 失敗的退出機制** — 第二個 MWG 沒贏怎辦？source 未提。^[ambiguous]
- **Intel 範例可能事後合理化** — Intel 的真實歷史包含許多失敗（如 [[entities/intel-NBI]] 的 4 個失敗案）；MWG 解釋只挑成功的 progression。^[inferred — 隱含批評]
- **「Winning」的定義** — 賺錢？市占？認知份額？source 沒給。^[ambiguous]

## Jason 觀察：醫療 AI 的 MWG

EBM PACS / AI 的 MWG 推進路線：^[inferred — Jason 個人延伸]

### MWG 1：神經影像 + 教學醫院

- 範圍：腦中風 detection、出血篩查
- 客戶：教學醫院、神經放射專科
- 贏的標準：3-5 家教學醫院簽約 + 學會發表

### MWG 2：神經影像 + 區域醫院

- 範圍：擴大到區域醫院（量大）
- 客戶：區域醫院、健保標案
- 贏的標準：> 20 家醫院、健保碼整合穩定

### MWG 3：神經影像橫向延伸

- 範圍：神經外科手術導引、追蹤
- 客戶：原 MWG 1+2 醫院延伸到其他科別
- 贏的標準：cross-sell rate > 30%

### MWG 4：跨 modality

- 範圍：心血管影像、腹部影像
- 客戶：原醫院 + 新醫院
- 贏的標準：成為 multi-modal AI 平台

關鍵：**不應跳級** — 直接從 MWG 1 攻 MWG 4 會失敗。必須在 MWG 1 站穩才能 leverage 到 2/3/4。

## Related

- [[concepts/strategic-innovation]] — Strategic innovation 的 incremental 路徑
- [[concepts/blue-ocean-strategy]] — 對照框架（reframe vs scope）
- [[concepts/crossing-the-chasm]] — Beachhead 對照
- [[concepts/disruptive-innovation]] — Christensen disruption 模型對照
- [[concepts/competitive-advantage]] — MWG 是累積 advantage 的路徑
- [[entities/intel-NBI]] — Intel 的失敗 NBI 案例，與 MWG 對照
- [[references/kotler-keller-chernev-marketing-management-16e]]
