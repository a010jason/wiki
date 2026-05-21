---
title: Marcello Damiani
type: entity
domain: mgmt
tags: [Moderna, CDO, digital-transformation, AI-factory]
aliases: [Damiani, Moderna CDO]
sources:
  - HBS-9-621-032-Moderna
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Moderna 自 2015 年起的 Chief Digital and Operational Excellence Officer，從 bioMérieux 被 Stéphane Bancel 挖角。AI Factory 3 大原則（Cloud / Integration / Automation）的主要 articulator；與 COO 雙重彙報以取得跨部門推動 AI Factory 的權限。「If the underlying process is bad, digitizing it just makes the bad process digital.」此名言概括其「先優化、後數位化」立場。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Marcello Damiani

Moderna 的 Chief Digital and Operational Excellence Officer（CDO，2015 至少至 2021 案例撰寫時）。Iansiti et al. (2021) HBS Case 9-621-032 Moderna(A) 把 Damiani 描繪為 Moderna 從生技公司轉型為「digital-native biotech」的關鍵推手，與 [[entities/Stephane-Bancel]]（CEO）並列為 Moderna 數位化故事的兩位主角。^[extracted]

## 履歷脈絡

- **2015 年加入 Moderna**：被 [[entities/Stephane-Bancel]] 從 **bioMérieux**（法國生醫診斷設備公司）挖角。^[extracted]
- 加入時 Moderna 還只是早期研發階段的小公司（COVID 五年前）。Bancel 在公司成立初期就把「先建數位骨幹、再建工廠」當作核心策略 — Damiani 是這條路線的執行者。^[inferred]
- **報告線**：與 COO **雙重彙報** — 不只是 IT 部門首長，而是有跨部門整合權的高階主管。^[extracted]

→ 這個雙線彙報設計是案例核心 organizational insight：沒有 CDO 級組織治理權，AI Factory 金字塔下層（Cloud / Integration）跨部門基礎建設**沒有單一部門 CEO 認領**，推不動。^[inferred] 詳見 [[concepts/cdo-chief-digital-officer]]。

## AI Factory 三條建構原則

Damiani 在案例中總結 Moderna AI Factory 的建構選擇為三條原則。詳見 [[concepts/ai-factory]] 完整展開：

1. **Cloud** — 把所有運算和資料流的處理放到雲端設施（Moderna 的第一個基礎建設決定）
2. **Integration** — 透過 IoT 連接實驗室儀器，業務流程和數據能夠被整合
3. **Automation & Robotics** — 移除容易出錯的手動工作是第一步

Damiani 把 Integration 當作 AI Factory 的 keystone — 不是裝個 ESB（enterprise service bus），是**所有資料、設備、流程都能無縫互通**。^[inferred]

## 標誌性語錄

> **"If the underlying process is bad, digitizing it just makes the bad process digital."** ^[extracted]

這句話濃縮 Damiani 的**「先優化、後數位化」**立場 — 反對直接把現有流程搬上雲端，主張先重新設計流程再上系統。是 Moderna 為何選擇**從製造端開始建 AI Factory**（流程相對乾淨可控）而非從研發端的策略原因之一。^[inferred]

## 為何重要（對醫療 AI 的判讀）

Damiani 是 [[references/iansiti-lakhani-competing-age-of-ai-2020]] 書中「digital operating model」框架的活案例執行者：

- 證明 CDO 不只是 IT 主管，是**組織重塑者**
- 證明 "AI Factory" 不是技術堆疊問題，是**跨部門治理權力**問題
- 醫療 AI 公司若把 CDO 角色降階為 IT 主管，AI Factory 推不動 ^[inferred]

→ 詳見 [[synthesis/medical-ai-platform-vs-pipeline]]。

## Related

- [[entities/Stephane-Bancel]] — 挖角 Damiani 的 CEO
- [[entities/Noubar-Afeyan]] — Flagship Pioneering 主席、Moderna co-founder
- [[entities/Moderna]] — 公司主頁
- [[concepts/ai-factory]] — Damiani 三原則的展開
- [[concepts/cdo-chief-digital-officer]] — Damiani 是 case study representative
- [[references/iansiti-moderna-case-2021]] — Source

## Open Questions

- Damiani 加入 Moderna 前在 bioMérieux 具體做什麼角色？案例只提公司名未提職稱。^[ambiguous]
- 2021 案例撰寫後 Damiani 是否仍在 Moderna？需要外部查核確認。^[ambiguous]
