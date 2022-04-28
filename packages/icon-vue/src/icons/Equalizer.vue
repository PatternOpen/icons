<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5.5 7.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Zm6.5 6.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75Zm0-11.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm6.5 0a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 5.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM5.5 3.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm3.25 8.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" clip-rule="evenodd"/></svg>
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
