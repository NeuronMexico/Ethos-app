import React from 'react';
import { Container, RadioButtonField, RadioButtonFieldProps } from 'components';

export type RadioButtonGroupOption = {
  label: string;
  value: string;
};

interface Props extends Omit<RadioButtonFieldProps, 'label' | 'selected' | 'onChange' | 'value'> {
  value: string;
  options: Array<RadioButtonGroupOption>;
  spaceBetweenElements?: number;
  onChange: (value: string) => void;
  suffixValue?: string;
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
  caption,
  suffixValue,
  marginVertical = 24,
}) => (
  <Container style={{ marginVertical }}>
    {options.map(({ label, value: optionValue }, index) => (
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
