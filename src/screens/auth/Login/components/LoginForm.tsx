import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';

import {
  Button, Container, Input, Text, TouchableText,
} from 'components';
import Theme from 'theme';
import { validations } from 'utils';
import { FaceIDIcon } from 'assets/svg';

interface Props {
  onPressForgotPassword: () => void;
  onPressLogin: () => void;
  onPressBiometricLogin: () => void;
  onPressRegister: () => void;
  onPressTerms: () => void;
  onPressPrivacy: () => void;
}

const LoginForm: React.FC<Props> = ({
  onPressForgotPassword,
  onPressLogin,
  onPressBiometricLogin,
  onPressRegister,
  onPressTerms,
  onPressPrivacy,
}: Props) => {
  const { t } = useTranslation();

  const phoneNumberRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const phoneValidation = (): boolean => {
    const validation = validations.phone(phoneNumber);

    if (validation.ok) {
      setPhoneNumberError('');
      return true;
    }

    if (validation.error === 'invalid-format') {
      setPhoneNumberError(t('global:invalidFormat'));
      return false;
    }

    setPhoneNumberError(t('global:required'));
    return false;
  };

  const passwordValidation = (): boolean => {
    const validation = validations.password(password);
    if (validation.ok) {
      setPasswordError('');
      return true;
    }

    if (validation.error === 'required') setPasswordError(t('signUp:enterPassword'));
    else setPasswordError(t('signUp:passwordTooShort'));

    return false;
  };

  const onSubmit = () => {
    const phoneOk = phoneValidation();
    const passwordOk = passwordValidation();

    if (phoneOk && passwordOk) onPressLogin();
  };

  return (
    <Container flex>
      <Text
        text={t('login:welcomeTitle')}
        textAlign="center"
        typography="title"
        marginTop={Theme.Sizes.MarginTop * 2}
      />
      <Container style={{ marginVertical: 32 }}>
        <Input
          ref={phoneNumberRef}
          label={t('form:phone')}
          placeholder={t('form:phoneCaption')}
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
          onSubmitEditing={() => phoneValidation() && passwordRef.current?.blur()}
          returnKeyType="next"
          keyboardType="phone-pad"
          error={phoneNumberError}
        />
        <Input
          ref={passwordRef}
          label={t('form:password')}
          placeholder={t('form:passwordCaption')}
          value={password}
          onChangeText={(value) => setPassword(value)}
          onSubmitEditing={() => passwordValidation() && onSubmit()}
          returnKeyType="done"
          passwordField
          error={passwordError}
        />
        <Container style={{ alignItems: 'flex-end', marginTop: 12 }}>
          <TouchableText
            text={t('login:forgotPassword')}
            onPress={onPressForgotPassword}
            fontWeight="Medium"
            underline
          />
        </Container>
      </Container>
      <Container>
        <Button
          label={t('global:join')}
          onPress={onPressLogin}
          disabled={phoneNumber === '' || password === ''}
        />
        <Button
          label={t('login:loginBiometric')}
          onPress={onPressBiometricLogin}
          marginTop={16}
          marginBottom={24}
          backgroundColor={Theme.Colors.WhiteSmoke}
          textColor={Theme.Colors.DarkSoul}
          icon={<FaceIDIcon color={Theme.Colors.DarkSoul} />}
        />
      </Container>
      <Container center flex style={{ marginVertical: 24 }}>
        <Text textAlign="center">
          <Text
            text={`${t('login:notHaveAccount')}, `}
            textAlign="right"
          />
          <TouchableText
            text={t('login:signMe')}
            textAlign="left"
            onPress={onPressRegister}
            fontWeight="Medium"
            underline
          />
        </Text>
      </Container>
      <Container center>
        <Text textAlign="center">
          <Text text={`${t('login:acceptTerms')} `} />
          <TouchableText
            text={t('login:termsAndConditions')}
            onPress={onPressTerms}
            fontWeight="Medium"
            underline
          />
          <Text text={` ${t('login:and')} `} />
          <TouchableText
            text={t('login:privacyNotice')}
            textAlign="center"
            onPress={onPressPrivacy}
            fontWeight="Medium"
            underline
          />
        </Text>
      </Container>
    </Container>
  );
};

export default LoginForm;
