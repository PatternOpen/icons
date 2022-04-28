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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M6 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM1.75 17.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM18 14.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-4.25 2.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.212 2.763a.75.75 0 0 1-.475.948l-1.632.545a7.374 7.374 0 0 0-.687.248.639.639 0 0 0-.12.07l-.001.002s-.003.004-.005.012a.64.64 0 0 0-.023.123 7.372 7.372 0 0 0-.019.73V17a.75.75 0 0 1-1.5 0V5.406c0-.317 0-.615.028-.865a1.73 1.73 0 0 1 .302-.844m4.132-.934a.75.75 0 0 0-.95-.475l.95.475Zm-.95-.475-1.632.545 1.633-.545Zm-1.632.545Zm0 0-.033.01.033-.01Zm-.033.01c-.301.101-.584.195-.812.301l.812-.3Zm-.812.301a1.73 1.73 0 0 0-.705.553l.705-.553Zm15.004-.381a.75.75 0 0 1 .948-.475l1.633.545.034.01c.3.101.583.195.811.301.254.118.508.28.705.553.197.273.27.566.302.844.028.25.028.548.028.865V17a.75.75 0 0 1-1.5 0V5.441c0-.365 0-.576-.018-.73a.644.644 0 0 0-.023-.123l-.005-.012-.001-.001v-.001l-.011-.009a.64.64 0 0 0-.11-.06 7.362 7.362 0 0 0-.687-.25l-1.632-.544a.75.75 0 0 1-.474-.948ZM8.75 17a3.25 3.25 0 0 1 6.5 0 .75.75 0 0 1-1.5 0 1.75 1.75 0 1 0-3.5 0 .75.75 0 0 1-1.5 0Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon