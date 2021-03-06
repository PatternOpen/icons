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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M11.556 1.396a.75.75 0 0 1 .888 0l2.648 1.947a7.75 7.75 0 0 1 3.158 6.243V18.5a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75V9.586a7.75 7.75 0 0 1 3.158-6.243l2.648-1.947ZM12 2.93 9.797 4.55A6.25 6.25 0 0 0 7.25 9.586v8.164h9.5V9.586a6.25 6.25 0 0 0-2.547-5.035L12 2.931Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.787 7.807a.75.75 0 0 1 .463.693V14a.75.75 0 0 1-.415.67l-3 1.5a.75.75 0 0 1-1.085-.67v-4a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 .817-.163ZM4.25 11.811v2.476l1.5-.75V10.31l-1.5 1.5Zm12.963-4.004a.75.75 0 0 1 .817.163l3 3c.141.14.22.331.22.53v4a.75.75 0 0 1-1.085.67l-3-1.5a.75.75 0 0 1-.415-.67V8.5a.75.75 0 0 1 .463-.693Zm1.037 2.504v3.226l1.5.75V11.81l-1.5-1.5ZM9 18.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
