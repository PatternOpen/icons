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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6 2.75a.25.25 0 0 0-.25.25v17.543l2.314-1.653a.75.75 0 0 1 .872 0L12 21.078l3.064-2.188a.75.75 0 0 1 .872 0l2.314 1.653V3a.25.25 0 0 0-.25-.25H6ZM4.25 3c0-.966.783-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v19a.75.75 0 0 1-1.186.61L15.5 20.422l-3.064 2.188a.75.75 0 0 1-.872 0L8.5 20.422 5.436 22.61A.75.75 0 0 1 4.25 22V3Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0-8A.75.75 0 0 1 9 6.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
