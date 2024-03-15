import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Market = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 8.40039V27.3337C4 28.0701 4.59695 28.6671 5.33333 28.6671H26.6667C27.4031 28.6671 28 28.0701 28 27.3337V8.40039H4Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M28 8.40065L24.2222 3.33398H7.7778L4 8.40065"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.035 12.8008C21.035 15.599 18.7799 17.8674 15.998 17.8674C13.2161 17.8674 10.9609 15.599 10.9609 12.8008"
      stroke="#EE5820"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Market;
