---
title: Flextronics International
type: entity
domain: mgmt
tags: [entity, hbs-case, ems-industry, contract-manufacturing, odm, mgmt, strategy]
aliases: [Flextronics, Flex, Flex Ltd]
created: 2026-05-21
updated: 2026-05-21
summary: >-
  新加坡基地 EMS（Electronics Manufacturing Services）龍頭，2002 營收 $13.1B、29 國 78,000 員工、世界第二大 EMS、最大手機 CM。Michael Marks 1994/1 任 CEO 後從 board stuffer → CM → CDM → 試圖突破到 ODM。Phone 1 (GSM) 證明能力後 Phone 4 (CDMA) 卻沒人買 —— 案例核心張力。戰略 DNA：vertical integration 反潮流（OEM 把製造外包，Flex 反向把設計拉進來）+ EMS 想擺脫 [[concepts/smile-curve]] 谷底 + 與客戶利益正面衝突的 ODM 困境。教師（[[entities/Tang-Edwin-Yingzhang]]）眉批「要 co-evolution，要共生，要動態」「CM → CDM」。
lifecycle: draft
lifecycle_changed: 2026-05-21
provenance:
  extracted: 0.82
  inferred: 0.13
  ambiguous: 0.05
base_confidence: 0.45
sources:
  - id: HBS-Flextronics-case
    type: hbs-case
    ref: '[[references/HBS-flextronics-international-case]]'
    pages: 21
  - id: Flextronics-lecture-slide
    type: lecture-slide
    ref: '[[references/HBS-flextronics-international-case]]'
    pages: 23
related:
  - 'ems industry'
  - 'contract manufacturing cm'
  - 'contract design and manufacturing cdm'
  - 'original design manufacturing odm'
  - 'modularity in manufacturing'
  - '[[concepts/smile-curve]]'
  - 'patent thicket'
  - '[[concepts/vertical-integration]]'
  - '[[concepts/transaction-cost-economics]]'
---

# Flextronics International

新加坡基地 EMS（Electronics Manufacturing Services）龍頭。2002 營收 \$13.1B、29 國 78,000 員工、世界第二大 EMS、最大手機 CM。Michael Marks 1994/1 任 CEO 後從 board stuffer → CM → CDM → **試圖突破到 ODM**。Phone 1 (GSM) 證明能力後 Phone 4 (CDMA) 卻**沒人買** — 案例核心張力。^[extracted]

> 公司戰略 DNA：**[[concepts/vertical-integration|vertical integration]] 反潮流**（OEM 把製造外包，Flex 反向把設計拉進來）+ **EMS 想擺脫 [[concepts/smile-curve|微笑曲線]] 谷底** + **與客戶利益正面衝突**的 ODM 困境。教師眉批：「**要 co-evolution，要共生，要動態**」「**CM → CDM**」。^[teacher-annotation]

## 公司沿革

- **1969** California Newark，Joe McKenzie 夫妻創辦，PCB stuffing（電路板插件）起家
- **1980s** 賣給私人投資集團，從 board stuffer → CM
- **1989** 營收 \$200M+
- **1990** 被私有化
- **1993/7** Michael Marks 任董事長
- **1994/1** Marks 接 CEO
- **1994 底** 重新 IPO
- **1997-2002** 大規模收購 OEM 釋出工廠（Xerox / Alcatel / Ericsson / Chatham / Cabletron / Fujitsu Siemens / ABB / NatSteel Broadway / Telia Orbiant…26+ 件）— **OEM 把工廠賣給 EMS 換取外包合約**
- **2001/7** Marks 與 Nicholas Brathwaite 考慮併購台灣 ODM 廠，最後改自建
- **2001/11/21** Phone 1 專案正式發表
- **2002/10** Phone 1 認證完成（GSM）
- **2003** Phone 4（CDMA + Qualcomm 結盟）原型展示給最大客戶 — **沒人買**

## EMS 產業結構

三層 EMS 模型：

| 模式 | 定義 | IP 歸屬 | 典型廠商 |
|---|---|---|---|
| **CM** (Contract Manufacturing) | Build-to-print，依 OEM 設計純代工 | OEM | Solectron, Celestica, Sanmina-SCI, Jabil |
| **CDM** (Contract Design + Mfg) | OEM 規格下 EMS 設計 | OEM | Flex 1990s 後期 |
| **ODM** (Original Design Mfg) | EMS 自己設計、自有 IP，賣完成品 | EMS | 鴻海 Hon Hai, 廣達 Quanta, 仁寶 Compal, 英業達 Inventec |

**Exhibit 9 三模式單機 P&amp;L 對比（cell phone）**：

|  | CM | CDM | ODM |
|---|---|---|---|
| Revenue | \$80 | \$80 | \$78 |
| Components | 66 | 62 | 59 |
| Manufacturing | 8 | 8 | 7 |
| Design | 0 | 1 | 2 |
| Total Cost | 75 | 72 | 69 |
| **Gross Margin** | **\$5 (6.3%)** | **\$8 (10%)** | **\$9 (11.5%)** |

