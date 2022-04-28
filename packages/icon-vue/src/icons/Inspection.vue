<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.75 9.5a.75.75 0 0 1 .75-.75h19a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-6.25H3.25V20.5c0 .138.112.25.25.25H12a.75.75 0 0 1 0 1.5H3.5a1.75 1.75 0 0 1-1.75-1.75v-11Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.5 4.75a.25.25 0 0 0-.25.25v3.75h17.5V5a.25.25 0 0 0-.25-.25h-17ZM1.75 5c0-.966.784-1.75 1.75-1.75h17c.966 0 1.75.784 1.75 1.75v4.5a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75V5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 8 1.75Zm8 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 11.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM10.75 16a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.424 18.02a.75.75 0 0 1 1.056-.096l3 2.5a.75.75 0 1 1-.96 1.152l-3-2.5a.75.75 0 0 1-.096-1.056Z" clip-rule="evenodd"/></svg>
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
