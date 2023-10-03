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

const PinDropIcon: React.FC<Props> = ({
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
      fill={color}
      d="m12.898 17.804.46.888-.46-.888Zm-.796 0-.46.888.46-.888ZM18.5 9c0 2.146-1.092 3.916-2.455 5.29-1.362 1.374-2.91 2.265-3.607 2.626l.92 1.776c.787-.408 2.539-1.412 4.107-2.993S20.5 11.87 20.5 9h-2Zm-6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Zm-6 6a6 6 0 0 1 6-6V1a8 8 0 0 0-8 8h2Zm6.062 7.916c-.696-.361-2.245-1.252-3.607-2.625C7.592 12.916 6.5 11.146 6.5 9h-2c0 2.87 1.467 5.118 3.035 6.699 1.568 1.582 3.32 2.585 4.107 2.993l.92-1.776Zm-.124 0a.138.138 0 0 1 .062-.014c.027 0 .049.007.062.014l-.92 1.776c.541.28 1.175.28 1.716 0l-.92-1.776ZM14.5 9a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm-2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm-2 2a2 2 0 0 1 2-2V5a4 4 0 0 0-4 4h2Zm2 2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4v-2Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M20.294 17.5c.79.456 1.206.973 1.206 1.5s-.416 1.044-1.206 1.5c-.79.456-1.926.835-3.294 1.098-1.368.263-2.92.402-4.5.402s-3.132-.139-4.5-.402c-1.368-.263-2.504-.642-3.294-1.098-.79-.456-1.206-.973-1.206-1.5s.416-1.044 1.206-1.5"
    />
  </Svg>
);
export { PinDropIcon };
