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

const ArrowLeftIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 25"
  >
    <Path
      fill={color}
      d="M9.969 19.604a.773.773 0 0 1-.552-.229l-6.323-6.323a.785.785 0 0 1 0-1.104l6.323-6.323a.786.786 0 0 1 1.104 0 .786.786 0 0 1 0 1.104L4.751 12.5l5.77 5.77a.786.786 0 0 1 0 1.105.756.756 0 0 1-.552.23Z"
    />
    <Path
      fill={color}
      d="M21.354 13.281H3.822a.787.787 0 0 1-.781-.781c0-.427.354-.781.781-.781h17.532c.427 0 .78.354.78.781a.787.787 0 0 1-.78.781Z"
    />
  </Svg>
);
export { ArrowLeftIcon };
