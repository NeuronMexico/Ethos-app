import React, { useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import {
  Container, DateTimePicker, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { PickerPrefixIcon } from './assets';

const DateTimePickerScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const [value, setValue] = useState<Date>();

  return (
    <SafeArea>
      <Text
        text="DateTimePicker"
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
          <DateTimePicker value={value} onValueChange={setValue} placeholder="Placeholder" />

          <Text text="Label" typography="subtitle" marginVertical={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            label="Label"
            placeholder="Placeholder"
          />

          <Text text="Error message" typography="subtitle" marginTop={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            error="Error message"
            placeholder="Placeholder"
          />

          <Text text="Border picker" typography="subtitle" marginTop={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            borderless={false}
          />

          <Text text="Custom border radius" typography="subtitle" marginTop={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            borderless={false}
            borderRadius={24}
          />

          <Text text="Custom width" typography="subtitle" marginTop={8} />
          <DateTimePicker
            width={120}
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            borderless={false}
            borderRadius={24}
          />

          <Text text="Custom background color" typography="subtitle" marginTop={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            borderRadius={24}
            backgroundColor={Theme.Colors.PlaceboBlue}
          />

          <Text text="Prefix icon and custom paddings" typography="subtitle" marginTop={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            borderRadius={30}
            borderless={false}
            prefixIcon={<PickerPrefixIcon />}
            paddingLeft={8}
            paddingVertical={6}
          />

          <Text text="DateTimePicker with caption" typography="subtitle" marginTop={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            borderRadius={24}
            backgroundColor={Theme.Colors.PlaceboBlue}
            caption="Caption"
            paddingVertical={8}
          />

          <Text text="min and max dates" typography="subtitle" marginVertical={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            minimumDate={new Date(2023, 8, 1)}
            maximumDate={new Date(2023, 8, 30)}
          />

          <Text text="Custom start date" typography="subtitle" marginVertical={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            startDate={new Date(2020, 0, 1)}
          />

          <Text text="Time picker" typography="subtitle" marginVertical={8} />
          <DateTimePicker
            value={value}
            onValueChange={setValue}
            placeholder="Placeholder"
            mode="time"
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default DateTimePickerScreen;
