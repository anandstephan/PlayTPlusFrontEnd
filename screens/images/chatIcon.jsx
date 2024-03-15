import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath, Rect } from "react-native-svg";
const ChatIcon = (props) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_90)">
      <Path
        d="M14 23.9999H4.83703C4.72671 24.0014 4.61722 23.9807 4.51502 23.9392C4.41281 23.8977 4.31997 23.8361 4.24195 23.758C4.16394 23.68 4.10235 23.5872 4.06081 23.485C4.01926 23.3828 3.99861 23.2733 4.00007 23.163V14C4.00007 11.3478 5.05364 8.80428 6.92899 6.92892C8.80435 5.05356 11.3479 4 14 4V4C15.3132 4 16.6136 4.25866 17.8269 4.7612C19.0401 5.26375 20.1425 6.00034 21.0711 6.92892C21.9997 7.8575 22.7363 8.95989 23.2388 10.1731C23.7413 11.3864 24 12.6867 24 14V14C24 15.3132 23.7413 16.6135 23.2388 17.8268C22.7363 19.04 21.9997 20.1424 21.0711 21.071C20.1425 21.9996 19.0401 22.7362 17.8269 23.2387C16.6136 23.7413 15.3132 23.9999 14 23.9999V23.9999Z"
        stroke="#B0BDCD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5234 12.6953H17.0452"
        stroke="#B0BDCD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5234 16.1738H17.0452"
        stroke="#B0BDCD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={24} cy={8} r={4.5} fill="#E32636" stroke="white" />
    </G>
    <Defs>
      <ClipPath id="clip0_1_90">
        <Rect width={28} height={28} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ChatIcon;
