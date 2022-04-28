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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4A.75.75 0 0 1 2 3.25h16a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.75H2.75v10.5H6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75V4Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.25 8A.75.75 0 0 1 6 7.25h16a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V8Zm1.5.75v10.5h14.5V8.75H6.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.4 7.55a.75.75 0 0 1 1.05-.15L14 13.062 21.55 7.4a.75.75 0 0 1 .9 1.2l-8 6a.75.75 0 0 1-.9 0l-8-6a.75.75 0 0 1-.15-1.05Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.25 8A.75.75 0 0 1 6 7.25h10a.75.75 0 0 1 0 1.5H6.75v6.75a.75.75 0 0 1-1.5 0V8Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.25 8a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V8.75H12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
