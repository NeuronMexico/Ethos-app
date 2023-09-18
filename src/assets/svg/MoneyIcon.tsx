/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, {
  Circle, G, Path, Rect,
} from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const MoneyIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 24,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <G id="Money">
      <Rect
        id="Rectangle 25"
        x={3}
        y={6}
        width={18}
        height={12}
        rx={2}
        stroke={color}
        strokeWidth={2}
      />
      <Path
        id="Vector 70"
        d="M6 9H8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        id="Vector 71"
        d="M16 15H18"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        id="Ellipse 118"
        cx={12}
        cy={12}
        r={2}
        stroke={color}
        strokeWidth={2}
      />
    </G>
  </Svg>
);

export { MoneyIcon };
