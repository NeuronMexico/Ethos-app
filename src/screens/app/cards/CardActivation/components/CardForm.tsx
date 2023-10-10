import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { Button, Container, Input } from 'components';
import { useTranslation } from 'react-i18next';
import { validations } from 'utils';

interface Props {
  onSubmit: () => void;
}

const CardForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const expirationDateRef = useRef<any>(null);
  const securityCodeRef = useRef<TextInput>(null);

  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<string>('');

  const [expirationDate, setExpirationDate] = useState<string>('');
  const [expirationDateError, setExpirationDateError] = useState<string>('');

  const [securityCode, setSecurityCode] = useState<string>('');
  const [securityCodeError, setSecurityCodeError] = useState<string>('');

  const cardNumberValidation = (): boolean => {
    const validation = validations.cardNumber(cardNumber);
    if (validation.ok) {
      setCardNumberError('');
      return true;
    }

    if (validation.error === 'required') setCardNumberError(t('errors:required'));
    else setCardNumberError(t('errors:invalidFormat'));

    return false;
  };

  const expirationDateValidation = (): boolean => {
    const validation = validations.cardExpirationDate(expirationDate);
    if (validation.ok) {
      setExpirationDateError('');
      return true;
    }

    if (validation.error === 'required') setExpirationDateError(t('errors:required'));
    else setExpirationDateError(t('errors:invalidFormat'));

    return false;
  };

  const securityCodeValidation = (): boolean => {
    const validation = validations.integer(securityCode);
    if (validation.ok) {
      setSecurityCodeError('');
      return true;
    }

    if (validation.error === 'required') setSecurityCodeError(t('errors:required'));
    else setSecurityCodeError(t('errors:invalidFormat'));

    return false;
  };

  return (
    <Container flex>
      <Input
        label={t('cards:cardNumber')}
        placeholder="**** **** **** ****"
        value={cardNumber}
        onChangeText={setCardNumber}
        autoComplete="cc-number"
        blurOnSubmit={false}
        keyboardType="numeric"
        error={cardNumberError}
        mask="credit-card"
        options={{ issuer: 'visa-or-mastercard' }}
        maxLength={19}
        onSubmitEditing={() => cardNumberValidation() && expirationDateRef.current?.getElement()?.focus()}
      />
      <Container row>
        <Container flex style={{ marginRight: 9 }}>
          <Input
            ref={expirationDateRef}
            label={t('cards:expirationDate')}
            placeholder="** / **"
            value={expirationDate}
            onChangeText={setExpirationDate}
            autoComplete="cc-exp"
            blurOnSubmit={false}
            keyboardType="numeric"
            error={expirationDateError}
            mask="datetime"
            options={{ format: 'MM / YY' }}
            maxLength={7}
            onSubmitEditing={() => expirationDateValidation() && securityCodeRef.current?.focus()}
          />
        </Container>
        <Container flex style={{ marginLeft: 9 }}>
          <Input
            ref={securityCodeRef}
            label={t('cards:securityCode')}
            placeholder="***"
            value={securityCode}
            onChangeText={setSecurityCode}
            autoComplete="cc-csc"
            blurOnSubmit={false}
            keyboardType="numeric"
            maxLength={3}
            error={securityCodeError}
            onSubmitEditing={() => securityCodeValidation() && securityCodeRef.current?.blur()}
          />
        </Container>
      </Container>

      <Container flex alignment="end">
        <Button label={t('cards:activate')} onPress={onSubmit} marginVertical={16} />
      </Container>
    </Container>
  );
};

export { CardForm };
