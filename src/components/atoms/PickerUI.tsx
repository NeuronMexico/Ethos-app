import React, { ReactElement } from 'react';
import { ColorValue } from 'react-native';
import { Container, Text } from 'components';
import Theme from 'theme';
import { FontWeightTypes } from './CustomText';

export interface PickerUIProps {
  backgroundColor?: ColorValue;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: FontWeightTypes;
  borderless?: boolean;
  value?: string;
  placeholder: string;
  prefixIcon?: ReactElement;
  suffixIcon: ReactElement;
  paddingLeft?: number;
  paddingRight?: number;
  paddingVertical?: number;
  caption?: string;
}

const PickerUI: React.FC<PickerUIProps> = ({
  backgroundColor,
  borderRadius = 12,
  fontSize = 16,
  fontWeight = 'Medium',
  borderless = true,
  value,
  placeholder = '',
  prefixIcon,
  suffixIcon,
  paddingLeft = 16,
  paddingRight = 16,
  paddingVertical = 12,
  caption,
}) => (
  <Container
    backgroundColor={backgroundColor || (borderless && Theme.Colors.DrWhite) || Theme.Colors.White}
    row
    center
    style={{
      borderRadius,
      paddingLeft,
      paddingRight,
      paddingVertical,
      borderWidth: 1,
      borderColor: borderless ? backgroundColor || Theme.Colors.DrWhite : Theme.Colors.PlaceboBlue,
    }}
  >
    {prefixIcon}
    <Container style={{ marginLeft: prefixIcon ? 8 : 0 }}>
      <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        text={value || placeholder}
        textColor={value ? Theme.Colors.DarkSoul : Theme.Colors.NimbusCloud}
        marginTop={4}
        numberOfLines={1}
        marginRight={24}
      />
      {caption && <Text text={caption} typography="caption" marginTop={4} />}
    </Container>
    <Container style={{
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      paddingHorizontal: 16,
    }}
    >
      {suffixIcon}
    </Container>
  </Container>
);

export { PickerUI };
