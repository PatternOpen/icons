<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M9.25 2.957a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v3.25h6.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h6.75v-3.25Zm1.5.75v3.25a.75.75 0 0 1-.75.75H3.25v2.5h17.5v-2.5H14a.75.75 0 0 1-.75-.75v-3.25h-2.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.25 11a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-9Zm1.5.75v7.5h14.5v-7.5H4.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 16.207a.75.75 0 0 1 .75.75v2.992a.75.75 0 0 1-1.5 0v-2.992a.75.75 0 0 1 .75-.75Zm4-.008a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm4 .008a.75.75 0 0 1 .75.75v2.992a.75.75 0 0 1-1.5 0v-2.992a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.25 20a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
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
