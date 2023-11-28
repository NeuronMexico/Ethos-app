import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import { Container, Header, OnboardAssistant } from 'components';

interface Props {
  prop?: string
}

const CreateAccountScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);

  return (
    <Container flex>
      <Header title="" ethosHeader />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
      >
        <OnboardAssistant
          title={t('createAccount:createEthoscreditAccount')}
          description={t('createAccount:welcomeToEthoscredit')}
          messages={[t('createAccount:helloNiceToMeetYou')]}
        >
          <Container />
        </OnboardAssistant>
      </PagerView>
    </Container>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
  },
});

export default CreateAccountScreen;
