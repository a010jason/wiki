---
title: Hot Cache
updated: 2026-05-22T01:00+08:00 (wiki-synthesize top 5 gap pair — VRIO×Porter, Disruption×DominantDesign, VRIO×ValueChain, Booking×AdCenter, BlueOcean×Disruption)
---

# Hot Cache

*A ~500-word semantic snapshot of recent activity. Updated after every major write operation.*

## Recent Activity

- [2026-05-22 01:00] WIKI_SYNTHESIZE — **5 個跨概念 synthesis 一次寫入（gap top 5）**：掃 wiki 42,030 個 concept/entity pair co-occurrence，扣除 456 個既有 synthesis 覆蓋 → 41,574 gap pair。取共現 ≥9 次的 5 個寫 synthesis：(1) [[synthesis/VRIO-x-porter-five-forces]] — 兩框架是策略流程的 sequential gate（外部→內部），不是同層雙視角；industry effect / firm effect 反向消長；(2) [[synthesis/disruptive-innovation-x-dominant-design]] — dominant design 三鎖死機制（learning/switching/coordination）正是 Innovator's Dilemma 的結構前置條件；(3) [[synthesis/VRIO-x-value-chain]] — Inimitable 三來源全部住在 linkages 而非單一 activity；causal ambiguity 是核心保護；(4) [[synthesis/booking-x-adcenter-platform-learning]] — 同年代雙邊平台後進者對偶；學習速度 vs Porter 框架 + Porter generic strategy 在 digital 失靈 7 條；(5) [[synthesis/blue-ocean-x-disruptive-innovation]] — 兩條相反軌跡（橫向跨類別 vs 垂直低端爬升）到同一目的地。10 個 backlink 加到 source page；index.md 列入。

- [2026-05-22 00:30] INGEST — **HBS 9-908-049 AdCenter case 21p 純掃描 backfill — 推翻 Wave A deferred 結論**：Wave A 把 case 標 deferred 理由是「PNG 每張 9MB / 撞 user quota / 需 OCR」，但 **CLAUDE.md PDF SOP L3 路徑沒走完**。本次正確走完：`pdftoppm -r 72 -jpeg -jpegopt quality=80` 把 35MB / 2758×4050 純掃描渲成 21 張 JPEG（每張 ~770KB，總計 16MB），再 dispatch 7 parallel subagent × 3 頁，每 subagent 處理 ~2.3MB 遠在 quota 內。**新 SOP 啟示**：deferred 前必須把 L2-A / L2-B / L2-C / L3 全試完；JPEG 對掃描印刷品壓縮率比 PNG 高 5-10x。修正 metadata bug：reference frontmatter case sha256 誤抄 lecture（87b6a8a4...→66eb0e2e...）。entity 新增大段「Case 原文敘事」：Setting / 三大線上廣告分類 / 市場規模 Exhibit 1 / 搜尋市占演化 Exhibit 2 / Stotland 三條戰略 / Best Vacuum Exhibit 8 / Live Search 流量規模 / discussion questions / **教師講義 vs case 原文的張力對比**。**策略管理資料夾 46/46 真正全閉環**（前次 Wave C 宣告閉環時 AdCenter case 仍 deferred；本次補完才算數）

- [2026-05-21 21:00] INGEST — **策略管理 Wave C 完成（7 PDFs / 58 頁 / 14 新頁，Wave A+B+C 全閉環）**：4 個 subagent 並行 distill misc PDFs。**最大發現**：
  - **[[entities/Tang-Edwin-Yingzhang|唐瓔璋（Edwin Tang）就是整個策略管理 14 週課程的授課者]]**，並親自把 Fighting with Porter 揭露為他自己 SMJ 2010 論文與 Porter/Barney/Christensen/Grant 學派的學術論戰
  - **[[entities/Mobileye]] 是 [[entities/intel-NBI|Intel NBI failure]] 的反面成功案例**（acquire + structural isolation + 2022 spin off 路徑 vs internal venture + dissolved）
  - **Kohavi HBR 2017 + KDD 2009** 與 [[entities/Booking-com|Booking]] case 形成 A/B testing platform-side 補完
  - **14 個新頁**：2 entity hub（[[entities/Tang-Edwin-Yingzhang]] / [[entities/Mobileye]]）+ 4 reference manifest（[[references/strategy-management-course-2024-nycu|課程 master index]] / [[references/fighting-with-porter-lecture]] / [[references/kohavi-2017-HBR-online-experiments]] / [[references/mobileye-image-deck]]）+ 8 concept：
    - **學術 critique**：[[concepts/tautology-in-management-theory]] / [[concepts/INUS-condition]]（管理理論恆真句批判 + Mackie 因果哲學）
    - **A/B testing**：[[concepts/overall-evaluation-criterion]] (OEC) / [[concepts/HiPPO-decision-making]]
    - **Corporate strategy**：[[concepts/parenting-matrix-goold-campbell]]（Goold-Campbell 母合矩陣，Mobileye-Intel 應用）
    - **台灣本土策略思想**：[[concepts/MAO-framework]]（毛治國 V=MAO/AMC）/ [[concepts/strategy-nine-theories]]（吳思華策略九說）
    - **賽局論**：[[concepts/penguin-problem-game-theory]]（與 HTC penguin-effect 不同）
  - **教師眉批高光**：Fighting with Porter 從 Tautology / INUS / Popper falsifiability 哲學層級攻 Porter + Course syllabus 含毛治國 ABC 個案學習法 + 吳思華策略九說 + 雙元理論等死找死 + Red Queen + 形而上謂之道 + Mobileye Parenting Matrix 紅箭頭點 ALIEN TERRITORY / VALUE TRAP（2022 spin off 應驗）
  - **Wave A+B+C 合計 65 個 wiki 頁**（23+28+14）；策略管理資料夾 27 PDFs ingest 完成（含 AdCenter case scan deferred）

