<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V5.25H2.75v13.5H12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.4 4.05a.75.75 0 0 1 1.05-.15L12 11.062 21.55 3.9a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05ZM14.75 16.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-4Zm1.5.75v2.5h4.5v-2.5h-4.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.25 15a2.25 2.25 0 1 1 4.5 0v1.5a.75.75 0 0 1-1.5 0V15a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 1-1.5 0V15Z" clip-rule="evenodd"/></svg>
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
