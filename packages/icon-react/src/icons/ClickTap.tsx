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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M9 6.75a.75.75 0 0 0-.75.75V13a.75.75 0 0 1-1.5 0V7.5a2.25 2.25 0 0 1 4.5 0V13a.75.75 0 0 1-1.5 0V7.5A.75.75 0 0 0 9 6.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.5 11.75a.75.75 0 0 1 .75.75v3.25a5 5 0 0 0 5 5h.5a5 5 0 0 0 5-5V12.5a.75.75 0 0 1 1.5 0v3.25a6.5 6.5 0 0 1-6.5 6.5h-.5a6.5 6.5 0 0 1-6.5-6.5V12.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 11.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-1.5 0V12a2.25 2.25 0 0 1 4.5 0v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15 11.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-1.5 0V12a2.25 2.25 0 0 1 4.5 0v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18 11.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-1.5 0V12a2.25 2.25 0 0 1 4.5 0v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 0-.75-.75ZM4.377 4.081A5.743 5.743 0 0 1 9 1.75a5.74 5.74 0 0 1 4.623 2.331A5.734 5.734 0 0 1 14.75 7.5a.75.75 0 0 1-1.5 0 4.248 4.248 0 0 0-.832-2.526A4.243 4.243 0 0 0 9 3.25a4.24 4.24 0 0 0-3.418 1.724A4.234 4.234 0 0 0 4.75 7.5a.75.75 0 0 1-1.5 0 5.748 5.748 0 0 1 1.127-3.419Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
