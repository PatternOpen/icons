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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path d="M11.19 6.25a7.718 7.718 0 0 1 3.81-1 7.71 7.71 0 0 1 3.81 1H21a.75.75 0 0 1 .75.75v2.19a7.718 7.718 0 0 1 1 3.81 7.718 7.718 0 0 1-1 3.81V19a.75.75 0 0 1-.75.75h-2.19a7.718 7.718 0 0 1-3.81 1 7.718 7.718 0 0 1-3.81-1H2a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 2 6.25h9.19ZM9.3 7.75H2.75v10.5H9.3A7.723 7.723 0 0 1 7.25 13c0-2.026.778-3.87 2.05-5.25Zm11.103 8.394A6.217 6.217 0 0 0 21.25 13c0-1.148-.309-2.22-.847-3.144L18.297 7.75h-6.155v10.5h6.155l2.106-2.106Zm-9.76 1.337V8.518A6.23 6.23 0 0 0 8.75 13a6.23 6.23 0 0 0 1.892 4.48Z"/><path d="M3.25 4.5A.75.75 0 0 1 4 3.75h4.5a.75.75 0 0 1 .75.75V7a.75.75 0 0 1-.75.75H4A.75.75 0 0 1 3.25 7V4.5Zm1.5.75v1h3v-1h-3Zm.25 5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm10 .5A2.25 2.25 0 0 0 12.75 13a.75.75 0 0 1-1.5 0A3.75 3.75 0 0 1 15 9.25a.75.75 0 0 1 0 1.5Zm3.287 1.557a.75.75 0 0 1 .463.693A3.75 3.75 0 0 1 15 16.75a.75.75 0 0 1-.53-1.28l3-3a.75.75 0 0 1 .817-.163Z"/></svg>
    </span>
  )
}

export default BaseIcon
