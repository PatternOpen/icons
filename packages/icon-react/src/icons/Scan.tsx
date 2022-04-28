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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.75 12a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 2.75a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-1.5 0v-17a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path d="M4.5 2.5h-2v2h2v-2Zm4.5 0H7v2h2v-2Zm8 0h-2v2h2v-2Zm4.5 0h-2v2h2v-2Zm0 4.5h-2v2h2V7Zm-17 0h-2v2h2V7Zm0 12.5h-2v2h2v-2Zm4.5 0H7v2h2v-2Zm8 0h-2v2h2v-2Zm4.5 0h-2v2h2v-2Zm0-4.5h-2v2h2v-2Zm-17 0h-2v2h2v-2Z"/></svg>
    </span>
  )
}

export default BaseIcon
