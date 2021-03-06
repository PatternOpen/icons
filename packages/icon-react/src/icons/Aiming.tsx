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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 17.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75ZM17.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-16 0a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
