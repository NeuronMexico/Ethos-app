/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  ringColor?: ColorValue;
  width?: number;
  height?: number;
}

const CameraIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  ringColor = Theme.Colors.White,
  width = 25,
  height = 19,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 19"
  >
    <Rect width={24.651} height={15.781} y={2.707} fill={color} rx={3} />
    <Rect width={10.886} height={15.781} x={6.854} fill={color} rx={3} />
    <Path
      stroke={ringColor}
      strokeWidth={height * 0.16}
      d="M15.433 10.597a3.108 3.108 0 1 1-6.215 0 3.108 3.108 0 0 1 6.215 0Z"
    />
  </Svg>
);
export { CameraIcon };
