<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 7.5A.75.75 0 0 1 2 6.75h4a.75.75 0 0 1 0 1.5H2.75v11.5h18.5V8.25H18a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-13Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 1.75a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.47 1.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L12 3.56 9.53 6.03a.75.75 0 0 1-1.06-1.06l3-3ZM1.4 7.05a.75.75 0 0 1 1.05-.15L12 14.062 21.55 6.9a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05Z" clip-rule="evenodd"/></svg>
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
