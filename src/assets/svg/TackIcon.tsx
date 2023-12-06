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

const TackIcon: React.FC<Props> = ({
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
      strokeWidth={2}
      d="M13.302 3.66c.653-.436.98-.654 1.335-.618.356.035.634.312 1.189.867l2.264 2.265c.555.555.833.832.868 1.188.035.356-.182.683-.618 1.336l-1.435 2.153c-.442.663-.663.994-.85 1.343-.241.455-.44.932-.59 1.425-.115.379-.193.77-.35 1.55l-.174.876a.919.919 0 0 1-1.425.575A32.166 32.166 0 0 1 5.38 8.483a.919.919 0 0 1 .576-1.424l.875-.175c.781-.156 1.172-.234 1.55-.35a8 8 0 0 0 1.425-.59c.35-.186.68-.407 1.344-.849l2.153-1.436Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m4.583 17.416 4.125-4.125"
    />
  </Svg>
);

export { TackIcon };
