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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3 8.25a.75.75 0 0 1 .75.75v11c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V9a.75.75 0 0 1 1.5 0v11A1.75 1.75 0 0 1 20 21.75H4A1.75 1.75 0 0 1 2.25 20V9A.75.75 0 0 1 3 8.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4 3.75a.25.25 0 0 0-.25.25v4.25h16.5V4a.25.25 0 0 0-.25-.25H4ZM2.25 4c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v5a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 9V4Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
