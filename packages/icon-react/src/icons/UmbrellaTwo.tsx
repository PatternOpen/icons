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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M13.5 11.25a.75.75 0 0 1 .75.75v6.563c0 .495-.045 1.46-.364 2.328-.16.439-.409.9-.8 1.258-.409.372-.94.601-1.586.601-1.265 0-1.973-.84-2.325-1.61a5.085 5.085 0 0 1-.425-1.953.75.75 0 0 1 1.5 0c0 .242.061.831.29 1.33.219.48.51.733.96.733a.796.796 0 0 0 .574-.21c.154-.14.292-.362.404-.666.227-.616.272-1.37.272-1.811V12a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.86 11.25h18.28c-.266-1.498-.92-3.418-2.14-5.051-1.434-1.922-3.645-3.449-7-3.449S6.434 4.277 5 6.199C3.78 7.832 3.126 9.752 2.86 11.25Zm.937-5.949C5.473 3.057 8.105 1.25 12 1.25c3.895 0 6.527 1.807 8.203 4.051 1.653 2.216 2.378 4.856 2.544 6.629a.75.75 0 0 1-.747.82H2a.75.75 0 0 1-.747-.82c.167-1.773.89-4.412 2.544-6.629Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.988 4.93a.75.75 0 0 1 .081 1.058l-3 3.5a.75.75 0 0 1-1.1.042l-2-2a.75.75 0 0 1 1.061-1.06l1.428 1.427 2.473-2.885a.75.75 0 0 1 1.057-.081Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
