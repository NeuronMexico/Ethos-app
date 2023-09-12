import React, { useRef } from 'react';
import { Alert, Animated, ScrollView } from 'react-native';
import {
  Container, SafeArea, Text, Touchable,
} from 'components';
import Theme from 'theme';

const TouchableScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const onPress = () => Alert.alert('Touchable pressed');

  return (
    <SafeArea>
      <Text
        text="Touchable"
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
        <Container crossAlignment="start">
          <Text text="Default component" typography="subtitle" marginVertical={8} />
          <Touchable onPress={onPress}>
            <Container width={100} height={100} backgroundColor="cyan" />
          </Touchable>

          <Text text="Rounded Ripple" typography="subtitle" marginVertical={8} />
          <Touchable onPress={onPress} rounded>
            <Container width={100} height={100} backgroundColor="cyan" />
          </Touchable>

          <Text text="onPress effect disabled" typography="subtitle" marginVertical={8} />
          <Touchable onPress={onPress} effectEnable={false}>
            <Container width={100} height={100} backgroundColor="cyan" />
          </Touchable>

          <Text text="Opacity effect on android" typography="subtitle" marginVertical={8} />
          <Touchable onPress={onPress} opacityEffect>
            <Container width={100} height={100} backgroundColor="cyan" />
          </Touchable>

          <Text text="Custom Ripple color on android" typography="subtitle" marginVertical={8} />
          <Touchable onPress={onPress} androidRippleColor="red">
            <Container width={100} height={100} backgroundColor="cyan" />
          </Touchable>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default TouchableScreen;
