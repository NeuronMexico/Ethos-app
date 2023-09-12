import React, { useState } from 'react';
import {
  Container, SafeArea, CheckBox, Text,
} from 'components';
import Theme from 'theme';

const CheckboxScreen: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SafeArea>
      <Text
        text="CheckboxField"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <CheckBox selected={selected} onChange={setSelected} />

        <Text text="Type filled" typography="subtitle" marginVertical={8} />
        <CheckBox selected={selected} onChange={setSelected} type="filled" />

        <Text text="Circular" typography="subtitle" marginVertical={8} />
        <CheckBox selected={selected} onChange={setSelected} circular />

        <Text text="Custom border" typography="subtitle" marginVertical={8} />
        <CheckBox
          selected={selected}
          onChange={setSelected}
          circular
          borderColor={Theme.Colors.SpringBouquet}
          borderWidth={2}
        />

        <Text text="Custom sizes" typography="subtitle" marginVertical={8} />
        <CheckBox
          selected={selected}
          onChange={setSelected}
          size={30}
          checkmarkSize={20}
        />
      </Container>
    </SafeArea>
  );
};

export default CheckboxScreen;
