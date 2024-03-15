import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Trophy = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 21.334V24.0007"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 28L12.46 24H19.3617L22 28H10Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.9974 14.0007V7.33398H2.66406C2.66406 11.7785 5.33073 14.0007 7.9974 14.0007Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 14.0007V7.33398H29.3333C29.3333 11.7785 26.6667 14.0007 24 14.0007Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 19.9993C20.4183 19.9993 24 16.3123 24 11.7641V2.66602H8V11.7641C8 16.3123 11.5817 19.9993 16 19.9993Z"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default Trophy;
