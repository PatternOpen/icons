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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 1.75a.75.75 0 0 1 .65.374l11 19A.75.75 0 0 1 23 22.25H1a.75.75 0 0 1-.65-1.126l11-19A.75.75 0 0 1 12 1.75Zm-9.7 19h19.4L12 3.997 2.3 20.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 16.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm0-8a.75.75 0 0 1 .75.75l.004 5a.75.75 0 0 1-1.5 0l-.004-5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
