import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import Theme from 'theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const TicketIcon: React.FC<Props> = ({
  color = Theme.Colors.DarkSoul,
  width = 24,
  height = 24,
}: Props) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
  >
    <G id="Ticket_alt">
      <Path
        id="Vector 335"
        d="M18.5 21V3L15.5 5L12.5 3L9.5 5L6.5 3V21L9.5 19.5L12.5 21L15.5 19.5L18.5 21Z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        id="Vector 336"
        d="M10.5 9H14.5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        id="Vector 338"
        d="M10.5 15H14.5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        id="Vector 337"
        d="M10.5 12H14.5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
  </Svg>
);

export { TicketIcon };
