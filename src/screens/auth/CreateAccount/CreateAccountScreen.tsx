import React, { useCallback, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import {
  CheckBoxField,
  CheckBoxGroup,
  CheckBoxGroupOption,
  CommonScrollView,
  Container,
  Header,
  Input,
  InputCode,
  OnboardAssistant,
  Text,
  TouchableText,
} from 'components';
import Theme from 'theme';
import { validations } from 'utils';
import { useFloatingAlert } from 'context';

interface Props {
  onSubmit: () => void;
}

const CreateAccountScreen: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const floatingAlert = useFloatingAlert();

  const pagerViewRef = useRef<PagerView>(null);

  const [acceptPrivacyNotice, setAcceptPrivacyNotice] = useState<boolean>(false);
  const [authorizeMarketing, setAuthorizeMarketing] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  const [code, setCode] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const [passwordChecks, setPasswordChecks] = useState<Array<CheckBoxGroupOption>>([
    { label: t('createAccount:atLeast8Characters'), selected: false },
    { label: t('createAccount:oneUppercaseLetter'), selected: false },
    { label: t('createAccount:oneNumber'), selected: false },
    { label: t('createAccount:oneSpecialCharacter'), selected: false },
  ]);

  const phoneValidation = (): boolean => {
    const validation = validations.phone(phone);
    if (validation.ok) {
      setPhoneError('');
      return true;
    }

    if (validation.error === 'required') setPhoneError(t('errors:required'));
    else setPhoneError(t('errors:invalidFormat'));

    return false;
  };

  const passwordValidation = useCallback((value: string): boolean => {
    const validation = validations.password(value);

    if (validation.error === 'required') setPasswordError(t('errors:enterPassword'));
    else {
      const hasValidLength = value.length >= 8;
      const hasUppercase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[@#$%&*+<>]/.test(value);

      const auxPasswordCheck = [...passwordChecks];
      auxPasswordCheck[0].selected = hasValidLength;
      auxPasswordCheck[1].selected = hasUppercase;
      auxPasswordCheck[2].selected = hasNumber;
      auxPasswordCheck[3].selected = hasSpecialChar;

      setPasswordChecks(auxPasswordCheck);
      if (hasValidLength && hasUppercase && hasNumber && hasSpecialChar) {
        setPasswordError('');
        return true;
      }

      setPasswordError(t('errors:passwordRequirements'));
    }

    return false;
  }, [passwordChecks, t]);

  const confirmPasswordValidation = (): boolean => {
    const validation = validations.confirmPassword(confirmPassword, password);

    if (validation.ok) {
      setConfirmPasswordError('');
      return true;
    }

    if (validation.error === 'required') setConfirmPasswordError(t('errors:enterPassword'));
    else setConfirmPasswordError(t('errors:passwordError'));
    return false;
  };

  return (
    <Container flex useKeyboard>
      <Header
        title=""
        ethosHeader
        showBackButton={currentPage > 0}
        backAction={() => pagerViewRef.current?.setPage(currentPage - 1)}
      />
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
            onPress={() => {
              floatingAlert.show({ message: t('createAccount:incorrectConfirmationCode'), type: 'error' });
              pagerViewRef.current?.setPage(3);
            }}
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
        <CommonScrollView>
          <OnboardAssistant
            title={t('createAccount:createPassword')}
            description={t('createAccount:pleaseEnterYourPassword')}
            messages={currentPage >= 3 ? [t('createAccount:phoneConfirmed')] : []}
            onPress={() => {
              floatingAlert.show({ message: t('errors:passwordError'), type: 'error' });
              onSubmit();
            }}
            buttonDisabled={!(!passwordChecks.find((option) => option.selected === false) && confirmPassword)}
          >
            <Container flex>
              <Input
                label={t('createAccount:password')}
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  passwordValidation(value);
                }}
                placeholder={t('createAccount:enterYourPassword')}
                passwordField
                marginTop={38}
                onSubmitEditing={() => passwordValidation(password)}
                error={passwordError}
              />
              <Input
                label={t('createAccount:confirmPassword')}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder={t('createAccount:confirmYourPassword')}
                passwordField
                marginTop={25}
                onSubmitEditing={() => confirmPasswordValidation()}
                error={confirmPasswordError}
              />

              <Container style={{ marginTop: 18 }}>
                <CheckBoxGroup
                  options={passwordChecks}
                  onChange={() => {}}
                  backgroundColor="transparent"
                  padding={0}
                  borderRadius={0.5}
                  textColor={Theme.Colors.DarkSoul}
                  disabled
                />
              </Container>
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
      </PagerView>
    </Container>
  );
};

export default CreateAccountScreen;
