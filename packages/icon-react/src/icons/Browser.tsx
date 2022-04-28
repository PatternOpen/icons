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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.25C3.41421 8.25 3.75 8.58579 3.75 9V20C3.75 20.1381 3.86192 20.25 4 20.25H20C20.1381 20.25 20.25 20.1381 20.25 20V9C20.25 8.58579 20.5858 8.25 21 8.25C21.4142 8.25 21.75 8.58579 21.75 9V20C21.75 20.9665 20.9665 21.75 20 21.75H4C3.03351 21.75 2.25 20.9665 2.25 20V9C2.25 8.58579 2.58579 8.25 3 8.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3.75C3.86193 3.75 3.75 3.86193 3.75 4V8.25H20.25V4C20.25 3.86192 20.1381 3.75 20 3.75H4ZM2.25 4C2.25 3.0335 3.0335 2.25 4 2.25H20C20.9665 2.25 21.75 3.03351 21.75 4V9C21.75 9.41421 21.4142 9.75 21 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9V4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6.5523 7 7 6.5523 7 6C7 5.4477 6.5523 5 6 5C5.4477 5 5 5.4477 5 6C5 6.5523 5.4477 7 6 7Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9.5523 7 10 6.5523 10 6C10 5.4477 9.5523 5 9 5C8.4477 5 8 5.4477 8 6C8 6.5523 8.4477 7 9 7Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C12.5523 7 13 6.5523 13 6C13 5.4477 12.5523 5 12 5C11.4477 5 11 5.4477 11 6C11 6.5523 11.4477 7 12 7Z"/></svg>
    </span>
  )
}

export default BaseIcon
