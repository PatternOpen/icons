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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M8.978 12.049A3.02 3.02 0 0 1 12 9.033a3.02 3.02 0 0 1 3.023 3.016A3.02 3.02 0 0 1 12 15.065a3.02 3.02 0 0 1-3.022-3.016ZM12 10.533a1.52 1.52 0 0 0-1.523 1.516c0 .835.68 1.516 1.523 1.516a1.52 1.52 0 0 0 1.523-1.516A1.52 1.52 0 0 0 12 10.533ZM8.549 6.989a.75.75 0 0 1-.038 1.06c-2.348 2.188-2.348 5.714 0 7.902A.75.75 0 0 1 7.49 17.05c-2.985-2.782-2.985-7.316 0-10.098a.75.75 0 0 1 1.06.038Zm6.902 0a.75.75 0 0 1 1.06-.038c2.985 2.782 2.985 7.316 0 10.098a.75.75 0 1 1-1.022-1.098c2.348-2.188 2.348-5.714 0-7.902a.75.75 0 0 1-.038-1.06Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.54 4.479a.75.75 0 0 1-.019 1.06c-3.695 3.571-3.695 9.35 0 12.922a.75.75 0 0 1-1.042 1.078C.174 15.38.174 8.622 4.479 4.461a.75.75 0 0 1 1.06.018Zm13-.009a.75.75 0 0 1 1.06-.001 10.697 10.697 0 0 1 0 15.16.75.75 0 0 1-1.058-1.062 9.197 9.197 0 0 0 0-13.036.75.75 0 0 1-.002-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
