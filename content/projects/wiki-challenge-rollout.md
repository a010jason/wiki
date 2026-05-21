---
title: Wiki-Challenge Rollout — 404 draft → challenged 升級計畫
type: project
domain: mgmt
tags: [wiki-maintenance, wiki-challenge, lifecycle, rollout]
created: 2026-05-22
updated: 2026-05-22
status: in-progress
owner: Jason
---

# Wiki-Challenge Rollout

把 404 個 `lifecycle: draft` 的 page 逐頁跑 `/wiki-challenge`，升 `challenged`。
**單線程跑，一頁一頁來。** 不要 parallel — wiki-challenge 預設 single-threaded，且質疑需要 holistic view。

## 進度

| Tier | 已跑 | 待跑 | 總計 |
|---|---|---|---|
| Tier 1 — Top hub pages | **5/5 ✅** (disruptive-innovation / STP-framework / OKR / falsifiability-popper / VRIO-framework) | 0 | 5 |
| Tier 2 — Cross-domain hub theories | **5/5 ✅** (scientific-theory / causality-three-conditions / innovation-diffusion-theory / elaboration-likelihood-model / social-cognitive-theory) | 0 | 5 |
| Tier 3 — Research methods 核心 | 7 (agency-theory ✅ / construct-validity ✅ / reflective-vs-formative ✅ / inductive-vs-deductive ✅ / theory-vs-not-theory ✅ / theory-building-blocks-whetten ✅ / attributes-of-good-theory ✅) | 3 | 10 |
| Tier 4 — Wave 2 supplementary papers | 3 (human-like-AI-competencies ✅ / common-method-bias ✅ / instrumental-variable-2SLS ✅) | 3 | 6 |
| Tier 5 — Research methods supporting | 0 | 15 | 15 |
| **總計** | **20** | **21** | **41** |

剩餘 363 頁 draft 屬 lower-priority（先跑這 40 個 high-impact 的）。

## 操作 SOP（新 session 接手用）

1. 打開 wiki 專案 `/Users/jason/Documents/wiki`
2. 從下方 Tier 1 開始，**一次只跑一頁**：`/wiki-challenge concepts/<page-slug>`
3. 等 skill 跑完（產出 _meta/critique/<slug>.md + public page 加 Critique 摘要 + lifecycle 升 challenged）
4. 跑完後**在本頁打勾**：把 `- [ ]` 改成 `- [x] 2026-XX-XX done`
5. Commit：`git add -A && git commit -m "challenge: <slug> (X claims, Y verdicts)"`
6. 跑下一頁

**估時**：單頁約 5 分鐘（主 agent 模式）。Tier 1+2 共 10 頁 ≈ 50 分鐘。Tier 1-4 共 26 頁 ≈ 2-2.5 小時。

## Tier 1 — Top Hub Pages（影響面最廣，先跑）

按 incoming wikilink count 排序：

- [x] **`concepts/disruptive-innovation`** — 2026-05-22 done（5 claims: 1 survives / 1 narrow / 2 brittle / 1 unsupported；單邊 sourcing、iPhone 反例、Amazon/Azure/Netflix 反 Claim 5）
- [x] **`concepts/STP-framework`** — 2026-05-22 done by parallel session (commit 7bf729f, 1 survives / 3 narrow / 1 brittle；教師批註「Porter 差異化只停在 BU」與 Porter 1985 原書矛盾)
- [x] **`concepts/VRIO-framework`** — 2026-05-22 done（5 claims: 0 survives / 3 narrow / 1 brittle / 1 unsupported；錯位 OB textbook sourcing、Priem-Butler 2001 tautology critique 未提、ebmtech 應用 self-serving + GE/Siemens falsifier）
- [x] **`concepts/OKR`** — 2026-05-22 done by parallel session（critique file 已寫 + Critique 摘要 blockquote 已加；TODO 漏打勾本次補）
- [x] **`concepts/falsifiability-popper`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；主要弱點 Duhem-Quine / Lakatos / Kuhn omission + Freud 全盤否定未引 Grünbaum 1984 + Loftus repression 實證；commit pending）

## Tier 2 — Cross-Domain Hub Theories（跨多個 wiki 章節引用）

