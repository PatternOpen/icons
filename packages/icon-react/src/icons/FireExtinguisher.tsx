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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M7 6.75A3.25 3.25 0 0 0 3.75 10v11.25h6.5V10A3.25 3.25 0 0 0 7 6.75ZM2.25 10a4.75 4.75 0 1 1 9.5 0v12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V10Zm12.239-6.597c1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V13a.75.75 0 0 1-1.28.53l-9-9A.75.75 0 0 1 9 3.25h1.056c1.838 0 3.294 0 4.433.153Zm-3.678 1.348 6.439 6.438c-.003-1.49-.022-2.603-.14-3.478-.135-1.006-.389-1.586-.812-2.01-.423-.422-1.003-.676-2.009-.811-.875-.118-1.988-.137-3.478-.14ZM2.25 4A.75.75 0 0 1 3 3.25h2a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18 12.25a.75.75 0 0 1 .712.513l3 9a.75.75 0 0 1-.712.987h-6a.75.75 0 0 1-.711-.987l3-9A.75.75 0 0 1 18 12.25Zm-1.96 9h3.92L18 15.372l-1.96 5.878ZM7 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM4.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
