import React, { useRef } from 'react';
import { Alert, Animated, ScrollView } from 'react-native';
import {
  Container, SafeArea, Text, TouchableText,
} from 'components';
import Theme from 'theme';

const TextScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeArea>
      <Text
        text="Text"
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
          <Text text="Default component is body" />
          <Text text={`Header1 - fontSize: ${Theme.Sizes.Header}`} typography="header" />
          <Text text={`Header2 - fontSize: ${Theme.Sizes.Title}`} typography="title" />
          <Text text={`Header3 - fontSize: ${Theme.Sizes.Subtitle}`} typography="subtitle" />
          <Text text={`Body - fontSize: ${Theme.Sizes.Body}`} typography="body" />
          <Text
            text="Custom Text - fontSize: 25 - fontWeight: Italic"
            fontSize={25}
            fontWeight="Thin"
            textColor={Theme.Colors.DarkSoul}
          />
          <Text
            text="numberOfLines when text is to large - Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
            numberOfLines={1}
          />
          <Text text="Text with spacing" spacing={10} />
          <Text text="Text centered" textAlign="center" />
          <Text text="Right aligned text" textAlign="right" />
          <Text text="capitalize text with transform prop" transform="capitalize" />
          <Text text="Underlined text" underline />

          <Text
            text="You can pass margin props"
            marginBottom={10}
            marginTop={20}
            marginLeft={16}
            marginRight={20}
          />

          <TouchableText
            text="TouchableText is a Text component wrapped in Touchable"
            onPress={() => Alert.alert('TouchableText pressed')}
          />

          <Text marginTop={20}>
            <Text text="TextSpan: " typography="header" />
            <Text text="is to render texts with different style" />
            <Text text=" you can add margins too " fontWeight="Thin" />
            <Text
              text="and add onPress function"
              underline
              onPress={() => Alert.alert('TextSpan pressed')}
              textColor={Theme.Colors.DarkSoul}
            />
          </Text>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default TextScreen;