- [x] **`concepts/scientific-theory`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；positivist organizational research 立場當普世真理、prediction-vs-explanation 二分被 Cartwright/Salmon 反駁未引、theory-ladenness of observation 違反 Quine/Hanson/Kuhn）
- [x] **`concepts/causality-three-conditions`** — 2026-05-22 done（5 claims: 1 survives / 2 narrow / 2 brittle / 0 unsupported；忽略 Pearl 2009 因果推論革命、頁面內部自我矛盾「cross-sectional 不可推因果」vs 下方列 IV/RD/DID 工具、醫療 AI「需要 RCT」與 FDA 實務不符）
- [x] **`concepts/innovation-diffusion-theory`** — 2026-05-22 done（5 claims: 0 survives / 3 narrow / 2 brittle / 0 unsupported；Tornatzky-Klein 1982 meta-analysis 未引、network effects 整合不足、醫療 AI 5 構念映射 brittle vs reimbursement+FDA+multi-stakeholder 實況、survivorship bias）
- [x] **`concepts/elaboration-likelihood-model`** — 2026-05-22 done（5 claims: 0 survives / 3 narrow / 2 brittle / 0 unsupported；頁面誤述 ELM 作者立場 — Cacioppo-Petty 1982 Need for Cognition 識別 chronic trait moderator；HSM/Unimodel 未提；醫療 AI 弔詭 claim 過度自信；MOA 三因素缺席）
- [x] **`concepts/social-cognitive-theory`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；triadic reciprocal causation falsifiability 問題 Phillips-Orton 1983 / Bunge 1979 未 serious 處理；醫療 AI 四來源處方 transfer Bandura 1977 運動/anxiety 無實證橋接 + Watson Health 高 efficacy build-up 仍失敗反例；Vancouver-Kendall 2006 within-person 負向效應頁面自己引但未整合）

## Tier 3 — Research Methods 核心（Bhattacherjee 主幹）

- [x] **`concepts/agency-theory`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；commit `707ec50`）
- [x] **`concepts/construct-validity`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；single-source Bhattacherjee、Messick unified view 未引、Fornell-Larcker 已被 HTMT 取代 10 年、Coltman "95% reflective" 是 MIS 子領域 snapshot 被過度推廣）
- [x] **`concepts/reflective-vs-formative-measurement`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；Coltman 是綜述非首發，前置 Bollen-Lennox 1991 / Jarvis 2003 / Edwards-Bagozzi 2000 未引；反方 Bagozzi 2007 / Howell 2007 缺席；binary split 忽略 MIMIC + composite；PLS-SEM-only 過強）
- [x] **`concepts/inductive-vs-deductive-research`** — 2026-05-22 done（5 claims: 0 survives / 3 narrow / 2 brittle / 0 unsupported；100% Bhattacherjee；Wallace 1971 / Hume 1748 / Peirce 1903 abduction / Bryman 2007 critique 全未引；Popper 框架忽略 Bayesian/PAC 70 年發展；deductive>inductive 漏 conditional 關鍵 caveat；critical realism retroduction missing；mixed-mode aspirational claim）
- [x] **`concepts/theory-vs-not-theory`** — 2026-05-22 done（5 claims: 0 survives / 4 narrow / 1 brittle / 0 unsupported；100% Sutton-Staw 編輯立場；Doty-Glick 1994 typology=theory / Eisenhardt 1989 case-based theory-building 等 alternative 未正面整合；跨領域盲點 物理 GR / Linnaean / Big Five 等 descriptive theory 不適用；counter-to-common-sense 與 replication crisis 不一致；page 自承「全無共識」卻採 Sutton-Staw 為金科玉律自我矛盾）
- [x] **`concepts/theory-building-blocks-whetten`** — 2026-05-22 done（5 claims: 0 survives / 4 narrow / 1 brittle / 0 unsupported；Whetten 1989 + Sutton-Staw 1995 single-source；Bacharach 1989 同期 3-blocks / Dubin 1978 7-elements / Pearl 2009 causal DAG ontology 未提；跨領域盲點物理 ML 生物分類學 What-centric theory 不適用；經濟政治不可比較 brittle vs Public Choice + Pfeffer 反例；peer review Bornmann 2011 reliability poor；PM 應用過度延伸）
- [x] **`concepts/attributes-of-good-theory`** — 2026-05-22 done（5 claims: 0 survives / 3 narrow / 2 brittle / 0 unsupported；100% Bhattacherjee Ch4；Kuhn 1962 / Lakatos 1970 / Davis 1971 alternative criteria 未提；R² 1980s textbook simplification，adjusted R²/AIC/BIC/Shmueli 2010 缺席；Ockham parsimony 在 ML scaling laws + double-descent 反例失敗；Forster-Sober 1994 AIC formal substitute 未提；tensions formal 解決 50 年發展缺席）
- [ ] **`concepts/research-design`** — design hub
- [ ] **`concepts/internal-validity`** — causality 三條件 + threats
- [ ] **`concepts/external-validity`** — internal-external trade-off 反論

## Tier 4 — Wave 2 Supplementary Papers（單篇 paper 衍生 concepts）

