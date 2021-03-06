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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.75 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3.75H18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3.75V18a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3.75H6a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 6 9.75h3.75V6Zm1.5.75v3.75a.75.75 0 0 1-.75.75H6.75v1.5h3.75a.75.75 0 0 1 .75.75v3.75h1.5V13.5a.75.75 0 0 1 .75-.75h3.75v-1.5H13.5a.75.75 0 0 1-.75-.75V6.75h-1.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
