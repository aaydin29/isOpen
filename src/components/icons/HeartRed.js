import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHeartRed = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 30 27"
    {...props}>
    <Path
      fill="red"
      d="M15 27a2.35 2.35 0 0 1-1.298-.392c-5.667-3.75-8.121-6.323-9.475-7.93C1.343 15.248-.038 11.73.001 7.918.046 3.552 3.64 0 8.01 0c3.179 0 5.38 1.746 6.662 3.2a.433.433 0 0 0 .327.145.442.442 0 0 0 .327-.145C16.609 1.744 18.81 0 21.989 0 26.36 0 29.954 3.552 30 7.92c.04 3.812-1.343 7.33-4.226 10.758-1.354 1.608-3.808 4.18-9.475 7.931A2.35 2.35 0 0 1 15 27Z"
    />
  </Svg>
);
export default SvgHeartRed;
