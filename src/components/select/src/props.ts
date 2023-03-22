import type { PropType, ExtractPropTypes } from 'vue'
import type { SelectOption } from './types'
import type { SelectBaseValue } from './types'
import { sizeProp } from '../../../common'

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectProps = {
  value: [String, Number, Array] as PropType<SelectBaseValue | SelectBaseValue[]>,
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => []
  },
  valueField: {
    type: String as PropType<string>,
    default: 'value' as const
  },
  labelField: {
    type: String as PropType<string>,
    default: 'label' as const
  },
  disabledField: {
    type: String as PropType<string>,
    default: 'disabled' as const
  },
  size: sizeProp,
  clearable: Boolean as PropType<boolean>,
  disabled: Boolean as PropType<boolean>,
  multiple: Boolean as PropType<boolean>
}