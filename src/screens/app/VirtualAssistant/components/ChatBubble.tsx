import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import {
  Button, Container, ProfilePhoto, Text, Touchable,
} from 'components';
import Theme from 'theme';
import { BubbleTriangle } from './BubbleTriangle';

export type BubbleType = 'option' | 'info' | 'question' | 'response';

interface Props {
  type: BubbleType;
  data: string;
  onPress?: () => void;
  lastMessage?: boolean;
  firstMessage?: boolean;
}

const ChatBubble: React.FC<Props> = ({
  type, data, onPress, lastMessage, firstMessage,
}) => {
  const opacityAnimation = useSharedValue(0);

  useEffect(() => {
    opacityAnimation.value = withTiming(1);
  }, [opacityAnimation]);

  const animatedStyles = {
    container: useAnimatedStyle(() => ({
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: firstMessage ? 16 : 8,
      opacity: opacityAnimation.value,
    })),
  };

  if (type === 'option') {
    return (
      <Container style={{ alignSelf: 'flex-end' }}>
        <Button
          label={data}
          onPress={onPress!}
          backgroundColor={Theme.Colors.DarkSoul}
          textColor={Theme.Colors.White}
          paddingVertical={8}
          paddingHorizontal={16}
          marginVertical={6}
          textAlign="left"
        />
      </Container>
    );
  }

  if (type === 'info') {
    return (
      <Touchable onPress={onPress!}>
        <Container style={styles.infoContainer}>
          <Text text={data} />
        </Container>
        <BubbleTriangle style={styles.triangleStyle} />
      </Touchable>
    );
  }

  if (type === 'question') {
    return (
      <Animated.View style={[animatedStyles.container, { alignSelf: 'flex-end' }]}>
        <Container
          style={[styles.messageContainer, { borderBottomRightRadius: lastMessage ? 0 : 25 }]}
          backgroundColor={Theme.Colors.DarkSoul}
        >
          <Text text={data} typography="subtitle" textColor={Theme.Colors.White} />
        </Container>
        <Container width={28}>
          {lastMessage && <ProfilePhoto size={28} fadeIn={false} />}
        </Container>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={[animatedStyles.container, { alignSelf: 'flex-start' }]}>
      <Container width={28} height={28} circle backgroundColor={lastMessage ? Theme.Colors.White : 'transparent'} />
      <Container
        style={[styles.messageContainer, { borderBottomLeftRadius: lastMessage ? 0 : 25 }]}
        backgroundColor={Theme.Colors.White}
      >
        <Text text={data} typography="subtitle" />
      </Container>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: Theme.Colors.White,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  triangleStyle: {
    marginLeft: 5,
    marginTop: -1,
  },
  messageContainer: {
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginHorizontal: 4,
  },
});

export { ChatBubble };
