---
title: Corporate Venturing Isolation Paradox（內部創投的隔離悖論）
type: synthesis
domain: mgmt
tags: [synthesis, corporate-venturing, isolating-mechanisms, RPV, disruptive-innovation, mgmt]
aliases: [Catch-22 of corporate venturing, NBI isolation paradox]
sources:
  - case:Shih-Thurston-2010-Intel-NBI-A-HBS-9-609-043
  - textbook:Grant-Contemporary-Strategy-Analysis-11ed-Wiley-2022-Ch7
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Jason 從 Intel NBI 案例 + Grant Ch7 isolating mechanisms + Christensen RPV 框架交叉整理出的命題：incumbent 大公司用 internal corporate venturing 孕育 disruptive innovation 之所以系統性失敗，不是 execution 問題，是 isolation mechanism 反向作用 —— **保護 incumbent 業務不被模仿者複製的同一套機制，也阻止內部新業務取得不同的 RPV 配置**。Catch-22 因此不可解，唯一出路是改變組織形態（C 象限 spinoff）而非改善 execution。
provenance:
  extracted: 0.4
  inferred: 0.55
  ambiguous: 0.05
base_confidence: 0.35
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# Corporate Venturing Isolation Paradox

## 一句話命題

> Incumbent 公司用內部 corporate venturing 孕育 disruptive innovation 之所以系統性失敗，**不是個別管理者的 execution 失誤，而是「對外保護 incumbent 業務的 isolating mechanisms」與「對內孕育新業務」目標互斥**。同一組 isolation mechanism 不能同時做這兩件事。

## 三條線索的匯合

### 線索 A：Intel NBI 的 "Catch-22"（[[entities/intel-NBI]]）

Wykoff 的原始引文：^[extracted]

> "In many ways, NBI was trapped in a 'Catch-22.' They could either incubate close to the core, and be criticized for failing to differentiate their projects from the hypothetical purview of mainstream business units, or they could incubate away from the core and be criticized for growing businesses that lacked 'strategic proximity,' businesses that ended up being nearly impossible to graduate into highly focused mainstream divisions."

兩個選項都失敗：
- **靠近 core**：不夠 differentiated，被質疑沒存在必要
- **遠離 core**：缺 strategic proximity，graduate 不回去

### 線索 B：Grant Ch7 的 4 層 isolating mechanisms（[[concepts/isolating-mechanisms]]）

Grant 把 incumbent 保護自己優勢的機制歸納為 4 層防線：^[extracted]

1. Obscure superior performance（不讓外人看出贏在哪）
2. Deterrence + Pre-emption（嚇阻 + 卡位）
3. [[concepts/causal-ambiguity]]（讓對手診斷不出來）
4. Resource immobility（資源無法取得）

這些機制**正是 incumbent 業務的競爭優勢來源**。

### 線索 C：Christensen 的 RPV（[[concepts/RPV-framework]]）

Christensen 主張：incumbent 公司的 RPV（Resources / Processes / Values）由「重複做 sustaining innovation」累積而成，因此**結構性不適合 disruptive innovation**。

→ 解法：用 C 象限（獨立門戶 holding）讓新業務獲得**不同的 RPV 配置**。

## 整合洞察：Isolation Mechanisms 是雙面刃

把 A、B、C 三條線索疊起來：

| Isolating Mechanism | 對外部競爭者 | 對內部新業務 |
|---|---|---|
| Obscure performance | 對手看不出贏在哪 → 模仿失敗 | 內部新業務也看不出 incumbent 為何贏 → 無法 leverage |
| Deterrence + Pre-emption | 對手不敢進場 | 內部新業務若進場，主流業務反應像對外部挑戰者 |
| Causal ambiguity | 對手診斷不出 | **內部新業務也無法說明自己「不是另一個 main division 子集」** |
| Resource immobility | 對手取得不了 Intel 資源 | 內部新業務必須與 main divisions **競爭同一資源池**，且因 internal metric 不利而輸 |

→ **保護 incumbent 不被外部模仿的機制，正是阻止內部新業務獲得不同 RPV 的機制**。

### 「step-child position」是必然產物

Wykoff 用「**historical step-child position in the company**」描述 NBI。^[extracted]

從本框架看，這不是 NBI 個別管理問題，而是**結構必然**：incumbent 公司的 isolation mechanism 自動把「不貢獻 core 業務 IRR」的 unit 推向邊緣 ——
- HQ 用 microprocessor metric 衡量 NBI → NBI 數字輸
- HQ 給 NBI 資源排序低於 main divisions
- 內部政治偏向 GM 而非 venture champion

step-child 不是被誰刻意打壓，是 isolation mechanism 在組織層級的副產物。

## Catch-22 的「不可解」性質

為什麼這不是「找對的管理者就能解」的問題？^[inferred]

| 解法嘗試 | 為什麼失敗 |
|---|---|
| 「換更好的 GM」（Biever → Sodhani → Wykoff）| 個人能力擋不住結構慣性。Intel NBI 換 3 任 GM 都死同一條路 |
| 「提高 NBI 預算」 | 資源加倍但 metric / values 沒變，只是讓失敗更貴 |
| 「降低 NBI 對 core 的 strategic proximity 要求」 | 沒了 strategic proximity 就無法 graduate，T-Up 路徑也斷 |
| 「強化 leverage Intel 資源」 | 反而把 RPV 鎖死，新業務不能用外部 foundry / 不同客群 |

→ 所有 first-order 解都被結構吞噬。

## 唯一出路：改變組織形態

