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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.25 8A.75.75 0 0 1 3 7.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 8 2.25Zm8 0a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 16a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
