---
title: Chandra, Shirish, Srivastava (2022) — To Be or Not to Be Human (JMIS)
type: reference
domain: research-methods
tags: [conversational-AI, chatbot, JMIS, mixed-methods, MNT, anthropomorphism]
aliases: [Chandra 2022, To Be or Not to Be Human]
sources:
  - id: chandra-2022-tobeornottobehuman
    type: journal-article
    rel_path: 管理專題研討/To Be or Not to Be  Human  Theorizing the Role of Human-Like Competencies in Conversational Artificial Intelligence Agents.pdf.pdf
    drive_url: TODO
    pages: 38
    sha256: 62cb127cc60f68891e81cd3eca622632c054b88db1483c9e116e2b9528ea3977
    doi: 10.1080/07421222.2022.2127441
    journal: Journal of Management Information Systems
    year: 2022
    volume: 39(4)
    pages_in_journal: 969-1005
    ingested_commit: pending
visibility: public
confidence: high
lifecycle: draft
created: 2026-05-21
updated: 2026-05-21
lifecycle_changed: 2026-05-21
---

## Citation

> Chandra, S., Shirish, A., & Srivastava, S. C. (2022). To be or not to be ... human? Theorizing the role of human-like competencies in conversational artificial intelligence agents. *Journal of Management Information Systems*, 39(4), 969-1005. https://doi.org/10.1080/07421222.2022.2127441

## What this is

JMIS 2022 mixed-methods empirical paper：把 chatbot / conversational AI 三維能力（cognitive / relational / emotional）連到 user engagement，trust 為中介。

被「管理專題研討」當作 reading + critique 教材。

## Why selected by 教師 ^[inferred]

不只是 conversational AI 領域內容 — 主要作為**研究方法論教材**：

1. **RQ 建構範本**：從文獻 gap（IS 用 instrumental value vs conversational AI 需要 humanized value）導出 RQ
2. **理論建構 + 構念操作化範本**：借用既有理論（MNT + competency + trust）→ contextualize 到新場景 → contextualized model
3. **Construct validity / CMB / endogeneity 標準套餐**：Harman + Lindell-Whitney CMB / VIF / 2SLS / Sobel + Preacher-Hayes bootstrap mediation / PLS-SEM robustness
4. **Mixed methods 教科書範例**：Venkatesh 2013/2016 guidelines；sequential explanatory + bracketing for unsupported hypothesis
5. **批判教學材料**：H1b（relational competency → engagement）不支持，作者用 4 boundary conditions 補救 — 可引發課堂 critique「真 boundary 還是 ad hoc rationalization？」

## Key findings

| Hypothesis | Result | β | 含意 |
|---|---|---|---|
| H1a Cognitive → engagement | 支持 | 0.260 (p<0.01) | 認知能力提升 engagement |
| H1b Relational → engagement | **不支持** | -0.027 (ns) | Surprise |
| H1c Emotional → engagement | 支持 | 0.243 (p<0.01) | 情緒能力提升 engagement |
| H2a Cognitive → trust → engagement | 支持 mediation | bootstrap β=0.108 | Trust 中介 |
| H2c Emotional → trust → engagement | 支持 mediation | bootstrap β=0.143 | Trust 中介 |

R² Block 2 = 0.485（ΔR² 0.170 vs control-only）。

## Sample + Method

- N=213，新加坡商管 undergraduate，**mean age 18.2**（外推性疑慮）
- Two-wave survey，4 週間隔
- 三個刺激 chatbot：**Mitsuku**（cognitive）、**Bus Uncle**（functional/Singapore bus info）、**Woebot**（emotional CBT therapy bot）
- 10 位深度訪談 R1-R10（跨國跨產業）

## 反例 / 質疑 ^[extracted + inferred]

**作者自承**：
- Sample 偏年輕無經驗 → relational competency 效果可能因此偵測不到
- Single dyadic-based AI（非 community-based）
- Self-reported, no physiological measure
- 未涵蓋 organizational level

**boundary conditions for H1b non-support**：
- BC#1: chatbot 無法 capture prior interactions
- BC#2: chatbot 類型（transactional 不需 relational）
- BC#3: user 類型（inexperienced 分不出差別）
- BC#4: privacy concerns（建立 relationship 需更多 user info）

**讀者可進一步質疑**：
- 把 Boyatzis 1991 人類能力分類直接搬到 AI agent — 構念效度爭議（AI 沒 emotional state，量人類能力 confound with anthropomorphism）
- 三個 stimulus chatbot 本身就是能力強項不同 — 隨機分派時每受訪者只接觸一個 bot，卻被問三項能力評分 → relational 永遠拿不到強訊號 ^[ambiguous]
- MNT 借用牽強：Figure 1 把 cognitive→low effort / relational→low ambiguity / emotional→high arousal 對應過於整齊，像 **post-hoc rationalization**
- **2022 發表，前 LLM 時代**：Mitsuku 是 AIML rule-based、Bus Uncle functional、Woebot CBT scripted — 結論在 GPT-3.5/4 / Claude 時代是否還站得住，需重新檢驗

## Related

- [[concepts/human-like-AI-competencies]] — 主構念
- [[concepts/media-naturalness-theory]] — 理論基礎
- [[concepts/common-method-bias]] — 方法論示範
- [[concepts/instrumental-variable-2SLS]] — endogeneity 處理
- [[concepts/PLS-SEM-vs-CB-SEM]] — robustness 示範
- [[concepts/elaboration-likelihood-model]] — dual-process 相似邏輯
- [[references/bhattacherjee-social-science-research]] — 課程主教材

## License

JMIS journal article, Taylor & Francis；本 wiki 只 distill 不重製文章內容。