- [2026-05-21 19:00] INGEST — **策略管理 Wave B 完成（8 PDFs / 120 頁 / 28 新頁）**：8 個 single-file lecture 並行 subagent distill。**Teacher annotation 密度極高**，是 Wave B 最大價值：
  - **7 entity hub**：[[entities/Steve-Jobs]] / [[entities/Elon-Musk]] / [[entities/Lego-Group]] / [[entities/HTC]] / [[entities/Alphabet]] / [[entities/Ant-Group]] / [[entities/Zara]]
  - **8 reference manifest**：5 HBS case + Yoffie/Cusumano + Zara + Christensen HBR
  - **10 concept**：
    - **教師原創跨文化對接**：[[concepts/strategy-rules-yoffie-cusumano]] + [[concepts/sun-tzu-five-fundamentals]]（道天地將法 ↔ Yoffie 5 rules）/ [[concepts/象-數-理-epistemology]]（陰陽五行 + Popper 三世界 + 財報詮釋）
    - **教師原創策略框架**：[[concepts/specialized-generalist-vs-generalized-specialist]] / [[concepts/substitute-complement-substitute-cycle]]（替代→互補→替代三段論）/ [[concepts/penguin-effect]] / [[concepts/winner-take-all-determinants]] 4 要素
    - **學術概念**：[[concepts/institutional-voids]] / [[concepts/icarus-paradox]] / [[concepts/corporate-turnaround-strategy]]
  - **3 synthesis**：[[synthesis/yoffie-five-rules-vs-sun-tzu-five-fundamentals]] / [[synthesis/financial-ratio-epistemology-yi-jing]]（象數理 wiki 內最跨領域 synthesis）/ [[synthesis/back-to-core-turnaround-pattern]]（Apple/Lego/Samsung 三案 turnaround 對比）
  - **教師眉批高光**：
    - **Musk Empire**「沒有 synergy」/ 得三電得天下（電池/電機/電控）/ Cybertruck「活取熊膽」
    - **Zara**「天下武功唯快不破」/ 象數理 epistemology / 凡事有定 定中有象 象中有數 數中有理
    - **Alphabet** Specialized generalist ↓ Generalized specialist / users ≠ customers / 政治家 vs 政客 / KPI 低估 OKR 管不了心都是錯 / Apple Car 撤案教訓 / 公司搞太大？太細？
    - **Ant Financial** 三段論 + institutional voids + Bass diffusion + 為什麼中國沒 winner-take-all「盜亦無道」+ Fly under the radar 整段打 X
    - **HTC** 安內攘外（清史稿）+ 伊卡洛斯悖論 + 企鵝效應 pivot driver + winner-take-all 4 要素
    - **Steve Jobs** 沒有張忠謀的台積電是否可永續？/ leader-strategist 雙能力 / 為什麼台灣 CTO as CEO / IDM vs Fabless vs Foundry
    - **Lego** 雙元理論等死找死同時來 / Connect 是用戶不是產品 / re-position→re-config→mobility barrier→value chain 四步框架
  - 策略管理資料夾剩 12 個 misc PDF（Wave C 4 + paired case originals 含 AdCenter case-only deferred）

- [2026-05-21 17:00] INGEST — **策略管理 Wave A 完成（12 PDFs / 226 頁 / 23 新頁）**：6 case studies + 2 lecture supplements，8 個 subagent 並行 distill（A1 AdCenter 走 lecture-only / case 35MB 純掃描 deferred；A1 第一次撞 user-level token quota，2:40pm reset 後 retry 成功）。寫入：
  - **6 entity hub**：[[entities/Levendary-Cafe]] / [[entities/Marriott-International]] / [[entities/Booking-com]] / [[entities/Flextronics-International]] / [[entities/Samsung-Electronics]] / [[entities/Microsoft-AdCenter]]
  - **6 reference manifest**：5 HBS case + AdCenter
  - **9 concept**：[[concepts/subsidiary-leader-lifecycle]]（教師原創自走砲/藩鎮割據/太平盛世）/ [[concepts/dedicated-vs-flexible-capacity]]（教師原創太平盛世vs大飢荒）/ [[concepts/ab-testing-as-strategy]] / [[concepts/smile-curve]] 施振榮 / [[concepts/asset-light-strategy]] 1977 Marriott 首倡 / [[concepts/agency-vs-merchant-model]] / [[concepts/sashimi-theory]] Yun / [[concepts/desktop-vs-platform-mindset]] 教師原創 / [[concepts/compression-night-economics]]
  - **2 synthesis**：[[synthesis/wei-zheng-leadership-and-subsidiary-management]] 諫太宗十思疏跨領域對標 / [[synthesis/agency-vs-merchant-platform-models]] 跨產業
  - **教師眉批採集**：Levendary 諫太宗十思疏 + 自走砲→藩鎮割據→功高震主→太平盛世 / Marriott 輕資產=空手道 + Miles-Snow Prospector 解答 + compression night / Booking NK fitness landscape + 學習型組織五項修練 + Survey-DB-Experiment 因果階梯 + Booking 吸 Google 的血 / Flextronics co-evolution + 鴻海 OBM Infocus 軌跡 / AdCenter 全部都沒用！！典範移轉 + MS 還是 Desktop 思維 + Porter 在 digital 失靈
  - **策略管理資料夾剩 22 份待 ingest**（Wave B 8 個單檔 lecture + Wave C 4 misc + 10 已配對 case original 含 AdCenter case-only deferred）

