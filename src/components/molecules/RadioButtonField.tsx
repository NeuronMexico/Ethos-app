import React, { ReactElement, useState } from 'react';
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
  customLabel?: ReactElement;
}

const RadioButtonField: React.FC<Props> = ({
  label,
  selected = false,
  onChange,
  typography = 'caption',
  fontWeight,
  fontSize,
  marginVertical = 8,
  customLabel,
}: Props) => {
  const [centerText, setCenterText] = useState<boolean>(true);

  return (
    <Container style={{ marginVertical }}>
      <Touchable onPress={() => onChange(!selected)} opacityEffect>
        <Container row center={centerText}>
          <RadioButton
            selected={selected}
          />
          {customLabel || (
          <Text
            text={label}
            typography={typography}
            marginLeft={8}
            fontSize={fontSize}
            fontWeight={fontWeight}
            onTextLayout={({ nativeEvent: { lines } }) => setCenterText(lines.length <= 1)}
          />
          )}
        </Container>
      </Touchable>
    </Container>
  );
};

export { RadioButtonField };
