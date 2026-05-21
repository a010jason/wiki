---
title: Critique — Falsifiability (Popper)
type: meta
target: concepts/falsifiability-popper
ran_by: wiki-challenge
ran_at: 2026-05-22
verdicts: { survives: 0, narrow: 2, brittle: 3, unsupported: 0 }
applied_to_target: { lifecycle: "draft → challenged", base_confidence: "0.40 → 0.40 (within brittle cap 0.55)" }
---

# Critique — `concepts/falsifiability-popper`

## Critique（wiki-challenge: 2026-05-22）

### Claim 1: Science 應該做 falsifiable predictions；prediction 錯就 reject theory。

- **Q1 假設：**
  - [hidden] demarcation problem 有單一準則的解 —— 但 Lakatos / Kuhn / Feyerabend 都已挑戰
  - [hidden]「prediction 錯」本身是 unambiguous 的，違反 Duhem-Quine thesis（可能是 auxiliary hypothesis 錯，不是 core theory 錯）
  - [stated] induction 不可信（藏在「prediction 錯就 reject」的邏輯前提中）
- **Q2 跨域跨規模：**
  - **醫療 AI**：診斷模型在 N 次測試中「錯了」，是 theory 錯還是訓練資料偏差？單次 prediction failure 無法 cleanly reject 模型；需 multi-batch + bias audit 才能 attribute。Falsifiability 在這層需 scoped down。
  - **規模**：個人 micro-experiment（單一 A/B test）vs Big-Pharma RCT —— 兩者 reject 標準完全不同（p < 0.05 vs IND/Phase III）。「prediction 錯就 reject」沒有 statistical operationalization。
- **Q3 來源：** secondary（Bhattacherjee Ch1 slides，轉述 Popper）。**未直接 cite Popper 1934/1959 原著**；未提 Popper 自己後期軟化立場（*Conjectures and Refutations* 1963）。對如此 foundational 的 demarcation 命題，純靠教科書轉述算 thin。
- **Q4 反例：**
  - **Quantum mechanics hidden variable theories**：1932 von Neumann 證明後幾十年不可實驗區分；直到 1964 Bell 不等式 + 1980s Aspect 實驗才 falsify。期間是不是 science？working physicists 不會說不是。
  - **String theory**：迄今 unfalsifiable in any practical sense，但被 mainstream physicists 視為 theoretical physics 主流方向。
  - **Evolutionary biology adaptationist just-so stories**：Stephen Jay Gould 1979 批評部分 adaptationist 主張不可 falsify，但 evolution 整體仍是 science。
- **Verdict：** `brittle` —— 主張過強。缺 Duhem-Quine、Lakatos research programmes、Kuhn paradigms 三個現代科哲必備拓展，且 working scientists 對 string theory / hidden variable 等的態度直接 falsify 了「unfalsifiable → 非 science」的硬主張。

### Claim 2: Falsifiability ≠ Falsified —— 若 theory 真被 falsified，那它本來就是 poor theory。

- **Q1 假設：**
  - [hidden] theory 與 test 條件可乾淨分離（Duhem-Quine 直接反對）
  - [hidden]「good theory 不會被 falsified」—— Popper 自己在 *Conjectures and Refutations* 承認所有 theory 終將被 falsified；好 theory 是「能撐越久越好」非「永不被 falsified」
  - [stated] falsification 是 binary（pass/fail），非 degree
- **Q2 跨域跨規模：**
  - **跨域**：Newton 力學被 Einstein 相對論 falsified（高速場景），但 Newton 在 low-velocity scale 仍是 good theory，廣為使用 + 教學主軸。「被 falsified = poor」直接被 Newton 反例 falsified。
  - **規模**：實驗物理（高精度可控）「falsified = poor」勉強可用；社會科學（多變項、多介質）falsified 幾乎不可能乾淨達成，這條準則失效。
- **Q3 來源：** secondary（Bhattacherjee Ch1 pp.87-91，轉述）。**未提 Lakatos research programmes** —— Lakatos 的 core vs protective belt + degenerating vs progressive 是當代解這個問題的 standard answer，page omit 是嚴重缺漏。
- **Q4 反例：**
  - **Newton 力學**：被相對論 falsified（c-velocity 場景），但仍是工程基準。Newton 是 poor theory 嗎？顯然不是。
  - **Bohr atomic model**：被量子力學取代，但仍是教科書 standard、化學教學主軸。
  - **Phlogiston theory**（反例對照）：被 oxidation 取代後完全廢棄 —— 這才是「真 poor theory」。差別是「能不能在 scope 內保留價值」，而非「是否被 falsified」。
- **Verdict：** `brittle` —— 違反現代科學哲學共識。「falsified = poor」這條二元判斷，被 Newton/Bohr 等持續被使用的 falsified theory 直接反證。

