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

const EthosQRIcon: React.FC<Props> = ({
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
      d="M21 8.51v-1c0-.93 0-1.39-.1-1.78a3.006 3.006 0 0 0-2.12-2.12c-.38-.1-.85-.1-1.78-.1M3 8.51v-1c0-.93 0-1.39.1-1.78a3.006 3.006 0 0 1 2.12-2.12c.38-.1.85-.1 1.78-.1M21 15.49v1c0 .93 0 1.4-.1 1.78a3.006 3.006 0 0 1-2.12 2.12c-.38.1-.85.1-1.78.1M3 15.49v1c0 .93 0 1.4.1 1.78a3.006 3.006 0 0 0 2.12 2.12c.38.1.85.1 1.78.1"
    />
    <Path
      fill={color}
      d="M14.36 10.46c1.08 0 1.96-.88 1.96-1.96s-.88-1.96-1.96-1.96-1.96.88-1.96 1.96.88 1.96 1.96 1.96ZM15.72 11.14c1.05-.26 2.04.62 1.9 1.69a5.712 5.712 0 0 1-4.3 4.79c-2.35.58-4.71-.38-6.03-2.24-.63-.88-.16-2.12.89-2.38l7.54-1.86ZM8.63 11.88c1.08 0 1.96-.88 1.96-1.96s-.88-1.96-1.96-1.96-1.96.88-1.96 1.96.88 1.96 1.96 1.96Z"
    />
  </Svg>
);
export { EthosQRIcon };
