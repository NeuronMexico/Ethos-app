import React, {
  ReactElement,
  ReactNode, useEffect, useRef, useState,
} from 'react';
import { StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import { Button, Container, Text } from 'components';
import Theme from 'theme';
import { AssistantA, OnboardAssistantBackground } from 'assets/svg';

interface Props {
  messages: Array<string>;
  title: string;
  description: string;
  children: ReactNode;
  buttonLabel?: string;
  buttonIcon?: ReactElement;
  onPress: () => void;
  buttonDisabled?: boolean;
}

const OnboardAssistant: React.FC<Props> = ({
  messages,
  title,
  description,
  children,
  buttonLabel,
  buttonIcon,
  onPress,
  buttonDisabled,
}) => {
  const { t } = useTranslation();

  const [renderMessages, setRenderMessages] = useState<Array<string>>([messages[0]]);

  return (
    <Container flex>
      <Container style={styles.chatContainer}>
        {renderMessages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message}
            onFinishMessage={() => {
              const auxMsgs = [...renderMessages];
              if (messages[index + 1]) {
                auxMsgs.push(messages[index + 1]);
                setRenderMessages(auxMsgs);
              }
            }}
          />
        ))}
      </Container>
      <Container flex style={styles.contentContainer}>
        <OnboardAssistantBackground style={styles.onboardBackground} />
        <Text text={title} marginTop={12} fontSize={22} fontWeight="Bold" />
        <Text text={description} marginTop={8} typography="caption" />
        {children}
        <Container alignment="end">
          <Button
            label={buttonLabel || t('global:continue')}
            marginVertical={32}
            onPress={onPress}
            icon={buttonIcon}
            disabled={buttonDisabled}
          />
        </Container>
      </Container>
    </Container>
  );
};

interface ChatBubbleProps {
  message: string;
  onFinishMessage: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, onFinishMessage }) => {
  const intervalRef = useRef<string | number | NodeJS.Timeout>();
  const finishRenderRef = useRef<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [renderMessage, setRenderMessage] = useState<string>('');

  useEffect(() => {
    if (loading) {
      let auxMsg = '.';
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (auxMsg.length < 5) auxMsg += '.';
        else auxMsg = '.';
        setRenderMessage(auxMsg);
      }, 200);
    } else clearInterval(intervalRef.current);
  }, [loading]);

  useEffect(() => {
    if (!loading && !finishRenderRef.current) {
      let index = 1;
      let auxMsg = message.charAt(0);

      setRenderMessage(auxMsg);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        auxMsg += message.charAt(index);
        index += 1;
        setRenderMessage(auxMsg);
        if (auxMsg.length === message.length) {
          clearInterval(intervalRef.current);
          finishRenderRef.current = true;
          onFinishMessage();
        }
      }, 25);
    }
  }, [loading, message, onFinishMessage]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Container row>
      <Container width={25} height={25} backgroundColor={Theme.Colors.White} circle style={{ marginTop: 17 }}>
        <AssistantA width={25} height={25} />
      </Container>
      <Svg
        width={12}
        height={13}
        fill="none"
        viewBox="0 0 12 13"
        style={styles.triangle}
      >
        <Path
          fill={Theme.Colors.White}
          d="M.75 7.391a1 1 0 0 1 0-1.782L10.295.745a1 1 0 0 1 1.454.892v9.727a1 1 0 0 1-1.454.89L.75 7.391Z"
        />
      </Svg>
      <Container flex>
        <Container style={styles.messageBox}>
          <Text text={renderMessage} />
        </Container>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    padding: Theme.Sizes.Padding,
    backgroundColor: Theme.Colors.PlaceboBlue,
    marginTop: 13,
  },
  triangle: {
    marginLeft: 2,
    marginTop: 23,
    marginRight: -3,
  },
  messageBox: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 12,
    backgroundColor: Theme.Colors.White,
    borderRadius: 8,
    minWidth: 50,
    marginVertical: 11,
    alignSelf: 'baseline',
  },
  contentContainer: {
    paddingHorizontal: Theme.Sizes.Padding,
  },
  onboardBackground: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export { OnboardAssistant };
