<script setup lang="ts">
import { reactive } from 'vue'
import * as vueIcons from '@scope/icon-vue'
import copy from 'copy-to-clipboard'
const props = defineProps<{
  name: string
  svg: string
}>()
const state = reactive({
  copySvg: false,
  copyName: false,
})
let svgTimer
let nameTimer
const onCopySvg = () => {
  state.copySvg = true
  copy(props.svg)
  svgTimer = setTimeout(() => {
    state.copySvg = false
    nameTimer = null
  }, 1000)
}
const onCopyName = () => {
  copy(props.name)
  state.copyName = true
  nameTimer = setTimeout(() => {
    state.copyName = false
    nameTimer = null
  }, 1000)
}
</script>

<template>
  <div class="icon-card">
    <div class="component">
      <component :is="vueIcons[name]" />
    </div>
    <div class="info">
      <div class="name">
        {{ name }}
      </div>
      <div class="operation">
        <button
          class="button"
          :disabled="state.copySvg"
          @click="onCopySvg"
        >
          {{ state.copySvg ? 'Success!' : 'Copy SVG' }}
        </button>
        <button
          class="button"
          :disabled="state.copyName"
          @click="onCopyName"
        >
          {{ state.copyName ? 'Success!' : 'Copy Name' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-card {
  padding: 0 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  height: 60px;
  border-radius: 2px;
  position: relative;
}

.icon-card .component {
  font-size: 28px;
  margin-right: 12px;
}

.icon-card .name {
  font-size: 14px;
  font-weight: 450;
  transition: transform 200ms;
   white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 130px;
}

.icon-card:hover .name {
  opacity: 1;
  height: 26px;
  transform: translateY(-10px);
}

.icon-card .operation {
  display: flex;
  align-items: center;
  opacity: 0;
  position: absolute;
  white-space: nowrap;
  bottom: 8px;
  transform: translateY(3px);
  transition: opacity 300ms, transform 200ms;
}

.icon-card:hover .operation {
  opacity: 1;
  transform: translateY(0);
}

.icon-card .button {
  border: none;
  outline: none;
  font-size: 12px;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  font-weight: 500;
  line-height: 26px;
  border-radius: 2px;
  min-width: 74px;
}

.icon-card .button + .button {
  margin-left: 8px;
}

.icon-card .button:disabled {
  color: yellowgreen;
}

.icon-card .button:active {
  background-color: #dedede;
}
</style>
