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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.148 4.406-9.25 9.75-9.25s9.75 4.102 9.75 9.25a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75Zm1.538-.75h16.424c-.4-3.896-3.889-7-8.212-7s-7.811 3.104-8.212 7Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 11.254a.75.75 0 0 1 .75.75v7.269c0 1.928-1.587 3.477-3.5 3.477s-3.5-1.549-3.5-3.477a.75.75 0 1 1 1.5 0c0 1.084.9 1.977 2 1.977s2-.893 2-1.977v-7.269a.75.75 0 0 1 .75-.75ZM12 1.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
