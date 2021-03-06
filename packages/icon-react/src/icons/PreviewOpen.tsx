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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M4.45 8.423C6.308 6.883 8.977 5.25 12 5.25c3.022 0 5.692 1.633 7.55 3.173a21.397 21.397 0 0 1 2.829 2.846l.162.204.043.056.012.015.003.005.001.002L22 12l.6.449v.002l-.004.005-.012.015-.043.056-.162.204a21.39 21.39 0 0 1-2.83 2.847c-1.857 1.54-4.527 3.172-7.55 3.172-3.022 0-5.69-1.633-7.549-3.173a21.39 21.39 0 0 1-2.83-2.846 12.344 12.344 0 0 1-.204-.26l-.012-.015-.003-.005-.002-.002L2 12l-.6-.449.002-.002.003-.005.012-.015a7.21 7.21 0 0 1 .205-.26 21.397 21.397 0 0 1 2.83-2.847ZM2 12l-.6-.449a.75.75 0 0 0-.001.897l.6-.448Zm.963 0a19.902 19.902 0 0 0 2.444 2.423C7.17 15.883 9.5 17.25 12 17.25s4.83-1.367 6.592-2.827A19.9 19.9 0 0 0 21.036 12a19.897 19.897 0 0 0-2.444-2.423C16.831 8.117 14.5 6.75 12 6.75S7.169 8.117 5.407 9.577A19.899 19.899 0 0 0 2.963 12ZM22 12l.6.449a.75.75 0 0 0 0-.897L22 12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
