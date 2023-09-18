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

const BenefitsIcon: React.FC<Props> = ({
  color = Theme.Colors.Encore,
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
      strokeWidth={2}
      d="M3 10c0-.943 0-1.414.293-1.707C3.586 8 4.057 8 5 8h14c.943 0 1.414 0 1.707.293C21 8.586 21 9.057 21 10v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883V18c0 .943 0 1.414-.293 1.707C17.414 20 16.943 20 16 20H8c-.943 0-1.414 0-1.707-.293C6 19.414 6 18.943 6 18v-3.5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C5.199 13 4.966 13 4.5 13s-.699 0-.883-.076a1 1 0 0 1-.54-.541C3 12.199 3 11.966 3 11.5V10Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 13h14M12 7v13M12 7l-.879-.879a9.713 9.713 0 0 0-3.796-2.346v0A1.766 1.766 0 0 0 5 5.45v.182c0 .817.523 1.542 1.297 1.8L8 8M12 7l.879-.879a9.714 9.714 0 0 1 3.796-2.346v0A1.766 1.766 0 0 1 19 5.45v.182c0 .817-.523 1.542-1.297 1.8L16 8"
    />
  </Svg>
);

export { BenefitsIcon };
