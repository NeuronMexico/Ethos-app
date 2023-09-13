import React from 'react';
import { Switch, Text } from 'components/atoms';
import { FontWeightTypes } from '../atoms/CustomText';
import { Container } from '../atoms/Container';
import { Touchable } from '../atoms/Touchable';

interface Props {
  label: string;
  active: boolean;
  onChange: (value: boolean) => void;
  fontWeight?: FontWeightTypes;
  fontSize?: number;
}

const SwitchField: React.FC<Props> = ({
  label,
  active = false,
  onChange,
  fontWeight = 'Semibold',
  fontSize = 16,
}: Props) => (
  <Container style={{ padding: 16 }}>
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
