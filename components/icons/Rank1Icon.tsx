import * as React from "react";
import Svg, { Defs, G, Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import { memo } from "react";
const Rank1Icon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#F5FB4E"
        d="M19 0c1.185 0 2.143.95 2.143 2.125V4.25h2.143c1.185 0 2.143.95 2.143 2.125A2.132 2.132 0 0 1 23.286 8.5h-2.143v4.25h10.299A2.547 2.547 0 0 1 34 15.287c0 .425-.107.843-.315 1.215l-6.114 11.123 3.764 4.668c.335.419.522.937.522 1.475a2.368 2.368 0 0 1-2.377 2.357H8.52a2.368 2.368 0 0 1-2.377-2.357c0-.538.18-1.056.522-1.475l3.764-4.668-6.114-11.116A2.536 2.536 0 0 1 4 15.287a2.547 2.547 0 0 1 2.558-2.537h10.3V8.5h-2.144a2.132 2.132 0 0 1-2.143-2.125c0-1.175.958-2.125 2.143-2.125h2.143V2.125C16.857.95 17.815 0 19 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default memo(Rank1Icon);
