import { defineConfig } from 'vitepress'
import nav from './nav'
import MarkdownItPangu from "markdown-it-pangu"
import MarkdownItKatex from 'markdown-it-katex'
import MarkdownItFootnote from 'markdown-it-footnote'
import { sidebar } from './sidebar'
import { rootDir, githubRepoLink } from './meta'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "RLE.wiki",
  description: "一份 RLE 指北",
  markdown: {
    config(md) {
      md.use(MarkdownItPangu);
      md.use(MarkdownItFootnote);
      md.use(MarkdownItKatex);
    },
  },
  dir: rootDir,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'RLE.wiki',
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: githubRepoLink }
    ],

    editLink: {
      pattern: `${githubRepoLink}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页面', // label localization
    },

    // label localization
    outline: { label: '本页大纲', level: 'deep' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
