import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet } from 'react-native';
import {
  Container, ImageCarousel,
} from 'components';
import Theme from 'theme';
import HomeHeader from './components/HomeHeader';
import HomeTabProducts from './components/HomeTabProducts';

interface Props {
  onPressProfile?: () => void;
  onPressNotifications?: () => void;
}

const EthosCreditScreen: React.FC<Props> = (props: Props) => {
  const {
    onPressProfile,
    onPressNotifications,
  } = props;
  const { container } = styles;

  const offset = useRef(new Animated.Value(0)).current;

  return (
    <Container flex>
      <HomeHeader onPressProfile={onPressProfile} onPressNotifications={onPressNotifications} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={container}
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
              'https://via.placeholder.com/1200x300.png?text=Mountain',
              'https://via.placeholder.com/1200x300.png?text=Beach',
              'https://via.placeholder.com/1200x300.png?text=Forest',
              'https://via.placeholder.com/1200x300.png?text=Mountain',
            ]}
            />
          </Container>
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
