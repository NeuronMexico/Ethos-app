/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const KeyIcon: React.FC<Props> = ({
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
    <Circle cx={9} cy={14} r={4} stroke={color} strokeWidth={2} />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m12 11 3.5-3.5M17 6l-1.5 1.5m0 0L18 10"
    />
  </Svg>
);

export { KeyIcon };
