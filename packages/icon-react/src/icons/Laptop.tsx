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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4Zm1.5.75v8.5h14.5v-8.5H4.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.22 13.283a.75.75 0 0 1 .497.938L3.015 19.75h17.97l-1.702-5.53a.75.75 0 1 1 1.434-.44l2 6.5a.75.75 0 0 1-.717.97H2a.75.75 0 0 1-.717-.97l2-6.5a.75.75 0 0 1 .938-.497Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.235 17.274a.75.75 0 0 1 .715-.524h4.1a.75.75 0 0 1 .715.524l.95 3a.75.75 0 0 1-.715.976H9a.75.75 0 0 1-.715-.976l.95-3Zm1.264.976-.475 1.5h3.952l-.475-1.5h-3.002Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
