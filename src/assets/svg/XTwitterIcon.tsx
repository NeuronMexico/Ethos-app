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

const XTwitterIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <G id="x-twitter 1">
      <Path
        id="Vector"
        d="M18.2434 2.25H21.5527L14.3246 10.5094L22.8277 21.75H16.1715L10.9543 14.9344L4.9918 21.75H1.67773L9.40742 12.9141L1.25586 2.25H8.08086L12.7918 8.47969L18.2434 2.25ZM17.0809 19.7719H18.9137L7.08242 4.125H5.11367L17.0809 19.7719Z"
        fill={color}
      />
    </G>
  </Svg>
);

export { XTwitterIcon };
