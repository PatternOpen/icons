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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 2A.75.75 0 0 1 2 1.25h6a.75.75 0 0 1 .75.75v17a3.75 3.75 0 1 1-7.5 0V2Zm1.5.75V19a2.25 2.25 0 0 0 4.5 0V2.75h-4.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.742 1.25a.75.75 0 0 1 .53.22l4.25 4.25a.75.75 0 0 1 0 1.06L7.653 21.652A.75.75 0 0 1 6.59 20.59L20.93 6.25l-3.188-3.189-9.213 9.226a.75.75 0 1 1-1.061-1.06l9.743-9.757a.75.75 0 0 1 .53-.22Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.493 16a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1 0-1.5h15v-4.5h-9.007a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
