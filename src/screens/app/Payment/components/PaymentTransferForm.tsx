import { VisaIcon } from 'assets/svg';
import {
  Button,
  CheckBoxField, Container, DateTimePicker, Input, Picker, Text,
} from 'components';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Theme from 'theme';
import { validations } from 'utils';

interface Props {
  onSubmit: () => void;
}

const PaymentTransferForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const { t } = useTranslation();

  const lastNameRef = useRef<TextInput>(null);
  const middleNameRef = useRef<TextInput>(null);
  const cardNumberRef = useRef<any>(null);
  const bankRef = useRef<TextInput>(null);
  const conceptRef = useRef<TextInput>(null);
  const referenceRef = useRef<TextInput>(null);

  const [card, setCard] = useState<string>('1');
  const [cardError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');

  const [middleName, setMiddleName] = useState<string>('');
  const [middleNameError, setMiddleNameError] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<string>('');

  const [bank, setBank] = useState<string>('');
  const [bankError, setBankError] = useState<string>('');
  const [concept, setConcept] = useState<string>('');
  const [conceptError, setConceptError] = useState<string>('');

  const [reference, setReference] = useState<string>('');
  const [referenceError, setReferenceError] = useState<string>('');
  const [schedule, setSchedule] = useState<Date>();
  const [scheduleTransaction, setScheduleTransaction] = useState<boolean>(false);

  const nameValidation = (): boolean => {
    const validation = validations.alphabet(name);
    if (validation.ok) {
      setNameError('');
      return true;
    }

    if (validation.error === 'required') setNameError(t('errors:required'));
    else setNameError(t('errors:invalidFormat'));

    return false;
  };

  const lastNameValidation = (): boolean => {
    const validation = validations.alphabet(lastName);
    if (validation.ok) {
      setLastNameError('');
      return true;
    }

    if (validation.error === 'required') setLastNameError(t('errors:required'));
    else setLastNameError(t('errors:invalidFormat'));

    return false;
  };

  const middleNameValidation = (): boolean => {
    const validation = validations.alphabet(middleName);
    if (validation.ok) {
      setMiddleNameError('');
      return true;
    }

    if (validation.error === 'required') setMiddleNameError(t('errors:required'));
    else setMiddleNameError(t('errors:invalidFormat'));

    return false;
  };

  const cardNumberValidation = (): boolean => {
    let validation = validations.cardNumber(cardNumber);
    if (validation.ok) {
      setCardNumberError('');
      return true;
    }

    validation = validations.clabeNumber(cardNumber);
    if (validation.ok) {
      setCardNumberError('');
      return true;
    }

    if (validation.error === 'required') setCardNumberError(t('errors:required'));
    else setCardNumberError(t('errors:invalidFormat'));

    return false;
  };

  const bankValidation = (): boolean => {
    const validation = validations.alphabet(bank);
    if (validation.ok) {
      setBankError('');
      return true;
    }

    if (validation.error === 'required') setBankError(t('errors:required'));
    else setBankError(t('errors:invalidFormat'));

    return false;
  };

  const conceptValidation = (): boolean => {
    const validation = validations.alphabet(concept);
    if (validation.ok) {
      setConceptError('');
      return true;
    }

    if (validation.error === 'required') setConceptError(t('errors:required'));
    else setConceptError(t('errors:invalidFormat'));

    return false;
  };

  const referenceValidation = (): boolean => {
    const validation = validations.integer(reference);
    if (validation.ok) {
      setReferenceError('');
      return true;
    }

    if (validation.error === 'required') setReferenceError(t('errors:required'));
    else setReferenceError(t('errors:invalidFormat'));

    return false;
  };

  return (
    <Container>
      <Picker
        label={t('transactions:myCreditCard')}
        value={card}
        onValueChange={setCard}
        options={[{ label: '2844 2388 4363 4531', value: '1' }]}
        placeholder=""
        borderRadius={24}
        backgroundColor={Theme.Colors.PlaceboBlue}
        prefixIcon={<VisaIcon />}
        useActionSheet
        actionSheetTitle={t('transactions:myCreditCard')}
        error={cardError}
      />
      <Input
        label={t('form:names')}
        placeholder=""
        value={name}
        onChangeText={setName}
        autoCorrect
        autoComplete="given-name"
        autoCapitalize="words"
        blurOnSubmit={false}
        onSubmitEditing={() => nameValidation() && lastNameRef.current?.focus()}
        error={nameError}
      />
      <Input
        ref={lastNameRef}
        label={t('form:firstLastName')}
        placeholder=""
        value={lastName}
        onChangeText={setLastName}
        autoCorrect
        autoComplete="family-name"
        autoCapitalize="words"
        blurOnSubmit={false}
        onSubmitEditing={() => lastNameValidation() && middleNameRef.current?.focus()}
        error={lastNameError}
      />
      <Input
        ref={middleNameRef}
        label={t('form:secondLastName')}
        placeholder=""
        value={middleName}
        onChangeText={setMiddleName}
        autoCorrect
        autoComplete="family-name"
        autoCapitalize="words"
        blurOnSubmit={false}
        onSubmitEditing={() => middleNameValidation() && cardNumberRef.current?.focus()}
        error={middleNameError}
      />
      <Input
        ref={cardNumberRef}
        label={t('form:account')}
        placeholder=""
        value={cardNumber}
        onChangeText={setCardNumber}
        autoComplete="cc-number"
        keyboardType="numeric"
        error={cardNumberError}
        mask="custom"
        options={{ mask: '9999 9999 9999 999999' }}
        maxLength={21}
        blurOnSubmit={false}
        marginTop={4}
        onSubmitEditing={() => cardNumberValidation() && bankRef.current?.focus()}
        prefixIcon={cardNumber.length === 21 ? <Text text="CLABE" typography="caption" /> : undefined}
      />
      <Input
        ref={bankRef}
        label={t('form:bank')}
        placeholder=""
        value={bank}
        onChangeText={setBank}
        autoCapitalize="words"
        blurOnSubmit={false}
        onSubmitEditing={() => bankValidation() && conceptRef.current?.focus()}
        error={bankError}
      />
      <Input
        ref={conceptRef}
        label={t('form:concept')}
        placeholder=""
        value={concept}
        onChangeText={setConcept}
        autoCorrect
        autoCapitalize="sentences"
        blurOnSubmit={false}
        onSubmitEditing={() => conceptValidation() && referenceRef.current?.focus()}
        error={conceptError}
      />
      <Input
        ref={referenceRef}
        label={t('form:reference')}
        placeholder=""
        value={reference}
        onChangeText={setReference}
        keyboardType="number-pad"
        blurOnSubmit={false}
        onSubmitEditing={() => referenceValidation() && referenceRef.current?.blur()}
        error={referenceError}
      />
      <CheckBoxField
        label={t('transactions:scheduleTransaction')}
        selected={scheduleTransaction}
        onChange={setScheduleTransaction}
        marginVertical={12}
      />

      <Collapsible collapsed={(!schedule) && !scheduleTransaction}>
        <DateTimePicker
          label={t('transactions:scheduleTransaction')}
          value={schedule}
          onValueChange={setSchedule}
          placeholder={t('transactions:pickDate')}
          marginTop={16}
        />
      </Collapsible>

      <Button
        label={t('global:continue')}
        onPress={onSubmit}
        marginTop={16}
      />
    </Container>
  );
};

export { PaymentTransferForm };
