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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3 6.75a.25.25 0 0 0-.25.25v13c0 .138.112.25.25.25h18a.25.25 0 0 0 .25-.25V7a.25.25 0 0 0-.25-.25H3ZM1.25 7c0-.967.784-1.75 1.75-1.75h18c.966 0 1.75.783 1.75 1.75v13A1.75 1.75 0 0 1 21 21.75H3A1.75 1.75 0 0 1 1.25 20V7Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.25 12.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 11.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
