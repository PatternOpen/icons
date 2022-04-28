<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.5 4.75a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h17a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25h-17ZM1.75 5c0-.966.784-1.75 1.75-1.75h17c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75h-17A1.75 1.75 0 0 1 1.75 19V5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.75 8.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6.68 1.762a.75.75 0 0 1 1.026-.108l8.5 6.5a.75.75 0 0 1 .294.596v2a1.75 1.75 0 0 1-1.75 1.75h-17A1.75 1.75 0 0 1 1.75 19v-2a.75.75 0 0 1 .22-.53l5-5a.75.75 0 0 1 .999-.056l1.933 1.547 2.529-2.95Zm.678 1.515-2.539 2.961a.75.75 0 0 1-1.038.098l-1.975-1.581-4.306 4.306V19c0 .138.112.25.25.25h17a.25.25 0 0 0 .25-.25v-1.63l-7.642-5.843Z" clip-rule="evenodd"/></svg>
  </span>
</template>

<script setup lang="ts">
import { useRunTime } from '../core'
const props = defineProps<{
  /** css尺寸单位字符串 或 以px为单位的数字 */
  size?: string | number
  /** 图标颜色 */
  color?: string
  /** 类名 */
  className?: string
}>()
const { rootStyle } = useRunTime(props)
</script>
