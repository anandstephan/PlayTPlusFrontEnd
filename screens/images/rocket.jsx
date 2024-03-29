import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Rocket = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_390)">
      <Path
        d="M9.33267 18.666C7.94498 19.4494 6.82288 20.6295 6.11021 22.0548C5.39755 23.4801 5.1268 25.0858 5.33267 26.666C6.91288 26.8719 8.51857 26.6011 9.9439 25.8885C11.3692 25.1758 12.5492 24.0537 13.3327 22.666"
        stroke="#EE5820"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.33594 17.334C7.71339 17.6165 9.92667 18.6907 11.6196 20.3836C13.3126 22.0766 14.3867 24.2899 14.6693 26.6673C15.8478 25.9879 16.8337 25.0191 17.5336 23.8526C18.2335 22.686 18.6244 21.3603 18.6693 20.0007C20.9081 19.2131 22.8631 17.7793 24.2871 15.8807C25.7111 13.982 26.5401 11.7038 26.6693 9.33398C26.6693 8.27312 26.2478 7.2557 25.4977 6.50556C24.7476 5.75541 23.7301 5.33398 22.6693 5.33398C20.2995 5.46319 18.0212 6.2922 16.1226 7.71619C14.2239 9.14017 12.7902 11.0952 12.0026 13.334C10.643 13.3789 9.31721 13.7698 8.15069 14.4697C6.98416 15.1696 6.01539 16.1554 5.33594 17.334Z"
        stroke="#01295F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6641 11.9993C18.6641 12.353 18.8045 12.6921 19.0546 12.9422C19.3046 13.1922 19.6438 13.3327 19.9974 13.3327C20.351 13.3327 20.6902 13.1922 20.9402 12.9422C21.1903 12.6921 21.3307 12.353 21.3307 11.9993C21.3307 11.6457 21.1903 11.3066 20.9402 11.0565C20.6902 10.8065 20.351 10.666 19.9974 10.666C19.6438 10.666 19.3046 10.8065 19.0546 11.0565C18.8045 11.3066 18.6641 11.6457 18.6641 11.9993Z"
        stroke="#EE5820"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_390">
        <Rect width={32} height={32} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Rocket;
