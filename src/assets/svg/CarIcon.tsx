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

const CarIcon: React.FC<Props> = ({
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
      d="M6.4 12.875h2.4M4 9.375l1.6.875 1.017-3.335c.21-.689.314-1.033.509-1.288.172-.224.392-.398.642-.506C8.05 5 8.382 5 9.045 5h5.91c.663 0 .995 0 1.277.121.25.108.47.282.642.506.195.255.3.6.51 1.288L18.4 10.25l1.6-.875m-4.8 3.5h2.4M7.84 10.25h8.32c1.344 0 2.016 0 2.53.286.451.252.818.653 1.048 1.147.262.562.262 1.297.262 2.767v2.363c0 .406 0 .61-.03.778-.127.695-.623 1.237-1.258 1.375-.154.034-.34.034-.712.034h-.4c-.884 0-1.6-.784-1.6-1.75 0-.242-.18-.438-.4-.438H8.4c-.22 0-.4.196-.4.438C8 18.216 7.284 19 6.4 19H6c-.372 0-.558 0-.712-.034-.635-.138-1.131-.68-1.257-1.375C4 17.422 4 17.22 4 16.812V14.45c0-1.47 0-2.205.262-2.767.23-.494.597-.895 1.048-1.147.514-.286 1.186-.286 2.53-.286Z"
    />
  </Svg>
);
export { CarIcon };
