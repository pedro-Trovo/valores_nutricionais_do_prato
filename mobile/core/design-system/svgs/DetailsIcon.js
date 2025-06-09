import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const DetailsIcon = ({ iconColor = '#4F4F4F', ...props }) => (
  <Svg
    width={36}
    height={26}
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 20V16.6667H20V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z"
      fill={iconColor}
    />
  </Svg>
);
export default DetailsIcon;
