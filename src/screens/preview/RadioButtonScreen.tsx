import React, { useState } from 'react';
import {
  Container, SafeArea, Text, RadioButton,
} from 'components';
import Theme from 'theme';

const RadioButtonScreen: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SafeArea>
      <Text
        text="RadioButton"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <RadioButton selected={selected} onChange={setSelected} />
      </Container>
    </SafeArea>
  );
};

export default RadioButtonScreen;
