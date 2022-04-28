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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18.728 7.818a.75.75 0 0 1-.546.91l-12 3a.75.75 0 1 1-.364-1.456l12-3a.75.75 0 0 1 .91.546Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M18.372 7.349a.75.75 0 0 1 .28 1.023l-4 7a.75.75 0 0 1-1.303-.744l4-7a.75.75 0 0 1 1.023-.28Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.628 7.349a.75.75 0 0 1 1.023.279l4 7a.75.75 0 1 1-1.302.744l-4-7a.75.75 0 0 1 .279-1.023Zm-12 3a.75.75 0 0 1 1.023.279l4 7a.75.75 0 1 1-1.302.744l-4-7a.75.75 0 0 1 .279-1.023Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.372 10.349a.75.75 0 0 1 .28 1.023l-4 7a.75.75 0 0 1-1.303-.744l4-7a.75.75 0 0 1 1.023-.28Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75 4.75 4.75 0 1 1-9.5 0Zm1.587.75a3.251 3.251 0 0 0 6.326 0H2.837ZM13.25 15a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75 4.75 4.75 0 1 1-9.5 0Zm1.587.75a3.251 3.251 0 0 0 6.326 0h-6.326Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
