import React, { useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import {
  Container, SafeArea, Text,
} from 'components';
import Theme from 'theme';

const ContainerScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeArea>
      <Text
        text="Container"
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
          <Text text="Width and Height" typography="subtitle" marginVertical={8} />
          <Container backgroundColor={Theme.Colors.White}>
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginVertical: 5 }} />
            <Container width={40} height={40} backgroundColor={Theme.Colors.HotCoral} style={{ marginVertical: 5 }} />
            <Container width={60} height={80} backgroundColor={Theme.Colors.HotCoral} style={{ marginVertical: 5 }} />
          </Container>

          <Text text="Row" typography="subtitle" marginVertical={8} />
          <Container row backgroundColor={Theme.Colors.White}>
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }} />
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }} />
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }} />
          </Container>

          <Text text="Flex" typography="subtitle" marginVertical={8} />
          <Container width="100%" height={100} backgroundColor={Theme.Colors.White}>
            <Container flex backgroundColor={Theme.Colors.HotCoral} />
          </Container>

          <Text text="Center" typography="subtitle" marginVertical={8} />
          <Container center backgroundColor={Theme.Colors.White}>
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} />
          </Container>

          <Text text="CrossCenter" typography="subtitle" marginVertical={8} />
          <Container height={100} crossCenter backgroundColor={Theme.Colors.White}>
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} />
          </Container>

          <Text text="Middle" typography="subtitle" marginVertical={8} />
          <Container height={100} middle backgroundColor={Theme.Colors.White}>
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} />
          </Container>

          <Text text="Space" typography="subtitle" marginVertical={8} />
          {/* Try with different values (around | between | evenly) and try with row */}
          <Container height={100} space="around" backgroundColor={Theme.Colors.White}>
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }} />
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }} />
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }} />
          </Container>

          <Text text="Circle" typography="subtitle" marginVertical={8} />

          <Container row backgroundColor={Theme.Colors.White}>
            <Container
              width={40}
              height={40}
              circle
              backgroundColor={Theme.Colors.HotCoral}
              style={{ marginHorizontal: 5 }}
            />
            <Container middle height={40} circle backgroundColor={Theme.Colors.HotCoral} style={{ marginHorizontal: 5 }}>
              <Text text="Adjust to content" />
            </Container>
            <Container
              width={30}
              height={90}
              circle
              backgroundColor={Theme.Colors.HotCoral}
              style={{ marginHorizontal: 5 }}
            />
          </Container>

          <Text text="Alignment and CrossAlignment" typography="subtitle" marginVertical={8} />

          <Container
            height={100}
            alignment="end"
            crossAlignment="end"
            backgroundColor={Theme.Colors.White}
          >
            <Container width={20} height={20} backgroundColor={Theme.Colors.HotCoral} />
          </Container>

          <Text text="Other props" typography="subtitle" marginVertical={8} />

          <Container backgroundColor={Theme.Colors.White}>
            <Text text="useKeyboard: to wrap inputs so that the view works correctly with keyboard" />
            <Text text="keyboardVerticalOffset: to adjust the keyboard offset on iOS devices" marginTop={8} />
            <Text text="onLayout: only extends onLayout prop from View" marginTop={8} />
            <Text text="style: only extends style prop from View for more flexibility in styling" marginTop={8} />
          </Container>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default ContainerScreen;
