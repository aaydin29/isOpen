import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgStar = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 14 13"
    {...props}>
    <Path
      fill="#F90"
      d="M13.99 5.206c.07-.341-.21-.75-.56-.75l-3.987-.545L7.624.37a.54.54 0 0 0-.28-.273c-.35-.204-.77-.068-.979.273L4.616 3.91.63 4.456c-.21 0-.35.068-.42.205a.647.647 0 0 0 0 .953L3.078 8.34l-.7 3.884c0 .136 0 .272.07.409.21.34.63.476.98.272l3.567-1.84 3.567 1.84c.07.068.21.068.35.068h.14a.708.708 0 0 0 .559-.817l-.7-3.884 2.868-2.725a.373.373 0 0 0 .21-.34Z"
    />
  </Svg>
);
export default SvgStar;
