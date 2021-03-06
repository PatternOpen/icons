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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M16 2.75a5.25 5.25 0 0 0-4.643 7.704.75.75 0 0 1-.132.881L3.061 19.5 4.5 20.94l8.165-8.165a.75.75 0 0 1 .88-.133 5.25 5.25 0 0 0 7.493-6.121l-3.008 3.01a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.061l3.008-3.01A5.253 5.253 0 0 0 16 2.75ZM9.25 8a6.75 6.75 0 0 1 9.906-5.968.75.75 0 0 1 .18 1.193L16.06 6.5l1.44 1.44 3.275-3.276a.75.75 0 0 1 1.193.18 6.75 6.75 0 0 1-8.617 9.366l-8.32 8.32a.75.75 0 0 1-1.061 0l-2.5-2.5a.75.75 0 0 1 0-1.06l8.32-8.32A6.73 6.73 0 0 1 9.25 8Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
