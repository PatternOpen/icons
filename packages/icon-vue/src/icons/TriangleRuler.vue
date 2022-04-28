<template>
  <span
    class="pop-icon"
    :class="className"
    :style="rootStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.713 1.307a.75.75 0 0 1 .817.163l20 20a.75.75 0 0 1-.53 1.28H2a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .463-.693ZM2.75 3.811V21.25h17.44L2.75 3.81Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44ZM15 19.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM1.25 18a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-3A.75.75 0 0 1 2 8.25h1.5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9Z" clip-rule="evenodd"/></svg>
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
