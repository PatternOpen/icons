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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path d="M10.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm8.5 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"/><path fill-rule="evenodd" d="M1.876 2.584a.75.75 0 0 1 1.04-.208l4.5 3a.75.75 0 0 1 .315.458L10.1 16.25h8.84l2.059-7H12.5a.75.75 0 0 1 0-1.5H22a.75.75 0 0 1 .72.962l-2.5 8.5a.75.75 0 0 1-.72.538h-10a.75.75 0 0 1-.731-.584L6.335 6.458l-4.25-2.834a.75.75 0 0 1-.209-1.04Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.75 13a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
