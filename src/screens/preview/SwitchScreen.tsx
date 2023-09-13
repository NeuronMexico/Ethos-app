import React, { useState } from 'react';
import {
  Container, SafeArea, Text, Switch,
} from 'components';
import Theme from 'theme';

const SwitchScreen: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SafeArea>
      <Text
        text="Switch"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <Switch active={selected} onChange={setSelected} />
      </Container>
    </SafeArea>
  );
};

export default SwitchScreen;
