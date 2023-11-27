import React, { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useBottomSheet } from 'context';
import VirtualAssistantScreen from './VirtualAssistantScreen';
import {
  AvatarBottomSheetContent, BubbleType, FaqsBottomSheetContent, TopicsBottomSheetContent,
} from './components';

type MockMessage = {
  type: BubbleType;
  data: string;
};

const VirtualAssistantController: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const bottomSheet = useBottomSheet();

  const [messages, setMessages] = useState<Array<MockMessage>>([]);
  const [avatar, setAvatar] = useState<'a' | 'b'>('a');

  const onSubmit = useCallback((message: string) => {
    const auxMsgs = [...messages];
    auxMsgs.push({ type: 'question', data: message });

    setMessages(auxMsgs);
  }, [messages]);

  const onPressTopics = useCallback(() => {
    Keyboard.dismiss();
    bottomSheet.show(
      <TopicsBottomSheetContent
        onSelectAnOption={(option) => {
          bottomSheet.hide();
          onSubmit(option);
        }}
      />,
      {
        title: t('virtualAssistant:findTopicsAndQuestions'),
        snapPoints: ['40%', '70%'],
      },
    );
  }, [bottomSheet, onSubmit, t]);

  const onPressFaqs = useCallback(() => {
    Keyboard.dismiss();
    bottomSheet.show(<FaqsBottomSheetContent />, {
      title: t('virtualAssistant:findTopicsAndQuestions'),
    });
  }, [bottomSheet, t]);

  const onPressAvatar = useCallback(() => {
    Keyboard.dismiss();
    bottomSheet.show(<AvatarBottomSheetContent onSelectAvatar={(option) => {
      setAvatar(option);
      bottomSheet.hide();
    }}
    />, {
      title: t('virtualAssistant:selectAvatar'),
    });
  }, [bottomSheet, t]);

  return (
    <SafeArea barStyle={messages.length === 0 ? 'light' : 'dark'} topSafeArea={false} bottomSafeArea={false}>
      <VirtualAssistantScreen
        messages={messages}
        avatar={avatar}
        onPressAttach={() => {}}
        onPressTopics={onPressTopics}
        onPressFaqs={onPressFaqs}
        onPressAvatar={onPressAvatar}
        onSubmit={onSubmit}
      />
    </SafeArea>
  );
};

export default VirtualAssistantController;
