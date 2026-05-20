---
title: Competing in the Age of AI（Iansiti & Lakhani, HBR Press 2020）
type: reference
domain: mgmt
tags: [strategy, AI, digital-transformation, hbr, reference, mgmt]
aliases: [Competing in the Age of AI, Iansiti Lakhani 2020, Iansiti book]
sources:
  - book:Iansiti-Lakhani-Competing-Age-of-AI-HBR-2020-Ch1
created: 2026-05-06
updated: 2026-05-06
summary: >-
  Marco Iansiti & Karim R. Lakhani（Harvard Business School）2020 年於 HBR Press 出版的 10 章書。核心命題：AI 已成為企業的「runtime」，使「digital operating model」公司能突破傳統公司的 scale / scope / complexity 限制。Phase 1 ingest 範圍：Ch1 (24 頁)，已涵蓋全書核心論點地圖。
provenance:
  extracted: 0.92
  inferred: 0.05
  ambiguous: 0.03
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-06
ingest_method: pdf-read-chunked
---

# Competing in the Age of AI

## Bibliographic

> Iansiti, M., & Lakhani, K. R. (2020). *Competing in the Age of AI: Strategy and Leadership When Algorithms and Networks Run the World.* Harvard Business Review Press.

兩位作者皆任教於 Harvard Business School，10 年研究數百家數位轉型 / AI 採用案例。Iansiti 在 platform 經濟與生態系策略領域多年深耕；Lakhani 是 Crowd Innovation Lab 主持者。^[extracted]

## Phase 1 ingest 範圍

**只 ingest Ch1（24 頁）**。Ch1 已涵蓋全書 10 章地圖與核心論點，後續若要深挖特定章節再單獨 ingest。^[inferred]

| Ch | 主題 | 核心案例 |
|---|---|---|
| 1 | The Age of AI | Next Rembrandt / Amazon / WeChat / Tencent |
| 2 | Rethinking the Firm | Ant Financial / Ocado / Peloton（3 個 digital unicorn）|
| 3 | The AI Factory | Netflix |
| 4 | Rearchitecting the Firm | Amazon |
| 5 | Becoming an AI Company | Microsoft + 350-enterprise study |
| 6 | Strategy for a New Age | Uber |
| 7 | Strategic Collisions | smartphones / home sharing / automotive |
| 8 | The Ethics of Digital Scale, Scope, and Learning | algorithmic bias / privacy / platform control |
| 9 | The New Meta | broad implications |
| 10 | A Leadership Mandate | leadership actions |

^[extracted from p.21-22]

## 核心論點

> "AI is the 'runtime' that is going to shape all of what we do."  
> ——Satya Nadella, Microsoft CEO（書 p.3 引言）^[extracted]

書的中心命題：傳統公司的成長受限於營運模型本身（規模愈大 → 內部 complexity 愈大 → 邊際遞減）；**digital operating model** 公司用 AI 作為執行所有 process 的 runtime，使 scale / scope / learning 三優勢同時成立，價值曲線從邊際遞減的 S 形反轉成邊際遞增的指數曲線（Figure 1-2）。^[extracted]

→ 詳見 [[concepts/digital-operating-model]]

## 從 Ch1 distill 出的 wiki 概念

- [[concepts/digital-operating-model]] — 核心框架（含 Figure 1-2 + AI-as-Runtime 隱喻）
- [[concepts/scale-scope-learning]] — 數位營運的 SSL 三角優勢
- [[concepts/weak-ai-sufficiency]] — 不需要 AGI，weak AI 已足以顛覆
- [[concepts/strategic-collisions]] — Digital firm vs traditional firm 的碰撞動態（Kodak collateral damage 是 anchor）
- [[concepts/humans-on-edge-ai-in-core]] — 組織設計原則：員工只做 AI 還搞不定的邊緣任務
- [[concepts/ai-factory]] — 書 Ch3 概念，Moderna case Exhibit 4 金字塔是視覺化 anchor
- [[concepts/cdo-chief-digital-officer]] — 推動 AI Factory 的 leadership 職位

並更新 [[synthesis/medical-ai-platform-vs-pipeline]] 加入此書 SSL 框架對醫療 AI 的判讀。

## Moderna 是本書框架的活案例

