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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.266 2.847A.75.75 0 0 1 5 2.25h14a.75.75 0 0 1 .734.597l2.5 12a.75.75 0 0 1-1.468.306L18.39 3.75H5.61L3.234 15.153a.75.75 0 1 1-1.468-.306l2.5-12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.75 15a.75.75 0 0 1 .75-.75h4.955a.75.75 0 0 1 .717.533l.748 2.467h6.16l.748-2.467a.75.75 0 0 1 .718-.533H21.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75V15Zm1.5.75v5h17.5v-5h-3.648l-.748 2.468a.75.75 0 0 1-.718.532H8.364a.75.75 0 0 1-.718-.532l-.748-2.468H3.25Zm5.22-6.28a.75.75 0 0 1 1.06 0L12 11.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
