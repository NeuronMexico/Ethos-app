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

const ExportIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 24"
  >
    <Path
      d="M12.5 5L11.7929 4.29289L12.5 3.58579L13.2071 4.29289L12.5 5ZM13.5 14C13.5 14.5523 13.0523 15 12.5 15C11.9477 15 11.5 14.5523 11.5 14L13.5 14ZM6.79289 9.29289L11.7929 4.29289L13.2071 5.70711L8.20711 10.7071L6.79289 9.29289ZM13.2071 4.29289L18.2071 9.29289L16.7929 10.7071L11.7929 5.70711L13.2071 4.29289ZM13.5 5L13.5 14L11.5 14L11.5 5L13.5 5Z"
      fill={color}
    />
    <Path
      d="M5.5 16L5.5 17C5.5 18.1046 6.39543 19 7.5 19L17.5 19C18.6046 19 19.5 18.1046 19.5 17V16"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export { ExportIcon };
