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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3 4.75a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h18a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25H3ZM1.25 5c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 21 20.75H3A1.75 1.75 0 0 1 1.25 19V5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.43 8.512a.75.75 0 0 1 1.058-.081l3.5 3a.75.75 0 0 1 0 1.139l-3.5 3a.75.75 0 0 1-.976-1.14L8.348 12 5.512 9.57a.75.75 0 0 1-.081-1.058ZM10.75 16a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
