import * as React from "react";
import Svg, { Path, Line } from "react-native-svg";
const Post = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.6667 4H5.33333C4.59693 4 4 4.59693 4 5.33333V18.6667C4 19.4031 4.59693 20 5.33333 20H18.6667C19.4031 20 20 19.4031 20 18.6667V5.33333C20 4.59693 19.4031 4 18.6667 4Z"
      stroke="#01295F"
      strokeWidth={1.5}
    />
    <Line
      x1={9.75}
      y1={4}
      x2={9.75}
      y2={20}
      stroke="#01295F"
      strokeWidth={1.5}
    />
    <Line
      x1={14.75}
      y1={4}
      x2={14.75}
      y2={20}
      stroke="#01295F"
      strokeWidth={1.5}
    />
    <Line
      y1={-0.75}
      x2={16}
      y2={-0.75}
      transform="matrix(-1 0 0 1 20 15)"
      stroke="#01295F"
      strokeWidth={1.5}
    />
    <Line
      y1={-0.75}
      x2={16}
      y2={-0.75}
      transform="matrix(-1 0 0 1 20 10)"
      stroke="#01295F"
      strokeWidth={1.5}
    />
  </Svg>
);
export default Post;
