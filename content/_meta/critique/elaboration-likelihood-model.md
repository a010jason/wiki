---
title: Critique — Elaboration Likelihood Model (ELM)
type: meta
target: concepts/elaboration-likelihood-model
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 3, brittle: 2, unsupported: 0 }
applied_to_target: { lifecycle: draft → challenged, base_confidence: 0.55 → 0.55 }
---

# Critique — `concepts/elaboration-likelihood-model`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Persuasion 有兩條 distinct routes — Central（仔細思考 argument quality）vs Peripheral（依賴 cues 如專家背書）。

- **Q1 假設：**
  - [stated] 兩條 route 是 distinct
  - [hidden] Persuasion 可化約為這兩條
  - [hidden] Argument 處理是 binary（深或淺）— 無中間態
- **Q2 跨域跨規模：**
  - **跨文化（collectivist）：** Triandis 集體主義文化中，social proof（peripheral cue）本身**就構成 argument quality**，無法切分。Central/peripheral 區分是 Western individualist 思維。
  - **真實廣告：** 高預算廣告（Apple、Patagonia）常**同時用兩條 route**（紮實 spec + lifestyle imagery）— 頁面在「限制」段承認「同時運作」但主敘述仍是二分。
- **Q3 來源：** Petty & Cacioppo 1986 — secondary（具名 foundational source），強來源。但 40 年來有競爭理論：Chaiken 1980/1987 **Heuristic-Systematic Model**、Kruglanski-Thompson 1999 **Unimodel**、Albarracín-Wyer 2001 multi-process integration。頁面未提這些競爭框架。
- **Q4 反例：** **Unimodel**（Kruglanski-Thompson 1999）主張只有**一條** route 不同 evidence quality，有實證支持。**HSM**（Chaiken 1980）允許 heuristic + systematic 並行 — 對「ELM 是兩條 distinct」直接反駁。
- **Verdict：** `narrow` — ELM 二分有經典地位，但 HSM / Unimodel 是 mainstream 競爭框架，binary split 是 metatheoretical 選擇而非實證結論。

### Claim 2: Elaboration Likelihood = Ability + Motivation。

- **Q1 假設：**
  - [stated] 兩因素 additive 決定 elaboration
  - [hidden] Ability 與 motivation 獨立（無 interaction）
  - [hidden] 無第三因素
- **Q2 跨域跨規模：**
  - **跨文化（high-context）：** Opportunity（情境提供時間思考）和 ability/motivation 同等重要。ELM 公式遺漏。
  - **醫療 AI：** 臨床環境的 cognitive load（睡眠剝奪、interruptions）可凌駕 ability + motivation 兩者 — 第三 context 因素遺漏。
- **Q3 來源：** Petty-Cacioppo 1986 — secondary。原書有 7 個 postulates，**「ability + motivation」是教科書化簡**。Bhattacherjee Ch4 — textbook compression。頁面把 simplified formula 當原始定義呈現。
- **Q4 反例：** **MOA framework**（MacInnis-Moorman-Jaworski 1991）在行銷文獻廣用 Motivation-Opportunity-Ability 三因素，比 ELM 二因素更準。**疲勞醫師研究**顯示高 motivation + 高 ability 仍因 cognitive load 不 elaborate — 暗示第三 cognitive resource 因素。
- **Verdict：** `narrow` — 二因素公式作為 heuristic 可用，但 MOA 三因素更準。頁面把 Bhattacherjee 的教學化簡當 ELM 原始定義。

### Claim 3: ELM 是情境特性（situational），非個人特質。同一人在不同情境會切換路徑。

- **Q1 假設：**
  - [stated] Route 由情境決定，非人決定
  - [hidden] 個人特質不預測 route 偏好
  - [hidden] Cognitive style 穩定文獻無關
- **Q2 跨域跨規模：**
  - **個人心理學：** **Need for Cognition**（Cacioppo-Petty 1982 *JPSP* — 同樣的 ELM 兩位作者！）是人格特質，跨情境預測 central route 偏好。頁面 claim 與 ELM 作者**自己的另一篇基礎論文直接矛盾**。
  - **醫療 AI：** 部分醫師（research-oriented）跨情境一致走 central；其他（volume-oriented）跨情境一致走 peripheral。穩定個體差異存在。
- **Q3 來源：** Bhattacherjee Ch4 textbook compression。Petty-Cacioppo 自己 1980s+ 的 Need for Cognition 工作明確承認 trait moderator — 頁面「situational not trait」的 claim 違反 ELM 作者的原始立場。
- **Q4 反例：** **NFC scale**（Cacioppo-Petty 1982）顯示個體差異在 chronic motivation to engage in effortful cognition 上預測 route 偏好，跨情境穩定。**Lin-Huang 2021**（頁面自己引）用 financial self-efficacy 作 moderator — 這 IS 人格特質 moderator。
- **Verdict：** `brittle` — 「ELM 是 situational 不是 trait」與 ELM 作者自己的 Need for Cognition 工作（Cacioppo-Petty 1982 JPSP）直接矛盾。頁面誤述基礎 ELM 文獻。

### Claim 4: 醫療 AI 推廣的弔詭：醫師高 ability 但低 motivation → peripheral route → 依賴同儕醫師背書是關鍵。

