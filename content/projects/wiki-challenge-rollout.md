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
| Tier 2 — Cross-domain hub theories | 4 (scientific-theory ✅ / causality-three-conditions ✅ / innovation-diffusion-theory ✅ / elaboration-likelihood-model ✅) | 1 | 5 |
| Tier 3 — Research methods 核心 | 4 (agency-theory ✅ / construct-validity ✅ / reflective-vs-formative ✅ / inductive-vs-deductive ✅) | 6 | 10 |
| Tier 4 — Wave 2 supplementary papers | 0 | 6 | 6 |
| Tier 5 — Research methods supporting | 0 | 15 | 15 |
| **總計** | **13** | **28** | **41** |

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
- [ ] **`concepts/social-cognitive-theory`** — Bandura；reciprocal triadic causation 反 falsifiable 嫌疑

## Tier 3 — Research Methods 核心（Bhattacherjee 主幹）

- [x] **`concepts/agency-theory`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；commit `707ec50`）
- [x] **`concepts/construct-validity`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；single-source Bhattacherjee、Messick unified view 未引、Fornell-Larcker 已被 HTMT 取代 10 年、Coltman "95% reflective" 是 MIS 子領域 snapshot 被過度推廣）
- [x] **`concepts/reflective-vs-formative-measurement`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；Coltman 是綜述非首發，前置 Bollen-Lennox 1991 / Jarvis 2003 / Edwards-Bagozzi 2000 未引；反方 Bagozzi 2007 / Howell 2007 缺席；binary split 忽略 MIMIC + composite；PLS-SEM-only 過強）
- [x] **`concepts/inductive-vs-deductive-research`** — 2026-05-22 done（5 claims: 0 survives / 3 narrow / 2 brittle / 0 unsupported；100% Bhattacherjee；Wallace 1971 / Hume 1748 / Peirce 1903 abduction / Bryman 2007 critique 全未引；Popper 框架忽略 Bayesian/PAC 70 年發展；deductive>inductive 漏 conditional 關鍵 caveat；critical realism retroduction missing；mixed-mode aspirational claim）
- [ ] **`concepts/theory-vs-not-theory`** — Sutton-Staw 五件不是 theory；對 grounded theory 不公
- [ ] **`concepts/theory-building-blocks-whetten`** — Whetten 1989 四 blocks
- [ ] **`concepts/attributes-of-good-theory`** — 5 準則 + falsifiability/parsimony 衝突
- [ ] **`concepts/research-design`** — design hub
- [ ] **`concepts/internal-validity`** — causality 三條件 + threats
- [ ] **`concepts/external-validity`** — internal-external trade-off 反論

## Tier 4 — Wave 2 Supplementary Papers（單篇 paper 衍生 concepts）

- [ ] **`concepts/human-like-AI-competencies`** — Chandra 2022；H1b 不支持的 4 boundary conditions 是 ad hoc rationalization？
- [ ] **`concepts/common-method-bias`** — Harman 已被 Aguirre-Urreta 批 power 不足
- [ ] **`concepts/instrumental-variable-2SLS`** — Cragg-Donald > 10 threshold 是 simulation heuristic
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
