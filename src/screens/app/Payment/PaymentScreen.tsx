import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container, Header, Input, Text,
} from 'components';
import Theme from 'theme';

interface Props {
  onPressConfirm: () => void;
}

const PaymentScreen: React.FC<Props> = ({ onPressConfirm }) => {
  const { t } = useTranslation();

  const [amount, setAmount] = useState<string>('0.00');

  return (
    <Container flex useKeyboard keyboardVerticalOffset={65}>
      <Header title={t('cards:cashPayment')} />

      <Container flex style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: Theme.Sizes.MarginTop }}>
        <Text text={t('cards:desiredDepositAmount')} textAlign="center" typography="header" fontWeight="Regular" />

        <Container flex style={{ alignSelf: 'center' }}>
          <Input
            value={amount}
            onChangeText={setAmount}
            placeholder="$0.00"
            width="auto"
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
            autoFocus
            keyboardType="numeric"
            minWidth={100}
          />
        </Container>

        <Button label={t('global:confirm')} onPress={onPressConfirm} marginVertical={24} />
      </Container>
    </Container>
  );
};

export default PaymentScreen;
