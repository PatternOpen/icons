<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6.084 2.876a.75.75 0 0 1 .775-.034l5.5 3a.75.75 0 0 1 .391.658v10.075l4.25 2.55 4.25-2.55v-4.174l-3.724-2.483L15.95 11.1a.75.75 0 1 1-.9-1.2l2-1.5a.75.75 0 0 1 .866-.024l4.5 3a.75.75 0 0 1 .334.624v5a.75.75 0 0 1-.364.643l-5 3a.75.75 0 0 1-.772 0l-5-3A.75.75 0 0 1 11.25 17V6.945l-4.711-2.57L2.75 6.901V11.6l3.725 2.483L8.05 12.9a.75.75 0 1 1 .9 1.2l-2 1.5a.75.75 0 0 1-.866.024l-4.5-3A.75.75 0 0 1 1.25 12V6.5a.75.75 0 0 1 .334-.624l4.5-3Z" clip-rule="evenodd"/></svg>
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
