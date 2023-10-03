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

const PersonCloudIcon: React.FC<Props> = ({
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
      strokeWidth={2}
      d="M16.29 16.64a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M18.29 20.64s-.5-1-2-1-2 1-2 1M11.92 16.26H6.94c-1.91 0-3.45-1.53-3.45-3.41 0-1.88 1.55-3.41 3.45-3.41a3.37 3.37 0 0 1 1.92.57M15.14 8.39a3.37 3.37 0 0 1 1.92-.57c1.91 0 3.45 1.53 3.45 3.41 0 .64-.18 1.25-.49 1.76"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.61 9.5c-.18-.49-.29-1.03-.29-1.58 0-2.51 2.06-4.55 4.61-4.55 2.37 0 4.32 1.77 4.58 4.04"
    />
  </Svg>
);
export { PersonCloudIcon };
