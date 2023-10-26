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

const FileDockAddIcon: React.FC<Props> = ({
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
    <Path stroke={color} strokeLinecap="round" strokeWidth={2} d="M9 9h4" />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M19 13v2c0 2.828 0 4.243-.879 5.121C17.243 21 15.828 21 13 21h-2c-2.828 0-4.243 0-5.121-.879C5 19.243 5 17.828 5 15V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M18 3v6M21 6h-6"
    />
  </Svg>
);
export { FileDockAddIcon };
