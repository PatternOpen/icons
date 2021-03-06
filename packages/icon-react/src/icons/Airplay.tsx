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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3 3.757a.25.25 0 0 0-.25.25v12.75H6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75v-13.5c0-.967.784-1.75 1.75-1.75h18c.966 0 1.75.783 1.75 1.75v13.5a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h3.25V4.007a.25.25 0 0 0-.25-.25H3Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.47 15.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-.53 1.28H7a.75.75 0 0 1-.53-1.28l5-5Zm-2.66 4.78h6.38L12 17.06l-3.19 3.19Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
