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

const ExpensesIcon: React.FC<Props> = ({
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
    <Path
      fill={color}
      fillRule="evenodd"
      d="M5.307 16.383a8.001 8.001 0 0 0 14.69-4.172 8 8 0 0 0-7.549-8.197l.555 2.072a6 6 0 1 1-5.624 9.742l-2.072.555Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M5.912 4.066A10 10 0 0 1 8.46 2.647c.42-.158.63-.238.827-.136.197.1.26.332.384.796l2.07 7.727c.122.455.183.683.08.862-.104.18-.332.24-.787.363l-7.727 2.07c-.464.124-.695.187-.882.066-.186-.12-.222-.341-.294-.784a10 10 0 0 1 3.781-9.545Z"
    />
  </Svg>
);

export { ExpensesIcon };
