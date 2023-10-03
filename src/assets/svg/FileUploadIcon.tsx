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

const FileUploadIcon: React.FC<Props> = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.059 12.45V7.32c0-1.512 0-2.268-.308-2.846a2.765 2.765 0 0 0-1.234-1.18C16.913 3 16.122 3 14.541 3H8.518c-1.582 0-2.372 0-2.976.294a2.765 2.765 0 0 0-1.234 1.18C4 5.052 4 5.808 4 7.32v9.36c0 1.512 0 2.268.308 2.846.27.508.702.92 1.234 1.18C6.146 21 6.936 21 8.518 21H12m1.412-9.9H7.765m1.882 3.6H7.765m7.53-7.2h-7.53M14.353 18l2.824-3m0 0L20 18m-2.823-3v6.75"
    />
  </Svg>
);

export { FileUploadIcon };
