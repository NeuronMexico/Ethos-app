/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const UmbrellaStarIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 24,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11.75v5.68c0 3.14-3.86 3.01-3.86.21"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={1.79}
      d="M19.67 8.91a8.752 8.752 0 0 1 1.06 4.17s-3.19-2.81-5.97 0c-.83-1.33-4.1-2.37-5.94 0-2.56-2.51-5.54 0-5.54 0a8.732 8.732 0 0 1 9.17-8.72"
    />
    <Path
      fill={color}
      d="M19.82 4.12a.504.504 0 0 0-.48-.35h-1.39l-.43-1.32c-.13-.41-.82-.41-.95 0l-.43 1.32h-1.39c-.22 0-.41.14-.48.35-.07.21 0 .43.18.56l1.12.82-.43 1.32c-.07.21 0 .43.18.56.18.13.41.13.59 0l1.12-.82 1.12.82c.09.06.19.1.29.1.1 0 .21-.03.29-.1.17-.13.25-.35.18-.56l-.43-1.32 1.12-.82c.17-.13.25-.35.18-.56h.04Z"
    />
  </Svg>
);
export { UmbrellaStarIcon };
