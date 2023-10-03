/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const CertificateIcon: React.FC<Props> = ({
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
      strokeWidth={2}
      d="M19 11V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 5 16.92 5 15.8 5H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 17 6.08 17 7.2 17H14M8 13h4M8 9h7"
    />
    <Circle cx={18} cy={15} r={1} stroke={color} strokeWidth={2} />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M20 20s-.5-1-2-1-2 1-2 1"
    />
  </Svg>
);
export { CertificateIcon };
