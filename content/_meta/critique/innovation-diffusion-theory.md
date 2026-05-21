---
title: Critique — Innovation Diffusion Theory (IDT)
type: meta
target: concepts/innovation-diffusion-theory
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 3, brittle: 2, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/innovation-diffusion-theory`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 五類採用者按近似常態分布：Innovators 2.5% / Early Adopters 13.5% / Early Majority 34% / Late Majority 34% / Laggards 16%。

- **Q1 假設：**
  - [hidden] Adoption time 遵循常態分布
  - [hidden] 類別是離散的（vs. 連續譜系）
  - [stated] 比例由 std-dev cutoffs 推得
- **Q2 跨域跨規模：**
  - **醫療 AI：** 高風險受監管產業中，adoption 常為 **bimodal** —醫學中心早期採用者 + 多數醫院 laggards，中間 majority 稀薄。常態假設不適用。
  - **網路效應產品（TikTok / Tinder）：** S-curve 變 hockey stick —tipping point 前極慢，tipping point 後爆衝，比例極度偏向 Late Majority。常態分布破功。
- **Q3 來源：** Rogers 1962/1995/2003 — secondary（具名學者）。但 2.5/13.5/34/34/16 來自 **1957 Iowa hybrid corn study 的便利統計切點**，不是 universal 經驗事實。Bhattacherjee Ch4 — secondary。頁面「限制」段自承「未必符合所有 innovation」但表格仍用比例為定值。
- **Q4 反例：** **Network effects 產品**（Facebook 起飛、Pokemon Go）顯示曲線非 S 而是 hockey stick。**Failed innovations**（Google Glass、Quibi）從未抵達 Late Majority，分布左截斷 — Rogers 五分類預設「最終 100% 採用」本身偏誤（survivorship）。
- **Verdict：** `narrow` — 分類學作為教學工具有用；特定比例是統計 artifact。在同質市場的漸進式創新中成立；網路效應產品與失敗創新破框。

### Claim 2: 5 個 IDT constructs（Compatibility、Complexity、Relative Advantage、Observability、Trialability）決定採用率。

- **Q1 假設：**
  - [hidden] 5 條是窮盡的（exhaustive，非僅示意）
  - [hidden] Constructs 彼此獨立（vs. interacting）
  - [stated] CPL 負向，其他正向
- **Q2 跨域跨規模：**
  - **醫療 AI：** 受監管產業中**監管核可**是凌駕 5 條的第 6 構念 — FDA cleared vs not 通常比 Trialability 更決定 adoption。頁面未承認此 boundary。
  - **消費 SaaS：** **定價模型**（freemium / paid / subscription）常比 5 條更決定採用 — 不在 Rogers 框架內。
- **Q3 來源：** Rogers 1962 + Tornatzky-Klein 1982 meta-analysis 已是經典 critique。Bhattacherjee Ch4 — secondary。5-construct 框架早於系統性 meta-analysis 批判；Compatibility 在不同研究中結果不一致。
- **Q4 反例：** **Tornatzky & Klein 1982** meta-analyzed 105 IDT studies 發現**只有 Compatibility、Relative Advantage、Complexity 顯示一致效應**，Observability 與 Trialability 結果不一致。**iPhone**：高 Complexity（觸控 UI 全新）、低 Trialability（封閉生態）、低 Observability（私下使用），仍快速擴散 — 違反 5 條中的 4 條，靠 Relative Advantage 與 design 殺出。
- **Verdict：** `brittle` — Tornatzky-Klein 1982 meta-analysis 已揭示 5 條中僅 3 條 robust，頁面當作 canonical 卻未引此 critique；iPhone 等反例直接擊中。

### Claim 3: 個人層五階段 Adoption Process（Knowledge → Persuasion → Decision → Implementation → Confirmation）。

- **Q1 假設：**
  - [hidden] Adoption 是 sequential / linear
  - [hidden] 每階段是 distinct
  - [stated] 每階段都可能 drop off
- **Q2 跨域跨規模：**
  - **衝動消費 / impulse buy：** TikTok shop 產品常 Knowledge → Decision 在秒級完成，跳過 Persuasion。Stage 模型崩潰。
  - **B2B 企業採購：** 常逆向走 Decision → Persuasion → Knowledge（組織命令先到，事後合理化）— stage 順序顛倒。
- **Q3 來源：** Rogers 1995 — secondary。Stage 模型在 psychology 已被 Sutton 2001 批判（針對 Transtheoretical Model 但邏輯相同）。Kahneman System 1 / 2 提供 dual-process alternative，頁面未提。
- **Q4 反例：** **Habit-based mobile app adoption** — 用戶透過重複 nudge 採用，無顯式「decision」，符合 Kahneman System 1。**Forced adoption**（企業 mandate、政府要求）— Knowledge / Persuasion / Decision 外部 collapse。
- **Verdict：** `narrow` — Stage 模型作為分析框架有用，但不適用 impulse / habit / mandated adoption。

### Claim 4: 設計新產品應 maximize 4 個（CPA / ADV / OB / TRI）+ minimize 1 個（CPL）。

- **Q1 假設：**
  - [hidden] 5 條可獨立 optimize
  - [hidden] 降低 complexity 永遠是好的
  - [stated] 這些是 design lever
- **Q2 跨域跨規模：**
  - **醫療 AI：** 過簡化（CPL min）會違反醫療規範對 **explainability + audit trail** 的要求 — clinical AI 需要可解釋的複雜度。設計 trade-off 被忽略。
  - **工業 B2B：** Caterpillar 重型機械故意提高 Complexity 作 differentiator（entry barrier + lock-in）— minimum complexity 是消費品思維。
- **Q3 來源：** Inferred design heuristic；無明確 source。IDT 教學常用但未從實證研究中導出此特定組合最優化 adoption。
- **Q4 反例：** **Tesla** 高 Complexity（autopilot UI + 充電基礎設施認知），但 ADV 補償使 adoption 強。**加密貨幣**：CPA 差、CPL 差、OB 差，但 ADV（anti-fiat 意識形態）對 target 用戶強，整體 adoption 強。
- **Verdict：** `narrow` — 用於大眾市場漸進式創新成立；當單一構念主導（Tesla = ADV、crypto = ADV、medical AI = 合規 > 簡潔）時破框。

### Claim 5: 醫療 AI deployment 可乾淨映射到 5 個 IDT constructs（5 構念對照表）。

- **Q1 假設：**
  - [hidden] 醫療 AI adoption 主要由這 5 條決定
  - [hidden] 映射 clean / unambiguous
  - [stated by inference] 構念 universally 適用 medical AI 各類別
- **Q2 跨域跨規模：**
  - **影像 AI vs NLP AI vs decision support：** Radiology AI adoption 主要由 **reimbursement codes (CPT)** + FDA clearance 驅動，不是 5 構念。頁面未提 reimbursement。
  - **多 stakeholder：** 醫療 AI 至少 3 類採用者（醫師 + 醫院 admin + 病人）— Rogers 個人層框架無法處理 multi-stakeholder dynamics。
- **Q3 來源：** `^[inferred]` — Jason 自身應用。**無 medical AI adoption 文獻 cite**。Cresswell-Sheikh 2013、Topol 2019 *Deep Medicine* 用不同框架（Sociotechnical / Augmented Intelligence）描述醫療 AI 採用，頁面未引。
- **Q4 反例：** **Watson Health 在 MD Anderson 失敗**：CPA / OB / TRI 都 OK，但臨床準確度 + 工作流破壞 — 5 構念映射無法預測此失敗。**PACS 採用（1990s-2000s）**主要由 HIPAA + DICOM 標準化 + Stark 法案驅動，是 regulatory 而非 IDT 動能。
- **Verdict：** `brittle` — 醫療 AI adoption 被 reimbursement、regulatory、multi-stakeholder dynamics 主導，這些在 IDT 5 條外。映射僅表面 clean。頁面 inferred 應用無 medical AI adoption 文獻支撐。

### Overall page verdict

頁面是稱職的 Rogers IDT textbook distillation，但有四個未處理弱點：

1. **Tornatzky-Klein 1982 meta-analysis 沒引** — 該 meta-analysis 已是 IDT 經典自我檢驗，揭示 5 條中僅 3 條 robust（CPA / ADV / CPL）。頁面把 5 條當定論呈現。
2. **Network effects 革命**（Katz-Shapiro 1985、Arthur 1989）後 IDT 的核心 S-curve 假設失效於網路效應產品 — 頁面在「限制」段點到但未整合到主敘述。
3. **多 stakeholder / 受監管產業 dynamics**（醫療 AI 特別被 reimbursement + FDA 主導）在 IDT 個人層框架外 — Claim 5 醫療 AI 映射 brittle。
4. **Survivorship bias**：Rogers 框架描述的是**成功擴散**的曲線，失敗創新（Google Glass / Quibi）從未抵達 Late Majority 卻不在框架內。

**Recommended actions：**

1. 在「五個 IDT Constructs」段加 Tornatzky-Klein 1982 meta-analysis 引用，註記 OB / TRI 效應不一致
2. 在「限制」段把 network effects 從附註提到主文，加 Katz-Shapiro 1985 / Arthur 1989 cite
3. 重寫「對醫療 AI PM 應用」段，加 reimbursement code (CPT) + FDA clearance + multi-stakeholder（醫師 / 醫院 admin / 病人）作為第 6-8 構念補強；引 Cresswell-Sheikh 2013 / Topol 2019 *Deep Medicine*
4. 加新段「失敗創新的 IDT 局限」討論 Google Glass / Quibi / Watson Health（survivorship bias）
5. 五類採用者比例改為「Rogers 1957 corn study 統計切點，不必硬套」，與本頁限制段對齊
6. 「Maximize 4 + minimize 1」加 caveat：當 Relative Advantage 極高（Tesla / crypto）或單一構念主導時，此 heuristic 失效

**Base confidence：** 0.55（current）→ 0.55（cap 0.55 觸發於 ≥1 brittle，已在頂）。
**Lifecycle：** draft → challenged。
