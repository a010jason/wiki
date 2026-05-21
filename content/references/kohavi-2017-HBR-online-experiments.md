---
title: Ronny Kohavi — A/B Testing 雙論文（HBR 2017 + KDD 2009）
type: reference
domain: mgmt
tags: [reference, kohavi, ab-testing, hbr, kdd, microsoft, mgmt, strategy]
aliases: [Kohavi HBR 2017, Kohavi KDD 2009, Surprising Power of Online Experiments, Microsoft ExP]
sources:
  - id: kohavi-thomke-2017-HBR
    type: hbr-article
    rel_path: 策略管理/Kohavi_HBR2017.pdf.pdf
    drive_url: https://drive.google.com/file/d/10B3ezgvW-uZTCERc8JhNnRqz9JLpSajl/view
    pages: 8
    size_bytes: 317726
    sha256: b53f336337645a053d33756b821dc3154592b27e0eb82e31dd4a9671e294411e
    ingested_commit: 9319bdf
  - id: kohavi-crook-longbotham-2009-KDD
    type: research-paper
    rel_path: 策略管理/Kohavi_MS-ExP.pdf.pdf
    drive_url: https://drive.google.com/file/d/18PD5btueWdgPc2YrZM9M7a4mHg_TqrHW/view
    pages: 11
    size_bytes: 1094486
    sha256: bfc443ecfcc16e307762dec3a585291767d67d473c3063377b3be7c97bac4bce
    ingested_commit: 9319bdf
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.92
  inferred: 0.05
  ambiguous: 0.03
base_confidence: 0.55
summary: >-
  Ronny Kohavi（前 Microsoft ExP / LinkedIn experimentation 領袖）兩篇 A/B testing 經典：
  HBR 2017「The Surprising Power of Online Experiments」+ KDD 2009「Online Experimentation at Microsoft」。
  與 [[entities/Booking-com]] A/B testing 戰略文化形成 platform-side 補完。
  核心概念：OEC / HiPPO / Twyman's Law / Sample Ratio Mismatch / A/A test /
  Application Implementation Continuum / Bing 100ms = $18M ROI 量化。
  Vanilla 英文 article — 無中文眉批。
  Ingest 2026-05-21 (Wave C 2/4)。
---

# Ronny Kohavi — A/B Testing 雙論文

## Bibliographic

1. **Kohavi, R., &amp; Thomke, S. (2017). "The Surprising Power of Online Experiments". Harvard Business Review**（8 頁 HBR article，2017/09-10）
2. **Kohavi, R., Crook, T., &amp; Longbotham, R. (2009). "Online Experimentation at Microsoft". KDD ThinkLight workshop**（11 頁 research paper）

兩篇互補：HBR 為 mgmt audience，MS-ExP 為 tech / methodology audience。

## Kohavi 簡介

- 前 **Microsoft Experimentation Platform (ExP) 創辦人**（2006/03 創立，3 dev + 2 PM + 1 tester + 1 GM = 7 人 incubation）
- 後續移到 **LinkedIn** 帶 experimentation
- 推 **HiPPO**（Highest Paid Person's Opinion）縮寫並 viral
- 著名 quote："Experiment or Die"

## Ingest 範圍與方法

| 階段 | Source | 路徑 | 日期 |
|---|---|---|---|
| Wave C 2/4 | HBR (8p) + KDD (11p) | B (subagent) | 2026-05-21 |

19 頁全讀完，無中文眉批（純英文 Quartz PDFContext 重存版）。

## 已 ingest 的核心內容

新建頁面：
- [[concepts/overall-evaluation-criterion]]（OEC — Kohavi 核心）
- [[concepts/HiPPO-decision-making]]（Kohavi 自創縮寫）
- [[concepts/twymans-law]]（「Any figure that looks interesting or different is usually wrong」）
- [[concepts/sample-ratio-mismatch]]（SRM — A/B 健康警訊）
- [[concepts/application-implementation-continuum]]（hardware → SaaS 易實驗光譜）
- [[concepts/aa-test]]（A/A 測試 — 平台校準）

