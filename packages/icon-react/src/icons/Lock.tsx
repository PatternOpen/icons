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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4 11.75a.25.25 0 0 0-.25.25v9c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25v-9a.25.25 0 0 0-.25-.25H4ZM2.25 12c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v9A1.75 1.75 0 0 1 20 22.75H4A1.75 1.75 0 0 1 2.25 21v-9Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2.75A4.25 4.25 0 0 0 7.75 7v4a.75.75 0 0 1-1.5 0V7a5.75 5.75 0 0 1 11.5 0v4a.75.75 0 0 1-1.5 0V7A4.25 4.25 0 0 0 12 2.75Zm0 11.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
