import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={22}
    fill="none"
    viewBox="0 0 10 16"
    {...props}>
    <Path
      fill="#fff"
      d="M8.018 15.683.253 8.591A.743.743 0 0 1 0 8a.747.747 0 0 1 .253-.591L8.018.296C8.233.099 8.502 0 8.825 0c.322 0 .599.106.83.317.23.21.345.457.345.738 0 .282-.115.528-.346.74L2.88 8l6.774 6.206a.95.95 0 0 1 .323.729.982.982 0 0 1-.346.748c-.23.212-.499.317-.806.317-.307 0-.576-.105-.807-.317Z"
    />
  </Svg>
);
export default SvgBack;
