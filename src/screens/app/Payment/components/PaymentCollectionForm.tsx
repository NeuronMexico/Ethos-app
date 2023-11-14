import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import Collapsible from 'react-native-collapsible';

import {
  Button, CheckBoxField, Container, DateTimePicker, Input, Picker, Text,
} from 'components';
import Theme from 'theme';

interface Props {
  onSubmit: () => void;
  destinationAccount?: { account: string, bank: string };
  enableScheduleTransaction?: boolean;
}

const PaymentCollectionForm: React.FC<Props> = ({
  onSubmit,
  destinationAccount,
  enableScheduleTransaction = false,
}: Props) => {
  const { t } = useTranslation();

  const referenceRef = useRef<TextInput>(null);
  const conceptRef = useRef<TextInput>(null);

  const [account, setAccount] = useState<string>('');
  const [reference, setReference] = useState<string>();
  const [concept, setConcept] = useState<string>();
  const [schedule, setSchedule] = useState<Date>();
  const [scheduleTransaction, setScheduleTransaction] = useState<boolean>(false);

  return (
    <Container>
      <Picker
        label={t('form:accountWhereChargesWillBeMade')}
        options={[{ label: '** *334', value: '1' }]}
        placeholder=""
        value={account}
        onValueChange={setAccount}
        borderRadius={24}
        backgroundColor={Theme.Colors.PlaceboBlue}
        useActionSheet
        actionSheetTitle={t('transactions:myCreditCard')}
        caption={t('form:clabe')}
      />
      {
        destinationAccount && (
          <Container style={{ marginVertical: 8 }}>
            <Text
              text={t('form:destinationAccount')}
              textColor={Theme.Colors.Carbon}
              fontSize={11}
              fontWeight="Medium"
              marginBottom={4}
            />
            <Container style={{
              paddingHorizontal: 16,
              backgroundColor: Theme.Colors.PlaceboBlue,
              paddingVertical: 12,
              borderRadius: 24,
            }}
            >
              <Text text={destinationAccount.account} fontWeight="Bold" />
              <Text text={destinationAccount.bank} fontSize={13} />
            </Container>
          </Container>
        )
      }
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
      {enableScheduleTransaction && !schedule && (
        <CheckBoxField
          label={t('transactions:scheduleTransaction')}
          selected={scheduleTransaction}
          onChange={setScheduleTransaction}
          marginVertical={12}
        />
      )}

      <Collapsible collapsed={(!schedule) && !scheduleTransaction}>
        <DateTimePicker
          label={t('transactions:scheduleTransaction')}
          value={schedule}
          onValueChange={setSchedule}
          placeholder={t('transactions:pickDate')}
          marginTop={enableScheduleTransaction ? 16 : 0}
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

export { PaymentCollectionForm };
