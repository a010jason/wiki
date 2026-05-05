---
title: Wiki Log
---

# Wiki Log

- [2026-05-04T00:30+08:00] INIT vault_path="/Users/jason/Documents/wiki" categories=concepts,entities,skills,references,synthesis,journal sources_dir="/Users/jason/Desktop/2026專案/AI PM/管理技能與策略"
- [2026-05-04T11:50+08:00] CAPTURE type=session page="journal/2026-05-04-llm-wiki-setup.md" title="2026-05-04 LLM Wiki 建置 session" related_pages=5
- [2026-05-04T11:50+08:00] CAPTURE type=concept page="concepts/llm-wiki-pattern.md" title="LLM Wiki Pattern (Karpathy)"
- [2026-05-04T11:50+08:00] CAPTURE type=concept page="concepts/l1-l2-cache-architecture.md" title="L1/L2 Cache Architecture (Mehmet Goekce)"
- [2026-05-04T11:50+08:00] CAPTURE type=concept page="concepts/tiered-retrieval.md" title="Tiered Retrieval（Tier 1/2/3）"
- [2026-05-04T11:50+08:00] CAPTURE type=entity page="entities/Ar9av-obsidian-wiki.md" title="Ar9av/obsidian-wiki"
- [2026-05-04T11:50+08:00] CAPTURE type=decision page="synthesis/why-Ar9av-over-alternatives.md" title="為什麼選 Ar9av/obsidian-wiki 而非其他 LLM Wiki 方案"
- [2026-05-04T12:00+08:00] CAPTURE type=synthesis page="synthesis/critical-llm-wiki-three-step.md" title="批判式 LLM Wiki 三步法"
- [2026-05-04T12:00+08:00] CAPTURE type=concept page="concepts/conways-law.md" title="Conway's Law"
- [2026-05-05T15:00+08:00] INGEST source="0820-OKR-講義.pdf" pages_created=7 pages_updated=1 mode=smoke note="Phase 1 pilot smoke test，Tier A 第一個 PDF" pages=concepts/OKR,concepts/KPI,concepts/performance-management,skills/setting-OKR,entities/wen-jin-feng,references/measure-what-matters-doerr-2018,synthesis/OKR-vs-KPI-when-to-use
- [2026-05-05T17:00+08:00] INGEST source="0820-Agile Org-講義.pdf" pages_created=6 pages_updated=2 mode=append note="Phase 1 pilot 2/20" pages=concepts/agile-organization,concepts/scrum-method,concepts/agile-manifesto,concepts/post-bureaucratic-mindset,skills/leading-agile-transformation,references/denning-2018-age-of-agile,synthesis/agile-vs-waterfall-when-to-use
- [2026-05-05T18:00+08:00] INGEST source="0827-Cross-culltural management.pdf" pages_created=4 pages_updated=2 mode=append note="Phase 1 pilot 3/20" pages=concepts/cross-cultural-management,concepts/hofstede-cultural-dimensions,concepts/cultural-intelligence-CQ,synthesis/taiwan-culture-mgmt-implications
- [2026-05-05T19:00+08:00] INGEST source="Ch1.pdf.pdf" pages_created=6 pages_updated=2 mode=append note="Phase 1 pilot 4/20，OB 教科書 Ch1 (McGraw-Hill)" pages=concepts/organizational-behavior,concepts/VRIO-framework,concepts/porters-five-forces,concepts/rule-of-one-eighth,concepts/scientific-method-OB,references/colquitt-OB-textbook
- [2026-05-05T19:05+08:00] MIGRATE sources_dir="local Desktop → Google Drive" canonical="/Users/jason/Library/CloudStorage/.../AI PM 資料/管理技能與策略" affected=4 manifest_paths_updated=4 manifest_bug_fixed="cross-cultural entry json nesting"
- [2026-05-05T19:30+08:00] INGEST source="ch01_Concept of strategy.pdf.pdf" pages_created=5 pages_updated=0 mode=append note="Phase 1 pilot 5/20，Grant 策略管理 Ch1（搬到 Drive 之後第 1 個 ingest）" pages=concepts/strategy,concepts/strategic-fit,concepts/intended-vs-emergent-strategy,concepts/corporate-vs-business-strategy,references/grant-contemporary-strategy-analysis
- [2026-05-05T20:00+08:00] AUDIT source="Ch1.pdf.pdf" note="重讀 p.71-125（之前只讀到 p.70），補 2 新頁 + 更新 2 既有頁。新增 contingency-approach + learning-from-failure；scientific-method-OB 加 causation 三條件 + meta-analysis + evidence-based mgmt；organizational-behavior 加 5 Anchors of OB Knowledge"
- [2026-05-05T20:10+08:00] VERIFY all_ingested_pdfs page_count_check=pass note="OKR(13p, 11-13 為重複頁)、Agile Org(14p)、Cross-cultural(10p)、Ch1(125p audit 後完整)、Strategy ch01(8p) 全完整。SOP 起始：所有 PDF 必須 pdfinfo + 分批讀完才 distill"
- [2026-05-05T21:00+08:00] INGEST source="ch07_Competitive Advantage.pdf.pdf" pages_created=7 pages_updated=0 mode=append note="Phase 1 pilot 6/20，Grant 策略管理 Ch7" pages=concepts/competitive-advantage,concepts/porters-generic-strategies,concepts/experience-curve,concepts/blue-ocean-strategy,concepts/disruptive-innovation,concepts/value-chain,skills/differentiation-analysis
- [2026-05-05T21:30+08:00] FIX pdf-plan.sh bug="v1 用檔案大小判斷 chunk，遭遇 slide PDF 渲染後爆 32MB（2Competing 1MB / 24p 還是炸）" v2="改以頁數為主，預設 5 頁/批，slide PDF 不再用大 chunk"
