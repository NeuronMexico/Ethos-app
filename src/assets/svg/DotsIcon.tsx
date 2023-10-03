/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const DotsIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 22,
  height = 22,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 22"
  >
    <Circle cx={11} cy={11} r={2} fill={color} />
    <Circle cx={5} cy={11} r={2} fill={color} />
    <Circle cx={17} cy={11} r={2} fill={color} />
  </Svg>
);
export { DotsIcon };
