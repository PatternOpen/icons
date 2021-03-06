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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.25 5A.75.75 0 0 1 9 4.25h6a.75.75 0 0 1 .75.75v8.19l6.78 6.78c.141.14.22.331.22.53V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .22-.53l6.78-6.78V5Zm1.5.75v7.75a.75.75 0 0 1-.22.53l-6.78 6.78v.44h18.5v-.44l-6.78-6.78a.75.75 0 0 1-.22-.53V5.75h-4.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.22 14.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M16.22 14.72a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06Zm-8.44 0a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.78 14.72a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0ZM8.25 2A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 2ZM12 12.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm0-4.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.25 17.5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
