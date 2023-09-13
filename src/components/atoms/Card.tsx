import React, { ForwardedRef, ReactNode, forwardRef } from 'react';
import { ColorValue, StyleSheet, ViewStyle } from 'react-native';
import Theme from 'theme';
import { Container } from './Container';
import { Touchable } from './Touchable';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  borderRadius?: number;
  padding?: number;
  onPress?: () => void;
  flex?: boolean | number;
  disabled?: boolean;
  column?: boolean;
  backgroundColor?: ColorValue;
  center?: boolean;
  disabledEffect?: boolean;
}

const Card = forwardRef(({
  children,
  style,
  borderRadius = 12,
  padding = 16,
  onPress,
  flex,
  disabled,
  column,
  backgroundColor = Theme.Colors.HeartOfIce,
  center,
  disabledEffect = true,
}: Props, ref: ForwardedRef<any>) => {
  const { cardStyle } = styles;

  const child = (
    <Container
      flex={flex}
      backgroundColor={backgroundColor}
      style={[
        cardStyle,
        { borderRadius },
        column && { flexDirection: 'column' },
        { padding, opacity: disabled && disabledEffect ? 0.35 : 1 },
        center && { alignItems: 'center' },
      ]}
    >
      {children}
    </Container>
  );

  return (
    <Container ref={ref} flex={flex} style={[{ borderRadius: borderRadius || 10, overflow: 'hidden' }, style]}>
      {onPress ? (
        <Touchable
          flex={flex}
          disabled={!onPress || disabled}
          onPress={onPress || (() => {})}
        >
          {child}
        </Touchable>
      ) : child}
    </Container>
  );
});

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    borderRadius: 24,
  },
});

export { Card };
