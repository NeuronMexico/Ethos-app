import React, { useState, useEffect } from 'react';
import {
  View, PanResponder, StyleSheet, TouchableOpacity,
} from 'react-native';
import Svg, {
  Circle, G, Path,
} from 'react-native-svg';
import Theme from 'theme';

interface Props {
  width: number;
  height: number;
  value: number;
  meterColor: string;
  onValueChange: (value: number) => void;
}

const CircularSlider: React.FC<Props> = ({
  width,
  height,
  value,
  meterColor,
  onValueChange,
}) => {
  const cx = width / 2;
  const cy = height / 2;
  const initialR = (Math.min(width, height) / 2) * 0.85;

  const [angle, setAngle] = useState(value);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) {
      setAngle(value);
    }
  }, [value, isDragging]);

  const polarToCartesian = (polarAngle: number) => ({
    x: cx + initialR * Math.cos(((polarAngle - 90) * Math.PI) / 180),
    y: cy + initialR * Math.sin(((polarAngle - 90) * Math.PI) / 180),
  });

  const handlePanResponderMove = ({ nativeEvent: { locationX, locationY } }: any) => {
    const x = locationX - cx;
    const y = locationY - cy;
    const newAngle = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;

    if (newAngle) {
      setAngle(newAngle);
      onValueChange(newAngle);
      setIsDragging(true);
    }
  };

  const handlePanResponderEnd = () => {
    setIsDragging(false);
  };

  const endCoord = polarToCartesian(angle);

  const pathData = `
    M ${polarToCartesian(0).x} ${polarToCartesian(0).y}
    A ${initialR} ${initialR} 0 ${angle >= 180 ? 1 : 0} 1 ${endCoord.x} ${endCoord.y}
  `;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
    onPanResponderEnd: handlePanResponderEnd,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <View style={styles.container} {...panResponder.panHandlers}>
      <Svg width={width} height={height}>
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
      <TouchableOpacity onPress={handlePanResponderMove} style={styles.clickableCircle} />
    </View>
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
