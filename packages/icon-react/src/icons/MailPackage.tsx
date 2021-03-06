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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 9A.75.75 0 0 1 2 8.25h20a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V9Zm1.5.75v10.5h18.5V9.75H2.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.4 8.55a.75.75 0 0 1 1.05-.15L12 15.562 21.55 8.4a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 9A.75.75 0 0 1 2 8.25h10a.75.75 0 0 1 0 1.5H2.75v6.75a.75.75 0 0 1-1.5 0V9Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.25 9a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V9.75H12a.75.75 0 0 1-.75-.75Zm-6-3A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6Zm2-3A.75.75 0 0 1 8 2.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 3Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
