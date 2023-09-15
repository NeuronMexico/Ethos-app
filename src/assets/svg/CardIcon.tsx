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

const CardIcon: React.FC<Props> = ({
  color = Theme.Colors.Encore,
  width = 24,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Rect
      width={18}
      height={13}
      x={3}
      y={6}
      stroke={color}
      strokeWidth={2}
      rx={2}
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 15h.01M4 11h17"
    />
  </Svg>
);

export { CardIcon };
