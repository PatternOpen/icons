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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.937 3.18a.75.75 0 0 1 .21.785A8.25 8.25 0 0 0 20.27 14.077a.75.75 0 0 1 1.01.919c-1.263 3.918-4.94 6.754-9.28 6.754A9.75 9.75 0 0 1 2.25 12a9.752 9.752 0 0 1 5.885-8.954.75.75 0 0 1 .802.134Zm-1.6 2.013A8.25 8.25 0 1 0 19.22 15.996a9.78 9.78 0 0 1-2.22.254A9.75 9.75 0 0 1 7.337 5.193Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.08 5a.75.75 0 0 1 .75-.75h4.67a.75.75 0 0 1 .469 1.336l-3.33 2.664H20.5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.469-1.336l3.331-2.664H15.83a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
