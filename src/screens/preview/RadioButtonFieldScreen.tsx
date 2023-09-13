import React, { useState } from 'react';
import {
  Container, SafeArea, Text, RadioButtonField,
} from 'components';
import Theme from 'theme';

const RadioButtonFieldScreen: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SafeArea>
      <Text
        text="RadioButtonField"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <RadioButtonField label="Label" selected={selected} onChange={setSelected} />

        <Text text="Custom typography" typography="subtitle" marginVertical={8} />
        <RadioButtonField label="Label" selected={selected} onChange={setSelected} typography="header" />

        <Text text="Custom font" typography="subtitle" marginVertical={8} />
        <RadioButtonField label="Label" selected={selected} onChange={setSelected} fontWeight="Light" fontSize={20} />

        <Text text="Custom label" typography="subtitle" marginVertical={8} />
        <RadioButtonField
          label=""
          selected={selected}
          onChange={setSelected}
          customLabel={(
            <Text marginLeft={8}>
              <Text text="Label" />
              <Text text=" with" typography="header" />
              <Text text=" different" typography="subtitle" />
              <Text text=" fonts" fontWeight="Light" />
            </Text>
          )}
        />
      </Container>
    </SafeArea>
  );
};

export default RadioButtonFieldScreen;
