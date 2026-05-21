---
title: Dominant Design
type: concept
domain: mgmt
tags: [innovation, standards, mgmt]
aliases: [主流設計, dominant standard]
sources:
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Ch9
created: 2026-05-20
updated: 2026-05-20
provenance:
  extracted: 0.75
  inferred: 0.2
  ambiguous: 0.05
base_confidence: 0.4
summary: >-
  新產業早期百家爭鳴，到某臨界點市場收斂至單一主流配置，後續創新主要在 process 而非 product（經典三例：Ford Model T、IBM 360、Douglas DC3）。三個 entrenchment 鎖死機制：Learning effects（PACS hanging protocol 熟練）、Switching costs（HIS / PACS 替換難度極高）、Coordination requirements（DICOM、HL7、FHIR 之所以 sticky）。疊加 network externalities 易進入 winner-take-all。Standards war 兩條路線：Maximize market acceptance（VHS）vs Maximize value appropriation（Betamax），無兩全方案。
lifecycle: draft
lifecycle_changed: 2026-05-20
ingest_method: read-subagent
---

# Dominant Design

新產業早期百家爭鳴，產品形態與技術組合各異；到某個臨界點市場**收斂**到單一主流配置，後續創新主要在 process 而非 product。^[extracted]

經典三例：Ford Model T（汽車）、IBM 360（主機）、Douglas DC3（客機）。^[extracted]

## Entrenchment 的三個鎖死機制

Dominant design 一旦成形，三個機制讓它愈來愈難被替代：^[extracted]

| 機制 | 內容 | 醫療場景對應 |
|---|---|---|
| **Learning effects** | 累積使用經驗讓既有設計變得更可靠、人員更熟練 | 放射師習慣 PACS 既有 hanging protocol |
| **Switching costs** | 切換需要重訓、轉移資料、重簽合約 | HIS / PACS 替換難度極高 |
| **Coordination requirements** | 多方參與者需要對齊同一介面 | DICOM、HL7、FHIR 之所以 sticky |

## 與 [[concepts/network-externalities]] 的疊加

當網路效應（Metcalfe's Law: 價值 ∝ n²）疊在 dominant design 上，市場容易進入 **winner-take-all** 狀態：作業系統（Windows、Android）、入口（Google）、社群（Facebook）、規格授權（Intel x86、ARM、Qualcomm CDMA、Adobe PDF、Bosch ABS）。^[extracted]

## Standards War 的兩條輸贏路線

| 路線 | 策略 | 經典結果 |
|---|---|---|
| **Maximize market acceptance** | 開放授權、聯盟廣建、penetration pricing | VHS 勝 Betamax、IBM-PC 勝 Apple Mac |
| **Maximize value appropriation** | 封閉控制、不授權、高利潤 | Betamax 守住價值但失市場 |

Source 自承：兩條無兩全方案。^[extracted]

## Innovator vs Follower 的逆轉

Grant Ch9 列 19 個產業：follower 勝出顯著多於 leader。^[extracted]

| Innovator | Follower（勝出） |
|---|---|
| De Havilland Comet | Boeing 707 |
| EMI CT scanner | GE |
| Xerox PC | IBM |
| Ampex/Sony VCR | Matsushita VHS |
| Netscape | Microsoft IE |
| Lycos | Google |
| Diamond MP3 | Apple iPod |
| Sony Digital Reader | Amazon Kindle |
| SixDegrees | Facebook |

→ 對應 [[concepts/appropriability-regime]]：先進者要保有利潤需要 IP 保護 + complementary resources + 標準塑造力**三者皆強**，否則 fast follower 才是贏家。

## 在醫療影像 AI 的判讀

DICOM + PACS + 510(k) 路徑是醫療 AI 的 dominant design，已經很難挑戰；但**「AI 報告產出格式」目前仍無 dominant design**（結構化 report、conversational、自然語言 narrative 三種並存）—— 任何想做這個層的廠商還在 standards war 早期，**lead vs follow 取捨**正是當下決策。^[inferred]

## Open Questions

- LLM 是否會打破既有 dominant design？conversational radiology UI 可能讓 hanging protocol 失去意義
- Dominant design 的「臨界點」如何預判？Source 承認 dominant design 多半事後才看清

## Related

- [[concepts/network-externalities]] — 強化 entrenchment
- [[concepts/appropriability-regime]] — 解釋 innovator vs follower 結果
- [[concepts/industry-life-cycle]] — dominant design 是 ILC 的關鍵轉折
- [[concepts/platform-competition]] — winner-take-all 場景
- [[references/grant-contemporary-strategy-analysis]] — Ch9 源頭

- [[synthesis/disruptive-innovation-x-dominant-design]] — dominant design 三個鎖死機制如何成為 disruption 入口