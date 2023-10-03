/* eslint-disable max-len */
import React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import Theme from '../../theme';

interface Props {
  color?: ColorValue;
  width?: number;
  height?: number;
}

const BellMarkedIcon: React.FC<Props> = ({
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
      fill={color}
      fillRule="evenodd"
      d="M13.06 2.106a6.12 6.12 0 0 0-8.143 5.09L4.686 9.27a6.456 6.456 0 0 1-.88 2.609l-.53.883-.02.032c-.19.317-.362.604-.483.848-.122.246-.26.577-.257.96a2 2 0 0 0 .953 1.684c.327.2.682.252.956.274.271.021.606.021.976.021H16.6c.37 0 .705 0 .976-.021.274-.022.629-.074.956-.274a2 2 0 0 0 .953-1.684c.004-.383-.135-.714-.257-.96-.12-.244-.293-.531-.483-.848l-.02-.032-.53-.883a6.455 6.455 0 0 1-.7-1.65 4.853 4.853 0 0 1-2.055-.015c.19.95.54 1.86 1.04 2.694l.53.883a12.372 12.372 0 0 1 .442.772l-.035.003c-.182.015-.435.015-.854.015H5.438c-.419 0-.672 0-.854-.015l-.035-.003.015-.032c.081-.163.211-.381.426-.74l.53-.883a8.456 8.456 0 0 0 1.154-3.417l.23-2.077a4.12 4.12 0 0 1 5.048-3.555c.24-.665.62-1.262 1.107-1.755ZM15.64 3.88a1.833 1.833 0 0 0 1.447 3.357l-.005-.042a6.1 6.1 0 0 0-1.442-3.315Z"
      clipRule="evenodd"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.344 16.193c.156.877.502 1.652.982 2.205.48.552 1.069.852 1.674.852s1.194-.3 1.674-.852c.48-.553.826-1.328.982-2.205"
    />
    <Circle cx={16.833} cy={5.833} r={2.333} fill={Theme.Colors.HotCoral} stroke={Theme.Colors.HotCoral} />
  </Svg>
);
export { BellMarkedIcon };
