---
title: Critique — OKR (Objectives and Key Results)
type: meta
target: concepts/OKR
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 3, brittle: 2, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.60 → 0.55" }
---

# Critique — `concepts/OKR`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: 「OKR 屬於 performance development（與 potential 相關），KPI 屬於 performance evaluation（透過獎懲）—— 兩者是兩條路線，不是替代關係」

- **Q1 假設：**
  - `[hidden]` 績效管理可被切成 development vs evaluation 兩條**互斥**路線
  - `[hidden]` 一個組織能同時運行兩套系統而員工不混淆
  - `[stated]` 「不是替代關係」明確
- **Q2 跨域跨規模：**
  - **產業轉移**（科技業 → 公部門）：公部門高度依賴 evaluation（憑稅金 + accountability），development 路線難立足；分工失靈
  - **規模轉移**（startup → enterprise）：startup 一套 OKR 足夠；enterprise 真要跑雙系統，員工會被「OKR 又評績」搞混
- **Q3 來源：** `secondary` — 溫金豐 lecture（口頭課程）+ 王怡淳 2022（業界書）。**沒有引述 academic meta-analysis**
- **Q4 反例：** Google 同時跑 OKR + perf review，**沒有清楚分開 development / evaluation**。Microsoft Connect 把 OKR 與年度評估綁在一起。Falsifier = 主流 OKR 使用者（OKR 的代表案例）實際上沒分離 → 主張是「應然」非「實然」
- **Verdict：** `narrow` — 是「理想分工 + 教學分類」，多數實務融合使用

### Claim 2: 「OKR 是自下而上 + 自上而下『交互運作』，員工有空間自訂目標」

- **Q1 假設：**
  - `[hidden]` 員工有能力 + 意願自訂有挑戰性的目標
  - `[hidden]` 主管文化上願意接受 bottom-up 提案不 override
  - `[hidden]` 「交互運作」可實際達成（不會塌成 top-down）
  - `[stated]` 「交互運作」、「員工有空間自訂目標」
- **Q2 跨域跨規模：**
  - **文化轉移**：台灣 Hofstede PD=58（偏高），bottom-up 在文化上 friction 高；歐美低 PD 才有自然 bottom-up — 同一框架在不同文化結果不同（[[synthesis/taiwan-culture-mgmt-implications]] 已點出）
  - **規模轉移**（50 人以下 → 500+ 人）：小團隊 bottom-up 真實，大組織 OKR cascade 多半形式化（O 還是 top-down，KR 才開放員工 fill）
- **Q3 來源：** `secondary` — Doerr book + 溫金豐 lecture
- **Q4 反例：**
  - **阿里巴巴 OKR 是 top-down cascade**（馬雲 + 一把手定 O，下面 fill KR）— 阿里也算 OKR 代表案例
  - 多數台灣導入 OKR 的中型公司也以 top-down 為主
  - Falsifier = 主流案例 bottom-up 比例極小 → claim 是 normative 而非 descriptive
- **Verdict：** `brittle` — 規範性主張，與多數實際導入實況不符；wiki 不該以此 unmodified 引用

### Claim 3: 「適用情境分判準：OKR 用於變動性高 / 目標不明確；KPI 用於穩定 / 拚 market share / 成本 / 效率」

- **Q1 假設：**
  - `[hidden]` 環境變動性可被 ex ante 判斷
  - `[hidden]` 同一公司不同部門變動性可不同（暗示混合用法）
  - `[hidden]` 變動性是 OKR vs KPI 的**單一決定因素**（其他因素如文化、規模、預算結構不重要）
  - `[stated]` 表格列出
- **Q2 跨域跨規模：**
  - **產業混合性**：醫療 AI（產品穩定但法規環境變動）— 該用哪個？同一公司不同維度結論衝突
  - **跨地域**：跨國公司不同國家市場成熟度不同 — 同公司不同地區應該用不同框架？管理成本爆炸
- **Q3 來源：** `secondary` — 溫金豐 lecture + 王怡淳 + [[synthesis/OKR-vs-KPI-when-to-use]] 是 Jason 自己的延伸
- **Q4 反例：**
  - **Toyota**（極穩定的製造業）長期用「TPS + OKR-like 改善」混合，不純 KPI
  - **TSMC**（穩定代工，理論該純 KPI）也有 OKR-flavored 文化
  - Falsifier = 穩定環境公司也用 OKR → 變動性判準過簡
- **Verdict：** `narrow` — 是 starting heuristic，不是穩定預測規則；實務上必須加 culture / scale / 預算結構等變數

### Claim 4: 「OKR 與獎酬通常脫鉤（避免員工保守訂目標）」

