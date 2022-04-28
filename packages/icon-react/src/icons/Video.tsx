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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3 4.75a.25.25 0 0 0-.25.25v14c0 .138.112.25.25.25h18a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25H3ZM1.25 5c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 21 20.75H3A1.75 1.75 0 0 1 1.25 19V5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-12 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 6 3.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18.25 9a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-17-6A.75.75 0 0 1 2 8.25h3a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 2 7.25ZM3.75 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 3.75 4Zm0 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm12-16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-14.5-5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2 13.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm0-6a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM10.136 8.844a.75.75 0 0 1 .762.02l4 2.5a.75.75 0 0 1 0 1.272l-4 2.5A.75.75 0 0 1 9.75 14.5v-5a.75.75 0 0 1 .386-.656Zm1.114 2.01v2.293L13.085 12l-1.835-1.147Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
