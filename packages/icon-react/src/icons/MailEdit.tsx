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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V5.25H2.75v13.5H12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M19.006 13.436a.75.75 0 0 1 1.024.034l2 2a.75.75 0 0 1-.036 1.094l-4 3.5a.75.75 0 0 1-.494.186h-2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .256-.564l4-3.5ZM16.25 17.84v.91h.968l3.185-2.787-.937-.936-3.216 2.813ZM1.4 4.05a.75.75 0 0 1 1.05-.15L12 11.062 21.55 3.9a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
