<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.319 4.186A.75.75 0 0 1 3 3.75h18a.75.75 0 0 1 .57 1.238l-7.02 8.198V21a.75.75 0 0 1-1.082.672l-3.6-1.777a.75.75 0 0 1-.418-.673v-6.036L2.43 4.988a.75.75 0 0 1-.111-.802Zm2.31 1.064 6.14 7.171a.75.75 0 0 1 .181.488v5.847l2.1 1.037V12.91a.75.75 0 0 1 .18-.488l6.14-7.171H4.63Z" clip-rule="evenodd"/></svg>
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
