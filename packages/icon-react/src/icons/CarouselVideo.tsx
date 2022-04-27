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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 3.5C4.75 3.08579 5.08579 2.75 5.5 2.75H18.5C18.9142 2.75 19.25 3.08579 19.25 3.5V20.5C19.25 20.9142 18.9142 21.25 18.5 21.25H5.5C5.08579 21.25 4.75 20.9142 4.75 20.5V3.5ZM6.25 4.25V19.75H17.75V4.25H6.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 5.5C1.25 5.08579 1.58579 4.75 2 4.75H5.5C5.91421 4.75 6.25 5.08579 6.25 5.5V18.5C6.25 18.9142 5.91421 19.25 5.5 19.25H2C1.58579 19.25 1.25 18.9142 1.25 18.5V5.5ZM2.75 6.25V17.75H4.75V6.25H2.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.75 5.5C17.75 5.08579 18.0858 4.75 18.5 4.75H22C22.4142 4.75 22.75 5.08579 22.75 5.5V18.5C22.75 18.9142 22.4142 19.25 22 19.25H18.5C18.0858 19.25 17.75 18.9142 17.75 18.5V5.5ZM19.25 6.25V17.75H21.25V6.25H19.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6461 9.33875C10.89 9.20823 11.1859 9.22254 11.416 9.37596L14.416 11.376C14.6247 11.5151 14.75 11.7492 14.75 12C14.75 12.2508 14.6247 12.4849 14.416 12.624L11.416 14.624C11.1859 14.7775 10.89 14.7918 10.6461 14.6613C10.4022 14.5307 10.25 14.2766 10.25 14V10C10.25 9.7234 10.4022 9.46926 10.6461 9.33875ZM11.75 11.4014V12.5986L12.6479 12L11.75 11.4014Z"/></svg>
    </span>
  )
}

export default BaseIcon
