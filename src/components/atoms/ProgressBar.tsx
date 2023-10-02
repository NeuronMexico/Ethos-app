import React, { useEffect } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Container } from 'components';
import { ReanimatedEasing, MarginPropsInterface } from 'utils';
import Theme from 'theme';

interface Props extends MarginPropsInterface {
  progress: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  borderRadius?: number;
  color?: ColorValue;
  unfilledColor?: ColorValue;
}

const ProgressBar: React.FC<Props> = ({
  progress,
  width,
  height = 12,
  borderRadius = 12,
  color = Theme.Colors.SpringBouquet,
  unfilledColor = Theme.Colors.PlaceboBlue,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
}) => {
  const progressAnimation = useSharedValue(0);

  useEffect(() => {
    progressAnimation.value = withTiming(progress, { easing: ReanimatedEasing.easeOutExpo, duration: 800 });
  }, [progress, progressAnimation]);

  const animatedStyles = {
    bar: useAnimatedStyle(() => ({
      width: `${progressAnimation.value * 100}%`,
      height,
      borderRadius,
      backgroundColor: color,
    })),
  };

  return (
    <Container style={{
      width,
      height,
      borderRadius,
      backgroundColor: unfilledColor,
      marginBottom,
      marginHorizontal,
      marginLeft,
      marginRight,
      marginTop,
      marginVertical,
    }}
    >
      <Animated.View style={animatedStyles.bar} />
    </Container>
  );
};

export { ProgressBar };
