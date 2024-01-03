import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/atoms/Container';
import { Input, Text } from 'components/atoms';
import { Button } from 'components/molecules/Button';
import Theme from 'theme';
import { validations } from 'utils';

interface Props {
  onPressContinue: () => void;
}

const ForgotPasswordForm: React.FC<Props> = ({
  onPressContinue = () => {},
}: Props) => {
  const { t } = useTranslation();

  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

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

  return (
    <Container flex style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
      <Text text="¿Olvidaste tu contraseña?" typography="header" fontSize={22} />
      <Text
        text="Ingresa tu usuario para confirmar tu cuenta"
        typography="caption"
        fontSize={14}
        marginTop={8}
        textColor={Theme.Colors.Encore}
      />
      <Container>
        <Input
          label={t('createAccount:phoneNumber')}
          value={phone}
          onChangeText={setPhone}
          mask="custom"
          options={{ mask: '+52 (999) 999 9999' }}
          placeholder={t('createAccount:enterYourPhoneNumber')}
          keyboardType="phone-pad"
          marginTop={38}
          onSubmitEditing={() => phoneValidation()}
          error={phoneError}
        />
      </Container>
      <Container flex style={{ flexGrow: 1, justifyContent: 'flex-end', marginBottom: Theme.Sizes.Padding }}>
        <Button
          label={t('global:continue')}
          onPress={onPressContinue}
        />
      </Container>
    </Container>
  );
};

export { ForgotPasswordForm };
