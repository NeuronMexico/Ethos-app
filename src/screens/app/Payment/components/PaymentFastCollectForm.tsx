import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import {
  Button, Container, DateTimePicker, Input, Picker, SwitchField,
} from 'components';
import Theme from 'theme';
import { VisaIcon } from 'assets/svg';
import { formatQuantity } from 'utils';

interface Props {
  onSubmit: (data: any) => void;
}

const PaymentFastCollectForm: React.FC<Props> = ({
  onSubmit = () => {},
}: Props) => {
  const { t } = useTranslation();

  const amountRef = useRef<TextInput>(null);

  const [account, setAccount] = useState<string>('');
  const [save, setSave] = useState<boolean>(true);
  const [card, setCard] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [concept, setConcept] = useState<string>('');
  const [reference, setReference] = useState<string>('');
  const [schedule, setSchedule] = useState<Date>();
  const [scheduleTransaction, setScheduleTransaction] = useState<boolean>(true);

  const submit = () => {
    onSubmit({
      account,
      card,
      amount,
      concept,
      reference,
      schedule,
      scheduleTransaction,
    });
  };

  return (
    <Container flex>
      <Container style={{ marginVertical: 24 }}>
        <Input
          label={t('form:CCethos')}
          onChangeText={setAccount}
          value={account}
          keyboardType="number-pad"
        />
      </Container>
      <SwitchField
        label={t('transactions:saveToContacts')}
        active={save}
        onChange={setSave}
      />
      <Picker
        title="TDC ethoscrédito"
        label={t('form:cardWhereYouWantToReceiveDeposit')}
        options={[
          { label: 'Santander', value: '*** 3123' },
        ]}
        placeholder=""
        borderRadius={24}
        backgroundColor={Theme.Colors.DrWhite}
        prefixIcon={(
          <VisaIcon />
        )}
        useActionSheet
        actionSheetTitle={t('transactions:whatCard')}
        caption="**** **** **** 4531"
        marginLeft={24}
        value={formatQuantity(16801.08)}
        onValueChange={setCard}
        labelWithValue
      />
      <Container style={{ height: 1, backgroundColor: Theme.Colors.PlaceboBlue, marginTop: 16 }} />
      <Input
        ref={amountRef}
        label={t('form:howMuchWantToCollect')}
        value={amount}
        onChangeText={setAmount}
        placeholder="$0.00 (MXN)"
        material
        fontSize={34}
        fontWeight="Bold"
        paddingVertical={0}
        marginTop={24}
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
      />
      <Input
        label={t('form:concept')}
        placeholder={t('form:concept')}
        onChangeText={setConcept}
        value={concept}
        marginTop={24}
      />
      <Input
        label={t('form:reference')}
        placeholder={t('form:reference')}
        onChangeText={setReference}
        value={reference}
        marginTop={24}
      />
      <DateTimePicker
        label={t('transactions:whenYouRealize')}
        value={schedule}
        onValueChange={setSchedule}
        placeholder={t('transactions:pickDate')}
        marginTop={16}
      />
      <SwitchField
        label={t('transactions:scheduleTransaction')}
        active={scheduleTransaction}
        onChange={setScheduleTransaction}
      />
      <Container style={{ marginTop: 32 }}>
        <Button
          label={t('global:continue')}
          onPress={submit}
          marginVertical={16}
        />
      </Container>
    </Container>
  );
};

export { PaymentFastCollectForm };