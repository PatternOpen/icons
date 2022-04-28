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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M13.742 2.695a6.724 6.724 0 0 1 2.625.128 6.665 6.665 0 0 1 3.098 1.758l-.49.49.49-.49a6.665 6.665 0 0 1 1.759 3.1c.215.858.258 1.752.128 2.624a.692.692 0 0 1-1.37-.204 5.337 5.337 0 0 0-.101-2.084 5.279 5.279 0 0 0-1.395-2.456 5.28 5.28 0 0 0-2.456-1.395 5.339 5.339 0 0 0-2.084-.102.692.692 0 0 1-.204-1.37Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M13.914 5.998a3.458 3.458 0 0 1 2.96.976 3.457 3.457 0 0 1 .976 2.96.692.692 0 1 1-1.37-.204 2.073 2.073 0 0 0-.585-1.777m0 0a2.073 2.073 0 0 0-1.777-.585.692.692 0 1 1-.204-1.37m-8.236-.555c-.76 0-1.233.681-1.016 1.324.778 2.306 2.228 5.776 4.39 7.938 2.163 2.162 5.632 3.612 7.938 4.39.643.218 1.324-.256 1.324-1.016v-2.341a.23.23 0 0 0-.119-.202l-2.04-1.134a.23.23 0 0 0-.215-.005l-2.175 1.088a.693.693 0 0 1-.44.06l.13-.68-.13.68h-.005l-.007-.002-.02-.004-.069-.016a6.86 6.86 0 0 1-1.013-.34 6.941 6.941 0 0 1-2.18-1.457 6.972 6.972 0 0 1-1.459-2.182 6.904 6.904 0 0 1-.343-1.014 3.343 3.343 0 0 1-.016-.069l-.004-.02-.001-.008v-.002l-.001-.001.68-.133-.68.132a.692.692 0 0 1 .06-.442L9.355 7.81a.23.23 0 0 0-.005-.215L8.221 5.562a.23.23 0 0 0-.202-.119H5.678Zm3.943 4.933v.001c.043.15.115.367.224.623.22.514.585 1.166 1.165 1.747m0 0c.58.58 1.232.944 1.744 1.162.255.108.471.18.62.222h.001l1.946-.972a1.616 1.616 0 0 1 1.507.033l-.313.563.313-.563 2.04 1.134c.513.285.83.825.83 1.412v2.341c0 1.625-1.534 2.874-3.15 2.329-2.336-.788-6.071-2.32-8.475-4.724C5.67 13.28 4.137 9.545 3.35 7.21l.61-.206-.61.206c-.546-1.617.703-3.151 2.328-3.151H8.02c.587 0 1.128.318 1.413.831l1.129 2.034c.258.466.27 1.03.032 1.507l-.972 1.945" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
