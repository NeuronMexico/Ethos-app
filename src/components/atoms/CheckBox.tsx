import React, { useEffect, useState } from 'react';
import { Animated, ColorValue, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Theme from 'theme';
import Easing from 'utils/Easing';
import { CHECK_ANIMATION } from 'assets/animations';
import { Container } from './Container';
import { Touchable } from './Touchable';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

interface Props {
  selected: boolean;
  onChange?: (active: boolean) => void;
  size?: number;
  checkmarkSize?: number;
  circular?: boolean;
  type?: 'filled' | 'unfilled';
  borderColor?: ColorValue;
  borderWidth?: number;
}

const CheckBox: React.FC<Props> = ({
  selected,
  onChange,
  size = 20,
  checkmarkSize = 13.5,
  circular,
  type = 'unfilled',
  borderColor = Theme.Colors.GreatFalls,
  borderWidth = 1,
}) => {
  const { containerStyle } = styles;

  const [value, setValue] = useState<boolean>(selected);
  const [lottieAnimation] = useState<Animated.Value>(new Animated.Value(0));
  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [type === 'unfilled' ? 'transparent' : Theme.Colors.GreatFalls, Theme.Colors.SpringBouquet],
  });

  const borderColorAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [borderColor as string, Theme.Colors.SpringBouquet],
  });

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.5],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(lottieAnimation, {
        toValue: value || type === 'filled' ? 0.5 : 0,
        duration: 500,
        easing: Easing.easeInSine,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: value ? 1 : 0,
        duration: 300,
        easing: Easing.easeInSine,
        useNativeDriver: false,
      }),
    ]).start();

    if (onChange) onChange(value);
  }, [animation, lottieAnimation, onChange, type, value]);

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <Container crossAlignment="start">
      <Touchable onPress={() => setValue(!value)} rounded opacityEffect>
        <Animated.View
          style={[containerStyle, {
            width: size,
            height: size,
            backgroundColor: type === 'unfilled' ? 'transparent' : Theme.Colors.GreatFalls,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: borderColorAnimation,
            borderWidth,
            borderRadius: circular ? size : 6,
          }]}
        >
          <Animated.View style={[StyleSheet.absoluteFill, {
            backgroundColor,
            transform: [{ scale }],
            borderRadius: 25,
          }]}
          />
          <AnimatedLottieView
            style={{ width: checkmarkSize, height: checkmarkSize, marginTop: 0.5 }}
            loop={false}
            progress={lottieAnimation}
            source={CHECK_ANIMATION}
          />
        </Animated.View>
      </Touchable>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 6,
    borderWidth: 1,
    overflow: 'hidden',
  },
});

export { CheckBox };
