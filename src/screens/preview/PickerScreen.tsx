import React, { useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import {
  Container, Picker, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { PickerPrefixIcon } from './assets';

const OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
];

const PickerScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const [value, setValue] = useState<string>('');

  return (
    <SafeArea>
      <Text
        text="Picker"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <ScrollView
        contentContainerStyle={{ paddingTop: 16, paddingHorizontal: Theme.Sizes.Padding }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container>
          <Text text="Default component" typography="subtitle" marginVertical={8} />
          <Picker value={value} onValueChange={setValue} options={OPTIONS} placeholder="Placeholder" />

          <Text text="Label" typography="subtitle" marginVertical={8} />
          <Picker value={value} onValueChange={setValue} options={OPTIONS} label="Label" placeholder="Placeholder" />

          <Text text="Error message" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            error="Error message"
            placeholder="Placeholder"
          />

          <Text text="ActionSheet on iOS" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            useActionSheet
            actionSheetTitle="Title"
            placeholder="Placeholder"
          />

          <Text text="Android mode dialog (default is dropdown)" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            androidMode="dialog"
            placeholder="Placeholder"
          />

          <Text text="Border picker" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderless={false}
          />

          <Text text="Custom border radius" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderless={false}
            borderRadius={24}
          />

          <Text text="Custom width" typography="subtitle" marginTop={8} />
          <Picker
            width={120}
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderless={false}
            borderRadius={24}
          />

          <Text text="Custom background color" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderRadius={24}
            backgroundColor={Theme.Colors.PlaceboBlue}
          />

          <Text text="Custom icon size" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderRadius={24}
            backgroundColor={Theme.Colors.PlaceboBlue}
            iconSize={15}
          />

          <Text text="Prefix icon and custom paddings" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderRadius={30}
            borderless={false}
            prefixIcon={<PickerPrefixIcon />}
            paddingLeft={8}
            paddingVertical={6}
          />

          <Text text="Picker with caption" typography="subtitle" marginTop={8} />
          <Picker
            value={value}
            onValueChange={setValue}
            options={OPTIONS}
            placeholder="Placeholder"
            borderRadius={24}
            backgroundColor={Theme.Colors.PlaceboBlue}
            caption="Caption"
            paddingVertical={8}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default PickerScreen;
