import React, { useEffect, useState } from 'react';
import { ColorValue } from 'react-native';
import {
  Card, CheckBoxField, CheckBoxFieldProps, Container, Text,
} from 'components';
import Theme from 'theme';

export type CheckBoxGroupOption = {
  label: string;
  selected: boolean;
};

interface Props extends Omit<CheckBoxFieldProps, 'label' | 'selected' | 'customLabel' | 'marginVertical' | 'onChange'> {
  backgroundColor?: ColorValue;
  padding?: number;
  borderRadius?: number;
  title?: string;
  options: Array<CheckBoxGroupOption>;
  spaceBetweenElements?: number;
  onChange: (values: Array<CheckBoxGroupOption>) => void;
}

const CheckBoxGroup: React.FC<Props> = ({
  backgroundColor = Theme.Colors.PlaceboBlue,
  padding = 16,
  borderRadius = 24,
  title,
  options,
  spaceBetweenElements = 12,
  onChange,
  borderColor,
  borderWidth,
  checkmarkSize,
  circular,
  fontSize,
  fontWeight,
  position,
  size,
  textColor,
  type,
  typography,
  disabled,
}) => {
  const [activeStates, setActiveStates] = useState<Array<CheckBoxGroupOption>>(options);

  useEffect(() => onChange(activeStates), [activeStates, onChange]);

  return (
    <Card backgroundColor={backgroundColor} padding={padding} borderRadius={borderRadius} column>
      {!!title && <Text text={title} typography="header" marginBottom={8} />}
      {options.map(({ label, selected }, index) => (
        <Container key={index} style={{ marginTop: index === 0 ? 0 : spaceBetweenElements }}>
          <CheckBoxField
            label={label}
            selected={selected}
            marginVertical={0}
            onChange={(value) => {
              const auxStates = [...activeStates];
              auxStates[index].selected = value;

              setActiveStates(auxStates);
            }}
            borderColor={borderColor}
            borderWidth={borderWidth}
            checkmarkSize={checkmarkSize}
            circular={circular}
            fontSize={fontSize}
            fontWeight={fontWeight}
            position={position}
            size={size}
            textColor={textColor}
            type={type}
            typography={typography}
            disabled={disabled}
          />
        </Container>
      ))}
    </Card>
  );
};

export { CheckBoxGroup };
