import { makeInstaller } from '../utils'
import { TuButton, TuButtonGroup } from './button'
import { TuInput, TuInputGroup, TuInputGroupLabel } from './input'
import { TuSwitch } from './switch'
import { TuDialog, useDialog } from './dialog'
import { TuCollapseTransition } from './collapse-transition'
import { TuTabPane, TuTabs } from './tabs'
import { TuExpandTransition } from './expand-transition'

const components = [
  TuButton,
  TuButtonGroup,
  TuInput,
  TuInputGroup,
  TuInputGroupLabel,
  TuCollapseTransition,
  TuExpandTransition,
  TuSwitch,
  TuTabs,
  TuTabPane,
  TuDialog
]

const { install } = makeInstaller(components)

export {
  TuButton,
  TuButtonGroup,
  TuInput,
  TuInputGroup,
  TuInputGroupLabel,
  TuCollapseTransition,
  TuExpandTransition,
  TuSwitch,
  TuTabs,
  TuTabPane,

  // utils
  useDialog,
  install
}