教師眉批：「**Why ODM's design cost is higher, but components and manufacturing are cheaper? → 產品生命週期變短**」 — 設計即時考慮 BOM 與製程，整合節省。^[teacher-annotation]

## 產業量化

**外包大趨勢**（Exhibit 1）：
- Communications outsourced % : 2000 → 2005E：**39.1% → 67.6%**（\$65B → \$132B）
- Computer outsourced % : 2000 → 2005E：**47.5% → 68.6%**

**OEM Sourcing Strategy 移轉**（Exhibit 5，handset shipments 2002 → 2005E）：
- OEM 設計+OEM 製造：**70% → 56%**
- OEM 設計+EMS 製造：22% → 25%
- **ODM 設計+ODM 製造：7% → 18%**（兩倍成長最快）

**EMS 全產業同期虧損**（Exhibit 2，2002 net income）：
- Solectron $-3.1B、Sanmina-SCI $-2.7B、Celestica $-445M、**Flex $-153.7M**、Jabil +\$34.7M（唯一正獲利）
- **規模急升的同時陷入虧損** — EMS Paradox

**主要 ODM 財務對比**（Exhibit 4，全在亞洲）：
- 鴻海 Hon Hai 2002 銷售 \$7.46B、Net Income \$488M（**margin ~6.5%**，遠高過 EMS）
- 廣達 Quanta \$4.1B / NI \$314M
- 仁寶 Compal \$3.4B / NI \$229M
- 宏碁 Acer、明基 BenQ、英業達 Inventec、Arima、Lite-On

**手機市場（2001-2002）**：
- 全球出貨：2000 408M → 2001 390.4M（衰退）
- Nokia 市占 35.8%、Motorola 14.2%、Sony-Ericsson 9.6% — **Nokia+Moto 超過 50%**
- ASP 從 1987 ~\$800 → 2005 ~\$50（Exhibit 8，大幅下滑）
- 兩大空中介面：GSM patent thicket（西歐主導，~15 家 cross-license）vs CDMA（北美+亞洲，Qualcomm 單一持有）

## Phone 1 → Phone 4 旅程

### Phone 1（GSM ODM）— 成功
- 2001/7 Marks 決定**自建而非併購** 台灣 ODM
- 從 Philips（撤出亞洲行動電話事業）挖 **20 名工程師** + 中國招募 10 名 → 2002/1 ~40 人設計團隊
- 2001/7-11 outside-in 消費者市調
- 跨國分工：新加坡設計、San Jose 監督、機械由聖約瑟、功能測試由瑞典
- **客戶反應**：原本嘲笑「至少要 18 個月」，Brathwaite 兩個月內回頭給降價兩元的新設計，重做三週
- 2002/10 認證完成 — **12 個月 lead time、開發成本僅 \$500K-600K**（vs 一線 OEM 估需 \$8-12M）
- **Brathwaite 名言**：「組織中當你面對陌生領域，也面對較少慣性。當然也不需要徵求委員會或某個團體的同意，因為他們根本還不存在」 — [[concepts/organizational-ambidexterity|ambidexterity]] 的 greenfield 條件 ^[extracted]

### Phone 4（CDMA ODM）— 失敗
- 第一支 CDMA 標準 ODM 機；與 **Qualcomm 結盟**（無 patent thicket）
- 成本比同類 OEM 手機便宜 20%
- 2003/7 向最大手機客戶展示原型 — **客戶讚賞但沒有人同意購買**
- Sachermam quote：「Phone 1 到 Phone 3 最大貢獻在於使 Flex 成為**唯一可採用 Qualcomm CDMA 技術而進行手機設計與製造的獨佔廠商**」

## 為什麼 Phone 4 賣不出去？

教師眉批 + case 自帶反論的整理（給 wiki-challenge 用）：

1. **GSM patent thicket** 法律風險 — Flex 不是 cross-license 成員（教師眉批：「**授權問題**」）
2. **OEM 不願 EMS 切走品牌設計這塊蛋糕** — 承認製造-設計合一更便宜等於承認自己的存在價值被掏空
3. **排他性兩難** — Flex 跟所有 OEM 都有 CM 業務，獨家給一家會得罪其他客戶（Marks 自承「進行這樣的交易顯然會給我們帶來風險」）
4. **ODM 風險本質改變**（Sacherman）：CM 只面對製程風險，ODM 同時面對技術可行性+市場接受度風險 — 「如果我們推動的專案產品並非市場所需，我們將負擔所有的成本」
5. **新能力缺口**：要做 ODM 必須建構**市場分析 + 產品結構**兩個原本由客戶負責的能力（Brathwaite：「客戶會做好市場分析與產品結構建立的工作。我們總習慣從客戶那邊得到答案」）
6. **獨特產品特點被快速複製**：「在 1990 年代，獨特的產品特點，馬上就會被競爭的產品結合採用」— 模組化的雙刃劍
7. **ODM 自己也不一定有製造成本優勢**：「許多 ODM 廠商仍然不能符合製造的成本效益，Flextronics 就是其中一個例子。於是許多 ODM 廠商便將製造工作再轉包給擁有低生產成本優勢的 CM 廠商」 — **ODM ≠ CM 替代，可能形成新分工層**

