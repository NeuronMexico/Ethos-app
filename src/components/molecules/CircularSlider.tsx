import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Gesture,
  GestureDetector, GestureStateChangeEvent, GestureUpdateEvent,
  PanGestureHandlerEventPayload, TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import Svg, {
  Circle, G, Path,
} from 'react-native-svg';
import Theme from 'theme';

interface Props {
  size: number;
  value: number;
  meterColor: string;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  steps?: number;
}

const CircularSlider: React.FC<Props> = ({
  size,
  value,
  meterColor,
  onValueChange,
  minimumValue = 0,
  maximumValue = 1,
  steps,
}) => {
  const cx = size / 2;
  const cy = size / 2;
  const initialR = (Math.min(size, size) / 2) * 0.85;

  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      if (value >= minimumValue && value <= maximumValue) {
        let convertedValue = ((value - minimumValue) / (maximumValue - minimumValue)) * 360;
        if (value && convertedValue === 360) convertedValue = 359.99;
        setAngle(convertedValue);
      } else console.error('The value must be between the minimum value and the maximum value');
    }
  }, [value, isDragging, minimumValue, maximumValue]);

  const polarToCartesian = (polarAngle: number) => ({
    x: cx + initialR * Math.cos(((polarAngle - 90) * Math.PI) / 180),
    y: cy + initialR * Math.sin(((polarAngle - 90) * Math.PI) / 180),
  });

  const endCoord = polarToCartesian(angle);

  const pathData = `
    M ${polarToCartesian(0).x} ${polarToCartesian(0).y}
    A ${initialR} ${initialR} 0 ${angle >= 180 ? 1 : 0} 1 ${endCoord.x} ${endCoord.y}
  `;

  const getAngle = (x: number, y: number) => {
    const dy = y - size / 2;
    const dx = x - size / 2;

    let theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;
    const fixedTheta = theta + 90;

    return Number((fixedTheta - (Math.floor(fixedTheta / 360) * 360)).toPrecision(8));
  };

  const onUpdatePanGesture = (x: number, y: number) => {
    const newAngle = getAngle(x, y);
    const convertedValue = minimumValue + (maximumValue - minimumValue) * (newAngle / 360);

    setAngle(newAngle);
    onValueChange(convertedValue);
    setIsDragging(true);
  };

  const onEndPanGesture = (x: number, y: number) => {
    let newAngle = getAngle(x, y);
    if (steps) {
      const stepSize = 360 / steps;
      const nearestStep = Math.round(newAngle / stepSize);
      newAngle = nearestStep * stepSize;
    }

    const convertedValue = minimumValue + (maximumValue - minimumValue) * (newAngle / 360);
    setAngle(newAngle);
    onValueChange(convertedValue);
    setIsDragging(false);
  };

  const swipe = Gesture.Pan()
    .onUpdate((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => runOnJS(onUpdatePanGesture)(event.x, event.y))
    .onEnd((event: GestureStateChangeEvent<PanGestureHandlerEventPayload>) => runOnJS(onEndPanGesture)(event.x, event.y));

  const singleTap = Gesture.Tap()
    .onStart((event: GestureStateChangeEvent<TapGestureHandlerEventPayload>) => runOnJS(onEndPanGesture)(event.x, event.y));

  return (
    <GestureDetector gesture={Gesture.Exclusive(swipe, singleTap)}>
      <View style={styles.container}>
        <Svg width={size} height={size}>
          <Circle cx={cx} cy={cy} r={initialR} stroke={Theme.Colors.LightHouse} strokeWidth={15} fill="none" />
          <Path
            d={pathData}
            stroke={meterColor}
            strokeWidth={15}
            fill="transparent"
          />
          <G
            x={endCoord.x - 7.5}
            y={endCoord.y - 7.5}
            fill={Theme.Colors.White}
            filter="drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.20))"
          >
            <Circle
              cx={7.5}
              cy={7.5}
              r={15}
              id="filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.20));"
            />
          </G>
        </Svg>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickableCircle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export { CircularSlider };
