<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.25 12a6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 1 0 12 17.25a.75.75 0 0 1 0 1.5A6.75 6.75 0 0 1 5.25 12Z" clip-rule="evenodd"/></svg>
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
