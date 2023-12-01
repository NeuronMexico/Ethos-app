import React from 'react';
import { Container } from 'components/atoms';
import Theme from 'theme';
import { ColorValue } from 'react-native';

interface Props {
  currentStep: number;
  totalSteps: number;
  color?: ColorValue;
  inactiveOpacity?: number;
  activeSize?: number;
  inactiveSize?: number;
  selectedColor?: ColorValue;
}

const DotPageIndicator: React.FC<Props> = ({
  currentStep,
  totalSteps,
  color = Theme.Colors.DarkSoul,
  inactiveOpacity = 0.2,
  activeSize = 8,
  inactiveSize = 6,
  selectedColor,
}: Props) => (
  <Container row middle>
    {Array.from({ length: totalSteps }).map((_, index) => (
      <Container
        key={index.toString()}
        circle
        width={index + 1 === currentStep ? activeSize : inactiveSize}
        height={index + 1 === currentStep ? activeSize : inactiveSize}
        backgroundColor={selectedColor || color}
        style={{ marginHorizontal: 5, opacity: index + 1 === currentStep ? 1 : inactiveOpacity }}
      />
    ))}
  </Container>
);

export { DotPageIndicator };
