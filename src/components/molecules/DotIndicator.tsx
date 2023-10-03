import { Container } from 'components/atoms';
import React from 'react';
import { Animated, ColorValue, StyleSheet } from 'react-native';
import Theme from 'theme';

interface Props {
  totalDots: number;
  currentIndex: number;
  inactiveColor?: ColorValue;
  activeColor?: ColorValue;
}

const DOT_SIZE = 8;
const ACTIVE_DOT_SIZE = 4 * DOT_SIZE;
const MARGIN_HORIZONTAL = 4;

const DotIndicator = ({
  totalDots,
  currentIndex,
  inactiveColor = Theme.Colors.PlaceboBlue,
  activeColor = Theme.Colors.SpringBouquet,
}: Props) => {
  const dotContainerWidth = totalDots * (DOT_SIZE + 2 * MARGIN_HORIZONTAL);

  const renderDots = () => Array.from({ length: totalDots }).map((_, i) => {
    const isActive = i === currentIndex;

    const dotStyle = {
      width: isActive ? ACTIVE_DOT_SIZE : DOT_SIZE,
      height: DOT_SIZE,
      marginHorizontal: MARGIN_HORIZONTAL,
      borderRadius: isActive ? ACTIVE_DOT_SIZE / 2 : DOT_SIZE / 2,
      backgroundColor: isActive ? activeColor : inactiveColor,
    };

    return <Animated.View key={i} style={[styles.dot, dotStyle]} />;
  });

  return (
    <Container style={[styles.dotContainer, { width: dotContainerWidth }]}>
      {renderDots()}
    </Container>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    margin: 0,
  },
});

export { DotIndicator };
