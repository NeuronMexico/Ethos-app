import React, { useState } from 'react';
import { Button, Container, Input } from 'components';
import { useTranslation } from 'react-i18next';
import { validations } from 'utils';

interface Props {
  onSubmit: () => void;
}

const CardForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<string>('');

  const cardNumberValidation = (): boolean => {
    const validation = validations.integer(cardNumber.replace(' ', ''));
    if (validation.ok) {
      setCardNumberError('');
      return true;
    }

    if (validation.error === 'required') setCardNumberError(t('errors:required'));
    else setCardNumberError(t('errors:invalidFormat'));

    return false;
  };

  return (
    <Container flex>
      <Input
        placeholder="**** ****"
        value={cardNumber}
        onChangeText={setCardNumber}
        autoComplete="cc-number"
        keyboardType="numeric"
        error={cardNumberError}
        mask="credit-card"
        options={{ issuer: 'visa-or-mastercard' }}
        maxLength={9}
        onSubmitEditing={() => cardNumberValidation()}
      />

      <Container flex alignment="end">
        <Button label={t('cards:activate')} onPress={onSubmit} marginVertical={16} />
      </Container>
    </Container>
  );
};

export { CardForm };
