import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '零肆の知识库',
  description: '记录学习的点点滴滴',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    name: '零肆',
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI', link: '/ai/' }
    ],
    sidebar: {
      '/ai/': [
        {
          text: 'AI',
          items: [
            { text: '概览', link: '/ai/' },
            { text: 'LLM', link: '/ai/llm/' },
            { text: 'Prompt 工程', link: '/ai/prompt/' },
            { text: '机器学习', link: '/ai/ml/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zjshao22' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present 零肆'
    },
    search: {
      provider: 'local'
    }
  },
  appearance: true
})
