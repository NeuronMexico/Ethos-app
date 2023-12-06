import React, { ReactNode } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import {
  Container, Text, Touchable,
} from 'components';
import { FontWeightTypes, TypographyTypes } from 'components/atoms/CustomText';
import Theme from 'theme';
import { ChevronRightIcon } from 'assets/svg';

interface Props {
  label: string;
  onPress: () => void;
  typography?: TypographyTypes;
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: FontWeightTypes;
  iconSize?: number;
  disabled?: boolean;
  customIcon?: ReactNode;
  marginVertical?: ViewStyle['marginVertical'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginLeft?: ViewStyle['marginLeft'];
  marginRight?: ViewStyle['marginRight'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
}

const DirectAccess: React.FC<Props> = ({
  label,
  onPress,
  disabled,
  customIcon,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  typography = 'header',
  fontSize,
  fontWeight,
  color = Theme.Colors.DarkSoul,
  iconSize = 24,
}) => (
  <Touchable
    onPress={onPress}
    disabled={disabled}
    marginVertical={marginVertical}
    marginHorizontal={marginHorizontal}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    opacityEffect
  >
    <Container row center>
      <Text typography={typography} text={label} fontSize={fontSize} fontWeight={fontWeight} textColor={color} />
      { customIcon || <ChevronRightIcon color={color} width={iconSize} height={iconSize} />}
    </Container>
  </Touchable>
);

export { DirectAccess };
