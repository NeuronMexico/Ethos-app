import React, { ReactElement } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Theme from 'theme';
import { Touchable, TouchableProps } from '../atoms/Touchable';
import { Container } from '../atoms/Container';
import { CustomText, FontWeightTypes } from '../atoms/CustomText';

interface Props extends TouchableProps {
  label?: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  icon?: ReactElement;
  actionIcon?: ReactElement;
  actionIconColor?: ColorValue;
  fontSize?: number;
  borderRadius?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  colum?: boolean;
  fontWeight?: FontWeightTypes;
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
  fontSize,
  fontWeight = 'Bold',
  borderRadius = 100,
  width = 64,
  height,
  colum,
  rounded,
  actionIcon,
  actionIconColor = Theme.Colors.DarkSoul,
}: Props) => (
  <Container center crossCenter>
    <Container
      style={{
        marginBottom,
        marginTop,
        marginLeft,
        marginRight,
        marginHorizontal,
      }}
    >
      <Touchable onPress={onPress} androidRippleColor={androidRippleColor} disabled={disabled} rounded={rounded}>
        <Container
          row
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Container
            middle
            center
            crossCenter
            backgroundColor={backgroundColor}
            style={{
              width,
              borderRadius,
              opacity: disabled ? 0.35 : 1,
              height,
            }}
          >
            {icon}
            {actionIcon && (
            <Container
              style={{
                width: 24,
                height: 24,
                position: 'absolute',
                backgroundColor: actionIconColor,
                borderRadius: 10,
                right: -10,
                top: -5,
                padding: 4,
              }}
            >
              {actionIcon}
            </Container>
            )}
          </Container>
          <Container style={{ maxWidth: 150 }}>
            <CustomText
              text={label}
              fontWeight={fontWeight}
              typography="subtitle"
              textColor={textColor}
              fontSize={fontSize}
              marginTop={colum ? 5 : 0}
              textAlign="center"
              numberOfLines={2}
            />
          </Container>
        </Container>
      </Touchable>

    </Container>
  </Container>
);

export { OptionButton };
