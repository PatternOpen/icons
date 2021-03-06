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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.75 5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V5Zm1.5.75v15.5h13.5V5.75H5.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10 9.25a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75Zm4 0a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75ZM1.25 5A.75.75 0 0 1 2 4.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.987 1.64a.75.75 0 0 1 .658-.39h4.744a.75.75 0 0 1 .66.395l1.612 3A.75.75 0 0 1 16 5.75H8a.75.75 0 0 1-.658-1.11l1.645-3Zm1.102 1.11-.823 1.5h5.48l-.806-1.5h-3.85Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
