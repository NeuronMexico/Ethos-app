import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, Header, Input,
} from 'components';
import { TextInput } from 'react-native';
import { fieldValidation } from 'utils';
import Theme from 'theme';

interface Props {
  onSubmit: (data: any) => void;
}

const NewAccountScreen: React.FC<Props> = ({
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  const accountNumberRef = useRef<TextInput>(null);
  const bankRef = useRef<TextInput>(null);

  const [accountNumber, setAccountNumber] = useState<string>('');
  const [bank, setBank] = useState<string>('');

  const [accountNumberError, setAccountNumberError] = useState<string>('');
  const [bankError, setBankError] = useState<string>('');

  const accountValidation = (): boolean => fieldValidation('accountNumber', accountNumber, setAccountNumberError);
  const bankValidation = (): boolean => fieldValidation('bank', bank, setBankError);

  const submit = () => {
    const isValid = accountValidation() && bankValidation();

    if (isValid) {
      onSubmit({
        accountNumber,
        bank,
      });
    }
  };

  return (
    <Container flex>
      <Header title={t('contacts:newAccount')} />
      <Container flex style={{ marginTop: Theme.Sizes.MarginTop, paddingHorizontal: Theme.Sizes.Padding }}>
        <Input
          ref={accountNumberRef}
          value={accountNumber}
          onChangeText={setAccountNumber}
          error={accountNumberError}
          label={t('form:account')}
          keyboardType="numeric"
          onSubmitEditing={() => accountValidation() && bankRef.current?.focus()}
        />
        <Input
          ref={bankRef}
          value={bank}
          onChangeText={setBank}
          error={bankError}
          label={t('form:bank')}
          onSubmitEditing={() => bankValidation() && bankRef.current?.blur()}
        />
        <Button
          label={t('global:accept')}
          onPress={submit}
          marginTop={Theme.Sizes.Padding}
        />
      </Container>
    </Container>
  );
};

export default NewAccountScreen;
