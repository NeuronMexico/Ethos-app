import React, { useRef } from 'react';
import {
  Container, Header,
} from 'components';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import { ForgotPasswordChangeForm, ForgotPasswordCodeForm, ForgotPasswordForm } from './components';

interface Props {
  onSubmit: () => void;
}

const ForgotPasswordScreen: React.FC<Props> = ({
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  const pagerViewRef = useRef<PagerView>(null);

  return (
    <Container flex>
      <Header title="" />
      <PagerView
        ref={pagerViewRef}
        initialPage={0}
        style={{ flex: 1 }}
        scrollEnabled={false}
      >
        <ForgotPasswordForm onPressContinue={() => pagerViewRef.current?.setPage(1)} />
        <ForgotPasswordCodeForm onSubmit={() => pagerViewRef.current?.setPage(2)} />
        <ForgotPasswordChangeForm onSubmit={onSubmit} />
      </PagerView>
    </Container>
  );
};

export default ForgotPasswordScreen;
