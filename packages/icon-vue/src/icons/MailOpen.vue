<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.642 8.34a.75.75 0 0 1 .767.031L12 14.605l9.591-6.234A.75.75 0 0 1 22.75 9v10.91c0 .953-.723 1.84-1.75 1.84H3c-1.027 0-1.75-.887-1.75-1.84V9a.75.75 0 0 1 .392-.66Zm1.108 2.042v9.527c0 .251.172.341.25.341h18c.078 0 .25-.09.25-.34v-9.528l-8.841 5.747a.75.75 0 0 1-.818 0L2.75 10.382Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.575 1.382a.75.75 0 0 1 .85 0l10 6.892a.75.75 0 0 1-.85 1.236L12 2.91l-9.574 6.6a.75.75 0 0 1-.852-1.236l10-6.892Z" clip-rule="evenodd"/></svg>
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
