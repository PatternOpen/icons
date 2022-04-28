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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.33 2.665A.75.75 0 0 1 9 2.25h6a.75.75 0 0 1 .67.415l1.5 3a.75.75 0 0 1-.67 1.085h-9a.75.75 0 0 1-.67-1.085l1.5-3ZM9.463 3.75l-.75 1.5h6.572l-.75-1.5h-5.07Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.5 6.75a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75h-17Zm-2.25.75A2.25 2.25 0 0 1 3.5 5.25h17a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2.25 2.25h-17a2.25 2.25 0 0 1-2.25-2.25v-12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.25 13.5a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 10.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
