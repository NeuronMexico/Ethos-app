/* eslint-disable max-len */
import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Theme from 'theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const CardDigitalIcon: React.FC<Props> = ({
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
      strokeWidth={2}
      d="M13.54 18.5h-8.5c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h8.57"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.04 14.5h.01"
    />
    <Path stroke={color} strokeWidth={2} d="M4.04 10.5h9.57" />
    <Path
      fill={color}
      d="M16.54 7.49h3v-3h-3v3ZM16.54 13.5h3v-3h-3v3ZM13.54 10.5h3v-3h-3v3ZM19.56 10.5h3v-3h-3v3ZM13.54 16.49h3v-3h-3v3ZM16.54 19.51h3v-3h-3v3Z"
    />
  </Svg>
);
export { CardDigitalIcon };
