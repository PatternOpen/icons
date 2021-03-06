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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.5 3.75a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75h-15Zm-2.25.75A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 9 2.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.75 3a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5H5.5A.75.75 0 0 1 4.75 3Zm0 18a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75ZM16.53 9.47a.75.75 0 0 1 0 1.06L15.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
