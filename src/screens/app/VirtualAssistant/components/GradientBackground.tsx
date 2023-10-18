import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Theme from 'theme';
import { Easing } from 'utils';
import { GradientHelper } from './GradientHelper';

const AnimatedLinearGradient = Animated.createAnimatedComponent(GradientHelper);

interface Props {
  runAnimation: boolean;
}

const GradientBackground: React.FC<Props> = ({ runAnimation }) => {
  const animation = useRef<Animated.Value>(new Animated.Value(0)).current;

  useEffect(() => {
    if (runAnimation) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 600,
        easing: Easing.easeOutQuart,
        useNativeDriver: false,
      }).start();
    }
  }, [animation, runAnimation]);

  const color1 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.DarkSoul, Theme.Colors.PlaceboBlue],
  });

  const color2 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.UltramarineViolet68, Theme.Colors.PlaceboBlue],
  });

  const color3 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.Husky80, Theme.Colors.PlaceboBlue],
  });

  const color4 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.BoysenberryShadow, Theme.Colors.PlaceboBlue],
  });

  return (
    <AnimatedLinearGradient
      color1={color1}
      color2={color2}
      color3={color3}
      color4={color4}
    />
  );
};

export { GradientBackground };
