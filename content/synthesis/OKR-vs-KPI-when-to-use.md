---
title: OKR vs KPI — 何時用哪個
type: synthesis
domain: mgmt
tags: [OKR, KPI, performance-management, decision, mgmt]
aliases: [OKR vs KPI 判準, 何時用 OKR]
sources:
  - lecture:2023-08-20-溫金豐-OKR-管理技能發展專題
  - jason-margin-notes:2023-08-20-OKR-handwritten
created: 2026-05-05
updated: 2026-05-05
summary: >-
  Jason 自己的判斷：OKR 與 KPI 不是替代關係，是兩條互補路線。挑哪條看「環境變動性」與「組織用績效系統解決什麼問題」。
confidence: medium
provenance:
  extracted: 0.1
  inferred: 0.6
  ambiguous: 0.3
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# OKR vs KPI — 何時用哪個

> 立場：Jason 自己整理（2026-05-05），confidence = medium。
> 來源：[[entities/wen-jin-feng]] 2023/8/20 OKR 課程 + 自己 PDF 邊注思考。
> Pending validation：尚未在 EBM 內部試用此判斷框架；也尚未找到反例。

## TL;DR

**不是「該換成 OKR」的問題，而是「同時用兩條，分別解兩個問題」。**

- **Development 路線（OKR）** —— 解「員工怎麼變強、組織怎麼往新方向走」
- **Evaluation 路線（KPI）** —— 解「誰升、誰加薪、誰要警告」

把這兩件事壓進同一套指標（純 KPI 制度），就會發生「員工為了拿獎酬而保守訂目標」這個典型病灶。^[inferred]

## 三個判準

### 判準 1：環境變動性

| 環境特徵 | 適合的路線 |
|---|---|
| 老闆自己也不太確定該往哪打 | OKR |
| 老闆很清楚目標、KR 是「執行得多好」的問題 | KPI |
| 同一團隊既要創新又要顧效率 | 混合制 |

理由：OKR 的「自下而上參與 + 滾動式調整」設計，本質上就是用來處理 logic 不明的場景 —— 連老闆都不確定怎麼訂時，需要員工帶資訊上來、邊做邊改。^[inferred]

### 判準 2：與獎酬的距離

OKR 的「會不舒適」標準（王怡淳 2022）成立的前提，是員工不會因為訂太挑戰而被扣錢（見 [[concepts/OKR]] Key Tension 段落）。^[extracted]

**實務折衷**（Jason 自己整理，未經 source 驗證 ^[inferred]）：
- 底薪比例拉高
- 獎酬連結公司整體表現（而非個人 OKR 達成率）
- 個人 OKR 用於 development，KPI 用於 evaluation

這個折衷是否能解決問題、Intel／Google 自己怎麼處理的細節，本 source 沒講透。^[ambiguous]

### 判準 3：組織透明度的接受度

OKR 預設「全員可查 CEO 目標」級別的透明，但這在台灣多數企業（尤其家族企業、集團子公司）會踩到敏感神經。^[inferred] 沒有透明度，OKR 退化成「換包裝的 KPI」。

導入前要先問：**組織願不願意把目標公開到這個程度？** 不願意，就先不要硬上 OKR。

## 對 Jason 自己的決策意涵（PM @ ebmtech）

> 註：這段是把 OKR 框架套用在自己工作的 inferred 推論，未跟主管或同事驗證過。^[ambiguous]

醫療 AI 的環境變動性高（FDA／法規迭代、競品快速變化、模型效能尚未天花板），按判準 1 偏 OKR。但醫療業的執行紀律要求高（CAPA、變更管制），又有 KPI 思維的需求。

可能的混合制設計（草稿）：
- 產品線層級用 OKR：例「在 X 院落地 Y 項目，並回收 Z 量級的真實世界資料用於 model improvement」
- 個人層級用 KPI：交付里程碑、bug rate、客戶 NPS 等

這個設計有沒有道理需要實際試。

## Counter-arguments / Self-critique

### 反對 1：二分法本身可能是誤導

Doerr / Niven / 王怡淳 都把 OKR 描述得「比 KPI 進步」，但**製造業／成熟產業用 KPI 用得很好**，不存在「該升級到 OKR」的問題。把兩者畫成「development vs evaluation」可能高估了 OKR 的普適性。^[ambiguous]

### 反對 2：「混合制」聽起來漂亮但難落地

理論上 OKR + KPI 並行很合理，但現實是 HR 系統、考績表、加薪邏輯通常綁定單一指標體系。**雙軌制等於要做兩套**，行政成本高。多數組織最後還是會塌回單軌。^[inferred]

### 反對 3：醫療業的「個人層級 KPI」可能也得是 OKR

如果醫療 AI 的個人交付里程碑本質上就是「我們也不確定 X 個月能不能 ship」，那連個人層級都該是 OKR。Jason 上面那段「個人層級 KPI」的設計可能是錯的 —— 把確定性錯誤地下放到個人層。^[inferred]

## Outstanding Questions

1. Intel／Google 怎麼處理 OKR 與獎酬連動的實際機制？（要直接讀 [[references/measure-what-matters-doerr-2018]]）
2. 廖沛綺 (2023) 跨層次研究是否觸及「OKR 與 KPI 並行」的場景？
3. 醫療業（高紀律、高法規）導入 OKR 的 case study？
4. 這個 synthesis 在 EBM 內部有實證價值嗎？需要 wiki-challenge / wiki-benchmark 進一步測。

## 升級條件（→ challenged）

跑 [[concepts/OKR]] 與本頁的 wiki-challenge，看 brittle claim（特別是「混合制」這段）能不能撐住。

## Related

- [[concepts/OKR]]
- [[concepts/KPI]]
- [[concepts/performance-management]]
- [[skills/setting-OKR]]
- [[references/measure-what-matters-doerr-2018]]
- [[entities/wen-jin-feng]]
