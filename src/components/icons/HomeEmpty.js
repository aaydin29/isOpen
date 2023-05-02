import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHomeEmpty = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={28}
    fill="none"
    viewBox="0 0 30 28"
    {...props}>
    <Path
      fill="#fff"
      d="M26.841 11.053a.713.713 0 0 0-.23-.52.819.819 0 0 0-.56-.216c-.208 0-.41.077-.557.215a.713.713 0 0 0-.232.521h1.58Zm-22.103 0a.713.713 0 0 0-.232-.52.819.819 0 0 0-.558-.216c-.21 0-.41.077-.558.215a.713.713 0 0 0-.231.521h1.579Zm23.913 3.47a.82.82 0 0 0 .559.215.82.82 0 0 0 .558-.216.714.714 0 0 0 .232-.521.714.714 0 0 0-.232-.522l-1.117 1.043ZM15 .737l.559-.522a.795.795 0 0 0-.256-.16.839.839 0 0 0-.862.16L15 .738ZM.232 13.48a.714.714 0 0 0-.232.522c0 .195.083.383.232.521a.82.82 0 0 0 .558.216.82.82 0 0 0 .56-.216L.231 13.48ZM7.106 28h15.788v-1.474H7.106V28Zm19.735-3.684V11.053h-1.579v13.263h1.58Zm-22.103 0V11.053h-1.58v13.263h1.58Zm25.03-10.837L15.558.216 14.442 1.26l14.21 13.262 1.117-1.043ZM14.441.216.231 13.48l1.118 1.043L15.56 1.26 14.44.216ZM22.894 28c1.047 0 2.051-.388 2.791-1.079a3.564 3.564 0 0 0 1.156-2.605h-1.579c0 .586-.249 1.148-.693 1.563a2.457 2.457 0 0 1-1.675.647V28ZM7.106 26.526c-.628 0-1.23-.232-1.675-.647a2.139 2.139 0 0 1-.693-1.563h-1.58c0 .977.417 1.914 1.157 2.605A4.095 4.095 0 0 0 7.105 28v-1.474Z"
    />
  </Svg>
);
export default SvgHomeEmpty;