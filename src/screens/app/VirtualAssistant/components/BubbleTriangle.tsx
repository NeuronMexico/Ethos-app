import React from 'react';
import { ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import Theme from 'theme';

interface Props {
  style: ViewStyle;
}

const BubbleTriangle: React.FC<Props> = ({ style }) => (
  <Svg
    width={9}
    height={9}
    fill="none"
    viewBox="0 0 9 9"
    style={style}
  >
    <Path
      fill={Theme.Colors.White}
      d="M5.193 7.8a.8.8 0 0 1-1.386 0L.43 1.95a.8.8 0 0 1 .693-1.2h6.755a.8.8 0 0 1 .692 1.2L5.193 7.8Z"
    />
  </Svg>
);

export { BubbleTriangle };
