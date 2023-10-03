/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, {
  Path,
} from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const PhoneIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 24,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      stroke={color}
      strokeWidth={2}
      d="m17.707 13.707 2.648 2.648a.912.912 0 0 1 0 1.29 5.471 5.471 0 0 1-7.151.508l-1.575-1.182a22.996 22.996 0 0 1-4.6-4.6l-1.182-1.575a5.471 5.471 0 0 1 .508-7.151.912.912 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.533.533 0 0 0-.1.616 12.262 12.262 0 0 0 5.484 5.484.533.533 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z"
    />
  </Svg>
);
export { PhoneIcon };
