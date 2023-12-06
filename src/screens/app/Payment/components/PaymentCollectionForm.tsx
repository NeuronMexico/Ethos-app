import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, DateTimePicker, Input, Picker, ProfilePhoto, SwitchField,
} from 'components';
import Theme from 'theme';
import { VisaIcon } from 'assets/svg';

interface Props {
  onSubmit: () => void;
  destinationAccount?: { account: string, bank: string, name: string };
}

const PaymentCollectionForm: React.FC<Props> = ({
  onSubmit,
  destinationAccount,
}: Props) => {
  const { t } = useTranslation();

  const referenceRef = useRef<TextInput>(null);
  const conceptRef = useRef<TextInput>(null);
  const amountRef = useRef<any>(null);

  const [account, setAccount] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [reference, setReference] = useState<string>();
  const [concept, setConcept] = useState<string>();
  const [schedule, setSchedule] = useState<Date>();
  const [scheduleTransaction, setScheduleTransaction] = useState<boolean>(false);

  return (
    <Container>
      <Picker
        title={destinationAccount?.name}
        label={t('transactions:WhoDoYouWantToSendMoney')}
        options={[
          { label: 'Santander', value: '*** 3123' },
          { label: 'Banco Azteca', value: '*** 1312' },
          { label: 'Ethoscrédito', value: '*** 4323' },
          { label: 'Ethosmedsalud', value: '*** 1234' },
        ]}
        placeholder=""
        borderRadius={24}
        backgroundColor={Theme.Colors.DrWhite}
        prefixIcon={(
          <ProfilePhoto
            size={36}
            fadeIn
            info={{
              // eslint-disable-next-line max-len
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
            bottomStyle={{ marginVertical: 'auto' }}
          />
        )}
        useActionSheet
        actionSheetTitle={t('transactions:whatCard')}
        caption={account}
        marginLeft={24}
        value={account}
        onValueChange={setAccount}
        labelWithValue
      />
      {
        destinationAccount && (
          <Picker
            title="TDC ethoscrédito"
            label={t('transactions:myCreditCard')}
            options={[{ label: '**** **** **** 4531', value: '1', caption: 'hey' }]}
            placeholder=""
            borderRadius={24}
            backgroundColor={Theme.Colors.DrWhite}
            prefixIcon={<VisaIcon />}
            useActionSheet
            actionSheetTitle={t('transactions:myCreditCard')}
            caption="**** **** **** 4531"
            marginLeft={24}
            value="$16,801.08"
            onValueChange={() => {}}
          />
        )
      }
      <Input
        ref={amountRef}
        label={t('transactions:amount')}
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
        autoFocus
      />
      <Input
        ref={referenceRef}
        label={t('form:reference')}
        value={reference}
        onChangeText={setReference}
      />
      <Input
        ref={conceptRef}
        label={t('form:concept')}
        value={concept}
        onChangeText={setConcept}
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
      <Button
        label={t('global:continue')}
        onPress={onSubmit}
        marginTop={16}
      />
    </Container>
  );
};

export { PaymentCollectionForm };
