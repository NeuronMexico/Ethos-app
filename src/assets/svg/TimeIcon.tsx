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

const TimeIcon: React.FC<Props> = ({
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
    <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={2} />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"
    />
  </Svg>
);
export { TimeIcon };
