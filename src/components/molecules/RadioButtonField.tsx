import React, { useState } from 'react';
import { ColorValue } from 'react-native';
import { RadioButton, Text } from 'components/atoms';
import { FontWeightTypes, TypographyTypes } from '../atoms/CustomText';
import { Container } from '../atoms/Container';
import { Touchable } from '../atoms/Touchable';

export interface RadioButtonFieldProps {
  label: string;
  selected: boolean;
  onChange: (value: boolean) => void;
  fontWeight?: FontWeightTypes;
  fontSize?: number;
  typography?: TypographyTypes;
  marginVertical?: number;
  value?: string;
  caption?: string;
  centerRadio?: boolean;
  captionSize?: number;
  captionFontWeight?: FontWeightTypes;
  captionTextColor?: ColorValue;
  captionValue?: string;
}

const RadioButtonField: React.FC<RadioButtonFieldProps> = ({
  label,
  selected = false,
  onChange,
  typography = 'subtitle',
  fontWeight = 'Semibold',
  fontSize,
  marginVertical = 8,
  value,
  caption,
  centerRadio = false,
  captionSize = 15,
  captionFontWeight = 'Regular',
  captionTextColor,
  captionValue,
}: RadioButtonFieldProps) => {
  const [centerText, setCenterText] = useState<boolean>(true);

  return (
    <Container style={{ marginVertical }}>
      <Touchable onPress={() => onChange(!selected)} opacityEffect>
        <Container row center={(!caption && centerText) || centerRadio}>
          <RadioButton
            selected={selected}
          />
          <Container flex>
            <Container row center={centerText} style={{ flexGrow: 1 }}>
              <Container flex>
                <Text
                  text={label}
                  typography={typography}
                  marginLeft={8}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  onTextLayout={({ nativeEvent: { lines } }) => setCenterText(lines.length <= 1)}
                />
              </Container>
              {!!value && (
              <Text
                text={value}
                typography={typography}
                marginLeft={8}
                fontSize={fontSize}
                fontWeight={fontWeight}
              />
              )}
            </Container>
            <Container row space="between">
              <Container>
                {!!caption && (
                <Text
                  text={caption}
                  fontSize={captionSize}
                  fontWeight={captionFontWeight}
                  textColor={captionTextColor}
                  marginLeft={8}
                  marginTop={12}
                />
                )}
              </Container>
              {!!captionValue && (
                <Text
                  text={captionValue}
                  fontSize={captionSize}
                  fontWeight={captionFontWeight}
                  textColor={captionTextColor}
                  marginLeft={8}
                  marginTop={12}
                />
              )}
            </Container>
          </Container>
        </Container>
      </Touchable>
    </Container>
  );
};

export { RadioButtonField };
