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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 10.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Zm9.25-7.75a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.142 6.641A4.738 4.738 0 0 1 10.5 5.25c1.312 0 2.5.532 3.36 1.391a.75.75 0 0 1-1.062 1.06A3.237 3.237 0 0 0 10.5 6.75c-.897 0-1.709.363-2.298.952a.75.75 0 0 1-1.06-1.06Zm8.939 9.439a.75.75 0 0 1 1.06 0l4.243 4.243a.75.75 0 1 1-1.06 1.06l-4.243-4.242a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
