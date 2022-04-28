<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6.25 2.5A.75.75 0 0 1 7 1.75h14.5a.75.75 0 0 1 .75.75v19a.75.75 0 0 1-.75.75h-10v-1.5h9.25V3.25h-13V7.5h-1.5v-5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.75 7.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-14Zm1.5.75v12.5h7.5V8.25h-7.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.75 18.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm7.5 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
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