- [x] **`concepts/human-like-AI-competencies`** — 2026-05-22 done（5 claims: 0 survives / 1 narrow / 4 brittle / 0 unsupported；單篇 pre-LLM paper 過度推廣；構念 transferability 未獨立驗證；Relational null result 被 over-interpret 與 Woebot/Wysa/Replika 文獻矛盾；MNT 三 mechanism mapping 是 Chandra 單方 theoretical claim；4 個 BC 是 post-hoc rationalization，BC#2/BC#3 與 service-recovery / ELIZA effect 文獻矛盾）
- [x] **`concepts/common-method-bias`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；detection-pass 邏輯缺方法論 critique 整合；Spector 2006 ORM urban-legend / Fuller 2016 JBR Harman false-negative simulation / Richardson 2009 ORM Lindell-Whitney 批評 / Williams 2010 CFA marker model / Spector et al. 2019 JoM 共同立場文「procedural > post-hoc」全未引；緩解方法表格與「social desirability 沒有有效解法」段落 page 內部矛盾未 reconcile；single case Chandra 2022 不足以作 best practice template）
- [x] **`concepts/instrumental-variable-2SLS`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；Stock-Yogo 2005 時代處方未跟上 2010s+ literature；**Cragg-Donald F > 10 過時，Lee-McCrary-Moreira-Porter 2022 AER robust SE 下推到 F > 104.7**；Hausman pre-test 在 weak IV 下 type I 50%+ inflate（Guggenberger 2010）；Sargan null-as-evidence 邏輯 + Parente-Santos Silva 2012 heteroskedasticity 不一致未引；LATE framework 四條件 Angrist-Imbens-Rubin 1996 / Angrist-Pischke 2009 MHE 未整合；「2SLS 處理三大 endogeneity」過度推廣，Imbens-Wooldridge 2009 JEL 不同 endogeneity 不同 strategy 缺席）
- [ ] **`concepts/PLS-SEM-vs-CB-SEM`** — 兩派系意識形態之爭，HTMT 已是 Fornell-Larcker 繼任者
- [ ] **`concepts/firm-climate-risk`** — Huang 2022；CDP voluntary disclosure selection bias
- [ ] **`concepts/LIBOR`** — PwC 文宣，顧問業利益動機

## Tier 5 — Research Methods 支撐頁（後 batch）

- [ ] `concepts/four-goals-of-science`
- [ ] `concepts/scientific-method-four-criteria`
- [ ] `concepts/concept-vs-construct-vs-variable`
- [ ] `concepts/theoretical-plane-empirical-plane`
- [ ] `concepts/proposition-vs-hypothesis`
- [ ] `concepts/nomological-network`
- [ ] `concepts/scientific-paradigms`
- [ ] `concepts/positivist-vs-interpretive-research`
- [ ] `concepts/research-process-seven-steps`
- [ ] `concepts/inverted-triangle-rq`
- [ ] `concepts/theory-of-planned-behavior`
- [ ] `concepts/AVE-fornell-larcker`
- [ ] `concepts/levels-of-measurement-NOIR`
- [ ] `concepts/sampling-frame`
- [ ] `concepts/probability-sampling`
- [ ] `concepts/non-probability-sampling`
- [ ] `concepts/media-naturalness-theory`
- [ ] `concepts/physical-climate-risk`

## Out of scope（不主動跑）

- 363 個其他 draft pages（HRM / ESG / Governance / 行銷 / 策略 Wave A/B/C 的所有 supporting concept 頁）— 等該領域主 hub challenged 後再連帶處理
- Reference manifest pages（`references/*`）— 主要是 metadata，不需 critique
- Entity pages（`entities/*`）— 描述性實體，少 load-bearing claim

## 完成定義

當 Tier 1-4（26 頁）全部 challenged，視為**本 rollout 完成**。Tier 5 為 stretch goal。

完成後可考慮：
- **wiki-benchmark** 對已 challenged 的 page 跑跨域對標
- **wiki-validate**（將來）對 brittle/unsupported claim 已修正的頁面升 validated

## 第一頁範例結果（agency-theory, 2026-05-22）

- 5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported
- lifecycle: draft → challenged
- base_confidence: 0.50 → 0.50（brittle cap 0.55 內）
- 產出 `_meta/critique/agency-theory.md`（~10 KB 完整 Q1-Q4）
- Public page 加 5-line Critique 摘要 blockquote
- Main weaknesses: textbook compilation 過度簡化 Holmström 1979；忽略 behavioral economics + SDT；Claim 4 cite untraceable；Claim 5 false dichotomy
- 耗時 ~5 min 主 agent 純讀寫

## Related

- [[synthesis/critical-llm-wiki-three-step]] — 批判式 wiki 三步法
- [[entities/Karl-Popper]] — falsifiability 出處
- [[concepts/agency-theory]] — Tier 3 first done
