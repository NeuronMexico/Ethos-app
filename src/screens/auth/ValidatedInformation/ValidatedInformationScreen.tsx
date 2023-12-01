import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import {
  CommonScrollView, Container, Header, OnboardAssistant,
} from 'components';

const SUCCESS_MESSAGES = [
  i18n.t('validatedInformation:messages:successFirst'),
  i18n.t('validatedInformation:messages:successSecond'),
];

const NONSUCCESS_MESSAGES = [
  i18n.t('validatedInformation:messages:nonSuccessFirst'),
  i18n.t('validatedInformation:messages:nonSuccessSecond'),
];

interface Props {
  success?: boolean;
  onBack: () => void;
  onContinue: () => void;
}

const ValidatedInformationScreen: React.FC<Props> = ({
  success = false,
  onBack = () => {},
  onContinue = () => {},
}: Props) => {
  const { t } = useTranslation();

  return (
    <Container flex useKeyboard>
      <Header
        title=""
        ethosHeader
        showBackButton
        backAction={onBack}
      />
      <Container
        flex
      >
        <CommonScrollView>
          <OnboardAssistant
            title={t(`validatedInformation:${success ? 'success' : 'waitList'}`)}
            description={t(`validatedInformation:${success ? 'success' : 'waitList'}Description`)}
            messages={success ? SUCCESS_MESSAGES : NONSUCCESS_MESSAGES}
            onPress={onContinue}
            buttonDisabled={false}
          />
        </CommonScrollView>
      </Container>
    </Container>
  );
};

export default ValidatedInformationScreen;
