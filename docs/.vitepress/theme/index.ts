import DefaultTheme from 'vitepress/theme'
import './style.styl'
import '../../../src/styles/index.styl'
import Tulp from '../../../src/index'
import TuDemo from '../components/TuDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TuDemo', TuDemo)
    app.use(Tulp)
  }
}
