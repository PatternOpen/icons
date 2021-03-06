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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 2.75a7.25 7.25 0 0 0-2.735 13.967h5.47A7.253 7.253 0 0 0 12 2.75ZM3.25 10a8.75 8.75 0 1 1 11.898 8.167.75.75 0 0 1-.27.05H9.122a.75.75 0 0 1-.27-.05A8.753 8.753 0 0 1 3.25 10Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.06 16.72a.75.75 0 0 1 .81.684l.32 3.846h3.62l.32-3.845a.75.75 0 1 1 1.495.124l-.34 4.075a1.25 1.25 0 0 1-1.245 1.146H9.96a1.25 1.25 0 0 1-1.246-1.146l-.34-4.075a.75.75 0 0 1 .686-.81ZM9 7.75a.75.75 0 0 1 .75.75v1.787l1.915-.958a.75.75 0 0 1 .67 0l1.915.957V8.5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.085.67L12 10.839l-2.665 1.333A.75.75 0 0 1 8.25 11.5v-3A.75.75 0 0 1 9 7.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
