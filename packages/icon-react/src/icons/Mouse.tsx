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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5.25 8A.75.75 0 0 1 6 7.25h12a.75.75 0 0 1 .75.75v8a6.75 6.75 0 0 1-13.5 0V8Zm1.5.75V16a5.25 5.25 0 1 0 10.5 0V8.75H6.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 8a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75V2Zm1.5.803V7.25h4.447a5.253 5.253 0 0 0-4.447-4.447Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.25 8A6.75 6.75 0 0 1 12 1.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H6A.75.75 0 0 1 5.25 8Zm1.553-.75h4.447V2.803A5.253 5.253 0 0 0 6.803 7.25Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
