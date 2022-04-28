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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bc-icon-svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32918 2.66459C8.45622 2.4105 8.71592 2.25 9 2.25H15C15.2841 2.25 15.5438 2.4105 15.6708 2.66459L17.1708 5.66459C17.2871 5.89708 17.2746 6.17319 17.138 6.3943C17.0013 6.61541 16.7599 6.75 16.5 6.75H7.5C7.24007 6.75 6.99867 6.61541 6.86201 6.3943C6.72536 6.17319 6.71293 5.89708 6.82918 5.66459L8.32918 2.66459ZM9.46353 3.75L8.71353 5.25H15.2865L14.5365 3.75H9.46353Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6.75C3.08579 6.75 2.75 7.08579 2.75 7.5V19.5C2.75 19.9142 3.08579 20.25 3.5 20.25H20.5C20.9142 20.25 21.25 19.9142 21.25 19.5V7.5C21.25 7.08579 20.9142 6.75 20.5 6.75H3.5ZM1.25 7.5C1.25 6.25736 2.25736 5.25 3.5 5.25H20.5C21.7426 5.25 22.75 6.25736 22.75 7.5V19.5C22.75 20.7426 21.7426 21.75 20.5 21.75H3.5C2.25736 21.75 1.25 20.7426 1.25 19.5V7.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 13.5C7.25 10.8766 9.37664 8.75 12 8.75C14.6234 8.75 16.75 10.8766 16.75 13.5C16.75 16.1234 14.6234 18.25 12 18.25C9.37664 18.25 7.25 16.1234 7.25 13.5ZM12 10.25C10.2051 10.25 8.75 11.7051 8.75 13.5C8.75 15.2949 10.2051 16.75 12 16.75C13.7949 16.75 15.25 15.2949 15.25 13.5C15.25 11.7051 13.7949 10.25 12 10.25Z"/></svg>
    </span>
  )
}

export default BaseIcon