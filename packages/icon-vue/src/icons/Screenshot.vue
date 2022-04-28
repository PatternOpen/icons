<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM1.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M20.494 3.41a.75.75 0 0 1 .127 1.054c-4.016 5.108-7.05 8.945-9.178 11.604-2.11 2.635-3.363 4.156-3.791 4.584a3.75 3.75 0 0 1-5.303 0 .75.75 0 0 1 1.06-1.061 2.25 2.25 0 0 0 3.182 0c.353-.353 1.539-1.784 3.681-4.46 2.124-2.654 5.154-6.487 9.17-11.594a.75.75 0 0 1 1.052-.127ZM19 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.538 3.41a.75.75 0 0 1 1.053.128c3.999 5.11 7.021 8.943 9.141 11.595 2.138 2.675 3.324 4.105 3.677 4.458a2.25 2.25 0 0 0 3.182 0 .75.75 0 1 1 1.06 1.06 3.75 3.75 0 0 1-5.303 0c-.428-.427-1.682-1.947-3.788-4.581A1535.24 1535.24 0 0 1 3.41 4.462a.75.75 0 0 1 .128-1.053Z" clip-rule="evenodd"/></svg>
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
