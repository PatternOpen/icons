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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2.75C4.86193 2.75 4.75 2.86193 4.75 3V21C4.75 21.1381 4.86192 21.25 5 21.25H19C19.1381 21.25 19.25 21.1381 19.25 21V3C19.25 2.86192 19.1381 2.75 19 2.75H5ZM3.25 3C3.25 2.0335 4.0335 1.25 5 1.25H19C19.9665 1.25 20.75 2.03351 20.75 3V21C20.75 21.9665 19.9665 22.75 19 22.75H5C4.03351 22.75 3.25 21.9665 3.25 21V3Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2C9.75 1.58579 10.0858 1.25 10.5 1.25H16.5C16.9142 1.25 17.25 1.58579 17.25 2V11C17.25 11.3064 17.0636 11.582 16.7793 11.6961C16.495 11.8102 16.1698 11.7398 15.958 11.5184L13.5 8.94868L11.042 11.5184C10.8302 11.7398 10.505 11.8102 10.2207 11.6961C9.93636 11.582 9.75 11.3064 9.75 11V2ZM11.25 2.75V9.13088L12.958 7.34523C13.0995 7.19731 13.2953 7.11365 13.5 7.11365C13.7047 7.11365 13.9005 7.19731 14.042 7.34523L15.75 9.13088V2.75H11.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 2C4.25 1.58579 4.58579 1.25 5 1.25H19C19.4142 1.25 19.75 1.58579 19.75 2C19.75 2.41421 19.4142 2.75 19 2.75H5C4.58579 2.75 4.25 2.41421 4.25 2Z"/></svg>
    </span>
  )
}

export default BaseIcon
