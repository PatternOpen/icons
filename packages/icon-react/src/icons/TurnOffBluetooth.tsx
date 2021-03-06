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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M10.003 1.328a.75.75 0 0 1 .787.075l7.293 5.556a.75.75 0 0 1-.06 1.234l-3.59 2.223a.75.75 0 0 1-.938-.121L9.793 6.406a.75.75 0 0 1-.207-.517V2a.75.75 0 0 1 .417-.672Zm1.083 2.186V5.59l3.076 3.23 2.145-1.327-5.221-3.978ZM9.953 14.17a.75.75 0 0 1 .74-.017l5.912 3.173a.75.75 0 0 1 .066 1.282l-5.912 4.013A.75.75 0 0 1 9.588 22v-7.186a.75.75 0 0 1 .365-.644Zm1.135 1.897v4.517l3.716-2.522-3.716-1.995ZM1.35 5.876A.75.75 0 0 1 2.374 5.6l20 11.5a.75.75 0 1 1-.748 1.3l-20-11.5a.75.75 0 0 1-.276-1.024Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.05 14.578a.75.75 0 0 1-.477.948l-6.616 2.186a.75.75 0 1 1-.47-1.424l6.615-2.186a.75.75 0 0 1 .947.476Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