## 教師核心眉批

> 「**Why OEM allows? 材料 Design → cost down**」（slide p.6 CDM）
> 「**What kind of IP does ODM hold? What kind of "new" products does ODM design? Is ODM creating new competitor (to OEM)? 會！電動車可以 自駕車不行**」（slide p.7 — **ODM 養出對 OEM 的競爭對手** 是教師核心質疑）^[teacher-annotation]
> 「**為什麼 OEM 要 Outsource？大量、快速進入市場、return to volume、沒辦法抄越**」（slide p.5）^[teacher-annotation]
> 「**鴻海～～OEM → OBM infocus**」（末頁眉批 — Foxconn InFocus 收購 2013 作為 EMS→OBM 的實證後續） ^[teacher-annotation]
> Smile Curve slide（p.22）明確提示：**Flex 該走的不是 ODM 而是上爬到 R&amp;D/Patent 或 Branding/Marketing 一端**。詳見 [[concepts/smile-curve]]。

## 關鍵角色

- **Michael Marks**（CEO, 1994-）— ODM 戰略推手；2003 結語「**ODM 是必定要走的路。產業正在改變，即使 Flextronics 不在 ODM 基礎上製造手機，其他的人也會這麼做**」 — Reactive 不是 Proactive
- **Nicholas Brathwaite**（CTO）— Phone 1-4 專案主導；greenfield ambidexterity 名言
- **Jim Sacherman**（資深副總，設計服務）— CDM/ODM 業務發言人
- **Ron Snyder**（資深副總，設計服務）— ISBM 產業經理整合
- **Ash Bhardwaj**（ODM 產品組副總）— 原中國深圳廠長

## 戰略 evolution（slide p.21 空白表 — 教師留學員填）

| 階段 | Concept Dev | Product Design | Manufacturing | Design Objective | Switching Costs for OEM |
|---|---|---|---|---|---|
| In House | OEM | OEM | OEM | 自主 | N/A |
| **CM** | OEM | OEM | EMS | 規格落地 | 低 |
| **CDM** | OEM | EMS | EMS | OEM cost down | 中 |
| **ODM** | EMS | EMS | EMS | EMS profit | 高（被綁定） |

## Open Questions（待 wiki-challenge）

- **Marks 的「不做就被淘汰」是 reactive，可持續嗎？** ODM 模型同時 cannibalize Flex 自己現有的 CDM 與 CM 業務 — Marks 自承擔心，但仍前行 ^[inferred]
- **OEM 大客戶為何不買 Phone 4？** Source 給三個可能解（patent / 利益衝突 / 排他性），但**沒給定論** ^[ambiguous]
- **Flex 應該走 [[concepts/smile-curve|微笑曲線]] 哪一端？** 教師暗示往 R&amp;D 端爬（如 Infineon / Qualcomm）或往 brand 端爬（如鴻海→InFocus），但 case 沒解 ^[teacher-annotation]
- **2007 iPhone 後手機產業重塑**：本 case 時間鎖在 2002-2003，未涵蓋 iPhone disruption / Foxconn 接 Apple 後重新洗牌
- **Flex 自己 2010 年後的命運**：講義時間是 2010 修訂，但**未補後續**；Flex 後續是否成功爬到 smile curve 兩端？

## Related

- **概念**：ems industry / contract manufacturing cm / contract design and manufacturing cdm / original design manufacturing odm / modularity in manufacturing / [[concepts/smile-curve]] / patent thicket / [[concepts/vertical-integration]] / [[concepts/transaction-cost-economics]] / co evolution in supply chain / [[concepts/organizational-ambidexterity]] / [[concepts/disruptive-innovation]] / [[concepts/value-chain]]
- **Entity**：Michael-Marks / Nicholas-Brathwaite / Hon-Hai-Foxconn / Quanta / Compal / Inventec / Solectron / Qualcomm / Nokia / Motorola / Philips / Palm
- **參考**：[[references/HBS-flextronics-international-case]] / [[references/grant-contemporary-strategy-analysis]] Ch10 VI / Ch6 organization
- **Synthesis**：ems margin compression paradox / vertical disintegration then reintegration
- **同課程脈絡**：[[references/strategy-management-course-2024-nycu|NYCU IBM 5635 策略管理 2024 課程 master index]]（唐瓔璋授課，14 週 + 12 HBS case）
