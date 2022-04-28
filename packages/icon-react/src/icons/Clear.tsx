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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M9.25 2.957a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v3.25h6.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h6.75v-3.25Zm1.5.75v3.25a.75.75 0 0 1-.75.75H3.25v2.5h17.5v-2.5H14a.75.75 0 0 1-.75-.75v-3.25h-2.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.25 11a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-9Zm1.5.75v7.5h14.5v-7.5H4.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 16.207a.75.75 0 0 1 .75.75v2.992a.75.75 0 0 1-1.5 0v-2.992a.75.75 0 0 1 .75-.75Zm4-.008a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm4 .008a.75.75 0 0 1 .75.75v2.992a.75.75 0 0 1-1.5 0v-2.992a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.25 20a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
