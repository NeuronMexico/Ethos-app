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

const KeyCycleIcon: React.FC<Props> = ({
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
      strokeWidth={2.1}
      d="M10.33 16a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2.1}
      d="M12.33 11.33 14.66 9m0 0 1-1m-1 1 1.67 1.67"
    />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M10.13 3.2C6.06 4.06 3 7.67 3 12c0 4.33 3.06 7.94 7.13 8.8"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m6.87 1.65 3.26 1.52-1.36 3.41"
    />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M13.87 20.8C17.94 19.94 21 16.33 21 12c0-4.33-3.06-7.94-7.13-8.8"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m17.13 22.35-3.26-1.52 1.36-3.41"
    />
  </Svg>
);
export { KeyCycleIcon };
