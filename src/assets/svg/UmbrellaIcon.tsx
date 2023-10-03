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

const UmbrellaIcon: React.FC<Props> = ({
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
      d="M11.94 11.75v5.68c0 3.14-3.86 3.01-3.86.21"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={1.79}
      d="M20.73 13.08s-3.19-2.81-5.97 0c-.83-1.33-4.1-2.37-5.94 0-2.56-2.51-5.54 0-5.54 0 0-4.82 3.91-8.73 8.73-8.73s8.73 3.91 8.73 8.73h-.01Z"
    />
  </Svg>
);

export { UmbrellaIcon };
