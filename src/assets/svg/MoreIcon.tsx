/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const MoreIcon: React.FC<Props> = ({
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
    <G id="Add_round">
      <Path
        id="Vector 52"
        d="M8 4L8 12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        id="Vector 53"
        d="M12 8L4 8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
  </Svg>
);

export { MoreIcon };
