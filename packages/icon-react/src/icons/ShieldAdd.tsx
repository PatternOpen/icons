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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.794.78a.75.75 0 0 1 .42 0l8.996 2.628a.75.75 0 0 1 .54.72v5.389a13.908 13.908 0 0 1-9.512 13.195.75.75 0 0 1-.474 0A13.91 13.91 0 0 1 2.25 9.514V4.128a.75.75 0 0 1 .54-.72L11.794.78ZM3.75 4.69v4.824a12.41 12.41 0 0 0 8.251 11.693 12.408 12.408 0 0 0 8.249-11.69V4.69l-8.246-2.409-8.254 2.41Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.975 6.725a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.225 11.475a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
