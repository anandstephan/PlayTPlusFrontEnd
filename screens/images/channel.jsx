import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Channel = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.9974 29.3327C23.3612 29.3327 29.3307 23.3631 29.3307 15.9993C29.3307 8.63555 23.3612 2.66602 15.9974 2.66602C8.6336 2.66602 2.66406 8.63555 2.66406 15.9993C2.66406 23.3631 8.6336 29.3327 15.9974 29.3327Z"
      stroke="#01295F"
      strokeWidth={1.5}
    />
    <Path
      d="M20 12V20"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M24 14.666V17.3327"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 12V20"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 14.666V17.3327"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 9.33398V22.6673"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default Channel;
