import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHeartEmpty = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 30"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m28.5 17.183-9.958 10.709A3.401 3.401 0 0 1 16.053 29a3.4 3.4 0 0 1-2.49-1.108L3.606 17.185a9.533 9.533 0 0 1-1.924-3.071A10.082 10.082 0 0 1 1 10.484c-.003-1.246.224-2.48.666-3.632a9.541 9.541 0 0 1 1.912-3.08 8.788 8.788 0 0 1 2.864-2.056A8.27 8.27 0 0 1 9.822 1a8.273 8.273 0 0 1 3.375.732 8.797 8.797 0 0 1 2.856 2.07c1.658-1.739 3.885-2.704 6.2-2.689 2.315.016 4.531 1.012 6.169 2.772 1.637 1.76 2.563 4.142 2.578 6.631.015 2.49-.883 4.884-2.5 6.667Z"
    />
  </Svg>
);
export default SvgHeartEmpty;
