import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Theme from 'theme';
import Easing from 'utils/Easing';
import { Container } from './Container';
import { Touchable } from './Touchable';

interface Props {
  active: boolean;
  onChange?: (active: boolean) => void;
}

const Switch: React.FC<Props> = ({ active, onChange }) => {
  const { containerStyle, thumbStyle } = styles;

  const [value, setValue] = useState<boolean>(active);
  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  const trackColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.GreatFalls, Theme.Colors.SpringBouquet],
  });

  const thumbColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Theme.Colors.White, Theme.Colors.White],
  });

  const thumbTranslation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.easeInSine,
      useNativeDriver: false,
    }).start();

    if (onChange) onChange(value);
  }, [animation, onChange, value]);

  useEffect(() => {
    setValue(active);
  }, [active]);

  return (
    <Container crossAlignment="start">
      <Touchable onPress={() => setValue(!value)} effectEnable={false}>
        <Animated.View style={[containerStyle, { backgroundColor: trackColor }]}>
          <Animated.View style={[thumbStyle, {
            backgroundColor: thumbColor,
            transform: [{ translateX: thumbTranslation }],
          }]}
          />
        </Animated.View>
      </Touchable>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 51,
    height: 31,
    borderRadius: 31,
    padding: 2,
  },
  thumbStyle: {
    width: 27,
    height: 27,
    borderRadius: 27,
  },
});

export { Switch };
