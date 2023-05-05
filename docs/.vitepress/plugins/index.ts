import path from 'path'
import fs from 'fs'
import mdContainer from 'markdown-it-container'
import { Highlighter } from 'shiki'
import MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token'

const styleBg = /(?<=\<pre\sclass=\"shiki\")\s[^>]+/
const demoPath = `${path.resolve('./docs/examples')}`
const demoRegex = /^demo\s*(.*)$/
const demoTag = 'TuDemo'

function mdPlugin(md: MarkdownIt, highlighter: Highlighter) {
  md.use(mdContainer, 'demo', {
    validate(params: string) {
      return !!params.trim().match(demoRegex)
    },
    
    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const sourceFileToken = tokens[idx + 2]
        if (!sourceFileToken) return
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(path.resolve(demoPath, `${sourceFile}.vue`), 'utf-8')
        }
        
        const componentName = getComponentName(sourceFile)
        const names = sourceFile.split('/')
        const className = `demo-${names[0]} ${names[0]}__${names[1]}`
        const rawHTMLCode = highlighter.codeToHtml(source, { lang: 'vue' })
        const HTMLCode = rawHTMLCode.replace(styleBg, '') // clear code default background
        
        return `<${demoTag}
          class="${className}"
          component-name="${componentName}"
          source="${encodeURIComponent(source)}"
          html="${encodeURIComponent(HTMLCode)}"
          :part="${componentName}"
          lang="vue"
        >`
      } else {
        return `</${demoTag}>`
      }
    },
  })
}

function getComponentName(sourceFile: string) {
  const names = sourceFile.split(/[\/-]/)
  return names.map((item) => item.replace(/^(\w)/, (_, c) => (c ? c.toUpperCase() : ''))).join('')
}

export default mdPlugin