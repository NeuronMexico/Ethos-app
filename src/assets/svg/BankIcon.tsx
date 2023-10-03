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

const BankIcon: React.FC<Props> = ({
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
      d="M5 8.999v8m4.5-8v8m5-8v8m4.5-8v8m-16 1.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h14.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 17.76 3 18.04 3 18.6Zm8.653-15.523-7.4 1.645c-.447.099-.67.149-.838.269a1 1 0 0 0-.334.417C3 5.596 3 5.825 3 6.283v1.116c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 9 4.04 9 4.6 9h14.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.239 21 7.959 21 7.399V6.283c0-.458 0-.687-.081-.876a1 1 0 0 0-.335-.417c-.166-.12-.39-.17-.837-.27l-7.4-1.644a2.083 2.083 0 0 0-.26-.049 1 1 0 0 0-.174 0c-.066.006-.13.02-.26.05Z"
    />
  </Svg>
);
export { BankIcon };
