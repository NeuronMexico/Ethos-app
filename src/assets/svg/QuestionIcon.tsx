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

const QuestionIcon: React.FC<Props> = ({
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
    <Circle cx={11} cy={11} r={8.25} stroke={color} strokeWidth={2} />
    <Circle cx={10.999} cy={16.505} r={0.458} fill={color} stroke={color} />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M11 14.672v-1.3c0-.866.554-1.635 1.375-1.909a2.01 2.01 0 0 0 1.375-1.907v-.47a2.664 2.664 0 0 0-2.664-2.664H11a2.75 2.75 0 0 0-2.75 2.75"
    />
  </Svg>
);
export { QuestionIcon };
