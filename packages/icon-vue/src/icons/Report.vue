<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 5.25a5.25 5.25 0 0 0-5.25 5.25v6.25h10.5V10.5c0-2.9-2.35-5.25-5.25-5.25ZM5.25 10.5a6.75 6.75 0 0 1 13.5 0v7a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-7Zm-2 10.5a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75ZM1.288 6.263a.75.75 0 0 1 .949-.475l1.5.5a.75.75 0 0 1-.474 1.423l-1.5-.5a.75.75 0 0 1-.475-.948Zm4.975-4.975a.75.75 0 0 1 .949.475l.5 1.5a.75.75 0 1 1-1.424.474l-.5-1.5a.75.75 0 0 1 .475-.949ZM2.97 2.97a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0Z" clip-rule="evenodd"/></svg>
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
