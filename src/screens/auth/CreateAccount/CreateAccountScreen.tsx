import React, { ReactNode, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import {
  CheckBoxField, Container, Header, Input, InputCode, OnboardAssistant, Text, TouchableText,
} from 'components';
import Theme from 'theme';
import { validations } from 'utils';
import { useFloatingAlert } from 'context';

interface Props {
  prop?: string
}

const CreateAccountScreen: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();

  const floatingAlert = useFloatingAlert();

  const pagerViewRef = useRef<PagerView>(null);

  const [acceptPrivacyNotice, setAcceptPrivacyNotice] = useState<boolean>(false);
  const [authorizeMarketing, setAuthorizeMarketing] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const [code, setCode] = useState<string>('');

  const phoneValidation = (): boolean => {
    const validation = validations.phone(phone);
    if (validation.ok) {
      setPhoneError('');
      return true;
    }

    if (validation.error === 'required') setPhoneError(t('errors:required'));
    else setPhoneError(t('errors:invalidEmail'));

    return false;
  };

  return (
    <Container flex useKeyboard>
      <Header title="" ethosHeader />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        onPageSelected={({ nativeEvent: { position } }) => setCurrentPage(position)}
      >
        <CommonScrollView>
          <OnboardAssistant
            title={t('createAccount:createEthoscreditAccount')}
            description={t('createAccount:welcomeToEthoscredit')}
            messages={[t('createAccount:helloNiceToMeetYou'), t('createAccount:firstStep')]}
            onPress={() => pagerViewRef.current?.setPage(1)}
            buttonDisabled={!(acceptPrivacyNotice && authorizeMarketing)}
          >
            <Container flex alignment="end">
              <CheckBoxField
                label=""
                customLabel={(
                  <Text marginLeft={11}>
                    <Text text={t('createAccount:accept')} typography="caption" />
                    {' '}
                    <Text text={t('createAccount:privacyNotice')} fontWeight="Semibold" typography="caption" underline />
                    {' '}
                    <Text text={t('createAccount:forCustomersAndProspects')} typography="caption" />
                  </Text>
              )}
                selected={acceptPrivacyNotice}
                onChange={setAcceptPrivacyNotice}
              />
              <CheckBoxField
                label={t('createAccount:authorizeMarketingCommunication')}
                selected={authorizeMarketing}
                onChange={setAuthorizeMarketing}
              />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('createAccount:cellPhoneNumberVerification')}
            description={t('createAccount:pleaseEnterYourPhoneNumber')}
            messages={currentPage >= 1 ? [t('createAccount:firstEnterYourPhoneNumber')] : []}
            onPress={() => pagerViewRef.current?.setPage(2)}
            buttonDisabled={!phone}
          >
            <Container flex>
              <Input
                label={t('createAccount:phoneNumber')}
                value={phone}
                onChangeText={setPhone}
                mask="custom"
                options={{ mask: '(999) 999 9999' }}
                placeholder={t('createAccount:enterYourPhoneNumber')}
                marginTop={38}
                customLabelColor={Theme.Colors.Carbon}
                onSubmitEditing={() => phoneValidation()}
                error={phoneError}
              />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('createAccount:cellPhoneNumberVerification')}
            description={t('createAccount:pleaseEnterYourCode')}
            messages={currentPage >= 2 ? [t('createAccount:verificationSent')] : []}
            onPress={() => floatingAlert.show({ message: t('createAccount:incorrectConfirmationCode'), type: 'error' })}
            buttonDisabled={!code}
          >
            <Container flex>
              <InputCode length={6} marginTop={47} onSubmit={setCode} autoFocus={false} />

              <Container middle>
                <TouchableText
                  text={t('createAccount:resend')}
                  typography="caption"
                  fontWeight="Medium"
                  onPress={() => {}}
                  marginTop={46}
                  underline
                />
              </Container>
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
      </PagerView>
    </Container>
  );
};

interface CommonScrollViewProps {
  children: ReactNode;
}

const CommonScrollView: React.FC<CommonScrollViewProps> = ({ children }) => (
  <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    {children}
  </ScrollView>
);

export default CreateAccountScreen;
