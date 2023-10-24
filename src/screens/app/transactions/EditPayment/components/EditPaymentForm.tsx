import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container, DateTimePicker, Input, Picker,
} from 'components';
import Theme from 'theme';
import { VisaIcon } from 'assets/svg';
import { PAYMENT_TYPES, validations } from 'utils';

interface Props {
  onSubmit: () => void;
}

const EditPaymentForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const conceptRef = useRef<TextInput>(null);
  const referenceRef = useRef<TextInput>(null);

  const [card, setCard] = useState<string>('1');
  const [cardError, setCardError] = useState<string>('');

  const [amount, setAmount] = useState<string>('');
  const [amountError, setAmountError] = useState<string>('');

  const [concept, setConcept] = useState<string>('');
  const [conceptError, setConceptError] = useState<string>('');

  const [reference, setReference] = useState<string>('');
  const [referenceError, setReferenceError] = useState<string>('');

  const [paymentType, setPaymentType] = useState<string>(PAYMENT_TYPES[0].value);
  const [paymentTypeError, setPaymentTypeError] = useState<string>('');

  const [schedule, setSchedule] = useState<Date>();
  const [scheduleError, setScheduleError] = useState<string>('');

  const cardValidation = (): boolean => {
    const validation = validations.required(card);
    if (validation.ok) {
      setCardError('');
      return true;
    }

    setCardError(t('errors:required'));
    return false;
  };

  const amountValidation = (): boolean => {
    const validation = validations.float(amount.replace('$', '').replaceAll(',', ''));
    if (validation.ok) {
      setAmountError('');
      return true;
    }

    if (validation.error === 'required') setAmountError(t('errors:required'));
    else setAmountError(t('errors:invalidFormat'));

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

  const paymentTypeValidation = (): boolean => {
    const validation = validations.required(paymentType);
    if (validation.ok) {
      setPaymentTypeError('');
      return true;
    }

    setPaymentTypeError(t('errors:required'));
    return false;
  };

  const scheduleValidation = (): boolean => {
    if (schedule) {
      setScheduleError('');
      return true;
    }

    setScheduleError(t('errors:required'));
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
        label={t('transactions:amount')}
        placeholder="$"
        value={amount}
        onChangeText={setAmount}
        mask="money"
        options={{
          precision: 2,
          separator: '.',
          delimiter: ',',
          unit: '$',
          suffixUnit: '',
        }}
        keyboardType="decimal-pad"
        blurOnSubmit={false}
        onSubmitEditing={() => amountValidation() && conceptRef.current?.focus()}
        error={amountError}
      />
      <Input
        ref={conceptRef}
        label={t('transactions:concept')}
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
        label={t('transactions:reference')}
        placeholder=""
        value={reference}
        onChangeText={setReference}
        keyboardType="number-pad"
        blurOnSubmit={false}
        onSubmitEditing={() => referenceValidation() && referenceRef.current?.blur()}
        error={referenceError}
      />
      <Picker
        label={t('transactions:paymentType')}
        value={paymentType}
        onValueChange={setPaymentType}
        options={PAYMENT_TYPES}
        placeholder=""
        borderRadius={24}
        useActionSheet
        error={paymentTypeError}
      />
      <DateTimePicker
        label={t('transactions:scheduleTransaction')}
        value={schedule}
        onValueChange={setSchedule}
        placeholder=""
        error={scheduleError}
      />
      <Button label={t('global:continue')} onPress={onSubmit} marginVertical={16} />
    </Container>
  );
};

export { EditPaymentForm };
