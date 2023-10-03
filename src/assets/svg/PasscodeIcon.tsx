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

const PasscodeIcon: React.FC<Props> = ({
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
      d="M21 10.25V7.8c0-.98 0-1.47-.196-1.844a1.776 1.776 0 0 0-.787-.765C19.632 5 19.128 5 18.12 5H5.88c-1.008 0-1.512 0-1.897.19a1.776 1.776 0 0 0-.787.766C3 6.33 3 6.82 3 7.8v3.15c0 .98 0 1.47.196 1.845.173.329.448.597.787.764.385.191.889.191 1.897.191h5.22m.9-4.375h.005m4.495 0h.005m-9.005 0h.005m11.02 6.125v-1.531c0-.846-.705-1.531-1.575-1.531s-1.575.685-1.575 1.53V15.5m-3.15-6.125c0 .12-.1.219-.225.219a.222.222 0 0 1-.225-.219c0-.12.1-.219.225-.219.124 0 .225.098.225.219Zm4.5 0c0 .12-.1.219-.225.219a.222.222 0 0 1-.225-.219c0-.12.1-.219.225-.219.124 0 .225.098.225.219Zm-9 0c0 .12-.1.219-.225.219a.222.222 0 0 1-.225-.219c0-.12.1-.219.225-.219.124 0 .225.098.225.219ZM15.24 19h3.42c.504 0 .756 0 .949-.095a.888.888 0 0 0 .393-.383c.098-.187.098-.432.098-.922v-.7c0-.49 0-.735-.098-.922a.888.888 0 0 0-.393-.383c-.193-.095-.445-.095-.949-.095h-3.42c-.504 0-.756 0-.949.095a.888.888 0 0 0-.393.383c-.098.187-.098.432-.098.922v.7c0 .49 0 .735.098.922a.888.888 0 0 0 .393.383c.193.095.445.095.949.095Z"
    />
  </Svg>
);
export { PasscodeIcon };
