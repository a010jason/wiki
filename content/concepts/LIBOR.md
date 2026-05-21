---
title: LIBOR（London Inter Bank Offered Rate）— 退場與 RFR 替代
type: concept
domain: finance
tags: [LIBOR, SOFR, benchmark-rate, banking, governance-failure, reform]
aliases: [LIBOR, 倫敦銀行同業拆借利率]
sources:
  - reference:pwc-libor-2019
created: 2026-05-21
updated: 2026-05-21
summary: >-
  LIBOR（倫敦銀行同業拆借利率）是 1980s BBA 建立的銀行同業無擔保拆借報價基準，30 多年為國際金融市場核心利率。**核心缺陷**：(1) 報價機制易被操縱（2012 Barclays / Deutsche Bank / UBS / RBS 醜聞）、(2) 每天 5 億美元拆借量定價 200 兆美元資產（比例 1:400,000 失衡）、(3) 監管要求變化導致市場萎縮。**替代利率**：SOFR (USD, secured) / ESTER (EUR) / SONIA (GBP) / SARON (CHF, secured) / TONAR (JPY) — 都是隔夜 RFR，與 LIBOR 期限結構不同。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.35
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# LIBOR

## 定義 ^[extracted]

> **L**ondon **I**nter **B**ank **O**ffered **R**ate — 銀行同業間無擔保短期拆借的報價基準利率。

- 1980 年代英國銀行業協會（BBA）建立
- 最初選 **20 家報價行**
- 演算法：**扣除極端值後取算數平均數**（trimmed mean）
- 涵蓋：**5 幣 × 7 期 = 35 個 rate**
  - 幣別：USD / EUR / GBP / CHF / JPY
  - 期限：隔夜、7 天、1 月、2 月、3 月、6 月、12 月
- **最常用：3 個月美元 LIBOR**
- 2012 年管理權由 BBA 移交給 **ICE（Intercontinental Exchange）**

## 三大內在缺陷 ^[extracted]

| # | 缺陷 | 說明 |
|---|---|---|
| 1 | **報價機制易被操縱** | 基於 banker **主觀報價**（非實際成交） → 存在操縱動機與空間 |
| 2 | **市場萎縮 vs 資產規模失衡** | 2008 後 TLAC / LCR 監管 → 無擔保拆借萎縮 → **每天 5 億美元拆借量定價 200 兆美元資產**（1:400,000） |
| 3 | **2012 操縱醜聞** | Barclays / Deutsche Bank / UBS / RBS 遭調查或處罰 |

## 操縱醜聞 ^[extracted, inferred]

涉案銀行（pwc-libor-2019 PDF 未列罰款細節）：
- **Barclays** — 罰款 $450M（2012）^[inferred from public record]
- **UBS** — 罰款 $1.5B ^[inferred]
- **Deutsche Bank** — 罰款 $2.5B ^[inferred]
- **RBS** — 罰款 $612M ^[inferred]

個人刑責：**Tom Hayes**（UBS/Citi trader）2015 年被判 11 年（後縮短）^[inferred]。

## 退場時程 ^[extracted]

| 年份 | 事件 |
|---|---|
| 2012 | ICE 接手 BBA 管理權 |
| 2017 | FCA 宣布退場意向 |
| 2019/03 | HKMA 發布過渡指引 |
| 2022 | 原訂銀行不再被要求提供 LIBOR |
| 2023/06/30 | USD LIBOR 大部分 tenor 實際停止 ^[inferred, FCA 後續延後] |

## 五種替代利率（RFRs）^[extracted]

| 幣別 | 替代利率 | 全名 | 是否有擔保 |
|---|---|---|---|
| USD | **SOFR** | Secured Overnight Financing Rate | **有擔保** |
| EUR | ESTER | Euro Short-Term Rate | 無擔保 |
| GBP | SONIA | Sterling Overnight Index Average | 無擔保 |
| CHF | SARON | Swiss Average Rate Overnight | **有擔保** |
| JPY | TONAR | Tokyo Overnight Average Rate | 無擔保 |

## RFRs 與 LIBOR 的根本差異 ^[extracted]

| 維度 | LIBOR | RFRs |
|---|---|---|
| **期限** | 7 種期限 | **僅隔夜 overnight only** |
| **基礎** | 前瞻預期報價（forward-looking, expectation-based） | 事後成交利率（**backward-looking, transaction-based**） |
| **擔保** | 純無擔保 | SOFR / SARON 有擔保（含擔保品成本） |
| **每日成交量** | 5 億 USD | SOFR ~7,000-8,000 億 USD（高 1,400-1,600 倍） |