- **Q1 假設：**
  - [hidden] 醫師 AI motivation 普遍低
  - [hidden] 同儕背書 IS 主導 peripheral cue（而非 reimbursement、醫院 mandate、學會政策）
  - [hidden] ELM 預測 adoption behavior（而非僅 attitude）
- **Q2 跨域跨規模：**
  - **不同 specialty：** Radiology 積極採用 AI（RSNA 大會、AI 論文激增）；cardiology 慢。「醫師動機低」是過度概括。
  - **跨國：** 亞洲（中國、韓國）的醫療 AI 採用受國家政策強驅動，**同儕背書不是主導 driver**。
- **Q3 來源：** `^[inferred]` — Jason 自身應用。**無醫療 AI 文獻 cite**。對照 Wartman-Combs 2019、Topol 2019 *Deep Medicine*、Esteva 2021 都顯示更複雜採用 dynamics。頁面在無實證基礎下做自信預測。
- **Q4 反例：** **Radiology AI 採用**主要由 **reimbursement codes**（CPT 0721T AI mammography 2023 Jan）驅動，非同儕背書 — peripheral route framing 漏掉 regulatory/economic driver。**Watson Health@MD Anderson** 有同儕背書（Dr. Lynda Chin 力挺）但因臨床準確度+成本失敗 — peer endorsement 不足以驅動 adoption。許多醫師對 AI 走 central route（讀論文、評 sensitivity/specificity），「低 motivation」過於 patronizing。
- **Verdict：** `brittle` — 對醫師動機 + peer endorsement 主導的自信 claim 過度概括；忽略 reimbursement、國家政策、specialty 差異、Watson Health 反例。Jason 自身 inferred 但 framing 強過實證支持。

### Claim 5: Bhattacherjee-Sanford 2006 MISQ：Job Relevance（→ motivation）+ User Expertise（→ ability）為 IT 採用 ELM 的 operationalization；H4-H9 假設正/負向 moderator。

- **Q1 假設：**
  - [stated] Job relevance ≈ motivation；user expertise ≈ ability
  - [hidden] 此 operationalization valid
  - [hidden] H4-H9 全 cleanly tested
- **Q2 跨域跨規模：**
  - **IT 採用 10 年後：** Venkatesh UTAUT2 2012 用 habit / hedonic motivation / social influence — 不只 relevance/expertise。
  - **醫療 AI：** Job relevance 對 AI 工具（其臨床 utility 是 long tail）難評估，operationalization 破功。
- **Q3 來源：** Bhattacherjee-Sanford 2006 *MIS Quarterly* — primary（頂尖 IS journal peer-reviewed），強來源。但：**頁面列 H4-H9 卻未說明哪些 hypothesis 在原文被支持**。原 paper 實際結果 mixed — H6（source credibility 在低 expertise 下正向）支持，H7（expertise 負向 moderator）結果 nuanced。
- **Q4 反例：** **Sun-Zhang 2006** 發現 expertise 有時**放大**（非削弱）peripheral cue 效應 — 與 Bhattacherjee-Sanford 預測相反。頁面只列 hypothesis 結構，未報告 mixed 實證結果。
- **Verdict：** `narrow` — Bhattacherjee-Sanford 2006 在 IS 領域是穩固應用，但頁面未報告 (a) 哪些 H4-H9 被支持、(b) 競爭研究發現相反、(c) UTAUT/UTAUT2 evolution 已超越 ELM。

### Overall page verdict

頁面是稱職的 ELM textbook distillation，但有四個結構性問題：

1. **誤述 ELM 作者立場**：Claim 3「ELM 是 situational 不是 trait」與 Cacioppo-Petty 1982 *JPSP* 的 Need for Cognition 工作直接矛盾，後者明確識別 chronic trait moderator。**同樣的兩位作者**！
2. **競爭 dual-process 理論缺席**：Chaiken HSM 1980 + Kruglanski-Thompson Unimodel 1999 是 mainstream alternatives，頁面未提。
3. **醫療 AI Claim 4 過度自信**：在無實證基礎下對醫師動機 + peer endorsement 做強預測，忽略 reimbursement、specialty 差異、Watson Health 反例。
4. **MOA framework（Opportunity 因素）缺席**：MacInnis-Moorman-Jaworski 1991 三因素模型在行銷文獻廣用，比 ELM 兩因素更準。

**Recommended actions：**

1. 修 Claim 3 為「ELM 主要強調情境決定 route，但 Need for Cognition（Cacioppo-Petty 1982）顯示 chronic trait 也有 moderator 作用」— 與 ELM 作者自己的 follow-up 工作對齊
2. 加新段「競爭 dual-process 理論」討論 HSM（Chaiken）與 Unimodel（Kruglanski）的差異
3. 改寫「醫療 AI 弔詭」段，加 specialty 差異、reimbursement codes、Watson Health 反例；軟化「peripheral route → peer endorsement key」為條件式 claim
4. 在「Elaboration Likelihood」段加 MOA 三因素 cite（MacInnis-Moorman-Jaworski 1991）作為更精確 alternative
5. 在 Bhattacherjee-Sanford 段補「實際結果：H6 支持、H7 nuanced；後續 Sun-Zhang 2006 發現相反方向」
6. 在「限制」段把 dual-process theory 提到主文，加 Kahneman System 1 / 2 對照

**Base confidence：** 0.55（current）→ 0.55（cap 0.55 觸發於 ≥1 brittle，已在頂）。
**Lifecycle：** draft → challenged。
