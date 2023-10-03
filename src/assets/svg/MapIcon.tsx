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

const MapIcon: React.FC<Props> = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 16.695V5.665a.45.45 0 0 0-.617-.418l-4.248 1.699a.45.45 0 0 1-.276.019L8.14 5.035a.45.45 0 0 0-.276.019L3.283 6.887A.45.45 0 0 0 3 7.305v11.03a.45.45 0 0 0 .617.418l4.248-1.699a.45.45 0 0 1 .276-.019l7.718 1.93a.45.45 0 0 0 .276-.019l4.582-1.833a.45.45 0 0 0 .283-.418Z"
    />
    <Path stroke={color} strokeWidth={2} d="M16 19V7M8 17V5" />
  </Svg>
);

export { MapIcon };
