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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.5 3.75a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75h-15Zm-2.25.75A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 8A.75.75 0 0 1 3 7.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8Zm9.22 5.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06L12 15.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06l2-2Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3 4.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 3 4.25Zm18 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
