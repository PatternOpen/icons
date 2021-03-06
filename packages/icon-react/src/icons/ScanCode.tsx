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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.25 3A.75.75 0 0 1 3 2.25h4.5a.75.75 0 0 1 0 1.5H3.75V7.5a.75.75 0 0 1-1.5 0V3ZM3 15.75a.75.75 0 0 1 .75.75v3.75H7.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75Zm18 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h3.75V16.5a.75.75 0 0 1 .75-.75ZM15.75 3a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V3.75H16.5a.75.75 0 0 1-.75-.75Zm-11.5 9a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
