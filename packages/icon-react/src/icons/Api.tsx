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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M15.394 5.21c-.89.135-1.614.57-1.864.82l-.97.97L17 11.44l.97-.97c.25-.25.685-.973.82-1.863.129-.851-.025-1.781-.82-2.577-.796-.795-1.726-.949-2.576-.82Zm-.225-1.483c1.212-.183 2.657.038 3.861 1.243 1.205 1.204 1.426 2.65 1.243 3.861-.178 1.173-.743 2.2-1.243 2.7l-1.5 1.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.061l1.5-1.5c.5-.5 1.527-1.065 2.699-1.243Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM7 10.75a.75.75 0 0 1 .53.22l5.5 5.5a.75.75 0 0 1 0 1.06l-1.5 1.5c-.5.5-1.527 1.065-2.7 1.243-1.21.183-2.656-.038-3.86-1.243m0 0c-1.205-1.204-1.427-2.65-1.243-3.861.177-1.172.742-2.2 1.242-2.7l1.5-1.5A.75.75 0 0 1 7 10.75m0 1.81-.969.97c-.25.25-.685.973-.82 1.864-.129.85.024 1.78.82 2.576.795.795 1.725.949 2.576.82.89-.135 1.613-.57 1.863-.82l.97-.97L7 12.56Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.03 13.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm-8 4.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0Zm4.5-8a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
