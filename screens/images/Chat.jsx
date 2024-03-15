import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Chat = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_240)">
      <Path
        d="M11.197 15.698C10.507 15.894 9.767 16 9 16C8.11139 16.0019 7.22867 15.8559 6.388 15.568L4 17V14.199C2.763 13.117 2 11.635 2 10C2 6.686 5.134 4 9 4C12.782 4 15.863 6.57 16 9.785V10.018"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 8H10.0102"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 8H7.01016"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 10C19.538 10 22 12.015 22 14.5C22 15.897 21.222 17.145 20 17.97V20L18.036 18.822C17.5327 18.9409 17.0172 19.0006 16.5 19C13.462 19 11 16.985 11 14.5C11 12.015 13.462 10 16.5 10Z"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 14H15.0102"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 14H18.0102"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_240">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Chat;
