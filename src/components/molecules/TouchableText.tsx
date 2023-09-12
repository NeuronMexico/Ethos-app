import React from 'react';
import { TouchableOpacity } from 'react-native';
import Theme from 'theme';
import { CustomText as Text, CustomTextProps } from '../atoms/CustomText';

export interface TouchableTextProps extends CustomTextProps {
  onPress: () => void;
  hitSlop?: number;
  disabled?: boolean;
  activeOpacity?: number;
}

const TouchableText: React.FC<TouchableTextProps> = ({
  onPress,
  text,
  textAlign,
  textColor = Theme.Colors.DarkSoul,
  typography,
  fontSize,
  transform,
  fontWeight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  marginHorizontal,
  underline,
  allowFontScaling,
  spacing,
  lineHeight,
  hitSlop,
  disabled,
  activeOpacity = 0.2,
}: TouchableTextProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={activeOpacity}
    style={{
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
      marginHorizontal,
      opacity: disabled ? 0.2 : 1,
    }}
    hitSlop={{
      left: hitSlop, right: hitSlop, top: hitSlop, bottom: hitSlop,
    }}
    disabled={disabled}
  >
    <Text
      text={text}
      textAlign={textAlign}
      textColor={textColor}
      typography={typography}
      fontSize={fontSize}
      fontWeight={fontWeight}
      transform={transform}
      underline={underline}
      allowFontScaling={allowFontScaling}
      spacing={spacing}
      lineHeight={lineHeight}
    />
  </TouchableOpacity>
);

export { TouchableText };
