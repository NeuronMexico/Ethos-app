import React from 'react';
import { Container, RadioButtonField, RadioButtonFieldProps } from 'components';

export interface RadioButtonGroupOption extends Omit<RadioButtonFieldProps, 'selected' | 'onChange' | 'value'> {
  value: string;
  suffixValue?: string;
}

interface Props extends Omit<RadioButtonFieldProps, 'label' | 'selected' | 'onChange' | 'value' | 'caption'> {
  value: string;
  options: Array<RadioButtonGroupOption>;
  spaceBetweenElements?: number;
  onChange: (value: string) => void;
  marginVertical?: number;
}

const RadioButtonGroup: React.FC<Props> = ({
  value,
  options,
  spaceBetweenElements = 12,
  onChange,
  fontSize,
  fontWeight,
  typography,
  marginVertical = 24,
}) => (
  <Container style={{ marginVertical }}>
    {options.map(({
      label, value: optionValue, caption, suffixValue,
    }, index) => (
      <Container key={index} style={{ marginTop: index === 0 ? 0 : spaceBetweenElements }}>
        <RadioButtonField
          label={label}
          selected={value === optionValue}
          marginVertical={0}
          onChange={(selected) => {
            if (selected) onChange(optionValue);
          }}
          fontSize={fontSize}
          fontWeight={fontWeight}
          typography={typography}
          caption={caption}
          value={suffixValue}
        />
      </Container>
    ))}
  </Container>
);

export { RadioButtonGroup };
