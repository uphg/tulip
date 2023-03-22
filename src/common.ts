import type { PropType } from 'vue'
import type { Hue, Size } from './types'
import { includes } from './utils'

export const hues = ['default', 'primary', 'success', 'warning', 'info', 'error']
export const sizes = ['', 'large', 'medium', 'small']

export const hueProp = {
  type: String as PropType<Hue>,
  default: 'default',
  validator: (value: string) => includes(hues, value)
}

export const sizeProp = {
  type: String as PropType<Size>,
  validator: (value: string) => {
    return includes(sizes, value)
  }
}
