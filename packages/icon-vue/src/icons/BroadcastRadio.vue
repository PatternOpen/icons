<template>
  <span
    class="b-icon"
    :class="classNames"
    :style="rootStyle"
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V20C22.75 20.4142 22.4142 20.75 22 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V6ZM2.75 6.75V19.25H21.25V6.75H2.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 13C12.25 11.2051 13.7051 9.75 15.5 9.75C17.2949 9.75 18.75 11.2051 18.75 13C18.75 14.7949 17.2949 16.25 15.5 16.25C13.7051 16.25 12.25 14.7949 12.25 13ZM15.5 11.25C14.5335 11.25 13.75 12.0335 13.75 13C13.75 13.9665 14.5335 14.75 15.5 14.75C16.4665 14.75 17.25 13.9665 17.25 13C17.25 12.0335 16.4665 11.25 15.5 11.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 11C5.25 10.5858 5.58579 10.25 6 10.25H9C9.41421 10.25 9.75 10.5858 9.75 11C9.75 11.4142 9.41421 11.75 9 11.75H6C5.58579 11.75 5.25 11.4142 5.25 11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 15C5.25 14.5858 5.58579 14.25 6 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15C9.75 15.4142 9.41421 15.75 9 15.75H6C5.58579 15.75 5.25 15.4142 5.25 15Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 19.25C4.41421 19.25 4.75 19.5858 4.75 20V22C4.75 22.4142 4.41421 22.75 4 22.75C3.58579 22.75 3.25 22.4142 3.25 22V20C3.25 19.5858 3.58579 19.25 4 19.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 19.25C20.4142 19.25 20.75 19.5858 20.75 20V22C20.75 22.4142 20.4142 22.75 20 22.75C19.5858 22.75 19.25 22.4142 19.25 22V20C19.25 19.5858 19.5858 19.25 20 19.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7213 1.79391C18.8351 2.19218 18.6045 2.6073 18.2062 2.72109L4.20623 6.72109C3.80796 6.83489 3.39284 6.60427 3.27905 6.20599C3.16526 5.80771 3.39588 5.3926 3.79415 5.27881L17.7942 1.27881C18.1924 1.16501 18.6075 1.39563 18.7213 1.79391Z"/></svg>
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
