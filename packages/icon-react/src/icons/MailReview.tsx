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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.642 11.34a.75.75 0 0 1 .767.031L12 17.605l9.591-6.234A.75.75 0 0 1 22.75 12v8.41c0 .953-.723 1.84-1.75 1.84H3c-1.027 0-1.75-.887-1.75-1.84V12a.75.75 0 0 1 .392-.66Zm1.108 2.042v7.027c0 .251.172.341.25.341h18c.078 0 .25-.09.25-.34v-7.028l-8.841 5.747a.75.75 0 0 1-.818 0L2.75 13.382Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.618 8.02a.75.75 0 0 1-.192 1.044l-5 3.446a.75.75 0 1 1-.852-1.236l5-3.445a.75.75 0 0 1 1.044.192Zm8.765 0a.75.75 0 0 1 1.043-.191l5 3.446a.75.75 0 0 1-.851 1.235l-5-3.446a.75.75 0 0 1-.192-1.043Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.25 2.5A.75.75 0 0 1 7 1.75h10a.75.75 0 0 1 .75.75v12.207c0 .593-.3 1.145-.796 1.468l-4 2.6a1.75 1.75 0 0 1-1.908 0l-4-2.6a1.75 1.75 0 0 1-.796-1.468V2.5Zm1.5.75v11.457a.25.25 0 0 0 .114.21l4 2.6a.25.25 0 0 0 .272 0l4-2.6a.25.25 0 0 0 .114-.21V3.25h-8.5Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M9.25 6.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
