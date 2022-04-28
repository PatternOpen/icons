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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M7.125 5.288a.75.75 0 0 1 .75 0l10.5 6.062a.75.75 0 0 1 0 1.3l-10.5 6.062a.75.75 0 0 1-1.125-.65V5.938a.75.75 0 0 1 .375-.65ZM8.25 7.237v9.526L16.5 12 8.25 7.237Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
