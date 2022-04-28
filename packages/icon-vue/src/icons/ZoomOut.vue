<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Zm9.25-7.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.75 10.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm9.331 5.58a.75.75 0 0 1 1.06 0l4.243 4.243a.75.75 0 1 1-1.06 1.06l-4.243-4.242a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
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
