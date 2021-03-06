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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 6A.75.75 0 0 1 2 5.25h20a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V6Zm1.5.75v12.5h18.5V6.75H2.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.25 13a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM5.25 11a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM4 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM18.721 1.794a.75.75 0 0 1-.515.927l-14 4a.75.75 0 1 1-.412-1.442l14-4a.75.75 0 0 1 .927.515Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
