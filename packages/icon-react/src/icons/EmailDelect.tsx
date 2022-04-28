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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 4.5A.75.75 0 0 1 2 3.75h20a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V5.25H2.75v13.5H12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75v-15Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1.4 4.05a.75.75 0 0 1 1.05-.15L12 11.062 21.55 3.9a.75.75 0 0 1 .9 1.2l-10 7.5a.75.75 0 0 1-.9 0l-10-7.5a.75.75 0 0 1-.15-1.05Zm14.02 10.974a.75.75 0 0 1 .58-.274h5a.75.75 0 0 1 .735.897l-1 5a.75.75 0 0 1-.735.603h-3a.75.75 0 0 1-.735-.603l-1-5a.75.75 0 0 1 .155-.623Zm1.495 1.226.7 3.5h1.77l.7-3.5h-3.17Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M19.336 12.83a.75.75 0 0 1 .335 1.005l-1 2a.75.75 0 1 1-1.342-.67l1-2a.75.75 0 0 1 1.007-.336Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