→ 期限結構需要透過收益率曲線重新建構；風險定價邏輯不同。

## 過渡挑戰 ^[extracted]

1. **建立期限利率**：需發展遠期、交換等衍生品配套
2. **發展不均**：英美兩國（SOFR / SONIA）衍生品市場成熟、進展快
3. **平穩銜接**：避免大量浮動利率產品因 LIBOR 終止而**被動變成固定利率**（fallback 困境）

## 金融機構應對的八大面向 ^[extracted]

PwC Taiwan 建議：
1. LIBOR 市場流動性
2. 新基準利率市場
3. 風險及評價模型
4. 合約識別
5. 合約修正
6. 系統及流程變更
7. 市場推廣及一致性
8. 稅務、會計及其他影響

## 為何教師選這篇（PwC LIBOR 文宣）^[inferred]

研究方法 + 管理角度：

1. **風險管理失靈經典案例**：報價系統依賴主觀判斷的內控失敗
2. **「基礎建設 too big to fail」現象**：200 兆 USD 資產依賴 5 億 USD 市場 — 治理失敗範本
3. **跨部門變革管理**：8 面向 + 跨功能影響圖示範**大規模組織變革** cascade
4. **顧問業文宣分析訓練**：教學生**閱讀 thought leadership** — 看出哪些是事實、哪些是放大不確定性以推銷服務
5. **倫理 + 治理**：governance failure 的具體案例
6. **不確定性下的策略決策**：監管未定、技術未成熟、deadline 迫近

## 反例 / 質疑 ^[inferred, ambiguous]

PwC 文宣未提：
- 罰款具體金額與個人刑責
- 2022 退場日期已延後至 2023/06/30
- **SOFR 自身爭議**：2019/09 repo 市場流動性危機讓 SOFR 飆升；**credit-sensitivity 缺失**（zero credit spread 對銀行放貸不友善）
- **AMERIBOR / BSBY** 等 credit-sensitive 競爭者出現
- **Legacy contract fallback** 細節（ISDA fallback protocol、UK Critical Benchmarks Act）
- 零售房貸消費者保護議題
- **顧問業利益動機**：誇大複雜度推銷顧問服務

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 2 narrow / 2 brittle / **1 unsupported**。整頁主要弱點是 **single-source PwC consulting firm marketing + academic/regulatory primary sources 系統性缺席**：(1) 三大缺陷 brittle — Hou-Skeie 2014 *JFE* "LIBOR: Origins, Economics, Crisis, Scandal, and Reform" + Wheatley Review 2012 + FCA Bailey 2017 全未引；「1:400,000 失衡」是 reference rate 本質特徵被誤解為 LIBOR 特有 bug；(2) 5 種 RFR universally accepted narrow — AMERIBOR / BSBY / Term SOFR 市場分裂與 adoption heterogeneity 未進入主表格；(3) RFR vs LIBOR backward vs forward trade-off 不平衡，CME Term SOFR 2021 已部分破解「overnight-only」框架未提；(4) PwC 8 面向 best practice brittle — ARRC playbook + ISDA 2020 IBOR Fallback Protocol industry consensus alternative 未引，page 自承「顧問業利益動機」但未影響主 claim；(5) **教師選擇此篇理由 unsupported** — page 自承 `^[inferred]` 但 claim 強度高，HBS LIBOR case + Stulz 2010 *JACF* + Hou-Skeie 2014 academic alternative 全未提（rollout 用戶質疑「PwC 文宣，顧問業利益動機」嫌疑成立）。
>
> `base_confidence`：0.35 → 0.35（已在 unsupported cap 0.35 觸頂）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/LIBOR.md`。

## 與 wiki 既有概念連結 ^[inferred]

- [[concepts/agency-theory]] — banker 自利報價是 agency conflict
- incomplete contract theory — 待寫，金融基礎建設變革對既有合約衝擊
- [[concepts/scientific-method-four-criteria|Replicability]] — LIBOR 操縱可長期未被偵測是 measurement integrity 失靈
- `synthesis/governance-failure-libor-pattern` — 待寫，與其他治理失敗案例（Enron、2008 等）對比

## Related

- [[concepts/agency-theory]]
- incomplete contract theory — 待寫
- pwc libor 2019 — 待寫
- [[references/bhattacherjee-social-science-research]] — 課程教材

## Sources

- PwC Taiwan 資誠（2019）。【金融焦點】LIBOR 即將步入歷史，金融機構如何處變不驚？作者：梁鴻烈、林信宏。
