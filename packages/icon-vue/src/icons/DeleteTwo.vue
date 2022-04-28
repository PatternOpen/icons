<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6.406 5.043A.75.75 0 0 1 7 4.75h15a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.594-.293l-5-6.5a.75.75 0 0 1 0-.914l5-6.5Zm.963 1.207L2.946 12l4.423 5.75H21.25V6.25H7.37Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.97 8.97a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
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
