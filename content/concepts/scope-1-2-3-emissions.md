---
title: Scope 1 / 2 / 3 溫室氣體排放分類
type: concept
domain: esg, climate, accounting
tags: [GHG, carbon, scope, accounting, ESG]
aliases: [Scope 1, Scope 2, Scope 3, 範疇一, 範疇二, 範疇三, GHG Protocol]
created: 2026-05-21
updated: 2026-05-21
summary: >-
  GHG Protocol（WRI/WBCSD）建立並被 ISO 14064-1:2018 採用的溫室氣體排放分類，分 Scope 1（直接排放，公司鍋爐 / 車輛 / 製程燃燒）/ Scope 2（外購能源間接，電力 / 蒸汽 / 熱力）/ Scope 3（其他間接，上下游供應鏈、員工通勤、產品使用、廢棄處理）。新版 ISO 14064-1:2018 進一步把 Scope 3 細分為 Category 3–6。常見錯誤：把 IPCC 國際排放係數當最優先，實際應為自廠係數最優先。
confidence: medium
lifecycle: draft
lifecycle_changed: 2026-05-21
---

## TL;DR

由 GHG Protocol（WRI/WBCSD）建立並被 ISO 14064-1:2018 採用的溫室氣體排放分類，將企業排放區分為 **Scope 1（直接）/ Scope 2（外購能源）/ Scope 3（其他間接）**。新版 ISO 14064-1:2018 進一步把 Scope 3 細分為 **Category 3–6**，共 6 大類排放源。

## 三大範疇

| Scope | 名稱 | 例子 | 控制度 |
|---|---|---|---|
| **Scope 1** | 直接排放 | 公司擁有的鍋爐、車輛、製程燃燒、洩漏 | 高（直接管控） |
| **Scope 2** | 能源間接 | 外購電力 / 蒸汽 / 熱力 / 冷氣的上游排放 | 中（透過綠電採購可降） |
| **Scope 3** | 其他間接 | 上下游供應鏈、員工通勤、產品使用、廢棄物處理、租賃資產 | 低（需供應鏈協作） |

## ISO 14064-1:2018 六範疇細分

新版將 Scope 3 拆為 4 個 Category：

| Category | 名稱 | 對應 |
|---|---|---|
| **Cat. 1** | 直接溫室氣體排放 | = Scope 1 |
| **Cat. 2** | 輸入能源間接排放 | = Scope 2 |
| **Cat. 3** | 運輸間接排放 | Scope 3（上下游運輸） |
| **Cat. 4** | 組織使用產品造成的間接排放 | Scope 3（採購商品/服務、資本商品） |
| **Cat. 5** | 與組織產品使用相關的間接排放 | Scope 3（產品下游使用 / 廢棄處理） |
| **Cat. 6** | 其他來源造成的間接排放 | 待界定（如租賃資產、投資） |

## 計算公式

```
排放量 = 活動強度 × 排放係數 × GWP 值
e.g. 500 mL 牛奶 × 2.48 kgCO2e/L × 1 = 1.24 kgCO2e
```

## 排放係數優先順序

依 [[references/esg-lecture-corpus]] / CarbonAccounting-Zhang (p.24-25)：

1. **自廠發展係數 / 質能平衡所得係數**（最優先）
2. 同製程 / 設備經驗係數
3. 製造廠提供係數
4. 區域排放係數 / 台電公告係數
5. 國家排放係數 / 能源局公告係數
6. 聯合國 IPCC 國際排放係數（最末位）

→ **常見錯誤**：把 IPCC 國際係數當最優先，實際應為**自廠係數最優先**。

## GWP（全球暖化潛勢，IPCC AR4）

| 氣體 | GWP（100 年） |
|---|---|
| CO2 | 1 |
| CH4（甲烷） | 23 |
| N2O（氧化亞氮） | 296 |
| HFCs | 12–12,000 |
| PFCs | 5,700–11,900 |
| SF6（六氟化硫） | 22,200 |

## 揭露要求

- **ISO 14064-1**：[[concepts/ISO-14064-1]] 組織型盤查
- **ISO 14067**：[[concepts/ISO-14067]] 產品型碳足跡
- **IFRS S2**：Scope 1+2+3 強制揭露（[[concepts/ISSB-IFRS-S1-S2]]）

## 來源

- [[references/esg-lecture-corpus]] / CarbonAccounting-Zhang (p.20-30)、CarbonDisclosure-Tang-2023 (p.21-30)