- [2026-05-21 15:00] INGEST — **ESG + 企業經營與倫理 + 公司治理三資料夾合併大爆發（31 PDFs / 1053 頁 / 62 新頁）**：(A) **ESG 14 PDFs (887p)** — 陽明交大 EMBA 2023 秋學期系列（[[entities/Hu-Jin-Li]] 主導）+ [[entities/Liu-Zong-Sheng]] 永續金融 / ETF 2.0、佳典管顧 GRI/SASB/TCFD + NetZero Pro、黃世忠 SGS 淨零策略、張民忠致理 碳會計、陳明宏百米良田 土力革命；(B) **企業經營與倫理 6 PDFs (119p)** — 2025 春學期業界主管系列：[[entities/Li-Jian-Wen]] 首都客運（雪隧火燒車 [[concepts/crisis-management-PDCA]]）/ [[entities/Tsai-Feng-Ming]] 陽明海運（紅海危機 + 川普 2.0 + IMO 減排）/ [[entities/Huang-Bo-Xiang]] 迪芬尼（雇主品牌四要素）+ 三商美邦 / 舊振南 / 迪芬尼 case briefing；(C) **公司治理 11 PDFs (47p)** — 2025 春學期公司法 + 證交法逐條教學 9 份 + HP pretexting scandal 2 篇報導。產出：3 reference manifest + 23 ESG concept（GRI/SASB/TCFD/ISSB/Scope1-3/ISO14064-1/ISO14067/CBAM/RE100/SBTi/SDGs/PRI/Equator/USR/碳費/淨零12策略/碳權市場/漂綠/評級分歧/永續會計...）+ 11 Governance concept（**帝王條款 23 條 / 獨董 / 審計委員會 / 三委會 / 特別股 / 複數表決權 / ESOP / 累積投票 / 競業禁止 / Pretexting / 金字塔結構**）+ 5 Ethics concept（PDCA 危機處理 / ISO 39001 / 指差確認 / 雇主品牌 / 退場 ESG）+ 16 entity（[[entities/Hewlett-Packard]] / [[entities/Patricia-Dunn]] / [[entities/TSMC]] / [[entities/Yang-Ming-Marine]] / [[entities/Capital-Bus-Group]] / [[entities/Delta-Electronics]] / [[entities/O-Right]] / [[entities/E-Sun-Financial]] / [[entities/Tymphany]] / [[entities/Kuo-Yuan-Ye]] / [[entities/BlackRock]] + 5 人物）+ 4 synthesis（**[[synthesis/HP-pretexting-lessons]]** / **[[synthesis/family-firm-control-vs-governance]]** / **[[synthesis/medical-ai-ESG-implications]]**（visibility: internal）/ **[[synthesis/shipping-aviation-ESG-paths]]**）。Wave 1 subagent 中 9 lectures governance 撞 sonnet rate limit，分成 2 個小 subagent 後續處理成功；土力革命 43MB + 李建文 34MB 走 pdftotext L2-A fallback

- [2026-05-21 14:00] INGEST — **NYCU EMBA 組織與人力資源管理 8 lecture PDFs（115 頁 / 11 新頁 + 1 update）**：溫金豐 2024 後半段 6 週課（Ch1-12）+ Syllabus + 20240224 OB intro。8 parallel subagent 全程 path B。寫入：1 reference（[[references/wen-2023-HRM-textbook]] 溫金豐 et al. 5 版教科書 manifest）+ 9 concept（**ulrich-hr-roles** 4 角色 + HRM 5 階段、**SHRM-three-perspectives** RBV/Best-Practice/Contingency、**HR-planning-forecasting**、**competency-model-three-tiers** + KSA 冰山、**employee-selection-tools** 5 工具 + 信效成三角 + 面談 4 偏誤、**training-effectiveness-kirkpatrick-alliger** 四層級 + 70-20-10、**performance-appraisal-methods-six** + BARS/BOS + 360 + 四偏誤、**compensation-system-structure** 四基礎 + HAY + 獎金三型 + 福利四類、**glass-ceiling**、**HR-future-trends-five-axes** 人口/競爭/Y-Z/ESG/AI）+ 1 synthesis（**OB-HRM-strategy-three-layers** 把『OB 是 why / HRM 是 how / Strategy 是 what』展開成完整論述 + 證據鏈）+ 1 entity update（wen-jin-feng 補 2024 課程紀錄）。**OB 資料夾 25 PDFs 全部閉環**（Colquitt OB Ch1-14 + 溫金豐 OKR/Agile/Cross-cultural 3 堂 + 本批 8 個 HRM lecture）。manifest 同步修正 cached 漂移：64 sources / 2215 pages

- [2026-05-21 10:30] INGEST — **Kotler MM 16e Wave 2 完成（5 章 Ch09/10/11/17/18 / 151 頁總和 / 24 個 wiki 頁批量寫入）**：行銷管理 21 份 PDF 的第二批，5 parallel subagent 並行 distill 全 151 頁，主 agent 從未渲染 PDF。寫入：21 concept 頁 + 3 synthesis：
  - **Ch09 Services（4Is + Triangle + SERVQUAL + Blueprint）**：4 concept — service-marketing-4Is（intangibility/inseparability/variability/perishability）、service-marketing-triangle（external/internal/interactive）、servqual-gap-model（5 gap + SQ = P − E）、service-blueprint（line of interaction/visibility/internal-interaction）
  - **Ch10 Brands（PSB 3/3 完整）**：8 concept — brand、brand-equity（vs brand power CBBE）、brand-mantra（3-5 字 DNA + Popper World 3）、brand-hierarchy（house-of-brands/branded-house/sub-brand + BCG）、cobranding（same-co/JV/ingredient + Intel Inside）、brand-value-chain（4 stages + 3 multipliers）、brand-extension（dilution + Burberry/BIC）、luxury-branding（access vs exclusivity）
  - **Ch11 Pricing**：5 concept — pricing-6-steps、price-elasticity-of-demand、pricing-methods（markup/target-return/EVC/competitive/auction）、price-discrimination（1st/2nd/3rd degree + personalized/surveillance）、product-mix-pricing（loss-leader/optional/captive/two-part/by-product/bundling）
  - **Ch17 Growth + PLC**：3 concept — product-market-growth-framework（4 象限）、defense-strategies（6 種 + responsive/anticipative/creative）、product-life-cycle（intro/growth/maturity/decline + fads/trends + scalloped variants）
  - **Ch18 NPD / Stage-Gate**：3 concept — stage-gate-framework（5 stages + 4 validation gates）、adopter-categorization（Rogers 5 類 + Moore Chasm）、forces-fighting-new-ideas（5 句組織抵抗藉口）
  - **3 synthesis**：services-paradox-4Is-vs-product-management（4Is 是 feature 不只 bug，TSMC 模式適用邊界）、asia-luxury-brand-gap（教師質疑亞洲缺奢侈品牌 → 收集反例 + 歐美 luxury 定義偏見的拆解）、PLC-vs-stage-gate-vs-adopter-curve（三套時序模型對齊 + Moore chasm = Gartner trough）
  - **教師中文眉批採集**：TSMC IP Mail yield > 100% 移植服務業 SOP / Twilio Inbound vs Outbound Marketing / 為何中韓日無法創建奢侈品牌 / Popper World 3 / Lot 500 為何成功 / D-Link 危機缺失什麼 / 代工 → price taker、Design → price giver / China race to the bottom / Uber surge vs airline peak / Bird scooters 狂潮 vs 趨勢
  - **PSB 系列完整**：Ch08（Product）+ Ch09（Service）+ Ch10（Brand）三件套到位
  - **Kotler 行銷管理 21 份 PDF 全部閉環**（Wave 1 + 2 + 3）

