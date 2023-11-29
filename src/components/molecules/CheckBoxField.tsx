import React, { ReactElement, useState } from 'react';
import { ColorValue } from 'react-native';
import { CheckBox, CheckBoxProps, Text } from 'components/atoms';
import { FontWeightTypes, TypographyTypes } from '../atoms/CustomText';
import { Container } from '../atoms/Container';
import { Touchable } from '../atoms/Touchable';

export interface CheckBoxFieldProps extends CheckBoxProps {
  label: string;
  onChange: (value: boolean) => void;
  fontWeight?: FontWeightTypes;
  fontSize?: number;
  textColor?: ColorValue;
  typography?: TypographyTypes;
  marginVertical?: number;
  customLabel?: ReactElement;
  position?: 'left' | 'right';
  centerCheckbox?: boolean;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  label,
  selected = false,
  onChange,
  typography = 'caption',
  fontWeight,
  textColor,
  fontSize,
  marginVertical = 8,
  borderColor,
  borderWidth,
  checkmarkSize,
  circular,
  size,
  type,
  customLabel,
  position = 'left',
  centerCheckbox = true,
  disabled,
}: CheckBoxFieldProps) => {
  const [centerText, setCenterText] = useState<boolean>(true);

  return (
    <Container style={{ marginVertical }}>
      <Touchable onPress={() => onChange(!selected)} opacityEffect disabled={disabled}>
        <Container row center={centerText && centerCheckbox}>
          {position === 'left' && (
          <CheckBox
            selected={selected}
            borderColor={borderColor}
            borderWidth={borderWidth}
            checkmarkSize={checkmarkSize}
            circular={circular}
            size={size}
            type={type}
            disabled={disabled}
          />
          )}
          <Container flex>
            {customLabel || (
            <Text
              text={label}
              typography={typography}
              textColor={textColor}
              marginLeft={position === 'left' ? 8 : 0}
              marginRight={position === 'right' ? 8 : 0}
              fontSize={fontSize}
              fontWeight={fontWeight}
              onTextLayout={({ nativeEvent: { lines } }) => setCenterText(lines.length <= 1)}
            />
            )}
          </Container>
          {position === 'right' && (
          <CheckBox
            selected={selected}
            borderColor={borderColor}
            borderWidth={borderWidth}
            checkmarkSize={checkmarkSize}
            circular={circular}
            size={size}
            type={type}
          />
          )}
        </Container>
      </Touchable>
    </Container>
  );
};

export { CheckBoxField };
