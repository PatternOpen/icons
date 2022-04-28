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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.625 7.886a.75.75 0 0 1 .75 0l6 3.465a.75.75 0 0 1 0 1.298l-6 3.465a.75.75 0 0 1-1.125-.65V8.536a.75.75 0 0 1 .375-.65Zm1.125 1.949v4.33L14.5 12l-3.75-2.165Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
