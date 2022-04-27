<template>
  <span
    class="b-icon"
    :class="classNames"
    :style="rootStyle"
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.75C5.86192 2.75 5.75 2.86192 5.75 3V20.5426L8.06407 18.8897C8.32484 18.7034 8.67516 18.7034 8.93593 18.8897L12 21.0783L15.0641 18.8897C15.3248 18.7034 15.6752 18.7034 15.9359 18.8897L18.25 20.5426V3C18.25 2.86192 18.1381 2.75 18 2.75H6ZM4.25 3C4.25 2.03351 5.03348 1.25 6 1.25H18C18.9665 1.25 19.75 2.03351 19.75 3V22C19.75 22.2809 19.593 22.5383 19.3432 22.6669C19.0934 22.7954 18.7927 22.7736 18.5641 22.6103L15.5 20.4217L12.4359 22.6103C12.1752 22.7966 11.8248 22.7966 11.5641 22.6103L8.5 20.4217L5.43593 22.6103C5.20732 22.7736 4.90662 22.7954 4.65681 22.6669C4.40701 22.5383 4.25 22.2809 4.25 22V3Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 11C8.25 10.5858 8.58579 10.25 9 10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H9C8.58579 11.75 8.25 11.4142 8.25 11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H15C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 7C8.25 6.58579 8.58579 6.25 9 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H9C8.58579 7.75 8.25 7.41421 8.25 7Z"/></svg>
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
  class?: string
}>()
const { classNames, rootStyle } = useRunTime(props)
</script>
