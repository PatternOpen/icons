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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6 3.25A2.25 2.25 0 0 0 3.75 5.5v13a2.25 2.25 0 0 0 4.5 0v-13A2.25 2.25 0 0 0 6 3.25ZM2.25 5.5a3.75 3.75 0 1 1 7.5 0v13a3.75 3.75 0 1 1-7.5 0v-13ZM18 3.25a2.25 2.25 0 0 0-2.25 2.25v13a2.25 2.25 0 0 0 4.5 0v-13A2.25 2.25 0 0 0 18 3.25ZM14.25 5.5a3.75 3.75 0 1 1 7.5 0v13a3.75 3.75 0 1 1-7.5 0v-13Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.25 18.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM6 16.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm8.25 2.25a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18 16.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 10.5a3.75 3.75 0 0 1 7.5 0 .75.75 0 0 1-1.5 0 2.25 2.25 0 0 0-4.5 0 .75.75 0 0 1-1.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0 .75.75 0 0 1-1.5 0 2.25 2.25 0 0 0-4.5 0 .75.75 0 0 1-1.5 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
