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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5 5.25a.75.75 0 0 1 .643.364l3 5a.75.75 0 0 1-1.286.772L5 7.458l-2.357 3.928a.75.75 0 1 1-1.286-.772l3-5A.75.75 0 0 1 5 5.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75 3.75 3.75 0 1 1-7.5 0Zm1.628.75a2.25 2.25 0 0 0 4.244 0H2.878ZM19 5.25a.75.75 0 0 1 .643.364l3 5a.75.75 0 1 1-1.286.772L19 7.458l-2.357 3.928a.75.75 0 1 1-1.286-.772l3-5A.75.75 0 0 1 19 5.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75 3.75 3.75 0 1 1-7.5 0Zm1.628.75a2.251 2.251 0 0 0 4.244 0h-4.244ZM12 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.25 6A.75.75 0 0 1 5 5.25h14a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 6Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.25 6A.75.75 0 0 1 5 5.25h14a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 6Zm0 15a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
