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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4 6.75a.25.25 0 0 0-.25.25v13c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V7a.25.25 0 0 0-.25-.25H4ZM2.25 7c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v13A1.75 1.75 0 0 1 20 21.75H4A1.75 1.75 0 0 1 2.25 20V7Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.225 12.004a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM5.936 2.006A.75.75 0 0 1 6.5 1.75h11a.75.75 0 0 1 .564.256l3.5 4a.75.75 0 1 1-1.128.988L17.16 3.25H6.84L3.564 6.994a.75.75 0 1 1-1.128-.988l3.5-4Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
