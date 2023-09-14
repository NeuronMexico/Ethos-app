/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const CalendarIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 24"
  >
    <Rect
      width={18}
      height={15}
      x={3.5}
      y={6}
      stroke={color}
      strokeWidth={2}
      rx={2}
    />
    <Path
      fill={color}
      d="M3.5 10c0-1.886 0-2.828.586-3.414C4.672 6 5.614 6 7.5 6h10c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414h-18Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.5 3v3M17.5 3v3"
    />
    <Rect width={4} height={2} x={7.5} y={12} fill={color} rx={0.5} />
    <Rect width={4} height={2} x={7.5} y={16} fill={color} rx={0.5} />
    <Rect width={4} height={2} x={13.5} y={12} fill={color} rx={0.5} />
    <Rect width={4} height={2} x={13.5} y={16} fill={color} rx={0.5} />
  </Svg>
);

export { CalendarIcon };
