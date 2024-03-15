import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Subscription = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.66406 6.66732C2.66406 5.93094 3.26102 5.33398 3.9974 5.33398H27.9974C28.7338 5.33398 29.3307 5.93094 29.3307 6.66732V25.334C29.3307 26.0704 28.7338 26.6673 27.9974 26.6673H3.9974C3.26102 26.6673 2.66406 26.0704 2.66406 25.334V6.66732Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M2.66406 10.666H29.3307"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 21.334H24"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.3359 6.66602V17.3327"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.66406 6.66602V17.3327"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Subscription;
