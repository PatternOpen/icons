# SVG to Components

🎯 将 SVG 文件转换为 react、vue 组件的工具

## 快速开始

- 克隆项目，安装依赖 `pnpm i`

- 把整理好的 SVG 文件文件放到 `source` 目录下，本项目的示例图标（来自[IconPark 基础图标](https://iconpark.oceanengine.com/official)）

- 执行 `pnpm generate:all`，生成个各平台代码

- 执行 `pnpm build:all`，打包所有子模块

- 执行 `pnpm dev`，生成本地开发环境预览

- 确认没有问题后，提交本次变更

- 可以选择使用 `changeset` 进行版本升级以及发布
  - 执行 pnpm changeset 添加版本说明，生成版本文件
  - 执行 pnpm changeset version 消费版本文件，修改项目版本，生成 CHANGELOG
  - 执行 pnpm changeset tag 和 git push --follow-tags，创建版本标签并同步到远程
  - 配置ci自动触发器规则，自动发布

## 如何使用

### vue

```bash
# @scope 只是一个演示
pnpm i @scope/icon-vue
```

```html
<script setup lang="ts">
import { IconName } from '@scope/icon-vue'
</script>

<template>
  <IconName :size="32" color="#333" />
</template>
```

### react

```bash
# @scope 只是一个演示
pnpm i @scope/icon-react
```

```tsx
import { IconName } from '@scope/icon-react'

const Demo = () => {
  return (
    <>
      <IconName size={32} color="#333" />
    </>
  )
}
```
