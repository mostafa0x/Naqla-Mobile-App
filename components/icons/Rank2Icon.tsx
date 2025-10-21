import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Rank2Icon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#F5EBEB"
      d="M22.384 8.53a1.172 1.172 0 0 1-1.637 1.078l-2.92 7.043H6.16l-2.917-7.04a1.172 1.172 0 1 1 .456-.342l4.078 3.338.98-5.925a1.172 1.172 0 1 1 .69-.087l2.545 5.484 2.551-5.498a1.171 1.171 0 1 1 .684.098l.98 5.925 4.091-3.342a1.172 1.172 0 1 1 2.087-.732Zm-3.36 11.308H4.963v2.813h14.063v-2.813Zm-1.3-2.437H6.276v1.687h11.448v-1.687Z"
    />
  </Svg>
);
export default memo(Rank2Icon);
