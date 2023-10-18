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

const ClipIcon: React.FC<Props> = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.152 10.903-9.016 9.016a5.25 5.25 0 0 1-7.424-7.425l9.015-9.016a3.5 3.5 0 0 1 4.95 4.95l-8.662 8.662a1.75 1.75 0 0 1-2.475-2.475l7.601-7.601"
    />
  </Svg>
);
export { ClipIcon };
