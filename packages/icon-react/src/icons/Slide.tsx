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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.75 2.75A.75.75 0 0 1 3.5 2h17a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75v-14Zm1.5.75V16h15.5V3.5H4.25Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.47 16.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L12 17.81l-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4Zm-5.045-3.365a.75.75 0 0 1 .013-1.06L9.26 9.04a.75.75 0 0 1 1.049 0l1.69 1.654 4.455-4.464a.75.75 0 0 1 1.061 1.06l-4.979 4.989a.75.75 0 0 1-1.055.006l-1.697-1.66-2.297 2.242a.75.75 0 0 1-1.06-.013ZM1.25 2.75A.75.75 0 0 1 2 2h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
