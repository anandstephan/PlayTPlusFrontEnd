import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Sponsorship = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_443)">
      <Path
        d="M12 18.666C12 20.8753 15.5813 22.666 20 22.666C24.4187 22.666 28 20.8753 28 18.666C28 16.4567 24.4187 14.666 20 14.666C15.5813 14.666 12 16.4567 12 18.666Z"
        stroke="#EE5820"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 18.666V23.9993C12 26.2073 15.5813 27.9993 20 27.9993C24.4187 27.9993 28 26.2073 28 23.9993V18.666"
        stroke="#EE5820"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8C4 9.42933 5.52533 10.7493 8 11.464C10.4747 12.1787 13.5253 12.1787 16 11.464C18.4747 10.7493 20 9.42933 20 8C20 6.57067 18.4747 5.25067 16 4.536C13.5253 3.82133 10.4747 3.82133 8 4.536C5.52533 5.25067 4 6.57067 4 8Z"
        stroke="#01295F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 8V21.3333C4 22.5173 5.02933 23.2667 6.66667 24"
        stroke="#01295F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 14.666C4 15.85 5.02933 16.5993 6.66667 17.3327"
        stroke="#01295F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_443">
        <Rect width={32} height={32} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Sponsorship;
