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
| Tier 1 — Top hub pages | 0 | 5 | 5 |
| Tier 2 — Cross-domain hub theories | 0 | 5 | 5 |
| Tier 3 — Research methods 核心 | 1 (agency-theory ✅) | 9 | 10 |
| Tier 4 — Wave 2 supplementary papers | 0 | 6 | 6 |
| Tier 5 — Research methods supporting | 0 | 15 | 15 |
| **總計** | **1** | **40** | **41** |

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

- [ ] **`concepts/disruptive-innovation`** — 62 incoming，Christensen 1997；現成反例多（Lepore 2014 *New Yorker* "Disruption Machine"、Sood-Tellis 2011 *MIS Quarterly*）
- [ ] **`concepts/STP-framework`** — 48 incoming，Kotler 行銷核心
- [ ] **`concepts/VRIO-framework`** — 47 incoming，RBV 經典；常與 Porter's 5F 並用但少人挑戰前提
- [ ] **`concepts/OKR`** — 40 incoming，Intel/Google 神話；OKR vs KPI 二分常 brittle
- [ ] **`concepts/falsifiability-popper`** — 我寫的，本身就有 anthropology / sociology 反例張力可挖

## Tier 2 — Cross-Domain Hub Theories（跨多個 wiki 章節引用）

- [ ] **`concepts/scientific-theory`** — Whetten/Sutton-Staw 標準，影響整個 research-methods 群
- [ ] **`concepts/causality-three-conditions`** — Bhattacherjee + Colquitt 雙來源；影響 internal-validity / 因果推論
- [ ] **`concepts/innovation-diffusion-theory`** — Rogers 五類採用者；近年被 network effect 文獻挑戰
- [ ] **`concepts/elaboration-likelihood-model`** — Petty-Cacioppo dual-process；medical AI 採用 framing
- [ ] **`concepts/social-cognitive-theory`** — Bandura；reciprocal triadic causation 反 falsifiable 嫌疑

## Tier 3 — Research Methods 核心（Bhattacherjee 主幹）

- [x] **`concepts/agency-theory`** — 2026-05-22 done（5 claims: 0 survives / 2 narrow / 3 brittle / 0 unsupported；commit `707ec50`）
- [ ] **`concepts/construct-validity`** — Bhattacherjee Ch7，face/content/convergent/discriminant 多子準則
- [ ] **`concepts/reflective-vs-formative-measurement`** — Coltman 2008；「95% 量表預設 reflective」是強 claim
- [ ] **`concepts/inductive-vs-deductive-research`** — Popper 黑天鵝；deductive 強於 inductive claim
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

- [[concepts/critical-llm-wiki-three-step]]（如有）— 批判式 wiki 三步法
- [[entities/Karl-Popper]] — falsifiability 出處
- [[concepts/agency-theory]] — Tier 3 first done
