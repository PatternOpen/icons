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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M16.47 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-15 15a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l15-15ZM17 3.06 3.06 17 7 20.94 20.94 7 17 3.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.655 3.345a.75.75 0 0 1 0 1.06l-11.25 11.25a.75.75 0 0 1-1.06-1.06l11.25-11.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.97 13.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Zm2.5-2.5a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06Zm2.5-2.5a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Zm2.5-2.5a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06Zm2.5-2.5a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
