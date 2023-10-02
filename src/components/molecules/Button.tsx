import React, { ReactElement } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Theme from 'theme';
import { Touchable, TouchableProps } from '../atoms/Touchable';
import { Container } from '../atoms/Container';
import { CustomText, FontWeightTypes } from '../atoms/CustomText';

interface Props extends TouchableProps {
  label?: string;
  backgroundColor?: ColorValue;
  borderColor?: string;
  textColor?: ColorValue;
  icon?: ReactElement;
  fontSize?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  colum?: boolean;
  fontWeight?: FontWeightTypes;
  borderStyle?: boolean;
  outsideLabel?: boolean;
  outsideWidth?: ViewStyle['width'];
  colorless?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  onPress,
  disabled,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  colorless,
  backgroundColor = colorless ? undefined : Theme.Colors.DarkSoul,
  textColor = colorless ? Theme.Colors.DarkSoul : Theme.Colors.White,
  androidRippleColor = colorless ? Theme.Colors.DarkSoul : Theme.Colors.White,
  borderColor,
  icon,
  fontSize,
  paddingHorizontal,
  paddingVertical = 14,
  fontWeight = 'Bold',
  borderRadius = 100,
  width,
  height,
  colum,
  rounded,
  borderStyle,
  outsideLabel,
  outsideWidth,
}: Props) => (
  <Container style={{
    width: outsideWidth || width || '100%',
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    borderRadius,
    overflow: 'hidden',
  }}
  >
    <Touchable onPress={onPress} androidRippleColor={androidRippleColor} disabled={disabled} rounded={rounded}>
      <Container
        middle
        backgroundColor={backgroundColor}
        style={{
          paddingHorizontal,
          paddingVertical,
          borderWidth: borderColor ? 2 : 0,
          borderStyle: borderStyle ? 'dashed' : 'solid',
          borderColor,
          borderRadius,
          opacity: disabled ? 0.35 : 1,
          width,
          height,
          alignSelf: outsideWidth ? 'center' : 'auto',
        }}
      >
        <Container row={!colum} middle style={{ opacity: disabled ? 0.3 : 1 }}>
          {icon}
          {!!label && !outsideLabel && (
          <CustomText
            text={label}
            fontWeight={fontWeight}
            typography="subtitle"
            textColor={textColor}
            fontSize={fontSize}
            marginLeft={icon && !colum ? 8 : 0}
            marginTop={icon && colum ? 5 : 0}
            textAlign="center"
            numberOfLines={2}
          />
          )}
        </Container>
      </Container>
      {!!label && outsideLabel && (
      <CustomText
        text={label}
        fontWeight={fontWeight}
        typography="subtitle"
        textColor={textColor}
        fontSize={fontSize}
        marginLeft={icon && !colum ? 5 : 0}
        marginTop={4}
        textAlign="center"
        numberOfLines={2}
      />
      )}
    </Touchable>
  </Container>
);

export { Button };
