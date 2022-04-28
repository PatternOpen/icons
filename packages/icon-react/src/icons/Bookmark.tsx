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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5 2.75a.25.25 0 0 0-.25.25v18c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25V3a.25.25 0 0 0-.25-.25H5ZM3.25 3c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v18A1.75 1.75 0 0 1 19 22.75H5A1.75 1.75 0 0 1 3.25 21V3Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.75 2a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.292.518L13.5 8.948l-2.458 2.57A.75.75 0 0 1 9.75 11V2Zm1.5.75v6.38l1.708-1.785a.75.75 0 0 1 1.084 0l1.708 1.786V2.75h-4.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.25 2A.75.75 0 0 1 5 1.25h14a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 2Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
