# SVG Icon Vue

使用方式，[All icon](https://patternopen.github.io/icons/)

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