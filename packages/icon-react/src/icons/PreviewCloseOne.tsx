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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M12 6.75c-.612 0-1.215.082-1.803.228a.75.75 0 0 1-.362-1.456A8.973 8.973 0 0 1 12 5.25c3.023 0 5.692 1.633 7.55 3.173a21.397 21.397 0 0 1 2.829 2.846 12.388 12.388 0 0 1 .205.26l.012.015.003.005.001.002L22 12c.601.448.601.449.6.449v.002l-.004.005-.012.015a7.369 7.369 0 0 1-.205.26 21.401 21.401 0 0 1-2.83 2.847.75.75 0 1 1-.957-1.155A19.91 19.91 0 0 0 21.037 12a19.897 19.897 0 0 0-2.444-2.423C16.83 8.117 14.5 6.75 12 6.75ZM22 12l.6.449a.75.75 0 0 0 .001-.897L22 12ZM4.45 8.423a.75.75 0 0 1 1 .037l9.07 8.746a.75.75 0 0 1-.338 1.268c-.7.175-1.43.276-2.182.276-3.023 0-5.692-1.633-7.55-3.173a21.39 21.39 0 0 1-2.83-2.846 12.355 12.355 0 0 1-.204-.26l-.012-.015-.003-.005-.001-.002L2 12l-.601-.449.002-.002.003-.005.012-.015a7.161 7.161 0 0 1 .205-.26 21.395 21.395 0 0 1 2.83-2.847ZM2 12l-.601-.449a.75.75 0 0 0 0 .897l.6-.448Zm.963 0a19.903 19.903 0 0 0 2.444 2.423C7.17 15.883 9.5 17.25 12 17.25c.132 0 .263-.004.393-.011L4.9 10.014A20.15 20.15 0 0 0 2.963 12Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.664 9.758a.75.75 0 0 1 .046 1.06 1.75 1.75 0 0 0 2.515 2.432.75.75 0 1 1 1.05 1.07 3.25 3.25 0 0 1-4.67-4.517.75.75 0 0 1 1.059-.045Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon