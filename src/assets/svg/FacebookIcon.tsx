import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, {
  G, Path, Defs, ClipPath, Rect,
} from 'react-native-svg';
import Theme from 'theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const FacebookIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 21 24"
    fill="none"
  >
    <G id="square-facebook" clipPath="url(#clip0_3058_13765)">
      <Path
        id="Vector"
        // eslint-disable-next-line max-len
        d="M18.75 1.5H2.25C1.65326 1.5 1.08097 1.73705 0.65901 2.15901C0.237053 2.58097 0 3.15326 0 3.75L0 20.25C0 20.8467 0.237053 21.419 0.65901 21.841C1.08097 22.2629 1.65326 22.5 2.25 22.5H8.68359V15.3605H5.73047V12H8.68359V9.43875C8.68359 6.52547 10.418 4.91625 13.0744 4.91625C14.3466 4.91625 15.6769 5.14313 15.6769 5.14313V8.0025H14.2111C12.7669 8.0025 12.3164 8.89875 12.3164 9.81797V12H15.5405L15.0248 15.3605H12.3164V22.5H18.75C19.3467 22.5 19.919 22.2629 20.341 21.841C20.7629 21.419 21 20.8467 21 20.25V3.75C21 3.15326 20.7629 2.58097 20.341 2.15901C19.919 1.73705 19.3467 1.5 18.75 1.5Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3058_13765">
        <Rect width={21} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export { FacebookIcon };