import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button, Container, Input, Text,
} from 'components';
import Theme from 'theme';
import { TextInput } from 'react-native';

interface Props {
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const AmountPrimaryForm: React.FC<Props> = ({ onSubmit, onChange }: Props) => {
  const { t } = useTranslation();

  const amountRef = useRef<TextInput>(null);
  const [amount, setAmount] = useState<string>('');

  return (
    <Container flex style={{ flexGrow: 1 }}>
      <Container flex style={{ alignSelf: 'center' }}>
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
          text={t('form:amount')}
          textAlign="center"
          textColor={Theme.Colors.Encore}
          fontSize={13}
          fontWeight="Medium"
          marginTop={8}
        />
      </Container>
      <Container flex style={{ width: '100%', justifyContent: 'flex-end', marginBottom: 16 }}>
        <Text
          text="Cuentas con $66,043.00 en tu TDC"
          textAlign="center"
          textColor={Theme.Colors.Encore}
          fontSize={13}
          fontWeight="Medium"
          marginBottom={16}
        />
        <Button
          label={t('global:continue')}
          onPress={onSubmit}
        />
      </Container>
    </Container>
  );
};

export { AmountPrimaryForm };
