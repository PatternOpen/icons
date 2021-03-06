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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75v5.156c0 .318-.2.6-.498.707a2 2 0 0 0-1.32 1.887 2 2 0 0 0 1.32 1.887.75.75 0 0 1 .498.707V20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-5.156c0-.318.2-.6.498-.707a2 2 0 0 0 1.32-1.887 2 2 0 0 0-1.32-1.887.75.75 0 0 1-.498-.707V4.5Zm1.5.75v3.924a3.502 3.502 0 0 1 1.818 3.076 3.502 3.502 0 0 1-1.818 3.076v3.924h18.5v-3.924a3.502 3.502 0 0 1-1.818-3.076c0-1.327.734-2.483 1.818-3.076V5.25H2.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.97 7.47a.75.75 0 0 1 1.06 0L12 9.44l1.97-1.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3.083a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 10.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