### Claim 3: Freud psychoanalysis 不可否證，故非 theory。

- **Q1 假設：**
  - [hidden]「整個 psychoanalysis」是單一 theory（實際上 dozens of sub-claims，部分可 falsify、部分已被 falsify）
  - [hidden]「無法設計能讓理論被證錯的觀察」適用 100% 的 psychoanalytic claims
  - [stated] Bhattacherjee 的判斷正確（無獨立 verify）
- **Q2 跨域跨規模：**
  - **跨域**：部分 psychoanalytic claim（如「童年經驗影響成年依附型態」）已被 attachment theory（Bowlby、Ainsworth, *Strange Situation*）operationalize + falsify-tested → 部分支持、部分修正。所以「全 psychoanalysis 不可否證」太絕對。
  - **規模**：個案 case study「unconscious wish drives behavior」確實難 falsify；但 group-level「壓抑機制存在」可透過 implicit-association test、false-memory studies operationalize。
- **Q3 來源：** secondary。**沒 cite Popper *Conjectures and Refutations* (1963) 原文**，也沒 cite **Adolf Grünbaum *The Foundations of Psychoanalysis* (1984)** —— 這本是 post-Popperian 對 Freud 駁斥的 classic critique。Grünbaum 認為 Freud **某些 specific 主張（如 repression）可 falsify，且被 actual data falsify**，比「不可 falsify」更強的批評。Page 未引 Grünbaum 等於漏掉現代主流批判源頭。
- **Q4 反例：**
  - **Repression 假說 falsified**：Loftus 1990s false-memory syndrome 研究實際 falsified Freudian repression model —— 證明 repression mechanism 與 Freud 描述不符。**如果完全 unfalsifiable，怎麼會被 falsified？** 這個矛盾顯示「Freud 不可 falsify」本身是錯誤判斷。
  - **Cognitive Behavioral Therapy**：源自 psychoanalytic 傳統的分支，但完全 testable + 數千 RCT 驗證。
  - **Attachment theory** 自 1960s 起就是 falsifiable 的 psychoanalytic 延伸，且大量實證。
- **Verdict：** `brittle` —— 把 Freud 整體 lump together 是 strawman；部分主張實際已被 falsify 過（與 page 的「不可否證」陳述矛盾）。

### Claim 4: Anthropology / sociology 的 case studies 嚴格說不可否證，但仍是 science（page 自承的內部張力）。

- **Q1 假設：**
  - [stated] falsifiability 是 binary（嚴 vs 鬆），非 spectrum
  - [hidden]「science」一詞有唯一界定 —— Kuhn / Feyerabend 認為 demarcation 是 social negotiation
  - [hidden] anthropology / sociology 真的「不可 falsify」—— 實際上 comparative ethnography（Mead vs Freeman in Samoa）就是 falsify-able
- **Q2 跨域跨規模：**
  - **跨域**：natural history / 古生物學也是 observational 不做 controlled experiment；但 Darwin / Wallace 透過 comparative observations falsified 多種 special-creation 假說。所以「observational ≠ falsifiable」是錯類比。
  - **規模**：個別 case study 確實難 falsify；comparative case study（multiple cases）可以 —— 例如 Putnam *Bowling Alone* 的 social capital 衰退假說被多國 replication data 部分 falsify。
- **Q3 來源：** Bhattacherjee 自己 candid 承認（page 直接引述），這個 acknowledgment 算誠實；但 page **沒給解方** —— Lakatos sophisticated falsificationism 或 Kuhn paradigm shift 是當代 standard answer，page omit 等於把問題擺著沒解。
- **Q4 反例：**
  - **Margaret Mead vs Derek Freeman (1983 *Margaret Mead and Samoa*)**：Mead 在 Samoa 觀察的結論被 Freeman 重新研究 falsified —— 證明 anthropology 確實可 falsify。
  - **Jared Diamond *Guns, Germs, and Steel***：環境決定論 thesis 被多國 historians（如 J. M. Blaut, 2000）用反例 falsified（無法解釋的歷史細節）。
  - **Putnam *Bowling Alone***：美國 social capital 衰退假說被歐洲 replication data 修正（趨勢不普世）。
- **Verdict：** `narrow` —— page 提出真實張力但沒給解方；Bhattacherjee 自己鬆綁的態度算誠實但不完整。建議 scope：「Falsifiability 嚴格版適用於 hypothesis-testing 科學；comparative / interpretive 場景需 Lakatos 修正版」。

### Claim 5: 好的 product hypothesis 必須可被 falsified（PM / 醫療 AI 意涵）。

