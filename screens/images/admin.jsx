import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Admin = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1_457)">
      <Path
        d="M6.66406 9.33333C6.66406 10.7478 7.22597 12.1044 8.22616 13.1046C9.22635 14.1048 10.5829 14.6667 11.9974 14.6667C13.4119 14.6667 14.7684 14.1048 15.7686 13.1046C16.7688 12.1044 17.3307 10.7478 17.3307 9.33333C17.3307 7.91885 16.7688 6.56229 15.7686 5.5621C14.7684 4.5619 13.4119 4 11.9974 4C10.5829 4 9.22635 4.5619 8.22616 5.5621C7.22597 6.56229 6.66406 7.91885 6.66406 9.33333Z"
        stroke="#01295F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 28V25.3333C4 23.9188 4.5619 22.5623 5.5621 21.5621C6.56229 20.5619 7.91885 20 9.33333 20H14.6667C16.0812 20 17.4377 20.5619 18.4379 21.5621C19.4381 22.5623 20 23.9188 20 25.3333V28"
        stroke="#01295F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.3359 4.17383C22.4832 4.46756 23.5 5.13476 24.2261 6.07024C24.9523 7.00572 25.3464 8.15627 25.3464 9.34049C25.3464 10.5247 24.9523 11.6753 24.2261 12.6107C23.5 13.5462 22.4832 14.2134 21.3359 14.5072"
        stroke="#EE5820"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28 27.9992V25.3326C27.9932 24.1554 27.5972 23.0136 26.8737 22.0851C26.1502 21.1566 25.1398 20.4935 24 20.1992"
        stroke="#EE5820"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_457">
        <Rect width={32} height={32} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Admin;
