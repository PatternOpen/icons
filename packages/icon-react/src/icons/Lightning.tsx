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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.836 1.652A.75.75 0 0 1 9.5 1.25h9a.75.75 0 0 1 .59 1.213L14.543 8.25H20.5a.75.75 0 0 1 .551 1.259l-12 13a.75.75 0 0 1-1.276-.7l2.252-8.559H4a.75.75 0 0 1-.664-1.098l5.5-10.5ZM9.954 2.75l-4.714 9H11a.75.75 0 0 1 .725.94l-1.733 6.588 8.795-9.528H13a.75.75 0 0 1-.59-1.213l4.547-5.787H9.954Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
