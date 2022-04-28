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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 18.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm6.75-7.25a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-17.5 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm4.773 15.523a.75.75 0 0 1 1.061 0l1.768 1.768a.75.75 0 1 1-1.06 1.06l-1.769-1.767a.75.75 0 0 1 0-1.06Zm2.475-12.728a.75.75 0 0 1 0 1.06l-1.768 1.77a.75.75 0 1 1-1.06-1.061l1.768-1.768a.75.75 0 0 1 1.06 0ZM6.873 16.42a.75.75 0 0 1 0 1.06l-1.767 1.768a.75.75 0 0 1-1.061-1.06l1.768-1.769a.75.75 0 0 1 1.06 0ZM4.398 4.399a.75.75 0 0 1 1.061 0l1.768 1.767a.75.75 0 1 1-1.06 1.061l-1.77-1.768a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
