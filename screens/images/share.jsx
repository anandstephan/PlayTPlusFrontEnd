import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Share = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.9474 3L21 11.3077L12.9474 19.1538V14.0769C6.68421 14.0769 4 21 4 21C4 13.1538 6.23684 8.07692 12.9474 8.07692V3Z"
      stroke="#01295F"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Share;
