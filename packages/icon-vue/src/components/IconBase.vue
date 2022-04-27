<template>
  <span
    class="b-icon"
    :class="classNames"
    :style="rootStyle"
  >
    <!--slot-->
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
