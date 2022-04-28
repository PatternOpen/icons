<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M7.36 2.373a.75.75 0 0 1 .74-.623h7.8a.75.75 0 0 1 .74.623l.6 3.5-1.48.254-.492-2.877H8.732L8.24 6.127l-1.478-.254.6-3.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.953 5.487A.75.75 0 0 1 5.5 5.25h13a.75.75 0 0 1 .748.798l-1 15.5a.75.75 0 0 1-.748.702h-11a.75.75 0 0 1-.748-.702l-1-15.5a.75.75 0 0 1 .2-.561ZM6.3 6.75l.903 14h9.594l.903-14H6.3Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.75 17.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
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