可補強既有：
- [[concepts/ab-testing-as-strategy]]（Booking 視角 + Microsoft 平台規模補完）
- [[concepts/experimentation-culture]]（Kohavi cultural challenge 章節是 playbook）
- [[concepts/causal-inference-vs-correlation]]（Yahoo 871-1198% vs 5.4% 案例）
- [[concepts/evidence-based-management]]（Kohavi 引 Pfeffer-Sutton《Hard Facts》）
- [[concepts/hypothesis-driven-product]]（操作化）

## HBR 2017 — 6 大 Surprising Findings

### 1. Tiny changes can have a big impact
- **Bing ad headline** 寫幾天 code → +12% 營收，年化 &gt;$100M 美國（idea 在 backlog 六個月）
- **Hotmail link 開新 tab**：UK 900K user +8.9% / 美國 2.7M user → 全球 rollout + MSN +5% clicks
- **Amazon 信用卡 offer** 從首頁搬到購物車頁 → 年化獲利 +tens of millions
- **Bing 顏色調暗**：32M user 複測 → 年化 +$10M

### 2. Big investment ≠ big payoff
- **Bing 整合 Facebook/Twitter** 進搜尋結果第三 pane：花 &gt;$25M 開發，engagement / revenue 幾乎沒動

### 3. Experiments quantify ROI of perf/infrastructure work
- **Bing 加 100ms 人工延遲 = -0.6% revenue**
- Bing 年營收 &gt;$3B → **100ms 加速 = $18M/year**
- 足以 fund 整個 perf 團隊；用來 gate 新 feature 是否值得拖慢 response

### 4. Experts can't predict outcomes — most ideas fail
- **Google / Bing：10-20% 顯著為正**
- **Microsoft 整體：1/3 正、1/3 中性、1/3 負**
- Bing 80% 提案要先跑 controlled experiment

### 5. OEC 設計比想像中難
- **Bing 反例**：降低搜尋相關性 → 用戶 issue 更多 queries（短期 revenue 上升），但**長期流失到 Google**
- Bing 最終 OEC：**minimize queries per task/session, maximize tasks/sessions per user**
- 累積 **&gt;6,000 metrics**，按 vertical 模板分組
- **OEC 每年 review**

### 6. Correlation ≠ Causation（即使 big data 時代）
- **Office 反例**：兩個 advanced feature 都「相關」於更低 attrition — 但 heavy user 本來 attrition 就低
- **Yahoo 案例**：display ad 觀察性研究估搜尋量上升 **871%-1198%**；同樣問題用 controlled experiment → **只有 5.4%**

### 7. Causality — knowing what 比 why 更重要（但 why 還是值得追）
- **James Lind 壞血病 1747 案例**：citrus 治壞血病的實驗成功，但 Lind 誤推因果（以為酸性），把果汁加熱成濃縮液 → 破壞 vit C，導致 cure 延後 50 年才落地
- 反例：Bing 顏色實驗成功**沒有理論支撐**，照樣 ship $10M/year

## MS-ExP KDD 2009 — Platform 細節

### 規模（2009 時點）
- 跑在 **18 個 Microsoft properties**：MSN US/UK/巴西、Money、Real Estate、microsoft.com、store / support、Office Online、xbox.com 等
- 單一實驗用 **100M+ users** 偵測小但關鍵 effect
- 多個實驗預估年化 &gt;$1M
- 推廣到 700+ 內部 distribution list

### Application Implementation Continuum（**MS-ExP 文件最 unique 概念**）

```
Hardware → Standalone Client → Software+Services → Online/SaaS
難改 ← ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ → 易改易實驗
```

iPhone/Xbox → Photoshop/Office → Xbox Live/Office Assistance → Google/Amazon/MSN