- [2026-05-21 12:00] INGEST — **Kotler MM 16e Wave 3 — 8 案例 PDF 完成（18 頁總和 / 8 parallel subagent / 7 新頁 + 1 update）**：行銷管理 21 份 PDF 的第三批（小檔 1-4 頁），8 個 subagent 並行 distill。寫入：4 entity（**Shopee** / **TikTok** / **Tiffany** / **Taylor-Swift**）+ 3 concept（**modern-retail-environment-trends** 七大特徵 / **markops-marketing-operations-framework** 1E+5C+STP+7T+CNC/MS+BCG / **integrated-digital-marketing-six-pillars** 六支柱概念圖）+ Amazon entity augment（**FFP / SIOC / Klabin / Walmart 對標** sustainable packaging 段）。**Source 異常**：(a) DECATHLON.pdf 命名與內容不符（內容是零售環境框架，無公司資料）→ 落 concept 而非 entity；(b) Tiffany.pdf 內容稀薄（只有 Audrey Hepburn × 中國 + organic vs M&A 兩個 open question）→ thin entity stub。**剩 Wave 2 ch09/10/11/17/18** 5 章後 Kotler 21 PDFs 全閉環

- [2026-05-20 19:30] INGEST — **Kotler MM 16e Ch01-08 Wave 1 完成（8 章 / 276 頁全文 / 36 個 wiki 頁批量寫入）**：行銷管理 21 份 PDF 的第一批，8 parallel subagent 並行 distill（Ch01/02/03/04/05/06/07 + 6PSB/Ch08），主 agent 從未渲染 PDF，Ch05/Ch03 自動降級 pdftotext L2-A。寫入：1 manifest reference（kotler-keller-chernev-marketing-management-16e）+ 30 concept 頁（hub: marketing-definition / STP-framework / G-STIC-framework / 5C / 3V / 7Ts / customer-value-proposition / positioning / points-of-difference-and-parity + supporting 21 個）+ 2 entities（Philip-Kotler / Patrick-Hanlon）+ 4 synthesis（**porter-vs-kotler-differentiation-debate** / **HTC-marketing-research-gap**（教師批註三層失敗整合）/ 5C-vs-PESTLE-vs-Porter-five-forces / G-STIC-vs-OKR-SMART）。教師中文眉批全採集（TSMC 生態系 / HTC quietly brilliant / Nokia drop dead test / Acer / Asus 本地案例 + 對 Porter stuck-in-the-middle 的挑戰）。**剩 Wave 2 (Kotler ch09-18 共 5 章) + Wave 3 (8 個案例 PDF)**

- [2026-05-20 20:00] INGEST — **Intel NBI 講義（HBS 9-609-043 / Shih & Thurston 2010）path A 全文 9p 一次讀完**：策略課程 2024/4/9 版講義，主軸是 HBS Intel NBI (A) 案例 + Christensen RPV / 4-quadrant fit matrix。5 新頁——1 reference（shih-thurston-intel-nbi-2010-HBS）+ 1 entity（intel-NBI 完整組織歷史與 T-Up 失敗解釋）+ 2 concept（**RPV-framework** Christensen 三層能力診斷 / **intrapreneurship-vs-venture-capital** Exhibit 1 九維對比）+ 1 synthesis（**corporate-venturing-isolation-paradox** 落地 Grant Ch7 audit 留下的 thread，Catch-22 = isolating mechanisms 反向作用 + RPV 不相容 = 不可解，唯一出路 C 象限 spinoff，Intel 自己後來收購 Mobileye 印證）。4 個既有頁更新 cross-link（isolating-mechanisms / causal-ambiguity / disruptive-innovation / intended-vs-emergent-strategy）

