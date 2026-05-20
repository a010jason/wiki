---
title: RPV Framework（Resources, Processes, Values）
type: concept
domain: mgmt
tags: [RPV, Christensen, organizational-capability, disruptive-innovation, mgmt]
aliases: [RPV framework, Resources Processes Values, Christensen RPV, 資源-流程-價值觀框架]
sources:
  - book:Christensen-Anthony-Roth-Seeing-Whats-Next
  - book:Christensen-Raynor-2003-Innovators-Solution
  - case:Shih-Thurston-2010-Intel-NBI-A-HBS-9-609-043
created: 2026-05-20
updated: 2026-05-20
summary: >-
  Christensen 等人提出的組織能力診斷框架：一家公司「能做什麼、不能做什麼」由三個層次決定 —— Resources（資源）/ Processes（流程）/ Values（價值觀）。三者中 Resources 最容易調整，Values 最難改變。RPV 是診斷為何 incumbent 公司無法做 disruptive innovation 的核心工具。
provenance:
  extracted: 0.7
  inferred: 0.27
  ambiguous: 0.03
base_confidence: 0.45
lifecycle: draft
lifecycle_changed: 2026-05-20
---

# RPV Framework（Resources, Processes, Values）

## 由來

> Clayton Christensen 在 *The Innovator's Solution*（Christensen & Raynor 2003）首次系統化提出，*Seeing What's Next*（Christensen, Anthony, Roth）以 Figure I-2 整理為標準診斷工具。^[inferred]

回答的問題：**為什麼一家在現有市場無比強大的公司，常常做不出 disruptive innovation？** Christensen 的答案：因為公司「能做什麼」由三個結構性層次決定，而新事業所需的 RPV 配置可能與既有公司根本不相容。

## 三層

### Resources（資源）

「Things or assets that organizations can buy or sell, build or destroy」^[extracted]

| 類型 | 例子 |
|---|---|
| Tangible | People, Technology, Products, Equipment, Information, Cash, Brand, Distribution channels |
| Intangible | Technology, Reputation, Culture |
| Human | Skills/know-how, Capacity for communication & collaboration, Motivation |

**特性**：最容易調整、最容易看見、最容易被複製（因此通常不是長期競爭優勢的根源）。

### Processes（流程）

「Established ways companies turn resources into products or services」^[extracted]

例子：Hiring and training / Product development / Manufacturing / Planning and budgeting / Market research / Resource allocation。

**特性**：
- 為「重複做某類事」優化，因此處理**它沒設計來處理的任務時會失敗**
- 改變比 Resources 困難（牽涉跨部門協作慣性）
- 可以是 explicit（SOP）或 implicit（潛規則、慣例）

### Values（價值觀）

「The criteria by which prioritization decisions are made」^[extracted]

例子：Cost structure（毛利門檻）/ Income statement preferences / Customer demands（要服務哪類客戶）/ Size of opportunity（多大才值得做）/ Ethics。

**特性**：
- 由「過去什麼決策有效」累積而成 → 公司愈成功，values 愈僵固
- **改變最困難**（要動到組織歷史與既得利益）
- 是 disruptive innovation 失敗的最深層原因 ——「**我們覺得這事不值得做**」自然就不會做

## 三層的「改變難度」階梯

```
Easy ←—— Resources ——— Processes ——— Values ——→ Hard
```

→ Christensen 的核心結論：**買得到 Resources，學得會 Processes，但 Values 幾乎改不了**。^[inferred]

→ 因此處理 disruptive innovation 的關鍵不在於「招對人」（Resources）或「建好流程」（Processes），而在於**用組織設計繞過 Values 衝突**（spinoff、heavyweight team、不同 metric）。

## RPV 與 4-quadrant fit matrix

Christensen & Raynor (2003) 進一步把 RPV 落實成 4-quadrant 矩陣，用於決定**新業務該用什麼組織形態孕育**：^[extracted-from-lecture]

```
              Fit with Organization's Values
              Good (sustaining) ←————————→ Poor (disruptive)
              
Fit with    Poor   B 大內高手（雙元）        C 獨立門戶（holding）
Org's              Heavyweight team        Heavyweight team in
Processes          within existing org     separate spinout
              
            Good   A 內部功能（擴大）        D 切割（分公司）
                   Light/functional team   In-house heavyweight,
                   within existing org     but commercialization
                                           requires spinout
```

