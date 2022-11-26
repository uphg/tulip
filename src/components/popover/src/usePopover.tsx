import {  } from "fs"
import { h, ref, type VNodeRef, nextTick, computed, watch, Teleport, Transition, type SetupContext, toRef } from "vue"
import { getClientRect } from "../../../utils"
import type { PopoverProps } from './popoverProps'
import { useMaxZIndex } from '../../../composables/useMaxZIndex'

const arrowClassMap = [
  [['top-start', 'top', 'top-end'], 'top'],
  [['left-start', 'left', 'left-end'], 'left'],
  [['right-start', 'right', 'right-end'], 'right'],
  [['bottom-start', 'bottom', 'bottom-end'], 'bottom'],
]

export function usePopover(props: PopoverProps, context: SetupContext<['update:visible']>) {
  const visible = ref(false)
  const triggerStyle = ref<{ left: number, top: number }>({ left: 0, top: 0 })
  const zIndex = ref(2000)
  const closeTimerId = ref<NodeJS.Timeout | null>(null)
  const hovered = ref(false)
  const mousedown = ref(false)
  const triggerRef = ref<VNodeRef | null>(null)
  const popoverRef = ref<VNodeRef | null>(null)

  const visiblePopover = computed(() => props.trigger === 'manual' ? props.visible : visible.value )
  const halfWidth = computed(() => (popoverRef.value?.offsetWidth || 0) / 2)
  const halfHeight = computed(() => (popoverRef.value?.offsetHeight || 0) / 2)

  const style = computed(() => {
    const { top, left } = triggerStyle.value
    const topToTop = `${top - (popoverRef.value?.offsetHeight || 0) - 8}px`
    const leftToLeft = `${left - popoverRef.value?.offsetWidth - 8}px`
    const rightToLeft = `${left + 8}px`
    const bottomToTop = `${top + 8}px`

    const styleMap = {
      'top-start': {
        top: topToTop,
        left: `${left}px`
      },
      'top': {
        top: topToTop,
        left: `${left - halfWidth.value}px`
      },
      'top-end': {
        top: topToTop,
        left: `${left - popoverRef.value?.offsetWidth}px`
      },
      'left-start': {
        top: `${top}px`,
        left: leftToLeft
      },
      'left': {
        top: `${top - halfHeight.value}px`,
        left: leftToLeft
      },
      'left-end': {
        top: `${top - popoverRef.value?.offsetHeight}px`,
        left: leftToLeft
      },
      'right-start': {
        top: `${top}px`,
        left: rightToLeft
      },
      'right': {
        top: `${top - halfHeight.value}px`,
        left: rightToLeft
      },
      'right-end': {
        top: `${top - popoverRef.value?.offsetHeight}px`,
        left: rightToLeft
      },
      'bottom-start': {
        top: bottomToTop,
        left: `${left}px`
      },
      'bottom': {
        top: bottomToTop,
        left: `${left - halfWidth.value}px`
      },
      'bottom-end': {
        top: bottomToTop,
        left: `${left - popoverRef.value?.offsetWidth}px`
      },
    }

    return {
      zIndex: zIndex.value,
      ...styleMap[props.placement]
    }
  })

  const arrowStyle = computed(() => {
    if (props.hideArrow) return
    switch(props.placement) {
      case 'top-start':
      case 'bottom-start':
        return { left: `${10 + 6}px` }
      case 'top':
      case 'bottom':
        return { left: `${halfWidth.value}px` }
      case 'top-end':
      case 'bottom-end':
        return { left: `${popoverRef.value?.offsetWidth - 6 - 10}px` }
      case 'left-start':
      case 'right-start':
        return { top: `${10 + 6}px` }
      case 'left':
      case 'right':
        return { top: `${halfHeight.value}px` }
      case 'left-end':
      case 'right-end':
        return { top: `${popoverRef.value?.offsetHeight - 6 - 10}px` }
    }
  })

  const arrowClass = computed(() => {
    if (props.hideArrow) return
    const type = arrowClassMap.find((item) => item[0].includes(props.placement))?.[1]
    return { [`tu-popover-arrow--${type}`]: !!type }
  })

  const eventMap = {
    hover: { onMouseover },
    click: { onClick },
    focus: { onFocus: open, onBlur: close },
    manual: { },
  }

  const on = eventMap[props.trigger]

  const { getZIndex } = useMaxZIndex(window) || {}

  props.trigger === 'manual' && watch(toRef(props, 'visible'), value => value ? open() : close())

  function beforeOpen() {
    const { top, left } = getPosition() || {}
    zIndex.value = getZIndex?.() || 2000
    triggerStyle.value.top = top
    triggerStyle.value.left = left
  }

  function open() {
    beforeOpen()
    props.trigger === 'manual' ? context.emit('update:visible', true) : visible.value = true
  }

  function close() {
    props.trigger === 'manual' ? context.emit('update:visible', false) : visible.value = false
  }

  function isTrigger(event: MouseEvent) {
    const el = triggerRef.value.$el
    return el === event.target || el.contains(event.target)
  }

  function isPopover(event: MouseEvent) {
    const el = popoverRef.value
    return el && (el === event.target || el.contains(event.target))
  }

  function getPosition() {
    const el = triggerRef.value.$el
    const { top, left } = getClientRect(el) as DOMRect
    const { scrollTop, scrollLeft } = document.documentElement
    const docTop = top + scrollTop
    const docLeft = left + scrollLeft

    switch (props.placement) {
      case 'top-start':
      case 'left-start':
        return {
          top: docTop,
          left: docLeft
        }
      case 'top':
        return {
          top: docTop,
          left: docLeft + el.offsetWidth / 2
        }
      case 'top-end':
      case 'right-start':
        return {
          top: docTop,
          left: docLeft + el.offsetWidth
        }
      case 'left':
        return {
          top: docTop + el.offsetHeight / 2,
          left: docLeft
        }
      case 'left-end':
      case 'bottom-start':
        return {
          top: docTop + el.offsetHeight,
          left: docLeft
        }

      case 'right':
        return {
          top: docTop + el.offsetHeight / 2,
          left: docLeft + el.offsetWidth
        }
      case 'right-end':
      case 'bottom-end':
        return {
          top: docTop + el.offsetHeight,
          left: docLeft + el.offsetWidth
        }
      case 'bottom':
        return {
          top: docTop + el.offsetHeight,
          left: docLeft + el.offsetWidth / 2
        }
    }
  }

  function onMouseover() {
    hovered.value = true
    if(!visible.value) {
      open()
      nextTick(() => document.addEventListener('mouseover', handleDomMouseover))
    }
  }

  function onClick() {
    if (visible.value) {
      close()
    } else {
      open()
      nextTick(() => {
        document.addEventListener('mousedown', handleDomMousedown)
        document.addEventListener('mouseup', handleDomMouseup)
      })
    }
  }

  function handleDomMouseover(e: MouseEvent){
    if (isPopover(e) || isTrigger(e)) {
      if (closeTimerId.value) {
        window.clearTimeout(closeTimerId.value!)
        closeTimerId.value = null
        hovered.value = true
      }
    } else {
      if (hovered.value && visible.value) {
        const offMouseover = () => {
          if (closeTimerId.value) {
            closeTimerId.value = null
            document.removeEventListener('mouseover', handleDomMouseover)
            close()
          }
        }
        closeTimerId.value = setTimeout(offMouseover, 200)
      }
      hovered.value = false
    }
  }

  function handleDomMousedown(event: MouseEvent) {
    if (isPopover(event)) return
    mousedown.value = true
  }

  function handleDomMouseup(event: MouseEvent) {
    if (!isTrigger(event) && !isPopover(event) && mousedown.value) {
      close()
      document.removeEventListener('mousedown', handleDomMousedown)
      document.removeEventListener('mouseup', handleDomMouseup)
    }
    if(mousedown.value) {
      mousedown.value = false
    }
  }

  return () => [
    context.slots.default && h(context.slots.default?.()[0], { ref: triggerRef, ...on }),
    <Teleport to="body">
      <Transition name="popover-fade">
        {{
          default: () => visiblePopover.value ? (
            <div class="tu-popover" ref={popoverRef} style={style.value}>
              <div class="tu-popover__content">{props.content || context.slots.content?.({ close })}</div>
              {props.hideArrow ? null : (
                <div class={['tu-popover-arrow-wrapper', arrowClass.value]} style={arrowStyle.value}>
                  <div class="tu-popover-arrow"></div> 
                </div>
              )}
            </div>
          ) : null
        }}
      </Transition>
    </Teleport>
  ]
}