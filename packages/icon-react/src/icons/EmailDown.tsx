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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 7.5A.75.75 0 0 1 2 6.75h4a.75.75 0 0 1 0 1.5H2.75v11.5h18.5V8.25H18a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-13Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 1.75a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.47 5.97a.75.75 0 0 1 1.06 0L12 8.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.4 7.05a.75.75 0 0 1 1.05-.15L12 14.062 21.55 6.9a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