- [2026-05-20 18:00] AUDIT — **Grant Ch7 Competitive Advantage 完整 backfill（path A 全文 13p 重讀）**：初版 7 頁（2026-05-05）把 isolating-mechanisms / causal-ambiguity / strategic-innovation / 7-cost-driver 框架塞在 competitive-advantage + experience-curve 兩 hub 頁中；audit 後拆 5 新獨立頁——4 個 concept（isolating-mechanisms / causal-ambiguity / strategic-innovation / drivers-of-cost-advantage）+ 1 synthesis（competitive-advantage-types-and-sources，補 broken link，Ricardian vs Schumpeterian rent + hybrid 條件）。同時更新 8 個既有頁 cross-link。**Grant 全書 Ch1-14 至此完整**。Open thread：Jason 邊註「NBI 預算聽 HQ → 又要求數字 → deliver 不出來」可發展為 corporate-venturing-isolation-paradox synthesis
- [2026-05-20 15:00] INGEST — **Colquitt OB Ch3-14 完整 ingest（12 章 / 1,344 頁 / 12 parallel subagent）**：分 2 wave（Ch3-8 + Ch9-14）一次性 distill 全書下半段。20 新概念頁覆蓋 Individual Outcomes（organizational-commitment + EVLN-framework）→ Individual Mechanisms（job-satisfaction + JCT、stress、Vroom expectancy + Locke goal-setting + Adams equity、trust + organizational-justice、bounded-rationality + decision-making-biases + escalation-of-commitment）→ Individual Characteristics（big-five-personality + emotional-intelligence）→ Group Mechanisms（team-interdependence + groupthink + transactive-memory + 5 power/leadership 頁）。**全書 14 章 ingest 完成**。Ch5/7/9/10/12 subagent 自動降級 pdftotext L2-A
- [2026-05-20 12:55] INGEST — Colquitt OB Ch2 **第二輪深耕**（同檔重 ingest）：8 個 subagent × 21 頁細分覆蓋 166 頁全部，補齊三維度展開。5 個新概念頁（task-performance / organizational-citizenship-behavior / job-analysis / MBO / forced-ranking）+ 2 更新（job-performance hub + reference 頁）。**Path B SOP 二次驗證**：8 個並行 subagent 全部完整讀完所屬頁數，五欄 distill 統一格式回傳；主 agent context 完整無慮
- [2026-05-20 12:30] INGEST — Phase 2 大爆發：Grant 策略管理 Ch2-6 + Ch8-14（12 章 lecture slides，~145 頁），8 個新概念頁（balanced-scorecard / hypercompetition / resource-based-view / cooperation-vs-coordination / industry-life-cycle / dominant-design / transaction-cost-economics / CAGE-distance-framework）。**首次大規模驗證 path B subagent-first SOP**：9 個 subagent 並行，主 agent 從未渲染 PDF，全用 5 欄 distill template 統一回傳
- [2026-05-20 12:30] INGEST — Colquitt OB Ch2 Job Performance 第一輪（166p / 10.8MB），雙 subagent 分批（pp.1-84 + pp.85-166）。新增 job-performance + counterproductive-workplace-behavior 兩個主概念頁。**前次 session 此章因主 agent context 爆掉作廢，本次採 v3 SOP 順利完成**
- [2026-05-20 12:30] BLOCKED — Iansiti AoAI Ch2+：Google Drive 僅有 24 頁 Ch1 PDF，Ch2-10 完整檔案不在已知位置；待使用者補檔
- [2026-05-06 15:30] FEEDBACK — 存進 memory：wiki 範圍是全方位知識（mgmt + 醫療 AI + 學習筆記），distillation 默認 include 而非 exclude，跨領域知識可移轉
- [2026-05-06 15:00] INGEST — Phase 1 pilot 9/20：HBS Moderna(A) case（Iansiti et al. 2021，21p / 9.8MB / 9 exhibits），8 新頁（reference / 3 entity / 4 concept）+ 2 更新。是 Iansiti book 的活案例：Bancel「technology company that happens to do biology」、AI Factory 金字塔、mRNA-as-platform、42 天送疫苗
- [2026-05-06 13:00] INGEST — Phase 1 pilot 8/20：Iansiti & Lakhani《Competing in the Age of AI》Ch1（HBR 2020，24p / 1.1MB），6 新頁（reference / 5 concept）+ 1 synthesis 更新。核心概念：digital-operating-model / scale-scope-learning / weak-ai-sufficiency / strategic-collisions / humans-on-edge-ai-in-core
- [2026-05-06 11:00] INGEST — Phase 1 pilot 7/20：HBS GAFA case（Deighton 2013，中譯版 516-C05），10 新頁（reference / 4 concept / 4 entity / 1 synthesis）。29.6 MB / 19p 大檔案測試 chunk=5 全程未撞 32MB
- [2026-05-06 10:00] DOCS — CLAUDE.md PDF SOP 補 L2/L3 fallback 升級路徑（pdftotext / gs-ebook / qpdf-split / pdftoppm），單頁渲染就爆 32 MB 才啟動
- [2026-05-05 21:30] FIX — pdf-plan.sh v2：v1 以「檔案大小」判斷 chunk 是錯的（slide PDF 渲染後爆 32MB），改以頁數為主，slide PDF 預設 5 頁/批
- [2026-05-05 21:00] INGEST — Phase 1 pilot 6/20：Grant 策略管理 Ch7（Competitive Advantage），7 新頁（competitive-advantage / porters-generic-strategies / experience-curve / value-chain / blue-ocean-strategy / disruptive-innovation / differentiation-analysis）
- [2026-05-05 20:10] VERIFY — 5 個已 ingest PDF 全部 pdfinfo 比對頁數確認完整。SOP：未來所有 PDF 必須 pdfinfo + 分批讀完才開始 distill
- [2026-05-05 20:00] AUDIT — OB Ch1 重讀 p.71-125（之前只讀到 p.70），補 2 新頁（contingency-approach、learning-from-failure）+ 更新 2 既有頁（加 5 Anchors、causation、meta-analysis、evidence-based mgmt）
- [2026-05-05 19:30] INGEST — Phase 1 pilot 5/20：Grant 策略管理 Ch1，產出 5 頁（strategy / strategic-fit / intended-vs-emergent-strategy / corporate-vs-business-strategy / grant-contemporary-strategy-analysis）
- [2026-05-05 19:05] MIGRATE — sources_dir 從本機 Desktop 搬到 Google Drive；4 個檔案 hash 重核全部 match（content 沒受影響）
- [2026-05-05 19:00] INGEST — Phase 1 pilot 4/20：OB 教科書 Ch1，6 頁
- [2026-05-05 18:00] INGEST — Phase 1 pilot 3/20：跨文化管理，4 頁
- [2026-05-05 17:00] INGEST — Phase 1 pilot 2/20：Agile Org，6 頁
- [2026-05-05 15:00] INGEST — Phase 1 pilot 1/20：OKR，7 頁

## Active Threads

- **Phase 2 ingest：** Grant 12 章 + Colquitt OB Ch1-14（全 14 章）+ HBS GAFA / Iansiti / Moderna 完成；**Colquitt OB 全書 14 章 1,635 頁 ingest 完成**（2026-05-20）。剩餘大宗 = Iansiti AoAI Ch2-10（需補源頭）。**path B subagent-first SOP 在 12 parallel subagent 一次性 distill 1,344 頁的場景下完美驗證**
- **path B SOP 經驗：** 12 個 subagent 並行 + 統一 5 欄 distill template = 主 agent context 完整無慮；分 2 wave（6+6）避免 throttling；遇 image-heavy slide 自動降級 pdftotext L2-A；textbook chapter（84-131p）每章 1 個 subagent 即可
- **下一輪 priority：** (a) Iansiti AoAI Ch2-10 源頭補檔（user input needed）；(b) Colquitt OB 進入 wiki-challenge 階段（draft → challenged）— 對 transformational / EVLN / equity / cohesion 等 brittle claim 做質疑；(c) 考慮跑 wiki-synthesize 找跨章節主題
- **Sources 路徑：** Google Drive `AI PM 資料/管理技能與策略/` ✅；hash 驗證全 match
- **CLAUDE.md 結構決議：** B-pragmatic（content/ 為 vault root）✅
- **Visibility filter（A）：** RemoveInternal plugin 已上 ✅

## Key Takeaways

### NYCU 組織與人力資源管理（溫金豐 2024 後半段，Ch1-12）

