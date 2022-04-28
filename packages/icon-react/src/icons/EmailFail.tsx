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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V5.25H2.75v13.5H12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M20.53 14.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.47 14.97a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06ZM1.4 4.05a.75.75 0 0 1 1.05-.15L12 11.062 21.55 3.9a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
