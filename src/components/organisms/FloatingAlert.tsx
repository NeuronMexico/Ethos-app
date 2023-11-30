import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Theme from 'theme';
import Easing from 'utils/Easing';
import { Container, Text } from '../atoms';

export interface FloatingAlertDataInterface {
  message: string;
  type: 'error' | 'success';
}

interface Props {
  visible: boolean;
  data: FloatingAlertDataInterface;
}

const FloatingAlert: React.FC<Props> = ({
  visible,
  data: {
    message,
    type,
  },
}) => {
  const { alertStyle } = styles;

  const insets = useSafeAreaInsets();

  const [animation] = useState<Animated.Value>(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      duration: visible ? 500 : 400,
      useNativeDriver: false,
      easing: visible ? Easing.easeOutSine : Easing.easeInSine,
    }).start();
  }, [animation, visible]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, insets.bottom + (insets.bottom ? 0 : 16)],
        }),
      }}
    >
      <Container
        style={alertStyle}
        center
        row
        backgroundColor={type === 'error' ? Theme.Colors.GlowingBrakeDisc : Theme.Colors.GreenTeal}
      >
        <Text
          text={message}
          typography="caption"
          textColor={Theme.Colors.White}
          textAlign="center"
        />
      </Container>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  alertStyle: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 100,
    marginHorizontal: Theme.Sizes.Padding,
  },
});

export { FloatingAlert };
