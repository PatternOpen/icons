<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M13.25 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V3.75H14a.75.75 0 0 1-.75-.75Zm-8.75.75a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-4.763a.75.75 0 0 1 1.5 0V19.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-15A2.25 2.25 0 0 1 4.5 2.25H9a.75.75 0 0 1 0 1.5H4.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M21.08 2.92a.75.75 0 0 1 0 1.06l-7.65 7.65a.75.75 0 1 1-1.06-1.06l7.65-7.65a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
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
