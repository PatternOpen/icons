<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 9.5A6.25 6.25 0 0 1 12 5.163 6.25 6.25 0 0 1 22.75 9.5c0 3.038-1.783 5.843-3.905 7.986-2.128 2.15-4.726 3.763-6.608 4.389a.749.749 0 0 1-.473 0c-1.883-.626-4.48-2.24-6.61-4.39C3.035 15.344 1.25 12.539 1.25 9.5ZM7.5 4.75A4.75 4.75 0 0 0 2.75 9.5c0 2.462 1.467 4.907 3.47 6.93 1.902 1.92 4.171 3.343 5.78 3.938 1.609-.595 3.878-2.018 5.78-3.938 2.003-2.023 3.47-4.468 3.47-6.93a4.75 4.75 0 0 0-8.637-2.731.75.75 0 0 1-1.226 0A4.744 4.744 0 0 0 7.5 4.75Z" clip-rule="evenodd"/></svg>
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
