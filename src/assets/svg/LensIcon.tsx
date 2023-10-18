/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, {
  Path,
} from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const LensIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 24,
  height = 24,
}: Props) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m16.25 13.923 1.601 1.602a1.645 1.645 0 1 1-2.327 2.327l-1.601-1.602M1.667 8.75a7.083 7.083 0 1 1 14.166 0 7.083 7.083 0 0 1-14.166 0Z"
    />
  </Svg>
);
export { LensIcon };
