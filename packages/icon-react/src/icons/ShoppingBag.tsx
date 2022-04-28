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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.929 8.014A.75.75 0 0 1 2.5 7.75h19a.75.75 0 0 1 .74.87l-2.1 13a.75.75 0 0 1-.74.63H4.6a.75.75 0 0 1-.74-.63l-2.1-13a.75.75 0 0 1 .169-.606ZM3.381 9.25l1.858 11.5H18.76l1.858-11.5H3.381Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.75 8.5c0-3.665 2.738-6.75 6.25-6.75s6.25 3.085 6.25 6.75a.75.75 0 0 1-1.5 0c0-2.962-2.187-5.25-4.75-5.25S7.25 5.538 7.25 8.5a.75.75 0 0 1-1.5 0Z" clip-rule="evenodd"/><path d="M8.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path fill-rule="evenodd" d="M9.621 16.08a.75.75 0 0 0-1.245.836L9 16.5l-.624.417.002.002.002.003.005.008.016.022.05.067c.041.055.1.128.176.214.152.17.376.394.673.617a4.45 4.45 0 0 0 2.7.9c1.2 0 2.103-.452 2.7-.9a4.59 4.59 0 0 0 .85-.83l.05-.068.015-.022.005-.008.002-.003.001-.002L15 16.5l.624.416a.75.75 0 0 0-1.245-.836l-.002.002.002-.002-.003.004v-.001h.001a2.164 2.164 0 0 1-.125.154c-.098.11-.25.261-.452.413-.403.302-.999.6-1.8.6-.8 0-1.397-.298-1.8-.6a3.091 3.091 0 0 1-.556-.54 1.103 1.103 0 0 1-.021-.028l-.002-.002" clip-rule="evenodd"/><path d="M15.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
    </span>
  )
}

export default BaseIcon
