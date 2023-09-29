import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { EASTER_EGG_ANIMATION } from 'assets/animations';

interface Props {
  visible: boolean,
  onFinish: () => void
}

const EasterEggAnimation: React.FC<Props> = (props: Props) => {
  const { visible, onFinish } = props;

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LottieView
        source={EASTER_EGG_ANIMATION}
        resizeMode="cover"
        autoPlay
        loop={false}
        onAnimationFinish={onFinish}
      />
    </View>
  );
};

export { EasterEggAnimation };
