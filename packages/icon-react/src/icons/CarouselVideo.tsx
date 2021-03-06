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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.75 3.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-17Zm1.5.75v15.5h11.5V4.25H6.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 5.5A.75.75 0 0 1 2 4.75h3.5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-13Zm1.5.75v11.5h2V6.25h-2Zm15-.75a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-13Zm1.5.75v11.5h2V6.25h-2Zm-8.604 3.089a.75.75 0 0 1 .77.037l3 2a.75.75 0 0 1 0 1.248l-3 2A.75.75 0 0 1 10.25 14v-4a.75.75 0 0 1 .396-.661ZM11.75 11.4v1.2l.898-.599-.898-.599Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
