export interface IconProps {
  /** css尺寸单位字符串 或 以px为单位的数字 */
  size?: string | number
  /** 图标颜色 */
  color?: string
  /** 类名 */
  className?: string
}

export const useRunTime = (props: IconProps) => {
  const rootStyle: Record<string, string> = {}
  if (props.color) {
    rootStyle.color = props.color
  }
  if (props.size !== undefined) {
    rootStyle['--icon-size'] = typeof props.size === 'string' ? props.size : `${props.size}px`
  }
  return {
    rootStyle,
  }
}
