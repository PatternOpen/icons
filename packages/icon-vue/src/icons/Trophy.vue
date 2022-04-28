<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5.25 2A.75.75 0 0 1 6 1.25h12a.75.75 0 0 1 .75.75v6.824c0 3.804-3.002 6.926-6.75 6.926s-6.75-3.122-6.75-6.926V2Zm1.5.75v6.074c0 3.017 2.37 5.426 5.25 5.426s5.25-2.409 5.25-5.426V2.75H6.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 5.5A.75.75 0 0 1 2 4.75h4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75c-2.487 0-4.75-2.079-4.75-5.75Zm1.539.75C3.006 8.267 4.1 9.331 5.25 9.648V6.25H2.789ZM17.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75c0 3.671-2.263 5.75-4.75 5.75a.75.75 0 0 1-.75-.75v-5Zm1.5.75v3.398c1.149-.317 2.244-1.381 2.461-3.398H18.75Zm-6.75 9a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.706 17.607a.75.75 0 0 1 .639-.357h5.176a.75.75 0 0 1 .626.337l1.98 3a.75.75 0 0 1-.627 1.163h-9a.75.75 0 0 1-.639-1.143l1.845-3Zm1.058 1.143-.922 1.5h6.265l-.99-1.5H9.764Z" clip-rule="evenodd"/></svg>
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
