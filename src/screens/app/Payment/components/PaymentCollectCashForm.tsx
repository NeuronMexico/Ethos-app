import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';

import { MapIcon, VisaIcon } from 'assets/svg';
import {
  Button, Container, Input, MultipleTextButton, Picker,
} from 'components';
import Theme from 'theme';
import { formatQuantity } from 'utils';

interface Props {
  onSubmit: (data: any) => void;
  onPressEstablishments: () => void;
}

const PaymentCollectCashForm: React.FC<Props> = ({
  onSubmit = () => {},
  onPressEstablishments = () => {},
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
      <MultipleTextButton
        title={t('transactions:checkEstablishments')}
        borderColor={Theme.Colors.PlaceboBlue}
        borderRadius={24}
        marginTop={Theme.Sizes.MarginTop}
        alignContent="space-between"
        onPress={onPressEstablishments}
        icon={<Container style={styles.iconContainer}><MapIcon /></Container>}
      />
      <Container style={{ height: 1, backgroundColor: Theme.Colors.PlaceboBlue, marginTop: 16 }} />
      <Picker
        title="TDC ethoscrédito"
        label={t('form:cardWhereTouWantToReceiveCollect')}
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
      <Container style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <Button
          label={t('global:continue')}
          onPress={submit}
          marginVertical={16}
        />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
});

export { PaymentCollectCashForm };
