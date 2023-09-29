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

const ScanIcon: React.FC<Props> = ({
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
      d="M21 10L21 9C21 8.07003 21 7.60504 20.8978 7.22354C20.6204 6.18827 19.8117 5.37962 18.7765 5.10222C18.395 5 17.93 5 17 5"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M3 10L3 9C3 8.07003 3 7.60504 3.10222 7.22354C3.37962 6.18827 4.18827 5.37962 5.22354 5.10222C5.60504 5 6.07003 5 7 5"
      stroke="#191B59"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M21 14L21 15C21 15.93 21 16.395 20.8978 16.7765C20.6204 17.8117 19.8117 18.6204 18.7765 18.8978C18.395 19 17.93 19 17 19"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M3 14L3 15C3 15.93 3 16.395 3.10222 16.7765C3.37962 17.8117 4.18827 18.6204 5.22354 18.8978C5.60504 19 6.07003 19 7 19"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M12 15L12 9"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 14L8 10"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 14L16 10"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { ScanIcon };
