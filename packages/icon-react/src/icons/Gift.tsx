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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.75 10a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75V10Zm1.5.75v10.5h15.5v-10.5H4.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 9.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.75 22a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75ZM1.25 6A.75.75 0 0 1 2 5.25h20a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V6Zm1.5.75v2.5h18.5v-2.5H2.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.47 1.47a.75.75 0 0 1 1.06 0L12 4.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
