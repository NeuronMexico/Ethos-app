import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, Input, Picker, Text,
} from 'components';
import Theme from 'theme';
import { TextInput } from 'react-native';
import { formatQuantity } from 'utils';

interface Props {
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const AmountSecondaryForm: React.FC<Props> = ({ onSubmit, onChange }: Props) => {
  const { t } = useTranslation();

  const amountRef = useRef<TextInput>(null);

  const [card, setCard] = useState<string>('1');
  const [amount, setAmount] = useState<string>('');

  return (
    <Container flex style={{ flexGrow: 1 }}>
      <Container center flex style={{ alignSelf: 'center' }}>
        <Text text={t('personalDisposition:desiredWithdrawalAmount')} />
        <Input
          ref={amountRef}
          value={amount}
          onChangeText={(text) => {
            setAmount(text);
            onChange(text);
          }}
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
        <Text
          text={t('personalDisposition:totalAmountToCharge', { amount: formatQuantity(Number(amount)) })}
          textAlign="center"
          textColor={Theme.Colors.Encore}
          fontSize={13}
          fontWeight="Medium"
          marginTop={8}
        />
      </Container>
      <Container flex style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Picker
          value={card}
          onValueChange={setCard}
          options={[{ label: '** *334', value: '1' }]}
          placeholder=""
          borderRadius={24}
          backgroundColor={Theme.Colors.PlaceboBlue}
          useActionSheet
          actionSheetTitle={t('transactions:myCreditCard')}
        />
        <Button
          label={t('global:continue')}
          onPress={onSubmit}
          marginTop={16}
        />
      </Container>
    </Container>
  );
};

export { AmountSecondaryForm };
