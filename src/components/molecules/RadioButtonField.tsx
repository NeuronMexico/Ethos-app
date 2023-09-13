import React from 'react';
import { RadioButton, Text } from 'components/atoms';
import { FontWeightTypes, TypographyTypes } from '../atoms/CustomText';
import { Container } from '../atoms/Container';
import { Touchable } from '../atoms/Touchable';

interface Props {
  label: string;
  selected: boolean;
  onChange: (value: boolean) => void;
  fontWeight?: FontWeightTypes;
  fontSize?: number;
  typography?: TypographyTypes;
  marginVertical?: number;
  value?: string;
  caption?: string;
}

const RadioButtonField: React.FC<Props> = ({
  label,
  selected = false,
  onChange,
  typography = 'subtitle',
  fontWeight = 'Semibold',
  fontSize,
  marginVertical = 8,
  value,
  caption,
}: Props) => (
  <Container style={{ marginVertical }}>
    <Touchable onPress={() => onChange(!selected)} opacityEffect>
      <Container row center={!caption}>
        <RadioButton
          selected={selected}
        />
        <Container flex>
          <Container row center style={{ flexGrow: 1 }}>
            <Container flex>
              <Text
                text={label}
                typography={typography}
                marginLeft={8}
                fontSize={fontSize}
                fontWeight={fontWeight}
                numberOfLines={1}
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
          {!!caption && (
          <Text
            text={caption}
            typography="subtitle"
            fontWeight="Regular"
            marginLeft={8}
            marginTop={12}
          />
          )}
        </Container>
      </Container>
    </Touchable>
  </Container>
);

export { RadioButtonField };
