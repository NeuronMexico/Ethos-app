import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate, useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import { Container, Text, Touchable } from 'components';
import { DefaultCardWithChip } from 'assets/svg';
import Theme from 'theme';
import { ReanimatedEasing } from 'utils';
import { CARD_REVERSE } from 'assets/images';

interface Props {
  includesName?: boolean;
  flip?: boolean;
  onPressCard?: () => void;
}

const AnimatedCard: React.FC<Props> = ({ includesName, flip, onPressCard }) => {
  const rotate = useSharedValue<number>(flip ? 1 : 0);

  useEffect(() => {
    rotate.value = withTiming(flip ? 1 : 0, { duration: 800, easing: ReanimatedEasing.easeInOutQuart });
  }, [rotate, flip]);

  const animatedStyles = {
    frontCard: useAnimatedStyle(() => ({
      position: 'absolute',
      backfaceVisibility: 'hidden',
      transform: [
        {
          rotateY: `${interpolate(rotate.value, [0, 1], [0, 180], Extrapolate.EXTEND)}deg`,
        },
      ],
    })),
    backCard: useAnimatedStyle(() => ({
      backfaceVisibility: 'hidden',
      transform: [
        {
          rotateY: `${interpolate(rotate.value, [0, 1], [180, 360], Extrapolate.EXTEND)}deg`,
        },
      ],
    })),
  };

  return (
    <Touchable onPress={() => onPressCard?.()} disabled={!onPressCard} effectEnable={false} marginHorizontal={9}>
      <Animated.View style={animatedStyles.frontCard}>
        <DefaultCardWithChip />
      </Animated.View>
      <Animated.View style={animatedStyles.backCard}>
        <Image source={CARD_REVERSE} style={{ width: 324, height: 194 }} />
        {includesName && (
          <>
            <Container style={styles.nameContainer}>
              <Text text="Mario Bárcenas" typography="caption" textColor={Theme.Colors.White} />
            </Container>
            <Container style={styles.numberContainer}>
              <Text text="XXXX XXXX" textColor={Theme.Colors.White} fontSize={10} />
            </Container>
          </>
        )}
      </Animated.View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    position: 'absolute',
    left: 10,
    bottom: 20,
  },
  numberContainer: {
    position: 'absolute',
    right: 13.5,
    bottom: 76,
  },
});

export { AnimatedCard };
