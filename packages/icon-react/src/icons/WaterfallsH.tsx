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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.25 3A.75.75 0 0 1 3 2.25h7a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3Zm1.5.75v4h5.5v-4h-5.5Zm9.5 11.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5.5Zm1.5.75v4h5.5v-4h-5.5ZM13.25 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75V3Zm1.5.75v7h5.5v-7h-5.5ZM2.25 12.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-8.5Zm1.5.75v7h5.5v-7h-5.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
