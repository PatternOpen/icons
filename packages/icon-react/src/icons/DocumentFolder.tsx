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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M10.25 3a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75V3Zm1.5.75v16.5h3.5V3.75h-3.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.25 3a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75V3Zm1.5.75v16.5h3.5V3.75h-3.5ZM4.536 2.41a.75.75 0 0 1 .557-.154l4 .5a.75.75 0 0 1 .653.819l-1.75 17.5a.75.75 0 0 1-.834.67l-4.25-.5a.75.75 0 0 1-.657-.83l2-17.5a.75.75 0 0 1 .281-.505ZM5.66 3.838 3.83 19.843l2.75.323 1.6-16.013-2.522-.315Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18.5 6.75a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75Zm-5 0a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
