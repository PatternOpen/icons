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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.713 1.307a.75.75 0 0 1 .817.163l20 20a.75.75 0 0 1-.53 1.28H2a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .463-.693ZM2.75 3.811V21.25h17.44L2.75 3.81Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.213 10.807a.75.75 0 0 1 .817.163l6 6a.75.75 0 0 1-.53 1.28h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.439h3.44l-3.44-3.44ZM15 19.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM1.25 18a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0-3A.75.75 0 0 1 2 8.25h1.5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
