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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 5.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5ZM2.75 13.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0ZM8.25 2A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 2Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.25 13.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
