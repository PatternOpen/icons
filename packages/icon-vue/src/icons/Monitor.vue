<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 5A.75.75 0 0 1 2 4.25h16a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V5Zm1.5.75v12.5h14.5V5.75H2.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M22.316 6.32a.75.75 0 0 1 .434.68v10a.75.75 0 0 1-1.234.573l-4-3.375a.75.75 0 0 1-.266-.573v-3.25a.75.75 0 0 1 .266-.573l4-3.375a.75.75 0 0 1 .8-.107Zm-3.566 4.403v2.553l2.5 2.11V8.614l-2.5 2.11ZM7.924 9.02a.75.75 0 0 1 1.056-.096l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152L10.329 12l-2.31-1.924a.75.75 0 0 1-.095-1.056Z" clip-rule="evenodd"/></svg>
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
