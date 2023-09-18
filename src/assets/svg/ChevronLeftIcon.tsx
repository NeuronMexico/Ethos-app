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

const ChevronLeftIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 22,
  height = 22,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 22"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.75 17.417-5.03-5.03c-.64-.64-.96-.96-.972-1.355v-.063c.012-.396.332-.716.971-1.355l5.031-5.03"
    />
  </Svg>
);

export { ChevronLeftIcon };
