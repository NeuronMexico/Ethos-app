import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';

import { VisaIcon } from 'assets/svg';
import Theme from 'theme';
import {
  Button, Container, Input, Picker,
} from 'components';
import { formatQuantity } from 'utils';

interface Props {
  onSubmit: (data: any) => void;
}

const PaymentCollectQRForm: React.FC<Props> = ({
  onSubmit = () => {},
}: Props) => {
  const { t } = useTranslation();

  const amountRef = useRef<TextInput>(null);

  const [card, setCard] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [concept, setConcept] = useState<string>('');

  const submit = () => {
    onSubmit({
      card,
      amount,
      concept,
    });
  };

  return (
    <Container flex>
      <Picker
        title="TDC ethoscrédito"
        label={t('form:cardWhereYouWantToReceive')}
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
      <Container style={{
        flexGrow: 1,
        justifyContent: 'flex-end',
      }}
      >
        <Button
          label={t('global:continue')}
          onPress={submit}
          marginTop={24}
          marginBottom={24}
        />
      </Container>
    </Container>
  );
};

export { PaymentCollectQRForm };
