<template>
  <div class="tu-demo">
    <div class="component">
      <component :is="componentIs" />
    </div>
    <TuCollapseTransition>
      <div class="tu-code-wrap tu-dark" v-show="visible">
        <!-- <tu-scrollbar class="tu-code-scrollbar">
          
        </tu-scrollbar> -->
        <div class="tu-code-source__wrap">
          <div class="tu-code-source language-vue" v-html="decodeURIComponent(html)"></div>
        </div>
        <button ref="copyEl" :class="['tu-button-copy', { copied }]" @click="copy"></button>
        <span v-if="lang" class="lang">{{ lang }}</span>
      </div>
    </TuCollapseTransition>
    <div class="control" @click="visible = !visible">{{ `${visible ? '收起' : '展开'}源码` }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TuCollapseTransition } from '../../../src/index'
import { copyToClipboard } from '../utils';

const props = defineProps({
  source: {
    type: String,
    default: ''
  },
  html: {
    type: String,
    default: ''
  },
  componentName: String,
  part: [Object],
  lang: String
})

const visible = ref(false)
const copyEl = ref<HTMLButtonElement | null>(null)
const copied = ref(false)
const timeoutId = ref<number | NodeJS.Timeout | null>(null)
const componentIs = { ...props.part, name: props.componentName } as {}

function copy() {
  const code = decodeURIComponent(props.source)
  copyToClipboard(code).then(() => {
    copied.value = true
    timeoutId.value && clearTimeout(timeoutId.value)
    timeoutId.value = setTimeout(() => {
      copied.value = false
      copyEl.value?.blur()
    }, 2000)
  })
}
</script>

<style lang="stylus" scoped>
.tu-demo {
  width: 100%;
  border-radius: 6px;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
  overflow: hidden;
  position: relative;
}
.component {
  padding: 22px 24px;
}
.tu-demo .tu-code-source {
  border-top: 1px solid var(--vp-c-divider);
  color: #fff;
  overflow-x: auto;
  margin: 0;
  border-radius: 0;
}

:deep(.tu-code-source pre) {
  margin: 0;
  border-radius: 0;
}
.control {
  border-top: 1px solid var(--vp-c-divider);
  font-size: 14px;
  cursor: pointer;
  height: 42px;
  line-height: 42px;
  text-align: center;
  user-select:none;
}

.tu-code-wrap {
  position: relative;
  &:hover .tu-button-copy {
    opacity: 1;
  }

  &:hover > .tu-button-copy + .lang,
  & > .tu-button-copy:focus + .lang {
    opacity: 0;
  }
}

.tu-code-scrollbar {
  max-height: 800px;
}

.tu-button-copy {
  direction: ltr;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 3;
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  background-image: var(--vp-icon-copy);
  background-position: 50%;
  background-size: 20px;
  background-repeat: no-repeat;
  transition: background-color, opacity .4s;
  &:hover {
    background-color: var(--vp-code-copy-code-hover-bg);
  }
  &.copied {
    border-radius: 0 4px 4px 0;
    background-color: var(--vp-code-copy-code-hover-bg);
    background-image: var(--vp-icon-copied);
  }
  &:focus {
    opacity: 1;
  }
}
.tu-button-copy.copied::before,
.tu-button-copy:hover.copied::before {
  position: relative;
  /*rtl:ignore*/
  left: -65px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*rtl:ignore*/
  border-radius: 4px 0 0 4px;
  width: 64px;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-code-copy-code-active-text);
  background-color: var(--vp-code-copy-code-hover-bg);
  white-space: nowrap;
  content: 'Copied';
}
.lang {
  position: absolute;
  top: 6px;
  right: 12px;
  z-index: 2;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-dark-3);
  transition: color .4s,opacity .4s;
}

.tu-code-source__wrap {
  overflow: auto;
}
</style>

<style>
.tu-code-wrap .tu-scrollbar-track {
  z-index: 1;
}
</style>
