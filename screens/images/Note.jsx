import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Note = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_255)">
      <Path
        d="M13.6289 2.40039V6.66706C13.6289 6.94996 13.7463 7.22127 13.9553 7.4213C14.1642 7.62134 14.4477 7.73372 14.7432 7.73372H19.2003"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.973 21.6004H5.83013C5.23908 21.6004 4.67223 21.3756 4.2543 20.9756C3.83636 20.5755 3.60156 20.0329 3.60156 19.4671V4.53372C3.60156 3.96793 3.83636 3.42531 4.2543 3.02523C4.67223 2.62515 5.23908 2.40039 5.83013 2.40039H13.6301L19.2016 7.73372V19.4671C19.2016 20.0329 18.9668 20.5755 18.5488 20.9756C18.1309 21.3756 17.564 21.6004 16.973 21.6004Z"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.05859 17.334H14.7443"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.05859 13.0664H14.7443"
        stroke="#8A9DB5"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_255">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Note;