詳見 [[concepts/application-implementation-continuum]]。

### 4 個 Necessary Ingredients
1. **OEC 清楚** — Lewis Carroll quote「If you don't know where you are going, any road will take you there」
2. **Easy to collect behavior data**
3. **Easy to change &amp; deploy**
4. **Sufficient users**

### 文化轉型（Section 7 — Culture Change Playbook）

- 2005 Ray Ozzie 內部 memo "Internet Services Disruption" → 觸發
- **HiPPO 玩偶**：Highest Paid Person's Opinion 河馬玩偶 → MS 印度 fan club
- **"Experiment or Die!" poster**
- 月開一日 statistics + DOE class → 累計 **500+ 員工受訓**
- 寫《Practical Guide to Controlled Experiments on the Web》(Kohavi 2007) — 變 Stanford/UCSD/UW 課本

### 4 個 Incorrect Reasons NOT to Experiment（**對 Booking case Vismans 反論的補完**）

1. 「Experimentation 只能做 incremental」 — 反駁：Amazon 砍首頁 search box 是 prototype + experiment 來的 radical
2. 「我們 optimize 的東西不可量測」 — 反駁：Bezos TV 廣告測 15 月找到不是好投資就停
3. 「實驗太貴」 — 反駁：Holland 2005 研究 150K idea 22 年顯示「**人覺得有用」與「真的有用」毫無相關**；不實驗的成本（繼續做無效 feature）更高

## Kohavi 對 A/B 戰略邊界的明確表態

引 **Davenport (2009 HBR)**：「controlled experiments 不適合 assess M&amp;A、business model 重大轉向」 — **strategy execution, not strategy formulation**。

對應 [[entities/Booking-com|Booking]] Vismans / Gulati 的 A/B 戰略邊界承認 — 但 Booking 把 A/B 上升到 strategic moat 層級，是另一種詮釋。

## Sources

| ID | 檔 | 頁 | SHA256 (prefix) | Ingested |
|---|---|---|---|---|
| `kohavi-thomke-2017-HBR` | Kohavi_HBR2017.pdf.pdf | 8 | `b53f3363…` | pending |
| `kohavi-crook-longbotham-2009-KDD` | Kohavi_MS-ExP.pdf.pdf | 11 | `bfc443ec…` | pending |

## Open Questions

- **Surveillance / Privacy / Ethical 隱憂**：Kohavi 兩份 source 都沒提；Facebook 2014 emotional contagion experiment 引發監管反彈是相關但被跳過的議題
- **A/B as Strategy vs A/B as Tactic 張力**：Kohavi 引 Davenport「strategy execution」vs Booking Vismans 把 A/B 當 strategic moat
- **Local optimum 陷阱**：A/B 擅長 hill-climbing 不擅長跳 hill
- **2024-2026 視角**：GenAI 時代 A/B testing 是否變化？LLM 應用的 OEC 如何設計？

## Related

- **概念**：[[concepts/overall-evaluation-criterion]] / [[concepts/HiPPO-decision-making]] / [[concepts/twymans-law]] / [[concepts/sample-ratio-mismatch]] / [[concepts/application-implementation-continuum]] / [[concepts/aa-test]] / [[concepts/ab-testing-as-strategy]] / [[concepts/experimentation-culture]] / [[concepts/causal-inference-vs-correlation]] / [[concepts/evidence-based-management]] / [[concepts/hypothesis-driven-product]] / [[concepts/champion-vs-challenger]]
- **Entity**：[[entities/Ronny-Kohavi]] / [[entities/Booking-com]] / [[entities/Microsoft]] / [[entities/Bing]] / [[entities/LinkedIn]] / [[entities/Amazon]]
- **參考**：[[references/HBS-booking-com-case]]（platform 文化對照組） / [[references/bhattacherjee-social-science-research]]（科學方法論基礎）
