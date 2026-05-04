import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jason's Knowledge Base",
    pageTitleSuffix: " | Jason Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-TW",
    baseUrl: "a010jason.github.io/wiki",
    ignorePatterns: [".obsidian", "hot.md", "log.md", "_archives", "_raw"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans TC",
        body: "Noto Sans TC",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf8",
          lightgray: "#e8e8e4",
          gray: "#a8a8a0",
          darkgray: "#3c3c38",
          dark: "#1c1c18",
          secondary: "#2d6a4f",
          tertiary: "#52b788",
          highlight: "rgba(82, 183, 136, 0.12)",
          textHighlight: "#d4f4e288",
        },
        darkMode: {
          light: "#1a1a18",
          lightgray: "#2e2e2a",
          gray: "#5c5c58",
          darkgray: "#d0d0c8",
          dark: "#f0f0e8",
          secondary: "#74c69d",
          tertiary: "#52b788",
          highlight: "rgba(82, 183, 136, 0.15)",
          textHighlight: "#1b4332aa",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
