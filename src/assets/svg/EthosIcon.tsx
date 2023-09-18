/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const EthosIcon: React.FC<Props> = ({
  color = Theme.Colors.Encore,
  width = 22,
  height = 21,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 21"
  >
    <G fill={color} clipPath="url(#a)">
      <Path d="M15.117 7.797a3.648 3.648 0 1 0 0-7.296 3.648 3.648 0 0 0 0 7.296ZM17.644 8.141c1.957-.483 3.798 1.153 3.529 3.15-.567 4.196-3.628 7.82-7.988 8.897-4.36 1.076-8.756-.709-11.21-4.16-1.169-1.641-.299-3.945 1.657-4.428L17.644 8.14ZM4.45 10.429a3.648 3.648 0 1 0 0-7.296 3.648 3.648 0 0 0 0 7.296Z" />
    </G>
  </Svg>
);

export { EthosIcon };
