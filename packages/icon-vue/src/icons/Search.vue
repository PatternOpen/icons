<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Zm9.25-7.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.142 6.641A4.738 4.738 0 0 1 10.5 5.25c1.312 0 2.5.532 3.36 1.391a.75.75 0 0 1-1.062 1.06A3.237 3.237 0 0 0 10.5 6.75c-.897 0-1.709.363-2.298.952a.75.75 0 0 1-1.06-1.06Zm8.939 9.439a.75.75 0 0 1 1.06 0l4.243 4.243a.75.75 0 1 1-1.06 1.06l-4.243-4.242a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
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