- **Ulrich 四角色（1997）= 2×2 矩陣**：(策略×流程) Strategic Partner / (策略×人員) Change Agent / (營運×流程) Administrative Expert / (營運×人員) Employee Champion；現代延伸為 HRBP + SSC + COE 三支柱
- **HRM 五階段演進**：Personnel → HRM → SHRM → Talent Management → DEI；教師批註「2024：受影響但不會完全回到 1980 ～」暗示 2020s 中後期經濟壓力讓部分企業把 HR 預算縮回 Personnel 層
- **SHRM 三派觀點不互斥**：RBV（HR 系統 = VRIN）+ Best Practice（Pfeffer 8 項 universal）+ Contingency（fit > best）— 現代主流用 contingency 包覆前兩者
- **內部一致性四面向**：實務間 / 員工間 / 時間 / 言行 — 任一不一致 → 公平感知崩、動機崩
- **HRP 預測二分法**：判斷性（管理估計 / Delphi / 情境分析）vs 數學性；短缺對策核心是**多能工培養**、過剩對策核心是**遇缺不補**
- **職能模型三層 + KSA 冰山**：Core / Professional / Managerial × （K+S 可教 / Self-concept+Trait+Motive 難教）— K+S 投資訓練、AOM 在選才把關
- **Job-based vs Competence-based HR 是兩個典範**：穩定產業用前者，變動產業用後者；台灣製造業仍是 Job-based 大宗
- **甄選五工具 × 信效成三角**：申請表 / 背景調查 / 心理測驗 / 面談 / 評鑑中心法 — 評鑑中心法效度最高但成本爆表；面談 4 大系統性偏誤（先入為主 / 比對 / 公平 / 問題矛盾）→ 用結構化面談對沖
- **甄選是雙向發訊**：雇主 ↔ 應徵者，Realistic Job Preview 降低錄取後離職率
- **Kirkpatrick / Alliger 四層級**：L1 反應 / L2 學習 / L3 行為 / L4 結果 — 90% 企業只做到 L1
- **70-20-10 法則**：70% on-the-job / 20% mentoring / 10% formal training；預算分配通常顛倒，是結構性錯配
- **IDP 與 Performance Review 必須分開**（教師批註明確）：混在同一場對話 → 員工不敢誠實談弱項
- **績效評估四大方法族**：相對比較（排序 / forced）/ 特質 / **行為（BARS/BOS）**/ 成果（MBO）；BARS 用具體行為錨定分數降低 rater 落差
- **360 度回饋的兩刃**：多角度減偏誤 vs 匿名引發 freeride critique；台灣常見「形式化」失敗（全打 4 分）
- **四大評估偏誤**：對比 / 似我 / 暈輪 / 短期；對沖工具 = BARS + 多 rater + critical incident log
- **回饋面談關鍵原則**（教師批註）：「不是『他怎麼了』，而是『之後要做什麼』」
- **薪酬四基礎**：工作內容 / 技能 / 年資 / 工作評價（HAY Method 三維 = Know-how + Problem Solving + Accountability）
- **獎金三型**：佣金 / 分紅（ESOP）/ 工作獎金（spot bonus）— 矽谷 RSU 4-year vesting vs 台灣分紅文化的差異
- **福利四類**：經濟性 / 社會性 / 健樂性 / **工作本身福利** — 第四類最強最被低估（對接 JCM + Herzberg motivator）
- **Glass Ceiling = leaky pipeline**：不是單一天花板而是各 career stage 的水管漏點；修補要修各層，不是只修最後一段
- **HR 未來五軸**：(1) 低生育高齡化 [不可逆]、(2) 勞動市場買賣方反轉、(3) Y/Z 世代意義論述、(4) ESG/DEI、(5) 生成式 AI 雙刃
- **HRM 終極命題**：Demand-Ability Fit + Need-Supply Fit **兩個條件缺一不可**
- **三層整合命題**（[[synthesis/OB-HRM-strategy-three-layers]]）：OB（why）→ HRM（how）→ Strategy（what），同一個 RBV/VRIO 框架在三層有不同對應

### Kotler MM 16e Wave 2 — Ch09/10/11/17/18

- **服務 4Is 是 feature 不只 bug**：Intangibility / Inseparability / Variability / Perishability 是服務的本質特徵，**也是差異化來源**；過度 SOP 化（消滅 variability）= 把高端服務拉到 commodity。教師 TSMC yield 思維適用於中低端服務工業化、不適用高端個人化服務
- **Service Marketing Triangle**：External（公司→客戶）+ Internal（公司→員工）+ Interactive（員工→客戶）三方向；服務的 inseparability 決定「員工就是產品」 — internal marketing 是 interactive marketing 的前置條件
- **SERVQUAL 5 Gap**：GAP 1（管理層認知 ↔ 客戶期望）是最大根因；SQ = P − E 公式把品質定義為「期望管理」問題
- **Brand 種子隱喻**：教師批註「PSB（神木的種子）」 — branding 是 endowing 過程；brand mantra（3-5 字 DNA）= Popper's World 3 客觀知識載體，跨員工世代傳承
- **Brand Equity vs Brand Power**：Equity 是貨幣價值（財務 view），Power 是顧客心智資產（CBBE，customer view）；brand power 高 → 需求彈性低 → 漲價不流失客戶
- **Brand Value Chain**：Marketing Investment → Customer Mindset → Brand Performance → Shareholder Value，三個 multipliers（Program / Marketplace / Investor sentiment）解釋為何同樣行銷投資產生不同股價結果
- **Luxury Brand 平衡**：access vs exclusivity 在鋼絲繩上走；教師尖銳問題「為何中韓日無法創建奢侈品牌」 — 本文反例蒐集（Mikimoto / Comme des Garçons / Sulwhasoo / 鼎泰豐 / 誠品）+ 拆解歐美 luxury 定義偏見
- **Pricing 6 Steps + 4 Objectives**：Maximize profit / Penetration / Skimming / Quality leadership 四選一；教師強調定價同時是 resource / strategy / tactics / performance 四維角色
- **Price Discrimination 三度**：1st (personalized)、2nd (versioning/quantity)、3rd (segmentation)；數位時代 surveillance pricing 是 1st 的進化，但有反托拉斯邊界
- **Product Mix Pricing 6 模式**：loss-leader / optional / captive / two-part / by-product / bundling；captive pricing 經典 = 刮鬍刀+刀片、印表機+墨水、PlayStation 硬體微利 + 軟體 royalty
- **代工 vs 設計議價權**（教師批註）：代工 = price taker，Design = price giver，需要 R&D + 客戶改變才能取得 market power；對應台灣 OEM/ODM 缺 POD 三準則的延伸
- **Product-Market Growth Framework**（Ansoff 變體）：Penetration / Market Development / Product Development / Diversification；leader 加 6 種 defense strategies（position / flank / pre-emptive / counteroffensive / mobile / contraction）
- **PLC + Adopter Curve + Hype Cycle 三線整合**：Moore's Chasm（Early Adopters → Early Majority 死亡谷）≈ Gartner Hype Cycle Trough；醫療 AI 在 chasm 特別寬（因為要 reimbursement + PACS 整合 + whole product）
- **Stage-Gate 5 階段 + 4 Validation Gates**：Idea Gen → Idea Validation → Concept Dev → Concept Validation → Business Model → Business Model Validation → Implementation → Commercial Deployment；醫療 AI 多 FDA / Reimbursement 兩層 gate，總時程是一般 SaaS 的 3-5 倍
- **Forces Fighting New Ideas 5 句藉口**：「Tried before / Not right time / Not the way we do things / Done all right without / Discuss next meeting」 — 對應 5 種認知偏誤（anchoring / status quo / endowment / survivorship / bystander）；對抗工具 = reference customer + pilot + cross-functional sponsor + forced deadline

