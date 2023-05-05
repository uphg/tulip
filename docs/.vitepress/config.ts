import { defineConfig } from 'vitepress'
import mdPlugin from './plugins'
import { sidebar } from './sidebar'
import { getHighlighter } from 'shiki'

async function config() {
  const highlighter = await getHighlighter({ theme: 'material-palenight' })
  return defineConfig({
    base: '/tulip/',
    title: 'Tulip',
    description: 'Vue3 UI 组件库',
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ],
    appearance: false,
    themeConfig: {
      logo: '/logo.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/uphg/tulip' }
      ],
      nav: [
        { text: '首页', link: '/' },
        { text: '文档', link: '/docs/introduction', activeMatch: '/docs/' }
      ],
      sidebar
    },
    markdown: {
      config: (md) => {
        mdPlugin(md, highlighter)
      }
    }
  })
}

export default config