Christensen & Raynor (2003) 的 4-quadrant fit matrix 給出唯一可行路徑：^[extracted-from-lecture]

| 象限 | 適合 | 為何能逃出 Catch-22 |
|---|---|---|
| A 內部擴大 | sustaining innovation | 不需逃；不適用 disruptive innovation |
| B 雙元（heavyweight within）| 部分 fit | 仍受 incumbent values 影響，常退化為 step-child |
| **C 獨立門戶 holding** | disruptive innovation | **物理隔離財務 / metric / 治理 → 新 RPV 成立** |
| D in-house + spinout commercialize | 介於 B-C | 製造階段 fit、商業化需獨立 |

→ Intel 自己的歷史回答了這題：**NBI 失敗 → 2017 收購 Mobileye 用 C 象限**。Mobileye 至今保留高度獨立運作，是 Intel 走出 Catch-22 的方法 —— **但代價是承認 organic growth 在 microprocessor 巨頭內部不可能**。^[inferred]

## 為什麼 Pipeline-thinking 不能解

NBI 的 Pipeline Development Model（IDEA → CONCEPT → ... → TRANSITION）試圖用**流程**解決組織問題：^[extracted-from-margin]

→ Jason 課堂邊註的犀利提問：「**藍海？把 pipeline 蓋好就會 innovation？**」

從本框架看答案明確：**不能**。Pipeline 是 Processes 層的優化，但 Catch-22 的根源在 Values 層——「我們覺得多大、多賺、多 core 的事情才值得做」。Process 再優化也改不了 Values 排斥。

## 對「Why errors learning can't be cumulated」的解釋

NBI 的 BAM 評審制度（每 venture 走 SAM → BAM I → Ops Reviews → Retrospective）理論上有 retrospective step，但 learning 從未真正餵回下一輪 SAM。^[extracted-from-margin]

Jason 標註：「根本沒機會學 / random walk」。從 isolation paradox 框架看原因：^[inferred]

> Causal ambiguity 對外保護優勢，但**對內也阻止組織理解自己的失敗模式**。NBI 每 venture 失敗後雖記錄，但**無法把「為什麼這 venture 死於 Intel 的 RPV 配置」這層診斷做出來**——因為要做這層診斷就要承認 RPV 本身有問題，這在政治上不可行。

→ Retrospective 因此停留在表層原因（market timing、產品定位），無法觸及結構原因。Learning loop 開放但不閉合。

## 「為什麼台灣一直在製造一代拳王」的延伸

Jason 課堂 take-away 之一：「**為什麼台灣一直在製造『一代拳王』？**」^[extracted-from-margin]

把本框架從 corporate venturing 延伸到 national level：^[inferred]

> 台灣的「一代拳王」（HTC、宏達電、宏碁、聯華神通…）也是 isolation paradox 在國家經濟層次的呈現：
>
> 1. 第一代成功（HTC 智慧手機、宏達電 PDA）建立特定 RPV 配置
> 2. 用 isolation mechanism 保護這個配置（封閉供應鏈、客戶關係、政府政策）
> 3. 第二代產品需要不同 RPV，但企業內部無法重組
> 4. 沒有 C 象限路徑（台灣資本市場+家族結構不利 spinoff）
> 5. → 第二代失敗，一代拳王僅出現一次

→ 這個延伸是高度推測，但邏輯結構與 Intel NBI 完全同形。值得跟「同舟共濟」、「家族企業傳承」、「台灣 ODM 模式」等本土主題交叉討論。^[inferred]

## 對醫療 AI PM 的意涵

> 註：以下是把框架套到自己工作的 hypothetical 思考。^[inferred]

EBM 若要孕育 PACS 之外的新業務：

1. **不要相信「pipeline 蓋好就會 innovation」** —— Process 不是 Values
2. **不要相信「強化 leverage 既有資源」會解決問題** —— 反而把新業務鎖死在舊 RPV
3. **預設一代拳王是 default outcome** —— 沒主動跳到 C 象限就會發生
4. **如果一定要做新事業**，從一開始就準備：
   - 不同 metric（不要用 PACS IRR）
   - 不同治理（不要 main division GM 排序）
   - 不同 incentive（長期 + 上行分享）
   - 視 spinoff / 子公司為 default，不是 fallback

## Open Questions

- C 象限路徑是否在台灣 / 醫療 / 中小型公司同樣 default？資本市場與家族治理可能讓 spinoff 比美國貴
- Mobileye 案例的「保留獨立性」具體機制為何？Intel 是否真的克制干涉？需另外 ingest
- 是否有 incumbent 公司用 B 象限（雙元）真正成功過？AWS in Amazon 算嗎？

## Related

- [[entities/intel-NBI]] —— 主要案例
- [[concepts/RPV-framework]] —— 結構性原因
- [[concepts/isolating-mechanisms]] —— 反向作用機制
- [[concepts/causal-ambiguity]] —— 為何 learning 無法累積
- [[concepts/intrapreneurship-vs-venture-capital]] —— 偏離模式
- [[concepts/disruptive-innovation]] —— 上層理論
- [[references/shih-thurston-intel-nbi-2010-HBS]] —— 原始案例

## Sources

- [[references/shih-thurston-intel-nbi-2010-HBS]]
- [[references/grant-contemporary-strategy-analysis]] Ch7
- 講義邊註：陽明交大 EMBA 策略管理（2024/4/9 版）—— Jason 課堂提問
- 推導：Jason 整合 (Catch-22 + isolating mechanisms + RPV) 的 synthesis
