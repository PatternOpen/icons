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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6.354 3.12A.75.75 0 0 1 7 2.75h10a.75.75 0 0 1 .647.37l5 8.5a.75.75 0 0 1 0 .76l-5 8.5a.75.75 0 0 1-.647.37H7a.75.75 0 0 1-.646-.37l-5-8.5a.75.75 0 0 1 0-.76l5-8.5Zm1.075 1.13L2.87 12l4.56 7.75h9.141L21.13 12l-4.56-7.75H7.43Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
