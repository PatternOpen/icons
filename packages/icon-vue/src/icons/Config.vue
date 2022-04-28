<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.47 1.47a.75.75 0 0 1 1.06 0l2.78 2.78H19a.75.75 0 0 1 .75.75v3.69l2.78 2.78a.75.75 0 0 1 0 1.06l-2.78 2.78V19a.75.75 0 0 1-.75.75h-3.69l-2.78 2.78a.75.75 0 0 1-1.06 0l-2.78-2.78H5a.75.75 0 0 1-.75-.75v-3.69l-2.78-2.78a.75.75 0 0 1 0-1.06l2.78-2.78V5A.75.75 0 0 1 5 4.25h3.69l2.78-2.78ZM12 3.06 9.53 5.53a.75.75 0 0 1-.53.22H5.75V9a.75.75 0 0 1-.22.53L3.06 12l2.47 2.47c.141.14.22.331.22.53v3.25H9a.75.75 0 0 1 .53.22L12 20.94l2.47-2.47a.75.75 0 0 1 .53-.22h3.25V15a.75.75 0 0 1 .22-.53L20.94 12l-2.47-2.47a.75.75 0 0 1-.22-.53V5.75H15a.75.75 0 0 1-.53-.22L12 3.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clip-rule="evenodd"/></svg>
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
