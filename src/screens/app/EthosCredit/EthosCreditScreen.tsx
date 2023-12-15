import React, { useRef } from 'react';
import {
  Animated, ScrollView, StyleSheet,
} from 'react-native';
import {
  Container, ImageCarousel,
} from 'components';
import Theme from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BANNER_1, BANNER_2, BANNER_3 } from 'assets/images';
import HomeHeader from './components/HomeHeader';
import HomeTabProducts from './components/HomeTabProducts';
import HomeShortcutsSection from './components/HomeShortcutsSection';

interface Props {
  onPressProfile?: () => void;
  onPressNotifications?: () => void;
  onPressAssistant?: () => void;
  onPressShortcut?: (id: string) => void;
  onPressShortcuts?: () => void;
}

const EthosCreditScreen: React.FC<Props> = (props: Props) => {
  const {
    onPressProfile,
    onPressNotifications,
    onPressAssistant,
    onPressShortcut,
    onPressShortcuts,
  } = props;
  const { container } = styles;

  const insets = useSafeAreaInsets();
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <Container flex>
      <HomeHeader
        onPressProfile={onPressProfile}
        onPressNotifications={onPressNotifications}
        onPressAssistant={onPressAssistant}
      />
      <ScrollView
        style={{ flex: 1, marginBottom: insets.bottom + 24 }}
        contentContainerStyle={{
          ...container,
          paddingBottom: insets.bottom + 16,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container flex>
          <HomeTabProducts />
          <Container style={{ marginVertical: 18 }}>
            <ImageCarousel images={[
              BANNER_1,
              BANNER_2,
              BANNER_3,
            ]}
            />
          </Container>
          <HomeShortcutsSection
            onPressShortcut={onPressShortcut}
            onPressShortcuts={onPressShortcuts}
          />
        </Container>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: Theme.Sizes.Padding,
  },
});

export default EthosCreditScreen;
