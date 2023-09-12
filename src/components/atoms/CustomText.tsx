import React, { ReactNode } from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
import Theme from 'theme';
import { typographyLightStyle } from './textStyles';

export type TypographyTypes = 'header' | 'title' | 'subtitle' | 'body';

export type FontWeightTypes = 'Black' | 'Bold' | 'ExtraBold' | 'ExtraLight' | 'Light' | 'Medium' | 'Regular'
| 'Semibold' | 'Thin';

export interface CustomTextProps {
  text?: string;
  children?: ReactNode;
  textAlign?: TextStyle['textAlign'];
  textColor?: TextStyle['color'];
  typography?: TypographyTypes;

  fontWeight?: FontWeightTypes;
  fontSize?: number;
  numberOfLines?: number;
  transform?: TextStyle['textTransform'];
  underline?: boolean;
  allowFontScaling?: boolean;
  spacing?: number;
  lineHeight?: number;

  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  adjustsFontSizeToFit?: boolean;
  onPress?: () => void;
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  children,
  typography = 'body',
  textColor,
  textAlign,
  fontWeight,
  fontSize,
  numberOfLines,
  transform,
  underline,
  allowFontScaling,
  spacing,
  lineHeight,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  adjustsFontSizeToFit,
  onPress,
}: CustomTextProps) => {
  const style = typographyLightStyle;

  const textStyle: StyleProp<TextStyle> = [];
  switch (typography) {
    case 'header': textStyle.push(style.header); break;
    case 'title': textStyle.push(style.title); break;
    case 'subtitle': textStyle.push(style.subtitle); break;
    case 'body': textStyle.push(style.body); break;
    default: break;
  }

  if (fontSize) textStyle.push({ fontSize });
  if (textColor) textStyle.push({ color: textColor });

  if (fontWeight) {
    let selectedWeight: FontWeightTypes = 'Regular';

    if (fontWeight) selectedWeight = fontWeight;
    else if (typography === 'header') selectedWeight = 'Semibold';
    else if (typography === 'title') selectedWeight = 'Bold';

    textStyle.push({
      fontFamily: Theme.Fonts[selectedWeight],
    });
  }

  return (
    <Text
      style={[textStyle, {
        textAlign,
        textTransform: transform,
        textDecorationLine: underline ? 'underline' : 'none',
        letterSpacing: spacing,
        lineHeight,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        marginHorizontal,
        marginVertical,
      }]}
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      onPress={onPress}
    >
      {text || children}
    </Text>
  );
};

export { CustomText };
