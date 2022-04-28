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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.75C12.2676 1.75 12.515 1.89261 12.6491 2.12422L23.6491 21.1242C23.7834 21.3563 23.7837 21.6424 23.6497 21.8746C23.5158 22.1069 23.2681 22.25 23 22.25H1C0.73189 22.25 0.484172 22.1069 0.350257 21.8746C0.216341 21.6424 0.216598 21.3563 0.35093 21.1242L11.3509 2.12422C11.485 1.89261 11.7324 1.75 12 1.75ZM2.30083 20.75H21.6992L12 3.9969L2.30083 20.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.5C11.25 17.0858 11.5858 16.75 12 16.75Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9994 8.75024C12.4136 8.7499 12.7497 9.08541 12.75 9.49962L12.7542 14.4994C12.7545 14.9136 12.419 15.2497 12.0048 15.25C11.5906 15.2503 11.2545 14.9148 11.2542 14.5006L11.25 9.50087C11.2497 9.08665 11.5852 8.75059 11.9994 8.75024Z"/></svg>
    </span>
  )
}

export default BaseIcon