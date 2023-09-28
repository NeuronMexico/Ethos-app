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

const CheckMarkCircleIcon: React.FC<Props> = ({
  color = Theme.Colors.WelshOnion,
  width = 95,
  height = 94,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 95 94"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="m31.833 47 9.928 8.935a3.917 3.917 0 0 0 5.712-.506L63.167 35.25M47.5 86.167c21.631 0 39.167-17.535 39.167-39.166C86.667 25.37 69.13 7.834 47.5 7.834S8.333 25.369 8.333 47.001c0 21.63 17.536 39.166 39.167 39.166Z"
    />
  </Svg>
);

export { CheckMarkCircleIcon };
