import React, { ReactElement } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Theme from 'theme';
import { Touchable, TouchableProps } from '../atoms/Touchable';
import { Container } from '../atoms/Container';
import { CustomText, FontWeightTypes } from '../atoms/CustomText';

interface Props extends TouchableProps {
  title?: string;
  label?: string;
  rightText?: string;
  icon?: ReactElement;
  rightIcon?: ReactElement;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: ColorValue;
  labelColor?: ColorValue;
  rightTextColor?: ColorValue;
  rightFontWeight?: FontWeightTypes;
  rightFontSize?: number;
  fontSize?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  fontWeight?: FontWeightTypes
  borderStyle?: boolean;
  barColor?: ColorValue;
  alignContent?: 'space-around' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-evenly' | undefined;
}

const MultipleTextButton: React.FC<Props> = ({
  title,
  label,
  onPress,
  icon,
  rightIcon,
  disabled,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  backgroundColor,
  textColor = Theme.Colors.DarkSoul,
  androidRippleColor = Theme.Colors.White,
  borderColor,
  fontSize,
  paddingHorizontal = 16,
  paddingVertical = 16,
  fontWeight = 'Bold',
  borderRadius = 100,
  width,
  height,
  rounded,
  borderStyle,
  rightText,
  rightTextColor,
  barColor,
  labelColor = Theme.Colors.DarkSoul,
  alignContent = 'space-around',
  rightFontSize = fontSize,
  rightFontWeight = fontWeight,
}: Props) => (
  <Container style={{
    width: width || '100%',
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
        backgroundColor={backgroundColor}
        style={{
          paddingHorizontal: alignContent ? paddingHorizontal : 0,
          paddingVertical,
          borderWidth: borderColor ? 2 : 0,
          borderStyle: borderStyle ? 'dashed' : 'solid',
          borderColor,
          borderRadius,
          opacity: disabled ? 0.35 : 1,
          height,
        }}
      >
        <Container
          row
          center
          style={{
            justifyContent: alignContent,
            display: 'flex',
          }}
        >
          <Container row center>
            {icon}
            {barColor && (
            <Container
              backgroundColor={barColor}
              style={{
                width: 11,
                height: 40,
                borderRadius: 10,
              }}
            />
            )}
            <Container>
              {title && (
              <CustomText
                text={title}
                fontWeight={fontWeight}
                typography="subtitle"
                textColor={textColor}
                fontSize={fontSize}
                textAlign="left"
                numberOfLines={2}
                marginLeft={15}
              />
              )}
              {label && (
              <CustomText
                text={label}
                fontWeight="Light"
                typography="subtitle"
                textColor={labelColor}
                fontSize={13}
                textAlign="left"
                marginLeft={15}
              />
              )}
            </Container>
          </Container>
          {rightText && (
          <CustomText
            text={rightText}
            fontWeight={rightFontWeight}
            typography="subtitle"
            textColor={rightTextColor}
            fontSize={rightFontSize}
            textAlign="right"
          />
          )}
          {rightIcon}
        </Container>
      </Container>
    </Touchable>
  </Container>
);

export { MultipleTextButton };
