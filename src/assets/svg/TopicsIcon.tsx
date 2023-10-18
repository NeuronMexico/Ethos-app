/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const TopicsIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 26,
  height = 26,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 26 26"
  >
    <Rect
      width={10.667}
      height={10.667}
      x={0.668}
      y={0.555}
      fill={color}
      rx={2}
    />
    <Rect
      width={10.667}
      height={10.667}
      x={0.668}
      y={14.773}
      fill={color}
      rx={2}
    />
    <Rect
      width={10.667}
      height={10.667}
      x={14.891}
      y={0.555}
      fill={color}
      rx={2}
    />
    <Rect
      width={10.667}
      height={10.667}
      x={14.891}
      y={14.773}
      fill={color}
      rx={2}
    />
  </Svg>
);
export { TopicsIcon };
