import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M10.125 11.35V1c0-.283-.1-.521-.3-.713a.975.975 0 0 0-.963-.25A.99.99 0 0 0 8.6.15L.45 5.325a.972.972 0 0 0-.338.375 1.07 1.07 0 0 0 0 .95c.074.15.187.275.338.375L8.6 12.2a1.055 1.055 0 0 0 .525.15.98.98 0 0 0 .7-.288c.2-.192.3-.43.3-.712Z"
    />
  </Svg>
);
export default memo(ArrowLeft);
