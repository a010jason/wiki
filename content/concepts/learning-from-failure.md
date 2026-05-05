---
title: Learning from Failure（從失敗學習）
type: concept
domain: mgmt
tags: [failure, learning, OB, mgmt]
aliases: [learning from failure, can you learn from failure, 從失敗學習]
sources:
  - textbook:Colquitt-OB-Ch1-McGraw-Hill-2017
created: 2026-05-05
updated: 2026-05-05
summary: >-
  個人與組織從錯誤中學習的 5 條原則：(1) 高壓常引發錯誤思考、(2) 失敗未必壞、(3) 找到並處理 root cause、(4) 獎勵承認錯誤、(5) 獎勵 worthy failure-experimentation。最危險的失敗是不從失敗學的失敗。
provenance:
  extracted: 0.85
  inferred: 0.13
  ambiguous: 0.02
base_confidence: 0.32
lifecycle: draft
lifecycle_changed: 2026-05-05
---

# Learning from Failure（從失敗學習）

## 核心命題

> Mistakes happen in business all the time, but most people have a powerful motivation to **try to cover up their errors** as much as possible.
>
> However, **not recognizing and learning from failures might be the most dangerous failure of all** because it means the problem is likely to occur again. ^[extracted]

→ 失敗不可怕，掩蓋失敗才可怕；不從失敗學才是真正的失敗。^[inferred]

## 5 條原則

### 1. 認知「高壓引發錯誤思考」（High pressure provokes faulty thinking）

教科書經典案例：**BP Deepwater Horizon 2010**。^[extracted]
- BP 在 deepwater 油探業務面對 ~$1 million / day 的成本超支壓力
- 高壓使管理者**忽視警告訊號**
- 結果：墨西哥灣大爆炸災難

意涵：當你 / 團隊處於高壓時，**主動放慢、檢查推理、找第二意見**，避免 high-pressure tunnel vision。^[inferred]

### 2. 認知「失敗不總是壞事」（Recognize that failure is not always bad）

> Most of us would agree that we have learned more in life from our mistakes than from our successes. ^[extracted]

案例：**P&G "Wall of Failures"** —— P&G 把失敗的產品（Charmin、Pampers 早期版）擺在 Innovation Centre 牆上慶祝。^[extracted]

引用：「If you're not failing, you're not innovating enough」—— Elon Musk ^[extracted-from-image]

### 3. 找到並處理 root cause（Understand and address the root cause）

教科書案例：**Apple iPhone 4 antenna gate (2010)**。^[extracted]
- 客戶抱怨掉話
- Apple **第一反應**：怪客戶握法（"avoid gripping in the lower left corner"）
- **後來才**承認硬體設計問題（root cause）並修

意涵：第一反應常常是合理化（rationalize）或推卸（deflect）。要刻意推到「為什麼真的發生」這層。^[inferred]

→ 對應醫療業的 CAPA（Corrective And Preventive Action）思維：每個 deviation 必須有 root cause analysis 才結案。^[inferred]

### 4. 獎勵「主動承認」（Reward owning up）

> If you make a mistake, **be willing to speak up and admit it**. Too often we dig ourselves deeper into a hole by being defensive about mistakes. That also keeps us from learning from our failures. ^[extracted]

關鍵 insight：^[inferred]
- 多數組織**懲罰**承認錯誤的人（被罵、考績差、丟臉）
- 結果：員工學會掩蓋而非學習
- 解：**讓承認錯誤對職涯有利**（公開讚揚承認的人、追問的是「下次怎麼避免」而非「誰的錯」）

### 5. 獎勵「值得的失敗」（Reward worthy failure-experimentation）

> "Reward worthy failure—experimentation." ^[extracted, attributed to Bill Gates in textbook image]

把「實驗失敗」與「執行失敗」分開：^[inferred]
- **執行失敗**（明明該做對沒做對）→ 不獎勵，但不應掩蓋
- **實驗失敗**（試了一個假說，結果是負的）→ **應該獎勵**，因為這是組織學習的成本

→ 對應 [[concepts/agile-organization]] 「fail-friendly environment」、Nvidia 「Nobody fails alone」文化。^[inferred]

## 案例：Nvidia 與 P&G 的對照

| | P&G | Nvidia |
|---|---|---|
| 機制 | Wall of Failures（紀念失敗） | "Nobody fails alone"（共擔失敗）|
| 心理安全 | 承認失敗有名 | 承認失敗有人撐 |
| 共通 | 把失敗從 stigma 變成 learning material |

^[inferred]

## 對 ebmtech / 醫療業的張力

> 註：以下是把框架套到自己工作的 hypothetical 思考，未跟主管或同事驗證。^[ambiguous]

醫療業是「失敗代價極高」場域：誤診可能傷害病人、軟體 bug 可能違反 IEC 62304。^[inferred]

但**並非所有 EBM 內部失敗都是 patient-impacting**：
- AI 模型實驗失敗（沒上 production）= worthy failure
- UI/UX 試誤（在測試環境）= worthy failure
- 策略決定錯（如進錯市場）= 該學的失敗

對醫療業的應用：**區分受監管的失敗（嚴格懲罰 + CAPA）vs 內部實驗失敗（鼓勵）**。雙軌呼應 [[synthesis/agile-vs-waterfall-when-to-use]]。^[inferred]

## Related

- [[concepts/organizational-behavior]] —— 上層學科
- [[concepts/agile-organization]] —— fail-friendly environment 是 agile 法則之一
- [[synthesis/agile-vs-waterfall-when-to-use]] —— 雙軌制下 worthy failure 的場域
- [[references/colquitt-OB-textbook]]

## Sources

- [[references/colquitt-OB-textbook]] Ch1, "Can You Learn from Failure?" 章節
- BP Deepwater Horizon (2010) 案例
- P&G "Wall of Failures"
- Apple iPhone 4 antenna gate (2010)
- Bill Gates 引言
