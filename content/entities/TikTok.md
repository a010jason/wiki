---
title: TikTok
type: entity
domain: marketing
tags: [tech-giant, short-video, algorithmic-recommendation, gen-z, china, mgmt]
aliases: [抖音, ByteDance, 字節跳動]
sources:
  - id: Kotler-MM16e-Wave3-TikTok
    type: case-supplement
    rel_path: 行銷管理/TikTok.pdf
    pages: 2
    sha256: 6f38b5de4a55fbaf5011ca8c907b5d9a09b7e3d219e441a6e27e9d772a3cff2f
    ingested_commit: pending
created: 2026-05-21
updated: 2026-05-21
summary: >-
  ByteDance 旗下短影音平台，中國版稱抖音、海外版稱 TikTok。在 Kotler MM 16e 補充教材中是 algorithmic recommendation + viral marketing + Gen Z 注意力經濟的代表案例，被教師補充用來討論「completion ratio vs click rate 哪個更關鍵」的病毒傳播核心指標問題。
provenance:
  extracted: 0.55
  inferred: 0.45
  ambiguous: 0.0
base_confidence: 0.6
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# TikTok

## What It Is

TikTok 是 ByteDance（字節跳動）旗下的短影音社群 app，2016 年抖音於中國上線、2017 收購 musical.ly 後合併推出國際版 TikTok。核心引擎是 **collaborative filtering algorithm**，靠用戶過去行為（觀看、停留、完成、互動）動態推薦下一個內容，幾乎不依賴 social graph。^[extracted]

## 教師補充的核心問題

教師批註圍繞一個診斷問題：

> **病毒傳播的最關鍵指標是什麼？**

候選清單（教師排序）：

1. **Completion ratio**（完成率）✓ 教師勾選
2. Shares
3. Comments
4. Likes
5. Following
6. **Click rate**（點擊率）✓ 教師勾選

教師同時勾選 completion ratio 與 click rate，暗示這兩個是核心 —— click rate 衡量「能不能拉進來」，completion ratio 衡量「能不能留住注意力」。^[inferred from instructor annotation]

底層邏輯被歸納為一句：

> **Attention spans 是決定病毒傳播的關鍵變數**

^[inferred from instructor annotation]

## Algorithm 機制

教師補充列出 TikTok 推薦機制的四個 component：

1. **Brain memory** — 記憶過去購買 / 觀看行為
2. **Products** — 推薦候選池（additives）
3. **User-based filtering** — 鎖定 Gen Z / 青少年群體
4. **Hashtag looping** — 循環推送同題材標籤

這個機制與傳統 social graph 推薦（FB / IG）不同 —— TikTok 是 **content-first algorithm**，不需要朋友關係就能精準推薦，因此 cold start 對新用戶極快。^[inferred]

## Gen Z 與青少年成癮

教師明確標註：

> **In-feed auto feeds（自動推送）對 teens & Gen Z 造成問題**

^[inferred from instructor annotation]

具體問題本質 source 未展開，但暗示 TikTok 的演算法在 Gen Z 族群觸發成癮 / 注意力耗損的爭議。

## Offshore Structure 質疑

教師批註附帶一個 governance 質疑：

> **「為什麼都在開曼群島？」 → 因為中國不准 Media 相關企業在中國上市 → 透過 offshore 結構規避監管 / 漂白上市**

^[inferred from instructor annotation]

這指向 VIE（Variable Interest Entity）結構在中國科技公司海外上市的標準做法，與 [[entities/Amazon]] / [[entities/Google]] 等美系科技公司的 incorporation 路徑顯著不同。

## 與 Kotler 框架的對接

- **vs [[concepts/STP-framework]]**：TikTok 的 Segmentation 是 algorithmic emergent（從行為叢集裡浮現）而非 a priori demographic；Targeting 不是「鎖定族群」而是「個人化推薦」；Positioning 在 platform level 才是教科書意義上的 positioning，內容層級沒有固定 positioning。^[inferred]
- **vs [[concepts/holistic-marketing]]**：Internal marketing 在 TikTok 變成「演算法工程文化」，performance marketing 變成「completion ratio 即 KPI」。
- **vs [[concepts/buying-decision-process-consumer]]**：對 Gen Z 用戶，5 階段（problem recognition → information search → evaluation → purchase → post-purchase）被 TikTok 的 algorithmic discovery 壓縮成「scroll → impulse」，需求識別與資訊搜尋幾乎同步發生。

## Open Questions

- Source 未提：美國 TikTok 禁令（2024 PAFACA 法案）、印度禁令（2020）、歐盟 DSA / DMA 監管下的 algorithm transparency 要求
- Source 未提：與 Instagram Reels / YouTube Shorts 的直接競爭數據
- Source 未提：TikTok Shop / live commerce 變現模式
- BTS / K-pop / 周杰倫等 personal brand 對照（教師補充提到 Taylor Swift case 但未交叉到 TikTok）

## Related

- [[entities/Taylor-Swift]] — fan-based community marketing 對照案例
- [[concepts/STP-framework]]
- [[concepts/holistic-marketing]]
- [[concepts/buying-decision-process-consumer]]
- [[references/kotler-keller-chernev-marketing-management-16e]] — Wave 3 案例補充
