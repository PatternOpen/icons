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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M10.414 5.532a.75.75 0 0 1 1.055-.118l10 8a.75.75 0 0 1 .15 1.01l-5.5 8a.75.75 0 0 1-1.237-.849l5.105-7.425-9.455-7.564a.75.75 0 0 1-.118-1.054Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.628 1.349a.75.75 0 0 1 .902.12l2 2a.75.75 0 0 1 .121.903l-4 7a.75.75 0 0 1-1.181.158l-5-5a.75.75 0 0 1 .158-1.181l7-4ZM4.225 6.164l3.611 3.611 3.229-5.65-1.19-1.19-5.65 3.229ZM5.25 22a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.5 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
