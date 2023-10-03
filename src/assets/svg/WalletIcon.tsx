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

const WalletIcon: React.FC<Props> = ({
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
      d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13.786c.2 0 .299 0 .38.028a.5.5 0 0 1 .306.307c.028.08.028.18.028.38 0 1.196 0 1.795-.168 2.276a3 3 0 0 1-1.841 1.84C17.51 9 16.91 9 15.714 9H15M3 6.5A2.5 2.5 0 0 0 5.5 9H19c.943 0 1.414 0 1.707.293C21 9.586 21 10.057 21 11v2M3 6.5V17c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h12c.943 0 1.414 0 1.707-.293C21 20.414 21 19.943 21 19v-2m0 0h-4c-.943 0-1.414 0-1.707-.293C15 16.414 15 15.943 15 15c0-.943 0-1.414.293-1.707C15.586 13 16.057 13 17 13h4m0 4v-4"
    />
  </Svg>
);
export { WalletIcon };
