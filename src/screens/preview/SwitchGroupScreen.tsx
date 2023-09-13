import React, { useState } from 'react';
import {
  Container, SafeArea, Text, SwitchGroup, SwitchGroupOption,
} from 'components';
import Theme from 'theme';

const SwitchGroupScreen: React.FC = () => {
  const [options, setOptions] = useState<Array<SwitchGroupOption>>([
    { label: 'Option 1', active: false },
    { label: 'Option 2', active: false },
    { label: 'Option 3', active: false },
  ]);

  return (
    <SafeArea>
      <Text
        text="SwitchGroup"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <SwitchGroup options={options} onChange={setOptions} />
      </Container>
    </SafeArea>
  );
};

export default SwitchGroupScreen;