### Kotler MM 16e Wave 3 — 8 案例 PDF

- **Shopee Agency vs Merchant 對比**：Agency model（阿里巴巴 / Amazon）抽高佣金、高利潤；Merchant model（Shopee）平台自有貨、低毛利規模換利潤；commission model 介於兩者
- **UVMC × 3 預掠定價邊界**（教師補充量化規則）：價格 > 3 × User Value or Market Cost benchmark 觸發 predatory pricing → 反托拉斯風險。低價作為市場進入策略有法律上限
- **TikTok 病毒傳播核心指標**：教師勾選 **completion ratio + click rate** —— click rate = 能不能拉進來，completion ratio = 能不能留住注意力；shares / comments / likes / following 都是次要
- **TikTok offshore 結構**：開曼群島註冊 = 中國禁 Media 企業在中國上市的 VIE 規避結構（教師批註明說），governance 角度與 Amazon / Google 等美系科技公司路徑不同
- **Taylor Swift = artist 從 brand asset 變 brand owner**：Scooter Braun 母帶之爭 → Taylor's Version 重錄 → 「twilight of the music manager」；收入四元化（演唱費 + 版權 + 代言 + 周邊）取代專輯為主
- **Amazon FFP / SIOC**：SIOC 自 2015 減超過 100 萬噸包材；50%+ 客戶偏好環保包裝；Walmart 2025 100% 可回收承諾是直接對標
- **Markops 動態調整核心**：1E + 5Cs + STP + 7Ts → 動態調整，雙指標 CNC（Cumulative Net Contribution）+ MS (Market Share in $) 必須同步追蹤，否則陷「收割 vs 補貼」二擇陷阱
- **BCG matrix 教師重標註為動詞**：Stars → **invest** / Question Marks → **maintain** / Cash Cows → **milk** / Dogs → **divest**（從現況描述轉為決策動詞）
- **行銷拙劣 5 大徵兆**（教師補充）：反應太快（違背快思慢想）/ 遺漏 KSF / drowning in data / 缺 strategy & knowledge / implementation gap —— 與 Kahneman bounded rationality 接合
- **中端零售衰退（barbell 效應）**：hard discounter 與 luxury 同時擴張，中端被擠壓；STP 不能再用「中產階級」作 default segment；positioning 必須選邊或卡在 stuck-in-the-middle
- **整合行銷六支柱**：SEO + 社群 + 數據廣告 + 線上線下 + 口碑 + PR，對 Kotler Ch17 IMC 八模式的數位重組；沒有 personal selling 暗示 B2C 偏向

### OB / Strategy / Management（既有）

