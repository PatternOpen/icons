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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.766 2.847A.75.75 0 0 1 4.5 2.25h15a.75.75 0 0 1 .734.597l2.5 12a.75.75 0 0 1-1.468.306L18.89 3.75H5.11L2.734 15.153a.75.75 0 1 1-1.468-.306l2.5-12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 15a.75.75 0 0 1 .75-.75h5.455a.75.75 0 0 1 .717.533l.748 2.467h6.16l.748-2.467a.75.75 0 0 1 .718-.533H22a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V15Zm1.5.75v5h18.5v-5h-4.148l-.748 2.468a.75.75 0 0 1-.718.532H8.364a.75.75 0 0 1-.718-.532l-.748-2.468H2.75Zm13.28-8.28a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.105-.049l-2-2.393a.75.75 0 1 1 1.15-.962l1.475 1.764 3.42-3.42a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