- **Q1 假設：**
  - `[hidden]` 員工會「保守訂目標」當獎酬綁定（行為經濟假設）
  - `[hidden]` 脫鉤後員工仍會努力（內在動機足夠）
  - `[stated]` 「通常脫鉤」+ 後段已自承「實務常見折衷」、「Intel 自己怎麼處理本 source 未明確說明」
- **Q2 跨域跨規模：**
  - **文化**：歐美（個人主義 + 內在動機文化）脫鉤可行；亞洲集體 + 外在動機文化脫鉤難維持
  - **規模**：startup（股權主導）獎酬本不靠 OKR；enterprise（薪資結構固定）脫鉤導致 OKR 變紙上談兵
- **Q3 來源：** `secondary` — Doerr + 王怡淳；頁面自己已標 ambiguous
- **Q4 反例：**
  - 多數實務導入 OKR 的台灣公司**最終都連動了部分獎酬**（避免 OKR 淪為儀式）
  - Doerr 自己在 *Measure What Matters* 也承認彈性
  - Falsifier = 任何成功 OKR 案例**部分連動獎酬** → 「通常脫鉤」是教科書理想
- **Verdict：** `narrow` — 頁面已自我標註 ambiguous，但 wiki 仍應更直接承認「實務多連動」而非「通常脫鉤」

### Claim 5: 「廖沛綺 2023 實證：目標清晰度 + 參與度 → 員工投入 → 績效」

- **Q1 假設：**
  - `[hidden]` 單一碩論可推廣到普遍結論
  - `[hidden]` 樣本（碩論一般是台灣 sample）可推廣到跨文化
  - `[hidden]` 跨層次研究的方法論健全（HLM 假設都滿足）
  - `[stated]` 「主要支持的假說」列舉
- **Q2 跨域跨規模：**
  - **產業**：碩論樣本來源不明，可能限於特定產業
  - **跨文化**：單一台灣樣本無法 generalize 到歐美 / 集體主義其他國家
- **Q3 來源：**
  - **`primary`**（如果 Jason 認識作者 / 看過原稿）或 `tertiary`（如果是二手引述）— 不清楚
  - **單一碩論作為 4 條 hypothesis 的支撐強度不足**
  - 沒有引述 meta-analysis（Locke-Latham 1990 reviews）佐證
- **Q4 反例：**
  - **Goal-setting theory 文獻**雖支持「目標清晰度」效果，**但「參與度」的效果是 mixed**：早期 Latham 1979 / 1988 實驗發現 assigned goals 與 participative goals 對績效**效果相同**
  - 也就是說廖沛綺的 H1-3（參與度顯著正向影響）**部分與既有文獻矛盾**
  - Falsifier = 既有 meta-analysis 已顯示參與度非顯著 → 廖沛綺結論不是新發現也非主流共識
- **Verdict：** `brittle` — 單一碩論支撐多條 hypothesis 強度不足；參與度部分與 goal-setting theory 既有文獻部分矛盾，wiki 不該直接當「實證」呈現

## Cross-domain Benchmark

（本次只跑 wiki-challenge，未配對 wiki-benchmark；建議下次跑對標步驟 — 對標候選：Pirate Metrics、JTBD goal-setting、KPI Tree、BSC Learning & Growth 面向、Doerr CFR vs Drucker MBO）

## Overall page verdict

OKR 頁面**結構性弱點**：

1. **規範性主張過多**（Claim 1 development vs evaluation 分工 / Claim 2 bottom-up + top-down 交互）— 與多數實際導入案例（Google / 阿里 / 台灣中型公司）的實況不符。頁面引述的是「Doerr / 王怡淳 / 溫金豐課程的理想 framing」，**沒處理「實際導入 OKR 的公司怎麼做」這一塊**
2. **單一碩論作為實證支柱**（Claim 5）— Locke-Latham goal-setting theory 50 年文獻沒被引用作為佐證或對沖
3. **適用情境判準過簡**（Claim 3）— 變動性是必要不充分條件，缺 culture / scale / 預算結構等變數

**Recommended actions**：

- [ ] Claim 2：加一段「理想 vs 實務」差異 — 承認多數導入仍是 top-down cascade，bottom-up 是教學理想
- [ ] Claim 5：補充 Locke-Latham 文獻對「參與度」效果的 mixed 評價；廖沛綺結論 framing 為「特定樣本結果」而非「跨文化普遍主張」
- [ ] 加 case studies 段，補 **Google / 阿里巴巴 / Microsoft 實際導入 OKR 的方式**（多半未做 Claim 1 的 dev/eval 分離）
- [ ] Claim 4 已自承 ambiguous，但 wiki 可加 explicit「實務多部分連動」line
- [ ] 與 [[synthesis/OKR-vs-KPI-when-to-use]] 對齊，補加文化變數
- [ ] 跑 wiki-benchmark 對標跨領域目標管理框架

`base_confidence`：0.60 → 0.55（cap by 2 brittle claims）
`lifecycle`：draft → challenged
