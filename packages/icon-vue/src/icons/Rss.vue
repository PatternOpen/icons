<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5 2.75a.25.25 0 0 0-.25.25v17.768l6.905-3.57a.75.75 0 0 1 .69 0l6.905 3.57V3a.25.25 0 0 0-.25-.25H5ZM3.25 3c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v19a.75.75 0 0 1-1.095.666L12 18.708l-7.656 3.958A.75.75 0 0 1 3.25 22V3Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.975 6.225a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.225 9.975a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
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
