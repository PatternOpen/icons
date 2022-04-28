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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M10.75 20.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.815 2.195a.75.75 0 0 1 .685-.445h8.86a.75.75 0 0 1 .684 1.055l-8.028 18a.75.75 0 0 1-.685.445H2.5a.75.75 0 0 1-.685-1.055l8-18Zm1.172 1.055-7.333 16.5h7.19l7.36-16.5h-7.217Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.23 14.941a.75.75 0 0 1 .75-.75h4.014a.75.75 0 1 1 0 1.5H4.979a.75.75 0 0 1-.75-.75Zm1.652-3.706a.75.75 0 0 1 .75-.75h4.014a.75.75 0 1 1 0 1.5H6.632a.75.75 0 0 1-.75-.75ZM7.637 7.3a.75.75 0 0 1 .75-.75H12.4a.75.75 0 0 1 0 1.5H8.387a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.805 1.815a.75.75 0 0 1 .38.99l-8 18a.75.75 0 1 1-1.37-.61l8-18a.75.75 0 0 1 .99-.38Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
