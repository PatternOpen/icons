<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.25 4A.75.75 0 0 1 5 3.25h14a.75.75 0 0 1 .53.22l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-.53.22H5A.75.75 0 0 1 4.25 8V4Zm1.5.75v2.5h12.94L19.94 6l-1.25-1.25H5.75Zm-1.28 6.22a.75.75 0 0 1 .53-.22h14a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.53-.22l-2-2a.75.75 0 0 1 0-1.06l2-2Zm.84 1.28L4.06 13.5l1.25 1.25h12.94v-2.5H5.31Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 14.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75Zm0-7.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Zm0-6a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.75 22a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
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
