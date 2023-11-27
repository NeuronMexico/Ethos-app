import React, {
  RefObject, createRef, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState,
} from 'react';
import {
  ScrollView, StyleSheet, View, useWindowDimensions,
} from 'react-native';
import Animated, {
  runOnJS, useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import { Container, Text, Touchable } from 'components';
import Theme from 'theme';

interface Props {
  tabs: Array<string>;
  onChange: (index: number) => void;
}

export interface TabRef {
  setIndex: (index: number) => void;
}

const Tab = forwardRef<TabRef, Props>(({ tabs, onChange }, ref) => {
  const translation = useSharedValue(0);
  const size = useSharedValue(0);

  const scrollViewRef = useRef<ScrollView>(null);
  const lastIndex = useRef<number>(0);

  const [refs, setRefs] = useState<RefObject<View>[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const dimensions = useWindowDimensions();

  const scrollToItem = useCallback((px: number, width: number) => {
    if (Math.round(px + width) > dimensions.width) {
      scrollViewRef.current?.scrollToEnd();
    } else if (px < 0) {
      const position = (currentIndex * width) - 10;
      scrollViewRef.current?.scrollTo({ x: position, animated: true });
    }
  }, [currentIndex, dimensions.width]);

  useEffect(() => {
    if (refs.length === 0) {
      setRefs(Array(tabs.length).fill(null).map((_, i) => refs[i] || createRef()));
    } else if (refs[currentIndex]) {
      refs[currentIndex].current?.measure((x, y, width, height, px) => {
        if (px !== undefined && width !== undefined) {
          translation.value = withTiming(px, { duration: 500 });
          size.value = withTiming(width, { duration: 500 }, () => {
            runOnJS(setShowAnimation)(false);
            runOnJS(scrollToItem)(px, width);
          });
        }
      });
    }
  }, [currentIndex, dimensions.width, refs, scrollToItem, size, tabs, translation]);

  const onPress = useCallback((newIndex: number) => {
    onChange(newIndex);
    setShowAnimation(true);
    setCurrentIndex(newIndex);
  }, [onChange]);

  useImperativeHandle(ref, () => ({
    setIndex: (newIndex: number) => {
      if (newIndex !== lastIndex.current) {
        setShowAnimation(true);
        setCurrentIndex(newIndex);
        lastIndex.current = newIndex;
      }
    },
  }));

  const animatedStyles = {
    indicator: useAnimatedStyle(() => ({
      width: size.value,
      height: 4,
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: Theme.Colors.DarkSoul,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      transform: [{ translateX: translation.value }],
    })),
  };

  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        style={{ marginTop: 18 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScrollEndDrag={() => {
          refs[currentIndex].current?.measure((x, y, width, height, px) => {
            translation.value = px;
          });
        }}
        onMomentumScrollEnd={() => {
          refs[currentIndex].current?.measure((x, y, width, height, px) => {
            translation.value = px;
          });
        }}
      >
        {tabs.map((label, idx) => (
          <Touchable key={idx} onPress={() => onPress(idx)}>
            <Container ref={refs[idx]} style={styles.container}>
              <Text text={label} fontWeight="Bold" />
            </Container>
            {currentIndex === idx && !showAnimation && <Container style={styles.indicator} />}
          </Touchable>
        ))}
      </ScrollView>
      {showAnimation && <Animated.View style={animatedStyles.indicator} />}
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 4,
    borderColor: Theme.Colors.PlaceboBlue,
  },
  indicator: {
    height: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Theme.Colors.DarkSoul,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export { Tab };
