<script setup lang="ts">
import * as icons from '@scope/icon-svg'
import { GithubLogo } from '@scope/icon-vue'
import IconCard from '@/components/IconCard.vue'
</script>

<template>
  <header class="header">
    <div class="app-container">
      <div class="right">
        <a href="https://github.com/PatternOpen">
          <img
            class="logo"
            src="favicon.png"
          >
        </a>
      </div>
      <a
        class="right"
        href="https://github.com/PatternOpen/icons"
      >
        <GithubLogo color="#343434" />
      </a>
    </div>
  </header>
  <main class="main">
    <div class="app-container">
      <div class="scroll-box">
        <div
          v-for="[name, svg] in Object.entries(icons)"
          :key="name"
          class="card"
        >
          <IconCard
            :name="name"
            :svg="svg"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343434;
  font-size: 20px;
}
</style>

<style lang="css" scoped>
.header {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
}

.header .app-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header .logo {
  height: 40px;
  width: 40px;
}

.main {
  height: calc(100vh - 60px);
}

.main .app-container {
  height: 100%;
}

.main .scroll-box {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 20px 0;
  box-sizing: border-box;
}

.main .card {
  padding: 10px;
  width: 20%;
  box-sizing: border-box;
}
</style>
