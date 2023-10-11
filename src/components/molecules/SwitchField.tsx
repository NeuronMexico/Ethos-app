import React from 'react';
import { Switch, Text } from 'components/atoms';
import Theme from 'theme';
import { ColorValue } from 'react-native';
import { FontWeightTypes } from '../atoms/CustomText';
import { Container, Touchable } from '../atoms';

interface Props {
  label: string;
  active: boolean;
  onChange: (value: boolean) => void;
  fontWeight?: FontWeightTypes;
  fontSize?: number;
  borderBottom?: boolean;
  borderBottomColor?: ColorValue;
}

const SwitchField: React.FC<Props> = ({
  label,
  active = false,
  onChange,
  fontWeight = 'Semibold',
  fontSize = 16,
  borderBottom = false,
  borderBottomColor = Theme.Colors.PlaceboBlue,
}: Props) => (
  <Container style={{
    padding: 16,
    borderBottomWidth: borderBottom ? 1 : 0,
    borderBottomColor,
  }}
  >
    <Touchable onPress={() => onChange(!active)} opacityEffect>
      <Container row center>
        <Container flex>
          <Text
            text={label}
            marginLeft={8}
            fontSize={fontSize}
            fontWeight={fontWeight}
          />
        </Container>
        <Switch
          active={active}
        />
      </Container>
    </Touchable>
  </Container>
);

export { SwitchField };
