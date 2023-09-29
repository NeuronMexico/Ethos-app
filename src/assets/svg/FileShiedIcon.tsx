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

const FileShiedIcon: React.FC<Props> = ({
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
      d="M13.4118 11.1H7.76471M9.64706 14.7H7.76471M15.2941 7.5H7.76471M19.0588 10.2V7.32C19.0588 5.80786 19.0588 5.05179 18.7511 4.47423C18.4804 3.96619 18.0484 3.55314 17.5172 3.29428C16.9132 3 16.1225 3 14.5412 3H8.51765C6.93632 3 6.14566 3 5.54167 3.29428C5.01039 3.55314 4.57845 3.96619 4.30775 4.47423C4 5.05179 4 5.80786 4 7.32V16.68C4 18.1921 4 18.9482 4.30775 19.5258C4.57845 20.0338 5.01039 20.4469 5.54167 20.7057C6.14566 21 6.93632 21 8.51765 21H12M17.1765 20.1C17.1765 20.1 20 18.8131 20 16.8827V14.6306L17.9411 13.9271C17.4464 13.7576 16.9054 13.7576 16.4107 13.9271L14.3529 14.6306V16.8827C14.3529 18.8131 17.1765 20.1 17.1765 20.1Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { FileShiedIcon };
