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

const ShieldIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 22,
  height = 22,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 22"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m4.872 4.289.394.919-.394-.92a2 2 0 0 0-1.2 2.06l.568 5.112a7 7 0 0 0 2.476 4.604l3.004 2.504a2 2 0 0 0 2.561 0l3.004-2.504a7 7 0 0 0 2.476-4.604l.568-5.112a2 2 0 0 0-1.2-2.06L11.79 2a2 2 0 0 0-1.576 0L4.872 4.289Z"
    />
  </Svg>
);

export { ShieldIcon };
