<script setup lang="ts">
import * as icons from '@scope/icon-svg'
import { GithubLogo, Bluetooth } from '@scope/icon-vue'
import IconCard from '@/components/IconCard.vue'
</script>

<template>
  <header class="header">
    <div class="app-container">
      <div class="left">
        <a href="https://github.com/PatternOpen">
          <img
            class="logo"
            src="favicon.png"
          >
        </a>
        <div>
          Powered By
          <a
            style="font-weight: 800"
            href="https://github.com/PatternOpen/icons"
          >PatternOpen/icons</a>
        </div>
      </div>
      <div class="right">
        <a href="https://github.com/PatternOpen/icons/blob/main/README.md"> Document </a>
        <a href="https://github.com/PatternOpen/icons">
          <GithubLogo
            color="#343434"
            :size="30"
          />
        </a>
      </div>
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
  font-size: 16px;
}

a {
  color: #349;
  font-weight: 500;
  text-decoration: none;
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

.header .left {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
}

.header .logo {
  height: 40px;
  width: 40px;
  margin-right: 12px;
}

.header .right {
  display: flex;
  align-items: center;
}

.header .right a {
  margin-left: 12px;
}

.header .right a + a {
  margin-left: 24px;
}

.main {
  height: calc(100vh - 60px);
  background-color: #f9f9f9;
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
