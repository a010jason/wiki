---
title: Reflective vs Formative Measurement
type: concept
domain: research-methods
tags: [measurement, reflective, formative, construct, coltman, validity]
aliases: [reflective formative, 反映性 vs 形成性]
sources:
  - reference:Coltman-2008-JBR
  - reference:Bhattacherjee-Ch06-slides (p.47)
  - reference:Bollen-Lennox-1991
created: 2026-05-21
updated: 2026-05-21
summary: >-
  Coltman et al. (2008) JBR 提出的核心 measurement decision：indicator 反映 construct（reflective）vs indicator 形成 construct（formative）。因果方向、indicator 互換性、相關性都對立。範例：religiosity 用「上教堂頻率」反映（reflective）vs religiosity = belief + devotion + ritual 形成（formative）。Coltman 等發現 JIBS/JoM 2006 約 95% 量表預設 reflective，**完全沒考慮 formative** — 是研究界盲點。
provenance:
  extracted: 0.9
  inferred: 0.1
  ambiguous: 0
base_confidence: 0.5
lifecycle: draft
lifecycle_changed: 2026-05-21
---

# Reflective vs Formative Measurement

Coltman et al. (2008) *Journal of Business Research* 提出的整合框架。^[extracted]

## 對照表 ^[extracted]

| 維度 | **Reflective** | **Formative** |
|---|---|---|
| **Construct 性質** | 獨立存在，indicator 反映之 | 不獨立存在，indicator 構成之 |
| **因果方向** | construct → indicator | indicator → construct |
| **Indicator 間相關** | **高**，且 desirable | 不必相關（可高可低可零） |
| **Indicator 互換性** | **高**，刪一個不影響 construct content validity | **低**，刪一個改 construct conceptual domain |
| **與 antecedent/consequence 的關係** | 各 indicator 與外部變項方向一致 | 不一定一致 |
| **Measurement error** | δ 與每個 observed score 關聯 | disturbance ζ **不**代表 measurement error（Diamantopoulos 2006） |

## 經典範例 ^[extracted]

### Reflective
- **Religiosity** 用「上教堂頻率」反映
- **Attitude / personality** scale 多用 reflective
- **Organizational identification**（Mael & Ashforth 1992）6 items 都反映同一感覺

### Formative
- **Religiosity** = belief + devotion + ritual 三維形成
- **SES** = education + occupation + income + neighborhood
- **Life stress**（Bollen & Lennox 1991）= job loss + divorce + bodily injury + family death
- **CPI** = food + beverage + clothing + rent + ...
- **HDI** = health + education + income

## 因果方向測試 ^[extracted]

教師連發三問：

| 範例 | 測試 | 答 |
|---|---|---|
| SES | 唸完四年大學 → SES 上升即使其他不變 | 因果由 indicator 流向 construct → **Formative** |
| CPI | 移除 transport & communication 物價 → CPI 實質改變 | **Formative** |
| Religiosity | 「真的更虔誠 → 自然會多上教堂」 | 因果由 construct 流向 indicator → **Reflective** |

## 同一 construct 可雙向操作化 ^[extracted]

教師強調：「**Performance / Customer Satisfaction 是 reflective 還是 formative？It depends.**」

### Performance Reflective 範例
問「新產品是否達成 (1) sales growth (2) market share (3) profit objectives」 — 三題反映同一「績效感」。

### Performance Formative 範例
直接量 sales / profit / market share / new market entry / ROI / ROA — 各項目構成 performance。

## 研究界盲點 ^[extracted]

Coltman et al. (2008) 對 JIBS、JoM 2006 年論文統計：

> **約 95% 的多 item construct 用 reflective structure，完全沒考慮過 formative 這個選項。**

→ Coltman 等暗示：研究者預設 reflective 是 **methodological habit 而非 considered choice**。

## Six Considerations Framework（Coltman 2008）^[extracted]

選 reflective vs formative 的六大考量：

1. **Nature of the construct**（construct 本質是 latent 還是 emergent）
2. **Direction of causality**
3. **Characteristics of indicators**（可互換 vs 不可互換）
4. **Intercorrelation of indicators**
5. **Antecedent / consequence relationships**
6. **Measurement error structure**

## Scale Modeling 後果 ^[extracted]

| 後果 | Reflective | Formative |
|---|---|---|
| Reliability 評估 | Cronbach α 適用 | **α 不適用**（不必相關） |
| Construct validity 評估 | CFA + AVE + Fornell-Larcker | **不可用 CFA**；需 PLS-SEM with formative path |
| 結構方程 | CB-SEM OK | 偏好 **PLS-SEM** |
| Item 刪減 | 可基於 loading 刪 | **不可隨意刪**（改 construct domain） |

## 對 PM / 醫療 AI 應用 ^[inferred]

### Patient-Reported Outcome Measure (PROM)
- **Reflective**：HRQoL 量表的 8 個 item 都反映「整體健康感」 → SF-36 走 reflective 路徑
- **Formative**：HRQoL = physical + mental + social functioning 各成分組合 → 不同人「HRQoL 高」原因可能完全不同

### 產品 metric design
- **NPS（reflective 設計）**：一題反映整體 advocacy
- **CSAT 多維（formative 設計）**：滿意度 = 速度 + 準確 + 親切 + 介面流暢

→ PM 設計 metric 時要先決定 reflective vs formative — 影響後續 dashboard、A/B test、improvement priorities。

## 限制 ^[inferred]

- 兩 type 的區分有時不清晰（hybrid models 存在）
- Coltman 框架仍預設「先理論定義 construct，再選 measurement type」— 但實務上常 reverse（已有 data 後才決定 modeling）
- 形成性 construct 的 validity 評估方法仍在發展（PLS-SEM 1990s-2000s 才成熟）

## Related

- [[concepts/concept-vs-construct-vs-variable]]
- [[concepts/construct-validity]]
- [[concepts/AVE-fornell-larcker]]
- [[concepts/PLS-SEM-vs-CB-SEM]]
- [[concepts/exploratory-factor-analysis]]
- [[concepts/confirmatory-factor-analysis]]
- [[concepts/composite-index]] — Index 是 formative 的具體形式
- [[synthesis/measurement-paradigm-blind-spot-95-percent-reflective]] — 待寫

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch6 slides p.47
- Coltman, T., Devinney, T. M., Midgley, D. F., & Venaik, S. (2008). Formative versus reflective measurement models. *Journal of Business Research*, 61(12), 1250-1262.
- Bollen, K., & Lennox, R. (1991). Conventional wisdom on measurement. *Psychological Bulletin*, 110(2), 305-314.
- Diamantopoulos, A. (2006). Formative measurement.
