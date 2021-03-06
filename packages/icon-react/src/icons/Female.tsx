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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><g clip-path="url(#a)"><path fill-rule="evenodd" d="M19.72 15.356A7.75 7.75 0 1 1 8.76 4.396a7.75 7.75 0 0 1 10.96 10.96Zm-9.9-1.061a6.25 6.25 0 1 0 8.839-8.84 6.25 6.25 0 0 0-8.84 8.84Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.337 21.662a.75.75 0 0 1 0-1.06L8.7 14.236a.75.75 0 1 1 1.06 1.061l-6.363 6.364a.75.75 0 0 1-1.061 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.115 21.308a.75.75 0 0 1-1.06 0L2.69 14.945a.75.75 0 0 1 1.06-1.061l6.364 6.364a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
    </span>
  )
}

export default BaseIcon
