import React, { useState } from 'react';
import {
  Container, SafeArea, Text, CheckBoxGroup, CheckBoxGroupOption,
} from 'components';
import Theme from 'theme';
import { ScrollView } from 'react-native';

const CheckBoxGroupScreen: React.FC = () => {
  const [options, setOptions] = useState<Array<CheckBoxGroupOption>>([
    { label: 'Option 1', selected: false },
    { label: 'Option 2', selected: false },
    { label: 'Option 3', selected: false },
  ]);

  return (
    <SafeArea>
      <Text
        text="CheckBoxGroup"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <ScrollView contentContainerStyle={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Container>
          <Text text="Default component" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            options={options}
            onChange={setOptions}
          />

          <Text text="Title" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            title="Title"
            options={options}
            onChange={setOptions}
          />

          <Text text="Custom background" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            options={options}
            onChange={setOptions}
            backgroundColor="lightgray"
            borderRadius={8}
            padding={8}
          />

          <Text text="Custom typography" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup options={options} onChange={setOptions} typography="header" />

          <Text text="Custom font" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            options={options}
            onChange={setOptions}
            fontWeight="Light"
            fontSize={20}
            textColor="red"
          />

          <Text text="Type filled" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup options={options} onChange={setOptions} type="filled" />

          <Text text="Circular" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup label="Label" options={options} onChange={setOptions} circular />

          <Text text="Custom border" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            options={options}
            onChange={setOptions}
            circular
            borderColor={Theme.Colors.SpringBouquet}
            borderWidth={2}
          />

          <Text text="Custom sizes" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            options={options}
            onChange={setOptions}
            size={30}
            checkmarkSize={20}
          />

          <Text text="Right position" typography="subtitle" marginVertical={8} />
          <CheckBoxGroup
            options={options}
            onChange={setOptions}
            position="right"
            circular
            borderColor={Theme.Colors.SpringBouquet}
            borderWidth={2}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default CheckBoxGroupScreen;
