<template>
  <span
    class="b-icon"
    :class="classNames"
    :style="rootStyle"
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 2C3.25 1.58579 3.58579 1.25 4 1.25H17C17.4142 1.25 17.75 1.58579 17.75 2V5C17.75 5.41421 17.4142 5.75 17 5.75C16.5858 5.75 16.25 5.41421 16.25 5V2.75H4.75V17.7865L6.66459 16.8292C7.03507 16.6439 7.48558 16.7941 7.67082 17.1646C7.85606 17.5351 7.70589 17.9856 7.33541 18.1708L4.33541 19.6708C4.10292 19.7871 3.82681 19.7746 3.6057 19.638C3.38459 19.5013 3.25 19.2599 3.25 19V2Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 5C6.25 4.58579 6.58579 4.25 7 4.25H20C20.4142 4.25 20.75 4.58579 20.75 5V22C20.75 22.2581 20.6173 22.498 20.3988 22.6352C20.1802 22.7724 19.9065 22.7876 19.6741 22.6755L13.5 19.6964L7.32593 22.6755C7.09352 22.7876 6.81977 22.7724 6.60122 22.6352C6.38267 22.498 6.25 22.2581 6.25 22V5ZM7.75 5.75V20.8054L13.1741 18.1882C13.38 18.0888 13.62 18.0888 13.8259 18.1882L19.25 20.8054V5.75H7.75Z"/></svg>
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
