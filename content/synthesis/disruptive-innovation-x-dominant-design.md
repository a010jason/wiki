---
title: Disruptive Innovation × Dominant Design
type: synthesis
domain: mgmt
tags: [synthesis, disruptive-innovation, dominant-design, christensen, utterback, innovation, mgmt]
confidence: medium
sources:
  - '[[concepts/disruptive-innovation]]'
  - '[[concepts/dominant-design]]'
  - '[[references/grant-contemporary-strategy-analysis]]'
created: 2026-05-22
updated: 2026-05-22
summary: >-
  Christensen 的 disruptive innovation 與 Utterback 的 dominant design 描述同一個產業生命週期的「對偶現象」 — dominant design 的三個鎖死機制（learning effects / switching costs / coordination）正是讓 incumbent 無法回應 disruption 的結構性原因。Dominant design 不只是「階段」，是 disruption 的前置條件。
provenance:
  extracted: 0.2
  inferred: 0.7
  ambiguous: 0.1
base_confidence: 0.4
lifecycle: draft
lifecycle_changed: 2026-05-22
---

# Disruptive Innovation × Dominant Design

## The Connection

兩個概念在策略課常被當「兩個獨立創新理論」教，但其實它們**描述同一現象的對偶**：

- **Dominant Design**（Utterback / Anderson-Tushman）：產業早期百家爭鳴 → 收斂到主流配置 → 後續創新轉到 process
- **Disruptive Innovation**（Christensen）：incumbent 鎖死在主流配置 → 過度服務高端客戶 → 被低端切入者向上侵蝕

**接合點**：dominant design 的三個鎖死機制（learning effects / switching costs / coordination requirements）**正是讓 incumbent 看到 disruption 也無法回應的結構性原因**。

→ Dominant design 不只是一個「中性階段」，是 Innovator's Dilemma 的**結構前置條件**。^[inferred]

## Where They Co-occur

13 個 page 同時提到兩者，集中在：

- **Grant Ch7** 與 **Ch9** — 兩章相鄰、共享 case（Sony VHS / 福特 Model T）
- **[[concepts/RPV-framework]]** — Christensen 配套，把 dominant design 鎖住的 "Values" 推到首位
- **[[entities/HTC]] / [[entities/Lego-Group]]** — 案例都跨兩個概念（HTC 卡在 Android+iOS dominant design / Lego 在 product 主流設計鎖死）
- **[[entities/Microsoft-AdCenter]]** — 教師明說「dominant design 由 Google 制定」是 AdCenter 失敗的核心解釋

## Cross-cutting Insight

把兩者的時間軸對齊：

```
產業誕生  ─────  dominant design 浮現  ─────  鎖死期  ─────  被 disrupt
              ↑                          ↑                ↑
              learning effects 開始       switching cost 累積    incumbent overshooting
              coordination 形成           organization 特化     low-end disruptor 切入
                                                              new dominant design 浮現
```

**關鍵 insight**：dominant design 鎖死的三個機制，**對 incumbent 是優勢、對 disruptor 是禮物**：

| 機制 | 對 incumbent 的作用 | 對 disruptor 的禮物 |
|---|---|---|
| **Learning effects** | 流程效率高、成本低 | incumbent 投入太重，難以在新軌道重學 |
| **Switching costs** | 客戶黏著、recurring revenue | 客戶被綁，不會主動跳船 → 但**新客戶 / 被忽略客戶**沒有 switching cost |
| **Coordination requirements** | 生態系朋友多 | 同上 — 生態系朋友也鎖在舊配置，**不會主動服務 disruptor 服務的客戶** |

—— 三個機制讓 incumbent 對 disruptor 視而不見，因為**它們的 KPI（既有客戶 retention / 流程效率 / 生態合作）都還在亮綠燈**。等 disruption 從低端爬上來，三個機制反向變成轉型障礙。^[inferred]

## Tensions and Trade-offs

### Tension 1：Dominant Design 是「鎖死」還是「平台」？

教科書多半把 dominant design 描述成負面（鎖住 incumbent），但 **平台型 dominant design**（Wintel、ARM、DICOM、HL7）反而是基礎建設，**促進**而非阻止後續創新。

→ Dominant design 的「鎖死性」取決於**它是 product-level 還是 infrastructure-level**：
- Product-level（單一產品形態，如 Sony Walkman / 傳統馬戲團）→ 鎖死 → 易被 disrupt
- Infrastructure-level（DICOM / HL7 / x86）→ 平台化 → 上層百花齊放、不易被 disrupt

醫療影像 AI 的 dominant design（DICOM + PACS + 510(k)）是 infrastructure 型，**鎖死的不是 AI 創新，是合規與整合路徑** — 這是醫療 AI 與消費網路 disruption 速度差異的核心。^[inferred]

### Tension 2：Disruption 可預測還是後見之明？

- Dominant design 的「臨界點」**多半事後才看清**（Grant Ch9 自承）
- Disruption 也是 — 失敗的「想 disrupt 但失敗」案例被 survivorship bias 忽略

→ 兩個概念都有**事後合理化**的危險。一個事後識別出 dominant design + disruption pattern 不代表 ex ante 能預測。^[ambiguous]

### Tension 3：Incumbent 該不該 cannibalize 自己？

- Christensen 答：是，但內部 cannibalize 結構性失敗（[[synthesis/corporate-venturing-isolation-paradox]]），只能 C 象限 spinoff
- Utterback 隱含答：在 dominant design 形成前可以 cannibalize；形成後三個鎖死機制讓你做不到

→ 兩個答案合起來：**internal disruption 的「時間窗」極短** — dominant design 浮現後就關閉。^[inferred]

## Open Questions

- **AI 是否打破 dominant design 的時間軸？** LLM 在某些領域 6 個月就有新 dominant design 候選（OpenAI o1 / Claude Opus / Gemini），讓鎖死機制來不及成形 — 這對 disruption 預測有什麼意涵？
- **平台型 dominant design 的 disruption 路徑**：iOS 沒被 disrupt 是因為它是 platform 而非 product 嗎？
- **醫療 AI 的「不 disrupt」豁免**：醫療資訊業的 DICOM dominant design 是否會永遠保護 incumbent？或是 conversational radiology（LLM 駁回 hanging protocol）會是第一次例外？^[inferred]
- **Dominant design × disruption 在台灣 OEM/ODM 的應用**：台灣半導體 process 的 dominant design 是否讓 TSMC 對 disruption 免疫？還是 advanced packaging 是潛在 disruption 入口？

## Related

- [[concepts/disruptive-innovation]] — Christensen 1997
- [[concepts/dominant-design]] — Utterback / Anderson-Tushman
- [[concepts/industry-life-cycle]] — Dominant design 是 ILC 的關鍵轉折點
- [[concepts/RPV-framework]] — Christensen 配套，解釋 Values 為何鎖死
- [[concepts/network-externalities]] — 加強 dominant design 的鎖死力
- [[concepts/appropriability-regime]] — innovator vs follower 結果
- [[synthesis/corporate-venturing-isolation-paradox]] — 為什麼 incumbent 內部 disrupt 不可解
- [[entities/intel-NBI]] — 標準失敗案例
- [[entities/Microsoft-AdCenter]] — dominant design 鎖死 + 被打到的案例