| 象限 | 何時用 | 例 |
|---|---|---|
| A 內部擴大 | 新業務的 RPV 與既有 fit ——sustaining innovation | 主流產品線升級 |
| B 大內高手（雙元） | Processes 不 fit 但 Values fit | Intel Atom 在 mobile group 內由獨立 heavyweight team 做 |
| C 獨立門戶（holding） | Processes 與 Values **都不 fit**——真正的 disruptive | Intel 收購 Mobileye（保持獨立運作） |
| D 切割（分公司） | Processes fit（製造 capability）但 Values 不 fit | In-house dev + spinout commercialize（如 Sandia Labs → 衍生公司）|

→ **C 象限是 disruptive innovation 的標準答案**，但要求 corporate leadership 願意放手（給予財務、metric、招聘的獨立性）。^[inferred]

## Intel NBI 的 RPV 診斷

[[entities/intel-NBI]] 是 RPV 框架的反面教材：^[inferred]

| RPV 層 | Intel 的特性 | 對新業務的影響 |
|---|---|---|
| Resources | 全球最先進製程 + 上千億現金 + 強品牌 + 大客戶 | 看似最強，但**為了 leverage 這些，新業務被迫 follow Intel 規範** |
| Processes | "copy exact" manufacturing / 跨 product generation 的 architecture compatibility / 跨季 budget cycle | **新業務必須適配**這些 process，**否則沒資格用 Intel 製造**——多數 NBI venture 因此轉外部 foundry |
| Values | 高毛利（>50%）+ 大規模 opportunity（>$1B）+ microprocessor-centric customer | **新業務早期都太小、毛利不夠**，Values 自動排斥 |

> Barrett 的引文（案例 page 8）正是 RPV diagnosis 的精華：「This draws you down a very well defined path of what types of things fit well with Intel's resources, processes, and priorities, which may, or may not, make sense for a new business.」^[extracted]

→ NBI 的 Catch-22 從 RPV 角度看清楚了：**要 fit Intel 就失去新業務生機；不 fit Intel 就失去 graduate 機會**。詳見 [[synthesis/corporate-venturing-isolation-paradox]]。

## RPV 與其他框架的關係

| 框架 | 與 RPV 的對應 |
|---|---|
| [[concepts/VRIO-framework]] | Resources 對應 Resources 一柱；Processes/Values 主要影響「Organization」一柱 |
| [[concepts/resource-based-view]] | RBV 著重 Resources；RPV 是 RBV 的擴展（加上 Processes / Values）|
| [[concepts/value-chain]] | Porter 的 activities 大致對應 Processes 層 |
| Dynamic Capability（Teece） | RPV 是 static snapshot；Dynamic capability 問「能否重新配置 RPV」 |

## 對醫療 AI PM 的延伸

> 註：以下是把框架套到自己工作的 hypothetical 思考。^[inferred]

判斷一個新產品線該怎麼孕育，逐層問：

1. **Resources fit?** 既有資料 / 工程師 / 客戶可不可以重用？
2. **Processes fit?** 既有 hiring / product dev / 法規送審 / sales cycle 適合嗎？
3. **Values fit?** 既有的毛利門檻、opportunity size 標準、customer-centric 慣性，會不會自動把這個新事業 deprioritize？

如果三層都 fit → A 象限，內部擴大就好。
如果只有 Resources fit、Processes/Values 不 fit → C 象限，**spinoff 或 holding 結構**比硬塞入主流業務務實。

## Related

- [[entities/intel-NBI]] —— RPV 框架的最佳負面案例
- [[concepts/disruptive-innovation]] —— RPV 用來解釋 incumbent 為何失敗
- [[references/shih-thurston-intel-nbi-2010-HBS]] —— 案例引用 RPV
- [[concepts/VRIO-framework]] —— 相近的能力診斷框架
- [[concepts/resource-based-view]] —— 理論祖先
- [[synthesis/corporate-venturing-isolation-paradox]]

## Sources

- Christensen, C. M., Anthony, S. D., & Roth, E. A. *Seeing What's Next: Using the Theories of Innovation to Predict Industry Change* (Figure I-2)
- Christensen, C. M., & Raynor, M. E. (2003). *The Innovator's Solution*. HBS Press
- [[references/shih-thurston-intel-nbi-2010-HBS]] page 8
