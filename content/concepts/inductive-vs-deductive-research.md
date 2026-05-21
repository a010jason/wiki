---
title: Inductive vs Deductive Research（歸納 vs 演繹研究）
type: concept
domain: research-methods
tags: [research, methodology, popper, logic, scientific-method]
aliases: [inductive deductive, 歸納演繹, theory-building vs theory-testing]
sources:
  - reference:Bhattacherjee-Ch01-slides (pp.80-92)
  - reference:Bhattacherjee-Ch02-slides (pp.129-132)
  - reference:Bhattacherjee-SSR-book (Ch1-2)
created: 2026-05-21
updated: 2026-05-21
summary: >-
  研究循環的兩半：inductive（觀察 → 找 pattern → 通則化 → theory）是 theory-building；deductive（theory → hypothesis → 觀察 → 確認/拒絕）是 theory-testing。Karl Popper 反駁純歸納能 yield certainty（黑天鵝反例）；deductive 結論強於 inductive 結論。
provenance:
  extracted: 0.85
  inferred: 0.15
  ambiguous: 0
base_confidence: 0.45
lifecycle: challenged
lifecycle_changed: 2026-05-22
---

# Inductive vs Deductive Research

研究的兩種推理方向，**互補**而非互斥 — 構成 [[concepts/scientific-theory|theory]] 與 observations 之間的「helix」循環。^[extracted]

## 對照表

| 維度 | Inductive | Deductive |
|---|---|---|
| 方向 | 觀察 → 理論 | 理論 → 觀察 |
| 目的 | **Theory-building** | **Theory-testing** |
| 中文 | 歸納（資料出發） | 演繹（理論出發，由數據解釋理論） |
| 結論本質 | 只是 hypothesis，可被證偽 | 若 premises 為真，conclusion 必為真 |
| 適用條件 | prior theory 少 | competing theories 多 |
| 對應 paradigm | Interpretive | Positivist |
| 代表方法 | grounded theory、case research、ethnography | experiment、survey、secondary data |

## Inductive 流程 ^[extracted]

```
觀察 → 找 pattern → 結論 → 通則化（principles/theories）
```

範例：學生讀書時間長 vs 成績好（觀察兩 var 共變）→ 「讀書時間影響成績」（pattern）→ 「努力導致成功」（通則）

## Deductive 流程 ^[extracted]

```
理論 → 推出 hypothesis → 觀察 → 確認 / 拒絕 → 修正理論
```

範例（[[concepts/scientific-method-OB|Colquitt OB Ch1]] 完整版）：
- Premise 1: 銀行強制 ethics code → 員工守 ethics
- Premise 2: Jamie 是員工
- Conclusion: Jamie 可被信任遵守 ethics（**演繹結論必為真，前提兩個都真的話**）

## Karl Popper 對純歸納的反駁

[[entities/Karl-Popper]]（1940s）的經典 black swan 論證：^[extracted]

> 歐洲千年只見白天鵝 → 以為「所有天鵝都白」（inductive generalization）→ 1697 澳洲發現黑天鵝（Cygnus atratus）→ inductive 結論一夕崩。

Popper 結論：**Induction cannot yield certainty.** 再多 confirming instances 也只需一個 counter-example 就推翻。

→ 科學的合理操作不是「累積證據確認 theory」，而是「設法 disprove theory」。這奠定 [[concepts/scientific-method-four-criteria|falsifiability]] 準則。

## Cycle of Research（Bhattacherjee Figure 1.1） ^[extracted]

```
        ┌──→ Theory ──┐
       Induction    Deduction
        │              │
   Generalize      Test hypothesis
        │              │
        └── Observations ←─┘
```

科學進步來自 inductive 與 deductive 在 theory ↔ observations 之間反覆循環。slide 強調**「不能離開彼此」**：

- 只有 theory 沒 observation → 哲學 / 信仰
- 只有 observation 沒 theory → 資料堆積（[[concepts/theory-vs-not-theory|"data are not theory"]]）

## Deductive 結論強於 Inductive 結論 ^[extracted]

教師 Ch2 slide p.132 明確主張：

- 演繹：前提真 → 結論必真
- 歸納：結論只是 hypothesis，可被多種競爭性解釋推翻
  - 例：公司花大錢做 promotional campaign → 銷量沒升 → 「campaign 執行不佳」（inductive 結論）
  - 但也可能：economic recession、competing product、supply chain bottleneck

## 與 paradigm 的對應 ^[extracted]

- **Positivist** paradigm → 預設 deductive；先有 theory + hypothesis 再蒐資料測試
- **Interpretive** paradigm → 預設 inductive；從深度觀察 build theory

但實務上**多數研究是 hybrid** — Bhattacherjee 強調 mixed-mode 設計通常產生 unique insights（見 [[concepts/research-design]]）。

## 限制 ^[inferred]

- Inductive 易受研究者偏誤、spurious correlation、cherry-picking 影響
- 純 deductive 易陷入「favored theory bias」— 找符合既有理論的證據而忽略 anomaly
- 兩者交替時的 **abductive reasoning**（推測最佳解釋）在 Bhattacherjee 書中討論薄弱

## Critique 摘要

> **2026-05-22 跑了一次 wiki-challenge**
>
> 5 條核心 claim：0 survives / 3 narrow / 2 brittle / 0 unsupported。主要弱點：single-source 100% Bhattacherjee（Wallace 1971 wheel of science / Hume 1748 / Peirce 1903 abduction / Critical realism Bhaskar / Bryman 2007 mixed-methods critique 全未引）；Popper 框架被當普世真理，忽略 Bayesian / PAC learning / Solomonoff 70 年發展（現代 induction 不追求 certainty）；「Deductive 強於 inductive」漏掉 *conditional on premises being true* 關鍵 caveat；二元 paradigm-reasoning 映射過簡（critical realism retroduction missing）；mixed-mode "produces unique insights" 是 textbook aspiration，Bryman 2007 顯示半數論文未實際整合。
>
> `base_confidence`：0.45 → 0.45（已在 brittle cap 0.55 內）；`lifecycle`：draft → challenged。
>
> 完整逐條質疑、行動項目：私人 meta 頁（不公開），路徑 `_meta/critique/inductive-vs-deductive-research.md`。

## Related

- [[entities/Karl-Popper]]
- [[concepts/scientific-method-four-criteria]] — falsifiability
- [[concepts/scientific-theory]]
- [[concepts/positivist-vs-interpretive-research]]
- [[concepts/theory-vs-not-theory]] — Sutton & Staw 對「what counts as theory」的補充
- [[skills/setting-OKR]] — OKR 制度可視為 deductive（theory of motivation → hypothesis: aligned objectives drive performance → measure）

## Sources

- [[references/bhattacherjee-social-science-research]] — Ch1 slides pp.80-92 + Ch2 slides pp.129-132 + book Ch1
