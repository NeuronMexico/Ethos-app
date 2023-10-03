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

const FilterIcon: React.FC<Props> = ({
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
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 12V4M19 20v-2M5 20v-4M19 12V4M12 7V4M12 20v-8"
    />
    <Circle
      cx={5}
      cy={14}
      r={2}
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
    />
    <Circle
      cx={12}
      cy={9}
      r={2}
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
    />
    <Circle
      cx={19}
      cy={15}
      r={2}
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
    />
  </Svg>
);
export { FilterIcon };
