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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Zm9.25-7.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.75 10.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm9.331 5.58a.75.75 0 0 1 1.06 0l4.243 4.243a.75.75 0 1 1-1.06 1.06l-4.243-4.242a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
