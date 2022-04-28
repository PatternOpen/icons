<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.25 2A.75.75 0 0 1 4 1.25h13a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2.75H4.75v15.037l1.915-.958a.75.75 0 1 1 .67 1.342l-3 1.5A.75.75 0 0 1 3.25 19V2Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.25 5A.75.75 0 0 1 7 4.25h13a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-1.076.675L13.5 19.697l-6.174 2.98A.75.75 0 0 1 6.25 22V5Zm1.5.75v15.055l5.424-2.617a.75.75 0 0 1 .652 0l5.424 2.617V5.75H7.75Z" clip-rule="evenodd"/></svg>
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
