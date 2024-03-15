import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Advertisment = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24.6693 4.66602H7.33594V27.3327H24.6693V4.66602Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.33073 7.33398H2.66406V24.6673H7.33073V7.33398Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.3307 7.33398H24.6641V24.6673H29.3307V7.33398Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 12L20 16L14 20V12Z"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Advertisment;
