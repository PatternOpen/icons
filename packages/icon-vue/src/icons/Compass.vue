<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.607 7.048a.75.75 0 0 1 .44.965l-5.345 14.25a.75.75 0 0 1-1.404-.526l5.344-14.25a.75.75 0 0 1 .965-.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.393 7.048a.75.75 0 0 1 .966.439l5.343 14.25a.75.75 0 1 1-1.404.526l-5.344-14.25a.75.75 0 0 1 .44-.965Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM4.585 16.092a.75.75 0 0 1 1.038-.221A11.691 11.691 0 0 0 12 17.75c2.352 0 4.541-.691 6.377-1.88a.75.75 0 0 1 .816 1.259A13.191 13.191 0 0 1 12 19.25a13.2 13.2 0 0 1-7.193-2.12.75.75 0 0 1-.222-1.038Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
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
