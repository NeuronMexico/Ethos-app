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

const ArrowUpIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 25"
  >
    <Path
      d="M5.5 15L11.1141 9.38593C11.7533 8.74674 12.0729 8.42714 12.4686 8.41471C12.4895 8.41405 12.5105 8.41405 12.5314 8.41471C12.9271 8.42714 13.2467 8.74674 13.8859 9.38593L19.5 15"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export { ArrowUpIcon };
