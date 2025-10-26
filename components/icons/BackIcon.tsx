import * as React from "react";
import { memo } from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <Path d="m5.95 4.25-5.1 5.1 5.1 5.1" />
      <Path d="M22.95 19.55v-3.4a6.8 6.8 0 0 0-6.8-6.8H.85" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h23.8v23.8H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default memo(BackIcon);
