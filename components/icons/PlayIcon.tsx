import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const PlayIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 40 48" width={40} height={48} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M0 44.92.07 3.952c.002-1.122.4-2.062 1.192-2.82C2.055.371 2.98-.006 4.035 0c.33 0 .677.05 1.04.148.365.098.71.248 1.037.45l32.225 20.539a3.845 3.845 0 0 1 1.336 1.486c.297.595.444 1.222.44 1.881a4.235 4.235 0 0 1-.447 1.88c-.293.593-.74 1.087-1.34 1.482L6.031 48.296a4.18 4.18 0 0 1-1.038.445c-.362.1-.709.148-1.042.144-1.055-.002-1.978-.383-2.768-1.144-.79-.762-1.185-1.702-1.183-2.82Z"
    />
  </Svg>
);
export default memo(PlayIcon);
