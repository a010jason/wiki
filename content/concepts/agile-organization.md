---
title: Agile Organization（敏捷式組織）
type: concept
domain: mgmt
tags: [agile, org-design, post-bureaucratic, mgmt]
aliases: [敏捷式組織, agile org, agility]
sources:
  - lecture:2023-08-20-溫金豐-敏捷組織與敏捷方法
  - book:Denning-2018-Age-of-Agile
created: 2026-05-05
updated: 2026-05-05
summary: >-
  21 世紀回應 VUCA 環境的組織形態：分散式、自組織、聚焦顧客、網路式結構，相對於 20 世紀官僚組織的層級命令控制。Denning 三大法則：聚焦顧客／小就是美／網路式結構。
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Agile Organization（敏捷式組織）

## 為什麼出現

20 世紀組織主流是**官僚結構（bureaucracy）**：層級命令、效率/控制/可預測性、創造股東價值為主目的（[[concepts/post-bureaucratic-mindset]]）。^[extracted]

21 世紀面對 **VUCA 世界**（volatile, uncertain, complex, ambiguous），加上全球化 + 新科技 + 顧客影響力上升，傳統官僚組織反應太慢。新生科技公司（Amazon、Apple、Facebook、Google、Microsoft、Spotify、Tesla、Netflix、Uber 等）建立**敏捷式組織**，許多既存公司（Microsoft、海爾）也大幅調整（Denning, 2018）。^[extracted]

## Denning 三大法則

| 法則 | 內涵 | 對管理者的挑戰 |
|---|---|---|
| **Law 1: 聚焦顧客（customer-obsessed）** | 為顧客創造價值是企業真正目的；獲利是**結果**而非目的 | 「不專注在賺錢上能賺到錢？」「B2B 沒內部顧客？」「產品改善可能無法賺更多錢」 ^[extracted] |
| **Law 2: 小就是美（small is beautiful）** | 大問題分成很多小專案、小團隊運作；自組織、流程從寬、創新自由 | 經濟規模思維、放棄大規模觀點、藉由不控制而強化控制；「2 pizza 原則」 ^[extracted, inferred] |
| **Law 3: 網路式結構（network）** | 網路或生態系運作而非由上而下命令控制；組織金字塔消失，領導者像園丁不是命令者 | 鼓勵「組織混亂（organizational messiness）」；文化和價值觀成為一致性的主要特性 ^[extracted] |

源自 Denning (2018) 對 Amazon、Apple、Microsoft 等敏捷企業的歸納。^[extracted]

## doing agile ≠ being agile

兩種運作層次：^[extracted]

| 層次 | 內涵 | 範圍 |
|---|---|---|
| **Doing agile（敏捷式方法）** | 局部活動套用 [[concepts/scrum-method]] / XP 等 agile method | 提升組織創新能力 |
| **Being agile（敏捷式組織）** | 全面轉型為敏捷思維、結構、文化 | 組織級轉型旅程（agile transformation journey） |

McKinsey 2017 調查：90% 大型企業最高階主管已將「如何使企業變得更敏捷」視為高優先議題；但**僅 10% 的高階主管們認為自己企業可稱得上有高度敏捷性（high agility）**。^[extracted] 換句話說，doing agile 普及，being agile 罕見。

## Agile vs Lean — 兩個不同概念

實務常混淆，但精簡生產（lean production）主要是思考如何透過降低生產與運作的浪費，敏捷組織則是關注顧客創造價值。Lean 處理「控制」、cost（如存貨成本下降、just in time），日商愛用；Agile 強調創新與顧客回應。^[extracted, inferred]

## 系統觀（Conceptual Framework）

溫金豐 2023 整理的敏捷組織系統圖：^[extracted]

```
B1 領導力（價值觀、領導風格）─┐
B2 制度設計（人資、績效管理）─┼─→ A. 組織敏捷性（敏捷的人才/團隊/文化）─→ F1 組織結果（彈性、效能、效率）
B3 結構設計（架構、工作流程）─┘                                          └→ F2 經營結果（顧客、創新、財務）
D. 外在環境（社會文化、產業特性）↑   ↑ E. 內在環境（組織資源、經營策略）
```

關鍵洞察：**敏捷組織不是只改流程（B3）**，要 B1 + B2 + B3 全動，外加 D 與 E 環境配合。^[inferred]

## 適用情境（Rigby, Sutherland, Takeuchi 2016）

| 情境 | 適合敏捷 | 不適合敏捷 |
|---|---|---|
| 市場環境 | 顧客偏好/解方快速變動 | 穩定且可預測 |
| 顧客參與 | 密切合作、可取得快速回饋 | 一開始就知道要什麼且穩定 |
| 創新型態 | 問題很複雜、解方不明、時間急迫、跨功能合作重要 | 類似工作以前經驗過、解方很明確、可被預測且需遵循 |
| 工作模組化 | 漸進開發有其價值、可細分小單元 | 完全完成後才能測試、延遲改變代價大 |
| 過程錯誤影響 | 錯誤可產生有價值的學習 | 錯誤造成可怕後果 |

^[extracted]

## 醫療業 / 穩定產業的反例

醫療資訊系統長期適合 waterfall（穩定、預測性、錯誤代價高），但**擴大應用後會踩到 MVP 思維下「錯誤是必然」的衝突** — 客戶關係如何維護？產品特性與客戶特性如何區分？^[inferred] 這是 Jason 在 PDF 邊註提的張力，值得獨立 synthesis 釐清（[[synthesis/agile-vs-waterfall-when-to-use]]）。

## 與 OKR 的關係

[[concepts/OKR]] 是敏捷組織的工具之一 — 自下而上參與 + 組織透明 + 自主性都是 agile 法則的執行機制。但 **OKR 不是獨立的制度**，它需要敏捷組織的整體配合（領導力、結構、HRM）才能真正運作。^[inferred]

## Sources & Authority

- [[entities/wen-jin-feng]] 2023/8/20 課程（同一堂課的下半段，繼 OKR 後）
- [[references/denning-2018-age-of-agile]] —— 主要學理基礎
- Rigby, Sutherland, Takeuchi (2016) — 適用情境
- Walsh & Vollini (2017) — 高階主管調查
- Manifesto for Agile Software Development (2001)

## Related

- [[concepts/scrum-method]] —— agile method 中最普及的一種
- [[concepts/post-bureaucratic-mindset]] —— 思維基礎
- [[concepts/agile-manifesto]] —— 2001 軟體開發界的源頭宣言
- [[concepts/OKR]] —— agile 組織內常用的目標管理工具
- [[skills/leading-agile-transformation]] —— 推動的 how-to
- [[synthesis/agile-vs-waterfall-when-to-use]] —— Jason 對醫療業的判斷
