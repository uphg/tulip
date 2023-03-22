import { defineComponent, type PropType } from 'vue'
import { useNameScope } from '../../../composables/useNameScope'
import { hueProp } from '../../../common'
import { TuBaseClose } from '../../base-close'
import { sizeProp } from '../../../common'

const Tag = defineComponent({
  name: 'TuTag',
  props: {
    hue: hueProp,
    onClose: Function as PropType<(e: MouseEvent) => void>,
    bordered: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    size: sizeProp,
    disabled: Boolean as PropType<boolean>,
    closable: Boolean as PropType<boolean>
  },
  setup(props, context) {
    const ns = useNameScope('tag')

    function handleClose(e: MouseEvent) {
      if (props.disabled) return
      props.onClose?.(e)
    }

    return () => (
      <div
        class={[ns.base, {
          [ns.is(props.hue)]: props.hue,
          [ns.is(props.size)]: props.size,
          [ns.is('disabled')]: props.disabled
        }]}
      >
        <span class={ns.el('content')}>{{ default: context.slots.default }}</span>
        {props.closable ? (
          <TuBaseClose size="small" disabled={props.disabled} onClick={handleClose}/>
        ) : null}
        {props.bordered ? (
          <div class={ns.el('border')}></div>
        ) : null}
      </div>
    )
  }
})

export default Tag