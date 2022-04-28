<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path d="M6.25 11a.75.75 0 0 0 1.5 0h-1.5ZM7 7.002h.75H7Zm4.543-4.976.075.746-.075-.746Zm4.722 4.128a.75.75 0 0 0 1.47-.302l-1.47.302ZM12.75 15a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM4.5 11.774h15v-1.5h-15v1.5Zm15 0a.25.25 0 0 1 .25.25h1.5a1.75 1.75 0 0 0-1.75-1.75v1.5Zm.25.25v9h1.5v-9h-1.5Zm0 9a.25.25 0 0 1-.25.25v1.5a1.75 1.75 0 0 0 1.75-1.75h-1.5Zm-.25.25h-15v1.5h15v-1.5Zm-15 0a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5Zm-.25-.25v-9h-1.5v9h1.5Zm0-9a.25.25 0 0 1 .25-.25v-1.5a1.75 1.75 0 0 0-1.75 1.75h1.5ZM7.75 11V7.002h-1.5V11h1.5Zm0-3.998c-.002-2.176 1.663-4.01 3.867-4.23l-.149-1.493C8.51 1.575 6.247 4.044 6.25 7.003l1.5-.001Zm3.867-4.23c2.206-.22 4.21 1.248 4.648 3.382l1.47-.302C17.14 2.954 14.426.984 11.468 1.28l.15 1.493ZM11.25 15v3h1.5v-3h-1.5Z"/></svg>
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
