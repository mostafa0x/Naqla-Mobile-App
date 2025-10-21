import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowRight = (props: SvgProps) => (
  <Svg width={24} viewBox="0 0 24 24" height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M0 11.35V1C0 .717.1.479.3.287a.975.975 0 0 1 .963-.25.99.99 0 0 1 .262.113l8.15 5.175c.15.1.263.225.338.375a1.07 1.07 0 0 1 0 .95.951.951 0 0 1-.338.375L1.525 12.2a1.055 1.055 0 0 1-.525.15.98.98 0 0 1-.7-.288.948.948 0 0 1-.3-.712Z"
    />
  </Svg>
);
const Memo = memo(ArrowRight);
export default Memo;
