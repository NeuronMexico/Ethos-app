/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const GamepadIcon: React.FC<Props> = ({
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
    <Rect width={2} height={2} x={13} y={14} fill={color} rx={1} />
    <Rect width={2} height={6} x={7} y={11} fill={color} rx={1} />
    <Rect
      width={2}
      height={6}
      x={11}
      y={13}
      fill={color}
      rx={1}
      transform="rotate(90 11 13)"
    />
    <Rect width={2} height={2} x={16} y={12} fill={color} rx={1} />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M14 8v0c0-.417 0-.625-.034-.809a2 2 0 0 0-1.13-1.446c-.17-.078-.372-.129-.776-.23L12 5.5c-.461-.115-.692-.173-.883-.267a2 2 0 0 1-1.072-1.373C10 3.652 10 3.414 10 2.938V2"
    />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M3 14c0-2.559 0-3.838.62-4.72.16-.226.346-.43.554-.604C4.982 8 6.154 8 8.5 8h7c2.346 0 3.518 0 4.326.676.208.174.395.378.554.604.62.882.62 2.161.62 4.72 0 2.559 0 3.838-.62 4.72a3.15 3.15 0 0 1-.554.604C19.018 20 17.846 20 15.5 20h-7c-2.346 0-3.518 0-4.326-.676a3.15 3.15 0 0 1-.554-.604C3 17.838 3 16.559 3 14Z"
    />
  </Svg>
);
export { GamepadIcon };
