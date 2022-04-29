# SVG Icon React

使用方式，[All icon](https://patternopen.github.io/icons/)

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