[[references/iansiti-moderna-case-2021]] 由同一作者群（Iansiti / Lakhani + Mayer / Herman）後續發表的 HBS 案例 9-621-032，**幾乎像作者寫完書後特地找來「親自驗證」的案例**：^[inferred]

| 書中概念 | Moderna case 對應 |
|---|---|
| Ch1 / DOM | Bancel：「我們是一家被生物技術耽誤的科技公司」|
| Ch3 / AI Factory | Exhibit 4 金字塔（Cloud → AI → Digital）|
| Ch3 / Learning 循環 | Exhibit 5（More data → Better algorithms → ...）|
| Ch4 / Rearchitecting | Norwood 自有工廠 + 3 製造引擎 |
| Ch5 / Becoming AI Company | Damiani 任 CDO 推動轉型 |
| Ch7 / Strategic Collisions | COVID 把 Moderna 推上世界舞台、傳統 pharma 反應太慢 |

→ 想看 book 的概念在生技業如何落地，[[references/iansiti-moderna-case-2021]] 是最佳入口。

## 案例的爭議與書中坦承

### 對「AI 顛覆所有產業」的限制

書 p.18 自己承認：cybersecurity、隱私、algorithmic bias、假新聞是 digital firm 的副作用，需要「new approaches to leadership, regulation, and even ethics」。^[extracted]

→ Ch8 整章在處理這些倫理議題。

### 醫療相關提及

書 p.19 直接點名 X-ray 影像詮釋是 AI 適用 process：

> "Startups can use the frameworks described in this book to target new processes to digitize and enable, through analytics and AI, **from writing emails to interpreting X-rays**." ^[extracted]

→ 醫療 AI 在這本書框架內被視為合理的 application。

### 知識淵源（p.20）

書承認站在多人肩上：^[extracted]
- **Disruption / Industry Architecture**：Christensen, Baldwin & Clark
- **Information economics**：Hal Varian, Carl Shapiro
- **Platform / multi-sided markets**：Cusumano, Gawer, Annabelle, Parker, Van Alstyne, Yoffie, Feng Zhu, Mark Rysman, Andrei Hagiu
- **AI / future of work**：Brynjolfsson, McAfee, Kai-Fu Lee, Ming Zeng, Pedro Domingos, Agrawal, Gans, Goldfarb

## 局限

- **章節節錄而非全書**：本 ingest 僅 Ch1，要深挖 AI Factory、Strategy for New Age、Ethics 等需各別補 ingest^[inferred]
- **2020 出版，AI 概念前 LLM 時代**：書中 AI 主要指 traditional ML / deep learning。書中許多論點 ChatGPT 後（2022-）需重新檢視 —— LLM 大幅降低「需要哪些 AI 能力」的門檻^[inferred]
- **缺中國本土視角**：雖然提到 Tencent / Ant Financial，但對中國 AI 競爭格局（百度、字節、商湯、聯影醫療）著墨不多^[extracted]

## Ingest TODO

- ⏸️ **Ch2-10 待補源**（2026-05-20 BLOCKED）：Google Drive 內僅 Ch1（24p、sha `20c766b1...`），是陽明交大課堂老師提供的單章節抽印本。Ch2-10 不在已知位置。
- **合法取得管道**：
  - HBR Store / Amazon Kindle / Apple Books（電子書 ~USD 30）
  - 陽明交大圖書館電子館藏（建議先查 NYCU library 是否購入此書，HBL / EBSCO 線上可能直接看）
  - 同作者在 HBR 雜誌的兩篇先導文章可免費 / Premium 取得，論點覆蓋部分章節：
    - "Competing in the Age of AI" (HBR Jan-Feb 2020)
    - "From Disruption to Collision: The New Competitive Dynamics" (MIT Sloan, 2020)
- **取得後**：丟到 `PDF_ROOT/策略管理/` 同資料夾，命名 `iansiti-AoAI-ChN.pdf`，跑 path B subagent ingest
- **優先級**：Ch3 (AI Factory) + Ch7 (Strategic Collisions) 對醫療 AI 戰略最直接相關，其他章節可緩

## Sources

- Iansiti & Lakhani (2020) Ch1, Harvard Business Review Press
- 中譯版資訊：尚未確認此書是否有繁中譯本（待查）^[ambiguous]
- Ingest 日期：2026-05-06；hash `20c766b1...`；24 頁全文讀取無截斷
