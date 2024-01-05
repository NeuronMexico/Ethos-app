import { Container } from 'components/atoms';
import React, { useEffect } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate, interpolateColor,
  useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import Theme from 'theme';
import { ReanimatedEasing } from 'utils';

interface Props {
  totalDots: number;
  currentIndex: number;
  inactiveColor?: ColorValue;
  activeColor?: ColorValue;
  sameDotWidth?: boolean;
}

const DOT_SIZE = 7;
const DOT_SIZE_LARGE = 4 * DOT_SIZE;
const MARGIN_HORIZONTAL = 4;

const DotSimpleIndicator = ({
  totalDots,
  currentIndex,
  inactiveColor = Theme.Colors.PlaceboBlue,
  activeColor = Theme.Colors.White,
  sameDotWidth,
}: Props) => {
  const activeDotSize = sameDotWidth ? DOT_SIZE : DOT_SIZE_LARGE;
  const dotContainerWidth = totalDots * (DOT_SIZE + 2 * MARGIN_HORIZONTAL);

  const renderDots = () => Array.from({ length: totalDots }).map((_, i) => {
    const isActive = i === currentIndex;

    return (
      <Dot
        key={i}
        isActive={isActive}
        inactiveColor={inactiveColor}
        activeColor={activeColor}
        activeDotSize={activeDotSize}
      />
    );
  });

  return (
    <Container style={[styles.dotContainer, { width: dotContainerWidth }]}>
      {renderDots()}
    </Container>
  );
};

interface DotProps {
  isActive: boolean;
  inactiveColor: ColorValue;
  activeColor: ColorValue;
  activeDotSize: number;
}

const Dot: React.FC<DotProps> = ({
  isActive, inactiveColor, activeColor, activeDotSize,
}) => {
  const animation = useSharedValue(isActive ? 1 : 0);

  useEffect(() => {
    animation.value = withTiming(isActive ? 1 : 0, {
      easing: ReanimatedEasing.easeOutExpo,
      duration: 1000,
    });
  }, [isActive, animation]);

  const animatedStyles = {
    dotStyle: useAnimatedStyle(() => ({
      width: interpolate(animation.value, [0, 1], [DOT_SIZE, activeDotSize], Extrapolate.CLAMP),
      height: DOT_SIZE,
      marginHorizontal: MARGIN_HORIZONTAL,
      borderRadius: interpolate(animation.value, [0, 1], [DOT_SIZE / 2, activeDotSize / 2], Extrapolate.CLAMP),
      backgroundColor: interpolateColor(animation.value, [0, 1], [inactiveColor as string, activeColor as string]),
    })),
  };

  return <Animated.View style={[styles.dot, animatedStyles.dotStyle]} />;
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  dot: {
    margin: 0,
  },
});

export { DotSimpleIndicator };
