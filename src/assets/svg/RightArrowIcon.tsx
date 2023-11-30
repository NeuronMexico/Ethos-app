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

const RightArrowIcon: React.FC<Props> = ({
  color = Theme.Colors.White,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 28 28"
  >
    <Path
      d="M21 13.9999L21.7071 13.2928L22.4142 13.9999L21.7071 14.707L21 13.9999ZM7 14.9999C6.44771 14.9999 6 14.5522 6 13.9999C6 13.4476 6.44771 12.9999 7 12.9999V14.9999ZM17.0404 8.62615L21.7071 13.2928L20.2929 14.707L15.6262 10.0404L17.0404 8.62615ZM21.7071 14.707L17.0404 19.3737L15.6262 17.9595L20.2929 13.2928L21.7071 14.707ZM21 14.9999H7V12.9999H21V14.9999Z"
      fill={color}
    />
  </Svg>
);
export { RightArrowIcon };
