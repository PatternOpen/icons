<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.5 2.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25h8.5Zm-.75 1.5h-7v5.5h7v-5.5ZM21 13.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75H21Zm-.75 1.5h-7v5.5h7v-5.5Zm-4.75-4a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-5.5Zm.75-1.5h4v-5.5h-4v5.5ZM3 21.75a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3Zm.75-1.5h4v-5.5h-4v5.5Z" clip-rule="evenodd"/></svg>
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
