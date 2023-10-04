import React, { ReactElement } from 'react';
import { ColorValue, ViewStyle } from 'react-native';

import Theme from 'theme';
import { Touchable, TouchableProps } from '../atoms/Touchable';
import { Container } from '../atoms/Container';
import { CustomText as Text } from '../atoms/CustomText';

interface Props extends TouchableProps {
  label?: string;
  borderRadius?: number;
  inverted?: boolean;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  actionIconColor?: ColorValue;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  icon?: ReactElement;
  actionIcon?: ReactElement;
}

const OptionButton: React.FC<Props> = ({
  label,
  onPress,
  disabled,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  backgroundColor,
  textColor = Theme.Colors.DarkSoul,
  androidRippleColor = Theme.Colors.White,
  icon,
  borderRadius = 27,
  width = 64,
  height = 64,
  inverted = false,
  rounded,
  actionIcon,
  actionIconColor = Theme.Colors.DarkSoul,
}: Props) => (
  <Container
    flex
    center
    style={[{ alignSelf: 'center' },
      {
        marginBottom,
        marginTop,
        marginLeft,
        marginRight,
        marginHorizontal,
      },
    ]}
  >
    {actionIcon && (
      <Container
        width={Number(width) + 8} // 4px of padding horizontally
        style={{
          position: 'absolute',
          zIndex: 10,
        }}
      >
        <Touchable
          onPress={onPress}
          androidRippleColor={androidRippleColor}
          disabled={disabled}
          rounded={rounded}
        >
          <Container
            center
            middle
            width={24}
            height={24}
            backgroundColor={actionIconColor}
            style={{
              borderRadius: 10,
              alignSelf: 'flex-end',
            }}
          >
            {actionIcon}
          </Container>
        </Touchable>
      </Container>
    )}
    <Touchable
      onPress={onPress}
      androidRippleColor={androidRippleColor}
      disabled={actionIcon ? true : disabled}
      rounded={rounded}
    >
      <Container flex center style={{ maxWidth: 114 }}>
        <Container
          center
          middle
          backgroundColor={inverted ? Theme.Colors.DarkSoul : Theme.Colors.PlaceboBlue}
          width={width}
          height={height}
          style={{ borderRadius, ...(backgroundColor && { backgroundColor }) }}
        >
          {icon}
        </Container>
        <Text
          text={label}
          textAlign="center"
          textColor={textColor}
          fontSize={15}
          fontWeight="Regular"
          typography="body"
          adjustsFontSizeToFit
          marginTop={2}
          numberOfLines={2}
        />
      </Container>
    </Touchable>
  </Container>
);

export { OptionButton };
