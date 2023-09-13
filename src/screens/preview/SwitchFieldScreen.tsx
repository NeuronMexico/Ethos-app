import React, { useState } from 'react';
import {
  Container, SafeArea, Text, SwitchField,
} from 'components';
import Theme from 'theme';

const SwitchFieldScreen: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SafeArea>
      <Text
        text="SwitchField"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <SwitchField label="Label" active={selected} onChange={setSelected} />

        <Text text="Custom font" typography="subtitle" marginVertical={8} />
        <SwitchField label="Label" active={selected} onChange={setSelected} fontWeight="Light" fontSize={20} />
      </Container>
    </SafeArea>
  );
};

export default SwitchFieldScreen;
