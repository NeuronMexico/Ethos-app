import React, { useEffect, useState } from 'react';
import { Container, SwitchField } from 'components';
import Theme from 'theme';

export type SwitchGroupOption = {
  label: string;
  active: boolean;
};

interface Props {
  options: Array<SwitchGroupOption>;
  onChange: (values: Array<SwitchGroupOption>) => void;
}

const SwitchGroup: React.FC<Props> = ({
  options,
  onChange,
}) => {
  const [activeStates, setActiveStates] = useState<Array<SwitchGroupOption>>(options);

  useEffect(() => onChange(activeStates), [activeStates, onChange]);

  return (
    <Container>
      {options.map(({ label, active }, index) => (
        <Container style={{ borderBottomWidth: index < options.length - 1 ? 1 : 0, borderColor: Theme.Colors.PlaceboBlue }}>
          <SwitchField
            key={index}
            label={label}
            active={active}
            onChange={(value) => {
              const auxStates = [...activeStates];
              auxStates[index].active = value;

              setActiveStates(auxStates);
            }}
          />
        </Container>
      ))}
    </Container>
  );
};

export { SwitchGroup };
