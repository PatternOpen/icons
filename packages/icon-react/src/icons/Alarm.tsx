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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 8.25a4.25 4.25 0 0 0-4.25 4.25v7.25h8.5V12.5A4.25 4.25 0 0 0 12 8.25ZM6.25 12.5a5.75 5.75 0 0 1 11.5 0v8a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-8ZM12 1.75a.75.75 0 0 1 .75.75V4a.75.75 0 0 1-1.5 0V2.5a.75.75 0 0 1 .75-.75Zm6.428 2.34a.75.75 0 0 1 .092 1.056l-.964 1.15a.75.75 0 1 1-1.15-.965l.965-1.149a.75.75 0 0 1 1.057-.092Zm3.42 5.923a.75.75 0 0 1-.608.87l-1.478.26a.75.75 0 0 1-.26-1.477l1.477-.26a.75.75 0 0 1 .869.607Zm-19.696.001a.75.75 0 0 1 .869-.609l1.477.26a.75.75 0 1 1-.26 1.478l-1.477-.26a.75.75 0 0 1-.609-.87Zm3.42-5.924a.75.75 0 0 1 1.056.092l.964 1.149a.75.75 0 0 1-1.149.964L5.48 5.146a.75.75 0 0 1 .093-1.056Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 20.5a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
