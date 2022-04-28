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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M3.25 9.5c0-4.601 3.964-8.25 8.75-8.25s8.75 3.649 8.75 8.25c0 3.533-2.156 6.835-4.183 9.178a30.57 30.57 0 0 1-3.752 3.635 16.764 16.764 0 0 1-.337.266l-.02.015-.005.004-.002.001S12.45 22.6 12 22l-.45.6-.003-.002-.005-.004-.02-.015a27.375 27.375 0 0 1-1.27-1.056 30.56 30.56 0 0 1-2.82-2.845C5.407 16.335 3.25 13.033 3.25 9.5ZM12 22l-.45.6c.266.2.633.2.9 0L12 22Zm0-.958a29.047 29.047 0 0 0 3.433-3.345c1.973-2.282 3.817-5.23 3.817-8.197 0-3.683-3.2-6.75-7.25-6.75S4.75 5.817 4.75 9.5c0 2.967 1.844 5.915 3.817 8.197A29.054 29.054 0 0 0 12 21.042Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.5 6.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.75 7a.75.75 0 0 1 .75-.75h3a2.75 2.75 0 0 1 0 5.5h-3a.75.75 0 0 1-.75-.75V7Zm1.5.75v2.5h2.25a1.25 1.25 0 0 0 0-2.5h-2.25Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
