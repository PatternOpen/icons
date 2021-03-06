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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path d="M6.518 5.957a.75.75 0 0 0-1.036 1.086l1.036-1.086ZM17 17l.505.555a.75.75 0 0 0 .013-1.098L17 17Zm-5.5 5h-.75a.75.75 0 0 0 1.255.555L11.5 22Zm0-20 .505-.555A.75.75 0 0 0 10.75 2h.75ZM17 7l.518.543a.75.75 0 0 0-.014-1.098L17 7ZM5.482 16.957a.75.75 0 0 0 1.036 1.085l-1.036-1.085Zm0-9.914 11 10.5 1.036-1.085-11-10.5-1.036 1.085Zm11.013 9.402-5.5 5 1.01 1.11 5.5-5-1.01-1.11ZM12.25 22V2h-1.5v20h1.5ZM10.995 2.555l5.5 5 1.01-1.11-5.5-5-1.01 1.11Zm5.487 3.902-11 10.5 1.036 1.085 11-10.5-1.036-1.085Z"/></svg>
    </span>
  )
}

export default BaseIcon
