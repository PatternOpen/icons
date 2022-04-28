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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M21 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-18 8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3 11.25a.75.75 0 0 1 .75.75 8.25 8.25 0 0 0 13.98 5.936.75.75 0 0 1 1.04 1.08A9.72 9.72 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75Zm1.985-6.02A9.724 9.724 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 6.064 6.27a.75.75 0 1 1-1.08-1.04Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
