import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '计算机知识库',
  description: '记录学习的点点滴滴',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.svg',
    name: '计算机知识库',
    nav: [
      { text: '首页', link: '/' },
      { text: '高中信息技术', link: '/high-school-it/course-intro/' }
    ],
    sidebar: {
      '/high-school-it/': [
        {
          text: '高中信息技术',
          items: [
            { text: '课程复习', link: '/high-school-it/course-intro/' },
            { text: '数据、信息与知识', link: '/high-school-it/knowledge-1/' },
            { text: '数字化与编码', link: '/high-school-it/knowledge-2/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zjshao22' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present 计算机知识库'
    },
    search: {
      provider: 'local'
    }
  },
  appearance: true
})