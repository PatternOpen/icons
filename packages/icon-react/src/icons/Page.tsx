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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.5 2.75a.75.75 0 0 0-.75.75v17c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75v-17a.75.75 0 0 0-.75-.75h-17Zm-2.25.75A2.25 2.25 0 0 1 3.5 1.25h17a2.25 2.25 0 0 1 2.25 2.25v17a2.25 2.25 0 0 1-2.25 2.25h-17a2.25 2.25 0 0 1-2.25-2.25v-17Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 8.667a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.667 7.917a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0V8.667a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
