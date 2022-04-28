<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V5.25H2.75v12.5H13a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75v-14Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.5 13.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm-5.25 3.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17 15.25a.75.75 0 0 1 .75.75v1.25H19a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75ZM1.371 4.091a.75.75 0 0 1 1.038-.22L12 10.106l9.591-6.235a.75.75 0 1 1 .818 1.258l-10 6.5a.75.75 0 0 1-.818 0l-10-6.5a.75.75 0 0 1-.22-1.038Z" clip-rule="evenodd"/></svg>
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
