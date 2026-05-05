import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "知識庫",
    pageTitleSuffix: " | Jason's Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-TW",
    baseUrl: "a010jason.github.io/wiki",
    ignorePatterns: [".obsidian", "hot.md", "log.md", "_archives", "_raw", "_meta"],
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
          light: "#ffffff",
          lightgray: "#ebebeb",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#1c1c1c",
          secondary: "#d4a017",
          tertiary: "#f5c842",
          highlight: "rgba(245, 200, 66, 0.18)",
          textHighlight: "#fde68a88",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#2a2a2c",
          gray: "#5a5a5e",
          darkgray: "#d2d2d4",
          dark: "#ebebec",
          secondary: "#f5c842",
          tertiary: "#fcd34d",
          highlight: "rgba(245, 200, 66, 0.18)",
          textHighlight: "#42200655",
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
    filters: [Plugin.RemoveDrafts(), Plugin.RemoveInternal()],
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
