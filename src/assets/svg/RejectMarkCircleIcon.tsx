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

const RejectMarkCircleIcon: React.FC<Props> = ({
  color = Theme.Colors.HotCoral,
  width = 95,
  height = 94,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 95 94"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={5}
      d="M47.5 82.25a35.251 35.251 0 0 1-24.925-60.175A35.25 35.25 0 1 1 47.5 82.25h0ZM35.75 35.25l23.5 23.5M59.25 35.25l-23.5 23.5"
    />
  </Svg>
);

export { RejectMarkCircleIcon };
