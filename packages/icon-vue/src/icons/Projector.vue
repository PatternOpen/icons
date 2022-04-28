<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10a.75.75 0 0 1 0 1.5H2.75v6.5h18.5v-6.5H19a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V8Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h1.5v-1.5h-1.5Zm13.5-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h1.5v-1.5h-1.5ZM4.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM15.5 5.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM11.25 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z" clip-rule="evenodd"/><path d="M15.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>
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
