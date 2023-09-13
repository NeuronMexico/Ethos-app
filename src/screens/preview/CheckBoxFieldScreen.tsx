import React, { useState } from 'react';
import {
  Container, SafeArea, Text, CheckboxField,
} from 'components';
import Theme from 'theme';

const CheckBoxFieldScreen: React.FC = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <SafeArea>
      <Text
        text="CheckBoxField"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <CheckboxField label="Label" selected={selected} onChange={setSelected} />

        <Text text="Custom typography" typography="subtitle" marginVertical={8} />
        <CheckboxField label="Label" selected={selected} onChange={setSelected} typography="header" />

        <Text text="Custom font" typography="subtitle" marginVertical={8} />
        <CheckboxField label="Label" selected={selected} onChange={setSelected} fontWeight="Light" fontSize={20} />

        <Text text="Type filled" typography="subtitle" marginVertical={8} />
        <CheckboxField label="Label" selected={selected} onChange={setSelected} type="filled" />

        <Text text="Circular" typography="subtitle" marginVertical={8} />
        <CheckboxField label="Label" selected={selected} onChange={setSelected} circular />

        <Text text="Custom border" typography="subtitle" marginVertical={8} />
        <CheckboxField
          label="Label"
          selected={selected}
          onChange={setSelected}
          circular
          borderColor={Theme.Colors.SpringBouquet}
          borderWidth={2}
        />

        <Text text="Custom sizes" typography="subtitle" marginVertical={8} />
        <CheckboxField
          label="Label"
          selected={selected}
          onChange={setSelected}
          size={30}
          checkmarkSize={20}
        />

        <Text text="Custom label" typography="subtitle" marginVertical={8} />
        <CheckboxField
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

export default CheckBoxFieldScreen;
