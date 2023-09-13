import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Theme from 'theme';
import Easing from 'utils/Easing';
import { Container } from './Container';
import { Touchable } from './Touchable';

interface Props {
  selected: boolean;
  onChange?: (active: boolean) => void;
}

const RadioButton: React.FC<Props> = ({
  selected,
  onChange,
}) => {
  const { containerStyle, innerCircle } = styles;

  const [value, setValue] = useState<boolean>(selected);
  const [lottieAnimation] = useState<Animated.Value>(new Animated.Value(0));
  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.GreatFalls, Theme.Colors.SpringBouquet],
  });

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.5],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: value ? 1 : 0,
        duration: 300,
        easing: Easing.easeInSine,
        useNativeDriver: false,
      }),
    ]).start();

    if (onChange) onChange(value);
  }, [animation, lottieAnimation, onChange, value]);

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <Container crossAlignment="start">
      <Touchable onPress={() => setValue(!value)} rounded opacityEffect>
        <Animated.View style={containerStyle}>
          <Animated.View style={[innerCircle, {
            backgroundColor,
            transform: [{ scale }],
          }]}
          />
        </Animated.View>
      </Touchable>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
    padding: 2,
    borderColor: Theme.Colors.GreatFalls,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    position: 'absolute',
    top: 5.5,
    left: 5.5,
    right: 5.5,
    bottom: 5.5,
    borderRadius: 24,
  },
});

export { RadioButton };
