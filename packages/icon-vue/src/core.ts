import { computed } from 'vue'

interface Props {
  size?: string | number
  color?: string
  className?: string
}

export const useRunTime = (props: Props) => {
  const rootStyle = computed(() => {
    const style: Record<string, string> = {}
    if (props.color) {
      style.color = props.color
    }
    if (props.size !== undefined) {
      style['--icon-size'] = typeof props.size === 'string' ? props.size : `${props.size}px`
    }
    return style
  })
  return { rootStyle }
}
