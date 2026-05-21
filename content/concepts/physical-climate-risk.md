---
title: Physical Climate Risk（物理氣候風險）
type: concept
domain: finance
tags: [climate, ESG, risk-management, finance, physical-risk]
aliases: [physical climate risk, 物理氣候風險]
sources:
  - reference:chinese-bank-physical-climate-risk-2021
  - reference:Ma-Jun-2020-environmental-risk-analysis
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Physical climate risk = 各種與環境和氣候相關的自然災害和事件造成不利後果的可能性。馬駿（北京綠色金融院）四類來源：極端氣候災害 / 海平面上升 / 生態污染 / 自然資源破壞。**TCFD 主流二分**：Acute（颱風 / 洪水 / 熱浪 / 野火）vs Chronic（海平面 / 平均溫度 / 降雨型態）。**與 Transition risk 此消彼長**：高溫升下 physical 主導（>95% 影響），低溫升下兩者持平。對銀行：押品減值 → LTV ↑ → PD ↑ → EL ↑ 的傳導鏈。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.35
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Physical Climate Risk

## 定義 ^[extracted]

> 各種與環境和氣候相關的自然災害和事件造成不利後果的可能性。

**馬駿四類來源**（北京綠色金融與可持續發展研究院院長，2020）：
1. 各種極端氣候災害（洪澇、台風、暴風雪、乾旱、山火）— 主流重點
2. 海平面上升
3. 生態環境污染事故
4. 自然資源破壞和短缺

## TCFD 主流二分 ^[inferred]

雖然 Chinese bank report 沒直接用 TCFD framework，國際主流仍以 acute / chronic 分：

| 類型 | 中文 | 範例 |
|---|---|---|
| **Acute** | 急性 | 颱風、洪水、熱浪、野火 |
| **Chronic** | 慢性 | 海平面上升、平均溫度、降雨型態變化 |

## Physical vs Transition Risk ^[extracted]

| 維度 | Physical | Transition |
|---|---|---|
| 內容 | 被動接受氣候惡化的成本 | 主動應對氣候變化的代價 |
| 來源 | 自然災害、長期氣候變化 | 政策轉變、技術革新、市場偏好、商業模式 |
| 與溫升關係 | 正相關 | 與「減碳行動」正相關 |

**此消彼長 framing**（作者明說「**理論分析來看**」，邏輯推論非鐵律）：
- 溫升 ↑ → physical risk ↑
- 為控溫採取的行動 → transition risk ↑

**AVIVA + Carbon Delta 實證**：
- 3°C / 4°C 高溫升：**>95% 影響來自 physical**
- 1.5°C / 2°C 低溫升：physical vs transition 基本持平

## 風險傳導鏈（對銀行）^[extracted]

```
直接損失（廠房 / 住房 / 設施毀損）   間接損失（停工、收入減）
              ↓                              ↓
              └──────────┬───────────────────┘
                         ↓
              企業 / 個人資產負債、收入、現金流
                         ↓
                  財務指標變化（風險模型 input）
                         ↓
              PD / LGD / EL 變化（風險模型 output）
```

具體範例：
- 洪水 → 廠房損毀 + 抵押物價值下降 → LTV 上升 → PD 上升 → EL 上升
- 清華綠金案例：台風 → 沿海住房按揭 LTV → PD / EL

## 量化模型兩層架構 ^[extracted]

### Layer 1: 巨災風險模型（Catastrophe Risk Model）

**四模組**：

| 模組 | 內容 |
|---|---|
| **Hazard module** | 特定區域 × 特定災害的歷史頻率與強度 |
| **氣候變化加劇模組** | 不同溫升情境下溫升 1°C 對該災害的頻率與強度增幅 |
| **Exposure module** | 待研究資產的地理位置（經緯度、海拔）與價值分佈 |
| **Vulnerability module** | 災害強度 → 資產價值減損的對應（風速 → 房屋減值%） |

**地理需求**：
- 台風分析：經緯度即可
- 洪水分析：必須加海拔

### Layer 2: 金融風險模型

把巨災模型輸出（資產減值）換算成金融指標 → 串到貸款違約率模型、企業價值模型、保險精算。

## 重要實證數據 ^[extracted]

| 來源 | 數據 |
|---|---|
| IMF | 1980-2018 自然災害保險索賠相比 1980s 增加 2 倍 |
| **BlackRock + Rhodium** | BlackRock CMBS 6 萬筆商業地產，自 1980 以來受 4-5 級颶風襲擊**風險中值上升 137%** |
| WEF 2020 | 未來 10 年全球前五大風險首次**全部與環境氣候相關** |
| WEF 2021 | 極端天氣事件相關風險發生可能性仍居首位 |
| AVIVA + Carbon Delta | 3°C/4°C 情境 >95% 影響來自 physical；1.5°C/2°C 兩者持平 |
| **中國氣象局《中國氣候變化藍皮書》2021/8** | 1951-2020 中國地表年均氣溫**上升速率 0.26°C/10 年**（全球同期 0.15°C/10 年） |
| 1961-2020 中國年均降水量 | 每 10 年增加 5.1 mm |

## 反例 / 質疑 ^[inferred]

source（Chinese bank internal report）極少自我質疑，可挖：
- **此消彼長假設的局限**：理論推論非鐵律，現實中可能同時上升（政策失敗 → transition + 溫升失控 → physical 都上升）
- **作者自家相關性分析證據力**：用 Wind 2000-2020 全國年均氣溫 vs 降水量做相關，**N=20、未控制 ENSO、全國平均掩蓋區域異質性** — 邏輯跳躍（溫升降水正相關 ≠ physical/transition 負相關）
- **脆弱性模組依賴專家判斷**：transparency 與 reproducibility 弱點
- **時間尺度錯位**：物理風險 décennies 尺度 vs 信用風險 1-3 年窗口
- **資料品質**：銀行押品地址轉經緯度，材質 / 使用年限資料常不足
- **「我行」路徑依賴**：建議從押品切入低估非押品信貸組合（供應鏈、營運）的物理風險暴露
- **TCFD acute/chronic 二分缺失**：未對標國際主流框架

## 對 PM / 醫療 AI 的啟示 ^[inferred]

雖然主題是金融，方法論啟示：

- **Multi-module modeling**：把抽象風險分解成 hazard + exposure + vulnerability + amplification 四層 — 可借用到任何「總體風險 → 個體影響」的建模任務
- **資料合併壓力**：地址 → 經緯度 → 海拔 → 災害歷史 → 資產 metadata，多源整合的工程量
- **時間尺度錯位是普遍問題**：醫療 AI 模型訓練資料（5-10 年前）vs 部署（now）vs 監管要求（multi-decade）也有錯位

## Related

- [[concepts/firm-climate-risk]] — 待寫，企業層級對應
- [[references/huang-2022-firm-climate-risk-bank-loan]] — SMJ 學術版
- [[concepts/concept-vs-construct-vs-variable]] — climate risk 是經典 latent construct
- [[concepts/reflective-vs-formative-measurement]] — physical risk 可 reflective（綜合風險感）也可 formative（hazard + exposure + vulnerability 三組件）

## Sources

- 侯夢虹（2021）。「風清氣正」論壇 2021 年研究成果彙編之七（中國某商業銀行總行風險管理部內部研究）。
- 馬駿（2020）。《金融機構環境風險分析的意義、方法和推廣》。北京綠色金融與可持續發展研究院。
- WEF Global Risks Report (2020, 2021).
- 中國氣象局《中國氣候變化藍皮書》(2021/8).
