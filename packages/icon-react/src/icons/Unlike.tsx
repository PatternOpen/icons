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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 9.5A6.25 6.25 0 0 1 12 5.163 6.25 6.25 0 0 1 22.75 9.5a.75.75 0 0 1-1.5 0 4.75 4.75 0 0 0-8.637-2.731.75.75 0 0 1-1.226 0A4.75 4.75 0 0 0 2.75 9.5c0 2.462 1.467 4.907 3.47 6.93 1.902 1.92 4.171 3.343 5.78 3.938.488-.18 1.044-.44 1.639-.773a.75.75 0 1 1 .732 1.31 12.68 12.68 0 0 1-2.135.97.749.749 0 0 1-.473 0c-1.882-.626-4.48-2.24-6.608-4.39C3.033 15.344 1.25 12.539 1.25 9.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.008 12.917a.75.75 0 0 1 1.055.111l3.439 4.25a.75.75 0 1 1-1.166.944l-3.44-4.25a.75.75 0 0 1 .112-1.055Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M21.39 12.917a.75.75 0 0 1 .112 1.055l-3.44 4.25a.75.75 0 1 1-1.166-.944l3.44-4.25a.75.75 0 0 1 1.055-.111Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
