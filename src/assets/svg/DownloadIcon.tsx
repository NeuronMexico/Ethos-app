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

const DownloadIcon: React.FC<Props> = ({
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
    <Path
      fill={color}
      d="m12 14 .707.707-.707.707-.707-.707L12 14Zm-1-9a1 1 0 1 1 2 0h-2Zm6.707 4.707-5 5-1.414-1.414 5-5 1.414 1.414Zm-6.414 5-5-5 1.414-1.414 5 5-1.414 1.414ZM11 14V5h2v9h-2Z"
    />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
    />
  </Svg>
);
export { DownloadIcon };
