import { computed } from "vue";

interface Props {
  /** css尺寸单位字符串 或 以px为单位的数字 */
  size?: string | number;
  /** 图标颜色 */
  color?: string;
  /** 类名 */
  class?: string;
}

export const useRunTime = (props: Props) => {
  const classNames = computed(() => {
    return props.class;
  });
  const rootStyle = computed(() => {
    const style: Record<string, string> = {};
    if (props.color) {
      style["color"] = props.color;
    }
    if (props.size !== undefined) {
      style["--icon-size"] =
        typeof props.size === "string" ? props.size : `${props.size}px`;
    }
    return style;
  });
  return { classNames, rootStyle}
}