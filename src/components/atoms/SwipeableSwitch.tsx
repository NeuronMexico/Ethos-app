import React, { ReactElement, useEffect, useState } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import { Container } from 'components';
import Theme from 'theme';
import Fonts from 'theme/Fonts';
import { LockClosedIcon, LockOpenIcon } from 'assets/svg';

const BUTTON_SIZE = 56;

type SwipeableSwitchStatus<T> = {
  active: T;
  inactive: T;
};

export type SwipeableSwitchConfig = {
  buttonColor?: SwipeableSwitchStatus<ColorValue>;
  label: SwipeableSwitchStatus<string>;
  labelColor?: SwipeableSwitchStatus<ColorValue>;
};

interface Props {
  onChange: (isActive: boolean) => void;
  config: SwipeableSwitchConfig;
  defaultValue?: boolean;
  activeIcon?: ReactElement;
  inactiveIcon?: ReactElement;
}

const SwipeableSwitch: React.FC<Props> = ({
  onChange,
  config,
  defaultValue = false,
  activeIcon,
  inactiveIcon,
}) => {
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [active, setActive] = useState<boolean>(defaultValue);

  const SWIPE_RANGE = contentWidth - BUTTON_SIZE;

  const handleComplete = (isActive: boolean) => {
    if (isActive !== active) {
      setActive(isActive);
      onChange(isActive);
    }
  };

  const translateX = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.completed = active;
    },
    onActive: (event, context) => {
      let newValue;

      if (context.completed) {
        newValue = contentWidth + event.translationX;
      } else if (event.translationX >= 0) {
        translateX.value = event.translationX;
      }

      if (newValue >= 0 && newValue <= SWIPE_RANGE) {
        translateX.value = newValue;
      }
    },
    onEnd: () => {
      if (translateX.value < contentWidth / 2 - BUTTON_SIZE / 2) {
        translateX.value = withTiming(0);
        runOnJS(handleComplete)(false);
      } else {
        translateX.value = withTiming(SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  useEffect(() => {
    if (contentWidth && defaultValue && SWIPE_RANGE) {
      translateX.value = SWIPE_RANGE;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentWidth, SWIPE_RANGE]);

  const interpolateXInput = [0, SWIPE_RANGE];

  const animatedStyles = {
    swipeable: useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
      backgroundColor: interpolateColor(
        translateX.value,
        interpolateXInput,
        [
          config.buttonColor?.inactive as string ?? Theme.Colors.HotCoral,
          config.buttonColor?.active as string ?? Theme.Colors.SpringBouquet,
        ],
      ),
    })),
    swipeInactiveText: useAnimatedStyle(() => ({
      color: config.labelColor?.inactive ?? Theme.Colors.DarkSoul,
      opacity: interpolate(
        translateX.value,
        interpolateXInput,
        [1, 0],
        Extrapolate.CLAMP,
      ),
      transform: [{
        translateX: interpolate(
          translateX.value,
          interpolateXInput,
          [0, contentWidth / 2 - BUTTON_SIZE],
          Extrapolate.CLAMP,
        ),
      }],
    })),
    swipeActiveText: useAnimatedStyle(() => ({
      alignSelf: 'flex-start',
      color: config.labelColor?.active ?? Theme.Colors.DarkSoul,
      opacity: interpolate(
        translateX.value,
        interpolateXInput,
        [0, 1],
        Extrapolate.CLAMP,
      ),
      transform: [{
        translateX: interpolate(
          translateX.value,
          interpolateXInput,
          [0, contentWidth / 2 - BUTTON_SIZE],
          Extrapolate.CLAMP,
        ),
      }],
    })),
  };

  return (
    <Container style={styles.container}>
      <Container style={styles.bar} onLayout={({ nativeEvent: { layout } }) => setContentWidth(layout.width)}>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View style={[styles.circle, animatedStyles.swipeable]}>
            {active ? activeIcon || <LockOpenIcon /> : inactiveIcon || <LockClosedIcon />}
          </Animated.View>
        </PanGestureHandler>
        <Animated.Text style={[styles.text, animatedStyles.swipeInactiveText]}>{config.label.inactive}</Animated.Text>
        <Animated.Text style={[styles.text, animatedStyles.swipeActiveText]}>{config.label.active}</Animated.Text>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    backgroundColor: Theme.Colors.DrWhite,
    padding: 5,
  },
  bar: {
    width: '100%',
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
    position: 'absolute',
    left: 0,
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.Medium,
    fontSize: Theme.Sizes.Caption,
    color: Theme.Colors.DarkSoul,
    zIndex: 2,
    position: 'absolute',
  },
});

export { SwipeableSwitch };
