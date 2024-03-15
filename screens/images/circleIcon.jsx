import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const CircleIcon = (props) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={5} cy={5} r={4.5} fill="#E32636" stroke="white" />
  </Svg>
);
export default CircleIcon;
