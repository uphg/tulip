import DefaultTheme from 'vitepress/theme'
import './style.styl'
import '../../../src/styles/index.styl'
import Tulp from '../../../src/index'
import Demo from '../components/EDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('EDemo', Demo)
    app.use(Tulp)
  }
}
