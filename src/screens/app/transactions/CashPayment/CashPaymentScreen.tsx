import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container, Header, Input, MultipleTextButton, Picker,
} from 'components';
import Theme from 'theme';
import { MapIcon, VisaIcon } from 'assets/svg';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  onSubmit: () => void;
  onPressEstablishments: () => void;
}

const CashPaymentScreen: React.FC<Props> = ({ onSubmit, onPressEstablishments }) => {
  const { t } = useTranslation();
  const amountRef = useRef<any>(null);
  const [amount, setAmount] = useState<string>('');
  const conceptRef = useRef<TextInput>(null);
  const [concept, setConcept] = useState<string>();

  return (
    <Container flex>
      <Header title={t('transactions:withdrawalWithoutCard')} showVirtualAssistantAction />
      <Container style={{ marginHorizontal: Theme.Sizes.Padding }}>
        <MultipleTextButton
          title={t('transactions:checkEstablishments')}
          borderColor={Theme.Colors.PlaceboBlue}
          borderRadius={24}
          marginTop={Theme.Sizes.MarginTop}
          alignContent="space-between"
          onPress={onPressEstablishments}
          icon={<Container style={styles.iconContainer}><MapIcon /></Container>}
        />
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
          ref={conceptRef}
          label={t('form:concept')}
          value={concept}
          onChangeText={setConcept}
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

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: Theme.Colors.PlaceboBlue,
  },
});

export default CashPaymentScreen;
