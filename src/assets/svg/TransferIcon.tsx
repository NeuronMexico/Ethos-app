/* eslint-disable max-len */
import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Theme from 'theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const TransferIcon: React.FC<Props> = ({
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
      strokeLinejoin="round"
      strokeWidth={1.64}
      d="M11.23 4.62h-.35A5.68 5.68 0 0 0 5.2 10.3v3.4a5.68 5.68 0 0 0 5.68 5.68h.35a5.68 5.68 0 0 0 5.68-5.68v-3.4a5.68 5.68 0 0 0-5.68-5.68Z"
    />
    <Path
      fill={color}
      d="M10.51 15.82v.83a.636.636 0 0 0 1.27 0v-.81c1.34-.19 2.2-1.03 2.2-2.18 0-1.15-.71-1.89-2.38-2.31l-.8-.21c-.8-.26-.86-.5-.86-.78 0-.38.3-.63.81-.68h.34s.1 0 .43.06c.32.08.64.22 1 .43.13.08.27.12.41.12.43 0 .77-.33.77-.76 0-.28-.14-.51-.4-.65-.47-.3-.97-.49-1.51-.57v-.97a.636.636 0 0 0-1.27 0v.95c-1.3.17-2.16 1.01-2.16 2.14 0 1.2.68 1.87 2.35 2.31l.8.19c.82.26.89.51.89.8 0 .51-.46.67-.85.71h-.02s-.07.02-.26.02c-.2 0-.47-.06-.48-.06-.5-.09-.94-.29-1.44-.65a.746.746 0 0 0-.46-.15c-.42 0-.76.33-.76.76 0 .27.13.5.36.65.62.44 1.3.71 2.03.82l-.01-.01Z"
    />
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.91 12.35h5.9M.24 12.35H5.2M19.7 15.46l3.11-3.11-3.11-3.11"
    />
  </Svg>
);

export { TransferIcon };
