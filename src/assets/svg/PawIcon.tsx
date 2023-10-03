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

const PawIcon: React.FC<Props> = ({
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
      strokeWidth={2}
      d="M10.856 7.077v-1.23C10.856 4.826 10.09 4 9.142 4s-1.714.827-1.714 1.846v1.23c0 1.02.767 1.847 1.714 1.847s1.714-.826 1.714-1.846ZM16.571 7.077v-1.23c0-1.02-.767-1.847-1.714-1.847s-1.714.827-1.714 1.846v1.23c0 1.02.767 1.847 1.714 1.847s1.714-.826 1.714-1.846ZM20 12.264v-.527c0-.874-.767-1.583-1.713-1.583-.947 0-1.715.709-1.715 1.583v.527c0 .874.768 1.583 1.715 1.583.946 0 1.714-.709 1.714-1.583ZM7.429 12.264v-.527c0-.874-.768-1.583-1.715-1.583-.946 0-1.714.709-1.714 1.583v.527c0 .874.768 1.583 1.714 1.583.947 0 1.715-.709 1.715-1.583ZM7.792 17.074l2.643-3.625c.81-1.112 2.318-1.112 3.128 0l2.643 3.625c.851 1.167.116 2.926-1.222 2.926-.176 0-.35-.046-.506-.135l-.326-.184a4.324 4.324 0 0 0-4.306 0l-.325.184c-.158.089-.33.135-.506.135-1.339 0-2.074-1.76-1.223-2.926Z"
    />
  </Svg>
);
export { PawIcon };
