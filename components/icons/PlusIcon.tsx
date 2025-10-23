import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const PlusIcon = ({
  active = true,
  ...props
}: {
  active?: boolean & SvgProps;
}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill={active ? "#FCF4F4" : "#645f5fff"}
      d="M23.333 13.333h-10v10H10v-10H0V10h10V0h3.333v10h10v3.333Z"
    />
  </Svg>
);
export default memo(PlusIcon);
