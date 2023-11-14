import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container, Header, Input, Picker, Text,
} from 'components';
import Theme from 'theme';
import { PaymentFlowType, formatQuantity } from 'utils';

interface Props {
  onPressConfirm: () => void;
  flow: PaymentFlowType;
  title: string;
  buttonLabel: string;
}

const PaymentScreen: React.FC<Props> = ({
  onPressConfirm,
  flow,
  title,
  buttonLabel,
}) => {
  const { t } = useTranslation();

  const [card, setCard] = useState<string>('1');
  const [amount, setAmount] = useState<string>('0.00');

  return (
    <Container flex useKeyboard keyboardVerticalOffset={65}>
      <Header title={title} />

      <Container flex style={{ paddingHorizontal: Theme.Sizes.Padding, marginTop: Theme.Sizes.MarginTop }}>
        {flow === 'code-payment' && (
        <Picker
          label={t('transactions:myCreditCard')}
          value={card}
          onValueChange={setCard}
          options={[{ label: '** *334', value: '1' }]}
          placeholder=""
          borderRadius={24}
          backgroundColor={Theme.Colors.PlaceboBlue}
          useActionSheet
          actionSheetTitle={t('transactions:myCreditCard')}
          caption={t('form:clabe')}
        />
        )}

        {flow !== 'contact-payment' && (
        <Text
          text={t(flow === 'code-payment' ? 'transactions:amount' : 'cards:desiredDepositAmount')}
          textAlign="center"
          typography="header"
          fontWeight="Regular"
          marginTop={flow === 'code-payment' ? 32 : 0}
        />
        )}

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
          {flow === 'contact-payment' && (
          <Text
            text={t('transactions:amountToPay')}
            typography="caption"
            fontWeight="Medium"
            textAlign="center"
            textColor={Theme.Colors.Encore}
            marginTop={8}
          />
          )}
        </Container>

        {flow === 'contact-payment' && (
        <Text
          text={t('transactions:youHave', { amount: formatQuantity(66043) })}
          typography="caption"
          fontWeight="Medium"
          textAlign="center"
          textColor={Theme.Colors.Encore}
          marginTop={8}
        />
        )}

        <Button label={buttonLabel} onPress={onPressConfirm} marginVertical={24} />
      </Container>
    </Container>
  );
};

export default PaymentScreen;
