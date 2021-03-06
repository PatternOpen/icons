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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M1.25 9.5a6.25 6.25 0 0 1 9.091-5.568.75.75 0 0 1 .398.795l-.41 2.376 4.035 2.241a.75.75 0 0 1 .124 1.225l-3.019 2.588 1.174 1.957a.75.75 0 1 1-1.286.772l-1.5-2.5a.75.75 0 0 1 .155-.955l2.681-2.299-3.557-1.976a.75.75 0 0 1-.375-.783l.4-2.325A4.75 4.75 0 0 0 2.75 9.5c.001 2.462 1.468 4.906 3.469 6.907 1.912 1.913 4.189 3.295 5.782 3.81 1.593-.515 3.87-1.897 5.782-3.81 2.001-2 3.468-4.445 3.468-6.907a4.75 4.75 0 0 0-6.909-4.232.75.75 0 0 1-.682-1.336A6.25 6.25 0 0 1 22.75 9.5c0 3.038-1.783 5.844-3.907 7.968-2.129 2.128-4.735 3.71-6.637 4.253a.75.75 0 0 1-.412 0c-1.902-.543-4.508-2.125-6.637-4.253C3.033 15.344 1.25 12.538 1.25 9.5Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
