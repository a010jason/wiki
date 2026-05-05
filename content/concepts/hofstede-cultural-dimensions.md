---
title: Hofstede's Cultural Dimensions（Hofstede 文化維度）
type: concept
domain: mgmt
tags: [Hofstede, cross-cultural, mgmt, framework]
aliases: [Hofstede 文化維度, Hofstede dimensions, 6D model]
sources:
  - lecture:2023-08-27-溫金豐-跨文化管理
  - https://www.hofstede-insights.com/country-comparison/taiwan/
created: 2026-05-05
updated: 2026-05-05
summary: >-
  Geert Hofstede 在 IBM 全球員工調查基礎上建立的 6 個量化文化維度。台灣的 profile：高權力距離（58）、高集體主義（17）、偏陰柔（45）、高不確定性避免（69）、極長期導向（93）、中性放縱（49）。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.55
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Hofstede's Cultural Dimensions

## 來源

Geert Hofstede 在 IBM 任職期間透過全球員工調查建立的文化量化維度模型，最早 4 維度，後擴充至 6 維度。資料庫至今 [hofstede-insights.com](https://www.hofstede-insights.com/) 仍可線上查國別比較。^[extracted]

## 6 個維度（含台灣分數）

| 維度 | 定義 | 台灣 | 解讀 |
|---|---|---|---|
| **Power Distance（權力距離）** | 社會成員是否接受組織中的權力不對等 | **58** | hierarchical society；員工接受層級安排，老闆是 benevolent autocrat（仁慈獨裁者）|
| **Individualism（個人 vs 集體主義）** | 社會成員之間相互依賴的程度 | **17** | 強集體主義；員工/雇主關係如家庭，hiring/promotion 看 in-group；忠誠優先於一般規則 |
| **Masculinity（陽剛 vs 陰柔）** | 動機是「想當最好」還是「喜歡你做的事」 | **45** | 偏陰柔；strive for consensus、work-life balance、自由時間與彈性是激勵物 |
| **Uncertainty Avoidance（不確定性避免）** | 對模糊或未知情境的威脅感與避免傾向 | **69** | 高 UA；rigid rules（即使規則沒效）、time is money、追求精確守時、innovation may be resisted |
| **Long-term Orientation（長期導向）** | 對過去與未來的連結方式 | **93** | 極高長期導向；pragmatism、儲蓄與投資、堅毅、尊重美德 |
| **Indulgence（放縱 vs 克制）** | 對慾望與衝動的控制程度 | **49** | 中性 |

^[extracted]

## 兩維度應用：權力距離 × 不確定性避免

四種典型組織型態：^[extracted]

| | **低 UA**（容錯） | **高 UA**（避錯） |
|---|---|---|
| **低權力距離** | **村落市場**（英語系、北歐）<br>分權化、員工自由移動、創業精神、高度授權、重視非正式關係、社會控制 | **精密機器**（日耳曼語系）<br>分權化決策、狹窄控制幅度、專業人才、重視專業職的角色、功能式組織結構、流程協調與控制 |
| **高權力距離** | **家庭或族群**（亞洲）<br>集權化、退情主義、重視忠誠、全能人才、重視個性的角色、強調個人關係、社會控制 | **傳統科層**（拉丁美洲）<br>集權化決策、高階層負責協調、比較少授權、金字塔結構、重視層級的角色、投入控制 |

→ 台灣（PD=58, UA=69）位於「家庭或族群」與「傳統科層」之間，偏右上。^[inferred]

## 關鍵應用洞察

1. **跨國併購文化整合**：母公司與子公司在 PD/UA 維度差距 > 30 → 高失敗風險 ^[inferred]
2. **管理風格選擇**：高 PD 國家硬推 flat hierarchy 會造成混亂；低 PD 國家硬推 top-down 會造成 disengagement ^[inferred]
3. **激勵設計**：高陰柔社會（如台灣）金錢激勵效果遞減，工作生活平衡更有用 ^[extracted]
4. **創新管理**：高 UA 國家對 innovation 抗拒度高 — 對導入 [[concepts/agile-organization]] 是阻力 ^[inferred]

## 限制與批判

- **資料源於 1970s IBM 員工**，文化變遷後 30 年代表性是否仍適用？^[ambiguous]
- 國家內部差異（台灣城鄉、世代）可能 > 國家間差異 ^[inferred]
- Power Distance Index 的測量題目本身有 cultural framing 偏誤
- Hofstede 模型常被批評過於將文化「平均化」，忽略次文化

## Related

- [[concepts/cross-cultural-management]] —— 上層概念
- [[concepts/cultural-intelligence-CQ]] —— 個人層次的跨文化適應能力
- [[synthesis/taiwan-culture-mgmt-implications]] —— 套到台灣／台商管理意涵
- [[concepts/agile-organization]] —— 高 UA 的台灣對 agile 的阻力

## Sources

- [[entities/wen-jin-feng]] 2023/8/27 課程
- hofstede-insights.com 線上查詢工具
