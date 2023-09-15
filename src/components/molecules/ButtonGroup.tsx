import React from 'react';
import { ColorValue } from 'react-native';
import { Button, Container } from 'components';
import Theme from 'theme';

export type ButtonGroupOption = {
  label: string;
  onPress: (index: number) => void;
  buttonStyle?: {
    backgroundColor?: ColorValue;
    textColor?: ColorValue;
  }
};

interface Props {
  options: Array<ButtonGroupOption>;
  horizontalSpaceBetween?: number;
  verticalSpaceBetween?: number;
  buttonHorizontalPadding?: number;
  buttonVerticalPadding?: number;
  vertical?: boolean;
  verticalAlignment?: 'left' | 'center' | 'right';
}

const ButtonGroup: React.FC<Props> = ({
  options,
  horizontalSpaceBetween = 4,
  verticalSpaceBetween = 8,
  buttonHorizontalPadding = 16,
  buttonVerticalPadding = 8,
  vertical,
  verticalAlignment = 'center',
}) => (
  <Container
    row={!vertical}
    style={{
      flexWrap: vertical ? 'nowrap' : 'wrap',
      marginVertical: -verticalSpaceBetween,
      marginHorizontal: -horizontalSpaceBetween,
    }}
    crossAlignment={vertical && verticalAlignment !== 'center'
      ? (verticalAlignment === 'left' && 'start') || 'end' : undefined}
    center={vertical && verticalAlignment === 'center'}
  >
    {options.map(({ label, onPress, buttonStyle }, index) => (
      <Container
        key={index}
        style={{
          marginHorizontal: horizontalSpaceBetween,
          marginVertical: verticalSpaceBetween,
        }}
      >
        <Button
          label={label}
          onPress={() => onPress(index)}
          backgroundColor={buttonStyle?.backgroundColor ?? Theme.Colors.WhiteSmoke}
          textColor={buttonStyle?.textColor}
          paddingVertical={buttonVerticalPadding}
          paddingHorizontal={buttonHorizontalPadding}
        />
      </Container>
    ))}
  </Container>
);

export { ButtonGroup };
