<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.675 8.324a.75.75 0 0 1 .794.09L12 16.04l9.532-7.626A.75.75 0 0 1 22.75 9v10.91c0 .953-.723 1.84-1.75 1.84H3c-1.027 0-1.75-.887-1.75-1.84V9a.75.75 0 0 1 .425-.676ZM2.75 10.56v9.35c0 .25.172.34.25.34h18c.078 0 .25-.09.25-.34v-9.35l-8.781 7.026a.75.75 0 0 1-.938 0L2.75 10.56Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.575 1.382a.75.75 0 0 1 .85 0l10 6.892a.75.75 0 0 1-.85 1.235L12 2.911 2.426 9.509a.75.75 0 1 1-.852-1.235l10-6.892Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.282.586l-5 4a.75.75 0 0 1-.937 0l-5-4A.75.75 0 0 1 6.25 13V9Zm1.5.75v2.89l4.25 3.4 4.25-3.4V9.75h-8.5Z" clip-rule="evenodd"/></svg>
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
