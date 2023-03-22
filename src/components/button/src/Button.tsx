import { computed, defineComponent, ref, Transition, type Component, type PropType } from 'vue'
import { Loading as LoadingIcon } from '../../../icons'
import { TuIcon } from '../../icon/index'
import { TuBaseWave, type BaseWaveRef } from '../../base-wave'
import TuExpandTransition from '../../expand-transition/src/ExpandTransition'
import { useNameScope } from '../../../composables/useNameScope'
import { hueProp, sizeProp } from '../../../common'
import { includes } from '../../../utils'

const buttonStatekeys = ['text', 'dashed', 'ghost', 'circle', 'round', 'disabled'] as const

const buttonProps = {
  hue: hueProp,
  size: sizeProp,
  icon: Object as PropType<Component>,
  iconPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
    validator: (value: string) => {
      return includes(['left', 'right'], value)
    }
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
    validator: (value: string) => {
      return includes(['button', 'submit', 'reset'], value)
    }
  },
  loading: Boolean as PropType<boolean>,
  disabled: Boolean as PropType<boolean>,
  text: Boolean as PropType<boolean>,
  circle: Boolean as PropType<boolean>,
  round: Boolean as PropType<boolean>,
  dashed: Boolean as PropType<boolean>,
  ghost: Boolean as PropType<boolean>
}

const Button = defineComponent({
  name: 'TuButton',
  props: buttonProps,
  setup(props, context) {
    const ns = useNameScope('button')
    const button = ref<Element | null>()
    const wave = ref<BaseWaveRef | null>(null)
    const className = computed(getButtonClass)

    function handleClick() {
      wave.value?.triggerWave()
    }

    function getButtonClass() {
      const { hue, size } = props
      const other: Record<string, unknown> = {}
      
      for (const key of buttonStatekeys) {
        other[ns.is(key)] = props[key]
      }

      return [
        'tu-button',
        {
          [ns.is(hue)]: hue,
          [ns.is(size)]: size,
          ...other
        }
      ]
    }

    return () => {
      const { text, circle, disabled, icon, loading, iconPosition, type } = props
      const slots = context.slots

      return (
        <button ref={button} class={className.value} type={type} disabled={disabled} onClick={handleClick}>
          <TuExpandTransition withWidth>
            {icon ?? loading ? (
              <span
                class={[ns.el('icon'), {
                  [`tu-icon--${iconPosition}`]: iconPosition,
                  'tu-icon--empty': !slots.default
                }]}
              >
                <Transition name="tu-zoom" mode="out-in">
                  {loading ? <LoadingIcon /> : <TuIcon is={icon} />}
                </Transition>
              </span>
              ) : null}
          </TuExpandTransition>
          {slots.default ? (
            <span class={ns.el('content')}>
              {slots.default?.()}
            </span>
          ) : null}
          {!text ? (
            <>
              <TuBaseWave ref={wave} big={circle} />
              <span class={ns.el('border')} />
              <span class={ns.el('state-border')}/>
            </>
          ) : null}
        </button>
      )
    }
  }
})

export default Button
