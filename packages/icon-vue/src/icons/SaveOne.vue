<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.25 4.35c0-1.16.94-2.1 2.1-2.1h15.3c1.16 0 2.1.94 2.1 2.1v15.3a2.1 2.1 0 0 1-2.1 2.1H4.35a2.1 2.1 0 0 1-2.1-2.1V4.35Zm2.1-.6a.6.6 0 0 0-.6.6v15.3a.6.6 0 0 0 .6.6h15.3a.6.6 0 0 0 .6-.6V4.35a.6.6 0 0 0-.6-.6H4.35Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.75 3a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V3Zm1.5.75v7.5h7v-7.5h-7Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.748 3a.75.75 0 0 1 .75-.75h12.5a.75.75 0 1 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
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
