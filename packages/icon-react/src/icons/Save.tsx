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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.5 3.75a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V6.93l-3.405-3.18H4.5Zm-2.25.75A2.25 2.25 0 0 1 4.5 2.25h12.64a.75.75 0 0 1 .512.202l3.86 3.603a.75.75 0 0 1 .238.548V19.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.25 3A.75.75 0 0 1 7 2.25h5.004a.75.75 0 0 1 .75.75l-.004 3.692v.001c0 .442-.289.724-.503.856a1.43 1.43 0 0 1-.747.201h-4c-.254 0-.52-.062-.747-.201-.214-.132-.503-.414-.503-.857V3Zm1.5.75v2.5h3.5l.003-2.5H7.75Zm3.76 2.5h-.003.003Zm-4.02 0h.003-.003Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M3.75 3a.75.75 0 0 1 .75-.75h12.64a.75.75 0 0 1 0 1.5H4.5A.75.75 0 0 1 3.75 3Zm2.5 10a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5.004a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
