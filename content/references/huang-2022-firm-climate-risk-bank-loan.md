---
title: Huang et al. (2022) — Firm Climate Risk, Risk Management, and Bank Loan Financing (SMJ)
type: reference
domain: mgmt
tags: [climate-risk, finance, SMJ, agency-theory, ESG, bank-loan]
aliases: [Huang 2022, firm climate risk bank loan]
sources:
  - id: huang-2022-firm-climate-risk
    type: journal-article
    rel_path: 管理專題研討/Copy of Firm climate risk  risk management  and bank loan financing_整合.pdf.pdf
    drive_url: https://drive.google.com/file/d/1K1T6YMKGTH2hAGM3xRI_1gzSgryqiY7-/view
    pages: 58
    sha256: b315a34ac71e3a23584d85d5682c2b387197b764e79a068167af21794bdcb82d
    note: 「整合 PDF」實為學生課堂簡報報告（720x405pt slides 58 頁，雙語對照），不是論文 PDF 本體。原論文 DOI 在下方。
    doi: 10.1002/smj.3437
    journal: Strategic Management Journal
    year: 2022
    volume: 43(13)
    pages_in_journal: 2849-2880
    ingested_commit: pending
visibility: public
confidence: high
lifecycle: draft
created: 2026-05-21
updated: 2026-05-21
lifecycle_changed: 2026-05-21
---

## Citation

> Huang, H. H., Kerstein, J., Wang, C., & Wu, F. (H.) (2022). Firm climate risk, risk management, and bank loan financing. *Strategic Management Journal*, 43(13), 2849-2880. https://doi.org/10.1002/smj.3437

**作者**：
- Henry He Huang (Yeshiva University)
- Joseph Kerstein (Yeshiva University)
- **Chong Wang** (HK Polytechnic, corresponding)
- Feng (Harry) Wu (Lingnan University, HK)

**Editor**：Aaron Chatterji

## What this is

SMJ 2022 實證論文：把企業視為氣候風險**受害者**（非加害者），連結 firm-level climate risk → bank loan terms（spread / collateral / covenants）；並測試 5 個內部氣候管理機制能否緩和。

**整合 PDF 性質**：實際 PDF 是 4 位 AMBA 學生（5127009 林孟緯 / 5127012 鍾岳君 / 5127015 林依靜 / 5127025 賴巧純）的課堂報告 deck，雙語對照 + 邊緣手寫質疑註記。教師用此 deck 在「管理專題研討」做批判閱讀練習。

## Why selected by 教師 ^[inferred]

從研究方法論角度的多重教學目的：

1. **三種 DV + 三種 estimator**：OLS（連續 spread）/ Logit（binary secured）/ Poisson（covenants 計數）— 教學生**根據 DV 分佈選對 estimator**
2. **Construct operationalization 多重測量**：Perceived（CDP self-report）vs Real（SHELDUS 災害資料）→ Panel C 標準化後比較 → robustness check 教科書範例
3. **理論到實證 traceable**：Merton 1974 / Jensen-Meckling 1976 / Coase 1937 incomplete contract theory + Hart 1995 NRBV / Teece 2007 dynamic capability → 對應 H1（價格 + 非價格條款）、H2（5 個管理機制）
4. **Channel test 教學**：Table 4 用 ROA / CFO / Default 驗證 mediation-like causal story
5. **多資料庫合併**：CDP + SHELDUS + DealScan + Compustat + IBES + Federal Reserve + 10-K — 教 multi-source join + identifier match
6. **批判閱讀**：學生簡報滿頁手寫質疑 → 標準 PhD seminar 訓練

## Key findings

### H1 — Climate Risk → 更嚴貸款條款（全支持）

| Hypothesis | Perceived β | Real β |
|---|---|---|
| H1a → Ln(Spread) | 0.155** | 0.031** |
| H1b → Secured | 0.544* | 0.084** |
| H1c → Covenants | 0.309** | 0.034** |

**經濟意義**：對中位 spread 273 bps，標準化 perceived risk +1 SD → spread +7.1%, covenants +14%。

