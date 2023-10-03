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

const FilmIcon: React.FC<Props> = ({
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
      d="M7.5 3v3.6m0 9v3.6m9-14.4v3.6m0 9V21M3 6.6h9m-9 9h9m0-7.2h9m-9 9h9m-9 1.8V4.44c0-.504 0-.756-.098-.949a.9.9 0 0 0-.393-.393C11.316 3 11.064 3 10.56 3H7.32c-1.512 0-2.268 0-2.846.294a2.7 2.7 0 0 0-1.18 1.18C3 5.052 3 5.808 3 7.32v7.56c0 1.512 0 2.268.294 2.846a2.7 2.7 0 0 0 1.18 1.18c.578.294 1.334.294 2.846.294H12Zm0-14.4h4.68c1.512 0 2.268 0 2.846.294a2.7 2.7 0 0 1 1.18 1.18C21 6.852 21 7.608 21 9.12v7.56c0 1.512 0 2.268-.294 2.846a2.7 2.7 0 0 1-1.18 1.18C18.948 21 18.192 21 16.68 21h-3.24c-.504 0-.756 0-.949-.098a.9.9 0 0 1-.393-.393C12 20.316 12 20.064 12 19.56V4.8Z"
    />
  </Svg>
);
export { FilmIcon };
