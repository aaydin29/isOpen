import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <G clipPath="url(#Search_svg__a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5ZM9.5 7a1 1 0 0 1 1-1 4.5 4.5 0 0 1 4.5 4.5 1 1 0 0 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="Search_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSearch;