- **Q1 假設：**
  - [hidden] product hypothesis 與 scientific theory 是同類型的（功能上相似）—— Steve Jobs / Apple 從來不這樣工作
  - [hidden] PM 的工作主要靠 hypothesis testing 而非 vision / taste / strategic bet
  - [stated] falsifiability 是 PM 應該追求的目標
- **Q2 跨域跨規模：**
  - **跨域**：Apple Steve Jobs「Don't ask customers」的 product approach —— 並非以 falsifiable hypothesis 為基礎，而是以 vision。但 iPhone / iPad 仍是巨大成功。在 vision-driven 公司，硬塞 falsifiable hypothesis 會殺掉跨越式創新。
  - **規模**：Booking.com（[[concepts/ab-testing-as-strategy]]）每天 1,000 falsifiable experiments —— 大流量 + 漸進改善有效；但 Vermeer 自己說「**strategy 不能 A/B test**」（[[concepts/ab-testing-as-strategy]] 引用）—— 這就是 PM 領域內 falsifiability 的 boundary。Page Claim 5 把這條 boundary 抹平了。
- **Q3 來源：** 純 `^[inferred]`，無 cite 外部 source。Lean Startup（Ries 2011）build-measure-learn 是 falsifiability-light 框架的代表，可 cite；page 沒 cite。
- **Q4 反例：**
  - **Vision-driven products**：iPhone / Tesla Cybertruck —— 創辦人 vision-bet，pre-launch 無可 falsify metric，仍成功（或失敗，但都不是 hypothesis-testing 模式）。
  - **Discovery-mode generative user research**：早期是 problem-finding，不是 hypothesis-driven；強加 falsifiable hypothesis 扼殺 discovery。
  - **FDA 510(k) substantial equivalence**：page 自己提到不是 strict falsification —— 但這不是「too soft」的缺陷，是醫療領域 risk-benefit tradeoff 的合理設計。Page 把它 framed 為 Popperian 缺陷，反映 Jason 自己的 PM 角度價值判斷，但**沒 systematically defended 為何 Popperian 標準應該套到醫療法規**。
- **Verdict：** `narrow` —— 在 incremental / data-rich PM 場景有效；vision-driven / discovery / regulated（FDA）場景需 scope 收窄。建議改寫：「在 incremental product work 中，把 hypothesis 寫成 falsifiable 形式有助於減少 HiPPO；但 strategy / discovery / regulated industries 是 different game」。

## Overall page verdict

5 條核心 claim：0 survives / 2 narrow / 3 brittle / 0 unsupported。

**主要弱點 ——「現代科哲三巨頭（Duhem-Quine / Lakatos / Kuhn）的 omission」**：page 把 Popperian falsificationism 當成 demarcation 的唯一準則來介紹，沒提 Lakatos research programmes（解 Duhem-Quine + Newton-as-Good-Theory）、Kuhn paradigm shifts（解 working scientists 對 unfalsifiable theory 的態度）、Feyerabend 方法論無政府主義（解極端反 Popper 立場）。對 demarcation 這麼基礎的議題，缺這三個拓展是嚴重 omission。

**次要弱點**：對 Freud 的判斷是基於 Popper 1959 立場，未引 Grünbaum 1984 對 Freud 的後期修正（部分 Freud 主張**可** falsify 且**已被** falsify）。

**結構性張力**：Claim 4 (anthropology) 內部承認了 falsifiability 的張力，但其他四條 claim 仍按嚴格 Popperian 立場寫 —— page 內部不一致。

### 建議行動項目

1. **加段「現代科哲拓展」**：簡介 Lakatos / Kuhn / Duhem-Quine 對 strict Popperianism 的修正；說明 page 採 strict 版的理由與邊界。
2. **軟化 Claim 2「falsified = poor」**：明確加 Newton / Bohr 反例，把「falsified = poor」改成「falsified theory 仍可在 scope 內保留價值（Lakatos protective belt）」。
3. **軟化 Claim 3 對 Freud 的全盤否定**：引 Grünbaum 1984 + Loftus repression 實證 + attachment theory；把「Freud 不是 theory」改成「Freud 整體框架難 falsify，但部分 specific 主張可 falsify 且已被 falsify」。
4. **Claim 4 加解方**：引 Lakatos sophisticated falsificationism 作為「anthropology 怎麼算 science」的當代回答。
5. **Claim 5 加 scope qualifier**：明寫「incremental data-rich product work vs vision-driven discovery / regulated industries 是 different game」+ cite [[concepts/ab-testing-as-strategy]] 的 Vermeer 自承「strategy 不能 A/B test」。
6. **frontmatter sources 加 primary source**：cite Popper *The Logic of Scientific Discovery* (1959 English) + *Conjectures and Refutations* (1963) + Grünbaum *The Foundations of Psychoanalysis* (1984)。
