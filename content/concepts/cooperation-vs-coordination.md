---
title: Cooperation vs Coordination
type: concept
domain: mgmt
tags: [organization-design, mgmt]
aliases: [合作 vs 協調, 組織兩大根本問題]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Ch6
created: 2026-05-20
updated: 2026-05-20
provenance:
  extracted: 0.7
  inferred: 0.25
  ambiguous: 0.05
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-20
ingest_method: read-subagent
---

# Cooperation vs Coordination

組織存在的**根本兩問題**（Grant Ch6）：高生產力來自 specialization，但 specialized individuals 必須被整合 —— 整合的兩個面向是 cooperation 與 coordination，**解方完全不同**。^[extracted]

這是 organizing 的「原子層」，比 hierarchy、agile、matrix 等結構選擇都更底層。

## 兩個問題的對照

| 維度 | Cooperation Problem | Coordination Problem |
|---|---|---|
| 別名 | Agency Problem | Managing Interdependency |
| 本質 | **員工目標 ≠ 老闆目標** | **誰先做、誰等誰、資訊怎麼接** |
| 例 | 業務藏訊息、工程師摸魚、PM 報好不報壞 | 上下游模組接口錯、Sprint 排程衝突 |
| 解方 | hierarchical supervision、performance incentives、shared values、persuasion | rules and directives、organizational routines、mutual adjustment |

混淆兩者是常見錯誤：把 coordination 問題（接口設計）當成 cooperation 問題（人不努力）來解，於是不斷加 incentive 但接口仍然錯位。^[inferred]

## 為什麼 Hierarchy 存在

Grant 給出兩個獨立 rationale：

1. **作為 control**（解 cooperation）：Weber bureaucracy 七原則 —— rational-legal authority、specialization、hierarchical structure、rules/SOP、standardization、separation of position from person、formalization
2. **作為 coordination economizer**：5 節點 self-organizing = C(5,2) = 10 條 link；5 節點 hierarchy = 4 條 link。但 Grant 自己警告 —— 效率不等於效果，「depends upon the organization's task」^[extracted]

## Loose Coupling 是解兩者衝突的鑰匙

Tightly-coupled 系統：任何一處變動需要 system-wide adaptation。^[extracted]

Loosely-coupled modular hierarchy：透過**標準化介面**讓 decentralized adaptation 成為可能。同時是：
- Software architecture 原則（API 設計）
- Product architecture 原則（[[concepts/digital-operating-model]] 的模組化）
- Organization design 原則（cross-functional pod / 自組織團隊）

→ 跨領域：醫療影像 AI 的 DICOM modules + HL7/FHIR interface 就是 loose coupling 在 healthcare IT 的落地，讓 PACS、EMR、AI 模組可獨立演進。^[inferred]

## 與 [[concepts/agile-organization]] 的關係

Agile 是 organic-end 的具體配方（解動態環境下的 coordination by mutual adjustment）；Cooperation vs Coordination 是更底層的問題分解。換句話說：

- **此頁**回答「組織為什麼難？」
- **Agile / Scrum** 回答「特定條件下怎麼做？」

## Open Questions

- Cooperation 與 coordination 在實作上是否常糾纏？例如：bad incentive 也會破壞 coordination（藏訊息）
- Source 未討論：當 cooperation solution（強 hierarchy）與 coordination solution（mutual adjustment）衝突時的取捨

## Related

- organizational capability — Resources → (Processes/Structure/Motivation) → Capabilities
- mechanistic vs organic organization — Burns & Stalker contingency
- [[concepts/agile-organization]] — organic 的執行配方
- [[concepts/post-bureaucratic-mindset]] — 對 Weber 七原則的反論
- [[references/grant-contemporary-strategy-analysis]] — Ch6 源頭
