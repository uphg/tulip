import type { ExtractPropTypes, PropType } from 'vue'
import { sizeProp } from '../../../common'

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>

export type CascaderBaseValue = string | number | null
export type CascaderValue = CascaderBaseValue[]
export interface CascaderOption {
  [k: string]: CascaderBaseValue | CascaderOption[]
}

export const cascaderProps = {
  value: Array as PropType<CascaderValue>,
  options: {
    type: Array as PropType<CascaderOption[]>,
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
  childrenField: {
    type: String as PropType<string>,
    default: 'children' as const
  },
  disabledField: {
    type: String as PropType<string>,
    default: 'disabled' as const
  },
  size: sizeProp,
  placeholder: String as PropType<string>,
  clearable: Boolean as PropType<boolean>,
  disabled: Boolean as PropType<boolean>
}
