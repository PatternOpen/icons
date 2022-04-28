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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" clip-rule="evenodd"/><path d="M8.5 12.95a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path fill-rule="evenodd" d="M10.444 8.945a.75.75 0 0 1 1.06 0 4.239 4.239 0 0 1 1.246 3.005 4.239 4.239 0 0 1-1.245 3.005.75.75 0 1 1-1.06-1.06 2.74 2.74 0 0 0 .805-1.945c0-.76-.307-1.446-.806-1.945a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.92 6.47a.75.75 0 0 1 1.06 0 7.728 7.728 0 0 1 2.27 5.48c0 2.14-.868 4.078-2.27 5.48a.75.75 0 1 1-1.06-1.06 6.229 6.229 0 0 0 1.83-4.42 6.228 6.228 0 0 0-1.83-4.42.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
