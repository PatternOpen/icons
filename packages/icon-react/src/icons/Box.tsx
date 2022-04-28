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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.75C3.86193 6.75 3.75 6.86193 3.75 7V20C3.75 20.1381 3.86193 20.25 4 20.25H20C20.1381 20.25 20.25 20.1381 20.25 20V7C20.25 6.86193 20.1381 6.75 20 6.75H4ZM2.25 7C2.25 6.0335 3.0335 5.25 4 5.25H20C20.9665 5.25 21.75 6.0335 21.75 7V20C21.75 20.9665 20.9665 21.75 20 21.75H4C3.0335 21.75 2.25 20.9665 2.25 20V7Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.22461 12.0042C8.22461 11.5899 8.5604 11.2542 8.97461 11.2542H14.9746C15.3888 11.2542 15.7246 11.5899 15.7246 12.0042C15.7246 12.4184 15.3888 12.7542 14.9746 12.7542H8.97461C8.5604 12.7542 8.22461 12.4184 8.22461 12.0042Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.93558 2.00612C6.07799 1.84336 6.28374 1.75 6.50001 1.75H17.5C17.7163 1.75 17.922 1.84336 18.0644 2.00612L21.5644 6.00612C21.8372 6.31785 21.8056 6.79167 21.4939 7.06443C21.1822 7.33719 20.7083 7.30561 20.4356 6.99388L17.1597 3.25H6.84034L3.56444 6.99388C3.29168 7.30561 2.81786 7.33719 2.50613 7.06443C2.1944 6.79167 2.16282 6.31785 2.43558 6.00612L5.93558 2.00612Z"/></svg>
    </span>
  )
}

export default BaseIcon
