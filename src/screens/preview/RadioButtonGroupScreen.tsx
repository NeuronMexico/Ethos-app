import React, { useState } from 'react';
import {
  Container, SafeArea, Text, RadioButtonGroup, RadioButtonGroupOption,
} from 'components';
import Theme from 'theme';

const options: Array<RadioButtonGroupOption> = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const RadioButtonGroupScreen: React.FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <SafeArea>
      <Text
        text="RadioButtonGroup"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
        <Text text="Default component" typography="subtitle" marginVertical={8} />
        <RadioButtonGroup options={options} value={value} onChange={setValue} />

        <Text text="Custom typography" typography="subtitle" marginVertical={8} />
        <RadioButtonGroup options={options} value={value} onChange={setValue} typography="header" />

        <Text text="Custom font" typography="subtitle" marginVertical={8} />
        <RadioButtonGroup options={options} value={value} onChange={setValue} fontWeight="Light" fontSize={20} />

        <Text text="With value" typography="subtitle" marginVertical={8} />
        <RadioButtonGroup
          options={options}
          value={value}
          onChange={setValue}
          suffixValue="$799.00"
        />

        <Text text="With caption" typography="subtitle" marginVertical={8} />
        <RadioButtonGroup
          options={options}
          value={value}
          onChange={setValue}
          suffixValue="$799.00"
          caption="Caption"
        />
      </Container>
    </SafeArea>
  );
};

export default RadioButtonGroupScreen;
