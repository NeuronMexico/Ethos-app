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

const DeferIcon: React.FC<Props> = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7.332h.01M11 14.665h.01M6.417 11h9.167m-4.125-3.667a.458.458 0 1 1-.917 0 .458.458 0 0 1 .917 0Zm0 7.333a.458.458 0 1 1-.917 0 .458.458 0 0 1 .917 0ZM20.167 11a9.167 9.167 0 1 1-18.333 0 9.167 9.167 0 0 1 18.333 0Z"
    />
  </Svg>
);
export { DeferIcon };
