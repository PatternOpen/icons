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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12.287 1.32a.75.75 0 0 1 .434.678l.029 9.996a.75.75 0 0 1-.75.752l-6 .004a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .268-.575l5.971-5a.75.75 0 0 1 .798-.105ZM6.75 7.35v3.9l4.498-.004-.023-7.644L6.75 7.35Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.47 5.47a.75.75 0 0 1 .53-.22h5a.75.75 0 0 1 .575.268l5 5.971a.75.75 0 0 1-.573 1.232l-9.996.029a.75.75 0 0 1-.752-.75l-.004-6a.75.75 0 0 1 .22-.53Zm1.28 1.28.004 4.498 7.644-.023L16.65 6.75h-3.9Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18.53 11.47c.14.14.22.331.22.53v5a.75.75 0 0 1-.268.575l-5.971 5a.75.75 0 0 1-1.232-.573l-.029-9.996a.75.75 0 0 1 .75-.752l6-.004a.75.75 0 0 1 .53.22Zm-5.778 1.284.023 7.644 4.475-3.748v-3.9l-4.498.004Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.525 11.469a.75.75 0 0 1 .22.53l.005 6a.75.75 0 0 1-.75.751H7a.75.75 0 0 1-.575-.268l-5-5.971a.75.75 0 0 1 .573-1.232l9.996-.029a.75.75 0 0 1 .531.219Zm-1.279 1.283-7.644.023L7.35 17.25h3.9l-.004-4.498Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
