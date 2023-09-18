/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const PadlockIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 25,
  height = 25,
}: Props) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <G id="Group 8">
      <Path
        id="Rectangle 5"
        d="M1.66663 11.25C1.66663 9.36438 1.66663 8.42157 2.25241 7.83579C2.8382 7.25 3.78101 7.25 5.66663 7.25H12.3333C14.2189 7.25 15.1617 7.25 15.7475 7.83579C16.3333 8.42157 16.3333 9.36438 16.3333 11.25V12.25C16.3333 15.0784 16.3333 16.4926 15.4546 17.3713C14.5759 18.25 13.1617 18.25 10.3333 18.25H7.66663C4.8382 18.25 3.42399 18.25 2.54531 17.3713C1.66663 16.4926 1.66663 15.0784 1.66663 12.25V11.25Z"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        id="Vector 5"
        d="M12.6666 6.33333V5.41667C12.6666 3.39162 11.025 1.75 8.99992 1.75V1.75C6.97488 1.75 5.33325 3.39162 5.33325 5.41667V6.33333"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        id="Ellipse 6"
        cx={8.99996}
        cy={12.75}
        r={1.83333}
        fill={color}
      />
    </G>
  </Svg>
);

export { PadlockIcon };
