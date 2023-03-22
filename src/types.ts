import type { ComponentPublicInstance, ComputedRef, Ref, Plugin } from 'vue'
import type { PopupProps } from './components/popup/src/props'

export type ObjectLike<T extends unknown = unknown> = Record<string | number | symbol, T>

export type Fn = () => void

export interface Position {
  x: number
  y: number
}

export interface EventHandler<T extends Element | Document | Window = Element, Evt extends Event = any> {
  (this: T, ev: Evt): void
}

export type VueInstance = ComponentPublicInstance
export type MaybeElement = Element | HTMLElement | SVGElement | VueInstance | undefined | null
export type RawElement =  Exclude<MaybeElement, VueInstance>
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeRef<T> = T | Ref<T>
export type Arrayable<T> = T[] | T
export type MaybeComputedRef<T> = MaybeReadonlyRef<T> | MaybeRef<T>
export type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>
export type SFCWithInstall<T> = T & Plugin

export type PopupTrigger = 'hover' | 'click' | 'focus' | 'manual'
export type ElementStyle = undefined | Record<string, string | undefined>

export type Scrollbar = {
  container: HTMLElement | null,
  scrollTo: (options?: ScrollToOptions) => void
}

export type Popup = {
  updatePosition: () => void,
  rawPlacement: Ref<PopupProps['placement']>,
  popup: Ref<HTMLElement | null>,
  trigger: ComputedRef<HTMLElement | null>
}

export type Hue = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'error'
export type Size = 'large' | 'medium' | 'small'