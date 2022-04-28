<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.75 12a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2.75a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-1.5 0v-17a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path d="M4.5 2.5h-2v2h2v-2Zm4.5 0H7v2h2v-2Zm8 0h-2v2h2v-2Zm4.5 0h-2v2h2v-2Zm0 4.5h-2v2h2V7Zm-17 0h-2v2h2V7Zm0 12.5h-2v2h2v-2Zm4.5 0H7v2h2v-2Zm8 0h-2v2h2v-2Zm4.5 0h-2v2h2v-2Zm0-4.5h-2v2h2v-2Zm-17 0h-2v2h2v-2Z"/></svg>
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
