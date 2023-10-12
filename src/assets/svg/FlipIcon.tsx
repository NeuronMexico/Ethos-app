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

const FlipIcon: React.FC<Props> = ({
  color = Theme.Colors.Black,
  width = 30,
  height = 30,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 30 30"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.25 11.25H9.375a5.625 5.625 0 0 0 0 11.25H15m11.25-11.25-5-5m5 5-5 5"
    />
  </Svg>
);
export { FlipIcon };
