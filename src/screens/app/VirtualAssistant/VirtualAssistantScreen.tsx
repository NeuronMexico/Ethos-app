import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList, Platform, ScrollView, StyleSheet, TextInput, useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import {
  Container, Header, Text, Touchable,
} from 'components';
import Theme from 'theme';
import {
  ClipIcon, EditIcon, MicrophoneIcon, QuestionIcon, SendIcon, TopicsIcon,
} from 'assets/svg';
import { ReanimatedEasing, sleep } from 'utils';
import { BubbleType, ChatBubble, GradientBackground } from './components';

type MockMessage = {
  type: BubbleType;
  data: string;
};

interface Props {
  messages: Array<MockMessage>;
  onPressTopics: () => void;
  onPressAttach: () => void;
  onPressFaqs: () => void;
  onPressAvatar: () => void;
  onSubmit: (message: string) => void;
}

const AVATAR_SIZE = 95;

const VirtualAssistantScreen: React.FC<Props> = ({
  messages,
  onPressTopics,
  onPressAttach,
  onPressFaqs,
  onPressAvatar,
  onSubmit,
}) => {
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const animation = useSharedValue(0);

  const flatListRef = useRef<FlatList>(null);

  const [message, setMessage] = useState<string>('');
  const [avatarPosition, setAvatarPosition] = useState({ x: 0, y: 0 });
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(true);

  useEffect(() => {
    if (messages.length > 0 && showWelcomeScreen) {
      animation.value = withTiming(1, {
        duration: 600,
        easing: ReanimatedEasing.easeOutQuart,
      }, () => runOnJS(setShowWelcomeScreen)(false));
    }
  }, [animation, messages, showWelcomeScreen]);

  useEffect(() => {
    sleep(100).then(() => flatListRef.current?.scrollToEnd());
  }, [messages]);

  const animatedStyles = {
    greetingContainer: useAnimatedStyle(() => ({
      marginHorizontal: 8,
      opacity: interpolate(animation.value, [0, 1], [1, 0]),
      transform: [{ translateX: interpolate(animation.value, [0, 1], [0, -width]) }],
    })),
    infoContainer: useAnimatedStyle(() => ({
      flex: 1,
      justifyContent: 'flex-end',
      opacity: interpolate(animation.value, [0, 1], [1, 0]),
      transform: [{ translateX: interpolate(animation.value, [0, 1], [0, width]) }],
    })),
    infoBubble: useAnimatedStyle(() => ({
      opacity: interpolate(animation.value, [0, 1], [1, 0]),
      transform: [{ translateX: interpolate(animation.value, [0, 1], [0, -width]) }],
    })),
    avatarContainer: useAnimatedStyle(() => {
      const translateX = -(Math.abs((width / 2) - avatarPosition.x) + (AVATAR_SIZE));
      const translateY = -(avatarPosition.y + (AVATAR_SIZE / 2) + 20);
      return ({
        position: 'absolute',
        top: 38,
        right: 27,
        transform: [
          { translateX: interpolate(animation.value, [0, 1], [0, translateX]) },
          { translateY: interpolate(animation.value, [0, 1], [0, translateY]) },
          { scale: interpolate(animation.value, [0, 1], [1, 0.35]) },
        ],
      });
    }),
  };

  return (
    <Container flex style={{ paddingTop: insets.top }} useKeyboard keyboardVerticalOffset={-30}>
      <GradientBackground runAnimation={messages.length > 0} />
      <Header
        title="Lidia"
        textColor={messages.length === 0 ? Theme.Colors.White : Theme.Colors.DarkSoul}
        rightIcon={<QuestionIcon />}
        rightAction={onPressFaqs}
      />
      <Container flex>
        <FlatList
          ref={flatListRef}
          style={{ marginTop: 4, marginBottom: 6 }}
          contentContainerStyle={styles.flatListContent}
          data={messages}
          renderItem={({ item: { type, data }, index }) => (
            <ChatBubble
              type={type}
              data={data}
              lastMessage={index === messages.length - 1}
            />
          )}
          keyboardShouldPersistTaps="handled"
        />
        {showWelcomeScreen && (
        <ScrollView
          style={styles.welcomeContainer}
          bounces={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: Platform.OS === 'android' ? 30 : 0 }}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View style={animatedStyles.greetingContainer}>
            <Text
              text={t('virtualAssistant:greeting')}
              fontSize={30}
              fontWeight="Bold"
              lineHeight={30}
              textColor={Theme.Colors.White}
              marginTop={22}
            />
            <Text
              text={t('virtualAssistant:howCanIHelpYouToday')}
              fontSize={30}
              fontWeight="Bold"
              lineHeight={30}
              textColor={Theme.Colors.White}
              marginTop={25}
              marginRight={10}
            />
          </Animated.View>
          <Animated.View style={animatedStyles.infoContainer}>
            <ChatBubble
              type="option"
              data={t('virtualAssistant:checkBalanceAndTransactions')}
              onPress={() => onSubmit(t('virtualAssistant:checkBalanceAndTransactions'))}
            />
            <ChatBubble
              type="option"
              data={t('virtualAssistant:productInformationFunctionality')}
              onPress={() => onSubmit(t('virtualAssistant:productInformationFunctionality'))}
            />
            <ChatBubble
              type="option"
              data={t('virtualAssistant:cardReplacementTheftDamageLoss')}
              onPress={() => onSubmit(t('virtualAssistant:cardReplacementTheftDamageLoss'))}
            />
          </Animated.View>
          <Animated.View style={animatedStyles.infoBubble}>
            <ChatBubble type="info" data={t('virtualAssistant:browseAllTopicsHere')} onPress={onPressTopics} />
          </Animated.View>
        </ScrollView>
        )}

        <Animated.View
          style={animatedStyles.avatarContainer}
          onLayout={({ nativeEvent: { layout } }) => setAvatarPosition({ x: layout.x, y: layout.y })}
        >
          <Touchable rounded onPress={onPressAvatar} disabled={messages.length > 0}>
            <Container circle width={AVATAR_SIZE} height={AVATAR_SIZE} backgroundColor={Theme.Colors.SpringBouquet} />
            {messages.length === 0 && (
            <Container style={styles.editContainer}>
              <EditIcon width={16} height={16} />
            </Container>
            )}
          </Touchable>
        </Animated.View>
      </Container>

      <Container
        row
        crossAlignment="end"
        style={{
          marginHorizontal: Theme.Sizes.Padding,
          marginBottom: insets.bottom + 8,
        }}
      >
        <Touchable onPress={onPressTopics} rounded>
          <Container style={styles.topicsButton}>
            <TopicsIcon />
          </Container>
        </Touchable>

        <Container flex crossAlignment="end" row style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={t('virtualAssistant:writeYourMessage')}
            placeholderTextColor={Theme.Colors.SantasGrey}
            autoCapitalize="sentences"
            autoCorrect
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <Touchable marginLeft={5} marginBottom={10} rounded onPress={onPressAttach}>
            <ClipIcon />
          </Touchable>
          <Touchable marginLeft={4} marginBottom={10} rounded onPress={() => {}}>
            <MicrophoneIcon />
          </Touchable>
          <Touchable
            marginLeft={16}
            marginRight={12}
            marginVertical={8}
            rounded
            onPress={() => {
              onSubmit(message);
              setMessage('');
            }}
            disabled={!message}
          >
            <Container style={styles.sendContainer}>
              <SendIcon color={Theme.Colors.PlaceboBlue} />
            </Container>
          </Touchable>
        </Container>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  topicsButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: Theme.Colors.White,
  },
  inputContainer: {
    marginLeft: 16,
    borderRadius: 12,
    backgroundColor: Theme.Colors.White,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 11,
    paddingTop: 16,
    fontFamily: Theme.Fonts.Medium,
    fontSize: Theme.Sizes.Subtitle,
    color: Theme.Colors.DarkSoul,
  },
  sendContainer: {
    padding: 4,
    backgroundColor: Theme.Colors.DarkSoul,
    borderRadius: 8,
  },
  editContainer: {
    position: 'absolute',
    bottom: -2,
    right: -5,
    borderRadius: 10,
    padding: 5,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
  welcomeContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 4,
    marginBottom: 6,
    paddingHorizontal: Theme.Sizes.Padding,
    paddingTop: 28,
    paddingBottom: 6,
  },
  flatListContent: {
    paddingHorizontal: Theme.Sizes.Padding,
    paddingTop: 28,
    flexGrow: 1,
    paddingBottom: 6,
  },
});

export default VirtualAssistantScreen;
