/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  color1: Animated.AnimatedInterpolation<string>;
  color2: Animated.AnimatedInterpolation<string>;
  color3: Animated.AnimatedInterpolation<string>;
  color4: Animated.AnimatedInterpolation<string>;
}

export class GradientHelper extends Component<Props> {
  render() {
    const {
      color1, color2, color3, color4,
    } = this.props;

    return (
      // @ts-ignore
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={[
          color1,
          color2,
          color3,
          color4,
        ]}
        locations={[0, 0.2604, 0.7291, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.7 }}
      />
    );
  }
}
