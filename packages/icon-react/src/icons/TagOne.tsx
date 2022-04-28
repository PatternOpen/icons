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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h9a.75.75 0 0 1 .53.22l8.086 8.086a2.55 2.55 0 0 1 0 3.595l-.001.002-6.453 6.453a2.55 2.55 0 0 1-3.608 0L3.47 13.53a.75.75 0 0 1-.22-.53V4Zm1.5.75v7.94l7.865 7.855a1.052 1.052 0 0 0 1.486 0l6.452-6.451a1.05 1.05 0 0 0 0-1.48L12.69 4.75H4.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
