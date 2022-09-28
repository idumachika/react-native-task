import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Close = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      stroke="#BDBDBD"
      strokeWidth={2}
      strokeLinecap="round"
      d="m7.05 17.001 9.951-9.951M17.001 16.95 7.05 6.999"
    />
  </Svg>
);

export default Close;