- **OB 三層次：** Individual ⊂ Group ⊂ Organization；任何一層議題都被外層影響
- **VRIO 四問：** Valuable / Rare / Inimitable / Organized 都 YES 才有 sustained advantage；OB 是 Inimitable 一柱
- **Pfeffer Rule of 1/8：** 1/2 不信 × 1/2 單點解 × 1/2 不持續 = 只有 12.5% 公司真正拿到 OB practices 的好處
- **OB vs HRM vs Strategy：** OB 是 why、HRM 是 how、Strategy 是 what
- 台灣 Hofstede profile：**高 PD (58) + 高集體 (17) + 偏陰柔 (45) + 高 UA (69) + 極長期 (93)** → agile 導入有結構性阻力
- CQ 提升路徑：**多國短期派外 > 單國長期**；英語能力比在地語言更顯著預測 CQ
- 敏捷組織 Denning 三大法則：**聚焦顧客 / 小就是美 / 網路式結構**；獲利是結果而非目的
- doing agile（局部 Scrum）≠ being agile（組織級轉型）；90% 主管想做、僅 10% 認為自己做到
- **OKR 不是獨立的制度** — 需要 agile 組織的整體配合（領導力、結構、HRM）
- 績效管理兩條互補路線：evaluation（KPI）vs development（OKR），不是替代
- 醫療業 agile 雙軌假說：**法規部分 waterfall + 模型/UX 部分 agile**（待 wiki-challenge 驗證）
- **Platform 跨界滲透**：GAFA 各從一 vertical 起家、8-10 年內全部跨成多 vertical platform；傳統 industry analysis 失效，要改用 contested boundaries 視角
- **WTA vs Always-a-share 二分**：搜索/社交是 WTA（Google 桌面 66% / 行動 93.3%、FB 月均 6:41 vs Google 1:54）；零售/display 廣告是 always-a-share（前 5 名合計才 47%）
- **Stickiness × Reach 廣告變現方程式**：FB reach 比 Google 少 13% 但黏著度高 3.5x → 廣告載體面積反而 3 倍，預測 13 年後（2026）已驗證
- **醫療 AI 三類**：Class A platform（Sectra/GE/Epic 高勝率）、Class B 資料壁壘 pipeline（Aidoc/Heartflow 中勝率）、Class C 通用 pipeline（低勝率）；EBM 接近 Class B 中間態（internal）
- **AI as Runtime**：AI 不再是工具，是企業跑業務的執行環境（Nadella 引言）；員工從「critical path 執行者」變成「邊緣例外處理者」
- **Digital Operating Model 反轉曲線**：傳統 ops 邊際遞減（規模大→complexity 上升）vs DOM 邊際遞增（規模大→資料多→AI 強→服務好）；Iansiti & Lakhani Figure 1-2 是核心圖
- **Scale-Scope-Learning 三軸**：DOM 三優勢同時成立才有質變；醫療業 Learning 軸被法規/隱私壓制 → 平台化路線該靠 Scale + Scope 而非 Learning
- **Weak AI 已夠顛覆**：FB / Tencent / Amazon 用的 AI 並非 sophisticated；不要為等 AGI 而拖延 DOM 轉型
- **Strategic Collisions（collateral damage 視角）**：Kodak 不是被同行 / 數位相機 startup 殺死，是被 FB / Tencent / Google 為搶用戶而**順便**輾過；醫療 AI 的雷達該超出同業
- **Humans on the Edge, AI in the Core**：Amazon 員工只做 AI 還搞不定的物理 / 例外任務；醫療業因法規天花板，edge 不會隨 AI 變強而縮小
- **AI Factory 金字塔（Moderna Exhibit 4）**：Cloud → Integration → IoT → Automation → Analytics → AI → Digital，**不可跳級**；多數公司直接「上 AI」失敗是因下層沒搭好
- **Day 1 數位化哲學（Bancel）**：「從一開始執行數位化比後處理容易多了」；後補成本 10x。CDO 與 COO 雙重彙報是跨部門整合 AI Factory 的結構前提
- **mRNA = iPhone, drugs = apps（Moore）**：Platform vs Pipeline 製藥業二分；Moderna 用同一 mRNA 平台同時跑 23 個藥物。可移轉到 Sectra/Epic/GE Edison 醫療 AI platform 思考
- **Flagship Pioneering 4 階段（Afeyan）**：Explorations（What if?）→ ProtoCo（PoC）→ NewCo（董事會）→ GrowthCo（CEO 招募 + spin out）；hypothesis-driven 而非 trend-driven 的 venture creation 模式，可移轉到 PM、內部創新、個人 side project
- **Moderna 42 天疫苗 vs 傳統 20 個月**：不是「努力」，是 DOM + AI Factory + 自有製造 + Day 1 數位化的累積結果。COVID 是 strategic collision 機會視窗，但 process 可移植、context 不可移植
- **Job Performance = behaviors, not outcomes**（Colquitt Ch2）：教科書刻意鎖在行為層，三維分解 task / citizenship / counterproductive；JPMorgan「do core + support business + refrain from violations」三項全是 behavior
- **Pay-for-Performance 在大公司失靈**：1991-2002 study —— 小公司 CEO pay 與 skill 正相關，大公司負相關；Eisner 案：高出業界 $38M 但 Disney 表現下滑
- **AI is the great equalizer**：law students × GPT-4 — 底層大幅提升、**頂層反而下降**。AI 對 performance 是 conditional on baseline skill，不是 uniform booster
- **Citizenship Behavior 不是 optional**（OCB）：跨 8 種職類研究顯示 OCB 與主管績效評分強相關，**對薪資與升遷的影響獨立於 task performance**（incremental validity）
- **Citizenship Fatigue**：OCB 不是無上限免費資源；當 extra effort 未被支持、或在被拉滿時仍被壓力要求 → 未來 OCB 行為減少
- **CWB 四命題**：行為叢集化 / 跨職位通用 / 具傳染性 / **與 task performance 僅弱負相關** —— 不能用「績效好」推論「不會做 CWB」
- **Forced Ranking 衰減曲線**：GE 20/70/10 制度，**前 1-2 年 +16% 生產力、第 3-4 年 +6%、第 10 年 ≈ 0%**；引發 zero-sum game、抑制合作、age-based 訴訟
- **Improv as adaptive training**：American Express / Dupont / Google / Hilton / PepsiCo / MLB 採用；「Yes, and」+「Don't plan, just listen」反主流商管「先 plan 再執行」邏輯
- **Pixar atrium 設計**：Steve Jobs 把廁所中央化迫使員工 casual interaction → "good things happen"；物理空間設計驅動 creative behavior 的工程化案例
- **Three Types of Commitment (Allen-Meyer)**（Ch3）：Affective "want" / Continuance "need" / Normative "ought"；continuance commitment 與 OCB / performance **無統計關係** — 是 passive loyalty，不是動能
- **Work Itself 是 satisfaction 最強 facet**（Ch4）：r=.70 vs Pay 只 .22 — 跟 commonsense「加薪能讓人滿意」反向
- **Type A 不預測心臟病**（Ch5）：anger + hostility 才是真風險；workaholic / 急躁不必然傷心臟
- **Goal-setting 倒 U 型**（Ch6）：specific + difficult > do-your-best；SMART 缺 Difficult；rational decision-maker 反而**更易** escalation of commitment
- **EI 的 dark side**（Ch10）：高 EI 與 counterproductive work behaviors **正相關** — 高 EI ≠ 道德高
- **Cohesion 倒 U 型**（Ch12）：180+ 旅行社團隊研究，過高 cohesion → groupthink → 績效下降；Bezos "Have Backbone; Disagree and Commit"
- **Personal vs Organizational Power**（Ch13）：personal forms（expert + referent）增加 affective commitment；organizational forms（legitimate + reward + coercive）反而**降低**它
- **Charisma 60% genetic**（Ch14）：transformational leadership 可訓練性有上限；Crisis 是 transformational emergence 的 boundary condition

## Flagged Contradictions

- 「OKR vs KPI 用環境變動性判斷」與「agile vs waterfall 用產品成熟度判斷」可能矛盾 — 醫療 AI 是「成熟產品在變動環境」，兩判準推不同結論。^[ambiguous]

## Open Questions（待驗證）

- Ar9av 是否保留 hand-edit
- 中文 NFC vs NFD 是否被偷偷轉換 ← smoke 後檢查
- `claude-history-ingest` 會不會洩漏 credentials
- Schema 撐到 50+ 頁是否壞
- OKR + KPI 混合制在台灣業界（尤其醫療業）落地的細節 — 需要 wiki-research 或補 ingest 釐清
- Doerr 在《Measure What Matters》如何處理 OKR 與獎酬連動 tension — 需要直接 ingest 該書
