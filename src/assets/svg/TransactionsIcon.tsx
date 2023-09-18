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

const TransactionsIcon: React.FC<Props> = ({
  color = Theme.Colors.Encore,
  width = 26,
  height = 26,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 26 26"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 15.1c0 1.163.9 2.1 2.004 2.1h2.256c.96 0 1.74-.817 1.74-1.837 0-1.092-.48-1.488-1.188-1.74l-3.612-1.26c-.708-.252-1.188-.636-1.188-1.74 0-1.008.78-1.836 1.74-1.836h2.256c1.104 0 2.004.936 2.004 2.1M13 7.6v10.8"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25 13c0 6.624-5.376 12-12 12S1 19.624 1 13 6.376 1 13 1M25 5.8V1h-4.8M19 7l6-6"
    />
  </Svg>
);

export { TransactionsIcon };
