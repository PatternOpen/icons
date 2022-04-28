<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4Zm1.5.75v8.5h14.5v-8.5H4.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.22 13.283a.75.75 0 0 1 .497.938L3.015 19.75h17.97l-1.702-5.53a.75.75 0 1 1 1.434-.44l2 6.5a.75.75 0 0 1-.717.97H2a.75.75 0 0 1-.717-.97l2-6.5a.75.75 0 0 1 .938-.497Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.235 17.274a.75.75 0 0 1 .715-.524h4.1a.75.75 0 0 1 .715.524l.95 3a.75.75 0 0 1-.715.976H9a.75.75 0 0 1-.715-.976l.95-3Zm1.264.976-.475 1.5h3.952l-.475-1.5h-3.002Z" clip-rule="evenodd"/></svg>
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
