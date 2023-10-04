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

const MoreIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 16,
  height = 16,
}: Props) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 4v8M12 8H4"
    />
  </Svg>
);

export { MoreIcon };
