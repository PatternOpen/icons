<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.75 2a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v1.098c0 3.229-1.477 6.274-4 8.272V22a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75V11.37a10.554 10.554 0 0 1-4-8.272V2Zm4.222 9.541ZM5.25 2.75v.348a9.054 9.054 0 0 0 3.622 7.243c.238.179.378.46.378.757V21.25h5.5V11.098c0-.298.14-.578.378-.757a9.054 9.054 0 0 0 3.622-7.243V2.75H5.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.25 5.5A.75.75 0 0 1 5 4.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM12 13.254a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.5 1.25a.75.75 0 0 1 .75.75v1a9.25 9.25 0 0 0 3.7 7.4.75.75 0 1 1-.9 1.2A10.75 10.75 0 0 1 3.75 3V2a.75.75 0 0 1 .75-.75Zm15 0a.75.75 0 0 1 .75.75v1a10.75 10.75 0 0 1-4.3 8.6.75.75 0 0 1-.9-1.2 9.25 9.25 0 0 0 3.7-7.4V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
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
