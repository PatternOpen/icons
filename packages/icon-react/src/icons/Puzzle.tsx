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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M9.5 2.75A2.25 2.25 0 0 0 7.25 5v1a.75.75 0 0 1-.75.75H2.75v4.5H4a3.75 3.75 0 1 1 0 7.5H2.75v2.5h13.5V18a.75.75 0 0 1 .75-.75h2a2.25 2.25 0 0 0 0-4.5h-2a.75.75 0 0 1-.75-.75V6.75H12.5a.75.75 0 0 1-.75-.75V5A2.25 2.25 0 0 0 9.5 2.75ZM5.75 5a3.75 3.75 0 1 1 7.5 0v.25H17a.75.75 0 0 1 .75.75v5.25H19a3.75 3.75 0 1 1 0 7.5h-1.25V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h2a2.25 2.25 0 0 0 0-4.5H2a.75.75 0 0 1-.75-.75V6A.75.75 0 0 1 2 5.25h3.75V5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
