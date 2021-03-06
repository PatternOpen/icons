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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.25 2A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 2Zm0 3A.75.75 0 0 1 9 4.25h6a.75.75 0 0 1 .75.75v14a3.75 3.75 0 1 1-7.5 0V5Zm1.5.75V19a2.25 2.25 0 0 0 4.5 0V5.75h-4.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 12.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM8.75 17.5a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H9.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
