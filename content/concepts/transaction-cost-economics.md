---
title: Transaction Cost Economics (TCE)
type: concept
domain: mgmt
tags: [strategy, vertical-integration, economics, mgmt]
aliases: [TCE, 交易成本經濟學, Coase-Williamson]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Ch10
created: 2026-05-20
updated: 2026-05-20
provenance:
  extracted: 0.75
  inferred: 0.2
  ambiguous: 0.05
base_confidence: 0.45
summary: >-
  Coase（1991 Nobel）+ Williamson（2009 Nobel）回答「公司為什麼存在？」的經濟學理論：當內部行政協調成本 < 外部市場交易成本時，活動被內化進公司。四構念同時存在 → 市場合約成本暴增、內化（垂直整合）划算：Asset Specificity（投資專屬性，易被綁架）、Bounded Rationality（無法寫涵蓋所有未來的合約）、Opportunism（資訊不對稱時自利）、Small-Numbers Bargaining（廠商少、market price 失效）。對比 Adam Smith Invisible Hand vs Alfred Chandler Visible Hand（19 世紀後 multi-unit business 經濟規模到了讓行政協調比市場協調更有效率的臨界點）。
lifecycle: draft
lifecycle_changed: 2026-05-20
ingest_method: read-subagent
---

# Transaction Cost Economics (TCE)

回答「公司為什麼存在？」的經濟學理論：當**內部行政協調成本 < 外部市場交易成本**時，活動被內化進公司；反之則外包到市場。^[extracted]

奠基者：Ronald Coase（1991 Nobel）+ Oliver Williamson（2009 Nobel）。

## 核心構念

| 構念 | 內容 |
|---|---|
| **Asset Specificity** | 投資是否專屬於這筆交易（transaction-specific investment）—— 高 specificity → 易被綁架 → 傾向 internalize |
| **Bounded Rationality** | 無法寫出涵蓋所有未來狀況的合約 → incomplete contracts |
| **Opportunism** | 對方會在資訊不對稱時自利行動 |
| **Small-Numbers Bargaining** | 上下游廠商少 → 沒有競爭壓力 → market price 失效 |

四者同時存在時，市場合約成本暴增 → 內化（垂直整合）較划算。^[extracted]

## Visible Hand vs Invisible Hand

| 視角 | 學者 | 主張 |
|---|---|---|
| **Invisible Hand** | Adam Smith | 市場價格自動協調 → 不需公司 |
| **Visible Hand** | Alfred Chandler | 19 世紀後 multi-unit business 出現，因經濟規模到了讓行政協調比市場協調更有效率的臨界點 |

Chandler 八命題（*The Visible Hand*）：modern multi-unit business 取代小型傳統企業、managerial hierarchy 興起、所有權與經營權分離、經理人偏好長期穩定成長而非當期利潤極大化 ……^[extracted]

## 應用：[[concepts/vertical-integration]] 決策

TCE 是 make-or-buy 的核心框架。10 個判斷因子（Grant Ch10）：

1. 相鄰階段廠商數
2. transaction-specific investments 必要性
3. 資訊不對稱
4. 不確定性 / 不完全合約
5. optimal scale 相似度
6. 策略相似度
7. capability 升級需求
8. profit incentive 重要性
9. 需求不確定
10. 相鄰階段風險

**No generic solution** —— Grant 自己強調：垂直關係設計沒有通解，取決於個別公司的 resources、capabilities、strategy。^[extracted]

## 垂直關係不是二元

Formalization × Degree of Commitment 二維光譜：Spot purchases → Long-term contracts → Agency agreements → Supplier-customer partnerships → Franchises → Joint ventures → Vertical integration。^[extracted]

→ 中間型態（quasi-VI）結合 market discipline 與 internalization 控制力，是現代 supply chain 常態。Apple-Foxconn 即為「整合 + 市場合約」混合。

## 醫療 AI PM 視角

| 決策 | TCE 提問 |
|---|---|
| 演算法自研 vs 收購 startup | model + dataset 是否 transaction-specific？訓練資料是否難以合約轉移？ |
| 標註外包 vs 自建團隊 | 醫師標註的 tacit knowledge 是否 embedded？外包能否複製？ |
| PACS 整合自建 vs 找 SI | HL7/FHIR interface 是否需要長期 specific investment？ |
| AI 服務按次計費 vs subscription | bargaining power 在誰手上？醫院 lock-in 程度？ |

[[concepts/appropriability]] 是 TCE 的姊妹概念：誰拿走利潤取決於 bargaining power × asset specificity × embeddedness。

## 與 Drucker「Do what you do best and outsource the rest」的張力

Grant Ch10 直接點名這句格言**有時是錯的**：忽略了 transaction-specific investment 與 opportunism 風險。市場動態變化，原本「outsource-able」的活動可能變成戰略要害。^[extracted]

## Open Questions

- TCE 對 platform / data-driven 業務的適用性？data 作為 asset 的 specificity 難量化^[ambiguous]
- Williamson 框架是否對 culturally trust-heavy 環境（東亞）失準？

## Related

- [[concepts/vertical-integration]] — TCE 的主要應用
- [[concepts/corporate-vs-business-strategy]] — corporate scope 的母概念
- [[concepts/appropriability]] — TCE 的姊妹（誰拿利潤）
- [[references/grant-contemporary-strategy-analysis]] — Ch10 源頭
