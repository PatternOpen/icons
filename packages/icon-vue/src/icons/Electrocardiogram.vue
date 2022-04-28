<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.659 5.752a.75.75 0 0 1 .692.625l1.422 8.515 1.264-2.884a.75.75 0 0 1 1.221-.226l1.512 1.534h1.73a.75.75 0 1 1 0 1.5h-2.044a.75.75 0 0 1-.534-.223l-.955-.97-1.833 4.178a.75.75 0 0 1-1.426-.177l-1.305-7.818-1.342 4.476a.75.75 0 0 1-.719.534H5.5a.75.75 0 0 1 0-1.5h2.284l2.11-7.031a.75.75 0 0 1 .765-.534Z" clip-rule="evenodd"/></svg>
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
