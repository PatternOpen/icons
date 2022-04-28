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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.799 1.254a.735.735 0 0 1 .412 0l8.812 2.574a.735.735 0 0 1 .528.705v5.28a13.624 13.624 0 0 1-9.317 12.925.735.735 0 0 1-.465 0A13.626 13.626 0 0 1 2.45 9.81V4.533c0-.326.216-.613.53-.705l8.82-2.574Zm-7.88 3.83V9.81c0 5.152 3.245 9.734 8.082 11.454a12.155 12.155 0 0 0 8.08-11.451V5.084l-8.077-2.36-8.085 2.36Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M15.214 8.497a.735.735 0 0 1 0 1.039l-5.542 5.541a.735.735 0 0 1-1.039-1.039l5.542-5.541a.735.735 0 0 1 1.039 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.633 8.497a.735.735 0 0 1 1.04 0l5.54 5.541a.735.735 0 0 1-1.038 1.04L8.633 9.535a.735.735 0 0 1 0-1.04Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
