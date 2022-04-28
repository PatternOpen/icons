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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M21.346 7.335a.75.75 0 0 1 .32 1.011c-.373.716-.926 1.357-1.602 1.912C18.18 11.802 15.24 12.75 12 12.75s-6.18-.948-8.064-2.492c-.676-.554-1.229-1.196-1.601-1.912a.75.75 0 0 1 1.33-.692c.263.503.672.993 1.222 1.444C6.44 10.37 9.017 11.25 12 11.25c2.982 0 5.56-.879 7.113-2.152.55-.451.96-.94 1.222-1.444a.75.75 0 0 1 1.011-.32Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.294 11.275a.75.75 0 0 1 .919.53l1.035 3.864a.75.75 0 0 1-1.449.389l-1.035-3.864a.75.75 0 0 1 .53-.919Zm3.852-1.129a.75.75 0 0 1 1.061 0l2.828 2.829a.75.75 0 0 1-1.06 1.06l-2.829-2.828a.75.75 0 0 1 0-1.06Zm-12.287 0a.75.75 0 0 1 0 1.061L3.03 14.036a.75.75 0 1 1-1.06-1.061l2.828-2.829a.75.75 0 0 1 1.06 0Zm3.834 1.129a.75.75 0 0 1 .53.92l-1.035 3.863a.75.75 0 1 1-1.448-.389l1.035-3.863a.75.75 0 0 1 .918-.53Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
