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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pop-icon-svg" fill="currentColor"><path fill-rule="evenodd" d="M5.79 5.315c-.775 0-1.258.694-1.037 1.35.794 2.351 2.272 5.888 4.477 8.093 2.205 2.205 5.742 3.683 8.093 4.477.656.221 1.35-.262 1.35-1.037v-2.387a.235.235 0 0 0-.12-.206l-2.08-1.156a.235.235 0 0 0-.22-.005l-2.218 1.109a.706.706 0 0 1-.449.062l.133-.693-.133.693h-.002l-.002-.001-.007-.002-.022-.004a3.694 3.694 0 0 1-.308-.079 6.971 6.971 0 0 1-.794-.284 7.078 7.078 0 0 1-2.223-1.485 7.109 7.109 0 0 1-1.487-2.225 7.044 7.044 0 0 1-.35-1.034 3.323 3.323 0 0 1-.016-.07l-.005-.021-.001-.008V10.4s-.001-.001.692-.136l-.693.136a.709.709 0 0 1 .061-.452L9.54 7.73a.235.235 0 0 0-.005-.22L8.383 5.437a.235.235 0 0 0-.206-.121H5.79Zm4.02 5.029v.001c.044.153.117.374.229.635.224.524.596 1.19 1.188 1.781a5.667 5.667 0 0 0 1.778 1.185c.26.11.48.183.632.227l1.985-.992a1.647 1.647 0 0 1 1.537.034l2.08 1.156c.522.29.846.842.846 1.44v2.387c0 1.657-1.565 2.93-3.213 2.374-2.38-.803-6.19-2.365-8.64-4.816-2.451-2.45-4.013-6.26-4.816-8.64-.557-1.648.717-3.213 2.374-3.213h2.387c.598 0 1.15.325 1.44.848l1.151 2.073c.264.476.276 1.05.033 1.537l-.991 1.983Zm3.602-7.991c0-.39.316-.706.706-.706h5.647c.39 0 .706.316.706.706v.369l1.385-.554a.706.706 0 0 1 .968.655v3.765a.706.706 0 0 1-.968.656L20.47 6.69v.369c0 .39-.316.706-.706.706h-5.647a.706.706 0 0 1-.706-.706V2.353Zm5.647 4v-.706a.706.706 0 0 1 .968-.655l1.385.554v-1.68l-1.385.554a.706.706 0 0 1-.968-.655v-.706h-4.235v3.294h4.235Z" clip-rule="evenodd"/></svg>
    </span>
  )
}

export default BaseIcon
