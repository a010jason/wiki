---
title: Microsoft adCenter (HBS 9-908-049, Coles &amp; Edelman 2008)
type: reference
domain: mgmt
tags: [hbs-case, microsoft, paid-search, platform-war, mgmt, strategy, reference]
aliases: [Microsoft AdCenter case, HBS 9-908-049, adCenter case]
sources:
  - id: AdCenter-lecture-slide
    type: lecture-slide
    rel_path: 策略管理/1AdCenter_S.pdf.pdf
    drive_url: https://drive.google.com/file/d/1gOA6co7wHhvZYjKUMn8nPGfQY8Gbnz1h/view
    pages: 11
    size_bytes: 1807031
    sha256: 87b6a8a41dbdd03f015aecf43972ddc387a6840d7d5c351418c718dd6ac034cf
    ingested_commit: f9f11fb
  - id: HBS-9-908-049-AdCenter-case
    type: hbs-case
    rel_path: 策略管理/Microsoft AdCenter.pdf.pdf
    drive_url: https://drive.google.com/file/d/1nQd7_DWXd6dfU7Bhi9ekvtMUSPLfrSim/view
    pages: 21
    size_bytes: 36601995
    sha256: 87b6a8a41dbdd03f015aecf43972ddc387a6840d7d5c351418c718dd6ac034cf
    status: deferred
    deferred_reason: 'PDF 為純掃描 / 2758×4050 pts 高解析、35MB / 無文字層；前次主 agent A1 subagent 嘗試 Read 撞 user-level token quota；pdftotext 拿到 0 行；pdftoppm 渲圖 PNG 每張 ~9MB 仍會撞 quota；需 OCR 或 vision API 後續再處理'
created: 2026-05-21
updated: 2026-05-21
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.6
  inferred: 0.30
  ambiguous: 0.10
base_confidence: 0.35
summary: >-
  HBS 9-908-049 (Peter Coles &amp; Benjamin Edelman, Rev 2008/4/30) — Microsoft adCenter 2006 進入 paid search 市場
  企圖挑戰 Google AdWords 的失敗案例。本次 ingest 僅 lecture slide（11p）— HBS case 原文 PDF 為純掃描高解析，
  讀法觸發 quota 已標 deferred。教師講義眉批密度極高：「全部都沒用！！發生典範移轉」/ 「MS 還是 Desktop 思維」/
  「Why do all Porter's generic strategies fail in digital wars?」7 點 take-away 留學員。
  Ingest 2026-05-21 (Wave A 1/8 case studies — partial: lecture only)。
---

# Microsoft adCenter (HBS 9-908-049)

## Bibliographic

> Coles, P., &amp; Edelman, B. (2008, Rev. April 30, 2008). *Microsoft adCenter*. Harvard Business School Case 9-908-049.

## Ingest 範圍與方法

| 階段 | Source | 路徑 | 日期 | 狀態 |
|---|---|---|---|---|
| Wave A 1/8 | Lecture slide (11p) | A (subagent retry) | 2026-05-21 | ✅ |
| Wave A 1/8 | HBS case 9-908-049 (21p, 35MB scan) | B (subagent) | 2026-05-21 | ⚠️ **deferred** |

**A1 ingest 失敗紀錄**：第一次 subagent 嘗試讀 35MB case PDF 觸發 user-level token quota（2:40pm CST reset）；reset 後 retry 改 lecture-only scope 成功。Case 原文未來補時需先處理掃描檔（OCR 或 vision API）。

## 已 ingest 的核心內容

詳見 [[entities/Microsoft-AdCenter]] 主頁。新建頁面：

- [[entities/Microsoft-AdCenter]] — 案例 hub
- [[concepts/porter-generic-strategy-fail-in-digital]] — Take-away 主題（教師 7 點留空）
- [[concepts/two-sided-market]] — Keyword Auction Model
- [[concepts/winner-takes-all]] — 「贏者全拿」take-away #1
- [[concepts/keyword-auction-two-sided-market]] — Google AdWords 雙邊平台架構
- [[concepts/paid-search-economics]] — CPA / CPC / CTR / eCPM / Impression
- [[concepts/portal-evaporation-thesis]] — AOL / Yahoo / Lycos 為何蒸發
- [[concepts/desktop-vs-platform-mindset]] — 教師核心診斷
- [[concepts/contextual-ad-vs-search-ad]] — AdSense vs AdWords 兩種雙向映射
- [[concepts/organic-vs-paid-search-CTR-asymmetry]] — First Organic 40-45% vs Top Paid 2-3%
- [[concepts/pagerank-as-ad-moat]] — 「CTR is warranted by PageRank」

## 教師眉批採集（核心）

> 「**全部都沒用！！發生典範移轉**」（slide 10，對 7 條 break-into 策略總評）
> 「**MS 還是 Desktop 思維**」（slide 11 — 核心病灶）
> 「**Why Focus Strategy (波特) can't work? 孤芳自賞**」
> 「**Why the buyout of YAHOO is not a solution? Product vs Platform**」
> 「**贏者全拿**」（take-away #1）
> 「**Why do all Porter's generic strategies fail in digital wars?**」（7 點留空）
> 「**Standard 已被 Google 制定**」「**70% of advertiser pays**」「**Why AOL didn't see the danger?**」
> 「**Google: Portal of portals**」「**雙邊平台 / 超大 ad agency**」
> 「**CTR is warranted by PageRank**」
> 「**Web 2.0 / Social Network / Content Creators**」「**B. Gates resigned, MS is on the top list**」

## Sources

| ID | 檔 | 頁 | SHA256 (prefix) | Ingested |
|---|---|---|---|---|
| `AdCenter-lecture-slide` | 1AdCenter_S.pdf.pdf | 11 | `87b6a8a4…` | pending |
| `HBS-9-908-049-AdCenter-case` | Microsoft AdCenter.pdf.pdf | 21 | scan | **deferred** |

## Open Questions

- **Why GAFA(MNT) ecosystem is not another Dot-COM bubble?**（slide 1） ^[teacher-annotation]
- **Who dominate contextual ad, Google or FB? What's the difference?**（slide 5） ^[teacher-annotation]
- **Where will AdCenter be in 12 months if MS goes with Digg deal?**（slide 10） ^[teacher-annotation]
- **Why do all Porter's generic strategies fail in digital wars?**（slide 11，7 點空白） ^[teacher-annotation]
- 2026 後續：AdCenter → Bing Ads (2010) → Microsoft Advertising (2018)；Bing global &lt;5% / 美國 ~9%。教師預言基本應驗 ^[inferred 2026 backfill]
- GenAI 時代 Microsoft × OpenAI Copilot + Bing AI chat 是否創造新 paradigm shift？^[inferred]

## Related

- [[entities/Microsoft-AdCenter]]
- [[entities/Google]] / [[entities/Microsoft]] / [[entities/Yahoo]] / [[entities/AOL]] / [[entities/Overture]]
- [[references/hbs-gafa-case-deighton-2013]]（同 paradigm，2013 GAFA 完整版）
- [[references/grant-contemporary-strategy-analysis]] Ch3 / Ch4 / Ch9
