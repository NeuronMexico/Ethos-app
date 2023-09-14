import React from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Theme from 'theme';
import { Touchable, TouchableProps } from '../atoms/Touchable';
import { Container } from '../atoms/Container';
import { CustomText, FontWeightTypes } from '../atoms/CustomText';

interface Props extends TouchableProps {
  title?: string;
  label?: string;
  rightText?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: ColorValue;
  labelColor?: ColorValue;
  rightTextColor?: ColorValue;
  fontSize?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  thin?: boolean;
  fontWeight?: FontWeightTypes
  borderStyle?: boolean;
  barColor?: ColorValue;
}

const MultipleTextButton: React.FC<Props> = ({
  title,
  label,
  onPress,
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
  paddingHorizontal,
  paddingVertical,
  fontWeight = 'Bold',
  borderRadius = 100,
  width,
  height,
  thin,
  rounded,
  borderStyle,
  rightText,
  rightTextColor,
  barColor,
  labelColor = Theme.Colors.DarkSoul,
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
          paddingHorizontal,
          paddingVertical: paddingVertical || (thin && 12) || 18,
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
          style={{
            width,
            justifyContent: 'space-around',
            display: 'flex',
          }}
        >
          <Container row>
            {barColor && (
            <Container
              backgroundColor={barColor}
              style={{
                width: 11,
                height: 40,
                borderRadius: 10,
                marginRight: 10,
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
              />
              )}
            </Container>
          </Container>
          {rightText && (
          <CustomText
            text={rightText}
            fontWeight={fontWeight}
            typography="subtitle"
            textColor={rightTextColor}
            fontSize={fontSize}
            textAlign="right"
          />
          )}
        </Container>
      </Container>
    </Touchable>
  </Container>
);

export { MultipleTextButton };