### H2 — 5 個管理機制（多數支持，部分例外）

| 管理機制 | Spread | Secured | Covenants |
|---|---|---|---|
| Business Strategy | 顯著 - | 顯著 - | 顯著 - |
| Board Governance | 顯著 - | 顯著 - | **不顯著** |
| Risk-Managing Process | 顯著 - | 顯著 - | 顯著 - |
| Climate Opportunity | 部分顯著 | 顯著 - | 顯著 - |
| Policymaking Involvement | 顯著 - | 顯著 - | **不顯著** |

### Channel Tests（Table 4）

- Perceived climate risk → ROA_{t+1} 顯著 -（-0.008, p=0.06）
- → CFO_{t+1} 顯著 -
- → Prob.Default_{t+1} 顯著 +（0.027, p=0.014）

→ 確認氣候風險惡化財務表現與違約機率 → 反推銀行為何索取更嚴條款。

## 樣本

| 模型 | N | 樣本量 |
|---|---|---|
| Real Climate Risk | 11,805 筆貸款合約 / 2,763 家企業 | 2007-2014 美國 |
| Perceived Climate Risk | 1,018 筆貸款 / 294 家企業 | CDP 回應限制 |
| H2 moderation | 672（perceived） / 559（real） | 進一步縮樣 |

## 理論框架（三股）^[extracted]

| Stream | 主張 |
|---|---|
| **Merton (1974)** + Black-Scholes put option | 股東持有對銀行的隱含賣權；氣候災難 → put option in-the-money |
| **Jensen & Meckling (1976) Agency Cost** | 銀行只承擔下檔損失，不分享上檔利益 → asymmetric payoff → agency conflict |
| **Coase (1937) + Grossman-Hart (1986) + KCA (1978) Incomplete Contract** | 氣候不確定性巨大 → 合約本質不完整 → 銀行需 control rights（covenants / collateral） |
| **Aragon-Correa & Sharma (2003) NRBV + Teece 2007 Dynamic Capability** | 企業主動氣候管理可創 organizational adaptation 能力（natural hedge） |

→ 整合邏輯：價格 + 非價格條款 = complementary control rights 解決合約不完整。

## 反例 / 質疑 ^[extracted + inferred]

### 作者自承

1. **二分法測量過粗**：CDP 自評與 SHELDUS 都採 binary
2. **未捕捉 soft information**（Liberti & Petersen 2019）

### 學生簡報手寫質疑

| 頁 | 質疑 |
|---|---|
| p.6 | 為何鎖定 bank loan？bonds / equity 不算？ |
| p.17 | 農民貸款？看天吃飯的行業？ |
| p.19 | Board Governance 怎麼驗 good or bad？ |
| p.21 | 產業別差異未處理？ |
| p.25 | Spread 是利息支付總額還是利率？ |
| p.41 | 公司傾向不揭露 → 資料正確性？**selection bias on CDP** |
| p.42 | 跨國產業型態差異？ |
| p.46 | 納入這些 practice 的成本？ |

### 進一步質疑（distill 推論）

- **內生性處理薄弱**：H2 樣本沒做 IV / DID / matched sample，難排除「好公司同時做氣候管理 + 拿好條款」reverse causation
- **CDP 自願揭露偏誤**：1,018 → 672 進一步縮樣，未做 Heckman correction
- **Real Climate Risk**：用過去災害推未來，過去 ≠ 未來
- **Editor Chatterji 立場**：多篇 ESG paper，可能潛藏 publication bias

## Related

- [[concepts/firm-climate-risk]]
- [[concepts/physical-climate-risk]] — Chinese bank report 對應
- [[concepts/agency-theory]]
- incomplete contract theory — 待寫
- [[concepts/instrumental-variable-2SLS]] — Huang 等本論文未用 IV，但 chatbot study 用了
- [[concepts/sampling-frame]] — CDP voluntary disclosure 是 selection bias 範例

## License

SMJ journal article, Wiley；本 wiki 只 distill 不重製文章內容。
