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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="pop-icon-svg" fill="currentColor"><path d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.64-.02-2.98-4.02.74-5.06-.98-5.38-1.88-.18-.46-.96-1.88-1.64-2.26-.56-.3-1.36-1.04-.02-1.06 1.26-.02 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.28-1.78-7.28-7.9 0-1.74.62-3.18 1.64-4.3-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54 1.36 0 2.72.18 4 .54 3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9.58.5 1.08 1.46 1.08 2.96 0 2.14-.02 3.86-.02 4.4 0 .42.3.92 1.1.76A16.026 16.026 0 0 0 32 16c0-8.84-7.16-16-16-16Z"/></svg>
    </span>
  )
}

export default BaseIcon