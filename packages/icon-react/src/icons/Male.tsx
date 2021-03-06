import React from 'react'
import { useRunTime } from '../core'
import type { IconProps } from '../core'

const BaseIcon: React.FC<IconProps> = props => {
  const { rootStyle } = useRunTime(props)
  return (
    <span
      className={`pop-icon ${props.className}`}
      style={rootStyle}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M15.726 3.024a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-3.75h-3.75a.75.75 0 0 1-.75-.75ZM4.676 8.57a7.75 7.75 0 1 1 0 10.96l.53-.53-.53.53a7.75 7.75 0 0 1 0-10.96Zm9.9 1.061a6.25 6.25 0 1 0-8.839 8.839 6.25 6.25 0 0 0 8.839-8.839l.53-.53-.53.53Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M20.506 3.494a.75.75 0 0 1 0 1.06L15.53 9.53a.75.75 0 1 1-1.06-1.06l4.975-4.976a.75.75 0 0 1 1.061 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
