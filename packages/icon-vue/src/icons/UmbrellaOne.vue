<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75Zm1.53-.75h18.44a9.25 9.25 0 0 0-18.44 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v7.277c0 1.085.9 1.979 2 1.979s2-.894 2-1.98a.75.75 0 0 1 1.5 0c0 1.93-1.586 3.48-3.5 3.48s-3.5-1.55-3.5-3.48V12a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
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
