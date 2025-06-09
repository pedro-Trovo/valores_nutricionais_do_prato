import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const UploadImageIcon = ({ iconColor = '#4F4F4F', ...props }) => (
  <Svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.25 41.25C4.0125 41.25 2.95312 40.8094 2.07187 39.9281C1.19062 39.0469 0.75 37.9875 0.75 36.75V5.25C0.75 4.0125 1.19062 2.95312 2.07187 2.07187C2.95312 1.19062 4.0125 0.75 5.25 0.75H23.25V5.25H5.25V36.75H36.75V18.75H41.25V36.75C41.25 37.9875 40.8094 39.0469 39.9281 39.9281C39.0469 40.8094 37.9875 41.25 36.75 41.25H5.25ZM7.5 32.25H34.5L26.0625 21L19.3125 30L14.25 23.25L7.5 32.25ZM32.25 14.25V9.75H27.75V5.25H32.25V0.75H36.75V5.25H41.25V9.75H36.75V14.25H32.25Z"
      fill={iconColor}
    />
  </Svg>
);
export default UploadImageIcon;
