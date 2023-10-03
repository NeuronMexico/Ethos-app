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

const PinIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 16,
  height = 18,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 18"
  >
    <Path
      fill={color}
      d="m8.398 16.804.46.888-.46-.888Zm-.796 0-.46.888.46-.888ZM14 8c0 2.146-1.092 3.916-2.455 5.29-1.362 1.374-2.91 2.265-3.607 2.626l.92 1.776c.787-.408 2.539-1.412 4.107-2.993S16 10.87 16 8h-2ZM8 2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2ZM2 8a6 6 0 0 1 6-6V0a8 8 0 0 0-8 8h2Zm6.062 7.916c-.696-.361-2.245-1.252-3.607-2.625C3.092 11.916 2 10.146 2 8H0c0 2.87 1.467 5.118 3.035 6.699 1.568 1.582 3.32 2.585 4.107 2.993l.92-1.776Zm-.124 0A.138.138 0 0 1 8 15.902c.027 0 .049.007.062.014l-.92 1.776c.541.28 1.175.28 1.716 0l-.92-1.776ZM10 8a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2ZM8 6a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2ZM6 8a2 2 0 0 1 2-2V4a4 4 0 0 0-4 4h2Zm2 2a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4v-2Z"
    />
  </Svg>
);
export { PinIcon };
