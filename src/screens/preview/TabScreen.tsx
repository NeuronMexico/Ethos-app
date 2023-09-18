import {
  Container, SafeArea, Tab, Text,
} from 'components';
import React, { useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import Theme from 'theme';

const TabScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeArea>
      <Text
        text="Tabs"
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
          <Text text="Default component" />
          <Tab
            tabs={['Tab 1', 'Tab 2', 'Tab 3']}
            initialTab={0}
            onTabChange={(tabIndex) => console.log(tabIndex)}
            style={{ marginBottom: 24 }}
          />

          <Text text="Default component with 75% of screen width" />
          <Tab
            tabs={['Tab 1', 'Tab 2', 'Tab 3']}
            initialTab={0}
            onTabChange={(tabIndex) => console.log(tabIndex)}
            style={{
              width: '75%',
              marginBottom: 24,
            }}
          />

          <Text text="Default component with 50% of screen width" />
          <Tab
            tabs={['Tab 1', 'Tab 2', 'Tab 3']}
            initialTab={0}
            onTabChange={(tabIndex) => console.log(tabIndex)}
            style={{
              width: '50%',
              marginBottom: 24,
            }}
          />

          <Text text="Default component with custom values" />
          <Tab
            tabs={['Todas mis tarjetas', '****334', '*543']}
            initialTab={0}
            onTabChange={(tabIndex) => console.log(tabIndex)}
            style={{
              marginBottom: 24,
            }}
          />

          <Text text="Default component with custom values" />
          <Tab
            tabs={[
              'Pagos',
              'Cobros',
              'Disposición personal',
              'Proyecto personal',
            ]}
            initialTab={0}
            onTabChange={(tabIndex) => console.log(tabIndex)}
            style={{
              marginBottom: 24,
            }}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default TabScreen;
