import { ref, nextTick, shallowRef } from 'vue'
import type { Ref } from 'vue'

export function useTriggerWave() {
  const isWave: Ref<boolean> = ref(false)
  const selfRef = shallowRef<HTMLElement | null>(null)
  let timerId: number | null = null

  const stop = () => {
    isWave.value = false
    timerId = null
  }

  const triggerWave = () => {
    if (isWave.value) {
      timerId && window?.clearTimeout(timerId)
      stop()
    }
    nextTick(() => {
      // 刷新 DOM
      void selfRef.value?.offsetHeight
      isWave.value = true
      timerId = window?.setTimeout(stop, 1000)
    })
  }

  return { isWave, triggerWave, selfRef }
}
