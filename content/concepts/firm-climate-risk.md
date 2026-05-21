---
title: Firm Climate Risk（企業層級氣候風險）
type: concept
domain: mgmt
tags: [climate, firm-level, agency, incomplete-contract, ESG, bank-loan]
aliases: [firm-level climate risk, 企業氣候風險]
sources:
  - reference:Huang-2022-SMJ
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Firm-level climate risk = 企業作為氣候風險**受害者**（而非加害者 / emitter）的視角研究。Huang et al. (2022 SMJ) 用雙測量（Perceived from CDP / Real from SHELDUS）連到 bank loan terms 三維（spread / collateral / covenants）。理論基底：Merton 1974 結構式信用 + Jensen-Meckling 1976 agency + Coase 1937 incomplete contract + NRBV/Dynamic capability。內部氣候管理機制（5 個 dummy）可緩和不利條款。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Firm Climate Risk

## 視角轉換 ^[extracted]

過去氣候研究多停留在：
- **Macro 層**（Dell/Jones/Olken 2014; Nordhaus 2006）
- **加害者視角**（emitter / 罪犯，如 Chava 2014 對 high-pollution firms）

Huang et al. (2022) [[references/huang-2022-firm-climate-risk-bank-loan]] **填補 firm-level + 受害者視角的 gap**：把企業視為氣候風險受害者，連結到 bank loan 合約細節。

## 雙測量設計 ^[extracted]

| 測量 | 來源 | 性質 |
|---|---|---|
| **Perceived Climate Risk** | CDP 問卷自評 | 主觀 / 管理者認知 |
| **Real Climate Risk** | SHELDUS（按公司營運州/縣加權的實際災害） | 客觀 / 外生 |

兩者標準化後比較（Panel C, p-value for difference = 0.12 / 0.95 / 0.24）→ **結論對 measurement choice robust**。

→ 這是 multi-trait 多重測量的教科書範例 — 同 construct 用兩個 independent indicator 確認。

## 對銀行貸款的三維影響 ^[extracted]

| 應變數 | Statistical model |
|---|---|
| **Ln(Spread)** | OLS |
| **Secured**（是否需抵押） | Logit |
| **Covenants**（契約條款數量） | Poisson |

**經濟意義**：對中位 spread 273 bps，標準化 perceived risk +1 SD → spread **+7.1%**、covenants **+14%**。

## 5 個氣候管理機制（H2 moderator）^[extracted]

從 CDP 問卷的 dummy：
1. **Business Strategy**：氣候納入整體業務戰略
2. **Board-Level Governance**：氣候最高責任在董事會
3. **Risk-Managing Process**：專門氣候風險管理流程
4. **Climate Opportunity**：把氣候視為機會
5. **Policymaking Involvement**：參與影響氣候變遷的政策

H2 結果：多數機制負向 moderate（降低貸款嚴格度），但：
- **Board Governance 對 Covenants 不顯著**
- **Policymaking Involvement 對 Covenants 不顯著**

## 理論整合 ^[extracted]

| Stream | 主張 | 對應 wiki 頁 |
|---|---|---|
| **Merton (1974) 結構式信用模型** + Black-Scholes put option | 股東持有對銀行的隱含賣權 → 氣候災難 → put option in-the-money | — |
| **Jensen & Meckling (1976) Agency Cost** | 銀行 only 承擔下檔損失 → asymmetric payoff | [[concepts/agency-theory]] |
| **Coase + Grossman-Hart + KCA Incomplete Contract** | 氣候不確定大 → 合約不完整 → 銀行需 control rights | [[concepts/incomplete-contract-theory]] 待寫 |
| **Aragon-Correa & Sharma 2003 NRBV + Teece 2007 Dynamic Capability** | 主動氣候管理 → organizational adaptation = natural hedge | — |

**整合邏輯**：價格條款（spread）+ 非價格條款（collateral, covenants）= **complementary control rights** 解決合約不完整問題。

## Channel Test（mediation-like）^[extracted]

Table 4 用以驗證機制：
- Perceived risk → ROA_{t+1}：β=-0.008 (p=0.060) — 邊緣顯著負
- Perceived risk → CFO_{t+1}：顯著負
- Perceived risk → Prob.Default_{t+1}：β=0.027 (p=0.014) — 顯著正

→ 確認氣候風險惡化財務表現與違約機率 → 反推銀行為何索取更嚴條款。

## 反例 / 質疑 ^[extracted, inferred]

**作者自承**：
- Binary 測量過粗
- 未捕捉 soft information（Liberti & Petersen 2019）

**學生簡報質疑**（[[references/huang-2022-firm-climate-risk-bank-loan]]）：
- 為何只 bank loan？bonds / equity 不算？
- 農民貸款？看天吃飯的行業？
- Board Governance 怎麼驗 good or bad？
- 產業別差異未處理
- **CDP voluntary disclosure selection bias**：自願揭露 ≈ ESG 領先者
- 跨國產業差異？
- 納入這些 practice 的成本？

**進一步質疑**：
- H2 用 OLS subset 沒做 IV / DID / matched sample → 難排「好公司同時做氣候管理 + 拿好條款」reverse causation
- Real Climate Risk 用過去災害推未來，**過去 ≠ 未來**
- Editor Chatterji 多篇 ESG paper，可能 publication bias

## 對醫療 AI PM 的跨域類比 ^[inferred]

**揭露機制設計**：
- CDP voluntary disclosure ≈ FDA pre-market submission 風險揭露
- 兩者都自願 / 強制混合 + selection bias

**非價格條款的 PACS / HIS 採購對應**：
- 銀行對氣候曝險公司加 covenants ≈ 醫院對 AI 廠商的 **performance SLA / data ownership / liability cap**
- 都是 incomplete contract 下的 control rights

## Related

- [[references/huang-2022-firm-climate-risk-bank-loan]]
- [[concepts/physical-climate-risk]]
- [[concepts/agency-theory]]
- [[concepts/incomplete-contract-theory]] — 待寫
- [[concepts/instrumental-variable-2SLS]] — 處理 endogeneity 工具（Huang 等未用，學生質疑點之一）

## Sources

- [[references/huang-2022-firm-climate-risk-bank-loan]]
