<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path d="M10.914 12.69a4.182 4.182 0 0 1 1.11 4.059 4.213 4.213 0 0 1-3 2.983 4.244 4.244 0 0 1-4.092-1.108 4.181 4.181 0 0 1 .054-5.882 4.245 4.245 0 0 1 5.928-.051Zm1.005-1.114a5.745 5.745 0 0 0-7.99.102 5.681 5.681 0 0 0-.07 7.994l.005.005a5.744 5.744 0 0 0 5.544 1.505 5.713 5.713 0 0 0 4.065-4.046 5.683 5.683 0 0 0-1.555-5.56Zm.83 5.367.724.193-.725-.193Z"/><path d="M20.53 2.97a.75.75 0 0 1 0 1.06l-8.5 8.5a.75.75 0 1 1-1.06-1.06l8.5-8.5a.75.75 0 0 1 1.06 0Z"/><path d="M17.79 4.768a.75.75 0 0 1 1.058 0l2.714 2.7a.75.75 0 0 1 0 1.064l-3.167 3.15a.75.75 0 0 1-1.057 0l-2.715-2.7a.75.75 0 0 1 0-1.064l3.167-3.15Zm.529 1.59L16.216 8.45l1.65 1.642L19.97 8l-1.651-1.642Z"/></svg>
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
