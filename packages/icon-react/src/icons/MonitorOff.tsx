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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.25 5A.75.75 0 0 1 9 4.25h9a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V5.75H9A.75.75 0 0 1 8.25 5Zm-6.537.307a.75.75 0 0 1 .817.163l13 13a.75.75 0 0 1-.53 1.28H2a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .463-.693ZM2.75 7.811V18.25h10.44L2.75 7.81Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M22.316 6.32a.75.75 0 0 1 .434.68v10a.75.75 0 0 1-1.234.573l-4-3.375a.75.75 0 0 1-.266-.573v-3.25a.75.75 0 0 1 .266-.573l4-3.375a.75.75 0 0 1 .8-.107Zm-3.566 4.403v2.553l2.5 2.11V8.614l-2.5 2.11ZM1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
