<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M15.36 4.96a3.75 3.75 0 0 1 5.303 0l-.53.528.53-.529a3.75 3.75 0 0 1 0 5.303l-8.84 8.84a5.25 5.25 0 0 1-7.424 0l.53-.531-.53.53a5.25 5.25 0 0 1 0-7.424l7.425-7.425a.75.75 0 0 1 1.06 1.06L5.46 12.738l-.53-.53.53.53a3.75 3.75 0 0 0 0 5.304l-.521.52.52-.52a3.75 3.75 0 0 0 5.304 0l.495.495-.495-.495 8.839-8.84A2.25 2.25 0 1 0 16.42 6.02l-8.84 8.839a.75.75 0 0 0 1.06 1.06l7.425-7.424a.75.75 0 1 1 1.06 1.06L9.703 16.98a2.25 2.25 0 0 1-3.182-3.182l8.84-8.839Z" clip-rule="evenodd"/></svg>
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
