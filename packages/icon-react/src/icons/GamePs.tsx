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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M13.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75v-8Zm1.5.75v6.5h6.5v-6.5h-6.5ZM6.5 1.25a.75.75 0 0 1 .654.382l4.5 8A.75.75 0 0 1 11 10.75H2a.75.75 0 0 1-.654-1.118l4.5-8A.75.75 0 0 1 6.5 1.25Zm-3.218 8h6.436L6.5 3.53 3.282 9.25ZM13.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM18 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.47 13.47a.75.75 0 0 1 1.06 0l8 8a.75.75 0 1 1-1.06 1.06l-8-8a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.53 13.47a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
