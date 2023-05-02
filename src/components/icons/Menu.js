import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMenu = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={40}
    fill="none"
    viewBox="0 0 36 29"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M2 2h32M2 14.5h32M2 27h14"
    />
  </Svg>
);
export default SvgMenu;
