<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-13Zm1.5.75v11.5h18.5V3.25H2.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.646 6.339a.75.75 0 0 1 .77.037l3 2a.75.75 0 0 1 0 1.248l-3 2A.75.75 0 0 1 10.25 11V7a.75.75 0 0 1 .396-.661ZM11.75 8.4v1.2l.898-.6-.898-.599ZM2.25 20a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm5.5 0a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7 19.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.75 20a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" clip-rule="evenodd"/></svg>
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
