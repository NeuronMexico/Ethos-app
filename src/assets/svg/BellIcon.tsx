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

const BellIcon: React.FC<Props> = ({
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
      fill={color}
      fillRule="evenodd"
      d="M4.917 7.195a6.12 6.12 0 0 1 12.166 0l.231 2.077c.103.923.403 1.813.88 2.609l.53.883.02.032c.19.317.362.604.483.848.122.246.26.577.257.96a2 2 0 0 1-.953 1.684c-.327.2-.682.252-.956.274a13.13 13.13 0 0 1-.976.021H5.4c-.37 0-.705 0-.976-.021-.274-.022-.629-.074-.956-.274a2 2 0 0 1-.953-1.684c-.004-.383.135-.714.257-.96.12-.244.293-.531.483-.848l.02-.032.53-.883a6.456 6.456 0 0 0 .88-2.609l.23-2.077ZM11 3.75a4.12 4.12 0 0 0-4.096 3.666l-.23 2.077A8.456 8.456 0 0 1 5.52 12.91l-.53.883a12.383 12.383 0 0 0-.441.772l.035.003c.182.015.435.015.854.015h11.124c.419 0 .672 0 .854-.015l.035-.003-.015-.032c-.081-.163-.211-.381-.426-.74l-.53-.883a8.456 8.456 0 0 1-1.154-3.417l-.23-2.077A4.12 4.12 0 0 0 11 3.75Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.344 16.193c.156.877.502 1.652.982 2.205.48.552 1.069.852 1.674.852s1.194-.3 1.674-.852c.48-.553.826-1.328.982-2.205"
    />
  </Svg>
);
export { BellIcon };
